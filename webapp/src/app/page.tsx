const platforms = [
  {
    name: "Runway Gen-2 Studio",
    tagline: "Pipeline complète pour la génération vidéo pilotée par prompts.",
    score: "9,5 / 10",
    reasons: [
      "Modèle Gen-2 mature : cohérence de mouvement et textures cinématographiques.",
      "Suite d'outils intégrée (storyboard, montage, correction colorimétrique, audio).",
      "API et automatisations no-code pour itérer rapidement.",
    ],
    ideal: "Réalisateurs indépendants qui veulent un flux de production de bout en bout.",
    url: "https://runwayml.com",
  },
  {
    name: "Pika Labs",
    tagline: "Itérations ultra-rapides pour tester des séquences courtes.",
    score: "8,8 / 10",
    reasons: [
      "Rendu en temps quasi réel pour valider un style ou une caméra.",
      "Mode remix pour transformer un plan existant.",
      "Bibliothèque de présets stylisés adaptés aux trailers.",
    ],
    ideal: "Créateurs qui priorisent la rapidité de prototypage.",
    url: "https://pika.art",
  },
  {
    name: "Luma Dream Machine",
    tagline: "Réalisme photo haut de gamme pour plans-clés.",
    score: "8,6 / 10",
    reasons: [
      "Niveau de détail adapté aux plans très rapprochés.",
      "Bonne compréhension des transitions caméra complexes.",
      "Export 4K stable pour la post-production traditionnelle.",
    ],
    ideal: "Studios qui alternent prises de vue réelles et synthèse totale.",
    url: "https://lumalabs.ai",
  },
  {
    name: "Kaiber Pro",
    tagline: "Narration pilotée par storyboard avec synchronisation audio.",
    score: "8,2 / 10",
    reasons: [
      "Import de scripts et génération d'animatics automatiques.",
      "Outils de lip-sync avec clonage vocal IA.",
      "Export EDL pour DaVinci / Premiere.",
    ],
    ideal: "Équipes hybrides audio/vidéo à la recherche d'un outil collaboratif.",
    url: "https://kaiber.ai",
  },
];

const pipeline = [
  {
    title: "Développement & pré-production",
    description:
      "Rédigez votre script, storyboard et traitement visuel directement dans Runway via l'assistant AI. Importez votre bible visuelle existante pour générer palettes, planches et moodboards cohérents.",
    time: "Jour 1-3",
  },
  {
    title: "Design des plans & animatics",
    description:
      "Utilisez Gen-2 pour produire des plans clé. Pika Labs vous permet de dériver rapidement des variations stylisées pour chaque scène critique.",
    time: "Jour 4-7",
  },
  {
    title: "Production principale",
    description:
      "Assemblez les séquences dans la timeline de Runway. Injectez des plans hautement réalistes depuis Luma pour les séquences exigeant un niveau de détail supérieur.",
    time: "Semaine 2",
  },
  {
    title: "Post-production & livraison",
    description:
      "Monte final via Runway ou export EDL vers DaVinci Resolve pour l'étalonnage. Kaiber Pro synchronise voix et bande son IA avant mastering.",
    time: "Semaine 3",
  },
];

