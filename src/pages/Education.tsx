import { Helmet } from "react-helmet-async";
import { education } from "../data/education";

export default function Education() {
  return (
    <>
      <Helmet>
        <title>Formations | Zakia Azizi</title>
      </Helmet>
      <section className="py-8">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Formations</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((edu, idx) => (
            <article key={idx} className="rounded-xl border bg-card p-5">
              <h3 className="text-xl font-semibold">{edu.title}</h3>
              <p className="text-sm text-muted-foreground">{edu.institution} – {edu.period}</p>
              <p className="mt-2 text-sm">{edu.description}</p>
              {edu.tags && (
                <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                  {edu.tags.map(tag => <li key={tag} className="rounded-full bg-secondary/50 px-2 py-0.5">{tag}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}