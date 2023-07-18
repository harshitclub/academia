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
            <p>Click Here To Verify- <a href={${process.env.DOMAIN}/verifyemail?token=${hashedToken}}>VERIFY</a></p>
            <p>or copy and paste the below link in your browser</p>
            <p>${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>
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