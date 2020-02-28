const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Biblia = require('../models/Biblia');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const biblia = await Biblia.find();

    return res.send({ biblia });
  } catch (err) {
    return res.status(400).send({ error: 'Erro ao listar Bíblia.'});
  }
});

router.get('/:bibliaId', async (req, res) => {
  try {
    const verso = await Biblia.findById(req.params.bibliaId);

    return res.send({ verso });
  } catch (err) {
    return res.status(400).send({ error: 'Erro ao listar verso.'});
  }
});

router.post('/', authMiddleware, async (req, res) => {
  try {
    const verso = await Biblia.create(req.body);

    return res.send({ verso });
  } catch (err) {
    return res.status(400).send({ error: 'Erro ao criar novo verso.'});
  }
});

router.patch('/:bibliaId', authMiddleware, async (req, res) => {
  try {
    const verso = await Biblia.findByIdAndUpdate(req.params.bibliaId, req.body, { new: true });

    return res.send({ verso });
  } catch (err) {
    return res.status(400).send({ error: 'Erro ao editar verso.'});
  }
});

router.delete('/:bibliaId', authMiddleware, async (req, res) => {
  try {
    await Biblia.findByIdAndDelete(req.params.bibliaId);

    return res.send();
  } catch (err) {
    return res.status(400).send({ error: 'Erro ao deletar verso.'});
  }
});

module.exports = app => app.use('/biblia', router);
