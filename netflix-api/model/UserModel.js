const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    likeMovies:Array
})

module.exports = mongoose.model('users',userSchema)