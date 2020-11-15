const express = require('express')
const nodeMailer = require('nodemailer')

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        let testAccount = await nodeMailer.createTestAccount()

        //creating a reuseable transporter using default smtp
        let transporter = nodeMailer.createTransport({
            host: smtp.ethereal.email,
            port: 587,
            secure: false,
            auth: {
                user: 'vivienne.ohara@ethereal.email',
                pass: 'epG2VwGcdDXaukRqFE',
            }
        })

        let info = await transporter.sendMail({
            to: req.body.email,
            subject: req.body.subject,
            text: req.body.text
        })

        res.status(200).json({ msg: 'Email sent', msgId: info.messageID, msgURL: nodeMailer.getTestMessageUrl(info) })
        console.log('message sent: %', info.messageId)
        console.log('Preview URL: ', nodeMailer.getTestMessageUrl(info))
    } catch (err) {
        console.log(err.message)
    }
})

module.exports = router