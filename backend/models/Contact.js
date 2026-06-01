const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

    nombre:{
        type:String,
        required:true
    },

    correo:{
        type:String,
        required:true
    },

    telefono:{
        type:String,
        default:""
    },

    asunto:{
        type:String,
        default:""
    },

    mensaje:{
        type:String,
        required:true
    },

    leido:{
        type:Boolean,
        default:false
    },
    estado:{
    type:String,
    enum:[
        "nuevo",
        "respondido"
    ],
    default:"nuevo"
}

},{
    timestamps:true
});

module.exports = mongoose.model(
    "Contact",
    contactSchema
);