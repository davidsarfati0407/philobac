export type GrandOralSubject = {
  slug: string;
  title: string;
  subtitle: string;
  track: "Maths" | "Maths + SES";
  problematique: string;
  pitch: string;
  flashcards?: Array<{ front: string; back: string }>;
  miniQuiz?: Array<{
    q: string;
    choices: string[];
    answerIndex: number;
    why: string;
  }>;
  planMinute: Array<{
    title: string;
    minutes: string;
    goal: string;
    keyPoints: string[];
  }>;
  notions: Array<{ label: string; whyItMatters: string }>;
  modelesEtFormules: Array<{
    label: string;
    content: string[];
    limites?: string[];
  }>;
  exemples: Array<{
    label: string;
    details: string[];
  }>;
  script: {
    intro: string[];
    partie1: string[];
    partie2: string[];
    partie3: string[];
    conclusion: string[];
  };
  questionsJury: Array<{ q: string; angle: string; elements: string[] }>;
};

export const GRAND_ORAL_SUBJECTS: GrandOralSubject[] = [
  {
    slug: "marches-financiers-imprevisibles",
    title: "Les marchés financiers sont-ils réellement imprévisibles ?",
    subtitle: "Maths + SES · probabilités, statistiques, bulles et crises",
    track: "Maths + SES",
    problematique:
      "Les prix en bourse suivent-ils un pur hasard, ou peut-on identifier des régularités utiles pour anticiper les risques ?",
    pitch:
      "À court terme, le marché ressemble à un processus aléatoire (chocs, info, émotions). Mais à plus long terme, il existe des régularités statistiques (volatilité, corrélations, cycles). Cela n’abolit pas l’imprévisibilité : l’information est imparfaite, et les comportements mimétiques peuvent créer des bulles puis des crises.",
    planMinute: [
      {
        title: "Introduction (définition + enjeu)",
        minutes: "0:00 → 1:00",
        goal: "Poser hasard vs régularités, et pourquoi la question compte (risque, crises).",
        keyPoints: [
          "Marché financier : échange d’actifs, prix = anticipations + informations + liquidité",
          "Imprévisible ≠ sans structure",
          "Annonce : (I) sources d’aléa, (II) régularités, (III) imprévisibilité relative + régulation",
        ],
      },
      {
        title: "I — Pourquoi les marchés semblent imprévisibles",
        minutes: "1:00 → 4:00",
        goal: "Montrer que l’incertitude vient des chocs + de comportements collectifs.",
        keyPoints: [
          "Chocs exogènes (taux, géopolitique, faillites, innovations)",
          "Asymétrie d’information (accès/vitesse/interprétation)",
          "Spéculation + mimétisme : bulles, emballements, paniques",
          "Court terme : bruit, non-stationnarité",
        ],
      },
      {
        title: "II — Ce que les maths révèlent : régularités (sans certitude)",
        minutes: "4:00 → 7:30",
        goal: "Apporter 2–3 outils maths concrets qui “impressionnent” mais restent clairs.",
        keyPoints: [
          "Rendements plutôt que prix : \(r_t = \\ln(P_t/P_{t-1})\\)",
          "Volatilité : risque (écart-type) et volatilité “en grappes”",
          "Normale : utile en 1ère approche, mais queues épaisses (événements extrêmes)",
          "Corrélations qui montent en crise : contagion et diversification moins efficace",
        ],
      },
      {
        title: "III — Imprévisibilité relative : prévoir le risque, pas la date",
        minutes: "7:30 → 9:30",
        goal: "Faire la synthèse : probabilités = scénarios + gestion du risque + régulation.",
        keyPoints: [
          "Prévision probabiliste : scénarios, stress tests, indicateurs de fragilité",
          "Points de bascule : levier, liquidité, confiance (difficile à dater)",
          "Régulation : limiter le risque systémique (transparence, fonds propres, supervision)",
        ],
      },
      {
        title: "Conclusion + ouverture",
        minutes: "9:30 → 10:00",
        goal: "Répondre net + ouverture pertinente.",
        keyPoints: [
          "Conclusion : prix court terme imprévisibles, mais régularités statistiques exploitables pour gérer le risque",
          "Ouverture : trading algorithmique/IA et boucles de rétroaction",
        ],
      },
    ],
    notions: [
      {
        label: "Asymétrie d’information",
        whyItMatters:
          "Les prix ne reflètent pas instantanément une vérité : l’info est incomplète et distribuée inégalement.",
      },
      {
        label: "Spéculation, bulles",
        whyItMatters:
          "Les agents peuvent acheter pour revendre plus cher (anticipations auto-entretenues), éloignant le prix des fondamentaux.",
      },
      {
        label: "Comportements mimétiques",
        whyItMatters:
          "Amplifient les mouvements : la peur/cupidité crée des dynamiques collectives difficiles à modéliser.",
      },
      {
        label: "Volatilité, corrélation, risque systémique",
        whyItMatters:
          "Les maths servent surtout à quantifier et suivre le risque, et comprendre la contagion.",
      },
    ],
    modelesEtFormules: [
      {
        label: "Rendement logarithmique",
        content: [
          "Définition : \(r_t = \\ln(P_t/P_{t-1})\\).",
          "Sur plusieurs périodes : \(\\ln(P_T/P_0)=\\sum_{t=1}^{T} r_t\\).",
        ],
        limites: [
          "Utile pour l’analyse, mais ne supprime pas les ruptures (chocs majeurs).",
        ],
      },
      {
        label: "Volatilité (écart-type) et “clustering”",
        content: [
          "Risque : \(\\sigma = \\sqrt{\\mathrm{Var}(r)}\\).",
          "Fait stylisé : la volatilité se regroupe (périodes calmes puis agitées).",
        ],
        limites: ["La volatilité change dans le temps : l’estimation est elle-même incertaine."],
      },
      {
        label: "Normale : bonne première approximation, mauvaise sur les extrêmes",
        content: [
          "Modèles de base : rendements “presque normaux”.",
          "Réalité : queues épaisses → extrêmes plus fréquents que prévu.",
        ],
      },
    ],
    exemples: [
      {
        label: "2008 (subprimes) : du risque dispersé au risque systémique",
        details: [
          "Titrisation : dissémination du risque, puis opacité.",
          "Levier + interconnexions : contagion.",
          "Perte de confiance → crise de liquidité : le régime statistique change brutalement.",
        ],
      },
      {
        label: "Corrélations en crise",
        details: [
          "En stress, “tout baisse ensemble” : diversification moins efficace.",
          "Phrase simple à placer : “On ne prédit pas le prix, on mesure comment le risque se propage.”",
        ],
      },
    ],
    script: {
      intro: [
        "Je vais répondre à la question : les marchés financiers sont-ils réellement imprévisibles ?",
        "Imprévisible ne veut pas dire “sans structure” : on peut être incapable de prévoir le détail, mais observer des régularités statistiques.",
        "Je vais donc montrer (I) pourquoi le court terme est très aléatoire, (II) ce que les maths captent quand même, puis (III) pourquoi l’imprévisibilité reste relative et justifie la régulation.",
      ],
      partie1: [
        "D’abord, les marchés paraissent imprévisibles car ils intègrent en continu des chocs et de l’information imparfaite.",
        "Chocs exogènes : décisions de banques centrales, crises géopolitiques, faillites, innovations…",
        "Asymétrie d’information : certains agents voient l’info avant, ou la traitent plus vite.",
        "Enfin, les comportements : spéculation et mimétisme peuvent créer des bulles, puis des paniques. La dynamique collective amplifie les variations.",
        "Donc à court terme, on a du bruit + des ruptures de régime : prévoir précisément le prix est extrêmement difficile.",
      ],
      partie2: [
        "Ensuite, les maths montrent des régularités, mais plutôt sur le risque que sur le prix exact.",
        "On travaille souvent sur les rendements \(r_t = \\ln(P_t/P_{t-1})\\) pour comparer les variations.",
        "On mesure le risque par la volatilité : l’écart-type des rendements. Et on observe qu’elle vient par périodes : des phases calmes puis très agitées.",
        "Autre point crucial : en crise, les corrélations montent. Ce qui signifie que la diversification protège moins au moment où on en a le plus besoin.",
        "Enfin, la loi normale est utile en première approche, mais elle sous-estime les événements extrêmes : c’est une limite à dire clairement.",
      ],
      partie3: [
        "On arrive donc à une imprévisibilité relative : on ne sait pas “dater” une crise, mais on peut anticiper des scénarios et mesurer la fragilité.",
        "On passe de “prédire le futur” à “gérer le risque” : stress tests, scénarios, suivi de la volatilité et des corrélations, analyse du levier et de la liquidité.",
        "Et comme le risque est aussi systémique, la régulation vise à limiter l’effet domino : fonds propres, transparence, supervision.",
      ],
      conclusion: [
        "Conclusion : les marchés sont largement imprévisibles à court terme pour les prix, mais ils ne sont pas du pur hasard : il existe des régularités statistiques exploitables pour mesurer et gérer le risque.",
        "Ouverture : avec le trading algorithmique et l’IA, on peut détecter plus vite des signaux… mais aussi créer des boucles où les modèles influencent le marché qu’ils cherchent à prévoir.",
      ],
    },
    questionsJury: [
      {
        q: "Donc on ne peut jamais prévoir une crise ?",
        angle: "Distinguer la date exacte et la vulnérabilité.",
        elements: [
          "On peut repérer des fragilités : levier, bulles, manque de liquidité, corrélations élevées.",
          "Mais la date exacte dépend souvent d’un déclencheur difficile à prévoir.",
        ],
      },
      {
        q: "Pourquoi la loi normale pose problème en finance ?",
        angle: "Extrêmes plus fréquents (queues épaisses).",
        elements: [
          "Elle sous-estime la fréquence des krachs.",
          "Risque de mauvaise gestion si on confond modèle et réalité.",
        ],
      },
      {
        q: "Quel lien avec la régulation ?",
        angle: "Risque systémique et contagion.",
        elements: [
          "Les crises viennent aussi des interconnexions : levier, confiance, liquidité.",
          "La régulation vise à réduire l’ampleur des effets domino.",
        ],
      },
    ],
  },
  {
    slug: "f1-optimiser-strategie",
    title: "Comment les mathématiques permettent-elles d’optimiser une stratégie en Formule 1 ?",
    subtitle: "Maths · modélisation, dérivées, optimisation, probabilités",
    track: "Maths",
    problematique:
      "Comment transformer une course incertaine en décisions optimales (arrêts, pneus, rythme), en combinant optimisation et probabilités ?",
    pitch:
      "La stratégie F1 consiste à minimiser un temps total sous contraintes (pneus, trafic, règles) tout en gérant des aléas (météo, accidents, safety car). Les maths servent à modéliser le temps de course, optimiser (nombre/timing des arrêts) et décider sous incertitude par scénarios probabilistes.",
    planMinute: [
      {
        title: "Introduction",
        minutes: "0:00 → 1:00",
        goal: "Minimiser le temps total : optimisation + incertitude.",
        keyPoints: [
          "Optimiser = chercher un minimum (dérivées/comparaison)",
          "Modéliser = choisir des variables pertinentes",
          "Incertitude = décisions probabilistes",
        ],
      },
      {
        title: "I — Modéliser le temps de course (pneus + pit loss)",
        minutes: "1:00 → 4:30",
        goal: "Construire un modèle simple mais crédible.",
        keyPoints: [
          "Temps total = temps au tour + coût des arrêts",
          "Dégradation pneus : temps au tour croissant avec l’âge du pneu",
          "Paramètres : compound, température, charge en carburant, trafic",
        ],
      },
      {
        title: "II — Optimiser les arrêts : undercut/overcut",
        minutes: "4:30 → 7:30",
        goal: "Montrer l’arbitrage pit loss vs gain par tour (minimum).",
        keyPoints: [
          "Comparer stratégies 1-stop/2-stops via un “coût” total",
          "Minimum = compromis dégradation vs pit loss",
          "Undercut : gain pneus neufs si air libre",
          "Overcut : rester dehors si trafic au pit / tours rapides en piste libre",
        ],
      },
      {
        title: "III — Probabilités : météo, accident, safety car",
        minutes: "7:30 → 9:30",
        goal: "Décider en scénarios : valeur attendue + risque.",
        keyPoints: [
          "Pluie : bascule de stratégie, timing critique",
          "Safety car : arrêt “moins cher” → opportunité",
          "Décision : comparer \u00A0\(\\mathbb{E}[T]\\) et le risque (variance)",
        ],
      },
      {
        title: "Conclusion + limites",
        minutes: "9:30 → 10:00",
        goal: "Synthèse + facteur humain/imprévus.",
        keyPoints: [
          "Les maths donnent un cadre rationnel pour décider vite et bien.",
          "Limites : imprévus, données imparfaites, pilote/équipe.",
        ],
      },
    ],
    notions: [
      {
        label: "Optimisation (minimum)",
        whyItMatters:
          "Une stratégie est un problème de minimum : temps total le plus faible possible sous contraintes.",
      },
      {
        label: "Dérivées",
        whyItMatters:
          "Justifie un optimum quand on modélise le coût total en fonction du timing des arrêts.",
      },
      {
        label: "Modélisation",
        whyItMatters:
          "On simplifie (dégradation, pit loss) pour comparer des options de manière quantitative.",
      },
      {
        label: "Probabilités / scénarios",
        whyItMatters:
          "On prend des décisions en intégrant des événements rares mais décisifs (pluie, safety car).",
      },
    ],
    modelesEtFormules: [
      {
        label: "Modèle simple de temps total",
        content: [
          "Approximation : \(T = \\sum_{k=1}^{N}\\text{lapTime}(k) + n_{pit}\\cdot L_{pit}\\).",
          "Dégradation simple : \\(\\text{lapTime}(k)=a + b\\,k\\) (linéaire) ou \(a + b\\,k + c\\,k^2\\).",
        ],
        limites: [
          "Le lap time dépend aussi du trafic, de la température, du carburant et de la gestion moteur.",
        ],
      },
      {
        label: "Undercut : condition de rentabilité (intuition)",
        content: [
          "Si pneus neufs font gagner \(\\Delta\\) s/tour pendant \(m\\) tours, alors l’arrêt est rentable si \(m\\cdot \\Delta > L_{pit}\\) (ordre de grandeur).",
        ],
        limites: ["Le trafic peut annuler le gain (sortie derrière des voitures lentes)."],
      },
      {
        label: "Décision probabiliste : valeur attendue",
        content: [
          "Comparer des stratégies par \(\\mathbb{E}[T] = \\sum p_i\\,T_i\\) (scénarios météo/safety car…).",
          "On peut intégrer le risque : stratégie “safe” (variance faible) vs “agressive” (variance plus forte).",
        ],
      },
    ],
    exemples: [
      {
        label: "Undercut vs overcut (explication très orale)",
        details: [
          "Undercut : je m’arrête avant, je gagne du temps par tour avec pneus neufs, je passe quand l’autre s’arrête.",
          "Overcut : je reste dehors si j’ai de l’air libre et que l’autre ressort dans le trafic.",
          "C’est un arbitrage : temps perdu au pit vs gain par tour.",
        ],
      },
      {
        label: "Safety car : arrêt moins coûteux",
        details: [
          "Sous safety car, les tours sont plus lents : le pit loss “relatif” diminue.",
          "Donc un arrêt devient souvent plus intéressant : on profite d’une fenêtre.",
        ],
      },
    ],
    script: {
      intro: [
        "Je vais expliquer comment les mathématiques permettent d’optimiser une stratégie en Formule 1.",
        "Une stratégie, c’est minimiser un temps total sous contraintes, mais dans un environnement incertain.",
        "Je montre (I) un modèle simple de temps de course, (II) l’optimisation des arrêts avec l’idée de minimum, (III) la décision probabiliste avec météo et safety car.",
      ],
      partie1: [
        "D’abord, on modélise le temps total : somme des temps au tour, plus le coût des arrêts (le pit loss).",
        "Le point central, c’est la dégradation des pneus : plus on roule, plus le temps au tour augmente. On peut le modéliser par une fonction croissante du nombre de tours sur le même train.",
        "Ensuite, on ajoute des contraintes réelles : trafic, carburant, température. Le modèle simplifie, mais garde les mécanismes dominants.",
      ],
      partie2: [
        "Ensuite, on optimise : on compare des stratégies 1 arrêt vs 2 arrêts.",
        "Un arrêt fait perdre \(L_{pit}\\) secondes, mais des pneus neufs font gagner \(\\Delta\\) secondes par tour pendant quelques tours.",
        "Undercut : arrêter avant est rentable si le gain cumulé dépasse le pit loss, et surtout si je ressors en air libre.",
        "Overcut : au contraire, rester dehors peut être meilleur si l’autre se retrouve dans le trafic ou si mes pneus tiennent encore correctement.",
        "L’idée mathématique : c’est un compromis qui produit un minimum de temps total.",
      ],
      partie3: [
        "Enfin, il y a l’incertitude : météo, accidents, safety car.",
        "On raisonne par scénarios : chaque scénario a une probabilité et un temps total associé. On compare les stratégies via la valeur attendue \(\\mathbb{E}[T]\\).",
        "Sous safety car, l’arrêt est moins pénalisant : ça change immédiatement l’optimum, donc la stratégie doit être adaptative.",
      ],
      conclusion: [
        "Conclusion : les maths permettent de modéliser, optimiser et décider sous incertitude. Elles transforment une course complexe en décisions rationnelles et rapides.",
        "Limites : données imparfaites, événements imprévus, et facteur humain (pilote/équipe) peuvent faire mentir le modèle.",
      ],
    },
    questionsJury: [
      {
        q: "Pourquoi un modèle simple peut quand même être utile ?",
        angle: "Modèle = outil de décision, pas copie du réel.",
        elements: [
          "Il capte les mécanismes dominants (dégradation + pit loss).",
          "Il permet de comparer vite des stratégies, même si on ajuste ensuite avec les données live.",
        ],
      },
      {
        q: "Undercut : ça marche toujours ?",
        angle: "Conditions : air libre + delta pneus + température.",
        elements: [
          "Il faut que le gain par tour soit réel et que la sortie ne tombe pas dans le trafic.",
          "Si les pneus ne chauffent pas vite, ou si on ressort derrière une voiture lente, l’undercut échoue.",
        ],
      },
      {
        q: "Comment la probabilité intervient concrètement ?",
        angle: "Scénarios + valeur attendue + gestion du risque.",
        elements: [
          "Pluie probable : on retarde/avance un stop, ou on vise une stratégie flexible.",
          "Safety car : on “paie moins cher” un arrêt, donc on change de plan.",
        ],
      },
    ],
  },
];

