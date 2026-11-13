import Link from "next/link";
import { ArrowRight, Megaphone } from "lucide-react";

const announcements = [
  { label: "NEW TECHNOLOGIES", text: "DAE in Artificial Intelligence Technology and DAE in Cyber Security and Networks Technology." },
  { label: "ADMISSIONS OPEN", text: "Boys and girls can apply for Software, CIT, AI, Cyber Security and Networks, and Chemical Technology." },
  { label: "THREE-YEAR DAE", text: "Annual examinations conducted by SBTE for each year." },
];

export default function AnnouncementTicker() {
  return (
    <aside aria-label="Important admissions announcements" className="home-announcement border-b-2 border-gold bg-primary text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <span className="flex shrink-0 items-center gap-2 self-stretch bg-gold px-3 py-3.5 text-[10px] font-bold uppercase tracking-wider text-primary-dark sm:px-4 sm:text-xs">
          <Megaphone size={15} aria-hidden="true" /><span>Announcement</span>
        </span>
        <div className="min-w-0 flex-1 overflow-hidden py-2.5 text-xs font-medium leading-5 sm:text-sm">
          <div className="home-announcement-track">
            {[false, true].map((duplicate) => (
              <div key={String(duplicate)} aria-hidden={duplicate || undefined} className={`home-announcement-copy${duplicate ? " home-announcement-clone" : ""}`}>
                {announcements.map((item) => (
                  <span key={item.label} className="inline-flex items-center">
                    <strong className="mr-2 text-xs tracking-wide text-white">{item.label}:</strong>
                    <span className="text-white/90">{item.text}</span>
                    <span aria-hidden="true" className="mx-7 text-gold">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Link href="/admissions/apply-now" className="hidden shrink-0 items-center gap-1.5 border-l border-white/25 py-1 pl-4 text-xs font-semibold text-white underline-offset-4 hover:underline md:inline-flex">Apply Now <ArrowRight size={13} aria-hidden="true" /></Link>
      </div>
    </aside>
  );
}
