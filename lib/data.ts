/**
 * All site content lives here so it can be edited without touching components.
 *
 * Rule for this file: facts come from Mekhluqat's résumé. Anything not yet
 * confirmed is written as a `TODO(mekhluqat): ...` string. TODO strings render
 * as a visible note in `npm run dev` and are hidden in production builds
 * (see `isTodo`). Placeholder links and dates are marked `// PLACEHOLDER`.
 */

export const TODO_PREFIX = "TODO(mekhluqat):";
export const isTodo = (value: string | undefined | null) =>
  !value || value.startsWith(TODO_PREFIX);

export const site = {
  url: "https://mekhluqat.vercel.app", // PLACEHOLDER: the deployed domain
  name: "Mekhluqat Abdulwehab",
  firstName: "Mekhluqat",
  lastName: "Abdulwehab",
  initials: "MA",
  role: "Data Science · Machine Learning",
  title: "Mekhluqat Abdulwehab — Data Science & Machine Learning",
  description:
    "Mekhluqat Abdulwehab is a Computer Science and Engineering student in Ethiopia specializing in Data Science, building end-to-end machine learning pipelines, RAG chatbots and interactive dashboards with Python, Pandas, Scikit-learn and Streamlit.",
  availability: "Open to data science internships",
  location: "Addis Ababa, Ethiopia",
  timeZone: "Africa/Addis_Ababa",
  timeZoneLabel: "GMT+3",
  // Generated from this file (app/cv.md). Swap for a hosted PDF when there is one.
  resumeUrl: "/cv.md",
  email: "mekhluqat@gmail.com",
} as const;

export type Social = {
  label: string;
  handle: string;
  href: string;
  icon: "email" | "linkedin" | "github" | "leetcode" | "phone";
};

export const socials: Social[] = [
  { label: "Email", handle: "mekhluqat@gmail.com", href: "mailto:mekhluqat@gmail.com", icon: "email" },
  // PLACEHOLDER: the three profile links below need the real handles.
  { label: "GitHub", handle: "mekhluqat", href: "https://github.com/mekhluqat", icon: "github" },
  { label: "LinkedIn", handle: "mekhluqat", href: "https://www.linkedin.com/in/mekhluqat", icon: "linkedin" },
  { label: "LeetCode", handle: "mekhluqat", href: "https://leetcode.com/u/mekhluqat", icon: "leetcode" },
  { label: "Phone", handle: "+251 960 394 156", href: "tel:+251960394156", icon: "phone" },
];

export const about = {
  paragraphs: [
    "I'm Mekhluqat, a 5th-year Computer Science and Engineering student at Adama Science and Technology University, specializing in Data Science. I like the whole path from a messy dataset to a model someone can actually use: cleaning, exploring, engineering features, modelling, and shipping it behind a dashboard or a chat interface.",
    "Through 10x Academy's KAIM program (sponsored by Mastercard) I built end-to-end ML pipelines and deployed projects including a RAG-based financial chatbot and interactive Streamlit dashboards. Before that I picked up full-stack experience building an Event Management System at SSGI and an Odoo-based School Management System with my university team.",
    "Today I also volunteer as a Data Science peer mentor, curating datasets and organizing learning resources on GitHub for students who are a few steps behind me on the same road.",
  ],
};

export const highlights = [
  "10x Academy KAIM graduate · Mastercard",
  "Ranked 11th · CSEC ASTU × Zindi",
  "RAG financial chatbot",
  "Data Science peer mentor",
  "Full-stack intern at SSGI",
  "ALX × IBM SkillsBuild",
];

/** Headline numbers for the About section. */
export const stats = [
  { value: "11th", label: "Zindi bootcamp ranking" },
  { value: "7+", label: "Data & ML projects" },
  { value: "3–5", label: "Students mentored" },
  { value: "6", label: "Programs & certificates" },
];

/* ------------------------------------------------------------------ */
/* Projects                                                           */
/* ------------------------------------------------------------------ */

export type ProjectLink = { label: string; href: string; kind: "live" | "code" };

