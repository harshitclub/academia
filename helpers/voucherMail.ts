import nodemailer from 'nodemailer'
import User from '@/models/userModel'

export const sendVoucher = async({email, emailType, userId}:any)=>{
try {
    // create a voucher token
    const voucherId = `camp500#${Math.floor(Math.random() * 9999999)}`;

    if(emailType === "VOUCHEREMAIL"){
        await User.findByIdAndUpdate(userId, {voucher: voucherId, voucherExpiry: Date.now()+ 7776000000})
    }

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "f742bc2094dd8d",
          pass: "3bf03390f4f945"
        }
      });

      const mailOptions = {
        from:"campussutrasindia@gmail.com",
        to:email,
        subject: "Campus Sutras Course Voucher",
        html: `<p>Your Voucher is ${voucherId}</p>`
      }

      const mailResponse = await transport.sendMail(mailOptions);
      return mailResponse;

} catch (error:any) {
    throw new Error(error.message)    
}
}