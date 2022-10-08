import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, phone, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
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
  }

  res.status(200).json(req.body);
}
