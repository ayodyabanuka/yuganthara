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
      <div style="font-family: Arial, sans-serif;">
        <h1>You have booked ${seatsCount} Seats for Yuganthara</h1>
        <p>Here are your booking details:</p>
        <div style="margin-top: 10px;"><strong>Booking Details</strong></div>
        <div>Name: ${name}</div>
        <div>Email: ${userEmail}</div>
        <div>Phone Number: ${phone}</div>
        <div>Number of Seats: ${seatsCount}</div>
        <h3>Seats</h3>
        <div>
          ${selectedSeats
            .map(
              (item: Seat) => `
            <div style="margin-bottom: 10px;">
              <strong> Seat Row: ${item.row}  -  Seat Column: ${item.column} x LKR 1000 </strong>
            </div>
          `
            )
            .join('')}
        </div>
        </br>
        <h1><strong>Total price for ${seatsCount} Seats: LKR ${
      seatsCount * 1000
    }</strong></h1>
        </br>
        <h2><strong>Bank Details:</strong></h2>
        <div>Account Number :</div>
        <div>Name :</div>
        <div>Bank :</div>
        <div>Branch :</div>
        </br>
        <div style= "color:red">**Please make sure to pay this within 3 days otherwise mentioned seats will be available for audience again</div>
        <h2>Please upload your payment slips here: <a target='_blank' href='https://yuganthara.vercel.app//upload-slip/${link}'>https://yuganthara.vercel.app//upload-slip/${link}</a></h2>
        </br>
        <h1>Thank you</h1>

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
