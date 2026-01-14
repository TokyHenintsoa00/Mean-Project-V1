const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    nom:{ type:String , required:true},
    prenom:{ type:String , required:true},
    pwd:{ type:String , required:true},
    email:{ type:String , required:true},
    //fonction => MECANICIEN , CLIENT , MANAGER
    fonction:{ type:String , required:true}
});

module.exports = mongoose.model('User',UserModel);