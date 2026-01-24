const mongoose = require('mongoose');

const RendezVousModel = new mongoose.Schema({

     nom_client:{ type:String , required:true},
     email_client:{type:String,required:true},
     model_voiture:{type:String,required:true},
     probleme_voiture:{type:String , required:false},
     date_rendez_vous:{type:Date,required:true},
     date_rendez_vous_disponible:{type:Date},
     photo_voiture:[{   filename: String,
                        url: String,
                        size: Number,
                        mimetype: String}]
     
});

module.exports = mongoose.model('RendezVous',RendezVousModel);