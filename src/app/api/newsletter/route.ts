import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email =
      typeof body?.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const source =
      typeof body?.source === "string"
        ? body.source.trim()
        : "website-popup";

    if (!email) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    // Basic server-side email validation.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listIdRaw = process.env.BREVO_LIST_ID;

    if (!apiKey) {
      console.error("BREVO_API_KEY is missing.");

      return NextResponse.json(
        { error: "Newsletter service is not configured." },
        { status: 500 }
      );
    }

    if (!listIdRaw) {
      console.error("BREVO_LIST_ID is missing.");

      return NextResponse.json(
        { error: "Newsletter list is not configured." },
        { status: 500 }
      );
    }

    const listId = Number(listIdRaw);

    if (!Number.isInteger(listId) || listId <= 0) {
      console.error("BREVO_LIST_ID must be a positive integer.");

      return NextResponse.json(
        { error: "Newsletter list is not configured correctly." },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://api.brevo.com/v3/contacts",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "api-key": apiKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          listIds: [listId],
          updateEnabled: true,
          attributes: {
            SOURCE: source,
          },
        }),
        cache: "no-store",
      }
    );

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      console.error("Brevo API error:", response.status, data);

      return NextResponse.json(
        {
          error:
            typeof data?.message === "string"
              ? data.message
              : "Unable to subscribe right now.",
        },
        {
          status: response.status >= 500 ? 502 : response.status,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Email subscribed successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter route error:", error);

    return NextResponse.json(
      {
        error: "Unable to subscribe right now. Please try again.",
      },
      { status: 500 }
    );
  }
}