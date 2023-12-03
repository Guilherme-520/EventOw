const express = require('express');
const router = express.Router();
const evento = require('../models/evento')

router.get('/', async (req, res) => {
    const eve = await evento.findAll();
    res.json(eve)
});

router.post("/", async (req, res) => {
    const eve = req.body;
    try {
        const novo = await evento.create(eve)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Evento '+ error.message });
    }
});

module.exports = router;
