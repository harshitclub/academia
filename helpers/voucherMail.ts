import nodemailer from "nodemailer";
import User from "@/models/userModel";

export const sendVoucher = async ({ email, name, emailType, userId }: any) => {
  try {
    // create a voucher token
    const voucherId = `#${Math.floor(Math.random() * 99999)}?1000/${Math.floor(
      Math.random() * 99999
    )}`;

    if (emailType === "VOUCHEREMAIL") {
      await User.findByIdAndUpdate(userId, {
        voucher: voucherId,
        voucherExpiry: Date.now() + 7776000000,
      });
    }

    var transport = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_USER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "campussutras@outlook.com",
      to: email,
      cc: ["info@campussutras.com"],
      subject: "Campus Sutras Discount Voucher",
      attachments: [
        {
          filename: "Voucher.jpg",
          path: "https://lh3.googleusercontent.com/drive-viewer/AITFw-ydxkuIuY3wRk7__EeDbOOd4jwZcvEvujJJ7BfbCf-Db19GKwYSCVspojz5McH6QlQ0S_6yo9Yp3W0295wlwu05wya-DA=s1600",
        },
      ],
      html: `<html>
        <head>
        <style>
         
          
          </style>
        </head>
        <body>
          <div class="voucher">
            <div class="voucherContainer">
              <p style="font-family: Sans-Serif">Campus Sutras Voucher</p>
              <p style="font-family: Sans-Serif">₹1000/- Discount Voucher | Valid Upto 3 Months From Now.</p>
              <p style="font-family: Sans-Serif">Voucher ID - ${voucherId}</p>
               <p style="font-family: Sans-Serif">Hello ${name}, As a valued member of Campus Sutras, we are delighted to offer you a special discount voucher worth ₹1000! This voucher can be applicable for our every exciting courses.</p>
               <p>-- Campus Sturas</p>
            </div>
            
            <div>
        </body>
      </html>
        `,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    console.log(mailResponse);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
