import Image from "next/image";

// Official recognition logos shown on the home page.
// Update image paths in /public/affiliated when replacing logos.
const recognitions = [
  {
    title: "NAVTTC",
    authority: "National Vocational Technical Training Commission",
    note: "Govt. of Pakistan",
    image: "/affiliated/navttc.jpg",
    imageAlt: "NAVTTC logo",
  },
  {
    title: "STEVTA",
    authority: "Sindh Technical Education Vocational Training Authority",
    note: "Govt. of Sindh",
    image: "/affiliated/stevtr.jpg",
    imageAlt: "STEVTA logo",
  },
  {
    title: "SBTE",
    authority: "Sindh Board Of Technical Education",
    note: "Govt. of Sindh",
    image: "/affiliated/sbte.png",
    imageAlt: "SBTE logo",
  },
];

export default function AccreditationStrip() {
  return (
    <section className="py-16 bg-(--color-surface)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-(--color-primary) text-xs font-semibold uppercase tracking-wider mb-3">
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-primary-dark) font-serif">
            Accreditation, Affiliation and Registration
          </h2>
          <p className="mt-3 text-(--color-text-muted) max-w-2xl mx-auto">
            Our institute is recognized by national and provincial technical
            education authorities.
          </p>
        </div>

        {/* Single horizontal row on desktop and horizontal scroll strip on mobile */}
        <div className="flex gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
          {recognitions.map((item) => (
            <article
              key={item.title}
              className="min-w-70 md:min-w-0 rounded-2xl border border-primary/15 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-28 w-full overflow-hidden rounded-xl border border-primary/10 bg-white">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 280px, 33vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-(--color-gold)">
                  {item.title}
                </p>
                <h3 className="mt-1 text-lg font-bold text-(--color-primary-dark)">
                  {item.authority}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(--color-text-muted)">
                  {item.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
