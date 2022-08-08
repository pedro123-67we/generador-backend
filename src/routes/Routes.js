const { Router } = require('express');
const express=require('express');
const router = express.Router();

const Curriculum = require('../models/model')


router.get('/', async (req,res) =>{
    const curriculums = await Curriculum.find()
    console.log(curriculums)
    res.json(curriculums)
});

router.get('/:id', async (req,res)=>{
    const curriculum = await Curriculum.findById(req.params.id);
    res.json(curriculum);
});

router.post('/', async (req,res)=>{
    const {nombre,apellidos,carrera,email,password,experiencia,educacion,telefono,
    descripcion,redes} = req.body;
    const curriculum = new Curriculum ({
        nombre,
        apellidos,
        carrera,
        email,
        password,
        experiencia,
        educacion,
        telefono,
        descripcion,
        redes});
        await curriculum.save();
    res.json({status:'curriculum guardado'});
});

router.put('/:id', async (req,res)=>{
    const {nombre,apellidos,carrera,email,password,experiencia,educacion,telefono,
        descripcion,redes} = req.body;
        const newCurriculum ={
            nombre,
            apellidos,
            carrera,
            email,
            password,
            experiencia,
            educacion,
            telefono,
            descripcion,
            redes};
            await Curriculum.findByIdAndUpdate(req.params.id,newCurriculum)
            res.json({status: 'curriculum actualizado'})
});

router.delete('/:id', async (req,res)=>{
    await Curriculum.findByIdAndRemove(req.params.id)
    res.json({status:"curriculum eliminado"})
});

module.exports = router;