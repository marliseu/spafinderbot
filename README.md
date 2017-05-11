# 🌟 Spafinderbot

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Based on Heroku's Starbot:

Starbot is [GitHub's trending open-source](https://github.com/trending/) page, reincarnated as a Slack bot. It is also the sample referenced in the ["How to Deploy Your Slack Bots to Heroku"](https://blog.heroku.com/archives/2016/3/9/how-to-deploy-your-slack-bots-to-heroku) blog post.


### Supported `/slash` commands

Create a `/spafinder` [custom slash command](https://api.slack.com/slash-commands), using the URL: `{app-name}.herokuapp.com/commands/spafinderbot`. *Take note of the provided `token`, this is used to verify requests come from Slack.*

- `/spafinder` or `/spafinder help` - List available commands
- `/starbot kitchenday` - Display the person on kitchen duty today

### Install

```shell
$ npm install
```

### Copy `.env-example` to `.env`

```shell
$ cp .env-example .env
```

### Configure

```shell
SLACK_TEAM_TOKEN=xoxb...8WRqKWx
NODE_ENV=development
PORT=3000
```
### Run

```shell
$ npm start

🚀 Spafinderbot LIVES on PORT 3000 🚀
```

Visit [localhost:3000](http://localhost:3000).

### Deploy

_With the [Heroku Toolbelt](https://toolbelt.heroku.com)_

```shell
$ heroku create {optional-app-name}

Creating app... done, stack is cedar-14
https://blooming-scrubland-64464.herokuapp.com/

$ git push heroku master
...
remote: -----> Node.js app detected
...
remote:        https://blooming-scrubland-64464.herokuapp.com/ deployed to Heroku
...
To https://git.heroku.com/blooming-scrubland-64464.git
 * [new branch]      master -> master

$ heroku open
```

### License

**[This project is licensed under the terms of the MIT license.](http://license-me.herokuapp.com)**
 -- [_Need your own? There's a button for that :wink:_](https://github.com/mattcreager/license)
