const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');

router.get('/', async (req, res) => {
  const faculties = await Faculty.find().populate('departmentId');
  res.json(faculties);
});

router.post('/', async (req, res) => {
  const faculty = new Faculty(req.body);
  await faculty.save();
  res.status(201).send(faculty);
});

router.put('/:id', async (req, res) => {
  const updated = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

module.exports = router;
