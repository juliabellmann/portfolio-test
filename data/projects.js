export const projects = [
  {
    slug: "dateneingang-datenbank",
    title: "Dateneingang-Datenbank",
    subtitle: "Full-Stack Web Application",
    type: "own",
    featured: true,
    description:
      "Eine webbasierte Anwendung zur Digitalisierung eines bestehenden Datenerfassungsprozesses und zur Ablösung manueller Excel-Abläufe.",
    problem:
      "Ein bestehender Arbeitsprozess basierte auf einem einfachen Excel-Formular mit manueller Dateneingabe und loser Dateilieferung. Die Informationen sollen jetzt strukturiert erfasst, geprüft und wiederholt verarbeitet werden.",
    solution:
      "Ich entwickelte eine eigene Webanwendung mit React und Next.js. Daten werden strukturiert über Supabase/PostgreSQL gespeichert. Authentifizierung, Rollen, Datei-Uploads, Entwürfe und automatisierte Berechnungen sind Bestandteil der Anwendung.",
    stack: ["JavaScript", "React", "Next.js", "Supabase", "PostgreSQL", "Vercel"],
    features: [
      "Authentifizierung und geschützte Bereiche",
      "Rollenbasierte Benutzeroberflächen",
      "Datenverwaltung und Entwurfsstatus",
      "Geschützte Datei-Uploads",
      "Automatische Flächen- und Kostenberechnungen",
      "Deployment über Vercel",
      "Pflichtfelder",
      "Eingabevalidierung"
    ],
    demo: "https://db-dateneingang.vercel.app/",
    // github: "https://github.com/"
  },
  {
    slug: "nabu-randomizer",
    title: "NABU Vogel Zufallsgenerator",
    subtitle: "Next.js Web Application",
    type: "own",
    featured: false,
    description:
      "Webanwendung zur zufälligen Entdeckung von Vogelarten mit persistentem Fortschritt.",
    problem:
      "Viele Vogelarten sollten spielerisch entdeckt werden können, ohne dass bereits gesehene Arten nach einem Reload verloren gehen.",
    solution:
      "Eine Next.js-Anwendung mit Supabase speichert den Fortschritt serverseitig und trennt zufällige Auswahl, Datenhaltung und Benutzeroberfläche.",
    stack: ["JavaScript", "React", "Next.js", "API"],
    features: ["Zufällige Vogel-Auswahl", "Persistenter Fortschritt", "Datenbankanbindung"],
    demo: "https://schnegel-vogel-randomizer.vercel.app/",
    github: "https://github.com/juliabellmann/schnegel-vogel-randomizer"
  },
  {
    slug: "baking-compendium",
    title: "Back-Kompendium",
    subtitle: "Recipe Web Application",
    type: "own",
    featured: false,
    description:
      "Moderne Rezeptanwendung mit dynamischer Portionsberechnung und strukturierten Rezeptschritten.",
    problem:
      "Rezepte sollen übersichtlich dargestellt und Mengen unkompliziert an unterschiedliche Portionsgrößen angepasst werden können.",
    solution:
      "Eine komponentenbasierte Next.js-Anwendung mit dynamischer Berechnung von Zutatenmengen und klarer Rezeptnavigation.",
    stack: ["JavaScript", "React", "Next.js", "CSS"],
    features: ["Dynamische Portionen", "Komponentenbasierte UI", "Responsive Design"],
    demo: "https://the-new-baking-compendium-git-main-juliabellmanns-projects.vercel.app/",
    github: "https://github.com/juliabellmann/baking-compendium"
  }
];

export const skills = [
  {
    index: "01",
    title: "Frontend Development",
    items: ["JavaScript", "React", "Next.js", "HTML5", "CSS3"]
  },
  {
    index: "02",
    title: "Backend & Data",
    items: ["Supabase", "PostgreSQL", "MongoDB", "Node.js", "REST APIs"]
  },
  {
    index: "03",
    title: "Design",
    items: ["UI / UX", "Responsive Design", "Figma", "Accessibility"]
  },
  {
    index: "04",
    title: "Development",
    items: ["Git", "GitHub", "Vercel", "Testing", "Debugging"]
  }
];

export const qualifications = [
  {
    year: "2026",
    title: "Softwareentwicklerin",
    text: "Schwerpunkt JavaScript"
  },
  {
    year: "2026",
    title: "Web Developer",
    text: "Weiterbildung und Qualifikation"
  },
  {
    year: "2026",
    title: "Web Designer",
    text: "Weiterbildung und Qualifikation"
  }
];
