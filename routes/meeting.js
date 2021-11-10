const express = require('express');
const meetingRouter = express.Router()

const meetingController = require('.././controller/meeting')

meetingRouter.route('/').get(meetingController.getAllMeetings)
meetingRouter.route('/available-slots').get(meetingController.getAvailableSlots)
meetingRouter.route('/').post(meetingController.createMeeting)
meetingRouter.route('/:id').put(meetingController.updateMeeting)
meetingRouter.route('/:id').delete(meetingController.deleteMeeting)

module.exports = meetingRouter;