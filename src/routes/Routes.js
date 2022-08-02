const express=require('express');
const router = express.Router();

const Curriculum = require('../models/model')

router.get('/', async (req,res) =>{
    const curriculum = await Curriculum.find()
    console.log(curriculum)
    res.json(curriculum)
});

router.post('/', async (req,res)=>{
    const {nombre,carrera,email,experiencia,educacion,telefono,
    descripcion,redes} = req.body;
    const curriculum = new Curriculum ({
        nombre,
        carrera,
        email,
        experiencia,
        educacion,
        telefono,
        descripcion,
        redes});
        await curriculum.save();
    res.json({status:'curriculum guardado'});
});

router.put('/:id', async (req,res)=>{
    const {nombre,carrera,email,experiencia,educacion,telefono,
        descripcion,redes} = req.body;
        const newCurriculum ={
            nombre,
            carrera,
            email,
            experiencia,
            educacion,
            telefono,
            descripcion,
            redes};
            await Curriculum.findByIdAndUpdate(req.params.id,newCurriculum)
            res.json({status: 'curriculum actualizado'})
});

module.exports = router;