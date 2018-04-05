/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// FIGURE OUT WHAT SET OF CREDENTIALS TO RETURN

var keys = null;

if (process.env.NODE_ENV === 'production') {
    // we are in production mode
    module.exports = __webpack_require__(24);
} else {
    // we are in dev mode
    module.exports = __webpack_require__(25);
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = process.env;

var nodeEnv = exports.nodeEnv = env.NODE_ENV || 'development';

var logStars = exports.logStars = function logStars(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

exports.default = {
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return 'http://' + this.host + ':' + this.port;
  }
};
var pathFacciamoQualcosaInsiemeSrc = exports.pathFacciamoQualcosaInsiemeSrc = './../FacciamoQualcosaInsieme/src';

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signup = exports.logout = exports.login = exports.handleTokenPayments = exports.fetchUser = exports.FETCH_USER = exports.RECEIVE_LOGIN = exports.LOGOUT = exports.REQUEST_LOGIN = exports.LOGIN = undefined;

var _axios = __webpack_require__(43);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOGIN = exports.LOGIN = 'LOGIN';
var REQUEST_LOGIN = exports.REQUEST_LOGIN = 'REQUEST_LOGIN';
var LOGOUT = exports.LOGOUT = 'LOGOUT';
var RECEIVE_LOGIN = exports.RECEIVE_LOGIN = 'RECEIVE_LOGIN';
var FETCH_USER = exports.FETCH_USER = 'FETCH_USER';

var fetchUser = exports.fetchUser = function fetchUser() {
    return async function (dispatch) {
        var res = await _axios2.default.get('/auth/google/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
    };
};
// handle the token and dispatch fecth user
var handleTokenPayments = exports.handleTokenPayments = function handleTokenPayments(token) {
    return async function (dispatch) {
        var res = await _axios2.default.post('/api/stripe/payments', token);
        dispatch({ type: FETCH_USER, payload: res.data });
    };
};

// payload = fetchUser()(dispatch)

var login = exports.login = function login(user) {
    return {
        type: LOGIN,
        user: user
    };
};

var logout = exports.logout = function logout() {
    return {
        type: LOGOUT
    };
};

function requestLogin(user) {
    return {
        type: REQUEST_LOGIN,
        user: user
    };
}

function receivelogin(user, json) {
    return {
        type: RECEIVE_LOGIN,
        user: user,
        data: json.data.children.map(function (child) {
            return child.data;
        }),
        receivedAt: Date.now()
    };
}

var signup = exports.signup = function signup(username, password) {
    return function (dispatch) {};
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//import User from './../config/user'

exports.default = {
    auth: {
        isLogginIng: false,
        isLoggedIn: false,
        user: '',
        receivedAt: ''
    },
    chat: {
        messages: [{
            user: '',
            message: 'Benvenuto nella Chat'
        }]
    },
    dataFormSearch: {
        lookingFor: '',
        locationFor: 'latLng',
        categoriesById: [{
            id: 0,
            categoryName: 'All Categories'
        }, {
            id: 1,
            categoryName: 'Gourmet'
        }]

    },
    resultSetFormSearch: {
        resultObject: [{ id: '', name: '', description: '', location: '', category: '' }]
    }

};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("continuation-local-storage");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _home = __webpack_require__(50);

var _home2 = _interopRequireDefault(_home);

var _Surveys = __webpack_require__(52);

var _Surveys2 = _interopRequireDefault(_Surveys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import User from '../app/user.jsx';

//import Navbar from '../app/navbar.jsx';
exports.default = {
    routes: [{
        path: '/surveys',
        component: _Surveys2.default,
        exact: true
    }, {
        path: '/',
        component: _home2.default,
        exact: true
    }, {
        path: '/user',
        component: _home2.default,
        exact: true
    }],
    redirects: [{
        from: '/people',
        to: '/user',
        status: 301
    }]
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _config = __webpack_require__(8);

var _config2 = _interopRequireDefault(_config);

var _path = __webpack_require__(17);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(18);

var _fs2 = _interopRequireDefault(_fs);

var _socket = __webpack_require__(19);

var _socket2 = _interopRequireDefault(_socket);

var _http = __webpack_require__(20);

var _uuid = __webpack_require__(21);

var _uuid2 = _interopRequireDefault(_uuid);

var _continuationLocalStorage = __webpack_require__(12);

var _helmet = __webpack_require__(22);

var _helmet2 = _interopRequireDefault(_helmet);

var _db = __webpack_require__(23);

var _db2 = _interopRequireDefault(_db);

var _userController = __webpack_require__(26);

var _userController2 = _interopRequireDefault(_userController);

var _authGoogleRoutes = __webpack_require__(31);

var _authGoogleRoutes2 = _interopRequireDefault(_authGoogleRoutes);

var _renderingRoutes = __webpack_require__(32);

var _renderingRoutes2 = _interopRequireDefault(_renderingRoutes);

var _billingRoutes = __webpack_require__(62);

var _billingRoutes2 = _interopRequireDefault(_billingRoutes);

__webpack_require__(65);

var _cookieSession = __webpack_require__(68);

var _cookieSession2 = _interopRequireDefault(_cookieSession);

var _passport = __webpack_require__(9);

var _passport2 = _interopRequireDefault(_passport);

var _keys = __webpack_require__(5);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SERVICES

//ROUTES


// Helmet includes a whopping 11 packages that all work to block 
// malicious parties from breaking or using an application to hurt its users.

//import sassMiddleware from 'node-sass-middleware';

var server = (0, _express2.default)();
// COOKIE HANDLERS


var app = (0, _http.Server)(server);

var io = (0, _socket2.default)(app);

// CREATE A NAME SPACE FOR REQUEST
var myRequest = (0, _continuationLocalStorage.createNamespace)('my request');

// Run the context for each request. Assign a unique identifier to each request
server.use(function (req, res, next) {
  myRequest.run(function () {
    myRequest.set('reqId', _uuid2.default.v1());
    next();
  });
});

// ADD HELMET UTILITY
server.use((0, _helmet2.default)());

// ADD COOKIE HANDLER
server.use((0, _cookieSession2.default)({

  maxAge: 24 * 60 * 60 * 1000, // One Day expiration time for the cookie
  keys: [_keys2.default.cookie.cookieKey] // allow us to specifies multiple keys for major secutity
}));
server.use(_passport2.default.initialize());
server.use(_passport2.default.session());

// ADD Server Rendering Controller
server.use('', _renderingRoutes2.default);

// ADD O-AUTH GOOGLE Controller
server.use('/auth/google', _authGoogleRoutes2.default);

// ADD USER Controller
server.use('/api/user', _userController2.default);

// ADD BILLING CONTROLLER
server.use('/api', _billingRoutes2.default);

// STATIC RESOURCES
server.use('/dist', _express2.default.static('./dist'));

if (process.env.NODE_ENV === 'production') {

  // FOR EVERY ROUTES THAT EXPRESS DOESN'T RECOGNIZE THE ROUTES RETURN INDEX.HTML
  server.get('*', function (req, res) {
    res.redirect('/');
  });
}

io.on('connection', function (socket) {
  console.log('a user connected');

  socket.on('SEND_MESSAGE', function (message) {
    console.log('MESSAGGIO: ' + message);
    io.emit('RECEIVE_MESSAGE', message);
  });

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

server.use(_express2.default.static('public'));

app.listen(_config2.default.port, _config2.default.host, function () {

  console.info('Express listening on port', _config2.default.port);
  (0, _config.logStars)(_path2.default.join(__dirname, '../sass'));
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(4);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _keys = __webpack_require__(5);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_keys2.default.mongoDB.mongoURI);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    google: {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALBACK_URL
    },
    mongoDB: {
        mongoURI: process.env.MONGO_URI
    },
    cookie: {
        cookieKey: process.env.COOKIE_KEY
    },
    stripe: {
        publishableKey: process.env.PUBLISHABLE_KEY,
        secretkey: process.env.SECRET_KEY
    }
};
/* google:{
      clientID:'967485044069-ehmqe5hgjkgk8tmmqk69rov3k8luicgg.apps.googleusercontent.com',
      clientSecret:'tXcMUR0POg2uxevfJOizTFFi',
      callbackURL: '/auth/google/callback'
  },
  mongoDB:{
      mongoURI:'mongodb://localhost/delivery-shop'
  },
  cookie:{
      cookieKey:'sdgsdgquelcheczzomiparejsdfsdfsdfs'
  }
}*/

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    google: {
        clientID: '967485044069-ehmqe5hgjkgk8tmmqk69rov3k8luicgg.apps.googleusercontent.com',
        clientSecret: 'tXcMUR0POg2uxevfJOizTFFi',
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    mongoDB: {
        mongoURI: 'mongodb://localhost/delivery-shop'
    },
    cookie: {
        cookieKey: 'sdgsdgquelcheczzomiparejsdfsdfsdfs'
    },
    stripe: {
        publishableKey: 'pk_test_fNZfMcjGxk26xm4KFW5uFYNR',
        secretkey: 'sk_test_6X4FpsVbkuLVXhjg1CVml5OB'
    }

    //mongodb://main:forzanapoli@ds141068.mlab.com:41068/delivery_shop
    // git status
    // heroku open
    // git add .
    // git commit -m "message"
    // git push -u heroku master

    // DEPLOY METHOD --> Push to CI --> Run tests and stuff --> CI Builds and commits client --> CI Pushes build to Heroku
    // CIRCLECI.COM

};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(6);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _userDb = __webpack_require__(27);

var _userDb2 = _interopRequireDefault(_userDb);

var _jsonwebtoken = __webpack_require__(28);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcryptjs = __webpack_require__(29);

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _config = __webpack_require__(30);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use(_bodyParser2.default.urlencoded({ extended: false }));
router.use(_bodyParser2.default.json());

// CREATES A NEW USER
router.post('/', function (req, res) {

    var hashedPassword = _bcryptjs2.default.hashSync(req.body.password, 8);

    _userDb2.default.create({
        f_name: req.body.firstName,
        l_name: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        lastLogin: Date.now()
    }, function (err, user) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");

        var token = _jsonwebtoken2.default.sign({ id: user._id }, _config2.default.secret, {
            expiresIn: 86400 // expires in 24 hours
        });

        res.status(200).send({ user: user, token: token }).redirect('/');
    });
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    _userDb2.default.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    _userDb2.default.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    _userDb2.default.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User " + user.name + " was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {

    _userDb2.default.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});

router.get('/current_user', function (req, res, done) {
    res.send(req.user);
});

exports.default = router;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(4);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose2.default.Schema({

  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  f_name: {
    type: String,
    trim: true,
    required: true
  },
  l_name: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  lastLogin: String,
  verified: { type: Boolean, default: false }

}); // User.js

_mongoose2.default.model('User', UserSchema);
exports.default = _mongoose2.default.model('User');

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { secret: 'superSecret' };

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _passport = __webpack_require__(9);

var _passport2 = _interopRequireDefault(_passport);

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(6);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use(_bodyParser2.default.urlencoded({ extended: false }));
router.use(_bodyParser2.default.json());

router.get('/', _passport2.default.authenticate('google', {
	scope: ['profile', 'email']
}));

router.get('/callback', _passport2.default.authenticate('google'), function (req, res) {
	res.redirect("/");
});

router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/').send(req.user);
});

router.get('/current_user', function (req, res, done) {
	res.send(req.user);
});

exports.default = router;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(6);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(33);

var _server2 = _interopRequireDefault(_server);

var _reactHelmet = __webpack_require__(34);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _app = __webpack_require__(35);

var _app2 = _interopRequireDefault(_app);

var _reactDom = __webpack_require__(53);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(7);

var _rootReducer = __webpack_require__(54);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _reactRouter = __webpack_require__(58);

var _thunk = __webpack_require__(59);

var _thunk2 = _interopRequireDefault(_thunk);

var _routes = __webpack_require__(15);

var _routes2 = _interopRequireDefault(_routes);

var _config = __webpack_require__(8);

var _config2 = _interopRequireDefault(_config);

var _logger = __webpack_require__(60);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// IMPORTING LOGGER - WINSTON WRAPPED


router.use(_bodyParser2.default.urlencoded({ extended: false }));
router.use(_bodyParser2.default.json());

async function compose(req, res) {
	//create new redux store on each request
	console.log('MMAMMAT');
	_logger2.default.log('NUOVA RICHIESTA');
	_logger2.default.info('NUOVA RICHIESTA');
	var store = (0, _redux.createStore)(_rootReducer2.default, {}, (0, _redux.applyMiddleware)(_thunk2.default, _thunk.logger));
	var foundPath = null;
	// match request url to our React Router paths and grab component
	(0, _config.logStars)(req.url);

	var _ref = _routes2.default.routes.find(function (_ref2) {
		var path = _ref2.path,
		    exact = _ref2.exact;

		foundPath = (0, _reactRouter.matchPath)(req.url, {
			path: path,
			exact: exact,
			strict: false
		});
		return foundPath;
	}) || {},
	    path = _ref.path,
	    component = _ref.component;
	// safety check for valid component, if no component we initialize an empty shell.


	if (!component) component = {};
	(0, _config.logStars)(component);
	// safety check for fetchData function, if no function we give it an empty promise
	if (!component.fetchData) component.fetchData = function () {
		return new Promise(function (resolve, reject) {
			if (true) resolve();else reject();
		});
	};
	// meat and bones of our isomorphic application: grabbing async data
	await component.fetchData({ store: store, params: foundPath ? foundPath.params : {} });
	//get store state (js object of entire store)
	var preloadedState = store.getState();
	//context is used by react router, empty by default
	var context = {};
	var html = _server2.default.renderToString(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouter.StaticRouter,
			{ context: context, location: req.url },
			_react2.default.createElement(_app2.default, null)
		)
	));
	//render helmet data aka meta data in <head></head>
	var helmetData = _reactHelmet2.default.renderStatic();
	//check context for url, if url exists then react router has ran into a redirect
	if (context.url)
		//process redirect through express by redirecting
		res.redirect(context.status, 'http://' + req.headers.host + context.url);else if (foundPath && foundPath.path == '/404')
		//if 404 then send our custom 404 page with initial state and meta data, this is needed for status code 404
		res.status(404).send(renderFullPage(html, preloadedState, helmetData));else
		//else send down page with initial state and meta data
		res.send(renderFullPage(html, preloadedState, helmetData));
}

router.get('/', function (req, res) {
	try {
		compose(req, res);
	} catch (error) {
		res.status(400).send(renderFullPage('An error occured.', {}, {}));
	}
});

router.get('/surveys', function (req, res) {
	try {
		compose(req, res);
	} catch (error) {
		res.status(400).send(renderFullPage('An error occured.', {}, {}));
	}
});

function renderFullPage(html, preloadedState, helmet) {
	(0, _config.logStars)(html);
	return '\n      <html>\n\t\t\t\t<head>\n\t\t\t\t<meta charset="utf-8">\n\t\t\t\t<title>React Chat App</title>\n\t\t\t\t<link rel="stylesheet" href="/style.css">\n\t\t\t\t<link rel="icon" href="/dist/favicon.ico" type="image/ico" />\n\t\t\t\t<!--link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"-->\n\t\t\t\t<!--link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"--> \n        \n          ' + helmet.title.toString() + '\n          ' + helmet.meta.toString() + '\n\t\t\t\t\t' + helmet.link.toString() + '\n\t\t\t\t\t<script src="/socket.io/socket.io.js"></script>\n\t\t\t\t\t<script>\n\t\t\t\t\t\tvar socket = io();\n\t\t\t\t\t</script>\n        </head>\n        <body>\n          <div id="root">' + html + '</div>\n          <script>\n            // WARNING: See the following for security issues around embedding JSON in HTML:\n            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n            window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n          </script>\n          <script src="/dist/assets/bundle.js"></script>\n        </body>\n      </html>\n      ';
}

exports.default = router;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(13);

var _header = __webpack_require__(36);

var _header2 = _interopRequireDefault(_header);

var _Footer = __webpack_require__(44);

var _Footer2 = _interopRequireDefault(_Footer);

var _routes = __webpack_require__(15);

var _routes2 = _interopRequireDefault(_routes);

var _reactRedux = __webpack_require__(1);

var _auth = __webpack_require__(10);

var actions = _interopRequireWildcard(_auth);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import RedirectWithStatus from './redirect-w-status.jsx';


var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchUser();
        }
    }, {
        key: 'render',
        value: function render() {

            var routes = _routes2.default.routes.map(function (_ref, i) {
                var path = _ref.path,
                    component = _ref.component,
                    exact = _ref.exact;
                return _react2.default.createElement(_reactRouterDom.Route, { key: Math.random() + 'ROUTE_', exact: exact, path: path, component: component });
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    routes
                ),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, actions)(App);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _LoginModalContainer = __webpack_require__(37);

var _LoginModalContainer2 = _interopRequireDefault(_LoginModalContainer);

var _RegisterModalContainer = __webpack_require__(38);

var _RegisterModalContainer2 = _interopRequireDefault(_RegisterModalContainer);

var _reactRouterDom = __webpack_require__(13);

var _SurveysPayments = __webpack_require__(41);

var _SurveysPayments2 = _interopRequireDefault(_SurveysPayments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      showLoginModal: false,
      showRegisterModal: false,
      showSurveysHeader: false
    };

    _this.setShowLoginModal = _this.setShowLoginModal.bind(_this);
    _this.setShowRegisterModal = _this.setShowRegisterModal.bind(_this);
    _this.setShowSurveysHeader = _this.setShowSurveysHeader.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'setShowLoginModal',
    value: function setShowLoginModal(e) {
      e.preventDefault();
      this.setState({
        showLoginModal: !this.state.showLoginModal
      });
    }
  }, {
    key: 'setShowRegisterModal',
    value: function setShowRegisterModal(e) {
      e.preventDefault();
      this.setState({
        showRegisterModal: !this.state.showRegisterModal
      });
    }
  }, {
    key: 'setShowSurveysHeader',
    value: function setShowSurveysHeader(e) {
      e.preventDefault();
      this.setState({
        showSurveysHeader: !this.state.showSurveysHeader
      });
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      switch (this.props.auth) {
        case null:
          return;
        case false:
          return _react2.default.createElement(
            'ul',
            { className: ' header--ul', role: 'navigation' },
            _react2.default.createElement(
              'li',
              { className: 'header--logo' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  to: this.props.auth ? '/' : '/',
                  className: 'fa fa-home'
                },
                'FAIR SHOP'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.setShowLoginModal },
                'Be a Seller'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.setShowRegisterModal },
                'Sign Up'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.setShowLoginModal },
                'Login'
              )
            )
          );
        default:
          var showPayments = this.state.showSurveysHeader;
          return _react2.default.createElement(
            'ul',
            { className: ' header--ul', role: 'navigation' },
            _react2.default.createElement(
              'li',
              { className: 'header--logo' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  to: this.props.auth ? '/' : '/',
                  className: 'fa fa-home'
                },
                'FAIR SHOP'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'header--li--subList', href: '#', onClick: this.setShowSurveysHeader },
                  'Surveys'
                ),
                showPayments && _react2.default.createElement(SurveysHeader, { credits: this.props.auth.credits, show: this.state.showSurveysHeader })
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.setShowLoginModal },
                'Be a Seller'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.setShowRegisterModal },
                'Your Order'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.setShowRegisterModal },
                'Messages'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.setShowRegisterModal },
                'Profile'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/auth/google/logout' },
                'Logout'
              )
            )
          );
      }
    }
    /*
     <div className="header-title">
              <h1>Delivery SHOP</h1>
            </div>
            <div className="header-navbar">
              <nav>
                <div className="top-nav--button">
                  <a href="#home">Diventa un Rivenditore</a>
                </div>
                <div className="top-nav--button">
                  <a href="#news">Aiuto</a>
                </div>
                <div className="top-nav--button">
                  <button onClick={this.setShowRegisterModal}>
                    Registrati
                  </button>
                </div>
                <div className="top-nav--button">
                  <button onClick={this.setShowLoginModal}>
                    Accedi
                  </button>
                </div>
              </nav>
            </div>
    <nav className="nav-extended">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                  Delivery SHOP
                </a>
                <a href="#" data-activates="mobile-demo" className="button-collapse">
                  <i className="material-icons">menu</i>
                </a>
                {this.renderContent()}
              </div>
              <div className="nav-content">
                <ul className="tabs tabs-transparent">
                  <li className="tab">
                    <a href="#test1">Test 1</a>
                  </li>
                  <li className="tab">
                    <a className="active" href="#test2">
                      Test 2
                    </a>
                  </li>
                  <li className="tab disabled">
                    <a href="#test3">Disabled Tab</a>
                  </li>
                  <li className="tab">
                    <a href="#test4">Test 4</a>
                  </li>
                </ul>
              </div>
            </nav>
     */

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'main-header' },
        _react2.default.createElement(
          'header',
          { className: 'header' },
          this.renderContent(),
          true && _react2.default.createElement(_LoginModalContainer2.default, { show: this.state.showLoginModal, onClose: this.setShowLoginModal }),
          _react2.default.createElement(_RegisterModalContainer2.default, { show: this.state.showRegisterModal, onClose: this.setShowRegisterModal })
        )
      );
    }
  }], [{
    key: 'fetchData',
    value: function fetchData(_ref) {
      var store = _ref.store;

      return new Promise(function (resolve) {
        return resolve();
      }); //default
    }
  }]);

  return Header;
}(_react.Component);

