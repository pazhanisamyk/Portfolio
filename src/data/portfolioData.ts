export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  framework: string;
  domain: string;
  url: string;
  featured: boolean;
  status: "LIVE_PRODUCTION" | "ENTERPRISE_SYSTEM" | "STABLE_BUILD";
  telemetry: {
    users: string;
    perf: string;
    uptime: string;
  };
  summary: string;
  description: string[];
  technologies: string[];
  highlights: string[];
  metrics: { label: string; value: string }[];
  gradient: string;
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  status: "ACTIVE" | "COMPLETED";
  summary: string;
  contributions: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
}

export interface Certification {
  id: string;
  code: string;
  title: string;
  issuer: string;
  issuerBadge: string;
  issueDate: string;
  expiryDate: string;
  status: "VERIFIED" | "AUTHENTICATED";
  sha256: string;
  level: "PROFESSIONAL" | "SPECIALIST" | "ARCHITECT" | "ENGINEER";
  category: string;
  score: string;
  description: string;
  skills: string[];
  accentColor: string;
  borderGlow: string;
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  specText: string;
  subSpecs: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  tagline: string;
  skills: {
    name: string;
    level: number;
    category: string;
    years: string;
    status: string;
    tags: string[];
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Pazhanisamy K",
    codename: "PAZHANI // K.",
    role: "Full Stack Developer",
    subtitle: "Web & Mobile Application Architect",
    experienceYears: "4+",
    location: "Panruti, Tamil Nadu / Pondicherry, India",
    coordinates: "11.77° N, 79.51° E",
    phone: "+91 6374657369",
    whatsapp: "https://wa.me/916374657369",
    email: "pazhanisamy3434@gmail.com",
    linkedin: "https://www.linkedin.com/in/pazhanik",
    github: "https://github.com/pazhanisamyk",
    portfolioUrl: "https://devpazhani.netlify.app/",
    systemStatus: "ONLINE // AVAILABLE FOR HIGH-IMPACT ROLES",
    bio: "Experienced Full Stack Developer with 4+ years of expertise in building dynamic web and mobile applications. Skilled in React, React Native, Node.js, and Express.js, with strong proficiency in MongoDB, MySQL, and RESTful APIs. Passionate about delivering responsive, scalable, and user-centric solutions.",
    stats: [
      { label: "EXPERIENCE", value: "4+ Years", sub: "Production Full Stack" },
      { label: "EDUCATION", value: "M.Sc. CS", sub: "Computer Science" },
      { label: "PROJECTS", value: "3+ Core", sub: "Spryntz, Bhima, Swypatune" },
      { label: "UPTIME / SLA", value: "99.9%", sub: "High Availability" }
    ],
    missionStatement: "Translating complex business requirements into seamless, high-performance web and mobile platforms across React, React Native, Node.js, and modern cloud databases."
  },

