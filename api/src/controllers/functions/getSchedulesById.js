const Schedule = require('../../models/Schedule');

module.exports = async(id) => {
    return Schedule.find({userId:id}).sort({'date.shortcut':1})
};