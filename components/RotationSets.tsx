type RotationYear = {
  year: string;
  legalUntil: string;
  sets: {
    name: string;
    image: string;
  }[];
};

const rotations: RotationYear[] = [
  {
    year: "2029",
    legalUntil: "At least 2029",
    sets: [{ name: "FDN", image: "/sets/2029/FDN.png" }],
  },
  {
    year: "2027",
    legalUntil: "January 2027",
    sets: [
      { name: "WOE", image: "/sets/2027/WOE.png" },
      { name: "LCI", image: "/sets/2027/LCI.png" },
      { name: "MKM", image: "/sets/2027/MKM.png" },
      { name: "OTJ", image: "/sets/2027/OTJ.png" },
      { name: "BLB", image: "/sets/2027/BLB.png" },
      { name: "DSK", image: "/sets/2027/DSK.png" },
    ],
  },
  {
    year: "2028",
    legalUntil: "January 2028",
    sets: [
      { name: "DFT", image: "/sets/2028/DFT.png" },
      { name: "TDM", image: "/sets/2028/TDM.png" },
      { name: "FIN", image: "/sets/2028/FIN.png" },
      { name: "EOE", image: "/sets/2028/EOE.png" },
      { name: "SPM", image: "/sets/2028/SPM.png" },
      { name: "TLA", image: "/sets/2028/TLA.png" },
    ],
  },
  {
    year: "2029",
    legalUntil: "January 2029",
    sets: [
      { name: "ECL", image: "/sets/2029/ECL.png" },
      { name: "TMT", image: "/sets/2029/TMT.png" },
      { name: "???", image: "/sets/2029/question_mark.png" },
      { name: "???", image: "/sets/2029/question_mark.png" },
      { name: "???", image: "/sets/2029/question_mark.png" },
      { name: "???", image: "/sets/2029/question_mark.png" },
      { name: "???", image: "/sets/2029/question_mark.png" },
    ],
  },
];

export default function RotationSets() {
  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-center text-2xl font-bold text-purple-600 mb-10">
        Standard Rotations
      </h2>

      <div className="space-y-8">
        {rotations.map((rotation) => (
          <div
            key={rotation.year}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            {/* Header */}
            <div className="mb-4 text-center">
              <h3 className="text-lg font-semibold text-purple-600">
                Legal until: {rotation.legalUntil}
              </h3>
            </div>

            {/* Sets */}
            <div className="flex flex-wrap justify-center gap-6">
              {rotation.sets.map((set) => (
                <div
                  key={set.name}
                  className="flex items-center justify-center w-24 h-24 bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition hover:ring-2 hover:ring-purple-300 "
                >
                  <img
                    src={set.image}
                    alt={set.name}
                    width={96}
                    height={96}
                    className="max-h-16 object-contain transition hover:scale-105 hover:brightness-110"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
