"use strict"
var mongoose = require("mongoose");

var UserModel = function(){
    var userSchema = new mongoose.Schema({
        "nombre": String,
        "app": String,
        "apm": String,
        "rol": String,
        "edad": String,
        "telefono": String,
        "correo": {
            type: String,
            trim: true,
            unique: true

        },

        "direccion" : String
        
    });

    var user = mongoose.model("User", userShema);

    return user;
}