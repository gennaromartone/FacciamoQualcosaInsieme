import express from 'express';
import config, {logStars} from './config';
import path from 'path';
import fs from 'fs';
//import sassMiddleware from 'node-sass-middleware';

import socket from 'socket.io'  
import { Server } from 'http'

import uuid from 'uuid'
import {createNamespace} from 'continuation-local-storage'

// Helmet includes a whopping 11 packages that all work to block 
// malicious parties from breaking or using an application to hurt its users.
import helmet from 'helmet'

// Compression comprime the response if the client support compression 
//reducing the time for the client to show the page
import compression from 'compression'

import db from './db/db';
//ROUTES
import userController from './api/userController';
import oauthGoogleController from './routes/authGoogleRoutes'
import renderingController from './routes/renderingRoutes'
import billingController from './routes/billingRoutes'
import surveyController from './routes/surveyRoutes'
// SERVICES
import './services/passport';
// COOKIE HANDLERS
import cookieSession from 'cookie-session'
import passport from 'passport'



import keys from './keys'

const server = express();

const app = Server(server);

const io = socket(app);

// CREATE A NAME SPACE FOR REQUEST
const myRequest = createNamespace('my request');

// Run the context for each request. Assign a unique identifier to each request
server.use(function(req, res, next) {
  myRequest.run( () => {
      myRequest.set('reqId', uuid.v1());
      next();
  });
});

// Check if there is an error for every request - TO DO
/*server.use( (err,req,res,next) => {
  if( err ){

  }
})*/

// ADD HELMET UTILITY
server.use( helmet() );

// ADD COMPRESSION
server.use( compression() );

// ADD COOKIE HANDLER
server.use( cookieSession({

		maxAge: 24 * 60 * 60 * 1000, // One Day expiration time for the cookie
		keys: [keys.cookie.cookieKey] // allow us to specifies multiple keys for major secutity
}))
server.use( passport.initialize() )
server.use( passport.session() )

// ADD Server Rendering Controller
server.use('', renderingController);

// ADD O-AUTH GOOGLE Controller
server.use('/auth/google', oauthGoogleController);

// ADD USER Controller
server.use('/api/user', userController);

// ADD BILLING CONTROLLER
server.use('/api', billingController);

// ADD SURVEY CONTROLLER
server.use('/api/survey', surveyController)

// STATIC RESOURCES
server.use('/dist', express.static('./dist'));

if( process.env.NODE_ENV === 'production'){

  // FOR EVERY ROUTES THAT EXPRESS DOESN'T RECOGNIZE THE ROUTES RETURN INDEX.HTML
  server.get('*', (req,res) => {
    res.redirect('/');
  })
}


io.on('connection', function(socket) {  
  console.log('a user connected');

  socket.on('SEND_MESSAGE', (message) => {
    console.log('MESSAGGIO: '+message);
    io.emit('RECEIVE_MESSAGE',message);
  })

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
})

server.use(express.static('public'));



app.listen(config.port, config.host, () => {

		console.info('Express listening on port', config.port);
		logStars('Running in: '+ process.env.NODE_ENV);
  });

  