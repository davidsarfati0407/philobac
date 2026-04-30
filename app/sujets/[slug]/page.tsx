import Link from "next/link";
import { notFound } from "next/navigation";
import { GRAND_ORAL_SUBJECTS } from "@/data/grand-oral";

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
          ? "rounded-full border border-[color:rgb(194_113_79_/_0.24)] bg-[color:rgb(194_113_79_/_0.10)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--accent)]"
          : "rounded-full border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.76)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--text-secondary)]"
      }
    >
      {children}
    </span>
  );
}

function SurfaceCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[22px] border border-[color:rgb(30_41_59_/_0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,244,238,0.92))] p-5 shadow-[0_10px_36px_rgb(15_23_42_/_0.06)] sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
          {eyebrow}
        </div>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-[color:var(--text-primary)]">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[color:var(--text-secondary)]">
            {description}
          </p>
        ) : null}
      </div>
      <div className="hidden h-px min-w-16 flex-1 self-center bg-[linear-gradient(90deg,rgba(148,163,184,0.28),transparent)] sm:block" />
    </div>
  );
}

function MetricTile({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[18px] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.76)] px-4 py-3 shadow-[0_1px_2px_rgb(15_23_42_/_0.04)]">
      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-[color:var(--text-primary)]">
        {value}
      </div>
    </div>
  );
}

