import express from 'express'
import bodyParser from 'body-parser'

import React from 'react';
import ReactDOM from 'react-dom/server';
import helmet from 'react-helmet';
import App from './../../components/app.jsx'

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './../../reducers/rootReducer';

import { StaticRouter as Router, matchPath } from 'react-router';

import thunk,{logger} from './../../middleware/thunk';
import routeBank from './../../routes/routes';

import config, {logStars} from './../config';

// IMPORTING LOGGER - WINSTON WRAPPED
import nodeLogger from './../config/logger'

var router = express.Router();


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

async function compose(req,res){
	//create new redux store on each request
	console.log('MMAMMAT')
	nodeLogger.log('NUOVA RICHIESTA');
	nodeLogger.info('NUOVA RICHIESTA');
		const store = createStore(reducers, {}, applyMiddleware(thunk,logger));
		let foundPath = null;
		// match request url to our React Router paths and grab component
		logStars(req.url)
		let { path, component } = routeBank.routes.find(
			({ path, exact }) => {
				foundPath = matchPath(req.url,
					{
						path,
						exact,
						strict: false
					}
				)
				return foundPath;
			}) || {};
		// safety check for valid component, if no component we initialize an empty shell.
		if (!component)
			component = {};
			logStars(component)	
		// safety check for fetchData function, if no function we give it an empty promise
		if (!component.fetchData)
			component.fetchData = () => new Promise((resolve, reject) =>{
			 if(true) resolve()
			 else
			 	reject();
			});
		// meat and bones of our isomorphic application: grabbing async data
		await component.fetchData({ store, params: (foundPath ? foundPath.params : {}) });
		//get store state (js object of entire store)
		let preloadedState = store.getState();
		//context is used by react router, empty by default
		let context = {};
		const html = ReactDOM.renderToString(
			<Provider store={store}>
				<Router context={context} location={req.url}>
					<App />
				</Router>
			</Provider>
		)
		//render helmet data aka meta data in <head></head>
		const helmetData = helmet.renderStatic();
		//check context for url, if url exists then react router has ran into a redirect
		if (context.url)
			//process redirect through express by redirecting
			res.redirect(context.status, 'http://' + req.headers.host + context.url);
		else if (foundPath && foundPath.path == '/404')
			//if 404 then send our custom 404 page with initial state and meta data, this is needed for status code 404
			res.status(404).send(renderFullPage(html, preloadedState, helmetData))
		else
			//else send down page with initial state and meta data
			res.send(renderFullPage(html, preloadedState, helmetData))
}

router.get('/',  (req, res) => {
	try {
		compose(req,res);
		
	} catch (error) {
		res.status(400).send(renderFullPage('An error occured.', {}, {}));
	}
});

router.get('/surveys',  (req, res) => {
	try {
		compose(req,res);
		
	} catch (error) {
		res.status(400).send(renderFullPage('An error occured.', {}, {}));
	}
});

function renderFullPage(html, preloadedState, helmet) {
		logStars(html);
    return `
      <html>
				<head>
				<meta charset="utf-8">
				<title>React Chat App</title>
				<link rel="stylesheet" href="/style.css">
				<link rel="icon" href="/dist/favicon.ico" type="image/ico" />
				<!--link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"-->
				<!--link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"--> 
        
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
					${helmet.link.toString()}
					<script src="/socket.io/socket.io.js"></script>
					<script>
						var socket = io();
					</script>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/dist/assets/bundle.js"></script>
        </body>
      </html>
      `
  }

  export default router;