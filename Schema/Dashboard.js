const mongoose = require('mongoose');

const addExpenseSchema = new mongoose.Schema({
    expenseType: { type: String },
    expenseAmount: { type: String },
});

const dashboardSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: ''
    },
    graphUrl: {
        type: String,
        required: true,
    },
    addExpense: [addExpenseSchema],
});


const Dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = Dashboard;
