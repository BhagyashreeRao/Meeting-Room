//import model
const { isValidObjectId } = require('mongoose');
const meetingModel = require('../models/meeting')

const moment = require('moment')
var mongoose = require('mongoose')

module.exports.getAllMeetings = async() => {

}

module.exports.getAvailableSlots = async(req,res) => {
    try{
    const today =  moment(new Date().setHours(24,0,0,0)).format();
    const tomorrow = moment(new Date().setHours(24,11,59,0)).format();
    console.log( moment(today).format())
    const getBookingsForToday = await meetingModel.find({
        startTime: {
        $gte: today,
        $lt: tomorrow
    }})
    
    res.send(getBookingsForToday)
    }
    catch(e){
        console.log(e)
        res.status(400).send("Some error occurred")
    }
}

module.exports.createMeeting = async(req,res) => {
    try{
        let meeting = new meetingModel();
        meeting.startTime = moment(req.body.startTime).format();
        meeting.endTime = moment(req.body.endTime).format(); 
        await meeting.save()
        res.status(200).send(meeting)
    }
    catch(e){
        console.log(e)
        res.status(400).send("Some error occurred")
    }
}

module.exports.updateMeeting = async(req,res) => {
    try{
        meeting_id  = req.params.id;
        let meeting = new meetingModel();
        newMeeting = {}
        newMeeting.startTime = req.body.startTime;
        newMeeting.endTime = req.body.endTime;


        const filter = { _id: mongoose.Types.ObjectId(meeting_id)};
        const update = newMeeting

        let updatedMeeting = await meetingModel.findOneAndUpdate(filter, update);

        res.status(200).send(updatedMeeting)
    }
    catch(e){
        console.log(e)
        res.status(400).send("Some error occurred")
    }
}

module.exports.deleteMeeting = async(req,res) => {
    try{
        meeting_id  = req.params.id;
        let meeting = new meetingModel();
        await meeting.deleteOne({ _id: mongoose.Types.ObjectId(meeting_id)})
        res.status(200).send("Deletion successful")
    }
    catch(e){
        console.log(e)
        res.status(400).send("Some error occurred")
    }
}