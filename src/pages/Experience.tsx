import { Helmet } from "react-helmet-async";

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Compétences | Zakia Azizi</title>
        <meta
          name="description"
          content="Mes compétences techniques : React, JavaScript, Java EE, Spring Boot, MySQL, Oracle."
        />
      </Helmet>

      {/* Ajout de la classe animate-fade-in pour l'apparition en douceur */}
      <section className="py-8 animate-fade-in">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Compétences techniques</h2>
          <p className="mt-1 text-muted-foreground">
            Technologies maîtrisées en développement front-end et back-end
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Carte Front-end avec dégradé et effets */}
          <div className="rounded-xl border bg-gradient-to-br from-card to-muted/30 p-5 shadow-md transition-all hover:shadow-xl hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-3">Front-end</h3>
            <ul className="flex flex-wrap gap-2">
              {["React", "JavaScript", "HTML", "CSS"].map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white hover:scale-105 cursor-default"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Carte Back-end & BDD avec dégradé et effets */}
          <div className="rounded-xl border bg-gradient-to-br from-card to-muted/30 p-5 shadow-md transition-all hover:shadow-xl hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-3">Back-end & Base de données</h3>
            <ul className="flex flex-wrap gap-2">
              {["JEE", "Spring Boot", "MySQL", "Oracle"].map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white hover:scale-105 cursor-default"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}