Header.propTypes = {};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;

  console.log(auth);
  return { auth: auth };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);


var SurveysHeader = function SurveysHeader(_ref3) {
  var show = _ref3.show,
      credits = _ref3.credits;


  if (!show) {
    return null;
  }
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(_SurveysPayments2.default, null),
      _react2.default.createElement(
        'li',
        null,
        'Your credits:',
        credits
      )
    )
  );
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import './../../../sass/style.scss'

var LoginModal = function (_Component) {
  _inherits(LoginModal, _Component);

  function LoginModal(props) {
    _classCallCheck(this, LoginModal);

    var _this = _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).call(this, props));

    _this.state = {
      email: '',
      password: ''
    };

    _this.inputProperty = {
      password: {
        labelText: 'Password',
        errorText: ''
      },
      email: {
        labelText: 'Email',
        errorText: ''
      }
    };

    _this.firstCheck = true;
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(LoginModal, [{
    key: 'handleChange',
    value: function handleChange(ev) {
      console.log(ev.target.id.substring(0, 5));
      this.setState(_defineProperty({}, ev.target.id, ev.target.value));

      if (ev.target.value.length === 1) {
        var newProp = _defineProperty({}, ev.target.id, { errorText: '', labelText: ev.target.name });
        this.inputProperty = _extends({}, this.inputProperty, newProp);
      }

      if (ev.target.value === '') {
        var _newProp2 = _defineProperty({}, ev.target.id, {
          errorText: [ev.target.name] + ' is required',
          labelText: ev.target.name
        });
        this.inputProperty = _extends({}, this.inputProperty, _newProp2);
      } else if (ev.target.id.substring(0, 5) == 'email' && ev.target.value.length != '') {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (!reg.test(ev.target.value)) {
          if (this.firstCheck) {
            var _newProp4 = _defineProperty({}, ev.target.id, {
              errorText: 'Value should be a valid Email',
              labelText: ev.target.name
            });
            this.inputProperty = _extends({}, this.inputProperty, _newProp4);
            this.firstCheck = false;
          }
        } else {
          var _newProp6 = _defineProperty({}, ev.target.id, { errorText: '', labelText: ev.target.name });
          this.inputProperty = _extends({}, this.inputProperty, _newProp6);
          this.firstCheck = true;
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // Render nothing if the "show" prop is false
      if (!this.props.show) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { className: 'overlay', onClick: this.props.onClose }),
        _react2.default.createElement(
          'div',
          { className: 'form' },
          _react2.default.createElement(
            'div',
            { className: 'form--login' },
            _react2.default.createElement(
              'div',
              { className: 'form--title' },
              _react2.default.createElement(
                'span',
                null,
                'Accedi per proseguire'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form--field' },
              _react2.default.createElement('input', { id: 'password', type: 'password', className: 'form--input' }),
              _react2.default.createElement(
                'label',
                { className: 'form--label', htmlFor: 'password' },
                'Password'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form--field' },
              _react2.default.createElement('input', { id: 'email', type: 'email', className: 'form--input' }),
              _react2.default.createElement(
                'label',
                { className: 'form--label', htmlFor: 'email' },
                'Email'
              )
            ),
            _react2.default.createElement(
              'a',
              { className: 'form--botton' },
              'Accedi'
            ),
            _react2.default.createElement(
              'h5',
              null,
              'oppure prosegui con'
            ),
            _react2.default.createElement(
              'a',
              { href: '/auth/google', className: 'form--botton' },
              'Accedi con Google'
            ),
            _react2.default.createElement(
              'button',
              { onClick: this.props.onClose, className: 'overlay-close' },
              'X'
            )
          )
        )
      );
    }
  }]);

  return LoginModal;
}(_react.Component);

exports.default = LoginModal;


LoginModal.propTypes = {
  onClose: _propTypes2.default.func.isRequired,
  show: _propTypes2.default.bool
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RegisterForm = __webpack_require__(39);

var _RegisterForm2 = _interopRequireDefault(_RegisterForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterModal = function (_Component) {
    _inherits(RegisterModal, _Component);

    function RegisterModal(props) {
        _classCallCheck(this, RegisterModal);

        var _this = _possibleConstructorReturn(this, (RegisterModal.__proto__ || Object.getPrototypeOf(RegisterModal)).call(this, props));

        _this.state = {
            email: '',
            password: ''
        };

        _this.inputProperty = {
            password: {
                labelText: 'Password',
                errorText: ''
            },
            email: {
                labelText: 'Email',
                errorText: ''
            }
        };

        _this.firstCheck = true;
        _this.handleChange = _this.handleChange.bind(_this);
        //this.renderInputFrom = this.renderInputFrom.bind(this);
        return _this;
    }
    // GESTIRE IL TUTTO CON REDUX

    _createClass(RegisterModal, [{
        key: 'handleChange',
        value: function handleChange(ev) {
            console.log(ev.target.id.substring(0, 5));
            this.setState(_defineProperty({}, ev.target.id, ev.target.value));

            //  let id = ev.target.id;

            //  let arr = [{id:'0'},{id:'1'}]
            //  arr.map( obj => { obj.id === id? obj.text)

            if (ev.target.value.length === 1) {
                var newProp = _defineProperty({}, ev.target.id, { errorText: '', labelText: ev.target.name });
                this.inputProperty = _extends({}, this.inputProperty, newProp);
            }

            if (ev.target.value === '') {
                var _newProp2 = _defineProperty({}, ev.target.id, { errorText: [ev.target.name] + ' is required', labelText: ev.target.name });
                this.inputProperty = _extends({}, this.inputProperty, _newProp2);
            } else if (ev.target.id.substring(0, 5) == 'email' && ev.target.value.length != '') {
                var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                if (!reg.test(ev.target.value)) {
                    if (this.firstCheck) {
                        var _newProp4 = _defineProperty({}, ev.target.id, { errorText: 'Value should be a valid Email', labelText: ev.target.name });
                        this.inputProperty = _extends({}, this.inputProperty, _newProp4);
                        this.firstCheck = false;
                    }
                } else {
                    var _newProp6 = _defineProperty({}, ev.target.id, { errorText: '', labelText: ev.target.name });
                    this.inputProperty = _extends({}, this.inputProperty, _newProp6);
                    this.firstCheck = true;
                }
            }
        }

        /* renderInputFrom(){
             
             for( let key in this.inputProperty ){
                 console.log(key)
                 let element = this.inputProperty[key] 
                 let m =  <InputForm onChange={this.handleChange} 
                 labelName="Email" 
                 inputName="email"
                 value={this.state.email}  
                 errorText={this.inputProperty.email.errorText}  />
             }
              <form>
                     <div className="form--field">
                       <input required id="firstName" type="input" className="form--input" />
                       <label className="form--label"  htmlFor="firstName">First Name </label>
                     </div>
                      <div className="form--field">
                       <input required id="lastName" type="input" className="form--input" />
                       <label className="form--label"  htmlFor="email">Last Name</label>
                     </div>
                      <div className="form--field">
                       <input required id="email" type="email" className="form--input" />
                       <label className="form--label"  htmlFor="email">Email</label>
                     </div>
                      <div className="form--field">
                       <input required id="password" type="password" className="form--input" />
                       <label className="form--label" htmlFor="password">Password</label>
                     </div>
                      <div className="form--botton" onClick=""><span>Registrati</span></div>
                   </form>
             
         }*/

    }, {
        key: 'render',
        value: function render() {

            //this.renderInputFrom();
            // Render nothing if the "show" prop is false
            if (!this.props.show) {
                return null;
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { className: 'overlay', onClick: this.props.onClose }),
                _react2.default.createElement(
                    'div',
                    { className: 'form' },
                    _react2.default.createElement(
                        'div',
                        { className: 'form--login' },
                        _react2.default.createElement(
                            'div',
                            null,
                            'Registrati con Gmail o Facebook'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'hr' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'oppure'
                            )
                        ),
                        _react2.default.createElement(_RegisterForm2.default, null),
                        _react2.default.createElement(
                            'div',
                            null,
                            'Hai gi\xE0 un account? ',
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'Accedi '
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.props.onClose, className: 'overlay-close' },
                            'X'
                        )
                    )
                )
            );
        }
    }]);

    return RegisterModal;
}(_react.Component);

