const { json } = require('express');
const express = require('express');

class App {
  static instance;

  constructor(name = "server") {
    if(!!App.instance) {
      return App.instance;
    }

    App.instance = this;
    this.name = name;
    this.app = express().use(json());
  }
}

module.exports.app = new App().app;