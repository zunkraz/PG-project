const User = require('./../../models/User')

module.exports = async (info) => {
    const {customerId,professionalId,numberOfSessions,description,meetingLink,dates} = info
    // {
  //   day: '20211129',
  //   description: 'Cita con Helen Chufe',
  //   dates: [
  //     {
  //       shortcut: 202111290900,
  //       datefull: 'Lunes 29 de Noviembre de 2021 a las 09:00',
  //       _id: '6195de19ecb0649dd4d57ead'
  //     },
  //     {
  //       shortcut: 202111291000,
  //       datefull: 'Lunes 29 de Noviembre de 2021 a las 10:00',
  //       _id: '6195de19ecb0649dd4d57eae'
  //     }
  //   ],
  //   numberOfSessions: 2,
  //   status: 'pending',
  //   customerId: '617f225d88338db33c578036',
  //   professionalId: '617f225d88338db33c578036',
  //   meetingLink: [
  //     'https://meet.jit.si/Latam Exponential-617f225d88338db33c578036#jitsi_meet_external_api_id=19&appData.localStorageContent=null',
  //     'https://meet.jit.si/Latam Exponential-617f225d88338db33c578036#jitsi_meet_external_api_id=19&appData.localStorageContent=null'
  //   ],
  //   _id: '6195de19ecb0649dd4d57eac',
  //   __v: 0
  // }
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