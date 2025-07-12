const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

router.get('/', async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
});

router.post('/', async (req, res) => {
  const dept = new Department(req.body);
  await dept.save();
  res.status(201).send(dept);
});

router.put('/:id', async (req, res) => {
  const updated = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

module.exports = router;
