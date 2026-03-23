import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Zakia Azizi</title>
        <meta name="description" content="Contactez-moi pour toute question ou opportunité." />
      </Helmet>

      <section className="py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Me contacter</h2>
          <p className="mt-1 text-muted-foreground">
            N’hésitez pas à m’écrire pour discuter de projets, stages ou collaborations.
          </p>
        </div>

        <div className="max-w-xl">
          <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-xl hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:zakiaazizi17@gmail.com"
                  className="text-primary hover:underline"
                >
                  📧 zakiaazizi17@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-muted-foreground">
                  <a
                    href="https://www.linkedin.com/in/zakia-azizi-a87277360/" 
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    zakia-azizi
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-muted-foreground">
                  <a
                    href="https://github.com/zakiaazizi-17" 
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    @zakiaazizi-17
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}