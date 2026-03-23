import { Outlet, NavLink } from "react-router-dom";

// Liste des liens de navigation (évite la duplication)
const navLinks = [
  { to: "/projects", label: "Projets" },
  { to: "/experience", label: "Compétences" },
  { to: "/education", label: "Formations" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" }
];

export default function RootLayout() {
  // Style pour les liens actifs
  const activeLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-semibold underline underline-offset-4" : "hover:underline";

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between py-4">
            <NavLink to="/" className="text-xl font-bold tracking-tight">
              MonPortfolio
            </NavLink>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={activeLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Menu mobile (hamburger à ajouter si besoin) */}
            <button className="md:hidden p-2" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
  © {new Date().getFullYear()} Zakia Azizi • Étudiante en systèmes informatiques répartis
</footer>
    </div>
  );
}