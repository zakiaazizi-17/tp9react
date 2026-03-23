import { profile } from "../data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Badges correspondant à ton parcours
const badges = [
  "DEUST MIPC (2024)",
  "Licence Systèmes Informatiques Répartis (en cours)",
  "Hibernate & JPA",
  "React"
];

// Liens rapides
const quickLinks = [
  { to: "/projects", label: "Explorer les projets", icon: "→" },
  { to: "/contact", label: "Me contacter", icon: "✉️" }
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{profile.name} • Portfolio</title>
        <meta name="description" content="Portfolio de Zakia Azizi, étudiante en systèmes informatiques répartis." />
      </Helmet>

      <div className="grid gap-8 md:grid-cols-2 items-center min-h-[80vh] animate-fade-in">
        <div className="space-y-5">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            {profile.name}
          </h1>
          <p className="text-xl text-muted-foreground border-l-4 border-primary pl-4">
            {profile.role}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {profile.about}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex items-center gap-1 text-primary hover:underline underline-offset-4 transition"
              >
                {link.label} <span className="text-lg">{link.icon}</span>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2" aria-label="Parcours et compétences">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full bg-muted text-sm font-medium text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-muted/40 border shadow-sm flex items-center justify-center text-muted-foreground">
          <span role="img" aria-label="Illustration" className="text-4xl">
            👩‍💻
          </span>
        </div>
        
      </div>
      
    </>
  );
}