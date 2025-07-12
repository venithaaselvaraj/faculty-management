const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
  name: String,
  hod: String,
  building: String
});

module.exports = mongoose.model('Department', DepartmentSchema);
