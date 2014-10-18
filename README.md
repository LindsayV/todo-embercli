# Todos

This README outlines the details of collaborating on this Ember application.

A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installing Node

Here's how to get started (on MacOS X)

* install homebrew
`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
* check homebrew installation with `brew doctor`
* `export PATH="/usr/local/bin:$PATH"`
* `brew install node`

On Windows

* install NVM `curl https://raw.githubusercontent.com/creationix/nvm/v0.12.1/install.sh | bash`
* `source ~/.profile`
* `nvm install 0.10.29`

## Installing Git

If you have homebrew 
`brew install git`

otherwise, download and install from (http://git-scm.com)

## Install Ember-CLI and Dependencies

Install ember-cli 
`npm install -g ember-cli`

Install bower
`npm install -g bower`

Install phantom JS (for testing)
`npm install -g phantomjs`

# Setting up a new app

`ember new todos`

or, if you do not have GIT

`ember new todos --skip-git`

## Set up

* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

