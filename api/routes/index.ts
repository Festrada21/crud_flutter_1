import {Router} from 'express';
import Pais from '../models/pais';     

const router = Router();

router.get('/paises', async(req,res)=>{
    const paises = await Pais.findAll();
    res.json({paises}).status(200);
});

router.get('/pais/:id', async(req,res)=>{
    const pais = await Pais.findByPk(req.params.id);
  res.json(pais);
});

router.post('/paises', async(req,res)=>{
    const { body } = req;

    const pais = await Pais.create({
        Nombre: body.Nombre,
    })

    await pais.save();
    res.status(201).json(pais);
});

router.put('/pais/:id', async(req,res)=>{
    const pais = await Pais.findByPk(req.params.id);
    const { body } = req;
    console.log(pais)
    if (!pais) {
        res.status(404).json({ msg: 'Pais no encontrado'});
    }

    await pais!.update(body);
    res.status(201).json(pais);

});

router.delete('/pais/:id', async(req,res)=>{
    const pais = await Pais.findByPk(req.params.id);
    const { body } = req;

    if (!pais) {
        res.status(404).json({ msg: 'Pais no encontrado'});
    }

    await pais!.destroy();
    res.status(201).json(pais);

});

export default router;