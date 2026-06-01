const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({

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

    proyecto:{
        type:String,
        required:true
    },

    opciones:[{
        type:String
    }],

    total:{
        type:Number,
        required:true
    },
    estado:{
    type:String,
    enum:[
        "nuevo",
        "contactado",
        "cerrado"
    ],
    default:"nuevo"
}

},{
    timestamps:true
});


module.exports = mongoose.model(
    "Quote",
    quoteSchema
);