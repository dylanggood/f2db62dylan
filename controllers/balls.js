var Ball = require('../models/balls'); 
 
    // List of all Costumes 
exports.ball_list = async function(req, res) { 
    try{ 
        let theBalls = await Ball.find(); 
        res.send(theBalls); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

 
// for a specific Costume. 
exports.ball_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ball detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.ball_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Ball(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.ball_type = req.body.ball_type; 
    document.size = req.body.size; 
    document.weight = req.body.weight; 
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
exports.ball_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ball delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.ball_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ball update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.ball_view_all_Page = async function(req, res) { 
    try{ 
        theBalls = await Ball.find(); 
        res.render('balls', { title: 'Ball Search Results', results: theBalls }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 