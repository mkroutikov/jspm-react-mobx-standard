# Boilerplate for ReactJS

Uses:
* `jspm` for package and dependency management
* `babel` for transpiling
* `mobx` for state management
* `react` as a UI framework
* `standard` as a linter
* `mocha` for testing

In addition to providing a final boilerplate project, this repository explains why we need this or that
configuration option and dependency. Hopefully this will allow someone to better understand the process
and fix it as tools evolve.

To see the configuration steps, do this:
```
git branch
```
This will show the list of available branches. Each branch is built on top of the previous and adds another feature and explanation in the `README.md`.

To research the process simply use GitHub [branch comparison tool](https://github.com/mkroutikov/jspm-react-mobx-standard/compare/step7...step8?expand=1).

To use as a pre-built boilerplate:
```
# clone the branch step8 only
git clone -b step8 --single-branch https://github.com/mkroutikov/jspm-react-mobx-standard.git
# rename repository as appropriate
mv jspm-react-mobx-standard my-cool-name
cd my-cool-name
# create and checkout master branch
git branch master
git checkout master
# delete step8 branch
git branch -D step8
# assign new remote repository
git remote set-url origin https://github.com/me-at-github/my-cool-name.git
```
