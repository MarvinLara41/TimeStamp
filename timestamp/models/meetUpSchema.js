const mongoose = require('mongoose');

const meetUpSchema = new mongoose.Schema({
    fullName: {
        type: String,
        default: ''
    },

    userId: {
        type: String,
        default: ''
    },
    
    event: {
        type: Schema.Types.ObjectId,
        ref: "Event"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

});

const meetUp = mongoose.model('Meetup', meetUpSchema);
module.exports = meetUp;