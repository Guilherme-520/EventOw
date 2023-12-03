const express = require('express');
const router = express.Router();
const organizador = require('../models/organizador')

router.get('/', async (req, res) => {
    const orgs = await organizador.findAll();
    res.json(orgs)
});

router.post("/", async (req, res) => {
    const org = req.body;
    try {
        const novo = await organizador.create(org)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar organizador '+ error.message });
    }
});

module.exports = router;
