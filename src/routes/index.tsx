import { createFileRoute, Link } from "@tanstack/react-router";
import hotelExterior from "@/assets/hotel-exterior.jpg";
import standardRoom from "@/assets/standard-room.jpg";
import executiveSuite from "@/assets/executive-suite.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Getva Hotel — Debre Birhan, Ethiopia" },
      { name: "description", content: "Experience warm Highland hospitality in Debre Birhan. Budget-friendly rooms, Ethiopian dining, free WiFi, gym, and secure parking." },
      { property: "og:title", content: "Getva Hotel — Debre Birhan, Ethiopia" },
      { property: "og:description", content: "Experience warm Highland hospitality in Debre Birhan. Budget-friendly rooms, Ethiopian dining, free WiFi, gym, and secure parking." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="section-container relative py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-label mb-4 block text-clay">
              Debre Birhan, Ethiopia
            </span>
            <h1 className="mb-6 text-5xl leading-[1.1] text-earth md:text-7xl">
              Experience the <br /> Highland <span className="italic">Spirit.</span>
            </h1>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-earth/70">
              Warm hospitality meets the crisp mountain air of the Ethiopian highlands. A sanctuary for both modern business and quiet leisure.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1 border border-earth/20 bg-white/50 p-4">
                <label className="text-label mb-1 block text-earth/50">Check In</label>
                <span className="text-sm font-medium">Aug 19, 2026</span>
              </div>
              <div className="flex-1 border border-earth/20 bg-white/50 p-4">
                <label className="text-label mb-1 block text-earth/50">Check Out</label>
                <span className="text-sm font-medium">Aug 20, 2026</span>
              </div>
              <Link
                to="/contact"
                className="btn-primary flex-shrink-0"
              >
                Check Availability
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={hotelExterior}
              alt="Getva Hotel exterior at dusk with warm lighting in Debre Birhan"
              width={1200}
              height={1408}
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden max-w-[240px] bg-highland p-8 text-warm-bg md:block">
              <p className="text-sm italic leading-relaxed">
                "The cool breeze and the warm welcome at Getva made my business trip feel like a retreat."
              </p>
              <p className="text-label mt-4 opacity-70">— Samuel T., Business Traveler</p>
            </div>
          </div>
        </div>
      </header>

      {/* Key Features */}
      <section className="bg-earth py-20 text-warm-bg">
        <div className="section-container">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <div className="h-px w-12 bg-clay"></div>
              <h3 className="text-xl font-serif">Authentic Cuisine</h3>
              <p className="text-sm leading-relaxed text-warm-bg/70">
                Taste the rich flavors of traditional Ethiopian dishes alongside international favorites in our sun-lit dining hall.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-px w-12 bg-clay"></div>
              <h3 className="text-xl font-serif">Business Ready</h3>
              <p className="text-sm leading-relaxed text-warm-bg/70">
                Equipped with high-speed fiber internet and dedicated meeting spaces designed for productive highland stays.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-px w-12 bg-clay"></div>
              <h3 className="text-xl font-serif">Highland Serenity</h3>
              <p className="text-sm leading-relaxed text-warm-bg/70">
                Rest easy in Debre Birhan's most comfortable bedding, featuring locally woven textiles and mountain views.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="section-container py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-4xl text-earth">Thoughtful Accommodations</h2>
            <p className="mt-2 text-earth/60">Budget-friendly without compromising on quality.</p>
          </div>
          <Link
            to="/rooms"
            className="border-b border-clay pb-1 text-sm font-semibold text-clay transition-colors hover:text-earth"
          >
            View All Rooms
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <Link to="/rooms" className="group block">
            <img
              src={standardRoom}
              alt="Standard Highland Room at Getva Hotel with traditional textiles and mountain view"
              width={944}
              height={704}
              loading="lazy"
              className="mb-6 aspect-[4/3] w-full rounded-sm bg-stone-100 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h4 className="text-xl font-serif text-earth">Standard Highland Room</h4>
                <p className="text-sm text-earth/50">Perfect for solo travelers and couples</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm font-semibold text-clay">From $45 / night</p>
                <p className="text-label text-earth/40">Incl. Breakfast</p>
              </div>
            </div>
          </Link>

          <Link to="/rooms" className="group block">
            <img
              src={executiveSuite}
              alt="Executive Suite at Getva Hotel with work desk and mountain view"
              width={944}
              height={704}
              loading="lazy"
              className="mb-6 aspect-[4/3] w-full rounded-sm bg-stone-100 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h4 className="text-xl font-serif text-earth">Executive Suite</h4>
                <p className="text-sm text-earth/50">Spacious workspace and lounge area</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm font-semibold text-clay">From $75 / night</p>
                <p className="text-label text-earth/40">Fast Wi-Fi Included</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="mb-24 px-8">
        <div className="section-container bg-stone-100 p-12 text-center">
          <h3 className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-earth/40">
            Our Heritage & Commitment
          </h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="mb-3 size-8 rounded-full border border-earth/20"></div>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Free Parking</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 size-8 rounded-full border border-earth/20"></div>
              <span className="text-[10px] font-bold uppercase tracking-tighter">High-Speed WiFi</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 size-8 rounded-full border border-earth/20"></div>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Gym & Playground</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 size-8 rounded-full border border-earth/20"></div>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Restaurant & Bar</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
