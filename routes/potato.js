var express = require('express'); 
const potato_controlers= require('../controllers/potato'); 
var router = express.Router(); 
 

/* GET costumes */
router.get('/', potato_controlers.potato_view_all_Page);

router.get('/detail', potato_controlers.potato_view_one_Page);

/* GET create costume page */
router.get('/create', potato_controlers.potato_create_Page);


router.get('/update', potato_controlers.potato_update_Page); 

router.get('/delete', potato_controlers.potato_delete_Page); 

module.exports = router;

module.exports = router;