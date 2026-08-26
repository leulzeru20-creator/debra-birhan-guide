import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useBooking, ROOM_TYPES } from "@/components/BookingDialog";

function isoOffset(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function HeroBookingWidget() {
  const openBooking = useBooking();
  const [checkIn, setCheckIn] = useState(isoOffset(0));
  const [checkOut, setCheckOut] = useState(isoOffset(1));
  const [roomType, setRoomType] = useState<string>(ROOM_TYPES[0]);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
      <div className="min-w-[9rem] flex-1 border border-warm-bg/25 bg-warm-bg/95 p-4 backdrop-blur-sm">
        <label htmlFor="hero-checkin" className="text-label mb-1 block text-earth/50">
          Check In
        </label>
        <input
          id="hero-checkin"
          type="date"
          min={isoOffset(0)}
          value={checkIn}
          onChange={(e) => {
            setCheckIn(e.target.value);
            if (e.target.value >= checkOut) {
              const d = new Date(e.target.value);
              d.setDate(d.getDate() + 1);
              setCheckOut(d.toISOString().slice(0, 10));
            }
          }}
          className="w-full bg-transparent text-sm font-medium text-earth focus:outline-none"
        />
      </div>
      <div className="min-w-[9rem] flex-1 border border-warm-bg/25 bg-warm-bg/95 p-4 backdrop-blur-sm">
        <label htmlFor="hero-checkout" className="text-label mb-1 block text-earth/50">
          Check Out
        </label>
        <input
          id="hero-checkout"
          type="date"
          min={checkIn}
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full bg-transparent text-sm font-medium text-earth focus:outline-none"
        />
      </div>
      <div className="min-w-[9rem] flex-1 border border-warm-bg/25 bg-warm-bg/95 p-4 backdrop-blur-sm">
        <label htmlFor="hero-room" className="text-label mb-1 block text-earth/50">
          Room
        </label>
        <select
          id="hero-room"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="w-full bg-transparent text-sm font-medium text-earth focus:outline-none"
        >
          {ROOM_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <button
        type="button"
        onClick={() => openBooking({ checkIn, checkOut, roomType })}
        className="btn-primary flex-shrink-0"
      >
        Book a Room
      </button>
    </div>
  );
}
import restaurantDining from "@/assets/restaurant-dining.webp";
import guestRoom from "@/assets/getva-hotel_1.jpg";
import garden from "@/assets/caption_1.jpg";
import bambooLounge from "@/assets/caption_2.jpg";
import terrace from "@/assets/caption.jpg";
import conference from "@/assets/enourmous-conference.jpg";
import lobby from "@/assets/lobby.jpg";
import hotelNight from "@/assets/hotel-night.jpg";
import eventHall from "@/assets/event-hall.jpg";
import traditionalHall from "@/assets/extra.jpg";

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
      {/* Hero Section — full-bleed image, left-aligned text */}
      <header className="relative isolate min-h-[88vh] overflow-hidden">
        <img
          src={restaurantDining}
          alt="The formal restaurant at Getva Hotel, dressed with white chairs and red tablecloths"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(100deg, oklch(0.19 0.03 40 / 0.94) 0%, oklch(0.19 0.03 40 / 0.82) 42%, oklch(0.19 0.03 40 / 0.45) 72%, oklch(0.19 0.03 40 / 0.25) 100%)",
          }}
        />
        <div className="section-container relative flex min-h-[88vh] items-center py-24">
          <div className="max-w-2xl text-left">
            <span className="text-label mb-4 block text-gold-light">
              Zerayakob Street · Debre Birhan
            </span>
            <h1 className="hero-headline mt-4 mb-6">
              comfort has a name in Debre Birhan - Getva
            </h1>

            <p className="mb-10 max-w-lg text-lg leading-relaxed text-warm-bg/80">
              You've been on the road from Addis for three hours. Park for free, drop your bag, take a hot shower, and eat something warm in the garden. That's Getva.
            </p>
            <div className="max-w-3xl">
              <HeroBookingWidget />
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
              src={garden}
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
              src={bambooLounge}
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
              src={terrace}
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
              src={lobby}
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
              src={eventHall}
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
              src={hotelNight}
              alt="Getva Hotel at night with its lit rooftop sign in Debre Birhan"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <figcaption className="mt-3 text-sm text-earth/60">
              Easy to spot after dark — just follow the sign.
            </figcaption>
          </figure>
          <figure>
            <img
              src={traditionalHall}
              alt="Traditional interior hall with carved wooden chairs, woven wall panels and arched windows at Getva Hotel"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <figcaption className="mt-3 text-sm text-earth/60">
              The traditional hall — coffee, conversation, and carved wood.
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
              src={guestRoom}
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
              src={conference}
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

      {/* Trust Banner — deep highland block for contrast */}
      <section className="mb-24 px-8">
        <div className="section-container bg-highland p-12 text-center text-warm-bg">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-warm-bg/50">
            What comes with the room
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {["Free Parking", "WiFi Throughout", "Gym & Playground", "Restaurant & Bar"].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <div className="mb-3 size-8 rounded-full border border-gold/60"></div>
                <span className="text-[10px] font-bold uppercase tracking-tighter">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
