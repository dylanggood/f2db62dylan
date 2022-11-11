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
// for a specific Costume. 
exports.ball_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Ball.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
  
// Handle Costume delete on DELETE. 
exports.ball_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Ball.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
  
// Handle Costume update form on PUT. 
exports.ball_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Ball.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.ball_type)  
               toUpdate.ball_type = req.body.ball_type; 
        if(req.body.size) toUpdate.size = req.body.size; 
        if(req.body.weight) toUpdate.weight = req.body.weight; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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