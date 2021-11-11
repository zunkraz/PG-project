const Schedule = require('../../models/Schedule');
const dateToObj = require('../../helpers/dateToObj');
const clearSchedules = require('./clearSchedules');


async function checkSchedule(id) {
    const falses = await Schedule.find({userId:id}).then(data => data.map(e => e.date.shortcut))
    return falses;
};

module.exports = async (body) => {
    body.map(e => e.date = dateToObj(e.date))
    let id = body[0].userId

    clearSchedules(id)
    const falses = await checkSchedule(id)
    body = body.filter(e => !falses.includes(e.date.shortcut))

    return Schedule.insertMany(body)
};