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
 
// for a specific potato. 
exports.potato_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await potato.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};  
 
// Handle potato create on POST. 
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
 
 
// Handle potato delete form on DELETE. 
exports.potato_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await potato.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle potato update form on PUT. 
exports.potato_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await potato.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.potato_type)  
               toUpdate.potato_type = req.body.potato_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

exports.potato_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await potato.findById(req.query.id)
        res.render('potatodetail',
            { title: 'potato Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.potato_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('potatocreate', { title: 'potato Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}

// Handle building the view for updating a costume. 
// query provides the id 
exports.potato_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await potato.findById(req.query.id)
        res.render('potatoupdate', { title: 'potato Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query 
exports.potato_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await potato.findById(req.query.id)
        res.render('potatodelete', {
            title: 'potato Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};



