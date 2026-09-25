import { Resend } from "resend";
import { NextResponse } from "next/server";
import { getContactConfig } from "@/lib/contact-config.mjs";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const config = getContactConfig(process.env);
  if (!config) {
    return NextResponse.json({ error: "Contact delivery is unavailable" }, { status: 503 });
  }

  const resend = new Resend(config.apiKey);
  const { error } = await resend.emails.send({
    from: config.from,
    to: config.to,
    replyTo: email,
    subject: `Portfolio contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
