const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
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

const interview = mongoose.model('Interview', interviewSchema);
module.exports = interview;