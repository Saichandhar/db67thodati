var express = require('express');
var router = express.Router();

// Require controller modules. 
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/earphone');

/// API ROUTE /// 

// GET resources base. 
router.get('/resource', api_controller.api);

/// COSTUME ROUTES /// 

// POST request for creating a Costume.  
router.post('/resource/earphone', costume_controller.earphone_create_post);

// DELETE request to delete Costume. 
router.delete('/resource/earphone/:id', costume_controller.earphone_delete);

// PUT request to update Costume. 
router.put('/resource/earphone/:id',
    costume_controller.earphone_update_put);

// GET request for one Costume. 
router.get('/resource/earphone/:id', costume_controller.earphone_detail);

// GET request for list of all Costume items. 
router.get('/resource/earphone', costume_controller.earphone_list);

module.exports = router;