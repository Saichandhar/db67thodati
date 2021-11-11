var earphone = require('../models/earphone'); 
 
// List of all Costumes 
exports.earphone_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: earphone list'); 
}; 
 
// for a specific Costume. 
exports.earphone_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: earphone detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.earphone_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: earphone create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.earphone_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: earphone delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.earphone_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: earphone update PUT' + req.params.id); 
}; 