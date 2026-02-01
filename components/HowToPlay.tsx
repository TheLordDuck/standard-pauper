const items = [
  {
    title: "Deck",
    text: "Your deck contains 60 cards.",
  },
  {
    title: "Sideboard",
    text: "Your sideboard contains 15 cards.",
  },

  {
    title: "Rarity",
    text: "Only commons printed in the current Standard.",
  },
];

export default function HowToPlay() {
  return (
    <section className="grid md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.title}
          className="bg-[var(--primary-color)] text-white rounded-xl p-6 text-center shadow"
        >
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="font-bold mt-2 text-sm opacity-90">{item.text}</p>
        </div>
      ))}
    </section>
  );
}
