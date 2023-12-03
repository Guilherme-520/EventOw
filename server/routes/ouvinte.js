const express = require('express')
const router = express.Router()
const ouvinte = require('../models/ouvinte');


router.get('/', async(req, res)=>{
    const ouvintes = await ouvinte.findAll();
    res.json(ouvintes)
})


router.get('/:id', async(req, res)=>{
  const id = req.params.id;
  const ouvintes = await ouvinte.findByPk(id);
  res.json(ouvintes)
})

router.post("/", async(req, res)=>{
    const novo = req.body

    try {
        const novoOuvinte = await ouvinte.create(novo)
        res.json(novoOuvinte)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar ouvinte '+ error.message });
    }
})


router.put("/:id", async(req, res)=>{
    const id = req.params.id;
  const novosDados = req.body;

  try {
    const ouvinteAtualizado = await ouvinte.update(novosDados, {
      where: {
        id: id,
      },
    });

    if (ouvinteAtualizado[0] === 1) {
      res.json({ message: 'Ouvinte atualizado com sucesso.' });
    } else {
      res.status(404).json({ error: 'Ouvinte não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar ouvinte ' + error.message });
  }
})


module.exports = router;
