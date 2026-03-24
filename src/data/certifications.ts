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
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/28-43c9f269-4fd9-4d22-9ff4-1c2023ee74f1-030420",
    skills: ["Hibernate", "JPA", "Spring Data"],
    status: "active"
  },
  {
    title: "React – Développement d'applications modernes",
    issuer: "Auto-formation",
    issueDate: "2025-03",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/26-43c9f269-4fd9-4d22-9ff4-1c2023ee74f1-597764",
    skills: ["React", "Hooks", "État", "Router"],
    status: "active"
  }
];
