import Link from "next/link";
import { GRAND_ORAL_SUBJECTS } from "@/data/grand-oral";

export const metadata = {
  title: "Sujets · Grand Oral",
  description: "Sujets Grand Oral (Maths / SES) sous forme de fiches de révision.",
};

function Pill({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "accent";
}) {
  return (
    <span
      className={
        tone === "accent"
          ? "rounded-full border border-[color:rgb(194_113_79_/_0.25)] bg-[color:rgb(194_113_79_/_0.10)] px-3 py-1 text-xs font-semibold tracking-wide text-[color:var(--accent)]"
          : "rounded-full border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.72)] px-3 py-1 text-xs font-semibold tracking-wide text-[color:var(--text-secondary)]"
      }
    >
      {children}
    </span>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.78)] p-4 shadow-[0_1px_2px_rgb(15_23_42_/_0.05)] backdrop-blur">
      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
        {label}
      </div>
      <div className="mt-2 text-xl font-semibold tracking-tight text-[color:var(--text-primary)]">
        {value}
      </div>
    </div>
  );
}

export default function SujetsPage() {
  return (
    <div className="flex-1 w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:py-14">
        <div className="relative overflow-hidden rounded-[28px] border border-[color:rgb(194_113_79_/_0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,244,238,0.96))] shadow-[0_24px_80px_rgb(30_41_59_/_0.08)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,rgba(194,113,79,0.14),rgba(184,149,42,0.06),transparent)]" />
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(194,113,79,0.12),transparent_72%)]" />

          <div className="relative px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="flex flex-wrap items-center gap-2">
              <Pill tone="accent">Grand Oral</Pill>
              <Pill>Maths / Maths + SES</Pill>
              <Pill>10 minutes</Pill>
              <Pill>Style dev tool</Pill>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.85fr)] lg:items-start">
              <div>
                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-4xl">
                  Fiches Grand Oral pensées comme un vrai produit de revision
                </h1>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[color:var(--text-secondary)] sm:text-base">
                  Chaque sujet est organise comme une surface de travail claire : problematique,
                  plan minute par minute, script pret a dire, notions, modeles, exemples concrets,
                  questions du jury, flashcards et mini-quiz.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.82)] px-4 py-3 text-sm leading-6 text-[color:var(--text-secondary)] shadow-[0_1px_2px_rgb(15_23_42_/_0.04)]">
                    Lecture en couches : vue d&apos;ensemble, sections detaillees, puis revision rapide.
                  </div>
                  <div className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.82)] px-4 py-3 text-sm leading-6 text-[color:var(--text-secondary)] shadow-[0_1px_2px_rgb(15_23_42_/_0.04)]">
                    Structure ideale pour reviser vite, puis rehearser a l&apos;oral sans te perdre.
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <StatCard label="Sujets" value={String(GRAND_ORAL_SUBJECTS.length).padStart(2, "0")} />
                <StatCard label="Temps cible" value="10 min" />
                <StatCard label="Mode" value="Scan + oral" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-2xl">
              Bibliotheque des sujets
            </h2>
            <p className="mt-1 text-sm leading-6 text-[color:var(--text-secondary)]">
              Des cartes plus lisibles, plus rapides a scanner, et structurees comme un dashboard.
            </p>
          </div>

          <div className="hidden rounded-full border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.72)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[color:var(--text-muted)] sm:block">
            /sujets
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-2">
          {GRAND_ORAL_SUBJECTS.map((subject, index) => (
            <Link
              key={subject.slug}
              href={`/sujets/${subject.slug}`}
              className="card-hover group relative overflow-hidden rounded-[22px] border border-[color:rgb(30_41_59_/_0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,244,238,0.90))] p-6 shadow-[0_10px_40px_rgb(30_41_59_/_0.07)] transition duration-200 hover:border-[color:rgb(194_113_79_/_0.22)] hover:shadow-[0_20px_60px_rgb(30_41_59_/_0.10)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(194,113,79,0.32),transparent)] opacity-60" />

              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Pill tone="accent">Sujet {index + 1}</Pill>
                    <Pill>{subject.track}</Pill>
                  </div>

                  <div className="mt-4 text-xl font-semibold leading-8 tracking-tight text-[color:var(--text-primary)]">
                    {subject.title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                    {subject.subtitle}
                  </div>
                </div>

                <div className="shrink-0 rounded-full border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.82)] px-3 py-1 text-xs font-semibold text-[color:var(--text-secondary)] shadow-[0_1px_2px_rgb(15_23_42_/_0.04)]">
                  10 min
                </div>
              </div>

              <div className="mt-5 rounded-[18px] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.72)] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
                  Problematique
                </div>
                <div className="mt-2 text-sm leading-6 text-[color:var(--text-primary)]">
                  {subject.problematique}
                </div>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                <div className="rounded-[16px] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.65)] px-3 py-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
                    Plan
                  </div>
                  <div className="mt-1 text-sm font-medium text-[color:var(--text-primary)]">
                    Minute par minute
                  </div>
                </div>
                <div className="rounded-[16px] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.65)] px-3 py-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
                    Script
                  </div>
                  <div className="mt-1 text-sm font-medium text-[color:var(--text-primary)]">
                    Pret a dire
                  </div>
                </div>
                <div className="rounded-[16px] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.65)] px-3 py-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
                    Revision
                  </div>
                  <div className="mt-1 text-sm font-medium text-[color:var(--text-primary)]">
                    Quiz + flashcards
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-[color:rgb(30_41_59_/_0.08)] pt-4 text-sm">
                <span className="font-medium text-[color:var(--text-primary)]">
                  Ouvrir la fiche
                </span>
                <span className="font-mono text-xs text-[color:var(--text-muted)] transition duration-200 group-hover:text-[color:var(--accent)]">
                  /sujets/{subject.slug}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-[20px] border border-dashed border-[color:rgb(30_41_59_/_0.12)] bg-[color:rgb(255_255_255_/_0.56)] px-5 py-4 text-sm leading-6 text-[color:var(--text-secondary)]">
          Astuce de revision : scanne d&apos;abord la problematique, les transitions et les encadres de
          formule, puis rejoue le script a voix haute pour transformer la lecture en oral.
        </div>
      </div>
    </div>
  );
}
