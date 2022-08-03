const mongoose= require('mongoose');
const {Schema} = mongoose;


const CurriculumSchema = new Schema({
    nombre: {type:String,required:true},
    carrera: {type:String,required:true},
    email: {type:String,required:true},
    password:{type:String,required:true},
    experiencia: {type:String,required:true},
    educacion: {type:String,required:true},
    telefono: {type:Number,required:true},
    descripcion: {type:String,required:true},
    redes: {type:String,required:true}
})

module.exports = mongoose.model('Curriculum', CurriculumSchema)