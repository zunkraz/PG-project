const Schedule = require('../../models/Schedule');
const dateToObj = require('../../helpers/dateToObj');
const cleanSchedules = require('./cleanSchedules');

// async function deleteAvailables(id) {
//     await Schedule.deleteMany({
//         $and:[
//             {userId:id},
//             {availability: true}
//         ]
//     }).then(()=>console.log("delete done"))
// };

async function checkSchedule(id) {
    const falses = await Schedule.find({userId:id}).then(data => data.map(e => e.date.shortcut))
    return falses;
};

module.exports = async (body) => {
    body.map(e => e.date = dateToObj(e.date))
    let id = body[0].userId
    cleanSchedules(id)
    const falses = await checkSchedule(id)
    body = body.filter(e => !falses.includes(e.date.shortcut))
    return Schedule.insertMany(body)
};