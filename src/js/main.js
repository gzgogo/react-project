
// import 'file?name=js/lib/flexible/[name].[ext]!./lib/flexible/flexible';
// import 'file?name=js/lib/flexible/[name].[ext]!./lib/flexible/flexible_css';

import '../stylesheet/common-style.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app'

ReactDOM.render(
    <App />,
    document.getElementById('app-wrapper')
);