exports.default = RegisterModal;


RegisterModal.propTypes = {
    onClose: _propTypes2.default.func.isRequired,
    show: _propTypes2.default.bool
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(14);

var _InputField = __webpack_require__(40);

var _InputField2 = _interopRequireDefault(_InputField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FIELDS = [{ label: 'First Name', name: 'firstName' }, { label: 'Last Name', name: 'lastName' }, { label: 'Email', name: 'email' }, { label: 'Password', name: 'password' }];

var RegisterForm = function (_Component) {
  _inherits(RegisterForm, _Component);

  function RegisterForm() {
    _classCallCheck(this, RegisterForm);

    return _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).apply(this, arguments));
  }

  _createClass(RegisterForm, [{
    key: 'renderFields',
    value: function renderFields() {

      return FIELDS.map(function (_ref) {
        var label = _ref.label,
            name = _ref.name;

        return _react2.default.createElement(_reduxForm.Field, { key: name, label: label, component: _InputField2.default, type: 'text', name: name });
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'form',
        { onSubmit: this.props.handleSubmit(function (values) {
            return console.log(values);
          }) },
        this.renderFields(),
        _react2.default.createElement(
          'button',
          { className: 'form--botton', type: 'submit' },
          _react2.default.createElement(
            'span',
            null,
            'Registrati'
          )
        )
      );
    }
  }]);

  return RegisterForm;
}(_react.Component);

var validate = function validate(values) {
  var errors = {};

  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (!values.firstName) errors.firstName = 'First Name is Required';

  if (!values.lastName) errors.lastName = 'Last Name is Required';

  if (!values.password) errors.password = 'Password is Required';

  if (!values.email) errors.email = 'Email is Required';else {
    if (!reg.test(values.email)) errors.email = 'Value should be a valid Email';
  }

  return errors;
};

exports.default = (0, _reduxForm.reduxForm)({
  validate: validate, // ES& is validate:validate
  form: 'registerForm'
})(RegisterForm);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var input = _ref.input,
        label = _ref.label,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error;


    return _react2.default.createElement(
        "div",
        { className: "form--field" },
        _react2.default.createElement("input", _extends({}, input, { className: "form--input" })),
        _react2.default.createElement(
            "label",
            { className: "form--label", htmlFor: "email" },
            label
        ),
        touched && _react2.default.createElement(
            "div",
            { className: "error" },
            error,
            " "
        )
    );
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStripeCheckout = __webpack_require__(42);

var _reactStripeCheckout2 = _interopRequireDefault(_reactStripeCheckout);

var _reactRedux = __webpack_require__(1);

var _auth = __webpack_require__(10);

var actions = _interopRequireWildcard(_auth);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SurveyPayments = function (_Component) {
    _inherits(SurveyPayments, _Component);

    function SurveyPayments() {
        _classCallCheck(this, SurveyPayments);

        return _possibleConstructorReturn(this, (SurveyPayments.__proto__ || Object.getPrototypeOf(SurveyPayments)).apply(this, arguments));
    }

    _createClass(SurveyPayments, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactStripeCheckout2.default,
                {
                    name: 'Surveys Payments',
                    description: 'Add credits for your account',
                    amount: 500,
                    token: function token(_token) {
                        _this2.props.handleTokenPayments(_token);
                    },
                    stripeKey: process.env.REACT_APP_STRIPE_KEY
                },
                _react2.default.createElement(
                    'li',
                    null,
                    'Add Credits'
                )
            );
        }
    }]);

    return SurveyPayments;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, actions)(SurveyPayments);

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-stripe-checkout");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Chat = __webpack_require__(45);

