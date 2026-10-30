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
  role: "Data Scientist · ML Engineer",
  title: "Mekhluqat Abdulwehab — Data Scientist & ML Engineer",
  description:
    "Mekhluqat Abdulwehab is a data scientist and machine learning engineer in Ethiopia who builds end-to-end ML systems: data pipelines, predictive models, NLP and RAG applications, deployed behind Streamlit, Gradio and Flask.",
  availability: "Open to Data Science & ML roles",
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
    "I'm Mekhluqat, a data scientist and machine learning engineer. I work across the whole ML lifecycle: framing the problem, cleaning and exploring the data, engineering features, training and evaluating models, and deploying them where people can use them, whether that's a dashboard, an API or a chat interface.",
    "Through 10x Academy's KAIM program (sponsored by Mastercard) I shipped production-style ML projects: credit-risk scoring, fraud detection, price prediction and a RAG-based financial chatbot, using Git, CI/CD and code review along the way. A full-stack background (an Event Management System at SSGI, an Odoo School Management System) means I can also build the software around a model, not just the notebook.",
    "I'm finishing a B.Sc. in Computer Science and Engineering at ASTU, specializing in Data Science, and I volunteer as a peer mentor, curating datasets and learning resources for students starting out in the field.",
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

/** What I build: the problem spaces recruiters scan for first. */
export const focusAreas = [
  {
    title: "Predictive modelling",
    body: "Classification and regression for real decisions: credit risk, fraud, prices and crime patterns.",
    tags: ["Scikit-learn", "Feature engineering", "Imbalanced data"],
  },
  {
    title: "NLP & LLM applications",
    body: "Retrieval-augmented generation, text classification and sentiment analysis over messy, real-world text.",
    tags: ["RAG", "Embeddings", "Vector DBs"],
  },
  {
    title: "ML pipelines & deployment",
    body: "Reproducible pipelines from raw data to a served model, with Git, CI/CD and Docker.",
    tags: ["Flask", "Docker", "CI/CD"],
  },
  {
    title: "Analytics & data apps",
    body: "EDA and interactive dashboards that let non-technical teams explore the results themselves.",
    tags: ["Pandas", "Streamlit", "Gradio"],
  },
];

/** Headline numbers for the About section. */
export const stats = [
  { value: "11th", label: "Zindi bootcamp ranking" },
  { value: "8", label: "Data & ML projects" },
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
  /** ML task type, e.g. "Binary classification". */
  task: string;
  dataset: string;
  /** Stages drawn as a pipeline diagram on the case study. */
  pipeline: string[];
  /** Headline results. TODO values are hidden in production. */
  metrics: { label: string; value: string }[];
  /** Model card fields for the case study. */
  model: { approach: string; evaluation: string; limitations: string };
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
    task: "Retrieval-augmented generation · text classification",
    dataset: "Financial-services customer complaints (free text)",
    pipeline: ["Complaint text", "Clean & chunk", "Embeddings", "Vector store", "Retriever + LLM", "Chat UI"],
    metrics: [
      { label: "Complaints indexed", value: "TODO(mekhluqat): count" },
      { label: "Retrieval quality", value: "TODO(mekhluqat): e.g. hit rate @5" },
    ],
    model: {
      approach: "Semantic search over embedded complaint chunks, with retrieved context passed to an LLM to answer questions in plain English.",
      evaluation: "TODO(mekhluqat): how answers were evaluated (manual review table, RAGAS, …).",
      limitations: "Answers are only as good as retrieval; questions outside the complaint data can't be answered reliably.",
    },
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
    task: "Binary classification · probability of default",
    dataset: "Customer financial & demographic records",
    pipeline: ["Raw records", "Cleaning", "Feature engineering", "Model training", "Evaluation", "Risk score"],
    metrics: [
      { label: "ROC-AUC", value: "TODO(mekhluqat): score" },
      { label: "Best model", value: "TODO(mekhluqat): e.g. Gradient Boosting" },
    ],
    model: {
      approach: "Supervised classifiers trained on engineered features, outputting a calibrated probability of default rather than a hard label.",
      evaluation: "TODO(mekhluqat): metrics and validation strategy (train/test split, cross-validation).",
      limitations: "Credit models can encode historical bias; features and outcomes need fairness checks before real lending decisions.",
    },
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
    task: "Imbalanced binary classification",
    dataset: "E-commerce & bank card transactions",
    pipeline: ["Transactions", "EDA", "Feature engineering", "Imbalance handling", "Classifiers", "Evaluation"],
    metrics: [
      { label: "PR-AUC", value: "TODO(mekhluqat): score" },
      { label: "Recall on fraud", value: "TODO(mekhluqat): score" },
    ],
    model: {
      approach: "Classifiers trained on engineered transaction features, with the class imbalance handled explicitly and precision/recall traded off for the business cost of errors.",
      evaluation: "TODO(mekhluqat): metrics used (PR-AUC, F1, confusion matrix) and results.",
      limitations: "Fraud patterns drift over time, so a deployed model would need monitoring and regular retraining.",
    },
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
    slug: "price-prediction",
    title: "Price Prediction",
    summary: "Links financial news sentiment and technical indicators to stock price movements.",
    description:
      "An analysis of how financial news relates to stock price movements. News headlines are scored for sentiment and combined with technical indicators computed from price history, to test whether sentiment carries a predictive signal.",
    visual: "line",
    task: "Sentiment analysis · time-series features",
    dataset: "Financial news headlines & daily stock prices",
    pipeline: ["News + prices", "Sentiment scoring", "Technical indicators", "Date alignment", "Correlation & modelling"],
    metrics: [{ label: "Sentiment–return correlation", value: "TODO(mekhluqat): value" }],
    model: {
      approach: "Headline sentiment scores aligned to trading days and analysed alongside technical indicators such as moving averages and RSI.",
      evaluation: "TODO(mekhluqat): correlation results or model metrics.",
      limitations: "Correlation is not causation, and markets react to far more than headlines.",
    },
    role: "Data Science Trainee (individual project)",
    context: "10x Academy · KAIM",
    stack: ["Python", "Pandas", "NumPy", "Jupyter"],
    links: [{ label: "Source", href: GITHUB, kind: "code" }],
    sections: {
      problem: ["Can the tone of financial news help explain, or anticipate, how a stock's price moves?"],
      role: ["Owned the analysis end to end: data collection, sentiment scoring, indicators and findings."],
      architecture: [
        "Sentiment scores computed for each headline, aggregated per day and aligned with price data; technical indicators calculated from the price series.",
        "TODO(mekhluqat): sentiment library (TextBlob, VADER, FinBERT?) and indicator library (TA-Lib, pandas-ta?).",
      ],
      challenges: ["TODO(mekhluqat): e.g. aligning news timestamps with trading days."],
      outcome: ["TODO(mekhluqat): what you found."],
    },
  },
  {
    slug: "smart-women-safety-system",
    title: "Smart Women Safety System",
    summary: "A Flask-based AI backend that powers real-time safety alerts from IoT sensors.",
    description:
      "A safety system that pairs wearable IoT sensors with an AI backend. The Flask service receives sensor events, decides when a situation looks dangerous, and triggers real-time alerts.",
    visual: "map",
    task: "Real-time event detection",
    dataset: "Streaming IoT sensor readings",
    pipeline: ["IoT sensors", "Flask API", "Detection logic", "Real-time alert"],
    metrics: [{ label: "Alert latency", value: "TODO(mekhluqat): seconds" }],
    model: {
      approach: "A Flask service receives sensor events and decides when a reading pattern looks dangerous, then dispatches an alert.",
      evaluation: "TODO(mekhluqat): how the detection was tested.",
      limitations: "False alarms and missed events both carry real cost; thresholds need testing with real-world data.",
    },
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
    title: "Frame the problem",
    body: "Start from the decision the model supports, then pick a metric that reflects the real cost of being wrong.",
  },
  {
    title: "Data first",
    body: "Clean, profile and visualize before modelling. Most of the gains, and most of the bugs, live in the data.",
  },
  {
    title: "Model & evaluate honestly",
    body: "Strong baselines, careful validation and error analysis, compared on held-out data rather than a lucky split.",
  },
  {
    title: "Ship & iterate",
    body: "Put the model behind a dashboard, API or chat UI, with version control and CI so it can keep improving.",
  },
];

