export const requireLogin = (req,res,next) => {

    // if the user is not logged in we refuse it wit an 401 Forbidden and a mess You must log in
    if( !req.user ){
        return res.status(401).send({error: 'You must log in'});
        // 401 HTTP Response - Unathorized
    }

    // multiple files can be set
/*res.set({
    'content-type': 'application/json',
    'content-length': '100',
    'warning': "with content type charset encoding will be added by default"
 });*/

    next();
} 

export const requireCredits = (req,res,next) => {

    if( req.user.credits < 1  ){
        return res.status(403).send({error: 'Not Enough Credits'});
        // 403 HTTP Response - Forbidden
    }

    next();
}