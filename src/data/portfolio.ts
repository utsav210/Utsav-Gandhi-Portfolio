export const personalInfo = {
  name: "Utsav Gandhi",
  headline: "AI Engineer & Full Stack Developer",
  positioning: "I build intelligent, production-oriented systems that turn complex problems into practical software.",
  email: "utsavgandhi273@gmail.com",
  phone: "+91 96627 46292",
  location: "Ahmedabad, Gujarat, India",
  linkedin: "https://linkedin.com/in/utsavgandhi210",
  github: "https://github.com/utsav210",
  resume: `${import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '')}/Utsav_Gandhi_AI_ML_Engineer_Resume.pdf`
};

export const skills = {
  "AI & Machine Learning": [
    "TensorFlow", "scikit-learn", "XGBoost", "AdaBoost", "Gradient Boosting",
    "Random Forest", "Bagging & Stacking", "K-Means", "DBSCAN", 
    "Hyperparameter Tuning", "SVM", "Pandas", "NumPy"
  ],
  "GenAI & Agentic AI": [
    "Large Language Models (LLMs)", "Agentic Orchestration", "LangChain", 
    "LangGraph", "CrewAI", "qLoRA", "PEFT", "Hugging Face", 
    "Transformers", "RAG", "Prompt Engineering", "Claude", "Mistral AI", "Groq API"
  ],
  "Software Engineering": [
    "Python", "JavaScript", "TypeScript", "Data Structures & Algorithms (DSA)", 
    "React.js", "Django", "Node.js", "FastAPI", "Pydantic"
  ],
  "Databases & Vector Stores": ["PostgreSQL", "MongoDB", "SQLite", "Redis", "ChromaDB", "FAISS"],
  "Cloud & Developer Tools": ["AWS", "Docker", "CI/CD", "Git & GitHub", "VS Code", "Vercel", "Antigravity"],
  "Cybersecurity & AI Safety": ["OWASP Top 10", "VAPT", "SIEM (Wazuh)", "Prompt Injection Defense", "Guardrail Design"]
};

