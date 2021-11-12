var earphone = require('../models/earphone'); 
 
// List of all earphones 
exports.earphone_list = async function(req, res) { 
    try{ 
        theearphone = await earphone.find(); 
        res.send(theearphone); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific earphone. 
exports.earphone_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await earphone.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle earphone create on POST. 
exports.earphone_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new earphone(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // { earphone_type":"goat", "cost":12, "size":"large"} 
    document.Brand = req.body.Brand; 
    document.earphone_type = req.body.earphone_type; 
    document.Cost = req.body.Cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle earphone delete form on DELETE. 
exports.earphone_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: earphone delete DELETE ' + req.params.id); 
}; 
 
// Handle earphone update form on PUT. 
exports.earphone_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: earphone update PUT' + req.params.id); 
}; 

//  VIEWS 
// Handle a show all view 
exports.earphone_view_all_Page = async function(req, res) { 
    try{ 
        theearphone = await earphone.find(); 
        res.render('earphone', { title: 'earphone Search Results', results: theearphone }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 