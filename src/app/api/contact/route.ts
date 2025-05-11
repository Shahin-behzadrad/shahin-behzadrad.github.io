import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, emailAddress, messageText } = await req.json();

    if (!name || !emailAddress || !messageText) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "shahinbzr2267@gmail.com",
        pass: process.env.EMAIL_PASSWORD, // Store this in `.env.local`
      },
    });

    await transporter.sendMail({
      from: emailAddress,
      to: "shahinbzr2267@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${emailAddress}\n\nMessage:\n${messageText}`,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
