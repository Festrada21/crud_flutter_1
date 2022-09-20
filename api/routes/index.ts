import {Router} from 'express';
import Pais from '../models/pais';     

const router = Router();

router.get('/paises', async(req,res)=>{
    const paises = await Pais.findAll();
    res.json(paises).status(200);
});

router.get('/pais/:id', async(req,res)=>{
    const pais = await Pais.findByPk(req.params.id);
  res.json(pais);
});

router.post('/paises', async(req,res)=>{
    const { body } = req;

    const pais = await Pais.create({
        Nombre: body.Nombre,
    });
    await pais.save();
    res.status(201).json(pais);
});

router.put('/pais/:id',(req,res)=>{
    res.send('actualizar pais');
});

router.delete('/pais/:id',(req,res)=>{
    res.send('eliminar pais');
});

export default router;