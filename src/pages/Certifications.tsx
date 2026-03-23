import { certifications } from "../data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "../components/CertificationCard";

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.skills ?? [])] // ici on utilise skills, pas tags
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <section className="py-8">
      <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
        <input
          placeholder="Filtrer (ex: AWS, Kubernetes)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="border rounded-xl px-3 py-2 w-full sm:w-72"
          aria-label="Filtrer les certifications"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <CertificationCard key={c.title + c.issueDate} cert={c} /> // prop "cert" au lieu de "c"
        ))}
      </div>
    </section>
  );
}