export const projects = [
  {
    title: "CyberTrace AI - Advanced Financial Fraud & Intelligence Platform",
    role: "Full Stack AI Engineer",
    timeline: "Jul 2026 – Present",
    outcome: "Built an enterprise-grade investigation portal for Law Enforcement Agencies (LEAs) featuring deep graph analytics, an AI-powered evidence locker, and context-aware RAG querying.",
    problem: "LEAs struggle with manual forensics, unstructured financial data across multiple languages, and disconnected OSINT threat intelligence in fraud cases.",
    solution: "Engineered a platform with a multi-tier OCR pipeline (PyMuPDF/Tesseract/YOLOv8), iterative graph analytics for cycle detection, and a DeepAgents sandboxed execution environment.",
    technologies: ["React 18", "TypeScript", "Django DRF", "LangChain", "LangGraph", "DeepAgents", "RAG", "YOLOv8", "ChromaDB", "Zustand"],
    highlights: [
      "Developed deep graph analytics using iterative Directed DFS for cycle detection and layering path tracing for mule account classification.",
      "Built an AI-Powered Evidence Locker with a multi-tier OCR extraction pipeline mapped for Indian financial data (Devanagari, Gujarati, UPI IDs).",
      "Integrated Sandboxed Execution via LocalShellBackend and multi-layered LangChain guardrails to eliminate RCE and prevent prompt injections (OWASP Compliant).",
      "Maintained strict secure chain-of-custody by generating cryptographic SHA-256 hashes for every uploaded FIR/CSV to guarantee courtroom admissibility."
    ],
    github: "https://github.com/utsav210/cybertrace-ai",
    demo: "#"
  },
  {
    title: "Agentic AI with LangGraph",
    role: "AI Engineer",
    timeline: "AY 2025–2026",
    outcome: "Orchestrated complex, multi-pattern agent workflows with human-in-the-loop oversight to automate intelligent routing.",
    problem: "Static LLM applications lack the ability to follow complex reasoning paths, pause for human approval, or route queries accurately based on intent.",
    solution: "Implemented 5 distinct LangGraph patterns including conditional routing, self-reflection loops, and external tool calling, backed by state persistence.",
    technologies: ["LangGraph", "LangChain", "Groq", "Mistral AI", "FAISS", "Streamlit"],
    highlights: [
      "Automated a human-in-the-loop approval flow using LangGraph interrupts and MemorySaver.",
      "Enabled an intent-classification node that routes queries across 3 domain-specific FAISS retrievers.",
      "Integrated Tavily search for self-reflection loops and dynamic tool calling."
    ],
    github: "https://github.com/utsav210",
    demo: "#"
  },
  {
    title: "RAG-Based AI Book Assistant",
    role: "AI Engineer",
    timeline: "Jul 2026 – Aug 2026",
    outcome: "Built a highly accurate document Q&A pipeline that strictly grounds responses in source material to minimize hallucinations.",
    problem: "Standard LLMs hallucinate when asked about specific, private document contents without a proper retrieval mechanism.",
    solution: "Created a PDF ingestion and retrieval pipeline using overlapping-context chunking and MMR to deliver context-aware answers.",
    technologies: ["LangChain", "Mistral AI", "ChromaDB", "PyMuPDF", "Streamlit"],
    highlights: [
      "Grounded generated answers strictly in source documents using MMR (Maximal Marginal Relevance) retrieval.",
      "Achieved 98% response accuracy by reducing hallucinated responses.",
      "Shipped a Streamlit front-end enabling PDF upload and natural-language Q&A."
    ],
    github: "https://github.com/utsav210",
    demo: "#"
  }
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "The Special Character",
    location: "Ahmedabad, India",
    timeline: "Feb 2025 – May 2025",
    points: [
      "Engineered both front-end (Next.js 15, React 19) and back-end (PostgreSQL, MongoDB, NeonDB with Redis) components of a production web app.",
      "Cut API latency by 40% and reduced primary database load by 60%.",
      "Accelerated page-load speed by 30% across devices through responsive UI improvements."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "Innvonix Tech Solutions Pvt. Ltd.",
    location: "Ahmedabad, India",
    timeline: "Jul 2024 – Aug 2024",
    points: [
      "Trained and evaluated ML models (credit card fraud detection, home price prediction) reaching 86–90% accuracy.",
      "Benchmarked model performance using F1-score (0.82), precision, recall, and MSE/MAE.",
      "Reduced data-preprocessing time by 80% by engineering feature-extraction pipelines in Python/Pandas."
    ]
  }
];

export const services = [
  {
    title: "AI & LLM Integration",
    description: "I build robust pipelines to integrate large language models into existing applications, ensuring performance and safety.",
    technologies: ["LangChain", "OpenAI", "Mistral", "FastAPI"]
  },
  {
    title: "Agentic Workflows",
    description: "Designing intelligent multi-agent systems that plan, route, and execute complex, multi-step tasks autonomously.",
    technologies: ["LangGraph", "CrewAI", "Python"]
  },
  {
    title: "Full-Stack Web Apps",
    description: "End-to-end development of modern, responsive web applications with a focus on performance and clean architecture.",
    technologies: ["Next.js", "React", "Django", "TypeScript"]
  }
];

export const education = [
  {
    degree: "Master of Engineering (M.E.) - Cyber Security",
    institution: "Gujarat Technological University",
    timeline: "Jul 2025 – Jul 2027",
    details: "CGPA: 9.30 / 10 | Dissertation: CIRRUS - A Cross-Layer Defense Framework for Multi-Agent LLM Pipelines"
  },
  {
    degree: "Bachelor of Engineering (B.E.) - Information Technology (Data Science)",
    institution: "SAL Engineering and Technical Institute",
    timeline: "Aug 2021 – Jun 2025",
    details: "CGPA: 8.96 / 10"
  }
];
