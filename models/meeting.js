
//mongodb+srv://Admin:admin1234@cluster0.wxemo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require('mongoose');

const meeting = new mongoose.Schema({
    startTime: {
        type : Date
    },
    endTime: {
        type : Date
    }
})

module.exports = mongoose.model("Meetings",meeting)