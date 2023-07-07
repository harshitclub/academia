import nodemailer from 'nodemailer'
import User from '@/models/userModel'
import bcryptjs from 'bcryptjs'


export const sendVoucher = async({email, emailType, userId}:any)=>{
try {
    // create a voucher token
    const voucherId = `${Math.floor(Math.random() * 99999)}500${Math.floor(Math.random() * 99999)}`;
    

    if(emailType === "VOUCHEREMAIL"){
        await User.findByIdAndUpdate(userId, {voucher: voucherId, voucherExpiry: Date.now()+ 7776000000})
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
        subject: "Campus Sutras Course Voucher",
        html: `<html>
        <head>
        <style>
          .voucher{
          font-family:Sans-serif;
          width:100%;
          //border:1px solid;
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          padding:2rem;
          
          }
          .voucherContainer{
          //border:1px solid;
          width:1000%;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          background:#002255;
          color:#ffffff;
          padding:1rem;
          }
          
          .voucherContainer h2{
          margin:0 0 0.5rem 0;
          font-size:2rem;
          text-align:center;
          }
          
           .voucherContainer h3{
          margin:0 0 1rem 0;
          font-size:1.5rem;
          text-align:center;
          }
          
          .voucherContainer h1{
          margin:0 0 1rem 0;
          font-size:2.5rem;
          font-weight:500;
          text-align:center;
          }
          
          .voucherContainer p{
          text-align:center;
          margin:0 0 1rem 0;
          font-size:1.2rem;
      }
          
          </style>
        </head>
        <body>
          <div class="voucher">
            <div class="voucherContainer">
              <h2>₹500/-</h2>
              <h3>Discount Voucher</h3>
              <p>Voucher ID - ${voucherId}</p>
              <h1>Campus Sutras</h1>
               <p>As a valued member of Campus Sutras, we are delighted to offer you a special discount voucher worth ₹500! This voucher can be applicable for our every exciting courses.</p>
               <img src="../public/assets/campusSutrasLogo.png"/>
            </div>
            
            <div>
        </body>
      </html>
        `
      }

      const mailResponse = await transport.sendMail(mailOptions);
      console.log(mailResponse)
      return mailResponse;

} catch (error:any) {
    throw new Error(error.message)    
}
}