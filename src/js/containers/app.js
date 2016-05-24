import React from 'react';

import HelloWorld from '../components/HelloWorld/HelloWorld'

var App = React.createClass({
  render() {
    return (
      <div className="app">
        <HelloWorld />
      </div>
    );
  }
});

module.exports = App;
