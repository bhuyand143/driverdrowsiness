const mongoose = require('mongoose');

const SessionSchema =new mongoose.Schema({
    eyes_closed : {type:String},
    mouth_open : {type:String},
    status : {type:String}
    },
     {timestamps:true}
  );

  module.exports = mongoose.model("Session",SessionSchema);