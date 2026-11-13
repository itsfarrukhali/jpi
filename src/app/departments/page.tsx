import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import DepartmentCard from "@/components/shared/DepartmentCard";
import { departments } from "@/data/departments";

export const metadata: Metadata = {
  title: "Academic Departments",
  description: "Explore JPI academic departments, including CSIT: Software, CIT, Artificial Intelligence, and Cyber Security and Networks Technology.",
};

export default function DepartmentsPage() {
  return <>
    <PageHero title="Academic Departments" subtitle="Departments offering three-year DAE programs with annual SBTE examinations" breadcrumbs={[{ label: "Departments" }]} imageUrl="/brand/jpi-building.jpeg" />
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-2xl font-bold text-primary-dark">Explore Our Departments</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{departments.map((department) => <DepartmentCard key={department.slug} department={department} />)}</div>
    </section>
  </>;
}