var _Chat2 = _interopRequireDefault(_Chat);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

        _this.state = {
            isChatBoxActive: false
        };

        _this.handleChatBox = _this.handleChatBox.bind(_this);

        return _this;
    }

    _createClass(Footer, [{
        key: 'handleChatBox',
        value: function handleChatBox() {
            if (this.state.isChatBoxActive === true) this.setState({ isChatBoxActive: false });else this.setState({ isChatBoxActive: true });
        }
        /* prima che il componente venga montato */

    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
        /* Il componente è stato montato */

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
        /* quando distruggi il componente */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'render',
        value: function render() {

            var isActive = this.state.isChatBoxActive;
            var boxChat = null;
            if (isActive) boxChat = _react2.default.createElement(_Chat2.default, null);else boxChat = null;

            return _react2.default.createElement(
                'div',
                { className: 'footer' },
                _react2.default.createElement(
                    'button',
                    { onClick: this.handleChatBox, className: 'btn btn-primary form-control' },
                    'Attiva Chat'
                ),
                boxChat
            );
        }
    }]);

    return Footer;
}(_react.Component);

Footer.propTypes = {};

exports.default = Footer;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _messagesAction = __webpack_require__(46);

var messageAction = _interopRequireWildcard(_messagesAction);

var _redux = __webpack_require__(7);

