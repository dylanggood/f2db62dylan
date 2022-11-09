var express = require('express'); 
const ball_controlers = require('../controllers/balls'); 
var router = express.Router(); 
 
/* GET home page. */
router.get('/', function(req, res, next) { console.log("about to render balls")
  res.render('balls', { title: 'Search Results: Balls' });
});

module.exports = router;
