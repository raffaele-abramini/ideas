const functions = require('firebase-functions');
const firebase = require('firebase');
const app = require('express')();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs  = require('fs');
const path  = require('path');

const ServerApp = React.createFactory(require('./build/server.bundle.js').default);
const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

const config = {
	apiKey: "AIzaSyBisHYIYLMvGj1m2UfNLSlJkUnkhYUMPTM",
	authDomain: "react-test-70813.firebaseapp.com",
	databaseURL: "https://react-test-70813.firebaseio.com",
	storageBucket: "react-test-70813.appspot.com",
	messagingSenderId: "991209998758"
};

firebase.initializeApp(config);


const renderApplication = (url, res, initialState) => {
	const html = ReactDOMServer.renderToString(ServerApp({url: url, context: {}}));
	const templatedHtml = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
	res.send(templatedHtml);
};

app.get('*', (req, res) => {
	res.set('Cache-Control', 'public, max-age=60, s-maxage=180');
	renderApplication(req.url, res);
});

exports.app = functions.https.onRequest(app);
