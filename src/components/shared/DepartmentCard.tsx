import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { type Department } from "@/data/departments";

interface DepartmentCardProps {
  department: Department;
}

export default function DepartmentCard({ department }: DepartmentCardProps) {
  return (
    <Link
      href={`/departments/${department.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image container – portrait aspect ratio */}
      <div className="relative aspect-3.5/4 overflow-hidden">
        <Image
          src={department.image}
          alt={department.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        {/* Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gold text-white">
            {department.courses.length} Courses
          </span>
        </div>
      </div>

      {/* Card body – fills remaining space */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-primary-dark text-base mb-1 group-hover:text-primary transition-colors font-serif line-clamp-1">
          {department.name}
        </h3>
        <p className="text-xs text-text-muted mb-1">HOD: {department.hod}</p>
        <p className="text-sm text-text-muted line-clamp-1 mb-3">
          {department.fullName}
        </p>
        {/* Spacer pushes the link to the bottom if cards have different content lengths */}
        <div className="mt-auto">
          <span className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
            View Department <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
