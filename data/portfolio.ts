export const personalInfo = {
  name: "Akshat Jain",
  title: "Backend Engineer",
  roles: [
    "Backend Engineer",
    "Full Stack Developer",
    "API Architect",
    "Systems Engineer",
    "Problem Solver",
  ],
  email: "akshat07272@gmail.com",
  phone: "+91 75663-29222",
  location: "Bengaluru, India",
  github: "https://github.com/007Akshatjain",
  linkedin: "https://linkedin.com/in/Akshat-Jain13",
  summary:
    "Backend Developer with 2+ years of experience building scalable APIs and workflow-driven systems. I architect robust backend systems that power enterprise platforms — obsessing over performance, reliability, and clean engineering at every layer.",
  availability: "Open to Opportunities",
  yearsExperience: "2+",
  projectsCompleted: "15+",
  techStackCount: "20+",
  problemsSolved: "500+",
};

export const skills = [
  {
    category: "Frontend",
    icon: "Layout",
    color: "#3b82f6",
    items: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 82 },
      { name: "HTML/CSS", level: 92 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "#8b5cf6",
    items: [
      { name: "FastAPI", level: 92 },
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Python", level: 90 },
      { name: "Flask", level: 85 },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "#06b6d4",
    items: [
      { name: "Oracle DB", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 80 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "Cloud",
    color: "#10b981",
    items: [
      { name: "Docker", level: 78 },
      { name: "Kubernetes", level: 72 },
      { name: "CI/CD", level: 80 },
      { name: "VMware Horizon", level: 75 },
      { name: "vSphere", level: 72 },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    color: "#f59e0b",
    items: [
      { name: "Git / GitHub", level: 92 },
      { name: "PowerShell", level: 82 },
      { name: "Jira", level: 80 },
      { name: "SCCM", level: 75 },
      { name: "BitBucket", level: 78 },
    ],
  },
  {
    category: "Languages",
    icon: "Code",
    color: "#ef4444",
    items: [
      { name: "JavaScript/TS", level: 90 },
      { name: "Python", level: 90 },
      { name: "C++", level: 78 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 88 },
    ],
  },
];

export const experience = [
  {
    id: 1,
    company: "Texas Instruments",
    role: "System Engineer",
    type: "Full-time",
    period: "June 2024 — Present",
    location: "Bengaluru, India",
    logo: "TI",
    color: "#8b5cf6",
    description:
      "Building and scaling enterprise-grade backend infrastructure powering global engineering workflows at one of the world's largest semiconductor companies.",
    achievements: [
      "Architected and scaled high-performance backend services using FastAPI, Node.js, and Python — reducing manual operational effort by 90% across enterprise platforms",
      "Owned full lifecycle of backend components from design through production: improved release efficiency by 30% and cut production incidents by 25% via rigorous code reviews and agile delivery",
      "Engineered Oracle DB integrations with optimized query patterns, boosting query performance by 40% and maintaining 99.9% data accuracy across critical transaction workflows",
      "Delivered enterprise automation workflows, replacing manual processes with intelligent pipeline orchestration across VMware Horizon and vSphere environments",
    ],
    techStack: [
      "React JS",
      "Oracle DB",
      "Node JS",
      "Python",
      "Flask",
      "FastAPI",
      "PowerShell",
      "VMware Horizon",
      "vSphere",
    ],
    impact: [
      { metric: "90%", label: "Manual effort reduced" },
      { metric: "40%", label: "Query performance boost" },
      { metric: "30%", label: "Release efficiency gain" },
    ],
  },
  {
    id: 2,
    company: "Texas Instruments",
    role: "IT Intern",
    type: "Internship",
    period: "January 2024 — June 2024",
    location: "Bengaluru, India",
    logo: "TI",
    color: "#3b82f6",
    description:
      "Built security-critical tooling and automated enterprise IT workflows during a high-impact 6-month internship — converted to full-time on completion.",
    achievements: [
      "Designed and delivered a secure self-service portal for BitLocker and LAPS password recovery using ReactJS, Node.js, and Flask — slashing IT support tickets by 40% and unauthorized access attempts by 95%",
      "Automated deployment and audit reporting pipelines via PowerShell and SCCM, enabling 100+ monthly compliance reports while saving 12+ engineering hours per month",
    ],
    techStack: [
      "ReactJS",
      "Node.js",
      "Flask",
      "PowerShell",
      "SCCM",
      "IIS Server",
    ],
    impact: [
      { metric: "40%", label: "Support tickets reduced" },
      { metric: "95%", label: "Unauthorized access blocked" },
      { metric: "12h+", label: "Saved per month" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Client Lifecycle Management System",
    subtitle: "Enterprise Workflow Automation Platform",
    company: "Texas Instruments",
    period: "May 2025 — Present",
    featured: true,
    description:
      "A mission-critical enterprise platform managing end-to-end lifecycle workflows for 1000+ global users. Built a full-stack system with intelligent routing, rule-based approval pipelines, and real-time alerting — delivering 60% operational efficiency gains across business units.",
    problem:
      "Manual lifecycle management processes were causing delays, errors, and bottlenecks across 1000+ enterprise users with no centralized visibility or automation.",
    solution:
      "Designed a scalable full-stack platform with rule-based automation, real-time notifications, and high-performance data pipelines — centralizing all lifecycle operations.",
    features: [
      "15+ REST APIs powering global enterprise workflows",
      "Rule-based approval and routing engine with real-time alerts",
      "Batch data pipelines processing high-volume lifecycle events",
      "Oracle DB schema optimizations for sub-100ms query performance",
      "Redis caching layer for session management and rate limiting",
    ],
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "FastAPI",
      "Python",
      "Oracle DB",
      "Redis",
    ],
    github: "https://github.com/007Akshatjain",
    live: null,
    gradient: "from-purple-600/20 via-violet-600/10 to-blue-600/20",
    accentColor: "#8b5cf6",
  },
];

export const achievements = [
  {
    id: 1,
    title: "500+ DSA Problems Solved",
    description:
      "Consistent competitive programmer across LeetCode, CodeChef, and GeeksforGeeks — sharpening algorithmic thinking and problem-solving at scale.",
    icon: "Trophy",
    color: "#f59e0b",
    category: "Competitive Programming",
  },
  {
    id: 2,
    title: "State Level Gold Medalist",
    description:
      "State-level Gold Medal in Kho-Kho — demonstrating competitive drive, team leadership, and performance under pressure beyond the keyboard.",
    icon: "Medal",
    color: "#ef4444",
    category: "Sports",
  },
  {
    id: 3,
    title: "Treasurer — MCA Association MANIT",
    description:
      "Led financial operations and event coordination for the MCA student body at NIT Bhopal — managing budgets, stakeholders, and institutional relationships.",
    icon: "Users",
    color: "#8b5cf6",
    category: "Leadership",
  },
  {
    id: 4,
    title: "Web Developer — Quizzers' Club MANIT",
    description:
      "Built and maintained the official web presence for MANIT's Quizzers' Club, delivering interactive quiz platforms and event microsites.",
    icon: "Globe",
    color: "#3b82f6",
    category: "Web Development",
  },
  {
    id: 5,
    title: "MCA — NIT Bhopal",
    description:
      "Master of Computer Applications with CPI 8.59 from one of India's premier National Institutes of Technology.",
    icon: "GraduationCap",
    color: "#10b981",
    category: "Education",
  },
  {
    id: 6,
    title: "99.9% System Reliability",
    description:
      "Maintained 99.9% data accuracy and transaction reliability across enterprise Oracle DB integrations at Texas Instruments serving 1000+ users.",
    icon: "Shield",
    color: "#06b6d4",
    category: "Professional",
  },
];

export const techIcons = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "FastAPI",
  "TypeScript",
  "Oracle",
  "Redis",
  "Docker",
  "Git",
];
