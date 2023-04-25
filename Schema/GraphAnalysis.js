const mongoose = require('mongoose');

const graphAnalysisSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: ''
    },
    weeklyUrl: {
        type: String,
    },
    dailyUrl: {
        type: String,
    },
    monthlyUrl: {
        type: String
    },
});


const GraphAnalysis = mongoose.model('GraphAnalysis', graphAnalysisSchema);

module.exports = GraphAnalysis;