var _socket = __webpack_require__(47);

var _socket2 = _interopRequireDefault(_socket);

var _BoxMessage = __webpack_require__(48);

var _BoxMessage2 = _interopRequireDefault(_BoxMessage);

var _UserDashBoard = __webpack_require__(49);

var _UserDashBoard2 = _interopRequireDefault(_UserDashBoard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = function (_Component) {
    _inherits(Chat, _Component);

    function Chat(props) {
        _classCallCheck(this, Chat);

        var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));

        _this.state = {
            username: '',
            message: '',
            messages: []
        };

        _this.setUsername = _this.setUsername.bind(_this);
        _this.setMessage = _this.setMessage.bind(_this);
        _this.sendMessage = _this.sendMessage.bind(_this);
        // this.addMessage =  this.addMessage.bind(this);

        //this.socket = io('localhost:8080');
        return _this;
    }

    _createClass(Chat, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //this.socket.on('RECEIVE_MESSAGE', this.props.addMessage)
            this._handleMessageEvent();
            console.log(this.props);
        }
    }, {
        key: '_handleMessageEvent',
        value: function _handleMessageEvent() {
            var _this2 = this;

            console.log('eccomiiiii');
            socket.on('RECEIVE_MESSAGE', function (inboundMessage) {
                //   console.log('received message', inboundMessage)
                _this2.props.addMessage(inboundMessage);
                console.log('received message', inboundMessage);
            });
        }
        /*addMessage(data){
            //this.setState({messages:[...this.state.messages, data]})
            dispatch(messageAction.newMessage(data));
        }*/

    }, {
        key: 'sendMessage',
        value: function sendMessage(ev) {
            ev.preventDefault();
            socket.emit('SEND_MESSAGE', {
                user: this.state.username,
                message: this.state.message
            });
            this.setState({ message: '' });
        }
    }, {
        key: 'setUsername',
        value: function setUsername(ev) {
            this.setState({ username: ev.target.value });
        }
    }, {
        key: 'setMessage',
        value: function setMessage(ev) {
            this.setState({ message: ev.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_BoxMessage2.default, { messages: this.props.messages }),
                _react2.default.createElement(_UserDashBoard2.default, { setUsername: this.setUsername, username: this.state.username,
                    setMessage: this.setMessage, message: this.state.message,
                    sendMessage: this.sendMessage
                })
            );
        }
    }]);

    return Chat;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    console.log(state);
    return {
        messages: state.messagesReducer.messages
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    /* return {
         addMessage: data => {
             console.log('DISPACCIO')
             dispatch(messageAction.newMessage(data))
         }
     }*/
    return (0, _redux.bindActionCreators)({ addMessage: messageAction.newMessage }, dispatch);
};

