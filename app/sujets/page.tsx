import Link from "next/link";
import { GRAND_ORAL_SUBJECTS } from "@/data/grand-oral";

export const metadata = {
  title: "Sujets · Grand Oral",
  description: "Sujets Grand Oral (Maths / SES) sous forme de fiches de révision.",
};

export default function SujetsPage() {
  return (
    <div className="flex-1 w-full">
      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[color:var(--text-muted)]">
            <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1">
              Grand Oral
            </span>
            <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1">
              10 minutes
            </span>
            <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1">
              Ambitieux + clair
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight">
            Sujets (Maths / Maths + SES)
          </h1>
          <p className="max-w-2xl text-[15px] leading-7 text-[color:var(--text-secondary)]">
            Fiches de révision structurées “style dev”: problématique, plan minuté, script prêt à
            dire, notions, formules, exemples et questions de jury.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {GRAND_ORAL_SUBJECTS.map((s, idx) => (
            <Link
              key={s.slug}
              href={`/sujets/${s.slug}`}
              className="card-hover group rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-wide text-[color:var(--text-muted)]">
                    Sujet {idx + 1} · {s.track}
                  </div>
                  <div className="mt-2 text-lg font-semibold leading-7">{s.title}</div>
                  <div className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                    {s.subtitle}
                  </div>
                </div>
                <div className="shrink-0 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-alt)] px-3 py-1 text-xs font-semibold text-[color:var(--text-secondary)]">
                  10 min
                </div>
              </div>

              <div className="mt-5 rounded-[var(--radius-md)] border border-[color:var(--border)] bg-[color:var(--surface-alt)] p-4">
                <div className="text-xs font-semibold tracking-wide text-[color:var(--text-muted)]">
                  Problématique
                </div>
                <div className="mt-2 text-sm leading-6">{s.problematique}</div>
              </div>

              <div className="mt-5 flex items-center justify-between text-sm text-[color:var(--text-secondary)]">
                <span className="font-medium">Ouvrir la fiche</span>
                <span className="font-mono text-xs opacity-60 group-hover:opacity-100">
                  /sujets/{s.slug}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-sm text-[color:var(--text-secondary)]">
          Astuce: entraîne-toi à l’oral en lisant uniquement les phrases en gras (intro + transitions +
          conclusion), puis ajoute les exemples.
        </div>
      </div>
    </div>
  );
}

