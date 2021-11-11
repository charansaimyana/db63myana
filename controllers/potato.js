var potato = require('../models/potato'); 
 
// List of all potato 
// List of all potato
exports.potato_list = async function(req, res) { 
    try{ 
        thepotato = await potato.find(); 
        res.send(thepotato); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.potato_view_all_Page = async function(req, res) { 
    try{ 
        thepotato = await potato.find(); 
        res.render('potato', { title: 'potato Search Results', results: thepotato }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
exports.potato_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: potato detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
// Handle Costume create on POST. 
exports.potato_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new potato(); 
    
    document.type = req.body.type; 
    document.expdate = req.body.expdate; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// Handle Costume delete form on DELETE. 
exports.potato_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: potato delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.potato_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: potato update PUT' + req.params.id); 
};