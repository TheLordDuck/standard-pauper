import sets from "./LegalSets";

type SetKey = keyof typeof sets;

const buildSetQuery = (setKeys?: SetKey | SetKey[]) => {
    if (!setKeys) {
        // all sets
        return Object.values(sets)
            .flat()
            .map(code => `e:${code}`)
            .join(" or ");
    }

    const keys = Array.isArray(setKeys) ? setKeys : [setKeys];

    return keys
        .flatMap(k => sets[k])
        .map(code => `e:${code}`)
        .join(" or ");
};

const buildColorQuery = (color?: string) => {
    if (!color || color === "all") return "";

    const map: Record<string, string> = {
        white: "c:w",
        blue: "c:u",
        black: "c:b",
        red: "c:r",
        green: "c:g",
        multi: "c:m",
        colorless: "c:c -type:land",
        lands: "type:land",
    };

    return map[color] ?? "";
};

export const parseUrlCards = (name?: string, color?: string) => {
    const base = "https://scryfall.com/search?q=";

    const parts: string[] = [];

    // Name search
    if (name) {
        parts.push(`name:"${name}"`);
    }

    // Always standard + common (like your original)
    parts.push("f:standard");
    parts.push("r:c");

    // Color filter
    const colorQuery = buildColorQuery(color);
    if (colorQuery) parts.push(colorQuery);

    // Sets
    parts.push(`(${buildSetQuery()})`);

    // Language
    parts.push("lang:en");

    const query = parts.join(" and ");

    return (
        base +
        encodeURIComponent(query) +
        "&unique=cards&as=grid&order=name"
    );
};
