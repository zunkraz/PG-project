const Schedule = require('../../models/Schedule');
const dateToObj = require('../../helpers/dateToObj');

module.exports = async (body) => {
    body.map(e => e.date = dateToObj(e.date))
    return Schedule.insertMany(body)
};


// module.exports = async(body) => {
//     const {date, availability, userId} = body;
//     const data = dateToObj(date);
//     let newSchedule = await new Schedule({
//         date: data,
//         availability,
//         userId
//     })

//     return newSchedule.save()
// };