import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Please enter your phone number").max(40),
  roomType: z.string().trim().min(1).max(80),
  checkIn: z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/, "Pick a check-in date"),
  checkOut: z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/, "Pick a check-out date"),
  guests: z.coerce.number().int().min(1).max(20),
  message: z.string().trim().max(1000).optional(),
});

export type BookingInput = z.input<typeof bookingSchema>;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const sendBookingRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => bookingSchema.parse(input))
  .handler(async ({ data }) => {
    if (new Date(data.checkOut) <= new Date(data.checkIn)) {
      throw new Error("Check-out must be after check-in.");
    }

    const lovableKey = process.env["LOVABLE_API_KEY"];
    const resendKey = process.env["RESEND_API_KEY"];
    if (!lovableKey || !resendKey) {
      throw new Error("Email sending is not configured yet.");
    }

    const row = (label: string, value: string) =>
      `<tr><td style="padding:6px 16px 6px 0;color:#7a6a5f;font-size:13px;">${escapeHtml(label)}</td><td style="padding:6px 0;color:#2c2118;font-size:14px;font-weight:600;">${escapeHtml(value)}</td></tr>`;

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#ffffff;padding:24px;">
        <h2 style="color:#2c2118;margin:0 0 4px;">New booking request</h2>
        <p style="color:#7a6a5f;margin:0 0 20px;font-size:14px;">Sent from the Getva Hotel website</p>
        <table cellpadding="0" cellspacing="0">
          ${row("Guest", data.name)}
          ${row("Email", data.email)}
          ${row("Phone", data.phone)}
          ${row("Room type", data.roomType)}
          ${row("Check in", data.checkIn)}
          ${row("Check out", data.checkOut)}
          ${row("Guests", String(data.guests))}
        </table>
        ${data.message ? `<p style="margin-top:20px;color:#2c2118;font-size:14px;white-space:pre-wrap;">${escapeHtml(data.message)}</p>` : ""}
      </div>`;

    const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": resendKey,
      },
      body: JSON.stringify({
        from: "Getva Hotel Website <onboarding@resend.dev>",
        // Until a domain is verified at resend.com/domains, Resend only allows
        // delivery to the account owner's address. Override with BOOKING_TO_EMAIL
        // once a domain is verified (then this can be zerutechane@gmail.com).
        to: [process.env["BOOKING_TO_EMAIL"] ?? "leulzeru20@gmail.com"],
        reply_to: data.email,
        subject: `Booking request — ${data.roomType}, ${data.checkIn} to ${data.checkOut}`,
        html,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Resend request failed [${response.status}]: ${body}`);
      throw new Error(
        "We couldn't send your request right now. Please email zerutechane@gmail.com or call the front desk.",
      );
    }

    return { sent: true } as const;
  });
