const mongoose = require('mongoose');

const apprenantSchema = new mongoose.Schema({
    name: {
       type:String,
        required: [true, "L'email est requis"],
       trim: true, 
    },
    email: {
    type: String,
    required: [true, "L'email est requis"],
    trim: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Format d'email invalide"]
  }

});

module.exports = mongoose.model('Apprenant', apprenantSchema)