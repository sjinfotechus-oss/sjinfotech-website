import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, roleType, organizationName, walletOrDomain, consent } = body;

    // Validation
    if (!email) {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address format." }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Affirmative consent is required to join the development dispatch." },
        { status: 400 }
      );
    }

    const dispatchId = `ynadan_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const timestamp = new Date().toISOString();

    // In production with Cloudflare D1:
    // await env.DB.prepare("INSERT INTO ynadan_waitlist ...").bind(...).run();
    console.log(`[API /api/ynadan/waitlist] Registered subscriber: ${dispatchId}`, {
      email,
      fullName: fullName || "Anonymous",
      roleType: roleType || "Community Leader",
      organizationName: organizationName || "N/A",
      walletOrDomain: walletOrDomain || "N/A",
      timestamp,
    });

    return NextResponse.json({
      success: true,
      message: "Subscription confirmed. You are registered for the Ynadan Development Dispatch.",
      dispatchId,
    });
  } catch (error) {
    console.error("[API /api/ynadan/waitlist] Internal error:", error);
    return NextResponse.json({ error: "Internal server error processing dispatch registration." }, { status: 500 });
  }
}
