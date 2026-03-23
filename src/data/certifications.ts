// src/data/certifications.ts
export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;      // format "YYYY-MM"
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  status?: "active" | "expired" | "revoked";
}

export const certifications: Certification[] = [
  {
    title: "Hibernate & JPA",
    issuer: "Auto-formation",
    issueDate: "2025-02",
    credentialUrl: "https://github.com/zakiaazizi-17",
    skills: ["Hibernate", "JPA", "Spring Data"],
    status: "active"
  },
  {
    title: "React – Développement d'applications modernes",
    issuer: "Auto-formation",
    issueDate: "2025-03",
    credentialUrl: "https://github.com/zakiaazizi-17",
    skills: ["React", "Hooks", "État", "Router"],
    status: "active"
  }
];