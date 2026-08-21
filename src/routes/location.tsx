import { createFileRoute } from "@tanstack/react-router";
import hotelFront from "@/assets/getva-hotel.jpg";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location — Getva Hotel" },
      { name: "description", content: "Getva Hotel is located on Zerayakob Street in Debre Birhan, Ethiopia. Near the main road, close to Ankober, and 69 miles from Bole International Airport." },
      { property: "og:title", content: "Location — Getva Hotel" },
      { property: "og:description", content: "Getva Hotel is located on Zerayakob Street in Debre Birhan, Ethiopia. Near the main road, close to Ankober, and 69 miles from Bole International Airport." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <div className="min-h-screen bg-warm-bg">
      <div className="section-container py-16 md:py-24">
        <div className="mb-10 max-w-2xl">
          <span className="text-label mb-4 block text-clay">Find Us</span>
          <h1 className="mb-4 text-4xl text-earth md:text-5xl">Location</h1>
          <p className="text-lg text-earth/70">
            Look for the red "Getva Hotel" sign on the roof, just off Zerayakob Street. Roughly three hours from Addis, with free parking inside the gate.
          </p>
        </div>

        <img
          src={hotelFront}
          alt="The Getva Hotel building in Debre Birhan with its red rooftop sign"
          loading="lazy"
          className="mb-16 aspect-[16/9] w-full rounded-sm object-cover"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="border border-earth/10 bg-white p-8 md:p-12">
            <div className="mb-6 h-px w-12 bg-clay"></div>
            <h2 className="mb-4 text-2xl text-earth">Address</h2>
            <p className="text-lg text-earth/80">
              Zerayakob Street<br />
              Debre Birhan, Amhara Region<br />
              Ethiopia
            </p>
            <div className="mt-8 space-y-4 text-sm text-earth/70">
              <p>
                <span className="text-label text-earth/40">Distance from Addis Ababa:</span><br />
                Approximately 110 km (69 miles) northeast of Bole International Airport.
              </p>
              <p>
                <span className="text-label text-earth/40">Nearby:</span><br />
                Historic Ankober, the main road through Debre Birhan, and local markets.
              </p>
            </div>
          </div>

          <div className="border border-earth/10 bg-white p-8 md:p-12">
            <div className="mb-6 h-px w-12 bg-clay"></div>
            <h2 className="mb-4 text-2xl text-earth">Getting Here</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-label mt-1 text-clay">01</span>
                <div>
                  <h3 className="font-serif text-lg text-earth">From Addis Ababa</h3>
                  <p className="text-sm text-earth/70">
                    Drive north via the Debre Birhan road, or arrange a private transfer through our front desk.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-label mt-1 text-clay">02</span>
                <div>
                  <h3 className="font-serif text-lg text-earth">By Air</h3>
                  <p className="text-sm text-earth/70">
                    Fly into Bole International Airport (ADD), then continue by road for roughly 2–3 hours.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-label mt-1 text-clay">03</span>
                <div>
                  <h3 className="font-serif text-lg text-earth">Local Transport</h3>
                  <p className="text-sm text-earth/70">
                    Taxis and minibuses are available in Debre Birhan. The hotel is on the main road, easy to find.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