/** Decorative chart drawn in place of a screenshot (components/ProjectVisual.tsx). */
export type Visual = "line" | "bars" | "scatter" | "network" | "map";

export type CaseStudy = {
  slug: string;
  title: string;
  /** One-line outcome shown on the card. */
  summary: string;
  description: string;
  /** Screenshot; when missing a generated chart is shown instead. */
  image?: { src: string; width: number; height: number; alt: string };
  visual: Visual;
  role: string;
  context: string;
  stack: string[];
  links: ProjectLink[];
  sections: {
    problem: string[];
    role: string[];
    architecture: string[];
    challenges: string[];
    outcome: string[];
  };
};

// PLACEHOLDER: every "Source" link points at the GitHub profile until the repo URLs are added.
const GITHUB = "https://github.com/mekhluqat";

export const caseStudies: CaseStudy[] = [
  {
    slug: "intelligent-complaint-analysis",
    title: "Intelligent Complaint Analysis",
    summary:
      "A RAG chatbot that lets financial-services teams ask plain-English questions of thousands of customer complaints.",
    description:
      "An NLP and retrieval-augmented generation system for financial services. Customer complaints are cleaned, classified and embedded into a vector database, so product and support teams can surface patterns and ask questions in natural language instead of reading complaints one by one.",
    visual: "network",
    role: "Data Science Trainee (individual project)",
    context: "10x Academy · KAIM",
    stack: ["Python", "Pandas", "Gradio", "Streamlit"],
    links: [{ label: "Source", href: GITHUB, kind: "code" }],
    sections: {
      problem: [
        "Financial-services companies receive large volumes of unstructured complaints. The patterns that matter (which product, which issue, how often) are buried in free text that nobody has time to read.",
      ],
      role: ["Built the full pipeline end to end as part of the KAIM program: EDA, preprocessing, embeddings, the vector store and the chat interface."],
      architecture: [
        "EDA → text cleaning and chunking → embeddings → vector database → retrieval-augmented generation, served through a Gradio / Streamlit UI.",
        "Classification was applied alongside retrieval to group complaints by product and issue type.",
        "TODO(mekhluqat): which embedding model, vector DB (FAISS, Chroma…) and LLM you used.",
      ],
      challenges: ["TODO(mekhluqat): the hardest part, e.g. chunk size, retrieval quality or evaluating answers."],
      outcome: ["TODO(mekhluqat): real outcomes only, e.g. dataset size, retrieval accuracy, or a demo link."],
    },
  },
  {
    slug: "credit-risk-probability-model",
    title: "Credit Risk Probability Model",
    summary: "Predicts a customer's probability of loan default from financial and demographic data.",
    description:
      "A credit-scoring model that estimates the probability that a customer will default on a loan, built from customer financial and demographic data with careful cleaning, feature engineering and model comparison.",
    visual: "bars",
    role: "Data Science Trainee (individual project)",
    context: "10x Academy · KAIM",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    links: [{ label: "Source", href: GITHUB, kind: "code" }],
    sections: {
      problem: [
        "Lenders need a defensible way to estimate default risk before approving credit. The goal was a model that turns raw customer data into a probability, not just a yes/no.",
      ],
      role: ["Owned the pipeline from raw data to evaluated model."],
      architecture: [
        "Data cleaning and feature engineering in Pandas and NumPy, then supervised models trained and compared in Scikit-learn.",
        "TODO(mekhluqat): which models you compared and which metric (ROC-AUC, F1…) you optimized for.",
      ],
      challenges: ["TODO(mekhluqat): e.g. class imbalance, building a proxy target, or feature leakage."],
      outcome: ["TODO(mekhluqat): final model and score."],
    },
  },
  {
    slug: "fraud-detection",
    title: "Fraud Detection",
    summary: "Flags fraudulent e-commerce and bank transactions with machine learning.",
    description:
      "A fraud-detection project covering both e-commerce and bank transaction data, using Python and machine-learning techniques to separate fraudulent activity from the overwhelming majority of legitimate transactions.",
    visual: "scatter",
    role: "Data Science Trainee (individual project)",
    context: "10x Academy · KAIM",
    stack: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    links: [{ label: "Source", href: GITHUB, kind: "code" }],
    sections: {
      problem: [
        "Fraud is rare, costly and constantly changing. Models have to catch it without drowning analysts in false alarms on legitimate customers.",
      ],
      role: ["Explored both datasets, engineered features and trained the classifiers."],
      architecture: [
        "Analysis and feature engineering in Jupyter with Pandas, then classification models in Scikit-learn evaluated on imbalanced data.",
        "TODO(mekhluqat): resampling approach (SMOTE, class weights…) and explainability (SHAP?).",
      ],
      challenges: ["TODO(mekhluqat): a real challenge from this project."],
      outcome: ["TODO(mekhluqat): precision / recall or another real result."],
    },
  },
  {
    slug: "smart-women-safety-system",
    title: "Smart Women Safety System",
    summary: "A Flask-based AI backend that powers real-time safety alerts from IoT sensors.",
    description:
      "A safety system that pairs wearable IoT sensors with an AI backend. The Flask service receives sensor events, decides when a situation looks dangerous, and triggers real-time alerts.",
    visual: "map",
    role: "Backend & AI developer (team of 2)",
    context: "Team project",
    stack: ["Python", "Flask"],
    links: [{ label: "Source", href: GITHUB, kind: "code" }],
    sections: {
      problem: ["Help someone in danger get help quickly, even when they can't reach for their phone."],
      role: [
        "Built the Flask-based AI backend that powers the real-time alerts, while a teammate handled the IoT sensor integration.",
      ],
      architecture: [
        "IoT sensors stream readings to a Flask API; the backend evaluates them and dispatches alerts in real time.",
        "TODO(mekhluqat): what model or rules decide an alert, and how alerts are delivered (SMS, push…).",
      ],
      challenges: ["TODO(mekhluqat): e.g. latency, false alarms, or integrating with the hardware."],
      outcome: ["TODO(mekhluqat): demo, event, or recognition this project received."],
    },
  },
];

