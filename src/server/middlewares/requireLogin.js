export const requireLogin = (req,res,next) => {

    // if the user is not logged in we refuse it wit an 401 Forbidden and a mess You must log in
    if( !req.user ){
        return res.status(401).send({error: 'You must log in'});
    }

    next();
} 