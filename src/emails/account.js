const sgmail = require('@sendgrid/mail')

sgmail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgmail.send({
        to: email,
        from: 'cwied10@gmail.com',
        subject: 'Still just need a subject line',
        text: `Welcome to the app, ${name}! Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgmail.send({
        to: email,
        from: 'cwied10@gmail.com',
        subject: 'Thanks for using Whatever this is!',
        text: `Thanks for using this app, ${name}. We're sad to see you go. If you have any feedback for us, please respond to this message and we'll get back to you!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}