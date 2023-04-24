const mongoose = require('mongoose');

const notifyMeSchema = new mongoose.Schema({
    notifyDate: { type: String },
    subscriptionType: { type: String }
});

const profileSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: ''
    },
    dob: {
        type: String,
        required: true,

    },
    salary: {
        type: String,
        required: true
    },
    salaryExcluded: {
        type: String,
        default: '0',
    },
    profilePic: {
        type: String,

    },
    notifyMe: [notifyMeSchema],
});


const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
