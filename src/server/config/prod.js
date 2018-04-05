export default {

    google: {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALBACK_URL,
      },
    mongoDB: {
        mongoURI: process.env.MONGO_URI,
      },
    cookie: {
        cookieKey: process.env.COOKIE_KEY,
      },
      stripe: {
        publishableKey: process.env.PUBLISHABLE_KEY,
        secretkey: process.env.SECRET_KEY,
      }
};
  

