# Todos

We are going to build the Todo MVC App in today workshop. For each of the checkpoints in the slide deck there's a corresponding branch on this github repo with the completed code for that step.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Setup

Please follow these steps to install the necessary components to run an Ember CLI app on your computer.

### Install Homebrew

Mac OS X
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor
brew install node
```

Windows
```
curl https://raw.githubusercontent.com/creationix/nvm/v0.12.1/install.sh | bash
source ~/.profile
nvm install 0.10.29
```

### Install Git

`brew install git`

OR

install from http://git-scm.com

### Install Ember-CLI and Dependencies

```
npm install -g ember-cli
npm install -g bower
npm install -g phantomjs
```

### Create a new app

`ember new todos`

OR (if you did not install Git)

`ember new todos --skip-git`

### Ensure your app's dependencies are installed
```
npm install
bower install
```

### Run your app

 `ember server`

### Install Ember Inspector

Install the ember inspector from here: https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi?hl=en

Done!

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

