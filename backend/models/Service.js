const mongoose = require("mongoose");

const serviceSchema =
new mongoose.Schema({

    titulo:{
        type:String,
        required:true
    },

    descripcion:{
        type:String,
        required:true
    },

    precio:{
        type:Number,
        required:true
    },

    imagen:{
        type:String,
        default:""
    },
    activo:{
    type:Boolean,
    default:true
}

},{
    timestamps:true
});

module.exports =
mongoose.model(
    "Service",
    serviceSchema
);