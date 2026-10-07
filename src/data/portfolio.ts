export const personalInfo = {
  name: "Utsav Gandhi",
  headline: "AI Engineer & Full Stack Developer",
  positioning: "I build intelligent, production-oriented systems that turn complex problems into practical software.",
  email: "utsavgandhi273@gmail.com",
  phone: "+91 96627 46292",
  location: "Ahmedabad, Gujarat, India",
  linkedin: "https://linkedin.com/in/utsavgandhi210",
  github: "https://github.com/utsav210",
  resume: "/Utsav_Gandhi_AI_ML_Engineer_Resume.pdf"
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
    "Transformers", "RAG", "Prompt Engineering", "Mistral AI", "Groq API"
  ],
  "Software Engineering": ["Python", "JavaScript", "TypeScript", "React.js", "Next.js", "Django", "Node.js", "FastAPI"],
  "Databases & Vector Stores": ["PostgreSQL", "MongoDB", "SQLite", "Redis", "ChromaDB", "FAISS"],
  "Cloud & DevOps": ["Docker", "Vercel", "AWS"],
  "Cybersecurity & AI Safety": ["OWASP Top 10", "VAPT", "SIEM (Wazuh)", "Prompt Injection Defense", "Guardrail Design"]
};

export const projects = [
  {
    title: "CyberTrace AI - Financial Fraud & Intelligence",
    role: "Full Stack AI Engineer",
    timeline: "Jul 2026 – Present",
    outcome: "Designed an intelligent threat-analysis pipeline that transforms unstructured cybersecurity intelligence into structured, analyst-oriented insights.",
    problem: "Financial fraud detection requires manual analysis of diverse, unstructured documents across multiple languages, making real-time threat intelligence difficult.",
    solution: "Developed a real-time platform with a multi-tier OCR pipeline, deterministic graph analytics for mule-account detection, and a live-updating threat dashboard.",
    technologies: ["React", "Django", "LangGraph", "YOLOv8", "Tesseract OCR", "ChromaDB", "Framer Motion"],
    highlights: [
      "Extracted entities from FIRs and bank statements across English, Hindi, and Gujarati with 90-96% accuracy.",
      "Visualized deterministic graph analytics (DFS cycle detection, layering path tracing) using React Force Graph 2D.",
      "Secured chain-of-custody integrity with SHA-256 hash generation and JWT authentication."
    ],
    github: "https://github.com/utsav210",
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
