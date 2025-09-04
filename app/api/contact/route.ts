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
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            background-color: #f8f9fa;
          }
          .container {
            background-color: #ffffff;
            margin: 20px;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .header p {
            margin: 5px 0 0 0;
            opacity: 0.9;
            font-size: 14px;
          }
          .field-group {
            margin-bottom: 20px;
            border-bottom: 1px solid #e9ecef;
            padding-bottom: 15px;
          }
          .field-group:last-child {
            border-bottom: none;
            margin-bottom: 0;
          }
          .field-label {
            font-weight: 600;
            color: #495057;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
            display: block;
          }
          .field-value {
            color: #212529;
            font-size: 16px;
            background-color: #f8f9fa;
            padding: 10px 15px;
            border-radius: 6px;
            border-left: 4px solid #667eea;
          }
          .message-content {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #28a745;
            white-space: pre-wrap;
            font-style: italic;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
            text-align: center;
            color: #6c757d;
            font-size: 12px;
          }
          .urgent-badge {
            display: inline-block;
            background-color: #dc3545;
            color: white;
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 10px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-left: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 New Contact Inquiry</h1>
            <p>Received from 3J Solutions Website</p>
          </div>

          <div class="field-group">
            <span class="field-label">👤 Full Name</span>
            <div class="field-value">${name}</div>
          </div>

          <div class="field-group">
            <span class="field-label">📧 Email Address</span>
            <div class="field-value">${email}</div>
          </div>

          <div class="field-group">
            <span class="field-label">📱 Phone Number</span>
            <div class="field-value">${phone}</div>
          </div>

          <div class="field-group">
            <span class="field-label">🏷️ Service Category</span>
            <div class="field-value">${category}</div>
          </div>

          <div class="field-group">
            <span class="field-label">💬 Message</span>
            <div class="message-content">${message}</div>
          </div>

          <div class="footer">
            <p>This inquiry was submitted on ${new Date().toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              timeZoneName: 'short'
            })}</p>
            <p>Please respond to this inquiry within 24 hours for the best customer experience.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `🏢 New ${category} Inquiry - ${name}`,
      html: htmlContent,
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
