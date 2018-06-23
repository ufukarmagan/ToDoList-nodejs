'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {
      type: String,
      required: 'Kindly enter the name of the task'
    },
    Created_date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [{
        type: String,
        enum: ['pending', 'ongoing', 'completed']
      }],
      default: ['pending']
    }
  });

  //collectionun nasıl görüneceği hakkındaki schema yazıldı. Collectionslar tablolara karşılık geliyor.
  //request atarken bu şemanın dışına çıkarsan işlemi yapamazsın
  
  
  module.exports = mongoose.model('Tasks', TaskSchema);