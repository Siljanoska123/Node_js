const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
  },

  position:{
    type: String,

  },

});

module.exports = mongoose.model('employee', employeeSchema);


// ova employee sekogas mora da e vo ednina

// schema e funkcija i sekogas se pisuva so golema bukva
