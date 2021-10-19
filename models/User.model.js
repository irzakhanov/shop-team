const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  name: String
  
})

const User = mongoose.model("User", drinkSchema)

module.exports = User