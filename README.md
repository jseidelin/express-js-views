express-js-views
============

Use JavaScript functions as view templates for Express

[![Build Status](https://img.shields.io/travis/jseidelin/express-js-views.svg)](https://travis-ci.org/jseidelin/express-js-views)
[![npm version](https://img.shields.io/npm/v/express-js-views.svg)](https://www.npmjs.com/package/express-js-views)

## Installation

```bash
$ npm install --save express-js-views
```

## Usage

Use it in your Express application as the view engine for JavaScript files:

```javascript
app.engine("js", require("express-js-views"));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'js');
app.set("view cache", false);
```

See the example app for more.