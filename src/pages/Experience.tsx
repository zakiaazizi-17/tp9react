import { Helmet } from "react-helmet-async";

// Données locales
const experiences = [
  {
    title: "Application de gestion de bibliothèque",
    company: "Projet académique",
    period: "2024",
    description: "Développement d’une application Java avec Hibernate et JPA pour gérer les emprunts et retours de livres.",
    tags: ["Java", "Hibernate", "JPA", "MySQL"]
  },
  {
    title: "Gestion cinéma",
    company: "Projet personnel",
    period: "2025",
    description: "Application full‑stack de gestion de séances et réservations, avec backend Spring Boot (Hibernate, JPA) et frontend React.",
    tags: ["React", "Spring Boot", "Hibernate", "JPA", "MySQL", "HTML", "CSS"]
  }
];

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Parcours | Zakia Azizi</title>
        <meta name="description" content="Projets et expériences en développement full‑stack, Java, Hibernate, React." />
      </Helmet>

      <section className="py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Parcours & Projets</h2>
          <p className="mt-1 text-muted-foreground">
            Réalisations académiques et personnelles
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {experiences.map((exp, idx) => (
            <article key={idx} className="rounded-xl border bg-card p-5 transition-all hover:shadow-md">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-muted-foreground">{exp.company} – {exp.period}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
              {exp.tags && (
                <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                  {exp.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-secondary/50 px-2 py-0.5 text-secondary-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}