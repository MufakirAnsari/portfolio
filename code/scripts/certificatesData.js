// Comprehensive Verified Certificates Dataset
// All files located in /certificates

const certificatesData = [
  // ── Data Science & Analytics ──────────────────────────────────
  {
    title: "Introduction to Statistics",
    institution: "Stanford University",
    description: "Foundations of descriptive and inferential statistics, sampling distributions, hypothesis testing, and Bayesian reasoning.",
    filename: "Coursera 3BW3AKVHF9EE.pdf",
    type: "pdf",
    platform: "coursera",
    category: "data-science",
    tags: ["Statistics", "Hypothesis Testing", "Inference", "Stanford"]
  },
  {
    title: "Data Science Math Skills",
    institution: "Duke University",
    description: "Core mathematical foundations for data science including set theory, function graphing, calculus derivatives, and Bayes' theorem.",
    filename: "Coursera UWUM3ZTUEHKA.pdf",
    type: "pdf",
    platform: "coursera",
    category: "data-science",
    tags: ["Calculus", "Probability", "Bayes Rule", "Duke"]
  },
  {
    title: "SQL (Basic) Assessment",
    institution: "HackerRank",
    description: "Demonstrated advanced relational database querying proficiency, joins, subqueries, aggregations, and performance filters.",
    filename: "canvas.png",
    thumbnail: "certificates/canvas.png",
    type: "image",
    platform: "hackerrank",
    category: "data-eng",
    tags: ["SQL", "Relational DB", "HackerRank", "Queries"]
  },
  {
    title: "Distributed Computing with Spark SQL",
    institution: "University of California, Davis",
    description: "Processing large-scale distributed datasets with Apache Spark SQL, optimizing DataFrame execution graphs and cluster partitioning.",
    filename: "Coursera C7CEM3B76UAJ.pdf",
    type: "pdf",
    platform: "coursera",
    category: "data-eng",
    tags: ["Apache Spark", "Big Data", "Distributed ML", "UC Davis"]
  },
  {
    title: "SQL for Data Science",
    institution: "University of California, Davis",
    description: "Writing complex SQL queries for data extraction, filtering, multi-table aggregation, subqueries, and window functions.",
    filename: "Coursera LKNPTY96JH8J.pdf",
    type: "pdf",
    platform: "coursera",
    category: "data-eng",
    tags: ["SQL", "Data Extraction", "Aggregation", "UC Davis"]
  },
  {
    title: "SQL for Data Science Capstone Project",
    institution: "University of California, Davis",
    description: "End-to-end data pipeline capstone applying SQL analytics to extract insights and build feature tables for machine learning.",
    filename: "Coursera VMH93EVCD2G2.pdf",
    type: "pdf",
    platform: "coursera",
    category: "data-eng",
    tags: ["Capstone", "Feature Stores", "ETL", "UC Davis"]
  },
  {
    title: "Learn SQL Basics for Data Science Specialization",
    institution: "University of California, Davis",
    description: "4-course specialization covering SQL fundamentals, data wrangling, distributed computing with Spark, and AB testing.",
    filename: "Coursera E5BJ4H6DPRZV.pdf",
    type: "pdf",
    platform: "coursera",
    category: "data-eng",
    tags: ["Specialization", "SQL Suite", "Analytics", "UC Davis"]
  },
  {
    title: "Data Wrangling, Analysis and AB Testing with SQL",
    institution: "University of California, Davis",
    description: "SQL-based exploratory data analysis, data cleansing, cohort partitioning, and statistical experimental A/B testing design.",
    filename: "Coursera WEC3V7KD9Q63.pdf",
    type: "pdf",
    platform: "coursera",
    category: "data-eng",
    tags: ["A/B Testing", "Data Wrangling", "Experimentation", "UC Davis"]
  },
  {
    title: "Managing Big Data with MySQL",
    institution: "Duke University",
    description: "Structuring, querying, and managing relational databases for high-throughput business analytics and enterprise reporting.",
    filename: "Coursera RQAS29A3XQWW.pdf",
    type: "pdf",
    platform: "coursera",
    category: "data-eng",
    tags: ["MySQL", "Database Management", "Big Data", "Duke"]
  },
  {
    title: "Excel to MySQL: Analytic Techniques for Business",
    institution: "Duke University",
    description: "Comprehensive 5-course specialization covering data pipelines from financial spreadsheets to relational MySQL warehouses.",
    filename: "Coursera SR86CDGP9CU2.pdf",
    type: "pdf",
    platform: "coursera",
    category: "data-eng",
    tags: ["Specialization", "MySQL", "Data Pipelines", "Duke"]
  },
  {
    title: "Mastering Data Analysis in Excel",
    institution: "Duke University",
    description: "Advanced predictive analytics, multivariate regression modeling, Monte Carlo simulation, and binary decision trees.",
    filename: "Coursera D8T48E3FS4RC.pdf",
    type: "pdf",
    platform: "coursera",
    category: "data-science",
    tags: ["Excel Analytics", "Regression", "Modeling", "Duke"]
  },
  {
    title: "Data Visualization & Communication with Tableau",
    institution: "Duke University",
    description: "Designing high-density interactive dashboards, perceptual visual encodings, and communicating quantitative findings effectively.",
    filename: "Coursera S39646D8KMNP.pdf",
    type: "pdf",
    platform: "coursera",
    category: "data-science",
    tags: ["Tableau", "Data Viz", "Storytelling", "Duke"]
  },
  {
    title: "Business Metrics for Data-Driven Companies",
    institution: "Duke University",
    description: "Key business KPI architectures, customer retention analysis, growth accounting, and enterprise telemetry metrics.",
    filename: "Coursera S2Z34ZV69A8N.pdf",
    type: "pdf",
    platform: "coursera",
    category: "business-mgmt",
    tags: ["KPIs", "Retention", "Business Analytics", "Duke"]
  },
  {
    title: "Data Analytics for Lean Six Sigma",
    institution: "University of Amsterdam",
    description: "Applying statistical data analytics within DMAIC Lean Six Sigma process improvement frameworks to minimize variance.",
    filename: "Coursera V73FDE34PAU4.pdf",
    type: "pdf",
    platform: "coursera",
    category: "data-science",
    tags: ["Lean Six Sigma", "Process Mining", "Quality", "Amsterdam"]
  },
  {
    title: "Introduction to Data Analytics",
    institution: "IBM / Professional Curriculum",
    description: "Foundational principles of modern data ecosystem, ETL pipelines, data repositories, and predictive analytics lifecycles.",
    filename: "Introduction to Data Analytics.pdf",
    type: "pdf",
    platform: "ibm",
    category: "data-science",
    tags: ["Data Analytics", "Pipelines", "IBM", "Foundations"]
  },
  {
    title: "Increasing Real Estate Management Profits: Data Analytics",
    institution: "Coursera Partner",
    description: "Applying predictive modeling and geospatial data analysis to optimize occupancy, maintenance costs, and yields.",
    filename: "Coursera 4K233BN8DG59.pdf",
    type: "pdf",
    platform: "coursera",
    category: "data-science",
    tags: ["Real Estate Analytics", "Optimization", "Predictive ML"]
  },

  // ── Machine Learning & AI ────────────────────────────────────
  {
    title: "Managing Machine Learning Projects",
    institution: "Coursera Specialization",
    description: "Best practices for scoping ML workflows, detecting data shift, tracking experiments, model registries, and production governance.",
    filename: "Coursera MZNZLNVJBL89.pdf",
    type: "pdf",
    platform: "coursera",
    category: "ml-ai",
    tags: ["MLOps", "Model Governance", "Project Management"]
  },
  {
    title: "Introduction to Embedded Machine Learning",
    institution: "Edge Impulse / Coursera",
    description: "Designing and deploying lightweight deep learning models on resource-constrained embedded systems and IoT microcontrollers.",
    filename: "Coursera GSBSXTZSDR7S.pdf",
    type: "pdf",
    platform: "coursera",
    category: "ml-ai",
    tags: ["TinyML", "Embedded Systems", "Edge AI", "Quantization"]
  },
  {
    title: "Human Factors in AI",
    institution: "Duke University",
    description: "Principles of human-centered AI systems, cognitive psychology in AI interaction, algorithmic fairness, and explainability.",
    filename: "Coursera 2SR52HPGBVNJ.pdf",
    type: "pdf",
    platform: "coursera",
    category: "ml-ai",
    tags: ["Human Factors", "Ethical AI", "Explainability", "Duke"]
  },
  {
    title: "Innovations in Investment Technology: Artificial Intelligence",
    institution: "University of Michigan",
    description: "Machine learning applications in asset allocation, quantitative algorithmic trading, natural language financial parsing, and risk.",
    filename: "Coursera JPSP7PL94MZF.pdf",
    type: "pdf",
    platform: "coursera",
    category: "finance-fintech",
    tags: ["Fintech AI", "Quantitative ML", "Trading", "Michigan"]
  },
  {
    title: "Applied Machine Learning",
    institution: "LinkedIn Learning",
    description: "Practical machine learning engineering: model tuning, hyperparameter search, regularization, ensembling, and cross-validation.",
    filename: "CertificateOfCompletion_Applied Machine Learnin.pdf",
    type: "pdf",
    platform: "linkedin",
    category: "ml-ai",
    tags: ["Scikit-learn", "Hyperparameter Search", "Ensembles"]
  },
  {
    title: "Machine Learning with Python",
    institution: "LinkedIn Learning",
    description: "Hands-on supervised and unsupervised modeling in Python, feature scaling, classification, regression, and clustering algorithms.",
    filename: "CertificateOfCompletion_Machine Learning with S.pdf",
    type: "pdf",
    platform: "linkedin",
    category: "ml-ai",
    tags: ["Python ML", "Clustering", "Supervised Learning"]
  },
  {
    title: "Data Analytics Dashboards",
    institution: "LinkedIn Learning",
    description: "Architecting real-time streaming telemetry dashboards, database backend integration, and visual KPIs.",
    filename: "CertificateOfCompletion_Data Analytics Dashboar.pdf",
    type: "pdf",
    platform: "linkedin",
    category: "data-science",
    tags: ["Dashboards", "Telemetry", "Real-time Analytics"]
  },

  // ── Cloud, IoT & Cybersecurity ────────────────────────────────
  {
    title: "Industrial IoT on Google Cloud",
    institution: "Google Cloud / Coursera",
    description: "Architecting end-to-end Industrial Internet of Things solutions on GCP, Cloud IoT Core, pub/sub streaming, and BigQuery analytics.",
    filename: "Coursera ESR8QRA596YU.pdf",
    type: "pdf",
    platform: "coursera",
    category: "cloud-cyber",
    tags: ["Google Cloud", "IIoT", "BigQuery", "Streaming Telemetry"]
  },
  {
    title: "Cryptography I",
    institution: "Stanford University",
    description: "Mathematical cryptography: pseudorandom generators, block ciphers, HMAC, public key cryptography, RSA, and zero-knowledge proofs.",
    filename: "Coursera ME2LRNBWX442.pdf",
    type: "pdf",
    platform: "coursera",
    category: "cloud-cyber",
    tags: ["Cryptography", "Ciphers", "Security", "Stanford"]
  },
  {
    title: "Information Systems Auditing, Controls & Assurance",
    institution: "Hong Kong University of Science & Tech",
    description: "Enterprise IT auditing frameworks, cybersecurity internal controls, compliance assurance, and cryptographic audit trails.",
    filename: "Coursera 2CEE76JSPREN.pdf",
    type: "pdf",
    platform: "coursera",
    category: "cloud-cyber",
    tags: ["IT Audit", "Security Controls", "Assurance", "Compliance"]
  },
  {
    title: "Cybersecurity Awareness and Defense",
    institution: "LinkedIn Learning",
    description: "Threat modeling, network perimeter security, defensive countermeasures, identity access management, and incident response.",
    filename: "CertificateOfCompletion_Cybersecurity Awareness.pdf",
    type: "pdf",
    platform: "linkedin",
    category: "cloud-cyber",
    tags: ["Cybersecurity", "Threat Modeling", "Defense In Depth"]
  },

  // ── Finance & Fintech ─────────────────────────────────────────
  {
    title: "Decentralized Finance (DeFi) Specialization",
    institution: "Duke University",
    description: "4-course specialization by Prof. Campbell Harvey covering DeFi infrastructure, primitives, risk mitigation, and automated market makers.",
    filename: "Coursera Y2K59TN6NUZ9.pdf",
    type: "pdf",
    platform: "coursera",
    category: "finance-fintech",
    tags: ["DeFi", "Smart Contracts", "AMM", "Duke"]
  },
  {
    title: "Decentralized Finance (DeFi) Deep Dive",
    institution: "Duke University",
    description: "Protocol mechanics, decentralized borrowing and lending architectures, oracle networks, flash loans, and governance tokenomics.",
    filename: "Coursera EC8V49V6MAT3.pdf",
    type: "pdf",
    platform: "coursera",
    category: "finance-fintech",
    tags: ["DeFi Protocols", "Oracles", "Tokenomics", "Duke"]
  },
  {
    title: "Decentralized Finance (DeFi) Opportunities & Risks",
    institution: "Duke University",
    description: "Quantitative risk management in decentralized markets: smart contract vulnerability audits, regulatory frameworks, and impermanent loss.",
    filename: "Coursera BMV7NRACP268.pdf",
    type: "pdf",
    platform: "coursera",
    category: "finance-fintech",
    tags: ["Risk Auditing", "Impermanent Loss", "Duke"]
  },
  {
    title: "Decentralized Finance (DeFi) Infrastructure",
    institution: "Duke University",
    description: "Blockchain distributed ledgers, Byzantine Fault Tolerant consensus algorithms, cryptographic hashes, and L2 rollup scaling.",
    filename: "Coursera VWUNVFXFKJUA.pdf",
    type: "pdf",
    platform: "coursera",
    category: "finance-fintech",
    tags: ["Consensus", "L2 Rollups", "Cryptography", "Duke"]
  },
  {
    title: "Decentralized Finance (DeFi) Primitives",
    institution: "Duke University",
    description: "Mechanics of stablecoins, automated market makers (Constant Product Invariant), decentralized collateral, and liquidity pools.",
    filename: "Coursera X2HWLA43WJLN.pdf",
    type: "pdf",
    platform: "coursera",
    category: "finance-fintech",
    tags: ["Stablecoins", "AMM Invariants", "Liquidity", "Duke"]
  },
  {
    title: "Financial Technology (Fintech) Innovations",
    institution: "University of Michigan",
    description: "Specialization investigating technological disruption in payments, peer-to-peer lending, robo-advising, and algorithmic wealth allocation.",
    filename: "Coursera TM7NBLVSPG4R.pdf",
    type: "pdf",
    platform: "coursera",
    category: "finance-fintech",
    tags: ["Fintech", "Robo-Advising", "Payments", "Michigan"]
  },
  {
    title: "The Future of Payment Technologies",
    institution: "University of Michigan",
    description: "Real-time gross settlement systems, contactless clearing, mobile wallets, and central bank digital currencies (CBDCs).",
    filename: "Coursera JEHQRHGWY8QN.pdf",
    type: "pdf",
    platform: "coursera",
    category: "finance-fintech",
    tags: ["Payment Rails", "Fintech", "Settlement", "Michigan"]
  },
  {
    title: "Blockchain and Cryptocurrency Explained",
    institution: "University of Michigan",
    description: "Consensus mechanics, cryptographic hash functions, proof of work/stake, distributed state machines, and cryptographic tokens.",
    filename: "Coursera UTT342G8Y9PB.pdf",
    type: "pdf",
    platform: "coursera",
    category: "finance-fintech",
    tags: ["Blockchain", "Cryptocurrency", "Consensus", "Michigan"]
  },
  {
    title: "Raising Capital: Credit Tech, Coin Offerings & Crowdfunding",
    institution: "University of Michigan",
    description: "Modern financing mechanisms, token generation events (TGEs), decentralized crowd syndicates, and financial risk governance.",
    filename: "Coursera XZLUJ2RJVB33.pdf",
    type: "pdf",
    platform: "coursera",
    category: "finance-fintech",
    tags: ["Capital Raising", "Credit Tech", "Financing", "Michigan"]
  },
  {
    title: "Game Theory",
    institution: "Stanford University & UBC",
    description: "Mathematical formulation of strategic interactions, Nash equilibria, dominant strategies, zero-sum games, and mechanism design.",
    filename: "Coursera W785RVJ2L9H3.pdf",
    type: "pdf",
    platform: "coursera",
    category: "data-science",
    tags: ["Game Theory", "Nash Equilibrium", "Stanford", "Economics"]
  },
  {
    title: "Stock Markets Made Easy",
    institution: "Financial Markets Institute",
    description: "Fundamental and technical financial market analysis, portfolio diversification, order execution mechanics, and risk mitigation.",
    filename: "Certificate-Stock Markets Made Easy-Mufakir.pdf",
    type: "pdf",
    platform: "other",
    category: "finance-fintech",
    tags: ["Stock Markets", "Technical Analysis", "Portfolio Strategy"]
  },

  // ── Agile, Product & Operations ──────────────────────────────
  {
    title: "Agile Foundations",
    institution: "LinkedIn Learning",
    description: "Agile values, Scrum ceremonies, Kanban WIP limits, continuous integration workflows, and iterative user value delivery.",
    filename: "CertificateOfCompletion_Agile Foundations.pdf",
    type: "pdf",
    platform: "linkedin",
    category: "business-mgmt",
    tags: ["Agile", "Scrum", "Kanban", "Sprint Planning"]
  },
  {
    title: "Agile Project Leadership",
    institution: "LinkedIn Learning",
    description: "Leading high-velocity cross-functional engineering teams, removing development blockers, and sprint retrospectives.",
    filename: "CertificateOfCompletion_Agile Project Leadershi.pdf",
    type: "pdf",
    platform: "linkedin",
    category: "business-mgmt",
    tags: ["Agile Leadership", "Engineering Management"]
  },
  {
    title: "Cert Prep: PMI Agile Certified Practitioner (PMI-ACP)",
    institution: "LinkedIn Learning / PMI Prep",
    description: "Preparation for PMI-ACP credentialing: adaptive planning, value-driven delivery, stakeholder engagement, and team velocity metrics.",
    filename: "CertificateOfCompletion_Cert Prep PMI Agile Cer.pdf",
    type: "pdf",
    platform: "linkedin",
    category: "business-mgmt",
    tags: ["PMI-ACP", "Certification Prep", "Adaptive Planning"]
  },
  {
    title: "HubSpot Revenue Operations Certified",
    institution: "HubSpot Academy",
    description: "Revenue operations (RevOps) frameworks: data synchronization between CRM, marketing, sales pipelines, and customer lifecycle telemetry.",
    filename: "411b20d159774fd7ba8c1730fe62ff8a.png",
    thumbnail: "certificates/411b20d159774fd7ba8c1730fe62ff8a.png",
    type: "image",
    platform: "hubspot",
    category: "business-mgmt",
    tags: ["RevOps", "HubSpot", "CRM Telemetry", "Pipelines"]
  },
  {
    title: "Growth-Driven Design Certified",
    institution: "HubSpot Academy",
    description: "Iterative, agile web development framework utilizing data analytics and user behavior experiments to continuously optimize conversions.",
    filename: "682f1f013ea84a25b3d98e53cacaf956.png",
    thumbnail: "certificates/682f1f013ea84a25b3d98e53cacaf956.png",
    type: "image",
    platform: "hubspot",
    category: "business-mgmt",
    tags: ["Growth Design", "HubSpot", "A/B Optimization", "UX"]
  },
  {
    title: "Introduction to User Experience Design",
    institution: "Georgia Institute of Technology",
    description: "Systematic UX research, mental models, low-fidelity wireframing, heuristic evaluations, and usability testing protocols.",
    filename: "Coursera MC9CNKWXTUGV.pdf",
    type: "pdf",
    platform: "coursera",
    category: "business-mgmt",
    tags: ["UX Design", "Usability", "Heuristics", "Georgia Tech"]
  },

  // ── Development & Leadership (Udemy Suite) ────────────────────
  {
    title: "CSS, Bootstrap, JavaScript, Web Development",
    institution: "Udemy",
    description: "Full-stack frontend web architecture: semantic HTML5, responsive CSS3 grids, modern ES6+ JavaScript, and DOM manipulation.",
    filename: "UC-c0f5f62b-0413-4e74-bc19-64580ddfeafe.jpg",
    pdfFilename: "UC-c0f5f62b-0413-4e74-bc19-64580ddfeafe.pdf",
    thumbnail: "certificates/UC-c0f5f62b-0413-4e74-bc19-64580ddfeafe.jpg",
    type: "image",
    platform: "udemy",
    category: "data-eng",
    tags: ["JavaScript", "CSS3", "Bootstrap", "Web Dev"]
  },
  {
    title: "Android App Development with Dependencies",
    institution: "Udemy",
    description: "Native mobile development: Java/Kotlin runtime, lifecycle architectures, dependency injection, and RESTful background services.",
    filename: "UC-327d9ed2-bd82-4711-8c1e-7ecd8fa53812.jpg",
    pdfFilename: "UC-327d9ed2-bd82-4711-8c1e-7ecd8fa53812.pdf",
    thumbnail: "certificates/UC-327d9ed2-bd82-4711-8c1e-7ecd8fa53812.jpg",
    type: "image",
    platform: "udemy",
    category: "data-eng",
    tags: ["Android", "Mobile Architecture", "Dependencies"]
  },
  {
    title: "Leadership: You Can Speak Like a Leader",
    institution: "Udemy",
    description: "Executive presentation, structured technical communications, persuasion psychology, and effective technical leadership.",
    filename: "UC-cfc5cf14-fdab-4c8c-9210-61d729057861.jpg",
    pdfFilename: "UC-cfc5cf14-fdab-4c8c-9210-61d729057861.pdf",
    thumbnail: "certificates/UC-cfc5cf14-fdab-4c8c-9210-61d729057861.jpg",
    type: "image",
    platform: "udemy",
    category: "business-mgmt",
    tags: ["Leadership", "Executive Communications", "Public Speaking"]
  },
  {
    title: "Control Your Subconscious Mind: Neuroscience Secrets",
    institution: "Udemy",
    description: "Cognitive performance, mental models, focus optimization, and habit formation principles for high-stress engineering environments.",
    filename: "UC-255d9594-1070-4fa2-9b5c-7673b3ecc8b6.jpg",
    pdfFilename: "UC-255d9594-1070-4fa2-9b5c-7673b3ecc8b6.pdf",
    thumbnail: "certificates/UC-255d9594-1070-4fa2-9b5c-7673b3ecc8b6.jpg",
    type: "image",
    platform: "udemy",
    category: "business-mgmt",
    tags: ["Cognitive Science", "Mental Performance"]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { certificatesData };
}
