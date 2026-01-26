const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const Rdv = require('../models/RendezVous');
const User = require("../models/User")
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10Mo max par fichier
});
router.post('/rdvClient',upload.array('photo_voiture', 10),async function (req,res) {

    try{

        const photo = req.files.map(file => ({
            filename: file.originalname,
            url: '', // À remplir si vous sauvegardez sur un serveur de fichiers
            size: file.size,
            mimetype: file.mimetype
        }));


        const rdvClient = {
            nom_client: req.body.nom_client,
            email_client: req.body.email_client,
            model_voiture:req.body.model_voiture,
            probleme_voiture:req.body.probleme_voiture,
            date_rendez_vous: req.body.date_rendez_vous,
            date_rendez_vous_disponible: req.body.date_rendez_vous_disponible,
            photo_voiture: photo
        };
        const email = rdvClient.email_client;
        //find user by email
        const user = await User.findOne({email});
        console.log(user);
        
        
        if (!user) {
            console.log("user non disponible");
            return res.status(400).json({ message: "Utilisateur non disponible" });
            
        } else if(rdvClient.photo_voiture.length < 2 ) {
            console.log("photo doit etre plus de 2");
            console.log("le length est "+rdvClient.photo_voiture.length);
            
            return res.status(400).json({ message: "Il faut au moins 2 photos" });
        }
        else{

            // .map =>creation un new tableau mihainga am tableau 1 
            // transform FileList[] to [] for json
            
            const rdv = new Rdv( rdvClient );
            await rdv.save();
            console.log("rdv inserer");
            res.status(200).json({message:"rdv inserer"});
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = router;