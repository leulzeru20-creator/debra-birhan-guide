import { createFileRoute } from "@tanstack/react-router";
import terrace from "@/assets/caption.jpg";
import bambooLounge from "@/assets/caption_2.jpg";
import restaurantHall from "@/assets/restaurant-hall.jpg";
import buffet from "@/assets/breakfast-buffet.jpg";
import pastaPlate from "@/assets/pasta-plate.jpg";
import windowTable from "@/assets/window-table.jpg";
import bar from "@/assets/bar.jpg";
import traditionalHall from "@/assets/extra.jpg";

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
        <div className="mb-10 max-w-2xl">
          <span className="text-label mb-4 block text-clay">Taste the Highlands</span>
          <h1 className="mb-4 text-4xl text-earth md:text-5xl">Dining at Getva</h1>
          <p className="text-lg text-earth/70">
            Injera and wot cooked the way it should be, plus pasta, eggs and grills when you want something familiar. Eat inside, under the terrace roof, or out in the garden.
          </p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <img
            src={restaurantHall}
            alt="Getva Hotel restaurant with white chair covers and burgundy table linens"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
          <img
            src={buffet}
            alt="Breakfast buffet line with chafing dishes and bowls of salads and fruit"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-4">
          <img
            src={pastaPlate}
            alt="Spaghetti with meatballs, kofta and open sandwiches served at Getva Hotel"
            loading="lazy"
            className="aspect-square w-full rounded-sm object-cover"
          />
          <img
            src={windowTable}
            alt="Small red-clothed table for two by a large window at Getva Hotel"
            loading="lazy"
            className="aspect-square w-full rounded-sm object-cover"
          />
          <img
            src={terrace}
            alt="Covered terrace dining area with tables and a woven mesob at Getva Hotel"
            loading="lazy"
            className="aspect-square w-full rounded-sm object-cover"
          />
          <img
            src={bambooLounge}
            alt="Bamboo lounge with arched windows and woven chairs at Getva Hotel"
            loading="lazy"
            className="aspect-square w-full rounded-sm object-cover"
          />
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
            <img
              src={traditionalHall}
              alt="Traditional interior hall with carved wooden chairs, woven wall panels and arched windows at Getva Hotel"
              loading="lazy"
              className="mb-6 aspect-[4/3] w-full rounded-sm object-cover"
            />
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

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <img
            src={bar}
            alt="The lit bar at Getva Hotel with bottles on glass shelves and low tables"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
          <div>
            <div className="mb-6 h-px w-12 bg-clay"></div>
            <h2 className="mb-4 text-2xl text-earth">The Bar</h2>
            <p className="text-earth/70">
              A quiet drink after the drive, or a longer evening with the billiards table next door. Local beer, spirits, soft drinks and coffee — open late enough for anyone arriving off the Addis road.
            </p>
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
