// Peer Reviewing & Editorial Service Data
// Fact-checked from official certificates in /reviews and verified resume records

const reviewsData = [
  {
    id: "eaai-elsevier",
    venue: "Engineering Applications of Artificial Intelligence",
    shortName: "Elsevier EAAI",
    publisher: "Elsevier",
    role: "Official Peer Reviewer",
    reviewsCount: 43,
    period: "October 2025 – October 2026",
    badge: "Elsevier Reviewer Recognition",
    seal: "Q1 Prestigious AI Journal",
    tier: "Q1 Journal · Impact Factor ~8.0",
    description: "Awarded Certificate of Reviewing in recognition of reviewing 43 scientific manuscripts within a single year for Engineering Applications of Artificial Intelligence, the leading international Q1 AI journal published by Elsevier.",
    expertise: ["Deep Learning Architectures", "High-Performance Computing", "Optimization Algorithms", "Applied Intelligent Systems", "Biomedical Engineering AI"],
    certificateImage: "reviews/Certificate of Reviewing - Engineering Applications of Artificial Intelligence.jpg",
    verificationNote: "Official Certificate of Reviewing issued by The Editors of Engineering Applications of Artificial Intelligence (Elsevier)."
  },
  {
    id: "jpi-elsevier",
    venue: "Journal of Pathology Informatics",
    shortName: "Elsevier JPI",
    publisher: "Elsevier",
    role: "Official Peer Reviewer",
    reviewsCount: 1,
    period: "January 2026",
    badge: "Elsevier Reviewer Recognition",
    seal: "Computational Pathology",
    tier: "Peer-Reviewed Medical AI Journal",
    description: "Awarded Certificate of Reviewing for peer-review contribution to the Journal of Pathology Informatics, published by Elsevier, evaluating state-of-the-art computational histology, whole-slide digital pathology imaging, and automated diagnostic vision models.",
    expertise: ["Computational Pathology", "Histopathology Image Segmentation", "Self-Supervised Medical Vision", "Diagnostic Reliability"],
    certificateImage: "reviews/Certificate of Reviewing  - Journal of Pathology Informatics.jpg",
    verificationNote: "Official Certificate of Reviewing issued by The Editors of Journal of Pathology Informatics (Elsevier)."
  },
  {
    id: "iceccme-ieee",
    venue: "5th International Conference on Electrical, Computer, Communications and Mechatronics Engineering (ICECCME 2026)",
    shortName: "IEEE ICECCME 2026",
    publisher: "IEEE / Topkapi University / IEEE Computer Society",
    role: "Review Committee Member & Technical Reviewer",
    reviewsCount: 2,
    period: "July 2026 (Conference: Oct 15–17, 2026 · Bali, Indonesia)",
    badge: "IEEE Technical Committee",
    seal: "IEEE Computer Society",
    tier: "IEEE International Conference",
    description: "Served as Review Committee Member evaluating submitted scientific manuscripts on distributed computing, electrical engineering, machine learning pipelines, and embedded edge systems for IEEE ICECCME 2026.",
    expertise: ["Embedded Edge AI", "Distributed Systems", "Parallel Computing", "Mechatronics Data Pipelines"],
    certificateImage: "reviews/Certificate of Reviewing - ICECCME.jpg",
    verificationNote: "Signed by Ridha Sefina Samosir (Kalbis University, ICECCME 2026 Conference Chair)."
  },
  {
    id: "acdsa-ieee",
    venue: "International Conference on Artificial Intelligence, Computer, Data Sciences and Applications (ACDSA 2027)",
    shortName: "IEEE ACDSA 2027",
    publisher: "Antalya Bilim University / IEEE",
    role: "Review Committee Member & Technical Reviewer",
    reviewsCount: 1,
    period: "September 2026",
    badge: "IEEE Review Committee Member",
    seal: "Antalya Bilim & UNICAMP",
    tier: "IEEE International Conference",
    description: "Served as Review Committee Member ensuring scientific rigor, algorithmic reproducibility, and empirical validation standards for data science, artificial intelligence, and applied computational tracks.",
    expertise: ["Data Science Applications", "Big Data Analytics", "Model Verification", "Statistical Learning"],
    certificateImage: "reviews/Certificate of Reviewing - ACDSA.jpg",
    verificationNote: "Signed by Dr. Gabriel Gomes de Oliveira (UNICAMP Brazil, ACDSA 2027 Conference Chair)."
  },
  {
    id: "icmla-ieee",
    venue: "25th IEEE International Conference on Machine Learning and Applications (ICMLA 2026)",
    shortName: "IEEE ICMLA 2026",
    publisher: "IEEE / IEEE Computer Society",
    role: "Technical Program Reviewer",
    reviewsCount: 1,
    period: "2026",
    badge: "IEEE Technical Reviewer",
    seal: "IEEE Computer Society",
    tier: "IEEE Machine Learning Conference",
    description: "Evaluated peer submissions in high-dimensional feature selection, deep neural architectures, and biomedical machine learning applications.",
    expertise: ["Biomedical Machine Learning", "Feature Selection", "High-Dimensional Data", "Deep Learning"],
    certificateImage: "reviews/Certificate of Reviewing - ICECCME.jpg",
    verificationNote: "Official Peer Reviewer record confirmed on curriculum vitae (ICMLA 2026)."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { reviewsData };
}
