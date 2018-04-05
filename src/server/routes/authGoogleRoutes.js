import passport from 'passport'

import express from 'express'
import bodyParser from 'body-parser'

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get(
	'/',
	 passport.authenticate('google', {
		 scope: ['profile','email']
}))

router.get(
	'/callback',
	passport.authenticate('google'),
	(req,res) => {
		res.redirect("/")
	}
)	

router.get('/logout', (req,res) =>{
	req.logout();
	res.redirect('/').send(req.user)
})

router.get('/current_user', (req,res,done) => {
    res.send( req.user );
})

export default router;