Chat = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Chat);

exports.default = Chat;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.newMessage = newMessage;
var NEW_MESSAGE = 'NEW_MESSAGE';

/* in data we have the user and the text */

function newMessage(data) {
    return {
        type: NEW_MESSAGE,
        data: data
    };
}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoxMessage = function BoxMessage(_ref) {
    var messages = _ref.messages;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'p',
            null,
            'Global Chat'
        ),
        _react2.default.createElement(
            'div',
            { className: 'messages' },
            messages.map(function (message) {

                return _react2.default.createElement(
                    'div',
                    null,
                    message.user != '' ? message.user + ': ' + message.message : message.message
                );
            })
        )
    );
};

/*function BoxMessage(props){
    return <div>SORETA</div>
}*/

exports.default = BoxMessage;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UserDashBoards(props) {
    return _react2.default.createElement(
        "div",
        { className: "card-footer" },
        _react2.default.createElement("input", { type: "text", placeholder: "Username", value: props.username, onChange: props.setUsername, className: "form-control" }),
        _react2.default.createElement("br", null),
        _react2.default.createElement("input", { type: "text", placeholder: "Message", className: "form-control", value: props.message, onChange: props.setMessage }),
        _react2.default.createElement("br", null),
        _react2.default.createElement(
            "button",
            { onClick: props.sendMessage, className: "btn btn-primary form-control" },
            "Send"
        )
    );
}

