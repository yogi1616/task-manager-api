const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (eamil, name) => {
    sgMail.send({
    to: eamil,
    from:'yogesh_barot07@yahoo.com',
    subject:'Thanks for joining in!',
    text:`Welcome to the app, ${name}. Let me know how you come along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to:email,
        from:'yogesh_barot07@yahoo.com',
        subject:'Sorry to see you go',
        text:`Goodbye, ${name}. I hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}