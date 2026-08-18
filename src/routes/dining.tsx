import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Dining — Getva Hotel" },
      { name: "description", content: "Enjoy Ethiopian cuisine and international dishes at Getva Hotel in Debre Birhan. Breakfast, lunch, and dinner served in our restaurant and traditional circular dining hall." },
      { property: "og:title", content: "Dining — Getva Hotel" },
      { property: "og:description", content: "Enjoy Ethiopian cuisine and international dishes at Getva Hotel in Debre Birhan. Breakfast, lunch, and dinner served in our restaurant and traditional circular dining hall." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DiningPage,
});

function DiningPage() {
  return (
    <div className="min-h-screen bg-warm-bg">
      <div className="section-container py-16 md:py-24">
        <div className="mb-16 max-w-2xl">
          <span className="text-label mb-4 block text-clay">Taste the Highlands</span>
          <h1 className="mb-4 text-4xl text-earth md:text-5xl">Dining at Getva</h1>
          <p className="text-lg text-earth/70">
            From freshly prepared Ethiopian classics to familiar international favorites, our kitchen serves generous meals made with local ingredients and highland hospitality.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="border border-earth/10 bg-white p-8 md:p-12">
            <div className="mb-6 h-px w-12 bg-clay"></div>
            <h2 className="mb-4 text-2xl text-earth">Main Restaurant</h2>
            <p className="mb-6 text-earth/70">
              Our dining hall serves a daily breakfast buffet, à la carte lunch, and dinner. Guests enjoy both Ethiopian and continental dishes in a relaxed setting overlooking the garden.
            </p>
            <ul className="space-y-3 text-sm text-earth/80">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-clay"></span>
                <span>Traditional breakfast included with every room</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-clay"></span>
                <span>Ethiopian coffee ceremony available on request</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-clay"></span>
                <span>Vegetarian and fasting-friendly options daily</span>
              </li>
            </ul>
          </div>

          <div className="border border-earth/10 bg-white p-8 md:p-12">
            <div className="mb-6 h-px w-12 bg-clay"></div>
            <h2 className="mb-4 text-2xl text-earth">Circular Traditional Hall</h2>
            <p className="mb-6 text-earth/70">
              Located in the garden near the parking area, our smaller circular dining hall offers a more intimate, traditional atmosphere for coffee, meals, and conversation.
            </p>
            <ul className="space-y-3 text-sm text-earth/80">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-clay"></span>
                <span>Authentic injera and wot dishes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-clay"></span>
                <span>Family-friendly garden seating</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-clay"></span>
                <span>Bar and lounge service available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-earth p-8 text-warm-bg md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="font-serif text-3xl text-clay">6:30</p>
              <p className="text-label mt-1 text-warm-bg/60">Breakfast Opens</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl text-clay">12:00</p>
              <p className="text-label mt-1 text-warm-bg/60">Lunch Service</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl text-clay">18:00</p>
              <p className="text-label mt-1 text-warm-bg/60">Dinner Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