export default async function SujetDetailPage(props: PageProps<"/sujets/[slug]">) {
  const { slug } = await props.params;
  const subject = GRAND_ORAL_SUBJECTS.find((s) => s.slug === slug);

  if (!subject) return notFound();

  const pitchLines = subject.pitch.split("\n").filter(Boolean);
  const flashcards = subject.flashcards ?? [];
  const miniQuiz = subject.miniQuiz ?? [];
  const scriptSections = [
    ["Introduction", subject.script.intro],
    ["Partie I", subject.script.partie1],
    ["Partie II", subject.script.partie2],
    ["Partie III", subject.script.partie3],
    ["Conclusion", subject.script.conclusion],
  ] as const;

  return (
    <div className="flex-1 w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="relative overflow-hidden rounded-[30px] border border-[color:rgb(194_113_79_/_0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,238,0.95))] shadow-[0_24px_90px_rgb(30_41_59_/_0.09)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,rgba(194,113,79,0.12),rgba(184,149,42,0.05),transparent)]" />
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(194,113,79,0.12),transparent_72%)]" />

          <div className="relative px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/sujets"
                className="rounded-full border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.82)] px-4 py-2 text-sm font-semibold text-[color:var(--text-secondary)] transition duration-200 hover:border-[color:rgb(194_113_79_/_0.24)] hover:text-[color:var(--text-primary)]"
              >
                ← Tous les sujets
              </Link>
              <Pill tone="accent">{subject.track}</Pill>
              <Pill>10 minutes</Pill>
              <Pill>{flashcards.length} flashcards</Pill>
              <Pill>{miniQuiz.length} quiz</Pill>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(300px,0.9fr)]">
              <div>
                <div className="text-sm font-medium text-[color:var(--accent)]">
                  /sujets/{subject.slug}
                </div>
                <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[color:var(--text-primary)] sm:text-4xl">
                  {subject.title}
                </h1>
                <p className="mt-3 max-w-3xl text-base leading-7 text-[color:var(--text-secondary)]">
                  {subject.subtitle}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <MetricTile label="Problematique" value="1 axe central" />
                  <MetricTile label="Plan" value={`${subject.planMinute.length} temps forts`} />
                  <MetricTile label="Script" value="Pret a dire" />
                </div>
              </div>

              <div className="rounded-[24px] border border-[color:rgb(30_41_59_/_0.08)] bg-[color:rgb(255_255_255_/_0.76)] p-5 shadow-[0_10px_30px_rgb(15_23_42_/_0.06)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
                  Pitch
                </div>
                <div className="mt-4 space-y-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                  {pitchLines.map((line, index) => (
                    <p key={`${subject.slug}-pitch-${index}`}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.95fr)]">
          <div className="space-y-6">
            <SurfaceCard>
              <SectionHeader
                eyebrow="Cap"
                title="Problematique"
                description="La question que toute ta fiche doit eclairer du debut a la conclusion."
              />
              <div className="mt-5 rounded-[20px] border border-[color:rgb(194_113_79_/_0.16)] bg-[color:rgb(194_113_79_/_0.07)] p-5">
                <p className="text-[15px] leading-7 text-[color:var(--text-primary)]">
                  {subject.problematique}
                </p>
              </div>
            </SurfaceCard>

            <SurfaceCard>
              <SectionHeader
                eyebrow="Deroule"
                title="Plan minute par minute"
                description="Chaque bloc a un objectif clair, des points a placer et une transition pour garder un oral fluide."
              />
              <div className="mt-6 space-y-4">
                {subject.planMinute.map((part, index) => (
                  <div
                    key={`${part.title}-${part.minutes}`}
                    className="rounded-[20px] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.78)] p-4 shadow-[0_1px_2px_rgb(15_23_42_/_0.04)] transition duration-200 hover:border-[color:rgb(194_113_79_/_0.20)]"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-alt)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-secondary)]">
                            Etape {index + 1}
                          </span>
                          <span className="rounded-full border border-[color:rgb(194_113_79_/_0.18)] bg-[color:rgb(194_113_79_/_0.08)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--accent)]">
                            {part.minutes}
                          </span>
                        </div>
                        <h3 className="mt-3 text-lg font-semibold tracking-tight text-[color:var(--text-primary)]">
                          {part.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-4 rounded-[16px] border border-[color:var(--border)] bg-[color:rgb(248_244_238_/_0.7)] p-4">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
                        Objectif
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[color:var(--text-primary)]">
                        {part.goal}
                      </p>
                    </div>

                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      {part.keyPoints.map((point) => (
                        <li
                          key={point}
                          className="rounded-[16px] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.76)] px-4 py-3"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>

                    {part.transition ? (
                      <div className="mt-4 rounded-[16px] border border-[color:rgb(30_41_59_/_0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(240,237,230,0.72))] p-4 text-sm leading-6 text-[color:var(--text-secondary)]">
                        <span className="font-semibold text-[color:var(--text-primary)]">
                          Transition
                        </span>
                        <span className="text-[color:var(--text-muted)]"> · </span>
                        {part.transition}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </SurfaceCard>

            <SurfaceCard>
              <SectionHeader
                eyebrow="Oral"
                title="Script pret a dire"
                description="Des formulations simples, ambitieuses et faciles a restituer avec un bon rythme a l'oral."
              />
              <div className="mt-6 grid gap-4">
                {scriptSections.map(([label, lines], index) => (
                  <div
                    key={label}
                    className="rounded-[20px] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.80)] p-4 shadow-[0_1px_2px_rgb(15_23_42_/_0.04)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-alt)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-secondary)]">
                        Bloc {index + 1}
                      </span>
                      <div className="text-sm font-semibold text-[color:var(--text-primary)]">
                        {label}
                      </div>
                    </div>
                    <div className="mt-4 space-y-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                      {lines.map((line, lineIndex) => (
                        <p
                          key={`${label}-${lineIndex}`}
                          className="rounded-[14px] border border-[color:rgb(30_41_59_/_0.06)] bg-[color:rgb(248_244_238_/_0.52)] px-4 py-3"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </div>

          <div className="space-y-6 xl:sticky xl:top-6 xl:self-start">
            <SurfaceCard className="bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,237,230,0.88))]">
              <SectionHeader
                eyebrow="Scan rapide"
                title="A retenir"
                description="Une vue courte pour retrouver l'architecture de la fiche en quelques secondes."
              />
              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <MetricTile label="Notions" value={`${subject.notions.length} reperes`} />
                <MetricTile label="Modeles" value={`${subject.modelesEtFormules.length} blocs`} />
                <MetricTile label="Exemples" value={`${subject.exemples.length} cas`} />
                <MetricTile label="Questions jury" value={`${subject.questionsJury.length} angles`} />
              </div>
            </SurfaceCard>

            <SurfaceCard>
              <SectionHeader
                eyebrow="Notions"
                title="Notions a placer"
                description="Des points courts a injecter pendant l'oral pour montrer la maitrise du programme."
              />
              <div className="mt-5 grid gap-3">
                {subject.notions.map((notion) => (
                  <div
                    key={notion.label}
                    className="rounded-[18px] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.78)] p-4 transition duration-200 hover:border-[color:rgb(194_113_79_/_0.20)]"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <Pill tone="accent">A placer</Pill>
                      <div className="text-sm font-semibold text-[color:var(--text-primary)]">
                        {notion.label}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                      {notion.whyItMatters}
                    </p>
                  </div>
                ))}
              </div>
            </SurfaceCard>

            <SurfaceCard>
              <SectionHeader
                eyebrow="Maths"
                title="Modeles et formules"
                description="Les formules, leur interpretation et la limite du modele pour garder un discours mature."
              />
              <div className="mt-5 grid gap-4">
                {subject.modelesEtFormules.map((model) => (
                  <div
                    key={model.label}
                    className="rounded-[20px] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.78)] p-4"
                  >
                    <div className="text-sm font-semibold text-[color:var(--text-primary)]">
                      {model.label}
                    </div>
                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      {model.content.map((item) => (
                        <li
                          key={item}
                          className="rounded-[14px] border border-[color:rgb(30_41_59_/_0.06)] bg-[color:rgb(248_244_238_/_0.56)] px-4 py-3"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    {model.limites?.length ? (
                      <div className="mt-4 rounded-[16px] border border-[color:rgb(194_113_79_/_0.16)] bg-[color:rgb(194_113_79_/_0.08)] p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--accent)]">
                          Limites du modele
                        </div>
                        <ul className="mt-3 grid gap-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                          {model.limites.map((limit) => (
                            <li key={limit}>{limit}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </SurfaceCard>

            <SurfaceCard>
              <SectionHeader
                eyebrow="Terrain"
                title="Exemples concrets"
                description="Des cas et des ordres de grandeur a citer pour sortir de la theorie pure."
              />
              <div className="mt-5 grid gap-4">
                {subject.exemples.map((example) => (
                  <div
                    key={example.label}
                    className="rounded-[20px] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.78)] p-4"
                  >
                    <div className="text-sm font-semibold text-[color:var(--text-primary)]">
                      {example.label}
                    </div>
                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      {example.details.map((detail) => (
                        <li
                          key={detail}
                          className="rounded-[14px] border border-[color:rgb(30_41_59_/_0.06)] bg-[color:rgb(248_244_238_/_0.56)] px-4 py-3"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SurfaceCard>

            <SurfaceCard>
              <SectionHeader
                eyebrow="Jury"
                title="Questions probables"
                description="Des angles de reponse pour gagner en calme et en precision pendant l'echange."
              />
              <div className="mt-5 grid gap-4">
                {subject.questionsJury.map((question, index) => (
                  <div
                    key={question.q}
                    className="rounded-[20px] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.78)] p-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-alt)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-secondary)]">
                        Q{index + 1}
                      </span>
                      <div className="text-sm font-semibold text-[color:var(--text-primary)]">
                        {question.q}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                      {question.angle}
                    </p>
                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      {question.elements.map((element) => (
                        <li
                          key={element}
                          className="rounded-[14px] border border-[color:rgb(30_41_59_/_0.06)] bg-[color:rgb(248_244_238_/_0.56)] px-4 py-3"
                        >
                          {element}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SurfaceCard>

            {flashcards.length ? (
              <SurfaceCard>
                <SectionHeader
                  eyebrow="Memo"
                  title="Flashcards"
                  description="Question visible d'abord, puis reponse isolee dans un bloc net pour reviser plus vite."
                />
                <div className="mt-5 grid gap-4">
                  {flashcards.map((flashcard, index) => (
                    <div
                      key={flashcard.front}
                      className="group rounded-[20px] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.80)] p-4 transition duration-200 hover:border-[color:rgb(194_113_79_/_0.20)] hover:shadow-[0_10px_24px_rgb(15_23_42_/_0.06)]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-alt)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-secondary)]">
                          Question
                        </span>
                        <span className="font-mono text-xs text-[color:var(--text-muted)]">
                          {index + 1}/{flashcards.length}
                        </span>
                      </div>

                      <div className="mt-4 text-sm font-semibold leading-6 text-[color:var(--text-primary)]">
                        {flashcard.front}
                      </div>

                      <div className="mt-4 rounded-[16px] border border-[color:rgb(194_113_79_/_0.16)] bg-[color:rgb(194_113_79_/_0.07)] p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--accent)]">
                          Reponse
                        </div>
                        <div className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                          {flashcard.back}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SurfaceCard>
            ) : null}

            {miniQuiz.length ? (
              <SurfaceCard>
                <SectionHeader
                  eyebrow="Verification"
                  title="Mini-quiz"
                  description="Des choix bien espaces, une bonne reponse nettement visible, et l'explication juste apres."
                />
                <div className="mt-5 grid gap-4">
                  {miniQuiz.map((question, index) => (
                    <div
                      key={question.q}
                      className="rounded-[20px] border border-[color:var(--border)] bg-[color:rgb(255_255_255_/_0.80)] p-4"
                    >
                      <div className="flex items-center gap-2">
                        <span className="rounded-full border border-[color:rgb(194_113_79_/_0.20)] bg-[color:rgb(194_113_79_/_0.08)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--accent)]">
                          Quiz {index + 1}
                        </span>
                      </div>
                      <h3 className="mt-3 text-sm font-semibold leading-6 text-[color:var(--text-primary)]">
                        {question.q}
                      </h3>

                      <ul className="mt-4 grid gap-2 text-sm leading-6">
                        {question.choices.map((choice, choiceIndex) => {
                          const isAnswer = choiceIndex === question.answerIndex;

                          return (
                            <li
                              key={choice}
                              className={
                                isAnswer
                                  ? "flex items-start justify-between gap-3 rounded-[16px] border border-[color:rgb(194_113_79_/_0.30)] bg-[color:rgb(194_113_79_/_0.10)] px-4 py-3 font-semibold text-[color:var(--text-primary)] shadow-[0_1px_2px_rgb(15_23_42_/_0.04)]"
                                  : "rounded-[16px] border border-[color:var(--border)] bg-[color:rgb(248_244_238_/_0.48)] px-4 py-3 text-[color:var(--text-secondary)]"
                              }
                            >
                              <span>{choice}</span>
                              {isAnswer ? (
                                <span className="shrink-0 rounded-full border border-[color:rgb(194_113_79_/_0.28)] bg-[color:rgb(255_255_255_/_0.76)] px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-[color:var(--accent)]">
                                  Bonne reponse
                                </span>
                              ) : null}
                            </li>
                          );
                        })}
                      </ul>

                      <div className="mt-4 rounded-[16px] border border-[color:rgb(30_41_59_/_0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(240,237,230,0.72))] p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
                          Pourquoi
                        </div>
                        <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                          {question.why}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </SurfaceCard>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
