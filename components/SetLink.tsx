type SetLinkProps = {
  name: string;
  code?: string;
  image: string;
  href: string;
};

export default function SetLink({ name, code, image, href }: SetLinkProps) {
  return (
    <span className="relative inline-block group">
      {/* Texto clickeable */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--primary-color)] font-medium underline decoration-[var(--primary-color)] hover:text-[var(--primary-color)] hover:decoration-[var(--primary-color)]"
      >
        {name} {code ? `(${code})` : ""}
      </a>

      {/* 👇 AQUÍ VA la clase que pasaste */}
      <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-52 -translate-x-1/2 rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-[var(--primary-color)] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition duration-200">
        <img src={image} alt={name} className="rounded-lg object-cover" />
      </span>
    </span>
  );
}
