const mongoose = require("mongoose") 
const earphoneSchema = mongoose.Schema({ 
 Brand: String, 
 Earphones_type: String, 
 Cost: Number 
}) 
 
module.exports = mongoose.model("earphone", earphoneSchema)