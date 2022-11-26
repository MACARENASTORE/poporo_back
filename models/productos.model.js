const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({

    nombre:{type:String, required: true, max:60},
    proveedor:{type:String, required: true, max:60},
    ean:{type:String, required: true, max:20},
    precio_pro:{type:Number, required:true, max:10000000},
    precio_vent:{type:Number, required:true, max:10000000},
    imagen: {type:String, required: true, max:255}
});


    module.exports = mongoose.model("productos", ProductosSchema);
