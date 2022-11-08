const mongoose = require("mongoose") 
const BallSchema = mongoose.Schema({ 
 ball_type: String, 
 size: String, 
 weight: Number, 
}) 

 
module.exports = mongoose.model("Ball", 
BallSchema)