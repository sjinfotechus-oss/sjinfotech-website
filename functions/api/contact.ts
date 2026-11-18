interface Env {}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body: any = await context.request.json();
    const { fullName, email, organization, subject, message } = body;

    // Validation
    if (!fullName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: fullName, email, and message are mandatory." }),
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

    const submissionId = `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const timestamp = new Date().toISOString();

    console.log(`[Cloudflare Pages /api/contact] Received inquiry: ${submissionId}`, {
      fullName,
      email,
      organization: organization || "N/A",
      subject: subject || "General Inquiry",
      messageLength: message.length,
      timestamp,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Inquiry successfully recorded and transmitted to executive studio team.",
        submissionId,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Internal server error processing transmission." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
