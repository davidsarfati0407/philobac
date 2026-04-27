import Link from "next/link";
import { notFound } from "next/navigation";
import { GRAND_ORAL_SUBJECTS } from "@/data/grand-oral";

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-xs font-semibold tracking-wide text-[color:var(--text-muted)]">
        {subtitle}
      </div>
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
    </div>
  );
}

function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
      {children}
    </div>
  );
}

export default async function SujetDetailPage(props: PageProps<"/sujets/[slug]">) {
  const { slug } = await props.params;
  const subject = GRAND_ORAL_SUBJECTS.find((s) => s.slug === slug);
  if (!subject) return notFound();

  return (
    <div className="flex-1 w-full">
      <div className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/sujets"
              className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm font-semibold text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
            >
              ← Tous les sujets
            </Link>
            <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-alt)] px-3 py-1 text-xs font-semibold text-[color:var(--text-secondary)]">
              {subject.track}
            </span>
            <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-alt)] px-3 py-1 text-xs font-semibold text-[color:var(--text-secondary)]">
              10 minutes
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight">
              {subject.title}
            </h1>
            <p className="max-w-3xl text-[15px] leading-7 text-[color:var(--text-secondary)]">
              {subject.pitch}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Card>
              <SectionTitle title="Problématique" subtitle="Ce que tu dois répondre" />
              <p className="mt-4 text-[15px] leading-7">{subject.problematique}</p>
            </Card>

            <Card>
              <SectionTitle title="Plan minuté (10 minutes)" subtitle="Structure + transitions" />
              <div className="mt-5 grid gap-4">
                {subject.planMinute.map((p) => (
                  <div
                    key={`${p.title}-${p.minutes}`}
                    className="rounded-[var(--radius-md)] border border-[color:var(--border)] bg-[color:var(--surface-alt)] p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="font-semibold">{p.title}</div>
                      <div className="font-mono text-xs text-[color:var(--text-muted)]">
                        {p.minutes}
                      </div>
                    </div>
                    <div className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      {p.goal}
                    </div>
                    <ul className="mt-3 list-disc pl-5 text-sm leading-6">
                      {p.keyPoints.map((k) => (
                        <li key={k}>{k}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <SectionTitle title="Script prêt à dire" subtitle="Phrases fluides" />
              <div className="mt-5 grid gap-4">
                {(
                  [
                    ["Introduction", subject.script.intro],
                    ["Partie I", subject.script.partie1],
                    ["Partie II", subject.script.partie2],
                    ["Partie III", subject.script.partie3],
                    ["Conclusion", subject.script.conclusion],
                  ] as const
                ).map(([label, lines]) => (
                  <div
                    key={label}
                    className="rounded-[var(--radius-md)] border border-[color:var(--border)] bg-[color:var(--surface)] p-4"
                  >
                    <div className="text-xs font-semibold tracking-wide text-[color:var(--text-muted)]">
                      {label}
                    </div>
                    <div className="mt-3 grid gap-2 text-sm leading-6">
                      {lines.map((line, i) => (
                        <p key={`${label}-${i}`}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-6">
            <Card>
              <SectionTitle title="Notions à placer" subtitle="SES / Maths" />
              <div className="mt-5 grid gap-3">
                {subject.notions.map((n) => (
                  <div
                    key={n.label}
                    className="rounded-[var(--radius-md)] border border-[color:var(--border)] bg-[color:var(--surface-alt)] p-4"
                  >
                    <div className="font-semibold">{n.label}</div>
                    <div className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      {n.whyItMatters}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <SectionTitle title="Modèles & formules" subtitle="Ce qui “fait maths”" />
              <div className="mt-5 grid gap-3">
                {subject.modelesEtFormules.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-[var(--radius-md)] border border-[color:var(--border)] bg-[color:var(--surface-alt)] p-4"
                  >
                    <div className="font-semibold">{m.label}</div>
                    <ul className="mt-3 list-disc pl-5 text-sm leading-6">
                      {m.content.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                    {m.limites?.length ? (
                      <div className="mt-3 rounded-[var(--radius-sm)] border border-[color:var(--border)] bg-[color:var(--surface)] p-3">
                        <div className="text-xs font-semibold tracking-wide text-[color:var(--text-muted)]">
                          Limites (à dire pour paraître mature)
                        </div>
                        <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-[color:var(--text-secondary)]">
                          {m.limites.map((l) => (
                            <li key={l}>{l}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <SectionTitle title="Exemples concrets" subtitle="Ce qui fait la différence" />
              <div className="mt-5 grid gap-3">
                {subject.exemples.map((e) => (
                  <div
                    key={e.label}
                    className="rounded-[var(--radius-md)] border border-[color:var(--border)] bg-[color:var(--surface-alt)] p-4"
                  >
                    <div className="font-semibold">{e.label}</div>
                    <ul className="mt-3 list-disc pl-5 text-sm leading-6">
                      {e.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <SectionTitle title="Questions probables du jury" subtitle="Réponses rapides" />
              <div className="mt-5 grid gap-3">
                {subject.questionsJury.map((q) => (
                  <div
                    key={q.q}
                    className="rounded-[var(--radius-md)] border border-[color:var(--border)] bg-[color:var(--surface-alt)] p-4"
                  >
                    <div className="font-semibold">{q.q}</div>
                    <div className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      {q.angle}
                    </div>
                    <ul className="mt-3 list-disc pl-5 text-sm leading-6">
                      {q.elements.map((el) => (
                        <li key={el}>{el}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

