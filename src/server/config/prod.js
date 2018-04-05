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

