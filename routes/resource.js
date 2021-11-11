var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var potato_controller = require('../controllers/potato'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// potato ROUTES /// 
 
// POST request for creating a potato.  
router.post('/potato', potato_controller.potato_create_post); 
 
// DELETE request to delete potato. 
router.delete('/potato/:id', potato_controller.potato_delete); 
 
// PUT request to update potato. 
router.put('/potato/:id', 
potato_controller.potato_update_put); 
 
// GET request for one potato. 
router.get('/potato/:id', potato_controller.potato_detail); 
 
// GET request for list of all potato items. 
router.get('/potato', potato_controller.potato_list); 
 
module.exports = router;