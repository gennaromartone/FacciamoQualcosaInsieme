// FIGURE OUT WHAT SET OF CREDENTIALS TO RETURN

console.log('AMBIENTE: ',process.env.NODE_ENV)

if( process.env.NODE_ENV === 'production'){
    // we are in production mode
    module.exports = require('./config/prod')
    
}else{
    // we are in dev mode
    module.exports = require('./config/dev');

}
