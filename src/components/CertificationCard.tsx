import type { Certification } from "@/data/certifications";

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  return `${month}/${year}`;
}

export default function CertificationCard({ cert }: { cert: Certification }) {
  const isExpired =
    cert.status === "expired" ||
    (cert.expiryDate && cert.expiryDate < new Date().toISOString().slice(0, 7));

  return (
    <article
      className={`border rounded-2xl p-4 hover:shadow transition ${
        isExpired ? "opacity-80" : ""
      }`}
      aria-label={`Certification ${cert.title}`}
    >
      <h3 className="font-semibold leading-snug">{cert.title}</h3>
      <p className="text-sm text-muted-foreground">
        {cert.issuer} • {formatDate(cert.issueDate)}
        {cert.expiryDate && ` → ${formatDate(cert.expiryDate)}`}
        {cert.credentialId && ` • ID ${cert.credentialId}`}
      </p>

      {cert.skills && cert.skills.length > 0 && (
        <p className="mt-2 text-sm">
          Compétences : {cert.skills.join(", ")}
        </p>
      )}

      <div className="mt-3 flex items-center gap-3 text-sm">
        {cert.credentialUrl && (
          <a
            className="underline"
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Voir le certificat ${cert.title}`}
          >
            Voir le certificat
          </a>
        )}
        {isExpired && <span className="text-muted-foreground">Expirée</span>}
        {cert.status === "revoked" && (
          <span className="text-destructive">Révoquée</span>
        )}
      </div>
    </article>
  );
}