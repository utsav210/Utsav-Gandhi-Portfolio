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
    "Hyperparameter Tuning", "SVM", "Pandas", "NumPy", "SMOTE", "PCA", "EDA"
  ],
  "GenAI & Agentic AI": [
    "Large Language Models (LLMs)", "Agentic Orchestration", "LangChain", 
    "LangGraph", "CrewAI", "qLoRA", "PEFT", "Hugging Face", 
    "Transformers", "RAG", "Prompt Engineering", "Claude", "Mistral AI", "Groq API", "Tavily API", "OpenAI API", "Multi-Agent Systems"
  ],
  "Software Engineering": [
    "Python", "JavaScript", "TypeScript", "Data Structures & Algorithms (DSA)", 
    "React.js", "Next.js", "Django", "Node.js", "FastAPI", "Pydantic", "Tailwind CSS", "NextAuth.js", "Prisma", "Advanced OOP", "Metaclasses & Decorators"
  ],
  "Databases & Vector Stores": ["PostgreSQL", "MongoDB", "SQLite", "NeonDB", "Redis", "ChromaDB", "FAISS"],
  "Cloud & Developer Tools": ["AWS", "Docker", "CI/CD", "Git & GitHub", "VS Code", "Vercel", "Antigravity"],
  "Cybersecurity & AI Safety": ["OWASP Top 10", "VAPT", "SIEM (Wazuh)", "Prompt Injection Defense", "Guardrail Design", "CSP", "2FA & Identity", "Rate Limiting", "Cryptography"]
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
      "Built an AI-powered RAG pipeline-based Evidence Locker featuring a multi-tier OCR extraction pipeline mapped for Indian financial data (Devanagari, Gujarati, UPI IDs).",
      "Integrated an end-to-end RAG pipeline between the vector database and the LLM, enabling precise, beneficiary-specific applicable sections retrieval via semantic similarity search across 80+ indexed sections.",
      "Integrated Sandboxed Execution via LocalShellBackend and multi-layered LangChain guardrails to eliminate RCE and prevent prompt injections (OWASP Compliant).",
      "Maintained strict secure chain-of-custody by generating cryptographic SHA-256 hashes for every uploaded FIR/CSV to guarantee courtroom admissibility."
    ],
    github: "https://github.com/utsav210/cybertrace-ai",
    demo: "#"
  },
  {
    title: "ResearchMind - Multi-Agent AI Research System",
    role: "AI Engineer",
    timeline: "2024",
    outcome: "Orchestrated a team of specialized AI agents to autonomously research, scrape, draft reports, and provide critical self-feedback.",
    problem: "Manual deep-dive research is time-consuming and often misses real-time information or lacks a structured critical review.",
    solution: "Built a dual-interface (CLI & Streamlit) multi-agent system utilizing LangChain, Tavily API for real-time web search, and specialized Writer & Critic chains.",
    technologies: ["LangChain", "Streamlit", "Tavily API", "OpenAI API", "Python", "Multi-Agent Systems"],
    highlights: [
      "Designed a Search Agent for autonomous web querying and a Reader Agent for deep content extraction.",
      "Implemented Writer and Critic chains for drafting structured reports and iteratively scoring/improving them.",
      "Delivered a responsive Streamlit UI for seamless human-AI interaction during the research process."
    ],
    github: "https://github.com/utsav210/ResearchMind-Multi-Agent-Research-System",
    demo: "#"
  },
  {
    title: "WasteWise - Sustainable Food Redistribution",
    role: "Full Stack Developer",
    timeline: "2024",
    outcome: "Developed a comprehensive platform to bridge the gap between food donors and NGOs, promoting sustainability through composting.",
    problem: "Surplus food is wasted while communities face hunger, and rotting food contributes to environmental degradation.",
    solution: "Engineered a Next.js application with NextAuth.js for secure authentication, connecting donors with those in need and managing composting pipelines.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Prisma", "NextAuth.js", "Radix UI", "TypeScript"],
    highlights: [
      "Built a modern, accessible UI using Tailwind CSS and Radix UI (shadcn/ui).",
      "Implemented secure, role-based user authentication and session management via NextAuth.js.",
      "Designed relational schemas using Prisma ORM to effectively track food donations and composting metrics."
    ],
    github: "https://github.com/utsav210/WasteWise",
    demo: "#"
  },
  {
    title: "e-Learning Management System",
    role: "Backend & Security Engineer",
    timeline: "2023 - 2024",
    outcome: "Built a highly secure, feature-rich LMS supporting role-based access for admins, teachers, and students with robust assessment tools.",
    problem: "Educational platforms often lack strict security measures, making them vulnerable to unauthorized access and data breaches.",
    solution: "Developed a Django-based LMS integrating enterprise-grade security features, 2FA, and strict role-based data isolation.",
    technologies: ["Django", "Python", "Bootstrap 5", "jQuery", "Chart.js", "PostgreSQL"],
    highlights: [
      "Enforced strict table-specific authentication with OTP-based Two-Factor Authentication (2FA) and rate limiting.",
      "Implemented comprehensive security headers (CSP, HSTS, X-Frame-Options) and PBKDF2/Argon2 password hashing.",
      "Developed rich assessment tools and analytics dashboards using Chart.js for teachers to track student performance."
    ],
    github: "https://github.com/utsav210/e-Learning-Management-System",
    demo: "#"
  },
  {
    title: "LangChain Agents Lab",
    role: "AI Engineer",
    timeline: "2024",
    outcome: "Created a progressive laboratory of LangChain agentic patterns, from basic LCEL chains to production-ready middleware agents.",
    problem: "Understanding and implementing advanced agentic behaviors like self-reflection and human-in-the-loop workflows is highly complex.",
    solution: "Developed a modular architecture demonstrating RunnableParallel, custom tool calling, and human approval loops using Mistral AI.",
    technologies: ["LangChain", "Mistral AI", "LCEL", "Tavily API", "Python", "FAISS"],
    highlights: [
      "Engineered a full human-in-the-loop approval workflow with state persistence and middleware (@wrap_tool_call).",
      "Integrated real-time APIs (Tavily, OpenWeatherMap) mapped dynamically to LLM tool bindings.",
      "Demonstrated complex execution patterns including Passthrough Chains and multi-stage parallel generation."
    ],
    github: "https://github.com/utsav210/langchain-agents-lab",
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