export type MiniProject = { name: string; blurb: string; href: string };

export const moreProjects: MiniProject[] = [
  { name: "Price Prediction", blurb: "Stock moves from news sentiment and technical indicators.", href: GITHUB },
  { name: "Customer Experience Analysis", blurb: "Google Play reviews of Ethiopian fintech apps.", href: GITHUB },
  { name: "Chicago Crime Analysis", blurb: "Forecasting crime type and location from public data.", href: GITHUB },
  { name: "Solar Energy Dashboard", blurb: "Streamlit dashboard for solar irradiance data.", href: GITHUB },
  { name: "Event Management System", blurb: "Full-stack app built during the SSGI internship.", href: GITHUB },
  { name: "School Management System", blurb: "Odoo modules: access control, validation, tests.", href: GITHUB },
  { name: "InsightHive", blurb: "Curated datasets and resources for mentees.", href: GITHUB },
];

export const githubProfile = GITHUB;

/* ------------------------------------------------------------------ */
/* Experience                                                         */
/* ------------------------------------------------------------------ */

export type Experience = {
  org: string;
  role: string;
  date: string;
  location: string;
  type: string;
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    org: "10x Academy",
    role: "Data Science Trainee",
    date: "2025",
    location: "Remote",
    type: "KAIM Program · Mastercard",
    bullets: [
      "Completed an intensive, project-based Data Science program covering the full pipeline: data cleaning, EDA, feature engineering and model building.",
      "Built and deployed real-world projects including a solar energy dashboard (Streamlit), a price prediction pipeline and a RAG-based financial chatbot (EDA → embeddings → vector DB → Gradio/Streamlit UI).",
      "Practiced Git/GitHub workflows, CI/CD and collaborative development throughout the program.",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Gradio", "RAG", "CI/CD"],
  },
  {
    org: "University peer group",
    role: "Data Science Peer Mentor",
    date: "Ongoing",
    location: "Remote",
    type: "Volunteer",
    bullets: [
      "Guide 3–5 Data Science students from Bahir Dar University with their coursework and projects.",
      "Curate datasets for practice and organize InsightHive, a shared GitHub repository that structures their learning resources and project work.",
      "Give informal guidance on problem-solving; the group grew as students asked to join after seeing the value.",
    ],
    tech: ["Mentoring", "Dataset Curation", "GitHub"],
  },
  {
    org: "CSEC ASTU × Zindi",
    role: "Data Science Competitor",
    date: "2024", // PLACEHOLDER: confirm the year
    location: "Adama, Ethiopia",
    type: "Competition · Rank 11th",
    bullets: [
      "Competed in a data science / ML bootcamp competition organized by CSEC ASTU on the Zindi platform.",
      "Applied data preprocessing, model selection and evaluation under competition constraints to place 11th.",
    ],
    tech: ["Python", "Scikit-learn", "Model Evaluation"],
  },
  {
    org: "SSGI",
    role: "Full-Stack Developer Intern",
    date: "2024", // PLACEHOLDER: confirm the dates
    location: "Addis Ababa, Ethiopia",
    type: "Internship",
    bullets: [
      "Built an Event Management System end to end, from the database to the user interface.",
      "TODO(mekhluqat): the stack you used at SSGI and what the system does for its users.",
    ],
    tech: ["Full-Stack", "Databases", "Web Development"],
  },
];

