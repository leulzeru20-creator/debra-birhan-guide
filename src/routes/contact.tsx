import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Bookings — Getva Hotel" },
      { name: "description", content: "Contact Getva Hotel in Debre Birhan for bookings, room availability, and inquiries. Phone, email, and address details." },
      { property: "og:title", content: "Contact & Bookings — Getva Hotel" },
      { property: "og:description", content: "Contact Getva Hotel in Debre Birhan for bookings, room availability, and inquiries. Phone, email, and address details." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-warm-bg">
      <div className="section-container py-16 md:py-24">
        <div className="mb-16 max-w-2xl">
          <span className="text-label mb-4 block text-clay">Get in Touch</span>
          <h1 className="mb-4 text-4xl text-earth md:text-5xl">Contact & Bookings</h1>
          <p className="text-lg text-earth/70">
            Reach out for reservations, group bookings, or any questions about your stay in Debre Birhan.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="border border-earth/10 bg-white p-8 md:p-12">
            <div className="mb-6 h-px w-12 bg-clay"></div>
            <h2 className="mb-6 text-2xl text-earth">Contact Details</h2>
            <dl className="space-y-6">
              <div>
                <dt className="text-label mb-1 text-earth/40">Address</dt>
                <dd className="text-earth/80">Zerayakob Street, Debre Birhan<br />Amhara Region, Ethiopia</dd>
              </div>
              <div>
                <dt className="text-label mb-1 text-earth/40">Phone</dt>
                <dd className="text-earth/80">+251 911 000 000</dd>
              </div>
              <div>
                <dt className="text-label mb-1 text-earth/40">Email</dt>
                <dd className="text-earth/80">zerutechane@gmail.com</dd>
              </div>
              <div>
                <dt className="text-label mb-1 text-earth/40">Front Desk Hours</dt>
                <dd className="text-earth/80">Open 24 hours</dd>
              </div>
            </dl>
          </div>

          <div className="border border-earth/10 bg-white p-8 md:p-12">
            <div className="mb-6 h-px w-12 bg-clay"></div>
            <h2 className="mb-6 text-2xl text-earth">Send an Inquiry</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="text-label mb-2 block text-earth/60">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-earth/20 bg-warm-bg p-3 text-sm text-earth placeholder:text-earth/40 focus:border-clay focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-label mb-2 block text-earth/60">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-earth/20 bg-warm-bg p-3 text-sm text-earth placeholder:text-earth/40 focus:border-clay focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-label mb-2 block text-earth/60">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your travel dates and any special requests"
                  className="w-full border border-earth/20 bg-warm-bg p-3 text-sm text-earth placeholder:text-earth/40 focus:border-clay focus:outline-none"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
