import Link from "next/link";

export default function AttachmentsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
          Careers Only
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Attachments are handled through Careers
        </h1>
        <p className="mt-4 text-sm leading-6 text-slate-700">
          The app now uses a single public attachment flow: the Careers form at
          <span className="font-semibold"> /api/careers</span>. The generic
          attachment demo route has been removed so there is no second public
          upload path to confuse users.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/careers"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Go to Careers
          </Link>
          <Link
            href="/api/careers"
            className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100"
          >
            Careers API
          </Link>
        </div>
      </div>
    </main>
  );
}
