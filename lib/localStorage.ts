"use client";

export interface UserProgress {
  notionsRevised: string[];
  auteursRevised: string[];
  flashcardsStats: Record<string, { box: number; lastSeen: string; correct: number; incorrect: number }>;
  quizScores: { mode: string; score: number; total: number; date: string }[];
  favoris: { type: "citation" | "notion" | "auteur" | "flashcard"; id: string; content?: string }[];
  lastVisited: { type: "notion" | "auteur" | "flashcard"; id: string; label: string } | null;
  planningChecked: Record<string, boolean>;
  gameScores: Record<string, number>;
  settings: { theme: "light" | "dark" | "system"; notifications: boolean };
}

const DEFAULT_PROGRESS: UserProgress = {
  notionsRevised: [],
  auteursRevised: [],
  flashcardsStats: {},
  quizScores: [],
  favoris: [],
  lastVisited: null,
  planningChecked: {},
  gameScores: {},
  settings: { theme: "system", notifications: true },
};

export function getProgress(): UserProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const stored = localStorage.getItem("philo-progress");
    if (!stored) return DEFAULT_PROGRESS;
    return { ...DEFAULT_PROGRESS, ...JSON.parse(stored) };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(progress: Partial<UserProgress>): void {
  if (typeof window === "undefined") return;
  const current = getProgress();
  const updated = { ...current, ...progress };
  localStorage.setItem("philo-progress", JSON.stringify(updated));
}

export function markNotionRevised(slug: string): void {
  const p = getProgress();
  if (!p.notionsRevised.includes(slug)) {
    saveProgress({ notionsRevised: [...p.notionsRevised, slug] });
  }
}

export function unmarkNotionRevised(slug: string): void {
  const p = getProgress();
  saveProgress({ notionsRevised: p.notionsRevised.filter((s) => s !== slug) });
}

export function markAuteurRevised(slug: string): void {
  const p = getProgress();
  if (!p.auteursRevised.includes(slug)) {
    saveProgress({ auteursRevised: [...p.auteursRevised, slug] });
  }
}

export function toggleFavori(favori: { type: "citation" | "notion" | "auteur" | "flashcard"; id: string; content?: string }): boolean {
  const p = getProgress();
  const exists = p.favoris.some((f) => f.id === favori.id && f.type === favori.type);
  if (exists) {
    saveProgress({ favoris: p.favoris.filter((f) => !(f.id === favori.id && f.type === favori.type)) });
    return false;
  } else {
    saveProgress({ favoris: [...p.favoris, favori] });
    return true;
  }
}

export function isFavori(type: string, id: string): boolean {
  const p = getProgress();
  return p.favoris.some((f) => f.id === id && f.type === type);
}

export function setLastVisited(item: UserProgress["lastVisited"]): void {
  saveProgress({ lastVisited: item });
}

export function updateFlashcardStat(id: string, correct: boolean): void {
  const p = getProgress();
  const current = p.flashcardsStats[id] || { box: 1, lastSeen: "", correct: 0, incorrect: 0 };
  const newBox = correct ? Math.min(current.box + 1, 5) : 1;
  saveProgress({
    flashcardsStats: {
      ...p.flashcardsStats,
      [id]: {
        box: newBox,
        lastSeen: new Date().toISOString(),
        correct: current.correct + (correct ? 1 : 0),
        incorrect: current.incorrect + (correct ? 0 : 1),
      },
    },
  });
}

export function addQuizScore(mode: string, score: number, total: number): void {
  const p = getProgress();
  saveProgress({
    quizScores: [...p.quizScores.slice(-49), { mode, score, total, date: new Date().toISOString() }],
  });
}

export function resetProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem("philo-progress");
}

export function exportProgress(): string {
  return JSON.stringify(getProgress(), null, 2);
}

export function importProgress(json: string): boolean {
  try {
    const data = JSON.parse(json);
    saveProgress(data);
    return true;
  } catch {
    return false;
  }
}