exports.default = UserDashBoards;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Landing = __webpack_require__(51);

var _Landing2 = _interopRequireDefault(_Landing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(_Landing2.default, null)
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store;

            return new Promise(function (resolve) {
                return resolve();
            }); //default
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Landing = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Landing = exports.Landing = function (_Component) {
  _inherits(Landing, _Component);

  function Landing() {
    _classCallCheck(this, Landing);

    return _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).apply(this, arguments));
  }

  _createClass(Landing, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'LANDING PAGE'
        )
      );
    }
  }]);

  return Landing;
}(_react.Component);

Landing.propTypes = {};

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = {};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Landing);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Surveys = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Surveys = exports.Surveys = function (_Component) {
  _inherits(Surveys, _Component);

  function Surveys() {
    _classCallCheck(this, Surveys);

    return _possibleConstructorReturn(this, (Surveys.__proto__ || Object.getPrototypeOf(Surveys)).apply(this, arguments));
  }

  _createClass(Surveys, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
          'h1',
          null,
          'Surveys page'
        )
      );
    }
  }]);

  return Surveys;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = {};

exports.default = Surveys;
//export default connect(mapStateToProps, mapDispatchToProps)(Survays)

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(7);

var _messagesReducer = __webpack_require__(55);

var _messagesReducer2 = _interopRequireDefault(_messagesReducer);

var _searchReducer = __webpack_require__(56);

var _searchReducer2 = _interopRequireDefault(_searchReducer);

var _authReducer = __webpack_require__(57);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _reduxForm = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    chat: _messagesReducer2.default,
    dataFormSearch: _searchReducer2.default,
    auth: _authReducer2.default,
    form: _reduxForm.reducer
});

exports.default = rootReducer;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _initialState = __webpack_require__(11);

var _initialState2 = _interopRequireDefault(_initialState);

var _redux = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function messagesReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.chat;
    var action = arguments[1];


    console.log(action.type);
    switch (action.type) {
        case 'NEW_MESSAGE':

            //return [...state, action.message]

            return Object.assign({}, state, {
                messages: [].concat(_toConsumableArray(state.messages), [action.data])
            });

            console.log(action);

        //return [ ...state, action.data]

        default:
            return state;
    }
}

exports.default = messagesReducer;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _initialState = __webpack_require__(11);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.resultSetFormSearch;
    var action = arguments[1];


    switch (action.type) {
        case 'SEARCH_CATEGORIES_ACTION':

            break;

        default:
            return state;
    }
}

exports.default = searchReducer;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _auth = __webpack_require__(10);

