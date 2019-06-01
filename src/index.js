import 'whatwg-fetch';
import 'es6-promise/auto';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

// Polyfill for String.includes() in IE...
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

ReactDOM.render(<App />, document.getElementById('root'));
