const {Schema, model} = require('mongoose');

const serviceSchema = new Schema({
  description:{
    type:String,
    required: true
  },
  price:{
    type: String,
    required: true
  },
  quantity:{
    type: String,
    required: true
  },
  image:{
    type: String,
  }
})

const service = new model("Service", serviceSchema);
module.exports = service;