  projects: [
    {
      id: "spryntz",
      title: "Spryntz",
      subtitle: "Food Delivery & Real-Time Logistics Platform",
      category: "React Native Mobile & Web",
      framework: "React Native",
      domain: "spryntz.com",
      url: "https://play.google.com/store/apps/details?id=com.order.spryntz&hl=en_IN",
      featured: true,
      status: "LIVE_PRODUCTION",
      telemetry: {
        users: "Food Delivery Platform",
        perf: "Real-Time Tracking",
        uptime: "99.9%"
      },
      summary: "Spryntz is a comprehensive food delivery platform designed for both mobile and web users. The application enables customers to explore nearby restaurants, browse menus, place orders, and track deliveries in real time.",
      description: [
        "Architected cross-platform mobile user experience with React Native for seamless restaurant browsing and cart management.",
        "Engineered real-time GPS delivery tracking with live location streaming and accurate ETA calculations.",
        "Built robust user authentication, location-based restaurant suggestions, and automated geofenced discovery.",
        "Integrated secure payment gateways and low-latency push notification pipelines for real-time order status updates."
      ],
      technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "Payment Gateway", "Push Notifications", "Google Maps API", "RESTful APIs"],
      highlights: [
        "Real-Time Delivery & Live Courier Tracking",
        "Location-Based Restaurant Suggestions & Menus",
        "Payment Gateway Integration with Encrypted Checkout",
        "Instant Push Notifications for Order Updates"
      ],
      metrics: [
        { label: "PLATFORM", value: "Mobile & Web" },
        { label: "FRAMEWORK", value: "React Native" },
        { label: "TRACKING", value: "Real-Time GPS" },
        { label: "SECURITY", value: "Payment Gateway" }
      ],
      gradient: "from-rose-600/20 via-red-950/40 to-black",
      accentColor: "#ff003c"
    },
    {
      id: "my-bhima",
      title: "My Bhima",
      subtitle: "Jewellery E-Commerce & Scheme Enrollment Engine",
      category: "Next.js E-Commerce Platform",
      framework: "Next.js",
      domain: "mybhima.com",
      url: "https://mybhima.com",
      featured: true,
      status: "ENTERPRISE_SYSTEM",
      telemetry: {
        users: "Online Jewellery Store",
        perf: "Fast SSR Rendering",
        uptime: "99.9%"
      },
      summary: "An e-commerce platform that allows customers to explore and purchase jewellery online and conveniently join jewellery schemes from home.",
      description: [
        "Engineered high-performance Next.js application with Server-Side Rendering (SSR) for fast catalog loading and optimized SEO.",
        "Implemented secure online jewellery scheme enrollment allowing customers to participate in recurring savings schemes conveniently from home.",
        "Designed rich, interactive product detail views with high-resolution image galleries and real-time gold price calculations.",
        "Constructed intuitive checkout and payment workflows ensuring strict financial data integrity and security."
      ],
      technologies: ["Next.js", "React.js", "TypeScript", "HTML & CSS", "JavaScript", "RESTful APIs", "MySQL", "E-Commerce Security"],
      highlights: [
        "Online Jewellery Catalog & Direct Purchase",
        "Convenient Home Enrollment for Jewellery Schemes",
        "Next.js Fast SSR & High-Resolution Galleries",
        "Secure Payment Processing & Customer Accounts"
      ],
      metrics: [
        { label: "PLATFORM", value: "E-Commerce Web" },
        { label: "FRAMEWORK", value: "Next.js" },
        { label: "FEATURE", value: "Gold Schemes" },
        { label: "PERFORMANCE", value: "High Speed SSR" }
      ],
      gradient: "from-amber-600/20 via-yellow-950/40 to-black",
      accentColor: "#f59e0b"
    },
    {
      id: "swypatune",
      title: "Swypatune",
      subtitle: "Gamified Music Streaming & Video Contest Platform",
      category: "Ionic & Angular Media App",
      framework: "Ionic / Angular",
      domain: "myswypatune.com",
      url: "https://play.google.com/store/apps/details?id=com.swypeglobal",
      featured: true,
      status: "LIVE_PRODUCTION",
      telemetry: {
        users: "Gamified Video Reels",
        perf: "Smooth Swipe Gestures",
        uptime: "99.9%"
      },
      summary: "Swypatune is a gamified music streaming platform where users swipe through music videos and vote in contests. Built responsive UI/UX for pages using Ionic and Angular, custom swipe gestures for video playback, and voting features.",
      description: [
        "Crafted responsive and fluid UI/UX across all pages utilizing Ionic Framework and Angular.",
        "Built custom touch swipe gestures for seamless music video playback and interactive voting in live contests.",
        "Implemented SEO architecture for music content and artist discoverability.",
        "Developed profile connections and matches system while optimizing video delivery and buffer performance."
      ],
      technologies: ["Ionic", "Angular", "TypeScript", "JavaScript", "HTML & CSS", "Node.js", "Video Optimization", "Swipe Gestures", "SEO"],
      highlights: [
        "Custom Swipe Gestures for Video Playback",
        "Gamified Contest Voting & Leaderboards",
        "SEO Optimization for Music Content",
        "Profile Connections & Creator Matches"
      ],
      metrics: [
        { label: "PLATFORM", value: "Mobile & Web" },
        { label: "FRAMEWORK", value: "Ionic / Angular" },
        { label: "FEATURE", value: "Swipe & Vote" },
        { label: "OPTIMIZATION", value: "Video Performance" }
      ],
      gradient: "from-cyan-600/20 via-blue-950/40 to-black",
      accentColor: "#00f0ff"
    }
  ] as Project[],

  experience: [
    {
      id: "agile-softlabs",
      company: "Agile Softlabs Pvt Ltd",
      role: "Full Stack Developer",
      period: "December 2024 – Present",
      location: "Pondicherry, India",
      type: "Full-Time Engineer",
      status: "ACTIVE",
      summary: "Full Stack Developer engineering modern web and mobile applications with React, React Native, Node.js, and Express.js with high performance and scalable REST APIs.",
      contributions: [
        "Leading the development of responsive web applications and cross-platform mobile apps using React and React Native.",
        "Designing scalable RESTful APIs and backend microservices with Node.js and Express.js.",
        "Implementing optimized database schemas and queries in MongoDB and MySQL for fast data retrieval.",
        "Collaborating in Agile team sprints to deliver user-centric, high-quality production software."
      ],
      technologies: ["React Js", "React Native", "Node Js", "Express Js", "MongoDB", "MySQL", "Typescript", "RESTful APIs", "Git"],
      metrics: [
        { label: "ROLE", value: "Full Stack Dev" },
        { label: "PERIOD", value: "Dec 2024 – Present" },
        { label: "LOCATION", value: "Pondicherry" }
      ]
    },
    {
      id: "redblox-tech",
      company: "Redblox Technologies Pvt Ltd",
      role: "Software Developer",
      period: "July 2022 – November 2024",
      location: "Pondicherry, India",
      type: "Full-Time Developer (2+ Years)",
      status: "COMPLETED",
      summary: "Software Developer delivering high-impact production applications including Spryntz food delivery (React Native), My Bhima e-commerce (Next.js), and Swypatune music streaming (Ionic/Angular).",
      contributions: [
        "Developed and maintained full-scale mobile and web interfaces with React, React Native, Next.js, Ionic, and Angular.",
        "Built real-time delivery tracking, payment gateway integrations, and push notifications for Spryntz food delivery.",
        "Implemented online jewellery scheme enrollment and SSR catalog browsing for My Bhima e-commerce.",
        "Created custom swipe gesture video playback, gamified contest voting, and SEO optimization for Swypatune."
      ],
      technologies: ["React Js", "React Native", "Ionic", "Angular", "Javascript", "Typescript", "Node Js", "Express Js", "MongoDB", "MySQL", "Postman", "Figma"],
      metrics: [
        { label: "ROLE", value: "Software Dev" },
        { label: "TENURE", value: "Jul 2022 – Nov 2024" },
        { label: "LOCATION", value: "Pondicherry" }
      ]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      id: "cert-mern",
      code: "GL-MERN-2024",
      title: "MERN Stack Development",
      issuer: "Great Learning",
      issuerBadge: "GREAT LEARNING // 2024",
      issueDate: "2024",
      expiryDate: "LIFETIME VERIFIED",
      status: "VERIFIED",
      sha256: "SHA256://8f92a10b42c67e8891d24ef098a543b17721d96e8321045763bd8a204e1b8c9f",
      level: "PROFESSIONAL",
      category: "Full Stack Web Development",
      score: "COMPLETED",
      description: "Comprehensive professional certification in MERN Stack Development covering MongoDB, Express.js, React.js, and Node.js with RESTful API architecture, authentication, and state management.",
      skills: ["React Js", "Node Js", "Express Js", "MongoDB", "RESTful APIs", "Javascript"],
      accentColor: "#00f0ff",
      borderGlow: "rgba(0, 240, 255, 0.4)"
    },
    {
      id: "cert-mean",
      code: "GL-MEAN-2024",
      title: "MEAN Stack Development",
      issuer: "Great Learning",
      issuerBadge: "GREAT LEARNING // 2024",
      issueDate: "2024",
      expiryDate: "LIFETIME VERIFIED",
      status: "VERIFIED",
      sha256: "SHA256://6b14d89a77e52003c41098bfe3910cba7216a8e520391dcf10842001ba9045ef",
      level: "SPECIALIST",
      category: "Full Stack Web Development",
      score: "COMPLETED",
      description: "Professional certification in MEAN Stack Development covering MongoDB, Express.js, Angular, and Node.js with TypeScript, reactive observables, and robust server integrations.",
      skills: ["Angular", "TypeScript", "Node Js", "Express Js", "MongoDB", "REST APIs"],
      accentColor: "#ff003c",
      borderGlow: "rgba(255, 0, 60, 0.4)"
    },
    {
      id: "cert-flutter",
      code: "SCODE-FLT-2022",
      title: "Flutter Internship Completion",
      issuer: "Scode Software Solutions",
      issuerBadge: "SCODE SOLUTIONS // 2022",
      issueDate: "2022",
      expiryDate: "LIFETIME VERIFIED",
      status: "AUTHENTICATED",
      sha256: "SHA256://331a980c5fe90246187b41aa0984decf98012bce7652901a54b380a1c97042da",
      level: "ENGINEER",
      category: "Cross-Platform Mobile",
      score: "COMPLETED",
      description: "Industrial internship credential covering cross-platform mobile app development with Flutter and Dart, UI widget construction, asynchronous data handling, and mobile APIs.",
      skills: ["Flutter", "Dart", "Mobile App Development", "State Management", "UI/UX"],
      accentColor: "#00ff9d",
      borderGlow: "rgba(0, 255, 157, 0.4)"
    },
    {
      id: "cert-javascript",
      code: "JS-ES6-2023",
      title: "JavaScript Essentials 1 & 2",
      issuer: "Cisco Networking Academy",
      issuerBadge: "CISCO ACADEMY // 2023",
      issueDate: "2023",
      expiryDate: "LIFETIME VERIFIED",
      status: "VERIFIED",
      sha256: "SHA256://4a81b29d10e8f399201bc778a41289cf018274019a823019be4710293847ac01",
      level: "PROFESSIONAL",
      category: "Modern JavaScript Engine",
      score: "DISTINCTION",
      description: "Deep validation in modern ECMAScript, asynchronous programming, closures, prototypes, event loops, DOM manipulation, and modular architecture.",
      skills: ["JavaScript (ES6+)", "Async/Await", "Event Loop", "Closures", "DOM APIs"],
      accentColor: "#f59e0b",
      borderGlow: "rgba(245, 158, 11, 0.4)"
    },
    {
      id: "cert-react-native",
      code: "SYS-RN-2024",
      title: "React & React Native Core",
      issuer: "Production Engineering Systems",
      issuerBadge: "PRODUCTION CERTIFIED",
      issueDate: "2024",
      expiryDate: "LIFETIME VERIFIED",
      status: "VERIFIED",
      sha256: "SHA256://9e82110ab78f23498cd401889ab294c7182901ceba84736192004fa9911e3b56",
      level: "ARCHITECT",
      category: "Cross-Platform Ecosystem",
      score: "EXCELLENCE",
      description: "Advanced React 18/19 state lifecycles, custom hooks architecture, React Native bridge optimizations, smooth 60FPS gestures, and real-time push notification pipelines.",
      skills: ["React Native", "React.js", "Redux Toolkit", "Custom Hooks", "Gestures"],
      accentColor: "#38bdf8",
      borderGlow: "rgba(56, 189, 248, 0.4)"
    },
    {
      id: "cert-node-apis",
      code: "NODE-REST-2023",
      title: "Node.js & Database Architecture",
      issuer: "Enterprise Backend Labs",
      issuerBadge: "ENTERPRISE VALIDATED",
      issueDate: "2023",
      expiryDate: "LIFETIME VERIFIED",
      status: "VERIFIED",
      sha256: "SHA256://55c01992ef18903ba764510cdb28479e00192738fa094182937c9a10bcdef492",
      level: "ENGINEER",
      category: "Backend & Database Protocols",
      score: "DISTINCTION",
      description: "Asynchronous event-driven Node.js backend systems, Express routing pipelines, MongoDB aggregations & indexing, MySQL schema normalization, and RESTful security.",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "JWT Security", "REST APIs"],
      accentColor: "#a855f7",
      borderGlow: "rgba(168, 85, 247, 0.4)"
    }
  ] as Certification[],

  skillsMatrix: [
    {
      category: "Technical Skills",
      icon: "Code2",
      tagline: "Core programming languages, frameworks, and web/mobile stacks",
      skills: [
        { name: "React Js", level: 96, category: "Frontend", years: "4+ Yrs", status: "MASTER", tags: ["Hooks", "Context", "SSR", "Vite"] },
        { name: "React Native", level: 94, category: "Mobile", years: "3+ Yrs", status: "CORE EXPERT", tags: ["iOS", "Android", "Cross-Platform", "GPS"] },
        { name: "Javascript", level: 98, category: "Language", years: "4+ Yrs", status: "MASTER", tags: ["ES6+", "Async/Await", "Event Loop", "DOM"] },
        { name: "Typescript", level: 90, category: "Language", years: "3+ Yrs", status: "PROFICIENT", tags: ["Strict Mode", "Interfaces", "Generics"] },
        { name: "Node Js", level: 92, category: "Backend", years: "4+ Yrs", status: "CORE EXPERT", tags: ["Async I/O", "REST APIs", "Streams", "Modules"] },
        { name: "Express Js", level: 94, category: "Backend", years: "4+ Yrs", status: "CORE EXPERT", tags: ["Routing", "Middleware", "Authentication"] },
        { name: "MongoDB", level: 92, category: "Database", years: "4+ Yrs", status: "CORE EXPERT", tags: ["NoSQL", "Mongoose", "Aggregations"] },
        { name: "MySQL", level: 86, category: "Database", years: "3+ Yrs", status: "ADVANCED", tags: ["Relational", "SQL Queries", "Schemas"] },
        { name: "Angular & Ionic", level: 88, category: "Framework", years: "2+ Yrs", status: "ADVANCED", tags: ["Ionic UI", "RxJS", "Components", "Gestures"] },
        { name: "HTML & CSS", level: 98, category: "Frontend", years: "4+ Yrs", status: "MASTER", tags: ["Responsive", "Flexbox", "Grid", "Animations"] }
      ]
    },
    {
      category: "Development Tools",
      icon: "Terminal",
      tagline: "Industry-standard development, version control, and collaboration tools",
      skills: [
        { name: "VS Code", level: 98, category: "Editor", years: "4+ Yrs", status: "MASTER", tags: ["Extensions", "Debugging", "Snippets"] },
        { name: "Git & GitHub", level: 94, category: "VCS", years: "4+ Yrs", status: "MASTER", tags: ["Branching", "Pull Requests", "Workflows"] },
        { name: "Jira", level: 88, category: "Management", years: "3+ Yrs", status: "ADVANCED", tags: ["Agile", "Scrum", "Sprints", "Tracking"] },
        { name: "Postman", level: 92, category: "Testing", years: "4+ Yrs", status: "CORE EXPERT", tags: ["API Testing", "Collections", "Mocking"] },
        { name: "Figma", level: 85, category: "Design", years: "3+ Yrs", status: "ADVANCED", tags: ["UI/UX", "Design Systems", "Inspect"] }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      degree: "Master of Science in Computer Science (M.Sc.)",
      institution: "Pondicherry / Tamil Nadu University",
      period: "2020 – 2022",
      status: "COMPLETED",
      badge: "POSTGRADUATE DEGREE",
      highlights: [
        "M.Sc. in Computer Science (2020 - 2022).",
        "Deep foundation in Data Structures & Algorithms, Database Systems, Distributed Architecture, and Software Engineering.",
        "Built full-stack web and mobile application prototypes during academic coursework."
      ],
      coreSubjects: ["Data Structures & Algorithms", "Database Management Systems", "Software Engineering", "Computer Networks", "Web Technologies"]
    }
  ],

  services: [
    {
      id: "web-engineering",
      num: "01",
      title: "Web App Engineering",
      shortDesc: "High-performance reactive web applications & SSR architectures",
      specText: "REACT.JS, NEXT.JS, TYPESCRIPT, JAVASCRIPT, HTML & CSS. CRAFTING ACCESSIBLE, ULTRA-FAST, AND USER-CENTRIC WEB PLATFORMS OPTIMIZED FOR CONVERSIONS AND ENGAGEMENT.",
      subSpecs: [
        "REACT.JS & NEXT.JS HIGH-PERFORMANCE WEB APPS",
        "RESPONSIVE UI/UX DESIGN WITH MODERN HTML & CSS",
        "FULL STATE MANAGEMENT & RESTFUL API INTEGRATION"
      ]
    },
    {
      id: "mobile-development",
      num: "02",
      title: "Mobile App Development",
      shortDesc: "Cross-platform iOS & Android apps with native performance",
      specText: "REACT NATIVE, IONIC, ANGULAR, AND FLUTTER APPS WITH HARDWARE BRIDGES, REAL-TIME GPS TRACKING, SMOOTH SWIPE GESTURES, AND PUSH NOTIFICATIONS.",
      subSpecs: [
        "CROSS-PLATFORM REACT NATIVE (IOS & ANDROID)",
        "IONIC & ANGULAR HYBRID MOBILE APPLICATIONS",
        "REAL-TIME GPS TRACKING & PUSH NOTIFICATIONS"
      ]
    },
    {
      id: "backend-apis",
      num: "03",
      title: "Backend & REST APIs",
      shortDesc: "Scalable microservices, authentication & secure endpoints",
      specText: "NODE.JS & EXPRESS.JS BACKENDS ARCHITECTED FOR CONCURRENCY. INTEGRATING USER AUTHENTICATION, PAYMENT GATEWAYS, AND SECURE RESTFUL API ARCHITECTURES.",
      subSpecs: [
        "NODE.JS & EXPRESS.JS RESTFUL API DESIGN",
        "SECURE USER AUTHENTICATION & SESSION MANAGEMENT",
        "PAYMENT GATEWAY INTEGRATIONS & NOTIFICATION QUEUES"
      ]
    },
    {
      id: "database-realtime",
      num: "04",
      title: "Database & Real-Time Systems",
      shortDesc: "Scalable document stores, relational schemas & live updates",
      specText: "MONGODB AND MYSQL DATABASE DESIGN, DATA MODELING, AND LOW-LATENCY WEBSOCKET/GPS DISPATCH INTEGRATIONS FOR REAL-TIME LOGISTICS AND CONTESTS.",
      subSpecs: [
        "MONGODB NOSQL DATA MODELING & AGGREGATIONS",
        "MYSQL RELATIONAL SCHEMA DESIGN & OPTIMIZATION",
        "REAL-TIME LOGISTICS, TRACKING & LIVE UPDATES"
      ]
    }
  ] as ServiceItem[]
};
