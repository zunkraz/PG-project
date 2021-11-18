const User = require('./../../models/User')

module.exports = async (info) => {
    const {customerId,professionalId,numberOfSessions,description,meetingLink,dates} = info

    let custom = await User.findById(customerId)
    let prof = await User.findById(professionalId)
    let customUsername = custom.username
    let profUsername = prof.username
    let customEmail = custom.email
    let profEmail = prof.email
    
    return {
        custom: {
            username:customUsername,
            email:customEmail
        },
        prof: {
            username:profUsername,
            email:profEmail
        },
        numberOfSessions,
        meetingLink: meetingLink[0].replace(' ','%20'),
        description,
        date: dates[0].datefull
    }

}