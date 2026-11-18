export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { fullName, email, roleType, organizationName, walletOrDomain, consent } = body;

    // Validation
    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email address is required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address format." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!consent) {
      return new Response(
        JSON.stringify({ error: "Affirmative consent is required to join the development dispatch." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const dispatchId = `ynadan_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const timestamp = new Date().toISOString();

    console.log(`[Cloudflare Pages /api/ynadan/waitlist] Registered subscriber: ${dispatchId}`, {
      email,
      fullName: fullName || "Anonymous",
      roleType: roleType || "Community Leader",
      organizationName: organizationName || "N/A",
      walletOrDomain: walletOrDomain || "N/A",
      timestamp,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Subscription confirmed. You are registered for the Ynadan Development Dispatch.",
        dispatchId,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Internal server error processing dispatch registration." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
