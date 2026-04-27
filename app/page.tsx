import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <div className="rounded-[var(--radius-xl)] border border-[color:var(--border)] bg-[color:var(--surface)] p-10 shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[color:var(--text-muted)]">
              <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-alt)] px-3 py-1">
                Révision
              </span>
              <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-alt)] px-3 py-1">
                Grand Oral
              </span>
              <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-alt)] px-3 py-1">
                Maths / SES
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight">
              Fiches “style dev” pour le Grand Oral
            </h1>
            <p className="max-w-2xl text-[15px] leading-7 text-[color:var(--text-secondary)]">
              Une interface claire, structurée et ambitieuse : problématique, plan minuté, script prêt
              à dire, notions, formules, exemples et questions de jury.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--foreground)] px-6 text-sm font-semibold text-[color:var(--background)] transition-colors hover:opacity-90"
                href="/sujets"
              >
                Ouvrir les sujets
              </Link>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-6 text-sm font-semibold text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js Docs
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Plan minuté",
                d: "10 minutes, transitions incluses.",
              },
              {
                t: "Script prêt à dire",
                d: "Fluide, technique, mais simple.",
              },
              {
                t: "Jury-ready",
                d: "Questions probables + angles.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface-alt)] p-5"
              >
                <div className="font-semibold">{c.t}</div>
                <div className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                  {c.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
