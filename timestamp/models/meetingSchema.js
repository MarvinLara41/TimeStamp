const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const meetingSchema = new Schema({
    event: {
        type: Schema.Types.ObjectId,
        ref: "Event"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {timestamps:true}
);

const meeting = mongoose.model('Meeting', meetingSchema);
module.exports = meeting;