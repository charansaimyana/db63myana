var express = require('express'); 
const potato_controlers= require('../controllers/potato'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', potato_controlers.potato_view_all_Page ); 
module.exports = router;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('potato', { title: 'Search Results potato' });
});

module.exports = router;