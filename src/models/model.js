const mongoose= require('mongoose');
const {Schema} = mongoose;


const CurriculumSchema = new Schema({
    nombre: {type:String,required:false},
    apellidos: {type:String,required:false},
    carrera: {type:String,required:false},
    email: {type:String,required:true},
    password:{type:String,required:false},
    experiencia: {type:String,required:false},
    educacion: {type:String,required:false},
    telefono: {type:Number,required:false},
    descripcion: {type:String,required:false},
    redes: {type:String,required:false}
})

module.exports = mongoose.model('Curriculum', CurriculumSchema)