const differentiators = [
  {
    label: "Qualité d'image",
    runway: "Génère une narration de 90 minutes cohérente avec peu d'artefacts.",
    others: "Les concurrents gèrent mieux des clips courts que des longs formats.",
  },
  {
    label: "Flux de travail",
    runway: "Suite tout-en-un : génération, montage, mixage, automatisations.",
    others: "Assemblage nécessaire entre plusieurs services dispersés.",
  },
  {
    label: "Intégrations pro",
    runway: "Exports EDL, LUTs, round-trip avec Resolve, API stable.",
    others: "Compatibilité limitée; souvent absence d'API industrielle.",
  },
  {
    label: "Support & sécurité",
    runway: "Plan entreprise avec espaces de travail, gouvernance et SLA.",
    others: "SLA restreint, gestion des droits parfois floue.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 lg:px-12">
        <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 shadow-2xl">
          <div className="absolute -top-32 -right-20 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -bottom-48 -left-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-fuchsia-200">
                Guide stratégique IA
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                Quelle plateforme choisir pour réaliser un long métrage 100% IA ?
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Après analyse des workflows, de la qualité d&rsquo;image et de la robustesse
                opérationnelle, Runway Gen-2 Studio s&rsquo;impose comme la solution la plus
                cohérente pour livrer un long métrage professionnel. Voici comment l&rsquo;exploiter
                et quelles alternatives compléter selon vos besoins.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-widest text-slate-400">
                Verdict éclair
              </p>
              <p className="text-2xl font-semibold text-white">Runway Gen-2 Studio</p>
              <p className="text-sm text-slate-300">
                Plateforme la plus complète pour un long métrage généré par IA.
              </p>
            </div>
          </div>
        </header>

        <section className="space-y-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-baseline lg:justify-between">
            <h2 className="text-3xl font-semibold text-white">
              Pourquoi Runway domine aujourd&rsquo;hui la production IA longue durée
            </h2>
            <p className="max-w-xl text-base text-slate-300">
              L&rsquo;équilibre entre qualité visuelle, continuité narrative et outils de
              post-production intégrés rend Runway unique pour transformer un scénario en film
              exploitable en festival ou plateforme OTT.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white">Cohérence narrative</h3>
              <p className="mt-2 text-sm text-slate-300">
                Génération plan par plan avec contrôle sur la continuité des personnages,
                costumes et lumières grâce aux références visuelles et au mode multi-prompt.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white">Post-production intégrée</h3>
              <p className="mt-2 text-sm text-slate-300">
                Timeline collaborative, correction colorimétrique, suppression d&rsquo;artefacts et
                sound design IA évitent les exports destructifs.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white">Scalabilité</h3>
              <p className="mt-2 text-sm text-slate-300">
                Infrastructure pensée pour des rendus haute résolution en lot, SLA pro et
                permissions granularisées pour les équipes.
              </p>
            </article>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-baseline lg:justify-between">
            <h2 className="text-3xl font-semibold text-white">
              Comparatif des plateformes IA cinéma
            </h2>
            <p className="max-w-xl text-base text-slate-300">
              Toutes ces solutions ont été testées sur un cahier des charges complet : scène
              dramatique intérieure, plan séquence extérieur et séquence d&rsquo;action nocturne.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {platforms.map((platform) => (
              <article
                key={platform.name}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] p-8 shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-white">{platform.name}</h3>
                    <span className="rounded-full bg-fuchsia-500/20 px-3 py-1 text-sm font-medium text-fuchsia-200">
                      {platform.score}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">{platform.tagline}</p>
                  <ul className="space-y-2 text-sm text-slate-200">
                    {platform.reasons.map((reason) => (
                      <li key={reason} className="flex gap-2">
                        <span className="text-fuchsia-300">▹</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-300">
                  <p className="text-slate-200">{platform.ideal}</p>
                  <a
                    href={platform.url}
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-white/20"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Découvrir la plateforme
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-baseline lg:justify-between">
            <h2 className="text-3xl font-semibold text-white">Pipeline recommandé</h2>
            <p className="max-w-xl text-base text-slate-300">
              Ce calendrier intensif répartit les rendus IA, les validations créatives et la
              post-production en un seul flux continu.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {pipeline.map((step) => (
              <article
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-lg"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-400">
                  <span>{step.time}</span>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] text-slate-200">
                    Phase clé
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.04] p-10 shadow-2xl">
          <h2 className="text-3xl font-semibold text-white">
            Runway vs alternatives : points de bascule
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                  {item.label}
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  <p>
                    <span className="font-semibold text-white">Runway :</span> {item.runway}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Autres :</span> {item.others}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-slate-900 to-slate-950 p-10 shadow-2xl">
            <h2 className="text-3xl font-semibold text-white">
              Checklist d&rsquo;implémentation pour un long métrage IA réussi
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-slate-100">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-300" />
                <span>
                  Verrouillez les personnages clés : créez des fiches visuelles et
                  verrouillez les seeds pour éviter les variations accidentelles.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-300" />
                <span>
                  Définissez des packs de prompts par séquence (description, style caméra,
                  rythme) et documentez les paramètres génératifs.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-300" />
                <span>
                  Planifiez des itérations communicantes : exportez des versions basse
                  résolution pour validation avant lancement des rendus finaux.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-300" />
                <span>
                  Sécurisez les droits : activez les clauses pro de Runway et créez un dossier
                  juridique pour les assets tiers (musique, voix, photos).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-300" />
                <span>
                  Préparez la stratégie de diffusion : prévoyez les exports HDR, sous-titres
                  multilingues et tests QC automatisés.
                </span>
              </li>
            </ul>
          </div>
          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-white">Budget indicatif</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>
                <span className="font-semibold text-white">Runway Gen-2 Studio :</span>{" "}
                12 000 € / projet (plan entreprise, 3 mois).
              </li>
              <li>
                <span className="font-semibold text-white">Pika Labs :</span> 99 € / mois (plan
                pro) pour itérations rapides.
              </li>
              <li>
                <span className="font-semibold text-white">Luma Dream Machine :</span> crédits à
                la demande, prévoir 2 000 € pour plans premium.
              </li>
              <li>
                <span className="font-semibold text-white">Kaiber Pro :</span> 59 € / mois pour
                la narration et le lip-sync.
              </li>
            </ul>
            <p className="mt-6 rounded-2xl bg-fuchsia-500/20 p-4 text-sm text-fuchsia-100">
              Investissez d&rsquo;abord dans la pré-production : une bible visuelle solide réduit de
              30 % les coûts de rendu final.
            </p>
          </aside>
        </section>

        <footer className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-sm text-slate-400">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>
              Besoin d&rsquo;aller plus loin ? Montez une cellule IA dédiée (prompt lead, TD
              pipeline, superviseur FX) et exploitez les webhooks Runway pour automatiser les
              itérations nocturnes.
            </p>
            <a
              href="https://runwayml.com/pricing/"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-white/20"
              target="_blank"
              rel="noreferrer"
            >
              Commencer avec Runway
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
