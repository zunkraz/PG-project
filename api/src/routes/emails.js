const router = require("express").Router();
const transporter = require("../config/mailer");
const reader = require("../config/plantillas/index.js");
const getLinkProf = require("../config/mailHelpers/getLinkProf.js");
const { appointmentsEmail } = require('../controllers/index')

router.post("/", (req, res, next) => {
  const { type } = req.query;
  const info = req.body;

  let data = reader(type, info.username);
  let subject;
  switch (type) {
    case "welcome":
      subject = "¡Latam Exponential te da la bienvenida! - No Reply";
      break;

    case "profVerification":
      subject = "Tu usuario profesional ha sido verificado - No Reply";
      break;

    case "report":
      subject = "Reporte enviado - No Reply";
      data = data
        .replace(/{text}/gi, info.text)
        .replace(/{reportType}/gi, info.type);
      break;

    case "resetPassAdmin":
      subject = "El administrador ha reseteado tu contraseña - No Reply";

      data = data.replace(/{newPassword}/gi, info.password);
      break;

    case "resetPass":
      subject = "Solicitud de reseteo de contraseña - No Reply";

      data = data.replace(/{newPassword}/gi, info.password);
      break;
  }

  transporter
    .sendMail({
      from: "Latam Exponential <latamexp@gmail.com>",
      bcc: info.email,
      subject: subject,
      html: data,
    })
    .then((r) => res.send(r))
    .catch((r) => next(r));
});

router.post("/newAppointment", (req, res, next) => {
  const info = req.body;

  appointmentsEmail(info)
    .then(r => {
      let dataCustom = reader('reserveCustom', r.custom.username);
      let dataProf = reader('reserveProf', r.prof.username);

      const subjectCustom = "Tu consulta se ha agendado correctamente - No Reply";
      const subjectProf = "Tienes una nueva consulta agendada - No Reply";

      dataCustom = dataCustom
        .replace(/{description}/gi, r.description)
        .replace(/{meetingLink}/gi, r.meetingLink)
        .replace(/{numberOfSessions}/gi, r.numberOfSessions)
        .replace(/{date}/gi, r.date);

      dataProf = dataProf
        .replace(/{meetingLink}/gi, r.meetingLink)
        .replace(/{customUsername}/gi, r.custom.username)
        .replace(/{numberOfSessions}/gi, r.numberOfSessions)
        .replace(/{date}/gi, r.date);

      let emails = [
        { data: dataCustom, subject: subjectCustom, mail: r.custom.email },
        { data: dataProf, subject: subjectProf, mail: r.prof.email }
      ]

      emails = emails.map((d) => {
        return transporter.sendMail({
          from: "Latam Exponential <latamexp@gmail.com>",
          bcc: d.mail,
          subject: d.subject,
          html: d.data,
        });
      });

      return Promise.all([emails]);
    })
    .then(r => res.send('Enviados correctamente'))
    .catch(r => console.log(r))

  // const subjectCustom = "Tu consulta se ha agendado correctamente - No Reply";
  // const subjectProf = "Tienes una nueva consulta agendada - No Reply";

  // return getLinkProf(info.prof_username)
  //   .then((r) => r.toJSON().meetingUrl)
  //   .then((link) => {
  //     dataCustom = dataCustom
  //       .replace(/{profName}/gi, info.prof_name)
  //       .replace(/{meetingLink}/gi, link)
  //       .replace(/{date}/gi, info.date);

  //     dataProf = dataProf
  //       .replace(/{customName}/gi, info.custom_name)
  //       .replace(/{meetingLink}/gi, link)
  //       .replace(/{date}/gi, info.date);

  //     return [
  //       { data: dataCustom, subject: subjectCustom, mail: info.custom_email },
  //       { data: dataProf, subject: subjectProf, mail: info.prof_email },
  //     ];
  //   })
  //   .then((arr) => {
  //     const emails = arr.map((d) => {
  //       return transporter.sendMail({
  //         from: "Latam Exponential <latamexp@gmail.com>",
  //         bcc: d.mail,
  //         subject: d.subject,
  //         html: d.data,
  //       });
  //     });

  //     return Promise.all([emails]);
  //   })
  //   .then((r) => res.send('Enviados correctamente'))
  //   .catch((err) => next(err));
});

module.exports = router;
