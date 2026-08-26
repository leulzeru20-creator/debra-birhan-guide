import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { BookingProvider, useBooking } from "@/components/BookingDialog";
import { Toaster } from "@/components/ui/sonner";

function BookNowButton() {
  const openBooking = useBooking();
  return (
    <button type="button" onClick={() => openBooking()} className="btn-secondary text-sm">
      Book a Room
    </button>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn-primary"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Getva Hotel — Debre Birhan, Ethiopia" },
      { name: "description", content: "Warm hospitality in the Ethiopian highlands. Budget-friendly rooms, dining, and amenities in Debre Birhan." },
      { name: "author", content: "Getva Hotel" },
      { property: "og:title", content: "Getva Hotel — Debre Birhan, Ethiopia" },
      { property: "og:description", content: "Warm hospitality in the Ethiopian highlands. Budget-friendly rooms, dining, and amenities in Debre Birhan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@GetvaHotel" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600&family=Playfair+Display:wght@500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-earth/10 bg-warm-bg/50 backdrop-blur-md">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 md:flex md:justify-between md:px-8 md:py-6">
        <Link
          to="/"
          className="font-serif text-xl font-semibold tracking-tight text-clay md:text-2xl"
        >
          GETVA HOTEL
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wider md:flex">
          <Link
            to="/rooms"
            activeProps={{ className: "text-clay" }}
            className="text-earth transition-colors hover:text-clay"
          >
            Rooms
          </Link>
          <Link
            to="/dining"
            activeProps={{ className: "text-clay" }}
            className="text-earth transition-colors hover:text-clay"
          >
            Dining
          </Link>
          <Link
            to="/location"
            activeProps={{ className: "text-clay" }}
            className="text-earth transition-colors hover:text-clay"
          >
            Location
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "text-clay" }}
            className="text-earth transition-colors hover:text-clay"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <BookNowButton />
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-sm border border-earth/10 text-earth md:hidden"
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 1h20M0 7h20M0 13h20"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-earth/10 bg-warm-bg/95 px-6 py-6 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wider">
            <BookNowButton />
            <Link
              to="/rooms"
              activeProps={{ className: "text-clay" }}
              className="text-earth transition-colors hover:text-clay"
              onClick={() => setMobileOpen(false)}
            >
              Rooms
            </Link>
            <Link
              to="/dining"
              activeProps={{ className: "text-clay" }}
              className="text-earth transition-colors hover:text-clay"
              onClick={() => setMobileOpen(false)}
            >
              Dining
            </Link>
            <Link
              to="/location"
              activeProps={{ className: "text-clay" }}
              className="text-earth transition-colors hover:text-clay"
              onClick={() => setMobileOpen(false)}
            >
              Location
            </Link>
            <Link
              to="/contact"
              activeProps={{ className: "text-clay" }}
              className="text-earth transition-colors hover:text-clay"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-earth px-8 py-16 text-warm-bg/60">
      <div className="section-container grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-6 font-serif text-2xl font-semibold text-warm-bg">
            GETVA HOTEL
          </div>
          <p className="max-w-sm text-sm leading-relaxed">
            Located in the historical heart of Debre Birhan, Getva Hotel offers a unique blend of highland culture and modern convenience.
          </p>
        </div>
        <div>
          <h5 className="mb-6 text-xs font-bold uppercase tracking-widest text-warm-bg">
            Contact
          </h5>
          <ul className="space-y-4 text-sm">
            <li>Zerayakob Street, Debre Birhan</li>
            <li>Amhara Region, Ethiopia</li>
            <li>+251 911 000 000</li>
            <li>zerutechane@gmail.com</li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 text-xs font-bold uppercase tracking-widest text-warm-bg">
            Follow
          </h5>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="https://web.facebook.com/getvahoteldb/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-clay"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.tripadvisor.com/Hotel_Review-g5561697-d12636167-Reviews-Getva_Hotel-Debre_Birhan_Amhara_Region.html"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-clay"
              >
                Tripadvisor
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section-container mt-16 flex flex-col justify-between gap-4 border-t border-warm-bg/10 pt-8 text-[10px] uppercase tracking-widest sm:flex-row">
        <p>© 2026 Getva Hotel. All Rights Reserved.</p>
        <p>Designed for Debre Birhan</p>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <BookingProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
        <Toaster />
      </BookingProvider>
    </QueryClientProvider>
  );
}
