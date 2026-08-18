import { createFileRoute, Link } from "@tanstack/react-router";
import guestRoom from "@/assets/getva-hotel_1.jpg.asset.json";
import conference from "@/assets/enourmous-conference.jpg.asset.json";
import eventHall from "@/assets/event-hall.jpg.asset.json";
import ankoberHall from "@/assets/ankober-hall.jpg.asset.json";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Meeting Space — Getva Hotel" },
      { name: "description", content: "Standard and executive rooms at Getva Hotel in Debre Birhan, plus a large conference hall for meetings and training." },
      { property: "og:title", content: "Rooms & Meeting Space — Getva Hotel" },
      { property: "og:description", content: "Standard and executive rooms at Getva Hotel in Debre Birhan, plus a large conference hall for meetings and training." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  const rooms = [
    {
      name: "Standard Room",
      description:
        "A wide bed with fresh white linen, a wardrobe, and a bathroom with reliable hot water. Simple, clean, and quiet enough to sleep off a long drive.",
      price: "From $45 / night",
      note: "Breakfast included",
      image: guestRoom.url,
      alt: "Standard room bed at Getva Hotel made up with white linen and a gold runner",
      features: ["Wide double bed", "Hot-water bathroom", "WiFi", "Flat-screen TV"],
    },
    {
      name: "Executive Room",
      description:
        "The same bed, with more floor space and a desk that fits a laptop and papers. The better pick if you're here to work for a few days.",
      price: "From $75 / night",
      note: "Desk and seating area",
      image: guestRoom.url,
      alt: "Executive room at Getva Hotel with a large bed and seating area",
      features: ["Extra space", "Work desk", "Seating area", "WiFi"],
    },
    {
      name: "Conference Hall",
      description:
        "A long boardroom table with leather chairs for 40 or more, a projector screen, sound, and power at every seat. Coffee breaks and lunch can be served from our kitchen.",
      price: "Day rates on request",
      note: "Catering available",
      image: conference.url,
      alt: "Long polished conference table with leather chairs and a projector screen at Getva Hotel",
      features: ["40+ seats", "Projector & screen", "Power at each seat", "Catering on site"],
    },
  ];

  return (
    <div className="min-h-screen bg-warm-bg">
      <div className="section-container py-16 md:py-24">
        <div className="mb-12 max-w-2xl">
          <span className="text-label mb-4 block text-clay">Stay with us</span>
          <h1 className="mb-4 text-4xl text-earth md:text-5xl">Rooms & Meeting Space</h1>
          <p className="text-lg text-earth/70">
            Straightforward rooms at fair prices, and a hall big enough for the whole department. Breakfast and WiFi come with every room.
          </p>
        </div>

        <div className="space-y-20">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <img
                  src={room.image}
                  alt={room.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-sm object-cover shadow-lg"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <h2 className="mb-2 text-3xl text-earth">{room.name}</h2>
                <p className="mb-6 text-earth/70">{room.description}</p>
                <ul className="mb-8 grid grid-cols-2 gap-3">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-earth/80">
                      <span className="size-1.5 rounded-full bg-clay"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <p className="text-xl font-semibold text-clay">{room.price}</p>
                  <p className="text-label text-earth/40">{room.note}</p>
                </div>
                <Link to="/contact" className="btn-primary">
                  Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
