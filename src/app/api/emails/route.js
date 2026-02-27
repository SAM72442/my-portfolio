export const runtime = "nodejs";

import Email from "@/emails/Email";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { firstName, lastName, contact, email, message } = await req.json();

    //if (!name || !email || !message) {
    //  return NextResponse.json(
    //    { success: false, error: "All fields are required" },
    //    { status: 400 }
    //  );
    //}

    // Create transporter once per request
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Convert your React Email template to HTML
    const htmlContent = await render(
      Email({ firstName, lastName, contact, email, message })
    );

	// To me
	const adminMail = await transporter.sendMail({
	from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
	to: process.env.EMAIL_USER,
	replyTo: email,
	subject: `New message from ${firstName} ${lastName}`,
	html: htmlContent,
	});

	// To Sender
	const userMail = await transporter.sendMail({
	from: `"Sayan Das" <${process.env.EMAIL_USER}>`,
	to: email,
	subject: "Thanks for contacting me!",
	html: htmlContent,
	});

	return NextResponse.json(
	{
		success: true,
		adminMessageId: adminMail.messageId,
		userMessageId: userMail.messageId,
	},
	{ status: 200 }
	);
  } catch (error) {
    console.error("Email Error:", error);

    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}