import SetLink from "./SetLink";

export default function Rules() {
  return (
    <section
      id="rules"
      className="bg-white rounded-2xl shadow-lg p-10 max-w-3xl mx-auto"
    >
      {/* Title */}
      <h2 className="text-center text-2xl font-bold text-[var(--primary-color)] mb-8">
        Rules
      </h2>

      {/* Rules list */}
      <ul className="space-y-4 text-sm text-slate-700">
        <li className="flex gap-3">
          <span className="font-semibold text-[var(--primary-color)]">•</span>
          <span>
            <strong>60 cards deck</strong>
          </span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-[var(--primary-color)]">•</span>
          <span>
            <strong>15 cards sideboard</strong>
          </span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-[var(--primary-color)]">•</span>
          <span>
            <strong>20 Starting Life</strong>
          </span>
        </li>

        <li className="flex gap-3">
          <span className="font-semibold text-[var(--primary-color)]">•</span>
          <span>
            Only cards printed as <strong>common</strong> in the current
            Standard are legal. For example, <strong>Spell Pierce</strong> is
            common in{" "}
            <SetLink
              name="Kamigawa: Neon Dynasty"
              code="NEO"
              image="/not_legal_uncommon/neo-80-spell-pierce.jpg"
              href="https://scryfall.com/card/neo/80/spell-pierce"
            />{" "}
            but printed as uncommon in{" "}
            <SetLink
              name="Aetherdrift"
              code="DFT"
              image="/not_legal_uncommon/dft-64-spell-pierce.jpg"
              href="https://scryfall.com/card/dft/64/spell-pierce"
            />
            , therefore it <strong>cannot</strong> be used in deckbuilding.
          </span>
        </li>
      </ul>

      {/* Divider */}
      <div className="my-8 h-px bg-[var(--primary-color)]" />

      {/* Banlist */}
      <h3 className="text-center text-lg font-semibold text-[var(--primary-color)] mb-4">
        Banlist
      </h3>

      <ul className="space-y-2 text-sm text-center">
        <li>
          <SetLink
            name="Hare Apparent"
            image="/banned/fdn-15-hare-apparent.jpg"
            href="https://scryfall.com/card/fdn/15/hare-apparent"
          />
        </li>
        <li>
          <SetLink
            name="Tempest Hawk"
            image="/banned/tdm-31-tempest-hawk.jpg"
            href="https://scryfall.com/card/tdm/31/tempest-hawk"
          />
        </li>
        <li>
          <SetLink
            name="Slime Against Humanity"
            image="/banned/mkm-177-slime-against-humanity.jpg"
            href="https://scryfall.com/card/mkm/177/slime-against-humanity"
          />
        </li>
      </ul>
    </section>
  );
}
