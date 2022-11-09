var express = require('express'); 
const ball_controlers= require('../controllers/balls'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', ball_controlers.ball_view_all_Page ); 

module.exports = router; 
