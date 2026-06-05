import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxoGInjv6Am2RFOi09zMGgXXY4ylse3WKwKu1d72SRRBVZcfU7Ls5GSTPx-KhUuhsXR5A/exec";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Write to Google Sheet via Apps Script
    const scriptRes = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        services: data.services ?? "",
        budget:   data.budget   ?? "",
        timeline: data.timeline ?? "",
        notes:    data.notes    ?? "",
        name:     data.name     ?? "",
        email:    data.email    ?? "",
        phone:    data.phone    ?? "",
        address:  data.address  ?? "",
      }),
      redirect: "follow",
    });

    console.log("Apps Script status:", scriptRes.status);

    // Send email notification via Resend
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Empire AZ LLC <onboarding@resend.dev>",
        to: "empireazglass@gmail.com",
        subject: "New Quote Request — Empire AZ LLC",
        text: `New quote request received:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nAddress: ${data.address}\n\nServices: ${data.services}\nBudget: $${data.budget}\nTimeline: ${data.timeline}\nNotes: ${data.notes}`,
      }),
    });

    console.log("Resend status:", emailRes.status);

    if (scriptRes.ok) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: false, status: scriptRes.status }, { status: 502 });
  } catch (err) {
    console.error("submit-quote error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