/* ------------------------------------------------------------------ */
/* How I work + recruiter FAQ                                         */
/* ------------------------------------------------------------------ */

export const workProcess = [
  {
    title: "Frame the question",
    body: "Pin down the decision the analysis has to support before touching the data.",
  },
  {
    title: "Clean & explore",
    body: "Pandas and Jupyter to clean, profile and visualize until the data's story is clear.",
  },
  {
    title: "Model & evaluate",
    body: "Engineer features, compare models in Scikit-learn and pick metrics that match the real cost of errors.",
  },
  {
    title: "Ship & explain",
    body: "Put results in people's hands with Streamlit dashboards, Gradio apps or a chat interface.",
  },
];

export const faq = [
  {
    q: "Are you available?",
    a: "Yes. I'm open to data science and machine learning internships and collaborations.",
    todo: "TODO(mekhluqat): internship, part-time or full-time? Remote or on-site?",
  },
  {
    q: "What time zone are you in?",
    a: "Ethiopia, GMT+3 (no daylight saving). My working day overlaps the full European working day.",
  },
  {
    q: "What's your strongest stack?",
    a: "Python for data: Pandas, NumPy and Scikit-learn for analysis and modelling, Streamlit and Gradio for shipping, plus full-stack experience with Django, Flask, Next.js and Odoo.",
  },
  {
    q: "Have you built anything with LLMs?",
    a: "Yes. At 10x Academy I built a RAG-based financial chatbot: embeddings, a vector database and a Gradio/Streamlit interface on top of customer complaint data.",
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                             */
/* ------------------------------------------------------------------ */

export type Skill = {
  name: string;
  /** File in /public/icons. Without one, a monogram is drawn. */
  icon?: string;
  /** Monochrome icon that needs inverting in dark mode. */
  mono?: boolean;
};

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "SQL", icon: "mysql" },
      { name: "Java", icon: "openjdk" },
      { name: "C++", icon: "cplusplus" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css" },
      { name: "Prolog" },
      { name: "Assembly" },
    ],
  },
  {
    title: "Data & ML",
    skills: [
      { name: "Pandas", icon: "pandas", mono: true },
      { name: "NumPy", icon: "numpy" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "Jupyter", icon: "jupyter" },
    ],
  },
  {
    title: "AI & NLP",
    skills: [{ name: "RAG" }, { name: "Embeddings" }, { name: "Vector DBs" }, { name: "NLP" }],
  },
  {
    title: "Apps & dashboards",
    skills: [
      { name: "Streamlit", icon: "streamlit" },
      { name: "Gradio" },
    ],
  },
  {
    title: "Web & backend",
    skills: [
      { name: "Django", icon: "django" },
      { name: "Flask", icon: "flask", mono: true },
      { name: "Next.js", icon: "nextjs", mono: true },
      { name: "Odoo", icon: "odoo", mono: true },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github", mono: true },
      { name: "Docker", icon: "docker" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Education                                                          */
/* ------------------------------------------------------------------ */

export type Education = {
  school: string;
  degree: string;
  date: string;
  kind: "degree" | "program";
  description: string;
  tags: string[];
};

export const education: Education[] = [
  {
    school: "Adama Science and Technology University (ASTU)",
    degree: "B.Sc. Computer Science and Engineering",
    date: "2022 – 2027",
    kind: "degree",
    description:
      "5th-year student specializing in Data Science, with a foundation in algorithms, databases, artificial intelligence and software engineering.",
    tags: ["Data Science", "Machine Learning", "Algorithms", "Databases"],
  },
  {
    school: "10x Academy, sponsored by Mastercard",
    degree: "Data Science (KAIM Program)",
    date: "2025",
    kind: "program",
    description: "Intensive, project-based training across the full ML pipeline, from EDA to deployed apps. Completed.",
    tags: ["Machine Learning", "RAG", "MLOps"],
  },
  {
    school: "ALX × United Nations",
    degree: "Data Analytics",
    date: "In progress",
    kind: "program",
    description: "Data analysis and visualization through the ALX–UN Data Science program.",
    tags: ["Analytics", "Visualization"],
  },
  {
    school: "Udacity",
    degree: "Data Science",
    date: "In progress",
    kind: "program",
    description: "Continuing data science training on top of the KAIM foundations.",
    tags: ["Data Science"],
  },
  {
    school: "Udemy",
    degree: "Generative AI",
    date: "In progress",
    kind: "program",
    description: "Large language models, prompting and building applications with generative AI.",
    tags: ["LLMs", "GenAI"],
  },
  {
    school: "SkillsBuild (ALX × IBM)",
    degree: "AI Literacy & Data Literacy",
    date: "Completed",
    kind: "program",
    description: "Foundations of artificial intelligence and working responsibly with data.",
    tags: ["AI", "Data Literacy"],
  },
  {
    school: "Udacity",
    degree: "Fundamentals of Programming",
    date: "Completed",
    kind: "program",
    description: "Programming fundamentals nanodegree: problem solving, data structures and clean code.",
    tags: ["Programming"],
  },
];

/* ------------------------------------------------------------------ */
/* Awards & certificates                                              */
/* ------------------------------------------------------------------ */

export type CertificateCategory = "Competition" | "Data & AI" | "Programming";

export type Certificate = {
  title: string;
  issuer: string;
  category: CertificateCategory;
  /** Scan of the certificate; a placeholder card is shown until one is added to /public. */
  image?: { src: string; width: number; height: number };
  featured?: boolean;
};

export const certificates: Certificate[] = [
  { title: "Data Science Bootcamp · Rank 11th", issuer: "CSEC ASTU × Zindi", category: "Competition", featured: true },
  { title: "AI Mastery Training Program", issuer: "10 Academy · KAIM", category: "Data & AI", featured: true },
  { title: "KAIM Program Details", issuer: "10 Academy · Mastercard", category: "Data & AI" },
  { title: "IBM SkillsBuild Data Literacy", issuer: "ALX × IBM", category: "Data & AI" },
  { title: "IBM SkillsBuild AI Literacy", issuer: "ALX × IBM", category: "Data & AI" },
  { title: "Fundamentals of Programming Nanodegree", issuer: "Udacity", category: "Programming" },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                         */
/* ------------------------------------------------------------------ */

export const sections = [
  { id: "work", label: "Work", key: "w" },
  { id: "experience", label: "Experience", key: "e" },
  { id: "skills", label: "Skills", key: "s" },
  { id: "education", label: "Education", key: "d" },
  { id: "awards", label: "Certificates", key: "a" },
  { id: "contact", label: "Contact", key: "c" },
] as const;