export const faq = [
  {
    q: "Are you available?",
    a: "Yes. I'm open to Data Scientist, ML Engineer and AI Engineer roles, internships and collaborations.",
    todo: "TODO(mekhluqat): internship, part-time or full-time? Remote or on-site?",
  },
  {
    q: "What time zone are you in?",
    a: "Ethiopia, GMT+3 (no daylight saving). My working day overlaps the full European working day.",
  },
  {
    q: "Data scientist or ML engineer?",
    a: "Both. I'm strongest where they meet: taking a problem from analysis and modelling through to a deployed, usable application.",
  },
  {
    q: "What's your strongest stack?",
    a: "Python: Pandas, NumPy and Scikit-learn for analysis and modelling; RAG with embeddings and vector databases for NLP; Streamlit, Gradio, Flask and Docker for shipping.",
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
  /** File in /public/icons. Without one (concepts like "RAG"), a dot is drawn. */
  icon?: string;
  /** Monochrome icon that needs inverting in dark mode. */
  mono?: boolean;
};

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Data wrangling & analysis",
    skills: [
      { name: "Python", icon: "python" },
      { name: "SQL", icon: "mysql" },
      { name: "Pandas", icon: "pandas", mono: true },
      { name: "NumPy", icon: "numpy" },
      { name: "Jupyter", icon: "jupyter" },
      { name: "EDA" },
    ],
  },
  {
    title: "Machine learning",
    skills: [
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "Classification" },
      { name: "Regression" },
      { name: "Feature engineering" },
      { name: "Model evaluation" },
      { name: "Imbalanced data" },
    ],
  },
  {
    title: "NLP & LLMs",
    skills: [
      { name: "RAG" },
      { name: "Embeddings" },
      { name: "Vector DBs" },
      { name: "Text classification" },
      { name: "Sentiment analysis" },
    ],
  },
  {
    title: "Deployment & MLOps",
    skills: [
      { name: "Streamlit", icon: "streamlit" },
      { name: "Gradio" },
      { name: "Flask", icon: "flask", mono: true },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github", mono: true },
      { name: "CI/CD" },
    ],
  },
  {
    title: "Software engineering",
    skills: [
      { name: "Django", icon: "django" },
      { name: "Next.js", icon: "nextjs", mono: true },
      { name: "Odoo", icon: "odoo", mono: true },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    title: "CS foundations",
    skills: [
      { name: "Java", icon: "openjdk" },
      { name: "C++", icon: "cplusplus" },
      { name: "Prolog" },
      { name: "Assembly" },
    ],
  },
];

/** What I'm learning right now, shown under Skills. */
export const nowLearning = [
  { title: "Generative AI", detail: "LLM applications and prompting · Udemy" },
  { title: "Data Science", detail: "Advanced modelling · Udacity" },
  { title: "Data Analytics", detail: "ALX × United Nations program" },
  { title: "Mentoring", detail: "Running InsightHive for 3–5 students" },
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
