import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, category, message } = body;

  if (!name || !email || !phone || !category || !message) {
    return NextResponse.json(
      { error: "Missing fields" },
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: "Inquiry from Website",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCategory: ${category}\nMessage:\n${message}`,
    });
    return NextResponse.json(
      { success: true },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
