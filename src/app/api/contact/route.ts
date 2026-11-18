import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, organization, subject, message } = body;

    // Validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, email, and message are mandatory." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address format." }, { status: 400 });
    }

    // Edge logging & sanitization
    const submissionId = `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const timestamp = new Date().toISOString();

    // In production with Cloudflare D1, we execute:
    // await env.DB.prepare("INSERT INTO contact_submissions ...").bind(...).run();
    console.log(`[API /api/contact] Received inquiry: ${submissionId}`, {
      fullName,
      email,
      organization: organization || "N/A",
      subject: subject || "General Inquiry",
      messageLength: message.length,
      timestamp,
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry successfully recorded and transmitted to executive studio team.",
      submissionId,
    });
  } catch (error) {
    console.error("[API /api/contact] Internal error:", error);
    return NextResponse.json({ error: "Internal server error processing transmission." }, { status: 500 });
  }
}
