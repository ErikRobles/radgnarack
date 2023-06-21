import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, phone, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let emailRes;

  try {
     emailRes = await transporter.sendMail({
      from: email,
      // to: process.env.EMAIL,
      to: process.env.EMAIL2,
      subject: `You have a new Contact submission from ${name}`,
      html: `<p>You have a new Radgnarack Contact form submission.</p><br />
      <p><Strong>Name: </Strong> ${name}</p><br />
      <p><Strong>Email: </Strong> ${email}</p><br />
      <p><Strong>Phone: </Strong> ${phone}</p><br />
      <p><Strong>Subject: </Strong> ${subject}</p><br />
      <p><Strong>Message: </Strong> ${message}</p><br />`,
    });
    console.log("Message sent", emailRes.messageId);
  } catch (err) {
    console.log(err);
    console.error("Error sending email:", err.message);
    console.error(err.stack);
  }
  // Set CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*", // Replace * with the specific origin you want to allow, e.g., "https://your-nextjs-app.com"
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400", // 24 hours (optional)
  };

  return new Response(JSON.stringify({ success: true, messageId: emailRes.messageId }),{
    headers,
    status: 200,
  });
}
