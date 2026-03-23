import { projects } from "../data/projects"; // chemin relatif

// Composant interne pour chaque carte projet
const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const { title, summary, tags, link, repo } = project;

  return (
    <article className="group rounded-xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {summary}
      </p>

      {tags && tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {(link || repo) && (
        <div className="mt-5 flex gap-4 text-sm">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary underline-offset-2 hover:underline"
            >
              Démo →
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary underline-offset-2 hover:underline"
            >
              Code →
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default function Projects() {
  return (
    <section className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Mes réalisations</h2>
        <p className="mt-1 text-muted-foreground">
          Une sélection de projets en IA, DevSecOps et développement mobile
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}