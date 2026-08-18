import { createFileRoute, Link } from "@tanstack/react-router";
import standardRoom from "@/assets/standard-room.jpg";
import executiveSuite from "@/assets/executive-suite.jpg";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — Getva Hotel" },
      { name: "description", content: "Comfortable rooms and suites at Getva Hotel in Debre Birhan. Standard Highland Rooms and Executive Suites with modern amenities and mountain views." },
      { property: "og:title", content: "Rooms & Suites — Getva Hotel" },
      { property: "og:description", content: "Comfortable rooms and suites at Getva Hotel in Debre Birhan. Standard Highland Rooms and Executive Suites with modern amenities and mountain views." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  const rooms = [
    {
      name: "Standard Highland Room",
      description: "Perfect for solo travelers and couples seeking comfort and value. Each room features a queen bed, traditional woven accents, and mountain views.",
      price: "From $45 / night",
      note: "Breakfast included",
      image: standardRoom,
      alt: "Standard Highland Room at Getva Hotel with traditional textiles and mountain view",
      features: ["Queen bed", "En-suite bathroom", "Free WiFi", "Flat-screen TV"],
    },
    {
      name: "Executive Suite",
      description: "Spacious suite with a separate work area, lounge space, and panoramic highland views. Ideal for business travelers or extended stays.",
      price: "From $75 / night",
      note: "Premium Wi-Fi included",
      image: executiveSuite,
      alt: "Executive Suite at Getva Hotel with work desk and mountain view",
      features: ["King bed", "Work desk", "Lounge area", "Premium WiFi"],
    },
  ];

  return (
    <div className="min-h-screen bg-warm-bg">
      <div className="section-container py-16 md:py-24">
        <div className="mb-12 max-w-2xl">
          <span className="text-label mb-4 block text-clay">Stay with us</span>
          <h1 className="mb-4 text-4xl text-earth md:text-5xl">Rooms & Suites</h1>
          <p className="text-lg text-earth/70">
            Clean, comfortable rooms designed for rest and relaxation in the Ethiopian highlands. All rooms include complimentary breakfast and WiFi.
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
                  width={944}
                  height={704}
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
                  Book this Room
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
