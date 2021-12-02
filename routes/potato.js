var express = require('express'); 
const potato_controlers= require('../controllers/potato'); 
var router = express.Router(); 
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
 

/* GET costumes */
router.get('/', potato_controlers.potato_view_all_Page);

router.get('/detail', potato_controlers.potato_view_one_Page);

/* GET create costume page */
router.get('/create', potato_controlers.potato_create_Page);


router.get('/update',secured, potato_controlers.potato_update_Page); 

router.get('/delete', potato_controlers.potato_delete_Page); 

module.exports = router;

module.exports = router;