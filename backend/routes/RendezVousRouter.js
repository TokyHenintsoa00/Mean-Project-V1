const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const Rdv = require('../models/RendezVous');
const User = require("../models/User")
router.post('/rdvClient',async function (req,res) {

    try{
        const rdvClient = {
            nom_client: req.body.nom_client,
            email_client: req.body.email_client,
            date_rendez_vous: req.body.date_rendez_vous,
            date_rendez_vous_disponible: req.body.date_rendez_vous_disponible,
            photo_voiture: req.body.photo_voiture
        };

        const email = rdvClient.email_client;
        //find user by email
        const user = await User.findOne({email});

        
        if (!user) {
           
            
            console.log("user non disponible");

            return res.status(400).json({ message: "Utilisateur non disponible" });
            
            
        } else if(!rdvClient.photo_voiture||rdvClient.photo_voiture.length < 2 ) {
            console.log("photo doit etre plus de 2");
            return res.status(400).json({ message: "Il faut au moins 2 photos" });
        }
        else{
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