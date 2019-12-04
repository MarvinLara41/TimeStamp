const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const meetingSchema = new Schema({
    userId: {
      type: String,
      default: ''
  },
    event: {
        type: String
        
    },

    event_date: {
        type: String
    },

    user1: {
        type: String
    },



    user2: {
        type: String
    }
    ,

    date : {
        type: Date,
        default: Date.now
    }


}
, {timestamps:true}
);

const meeting = mongoose.model('Meeting', meetingSchema);

module.exports = meeting;