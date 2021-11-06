const Schedule = require('../../models/Schedule');

module.exports = async(id) => {
    return Schedule.updateOne(
        {
            _id:id
        },
        {
            $set:{
                availability: false
            }
        }
    )
};