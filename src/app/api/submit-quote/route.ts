import { NextRequest, NextResponse } from "next/server";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe7OIXHbPQgqyfDdeyGUy-IeYVXyHOmE-v0z8yYRgT6iU6gFw/formResponse";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const body = new URLSearchParams();
    body.append("entry.1200715368", data.services ?? "");
    body.append("entry.1115652031", data.budget ?? "");
    body.append("entry.1612910158", data.timeline ?? "");
    body.append("entry.1489919063", data.notes ?? "");
    body.append("entry.1134508183", data.name ?? "");
    body.append("entry.454001065", data.email ?? "");
    body.append("entry.805906014", data.phone ?? "");
    body.append("entry.1553931339", data.address ?? "");
    body.append("pageHistory", "0");
    body.append(
      "fbzx",
      String(Math.floor(Math.random() * 1_000_000_000_000_000_000))
    );

    const response = await fetch(FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
      redirect: "manual", // Google 302s on success — treat that as OK
    });

    // Google returns 200 or 302 on success, 400 on bad payload
    if (response.status === 200 || response.status === 302 || response.status === 0) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { ok: false, status: response.status },
      { status: 502 }
    );
  } catch (err) {
    console.error("submit-quote error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
