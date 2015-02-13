#!/usr/bin/env node

'use strict';

var commander = require('commander');
var changelog = require('conventional-changelog');
var fs = require('fs');
var path = require('path');
var pkg = require(path.resolve(process.cwd(), 'package.json'));
var version = pkg.version;
var repository = getPackageRepository(pkg);
var file = path.resolve(process.cwd(), 'CHANGELOG.md');

function getPackageRepository (pkg) {

    var repo = pkg.repository && pkg.repository.url || pkg.repository;

    if (typeof repo !== 'string') {
        return null;
    }

    //Change git://github.com/a/b.git to http://github.com/a/b
    return repo.replace(/\.git$/, '').replace(/^git\:/, 'http:');

}

commander
    .option('-r, --repository <repository>', 'hosting repository [github, bitbucket]', 'github')
    .parse(process.argv);

var options = {
    // prepend: true,
    file: file,
    repository: repository,
    version: version
};

if (commander.repository === 'bitbucket') {

    options.commitLink = function (commitHash) {
        return repository + '/commits/' + commitHash;
    };
    options.issueLink = function (issueId) {
        return repository + '/issue/' + issueId;
    };

}

changelog(options, function(err, log) {

    if (err) {
        console.log(err);
        return process.exit(1);
    }

    fs.writeFileSync(file, log);
    process.exit(0);

});
