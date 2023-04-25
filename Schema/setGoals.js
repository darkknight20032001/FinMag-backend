const mongoose = require('mongoose');

const setGoalsSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: ''
    },
    dailyGoals: {
        type: String,
    },
    weeklyGoals: {
        type: String,
    },
    monthlyGoals: {
        type: String
    },
});


const SetGoals = mongoose.model('SetGoals', setGoalsSchema);

module.exports = SetGoals;
