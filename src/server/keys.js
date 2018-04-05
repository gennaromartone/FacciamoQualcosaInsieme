// FIGURE OUT WHAT SET OF CREDENTIALS TO RETURN

let keys = null;

if( process.env.NODE_ENV === 'production'){
    // we are in production mode
    module.exports = require('./config/prod')
}else{
    // we are in dev mode
    module.exports = require('./config/dev');

}
