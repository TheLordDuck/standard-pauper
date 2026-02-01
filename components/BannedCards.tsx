type BannedCard = {
  name: string;
  image: string;
  link: string;
};

const bannedCards: BannedCard[] = [
  {
    name: "Hare Apparent",
    image: "/banned/fdn-15-hare-apparent.jpg",
    link: "https://scryfall.com/card/fdn/15/hare-apparent",
  },
  {
    name: "Tempest Hawk",
    image: "/banned/tdm-31-tempest-hawk.jpg",
    link: "https://scryfall.com/card/tdm/31/tempest-hawk",
  },
  {
    name: "Slime Against Humanity",
    image: "/banned/mkm-177-slime-against-humanity.jpg",
    link: "https://scryfall.com/card/mkm/177/slime-against-humanity",
  },
];

export default function BannedCards() {
  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-center text-2xl font-bold text-[var(--primary-color)] mb-8">
        Banned Cards
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {bannedCards.map((card) => (
          <a
            key={card.name}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative rounded-xl overflow-hidden transition transform group-hover:scale-105">
              {/* Glow */}
              <div className="absolute inset-0 bg-[var(--primary-color)] blur-xl opacity-0 group-hover:opacity-100 transition" />

              {/* Card image */}
              <img
                src={card.image}
                alt={card.name}
                className="relative w-40 rounded-xl shadow-lg"
              />

              {/* BANNED badge */}
              <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow">
                BANNED
              </span>
            </div>

            {/* Name */}
            <p className="mt-2 text-center text-sm font-medium text-slate-700 group-hover:text-[var(--primary-color)] transition">
              {card.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
