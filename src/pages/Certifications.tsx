import { Helmet } from "react-helmet-async";
import { certifications } from "@/data/certifications";
import CertificationCard from "@/components/CertificationCard";

export default function CertificationsPage() {
  return (
    <>
      <Helmet>
        <title>Certifications | Zakia Azizi</title>
        <meta name="description" content="Certifications et compétences validées." />
      </Helmet>
      <section className="py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
          <p className="mt-1 text-muted-foreground">
            Preuves de compétences et formations suivies
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <CertificationCard key={idx} cert={cert} />
          ))}
        </div>
      </section>
    </>
  );
}