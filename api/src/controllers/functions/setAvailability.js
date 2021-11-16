const Schedule = require('../../models/Schedule');

module.exports = async(id, val) => {
    return Schedule.updateOne(
        {
            _id:id
        },
        {
            $set:{
                availability: val
            }
        }
    )
};