var _initialState = __webpack_require__(11);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function authReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _auth.FETCH_USER:
            return action.payload || false;
        case _auth.REQUEST_LOGIN:
            return _extends({}, state, { isLogginIng: true });

        case _auth.RECEIVE_LOGIN:

            return _extends({}, state, { user: action.data, receivedAt: action.receivedAt, isLogginIng: false });

        default:
            return state;
    }
}

exports.default = authReducer;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var customMiddleware = function customMiddleware(store) {
  return function (next) {
    return function (action) {
      return isFunction(action) ? action(store.dispatch, store.getState) : next(action);
    };
  };
};

// isFunction(action) ? action(store.dispatch, store.getState): next(action) = customMiddleware(store)(next)(action)
var isFunction = function isFunction(action) {
  return typeof action === 'function';
};

exports.default = customMiddleware;

/**
 * Logs all actions and states after they are dispatched.
 */

var logger = exports.logger = function logger(store) {
  return function (next) {
    return function (action) {
      console.group(action.type);
      console.info('dispatching', action);
      var result = next(action);
      console.log('next state', store.getState());
      console.groupEnd(action.type);
      return result;
    };
  };
};

/**
 * Sends crash reports as state is updated and listeners are notified.
 */
var crashReporter = exports.crashReporter = function crashReporter(store) {
  return function (next) {
    return function (action) {
      try {
        return next(action);
      } catch (err) {
        console.error('Caught an exception!', err);
        Raven.captureException(err, {
          extra: {
            action: action,
            state: store.getState()
          }
        });
        throw err;
      }
    };
  };
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var winstonLogger = __webpack_require__(61);

var getNamespace = __webpack_require__(12).getNamespace;

// Wrap Winston logger to print reqId in each log
var formatMessage = function formatMessage(message) {
    var myRequest = getNamespace('my request');
    message = myRequest && myRequest.get('reqId') ? message + " reqId: " + myRequest.get('reqId') : message;
    return message;
};

var logger = {
    log: function log(level, message) {
        winstonLogger.log(level, formatMessage(message));
    },
    error: function error(message) {
        winstonLogger.error(formatMessage(message));
    },
    warn: function warn(message) {
        winstonLogger.warn(formatMessage(message));
    },
    verbose: function verbose(message) {
        winstonLogger.verbose(formatMessage(message));
    },
    info: function info(message) {
        winstonLogger.info(formatMessage(message));
    },
    debug: function debug(message) {
        winstonLogger.debug(formatMessage(message));
    },
    silly: function silly(message) {
        winstonLogger.silly(formatMessage(message));
    }
};

module.exports = logger;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(6);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _stripe = __webpack_require__(63);

var _stripe2 = _interopRequireDefault(_stripe);

var _keys = __webpack_require__(5);

var _keys2 = _interopRequireDefault(_keys);

var _requireLogin = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stripeHandler = (0, _stripe2.default)(_keys2.default.stripe.secretkey);

var router = _express2.default.Router();

router.use(_bodyParser2.default.urlencoded({ extended: false }));
router.use(_bodyParser2.default.json());

router.post('/stripe/payments', _requireLogin.requireLogin, async function (req, res) {
    //console.log('req body: ',req.body)

    // if the user is not logged in we refuse it wit an 401 Forbidden and a mess You must log in
    //APPLY MIDDLEWARE with requireLogin


    var charge = await stripeHandler.charges.create({
        amount: 500,
        currency: 'usd',
        description: '',
        source: req.body.id
    });

    req.user.credits += 5;
    var user = await req.user.save();

    res.send(user);
});

exports.default = router;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("stripe");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var requireLogin = exports.requireLogin = function requireLogin(req, res, next) {

    // if the user is not logged in we refuse it wit an 401 Forbidden and a mess You must log in
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in' });
    }

    next();
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(8);

var _passport = __webpack_require__(9);

var _passport2 = _interopRequireDefault(_passport);

var _passportGoogleOauth = __webpack_require__(66);

var _passportGoogleOauth2 = _interopRequireDefault(_passportGoogleOauth);

var _keys = __webpack_require__(5);

var _keys2 = _interopRequireDefault(_keys);

var _mongoose = __webpack_require__(4);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _googleUser = __webpack_require__(67);

var _googleUser2 = _interopRequireDefault(_googleUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// don't export explicity the model because in a test envirment using tests mongoose
// can be confused and return errors
//const GoogleUsers = mongoose.model('googleUsers');

/* done( err, object ) is middlware called by passport  */

// serialize the OAuthUser ID and passport put it in the cookie headers
// ADD GOOGLE strategy for passport Authentication
// IMPORT PASSPORT FOR OAUTH GOOGLE

_passport2.default.serializeUser(function (googleUser, done) {
    (0, _config.logStars)('USER SERIALIZZATO');
    done(null, googleUser.id);
});

// diserialize an incoming ID and search in the collection for a OAuthUser with the same ID
_passport2.default.deserializeUser(function (id, done) {
    (0, _config.logStars)('CERCO USER: ' + id);
    _googleUser2.default.findById(id).then(function (googleUser) {
        (0, _config.logStars)('USER TROVATO');
        done(null, googleUser);
    });
});

// CLIENT-ID: 
// CLIENT-SECRET-KEY: 
_passport2.default.use(new _passportGoogleOauth2.default(_keys2.default.google, function (accessToken, refreshToken, profile, done) {

    _googleUser2.default.findOne({ googleID: profile.id }, function (err, googleUser) {
        if (err) console.log("There was a problem finding the user.");
        if (!googleUser) {
            console.log("No user found.");

            _googleUser2.default.create({ googleID: profile.id }, function (err, googleuser) {
                console.log('User Salvato');
                done(null, googleUser);
            });
        } else {
            console.log("Google User found: ", googleUser);
            done(null, googleUser);
        }
    });
}));

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth20");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(4);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var googleUserSchema = new _mongoose2.default.Schema({

    googleID: String,
    credits: { type: Number, default: 0 }

});

_mongoose2.default.model('googleUsers', googleUserSchema);
exports.default = _mongoose2.default.model('googleUsers');

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("cookie-session");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map