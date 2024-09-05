// pages/api/sendOrderEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Seat = {
  id: string;
  row: string;
  position: string;
  column: number;
  reservedForGuests: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }
  const { userEmail, phone, selectedSeats, name, seatsCount, link } = req.body;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Your Reservation Details',
    html: `
      <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #FFFDF0;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: white; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <div style="text-align: center;">
            <h1 style="color: #1d3557;">Acknowledgement of Your <span style="font-weight: bold;">Ticket Booking</span></h1>
            <img src="https://firebasestorage.googleapis.com/v0/b/yuganthara-640bf.appspot.com/o/tickets.png?alt=media&token=ae0f1a2f-9f44-4ff2-824f-dc52e80bfac5" alt="tickets" style="width: 150px; margin-top: 10px;">
        </div>
        
        <div style="background-color: #e1f0ff; padding: 20px; margin-top: 20px; border-radius: 10px; text-align: center;">
            <h2 style="color: #1d3557;">Hello ${name}</h2>
            <p style="color: #a3a3a3; font-size: 12px;">Here are the complete details of your reservation</p>
        </div>

        <div style="background-color: #f7f7f7; padding: 20px; margin-top: 20px; border-radius: 10px; text-align: center;">
            <div>Email: ${userEmail}</div>
        <div>Phone Number: ${phone}</div>
        <div>Number of Seats: ${seatsCount}</div>
        <h3>Seats</h3>
        <div>
          ${selectedSeats
            .map(
              (item: Seat) => `
            <div>
              <strong> ${item.id} x LKR 1000 </strong>
            </div>
          `
            )
            .join('')}
        </div>
        </br>
        <h1><strong>Total price for ${seatsCount} Seats: LKR ${
      seatsCount * 1000
    }</strong></h1>

        <h2><strong>Bank Details:</strong></h2>
        <div>Account Number : 103 152 896 365</div>
        <div>Name : D M A P MEDIWAKE</div>
        <div>Bank : Sampath Bank</div>
        <div>Branch : Moratuwa Branch</div>
        <div>Use reference as your Name : ${name}</div>
        </br>
    
        </div>

        <div style="text-align: center; margin-top: 20px;">
        <div style= "color:red">**Please make sure to pay this within 3 days otherwise mentioned seats will be available for reserve again</div>
            <p style="color: #1d3557;">Please use below url to upload your payment slip</p>
            <div>Please upload your payment slips here: <a target='_blank' href='https://yuganthara.vercel.app/upload-slip/${link}'>https://yuganthara.vercel.app/upload-slip/${link}</a></div>
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <a href="https://www.facebook.com/profile.php?id=61565379149314&mibextid=LQQJ4d" style="margin-right: 10px;"><img src="https://img.icons8.com/ios-glyphs/30/000000/facebook.png" alt="Facebook" style="width: 30px;"></a>
            <a href="https://www.instagram.com/yuganthara_ictbus?igsh=aDFwcW1lYWpoaTFl"><img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png" alt="Instagram" style="width: 30px;"></a>
        </div>
        <h1>Thank you</h1>
        <div style="text-align: center; margin-top: 20px; padding: 10px 0; border-top: 1px solid #ddd;">
            <a href="https://www.yuganthara.lk" style="color: #a3a3a3; font-size: 12px; text-decoration: none; margin-left: 10px;">WEBSITE</a>
        </div>

        <div style="text-align: center; color: #a3a3a3; font-size: 10px; margin-top: 20px;">
            All rights reserved. For further details, please check our website
        </div>
    </div>
</div>

    `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error sending email', error });
  }
}
