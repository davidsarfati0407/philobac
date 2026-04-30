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
    transition?: string;
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
    pitch: [
      "À court terme, un prix financier bouge comme si chaque nouvelle information déplaçait les anticipations.",
      "On ne peut donc pas annoncer avec certitude le cours de demain : chocs, rumeurs et décisions politiques changent le jeu.",
      "Mais cela ne veut pas dire que tout est du pur hasard : les rendements, la volatilité et les corrélations ont des régularités.",
      "La vraie réponse consiste à distinguer prévision du prix et mesure du risque.",
      "Les mathématiques permettent de calculer des rendements log, une volatilité, une VaR ou des stress tests.",
      "Les SES expliquent pourquoi les agents imitent, spéculent, manquent d'information et forment parfois des bulles.",
      "Les marchés sont donc imprévisibles dans le détail, mais pas incompréhensibles : on peut anticiper des fragilités.",
      "L'exemple de 2008 montre que levier, liquidité et contagion peuvent transformer un risque local en crise systémique.",
    ].join("\n"),
    flashcards: [
      {
        front: "Que signifie “imprévisible” pour un marché financier ?",
        back: "On ne prévoit pas le prix exact à court terme, mais on peut mesurer des régularités de risque : volatilité, corrélations, queues épaisses, scénarios de crise.",
      },
      {
        front: "Pourquoi utiliser les rendements log plutôt que les prix ?",
        back: "Le rendement log r_t = ln(P_t / P_{t-1}) mesure une variation relative et s'additionne sur plusieurs périodes, ce qui rend les comparaisons plus propres.",
      },
      {
        front: "Qu'appelle-t-on volatilité ?",
        back: "C'est une mesure de dispersion des rendements, souvent par l'écart-type. Plus elle est forte, plus le prix varie violemment autour de sa tendance.",
      },
      {
        front: "Qu'est-ce que le volatility clustering ?",
        back: "Les fortes variations ont tendance à arriver par grappes : après un choc, plusieurs séances restent agitées. Le risque varie donc dans le temps.",
      },
      {
        front: "Pourquoi la loi normale est-elle limitée en finance ?",
        back: "Elle sous-estime souvent les extrêmes : les rendements ont des queues épaisses, donc les krachs arrivent plus souvent que dans le modèle normal simple.",
      },
      {
        front: "Pourquoi les corrélations montent-elles en crise ?",
        back: "Quand la peur domine, beaucoup d'actifs sont vendus en même temps. La diversification protège alors moins, car les baisses deviennent plus synchronisées.",
      },
      {
        front: "Quel est le rôle d'une VaR ou d'un stress test ?",
        back: "Ce ne sont pas des boules de cristal : ils encadrent une perte probable ou testent un scénario violent pour préparer la gestion du risque.",
      },
    ],
    miniQuiz: [
      {
        q: "En Grand Oral, à quoi servent surtout les maths ici ?",
        choices: [
          "Prédire exactement le prix dans 6 mois",
          "Quantifier et comparer le risque (volatilité, corrélation, scénarios)",
          "Supprimer l’incertitude",
          "Prouver que le marché est toujours rationnel",
        ],
        answerIndex: 1,
        why: "Message attendu : on ne prédit pas précisément le prix, on encadre le risque et on compare des scénarios.",
      },
      {
        q: "Pourquoi la loi normale est-elle souvent critiquée pour les rendements financiers ?",
        choices: [
          "Elle ne sait pas modéliser une moyenne",
          "Elle surestime les extrêmes",
          "Elle sous-estime les extrêmes (queues épaisses)",
          "Elle ne marche que sur les obligations",
        ],
        answerIndex: 2,
        why: "Les krachs arrivent plus souvent que prévu par une normale → risque sous-estimé.",
      },
      {
        q: "Que se passe-t-il souvent aux corrélations en crise ?",
        choices: [
          "Elles baissent et la diversification marche mieux",
          "Elles montent : beaucoup d’actifs baissent ensemble",
          "Elles deviennent toujours négatives",
          "Elles disparaissent",
        ],
        answerIndex: 1,
        why: "En stress, la contagion domine : les actifs deviennent plus corrélés.",
      },
      {
        q: "Quel mécanisme SES peut amplifier une bulle spéculative ?",
        choices: [
          "Le mimétisme : acheter parce que les autres achètent",
          "La baisse mécanique de toutes les corrélations",
          "La disparition de toute asymétrie d'information",
          "Une VaR qui garantit l'absence de pertes",
        ],
        answerIndex: 0,
        why: "Le mimétisme nourrit une dynamique auto-entretenue : la hausse attire des acheteurs, ce qui peut éloigner le prix des fondamentaux.",
      },
    ],
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
        transition:
          "Je commence par montrer pourquoi le prix exact est si difficile à prévoir.",
      },
      {
        title: "I — Pourquoi les marchés semblent imprévisibles",
        minutes: "1:00 → 4:00",
        goal: "Montrer que l’incertitude vient des chocs + de comportements collectifs.",
        keyPoints: [
          "Chocs exogènes (taux, géopolitique, faillites, innovations)",
          "Asymétrie d’information (accès/vitesse/interprétation)",
          "Spéculation + mimétisme : bulles, emballements, paniques",
          "Court terme : bruit, non-stationnarité (le “régime” change)",
        ],
        transition:
          "Mais dire que le prix est imprévisible ne signifie pas que les données ne révèlent rien.",
      },
      {
        title: "II — Ce que les maths révèlent : régularités (sans certitude)",
        minutes: "4:00 → 7:30",
        goal: "Apporter 2–3 outils maths concrets qui “impressionnent” mais restent clairs.",
        keyPoints: [
          "Rendements plutôt que prix : r_t = ln(P_t / P_{t-1})",
          "Volatilité : risque (écart-type) et volatilité “en grappes”",
          "Normale : utile en 1ère approche, mais queues épaisses (extrêmes plus fréquents)",
          "Corrélations qui montent en crise : contagion et diversification moins efficace",
        ],
        transition:
          "Ces outils ne servent donc pas à promettre l'avenir, mais à passer d'une prévision certaine à une gestion du risque.",
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
        transition:
          "On peut maintenant répondre clairement : l'imprévisibilité existe, mais elle est encadrable.",
      },
      {
        title: "Conclusion + ouverture",
        minutes: "9:30 → 10:00",
        goal: "Répondre net + ouverture pertinente.",
        keyPoints: [
          "Conclusion : prix court terme imprévisibles, mais régularités statistiques exploitables pour gérer le risque",
          "Ouverture : trading algorithmique/IA et boucles de rétroaction",
        ],
        transition:
          "Cette ouverture permet de discuter le rôle des modèles qui influencent eux-mêmes le marché.",
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
      {
        label: "Régulation financière",
        whyItMatters:
          "Transparence, fonds propres et supervision limitent les effets domino quand levier, liquidité et confiance se dégradent.",
      },
    ],
    modelesEtFormules: [
      {
        label: "Rendement logarithmique",
        content: [
          "Définition : r_t = ln(P_t / P_{t-1}).",
          "Sur plusieurs périodes : ln(P_T / P_0) = somme des rendements log.",
        ],
        limites: [
          "Utile pour l’analyse, mais ne supprime pas les ruptures (chocs majeurs).",
        ],
      },
      {
        label: "Volatilité (écart-type) et “clustering”",
        content: [
          "Risque : sigma = sqrt(Var(r)), donc une dispersion des rendements autour de leur moyenne.",
          "Fait stylisé : la volatilité se regroupe (périodes calmes puis agitées), c'est le volatility clustering.",
        ],
        limites: ["La volatilité change dans le temps : l’estimation est elle-même incertaine."],
      },
      {
        label: "Normale : bonne première approximation, mauvaise sur les extrêmes",
        content: [
          "Modèles de base : rendements “presque normaux”.",
          "Réalité : queues épaisses → extrêmes plus fréquents que prévu.",
        ],
        limites: [
          "Si on calibre le risque avec une normale trop simple, on peut sous-estimer une journée de crise.",
        ],
      },
      {
        label: "VaR et stress tests : encadrer une perte probable",
        content: [
          "Idée (95%) : une perte seuil qu’on ne dépasse que dans 5% des cas (si le modèle tient).",
          "Stress test : on force un scénario extrême (krach, liquidité bloquée, corrélations qui montent) pour voir si le portefeuille survit.",
        ],
        limites: [
          "Ne dit pas la taille des pertes au-delà du seuil → peut sous-estimer les krachs.",
        ],
      },
    ],
    exemples: [
      {
        label: "2008 (subprimes) : du risque dispersé au risque systémique",
        details: [
          "Subprimes : crédits immobiliers risqués transformés en produits financiers, donc risque dispersé mais opaque.",
          "Lehman Brothers fait faillite le 15 septembre 2008 : choc de confiance et blocage de la liquidité.",
          "Levier + interconnexions : les pertes se propagent ; le S&P 500 perd environ 38% sur l'année 2008.",
          "Lecture orale : ce n'est pas seulement une mauvaise formule, c'est un système fragile.",
        ],
      },
      {
        label: "Corrélations en crise",
        details: [
          "En stress, “tout baisse ensemble” : diversification moins efficace car les ventes deviennent simultanées.",
          "En 2008, des actifs supposés diversifier un portefeuille ont chuté ensemble, car la priorité était de trouver de la liquidité.",
          "Phrase simple à placer : “On ne prédit pas le prix, on mesure comment le risque se propage.”",
        ],
      },
      {
        label: "Bulle : dynamique auto-entretenue puis retournement",
        details: [
          "Mimétisme : “ça monte donc j’achète” → hausse auto-entretenue, parfois très rapide.",
          "Le retournement dépend d’un déclencheur (taux, liquidité, confiance) : difficile à dater, même si des fragilités existent.",
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
        "On travaille souvent sur les rendements log, r_t = ln(P_t / P_{t-1}), pour comparer des variations relatives plutôt que des prix bruts.",
        "On mesure le risque par la volatilité : l’écart-type des rendements. Et on observe qu’elle vient par périodes : des phases calmes puis très agitées.",
        "Autre point crucial : en crise, les corrélations montent. Ce qui signifie que la diversification protège moins au moment où on en a le plus besoin.",
        "Enfin, la loi normale est utile en première approche, mais elle sous-estime les événements extrêmes : c’est une limite à dire clairement.",
        "Donc, en pratique, on préfère parler en scénarios et en mesures de risque (par exemple la VaR ou des stress tests) plutôt qu’en “prédiction exacte”.",
      ],
      partie3: [
        "On arrive donc à une imprévisibilité relative : on ne sait pas “dater” une crise, mais on peut anticiper des scénarios et mesurer la fragilité.",
        "On passe de “prédire le futur” à “gérer le risque” : stress tests, scénarios, suivi de la volatilité et des corrélations, analyse du levier et de la liquidité.",
        "L'exemple de 2008 le montre bien : subprimes opaques, levier, manque de liquidité, puis contagion.",
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
      {
        q: "La VaR garantit-elle qu'on ne perdra pas plus ?",
        angle: "Montrer les limites d'un outil de risque.",
        elements: [
          "Non : une VaR 95% donne un seuil statistique, pas une protection.",
          "Elle doit être complétée par des stress tests car les pertes extrêmes peuvent dépasser le seuil.",
        ],
      },
      {
        q: "La finance est-elle plutôt “maths” ou “SES” ici ?",
        angle: "Montrer que tu maîtrises les deux sans te perdre.",
        elements: [
          "SES : incitations, spéculation, mimétisme, asymétrie d’information, crise 2008, régulation.",
          "Maths : rendements, volatilité, corrélations, extrêmes, VaR/stress tests.",
          "Conclusion : les maths quantifient le risque, les SES expliquent les mécanismes.",
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
    pitch: [
      "Une stratégie de Formule 1 est un problème d'optimisation : finir la course avec le temps total minimal.",
      "On additionne les temps au tour et le coût des arrêts, puis on compare plusieurs scénarios.",
      "Le modèle central est T = somme(lapTime) + n_pit × L_pit.",
      "Les pneus rendent le problème intéressant : plus ils vieillissent, plus le temps au tour augmente.",
      "Un arrêt coûte souvent autour de 20 à 30 secondes, mais il donne ensuite des pneus plus rapides.",
      "Les dérivées et la comparaison de fonctions servent à trouver le meilleur compromis, sans calcul gratuit.",
      "La course reste incertaine : pluie, trafic, accident ou safety car peuvent changer l'optimum.",
      "On choisit donc une stratégie par scénarios avec E[T] = somme(p_i × T_i), en regardant aussi le risque.",
    ].join("\n"),
    flashcards: [
      {
        front: "Quel est l'objectif mathématique d'une stratégie F1 ?",
        back: "Minimiser le temps total T, en tenant compte des temps au tour, du nombre d'arrêts, du pit loss, des pneus et des aléas.",
      },
      {
        front: "Quel modèle simple peut-on annoncer ?",
        back: "T = somme(lapTime) + n_pit × L_pit : on additionne tous les temps au tour et on ajoute le coût fixe des arrêts.",
      },
      {
        front: "Qu'est-ce que le pit loss ?",
        back: "C'est le temps perdu en entrant aux stands, en s'arrêtant et en ressortant. Ordre de grandeur : environ 20 à 30 s selon les circuits.",
      },
      {
        front: "Pourquoi la dégradation des pneus crée-t-elle un optimum ?",
        back: "Une fonction croissante, par exemple lapTime(k) = a + b k ou a + b k + c k^2, rend les vieux pneus lents ; mais s'arrêter coûte du temps.",
      },
      {
        front: "Quand un undercut est-il rentable ?",
        back: "Si le gain cumulé avec pneus neufs dépasse le coût de l'arrêt et si la voiture ressort en air libre, sans trafic qui annule le gain.",
      },
      {
        front: "Pourquoi une safety car change tout ?",
        back: "Les voitures roulent plus lentement : l'arrêt coûte moins cher relativement. Une stratégie moyenne peut devenir optimale en quelques secondes.",
      },
      {
        front: "Comment intégrer le risque ?",
        back: "On compare E[T] = somme(p_i × T_i), mais aussi la variance : une stratégie agressive peut avoir un meilleur temps moyen et plus de risque.",
      },
    ],
    miniQuiz: [
      {
        q: "Le “pit loss”, dans un modèle simple, correspond à…",
        choices: [
          "le temps moyen au tour",
          "le temps perdu quand on passe aux stands",
          "le temps gagné grâce aux pneus neufs",
          "la vitesse maximale",
        ],
        answerIndex: 1,
        why: "C’est le coût “fixe” d’un arrêt : il faut que les gains sur piste le compensent.",
      },
      {
        q: "Undercut rentable : quel raisonnement simple est correct ?",
        choices: [
          "S’arrêter tôt est toujours mieux",
          "Le gain cumulé pneus neufs doit dépasser le pit loss, et il faut sortir en air libre",
          "Il suffit d’être plus rapide au tour",
          "Ça dépend uniquement du pilote",
        ],
        answerIndex: 1,
        why: "Même si l’inégalité m × delta > L_pit est simplifiée, elle donne l’intuition : un gain par tour doit compenser le coût de l'arrêt.",
      },
      {
        q: "Pourquoi le safety car modifie souvent la stratégie optimale ?",
        choices: [
          "Parce que les pneus ne s’usent plus",
          "Parce que les tours sont plus lents, donc un arrêt “coûte moins” relativement",
          "Parce que la course s’arrête",
          "Parce que les probabilités deviennent nulles",
        ],
        answerIndex: 1,
        why: "Le coût relatif de l’arrêt baisse : une fenêtre d’arrêt devient très attractive.",
      },
      {
        q: "Que compare-t-on avec E[T] = somme(p_i × T_i) ?",
        choices: [
          "La vitesse maximale en ligne droite uniquement",
          "Le temps moyen attendu d'une stratégie sur plusieurs scénarios",
          "La couleur des pneus",
          "Le nombre de dépassements sans tenir compte du chrono",
        ],
        answerIndex: 1,
        why: "Chaque scénario reçoit une probabilité et un temps total. On compare ensuite les stratégies par temps attendu, puis par niveau de risque.",
      },
    ],
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
        transition:
          "Je pars du modèle le plus simple : combien coûte réellement une course ?",
      },
      {
        title: "I — Modéliser le temps de course (pneus + pit loss)",
        minutes: "1:00 → 4:30",
        goal: "Construire un modèle simple mais crédible.",
        keyPoints: [
          "Temps total : T = somme(lapTime) + n_pit × L_pit",
          "Dégradation pneus : temps au tour croissant avec l’âge du pneu",
          "Pit loss typique : environ 20–30 s selon le circuit",
          "Paramètres : gomme, température, charge en carburant, trafic",
        ],
        transition:
          "Une fois ce coût écrit, la question devient : à quel moment l'arrêt fait-il gagner plus qu'il ne coûte ?",
      },
      {
        title: "II — Optimiser les arrêts : undercut/overcut",
        minutes: "4:30 → 7:30",
        goal: "Montrer l’arbitrage pit loss vs gain par tour (minimum).",
        keyPoints: [
          "Comparer stratégies 1-stop/2-stops via un “coût” total",
          "Minimum = compromis dégradation vs pit loss",
          "Undercut : gain pneus neufs si air libre, condition simplifiée m × delta > L_pit",
          "Overcut : rester dehors si l'adversaire ressort dans le trafic ou si les pneus tiennent",
        ],
        transition:
          "Mais une course n'est pas un exercice figé : les probabilités peuvent déplacer l'optimum.",
      },
      {
        title: "III — Probabilités : météo, accident, safety car",
        minutes: "7:30 → 9:30",
        goal: "Décider en scénarios : valeur attendue + risque.",
        keyPoints: [
          "Pluie : bascule de stratégie, timing critique",
          "Safety car : arrêt relativement “moins cher” → opportunité",
          "Décision : comparer E[T] = somme(p_i × T_i) et le risque (variance)",
        ],
        transition:
          "Je peux donc conclure : les maths ne conduisent pas la voiture, mais elles organisent la décision.",
      },
      {
        title: "Conclusion + limites",
        minutes: "9:30 → 10:00",
        goal: "Synthèse + facteur humain/imprévus.",
        keyPoints: [
          "Les maths donnent un cadre rationnel pour décider vite et bien.",
          "Limites : imprévus, données imparfaites, pilote/équipe.",
        ],
        transition:
          "Cette limite ouvre sur l'intérêt des données temps réel et de la simulation en course.",
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
      {
        label: "Comparaison de fonctions",
        whyItMatters:
          "On compare 1 arrêt, 2 arrêts, undercut ou overcut comme des fonctions de coût total, puis on choisit le minimum.",
      },
      {
        label: "Variance et risque",
        whyItMatters:
          "Deux stratégies peuvent avoir presque le même temps moyen, mais pas la même dispersion : l'une est plus sûre, l'autre plus agressive.",
      },
    ],
    modelesEtFormules: [
      {
        label: "Modèle simple de temps total",
        content: [
          "Approximation : T = somme(lapTime) + n_pit × L_pit.",
          "Dégradation simple : lapTime(k) = a + b k (linéaire) ou a + b k + c k^2 (quadratique).",
          "Ordre de grandeur : un arrêt coûte souvent 20–30 s, alors qu'un pneu neuf peut gagner quelques dixièmes à plus d'une seconde par tour.",
        ],
        limites: [
          "Le lap time dépend aussi du trafic, de la température, du carburant et de la gestion moteur.",
        ],
      },
      {
        label: "Undercut : condition de rentabilité (intuition)",
        content: [
          "Si les pneus neufs font gagner delta secondes par tour pendant m tours, alors l’arrêt est rentable si m × delta > L_pit (ordre de grandeur).",
          "Overcut : rester dehors peut être meilleur si l'autre ressort dans le trafic ou si tes pneus gardent un bon rythme.",
        ],
        limites: ["Le trafic peut annuler le gain (sortie derrière des voitures lentes)."],
      },
      {
        label: "Décision probabiliste : valeur attendue",
        content: [
          "Comparer des stratégies par E[T] = somme(p_i × T_i) (scénarios météo, trafic, safety car).",
          "On peut intégrer le risque : stratégie “safe” (variance faible) vs “agressive” (variance plus forte).",
        ],
        limites: [
          "Les probabilités viennent d'estimations en direct : une mauvaise hypothèse météo ou trafic peut inverser le choix.",
        ],
      },
    ],
    exemples: [
      {
        label: "Undercut vs overcut (explication très orale)",
        details: [
          "Undercut : je m’arrête avant, je peux gagner environ 0,5 à 1,5 s/tour avec des pneus neufs sur quelques tours.",
          "Overcut : je reste dehors si j’ai de l’air libre et que l’autre ressort dans le trafic.",
          "C’est un arbitrage : pit loss d'environ 20–30 s vs gain cumulé par tour.",
        ],
      },
      {
        label: "Safety car : arrêt moins coûteux",
        details: [
          "Sous safety car, les tours sont plus lents : le pit loss “relatif” diminue, parfois de plusieurs secondes.",
          "Donc un arrêt devient souvent plus intéressant : on profite d’une fenêtre avant le redémarrage.",
          "Exemple parlant : Abu Dhabi 2021 a montré qu'une safety car tardive peut rendre des pneus frais décisifs en fin de course.",
        ],
      },
      {
        label: "Choix 1 arrêt vs 2 arrêts : le bon compromis",
        details: [
          "1 arrêt : moins de pit loss, mais pneus usés → temps au tour se dégrade davantage.",
          "2 arrêts : plus de pit loss, mais pneus plus frais → plus rapide sur piste.",
          "Phrase simple : “je compare les temps totaux, je choisis le minimum, puis je vérifie le risque”.",
        ],
      },
      {
        label: "Arrêt au stand : ordre de grandeur",
        details: [
          "Le stop statique peut durer autour de 2–3 s, mais l'ensemble entrée + arrêt + sortie coûte bien plus.",
          "Selon les circuits, un pit loss raisonnable à citer est environ 20–30 s.",
          "Ce coût fixe explique pourquoi un arrêt supplémentaire doit être compensé par de vrais gains au tour.",
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
        "D’abord, on modélise le temps total : T = somme(lapTime) + n_pit × L_pit, donc les tours parcourus plus le coût des arrêts.",
        "Le point central, c’est la dégradation des pneus : plus on roule, plus le temps au tour augmente. On peut le modéliser par une fonction croissante, linéaire ou quadratique, du nombre de tours sur le même train.",
        "Un pit loss typique vaut environ 20 à 30 secondes selon les circuits, alors qu'un pneu neuf peut faire gagner quelques dixièmes ou plus d'une seconde au tour.",
        "Ensuite, on ajoute des contraintes réelles : trafic, carburant, température. Le modèle simplifie, mais garde les mécanismes dominants.",
      ],
      partie2: [
        "Ensuite, on optimise : on compare des stratégies 1 arrêt vs 2 arrêts.",
        "Un arrêt fait perdre L_pit secondes, mais des pneus neufs font gagner delta secondes par tour pendant quelques tours.",
        "Undercut : arrêter avant est rentable si le gain cumulé, par exemple m × delta, dépasse le pit loss, et surtout si je ressors en air libre.",
        "Overcut : au contraire, rester dehors peut être meilleur si l’autre se retrouve dans le trafic ou si mes pneus tiennent encore correctement.",
        "L’idée mathématique : c’est un compromis qui produit un minimum de temps total.",
      ],
      partie3: [
        "Enfin, il y a l’incertitude : météo, accidents, safety car.",
        "On raisonne par scénarios : chaque scénario a une probabilité et un temps total associé. On compare les stratégies via E[T] = somme(p_i × T_i).",
        "On regarde aussi la variance : une stratégie agressive peut être excellente si tout se passe bien, mais très coûteuse si une safety car arrive au mauvais moment.",
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
          "On compare E[T], puis la variance pour distinguer stratégie sûre et stratégie agressive.",
        ],
      },
      {
        q: "Où sont les dérivées dans ton explication ?",
        angle: "Relier au programme sans faire du calcul pour du calcul.",
        elements: [
          "Si on modélise un coût T(x) selon un choix x (ex : tour d’arrêt), un optimum vérifie T'(x)=0 dans un modèle continu.",
          "En pratique, les équipes simulent discret (tour par tour), mais l’idée d’optimum vient de la même logique mathématique.",
        ],
      },
    ],
  },
];
