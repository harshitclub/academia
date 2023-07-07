import nodemailer from 'nodemailer'
import User from '@/models/userModel'
import bcryptjs from 'bcryptjs'

export const sendEmail = async({email , emailType, userId}:any)=>{
    try {
        // create a hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if(emailType === "VERIFY"){
            await User.findByIdAndUpdate(userId, {verifyToken: hashedToken, verifyTokenExpiry: Date.now()+ 3600000})
        }else if(emailType === "RESET"){
            await User.findByIdAndUpdate(userId, {forgotPasswordToken: hashedToken, forgetPasswordTokenExpiry: Date.now()+ 3600000})
        }

        var transport = nodemailer.createTransport({
          host:"smtp-mail.outlook.com",
          port: 587,
          auth: {
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_USER_PASSWORD
          },
          tls: {
            rejectUnauthorized: false,
          },
        })

          const mailOptions = {
            from:"campussutras@outlook.com",
            to:email,
            subject: emailType === "VERIFY"? "Verify Your Email":"Reset Your Password",
            html: `
            <html>
            <body>
            <h3>Click Here To Verify- {<a href={${process.env.DOMAIN}/verifyemail?token=${hashedToken}}>VERIFY</a>}</h3>
            <h3>or copy and paste the below link in your browser</h3>
            <h3>${process.env.DOMAIN}/verifyemail?token=${hashedToken}</h3>
            </body>
            </html>
            `
          }

          const mailResponse = await transport.sendMail(mailOptions);
          return mailResponse;
    } catch (error:any) {
        throw new Error(error.message)        
    }
}