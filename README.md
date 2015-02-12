# README #

### How do I get set up? ###

1. `git clone git@bitbucket.org:teraficboilerplates/boilerplate-node-module.git`
2. `cd boilerplate-node-module`
3. update name, description and author fields in package.json
4. update {git_repo_url} in readme.hbs
5. `git remote rm origin`
6. `git remote add origin {my.repo.git.path}`  
7. `git tag | xargs git tag -d`
8. `git push -u origin master`
9. `npm install`
10. `npm run` to get a list of all available scripts. to run a script call `npm run script_name`. read about the [npm scripts](https://docs.npmjs.com/misc/scripts)

** This README.md will be overidden by the readme.hbs template when the docs task will run. **  
** You can add custom stuff to the readme.hbs template before the {{>main}} **

### Relevant Tasks ###

* `npm test` - run all unit tests + checks code's lint and style
* `npm run release` - checks code's lint and style + run tests + generates docs and changelog + update version + create git tag + push the updates to the server
* `npm run watch` - live code style check to the updated files in the working dir 
* `npm run docs` - generate docs
* `npm run changelog` - generate changelog
* `npm run security` - check security vulnerabilities in dependencies
* `npm run format` - format the code files by the given style

### Relevant References ###

* [jshint](http://jshint.com/docs/options/)
* [jscs](http://jscs.info/rules.html)
* [jsfmt](https://github.com/millermedeiros/esformatter#indent)
* [jsfmt plugins](https://github.com/millermedeiros/esformatter/wiki/Plugins)
* [jsdoc](http://usejsdoc.org/)
* [bitbucket markdown](https://bitbucket.org/tutorials/markdowndemo)

### Use npm as a build tool ###

Inspired from [how-to-use-npm-as-a-build-tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool)
