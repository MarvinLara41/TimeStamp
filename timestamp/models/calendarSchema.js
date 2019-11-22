const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema ({
fullName: {
    type: String,
    default: ''
},

schedule: {
    type: String,
    default: ''
},

date: {
    type: Date,
    default: Date.now()
},

meetingTime :{
    type: Number,
    default: ''
}


    
});

const calendar = mongoose.model("Calendar", calendarSchema);
module.exports = calendar;

// full name
// time of meeting
// scheduled  who wants to meet with
