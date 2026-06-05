import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz0mUwTVAyzIOmR8xhrTCBakEBnzrUm1fmiyEvVOEPYqprTNvekxSXRQ1mZbnMhoYIbFg/exec";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const response = await fetch(SCRIPT_URL, {
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

    console.log("Apps Script response status:", response.status);

    if (response.ok) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: false, status: response.status }, { status: 502 });
  } catch (err) {
    console.error("submit-quote error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
