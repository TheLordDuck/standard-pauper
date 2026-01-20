export default function Rules() {
  return (
    <section
      id="rules"
      className="bg-white rounded-2xl shadow-lg p-10 max-w-3xl mx-auto"
    >
      {/* Title */}
      <h2 className="text-center text-2xl font-bold text-purple-600 mb-8">
        Rules
      </h2>

      {/* Rules list */}
      <ul className="space-y-4 text-sm text-slate-700">
        <li className="flex gap-3">
          <span className="font-semibold text-purple-600">•</span>
          <span>
            <strong>60 cards deck</strong>
          </span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-purple-600">•</span>
          <span>
            <strong>15 cards sideboard</strong>
          </span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-purple-600">•</span>
          <span>
            <strong>20 Starting Life</strong>
          </span>
        </li>

        <li className="flex gap-3">
          <span className="font-semibold text-purple-600">•</span>
          <span>
            Only cards printed as <strong>common</strong> in the current
            Standard are legal. For example, <strong>Abrade</strong> is common
            in Innistrad: Crimson Vow (VOW) but printed as uncommon in
            Foundations, therefore it <strong>cannot</strong> be used in
            deckbuilding.
          </span>
        </li>
      </ul>

      {/* Divider */}
      <div className="my-8 h-px bg-purple-100" />

      {/* Banlist */}
      <h3 className="text-center text-lg font-semibold text-purple-600 mb-4">
        Banlist
      </h3>

      <ul className="space-y-2 text-sm text-center">
        <li>
          <a
            href="https://scryfall.com/card/fdn/15/hare-apparent"
            className="text-purple-600 font-medium hover:text-purple-800 hover:underline transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hare Apparent
          </a>
        </li>

        <li>
          <a
            href="https://scryfall.com/card/mkm/177/slime-against-humanity"
            className="text-purple-600 font-medium hover:text-purple-800 hover:underline transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slime Against Humanity
          </a>
        </li>
      </ul>
    </section>
  );
}
