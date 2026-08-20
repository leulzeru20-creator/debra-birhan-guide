import { createFileRoute, Link } from "@tanstack/react-router";
import hotelFront from "@/assets/getva-hotel.jpg.asset.json";
import guestRoom from "@/assets/getva-hotel_1.jpg.asset.json";
import garden from "@/assets/caption_1.jpg.asset.json";
import bambooLounge from "@/assets/caption_2.jpg.asset.json";
import terrace from "@/assets/caption.jpg.asset.json";
import conference from "@/assets/enourmous-conference.jpg.asset.json";
import lobby from "@/assets/lobby.jpg.asset.json";
import hotelNight from "@/assets/hotel-night.jpg.asset.json";
import eventHall from "@/assets/event-hall.jpg.asset.json";
import traditionalHall from "@/assets/extra.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Getva Hotel — Debre Birhan, Ethiopia" },
      { name: "description", content: "A comfortable, friendly place to stay in Debre Birhan. Big beds, hot showers, a green garden, real Ethiopian food, free parking and WiFi." },
      { property: "og:title", content: "Getva Hotel — Debre Birhan, Ethiopia" },
      { property: "og:description", content: "A comfortable, friendly place to stay in Debre Birhan. Big beds, hot showers, a green garden, real Ethiopian food, free parking and WiFi." },
      { property: "og:type", content: "website" },
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
              Zerayakob Street · Debre Birhan
            </span>
            <h1 className="mb-6 text-5xl leading-[1.1] text-earth md:text-7xl">
              A good night's sleep, <span className="italic">2,800 m up.</span>
            </h1>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-earth/70">
              You've been on the road from Addis for three hours. Park for free, drop your bag, take a hot shower, and eat something warm in the garden. That's Getva.
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
              <Link to="/contact" className="btn-primary flex-shrink-0">
                Ask About a Room
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={hotelFront.url}
              alt="The Getva Hotel building on Zerayakob Street in Debre Birhan under a bright highland sky"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden max-w-[240px] bg-highland p-8 text-warm-bg md:block">
              <p className="text-sm italic leading-relaxed">
                "Clean room, hot water, and the staff actually remembered my name by the second day."
              </p>
              <p className="text-label mt-4 opacity-70">— Samuel T., guest</p>
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
              <h3 className="text-xl font-serif">Food you'll actually finish</h3>
              <p className="text-sm leading-relaxed text-warm-bg/70">
                Injera and wot done properly, plus pasta and eggs for the mornings you want something plain. Breakfast comes with the room.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-px w-12 bg-clay"></div>
              <h3 className="text-xl font-serif">Room to work</h3>
              <p className="text-sm leading-relaxed text-warm-bg/70">
                WiFi in every room, plug points by the desk, and a conference hall big enough for the whole team when the meeting moves out of town.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-px w-12 bg-clay"></div>
              <h3 className="text-xl font-serif">Somewhere to sit outside</h3>
              <p className="text-sm leading-relaxed text-warm-bg/70">
                Wicker chairs under the trees, a shaded terrace, and a bamboo lounge for coffee when the afternoon cools down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="section-container py-24">
        <div className="mb-12 max-w-xl">
          <h2 className="text-4xl text-earth">Around the hotel</h2>
          <p className="mt-2 text-earth/60">
            {"\n"}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <figure>
            <img
              src={garden.url}
              alt="White wicker chairs and tables in the shaded garden at Getva Hotel"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <figcaption className="mt-3 text-sm text-earth/60">
              The garden — the quietest corner on the property.
            </figcaption>
          </figure>
          <figure>
            <img
              src={bambooLounge.url}
              alt="Bamboo-clad lounge with arched windows and woven chairs at Getva Hotel"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <figcaption className="mt-3 text-sm text-earth/60">
              The bamboo lounge, best in the late afternoon.
            </figcaption>
          </figure>
          <figure>
            <img
              src={terrace.url}
              alt="Covered outdoor terrace with tables and a woven mesob at Getva Hotel"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <figcaption className="mt-3 text-sm text-earth/60">
              Covered terrace dining, rain or shine.
            </figcaption>
          </figure>
          <figure>
            <img
              src={lobby.url}
              alt="Getva Hotel lobby with tiled floor, plants and low armchairs under coloured lighting"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <figcaption className="mt-3 text-sm text-earth/60">
              The lobby — check in, then sit a minute.
            </figcaption>
          </figure>
          <figure>
            <img
              src={eventHall.url}
              alt="Large hall at Getva Hotel set with rows of red and gold banquet chairs"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <figcaption className="mt-3 text-sm text-earth/60">
              The big hall, ready for a hundred people.
            </figcaption>
          </figure>
          <figure>
            <img
              src={hotelNight.url}
              alt="Getva Hotel at night with its lit rooftop sign in Debre Birhan"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <figcaption className="mt-3 text-sm text-earth/60">
              Easy to spot after dark — just follow the sign.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="section-container pb-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-4xl text-earth">Where you'll sleep</h2>
            <p className="mt-2 text-earth/60">Fair prices, proper beds, hot water in the morning.</p>
          </div>
          <Link
            to="/rooms"
            className="border-b border-clay pb-1 text-sm font-semibold text-clay transition-colors hover:text-earth"
          >
            See all rooms
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <Link to="/rooms" className="group block">
            <img
              src={guestRoom.url}
              alt="Guest room bed at Getva Hotel made up with white linen and a gold runner"
              loading="lazy"
              className="mb-6 aspect-[4/3] w-full rounded-sm bg-stone-100 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-xl font-serif text-earth">Standard Room</h3>
                <p className="text-sm text-earth/50">One big bed, one quiet night</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm font-semibold text-clay">From $45 / night</p>
                <p className="text-label text-earth/40">Breakfast included</p>
              </div>
            </div>
          </Link>

          <Link to="/rooms" className="group block">
            <img
              src={conference.url}
              alt="Long polished conference table with leather chairs and a projector screen at Getva Hotel"
              loading="lazy"
              className="mb-6 aspect-[4/3] w-full rounded-sm bg-stone-100 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-xl font-serif text-earth">Conference Hall</h3>
                <p className="text-sm text-earth/50">Seats 40+, projector and mics ready</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm font-semibold text-clay">Ask for day rates</p>
                <p className="text-label text-earth/40">Catering available</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="mb-24 px-8">
        <div className="section-container bg-stone-100 p-12 text-center">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-earth/40">
            What comes with the room
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {["Free Parking", "WiFi Throughout", "Gym & Playground", "Restaurant & Bar"].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <div className="mb-3 size-8 rounded-full border border-earth/20"></div>
                <span className="text-[10px] font-bold uppercase tracking-tighter">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
