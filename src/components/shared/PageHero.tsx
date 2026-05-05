import Image from "next/image";
import BreadCrumb from "./BreadCrumb";

type Crumb = { label: string; href?: string };

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
  imageUrl?: string;
  imageAlt?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  imageUrl,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative min-h-70 flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-(--color-primary)" />
        )}
        <div className="absolute inset-0 bg-linear-to-r from-primary-dark/90 via-primary/70 to-transparent" />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <BreadCrumb crumbs={breadcrumbs} light />
        <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-white/80 text-lg max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
