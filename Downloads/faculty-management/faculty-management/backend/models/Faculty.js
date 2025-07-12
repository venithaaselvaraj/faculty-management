const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  name: String,
  designation: String,
  email: String,
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  }
});

module.exports = mongoose.model('Faculty', FacultySchema);
