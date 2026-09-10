import { GitHubIcon, LinkedInIcon, PlayStoreIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Haitham Assoli",
  initials: "HA",
  location: "Amman, Jordan",
  locationLink: "https://www.google.com/maps/place/Amman",
  about: "Software Engineer | Full Stack & Mobile",
  summary:
    "Software Engineer with 4+ years of experience building production web, mobile, and backend systems across e-commerce, healthcare and bioinformatics, and consumer applications. Experienced with TypeScript, React, React Native, Next.js, NestJS, Node.js, and PostgreSQL, with a focus on scalable architecture, type safety, performance, and developer experience.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/74528836?s=400&u=6d3ef2f0aab56016211b826c9457156aee8c8c81&v=4",
  personalWebsiteUrl: "https://cv.assoli.site/",
  contact: {
    email: "haitham.b.assoli@gmail.com",
    tel: "+962776193666",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/haithamassoli",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/haithamassoli/",
        icon: LinkedInIcon,
      },
      {
        name: "PlayStore",
        url: "https://play.google.com/store/apps/dev?id=6385259170030268414",
        icon: PlayStoreIcon,
      },
    ],
  },
  education: [
    {
      school: "Irbid National University",
      badges: [],
      degree: "B.Sc. Computer Science, Excellent",
      start: "2022",
      end: "2024",
    },
    {
      school: "Jordan University of Science and Technology",
      badges: [],
      degree: "Electrical and Electronics Engineering Coursework",
      start: "2018",
      end: "2022",
    },
  ],
  certifications: [
    {
      title: "AWS DevOps Training",
      organization: "Cloud Native Base Camp",
      description:
        "Designed, implemented, and operated cloud solutions on AWS.",
      link: "https://cloudnativebasecamp.com/courses/aws-devops-90/",
      date: "Sep 2024",
      badges: [],
    },
    {
      title: "Data Structures Decode",
      organization: "Cloud Native Base Camp",
      description:
        "Applied core data structures and algorithms to software problems.",
      link: "https://cloudnativebasecamp.com/courses/ds01/",
      date: "Oct 2024",
      badges: [],
    },
    {
      title: "Algorithms Analysis and Design from scratch",
      organization: "Cloud Native Base Camp",
      description:
        "Analyzed common algorithms and designed solutions before implementation.",
      link: "https://raw.githubusercontent.com/haithamassoli/Licenses-Certifications/refs/heads/main/Algorithms%20Analysis%20and%20Design.png",
      date: "Oct 2024",
      badges: [],
    },
    {
      title: "Fundamentals of Database Engineering",
      organization: "Udemy",
      description:
        "Studied indexing, partitioning, sharding, replication, B-trees, concurrency control, database engines, and security.",
      link: "https://raw.githubusercontent.com/haithamassoli/Licenses-Certifications/refs/heads/main/Fundamentals%20of%20Database.jpeg",
      date: "Feb 2023",
      badges: ["24 hours"],
    },
  ],
  work: [
    {
      company: "GoldenTik",
      link: "https://www.linkedin.com/company/goldentik/",
      badges: [],
      title: "Software Engineer",
      start: "2026",
      end: null,
      description: [
        "Designed and developed a multi-vendor e-commerce platform using NestJS, Next.js, React Native, and TypeScript.",
        "Built core workflows for vendors, customers, products, orders, payments, and mobile and web experiences.",
        "Improved maintainability with typed APIs, shared business logic, and modular backend and frontend systems.",
      ],
    },
    {
      company: "Bionl.AI",
      link: "https://bionl.ai/",
      badges: ["Remote"],
      title: "Software Engineer",
      start: "2025",
      end: "2026",
      description: [
        "Built web and mobile bioinformatics applications using React, React Native, and TypeScript in a monorepo.",
        "Developed type-safe data workflows with Zod, Prisma, and TanStack Query.",
        "Shipped Generative AI and bioinformatics pipeline features for a no-code platform used by 8,000+ researchers.",
        "Delivered production features under HIPAA, GDPR, and SOC 2 Type II requirements.",
      ],
    },
    {
      company: "Malabji",
      link: "https://malabji.vercel.app/",
      badges: [],
      title: "Founder / Software Engineer",
      start: "2025",
      end: null,
      description: [
        "Designed and built a sports marketplace for discovering venues, booking pitches, finding players, creating teams, and organizing tournaments.",
        "Developed the mobile application with React Native, TypeScript, and Supabase.",
        "Led architecture, authentication, database design, booking workflows, backend integration, and deployment from concept to production.",
      ],
    },
    {
      company: "Freelance",
      link: "",
      badges: [],
      title: "Freelance Software Engineer",
      start: "2022",
      end: null,
      description: [
        "Built production web and mobile applications with React, Next.js, React Native, Node.js, and TypeScript.",
        "Delivered frontend interfaces, backend APIs, database schemas, third-party integrations, deployments, and maintenance.",
        "Translated client requirements into scoped technical solutions and shipped products within agreed timelines.",
      ],
    },
    {
      company: "Repzo",
      link: "https://repzo.com/",
      badges: [],
      title: "Software Engineer",
      start: "2022",
      end: "2023",
      description: [
        "Developed and maintained a large-scale dashboard using React and TypeScript.",
        "Modernized legacy dependencies and improved application security, maintainability, and performance.",
        "Contributed to backend services using Node.js and Express.js.",
      ],
    },
    {
      company: "Orange Jordan",
      link: "https://orange.jo/",
      badges: ["Internship"],
      title: "Full-Stack Developer Trainee",
      start: "2021",
      end: "2022",
      description: [
        "Completed a seven-month full-stack internship and shipped 10 responsive web projects with support from engineering mentors.",
      ],
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Kotlin", "Swift", "C++"],
    },
    {
      category: "Frontend & Mobile",
      items: [
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "Tailwind CSS",
        "TanStack Query",
      ],
    },
    {
      category: "Backend & Data",
      items: [
        "Node.js",
        "NestJS",
        "Express.js",
        "Laravel",
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Firebase",
        "Redis",
        "Meilisearch",
      ],
    },
    {
      category: "AI Engineering",
      items: [
        "LLM & Agent Engineering",
        "Model Context Protocol (MCP)",
        "Retrieval-Augmented Generation (RAG)",
        "Vector Databases & Semantic Search",
        "Prompt & Context Engineering",
        "ONNX Runtime",
        "Whisper",
      ],
    },
    {
      category: "Infrastructure & Practices",
      items: [
        "AWS",
        "Docker",
        "Linux",
        "Git",
        "CI/CD",
        "REST APIs",
        "Monorepos",
        "Type-safe API Design",
      ],
    },
  ],
  projects: [
    {
      title: "Little Muslim",
      techStack: [
        "Next.js",
        "TypeScript",
        "Convex Auth",
        "RTL",
        "Web Speech API",
      ],
      description:
        "Built an illustrated Arabic learning platform with 111 Islamic lessons, family accounts, progress tracking, quizzes, and accessible narration.",
      source: "https://github.com/haithamassoli/Teaching-Children-Islam",
      link: {
        label: "littlemuslim.assoli.site",
        href: "https://littlemuslim.assoli.site/",
      },
    },
    {
      title: "Sitr",
      techStack: [
        "Swift",
        "SwiftUI",
        "ScreenCaptureKit",
        "Core ML",
        "AppKit",
      ],
      description:
        "Built a private, on-device macOS app that detects and covers people across apps in real time without network access.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/Sitr",
      },
    },
    {
      title: "Aoun",
      techStack: [
        "Next.js",
        "TypeScript",
        "React",
        "Convex",
        "TanStack Form",
        "TanStack Table",
      ],
      description:
        "Built a free academic platform for Jordanian university students with searchable resources and structured academic data.",
      link: {
        label: "aoun.assoli.site",
        href: "https://aoun.assoli.site",
      },
    },
    {
      title: "Kashaf Abi Ja'far",
      techStack: [
        "Astro",
        "TypeScript",
        "Meilisearch",
        "Whisper ASR",
        "Tailwind CSS",
      ],
      description:
        "Built Arabic content search across thousands of hours of lessons using Whisper ASR and Meilisearch, with timestamp-level results.",
      link: {
        label: "alkulify.assoli.site",
        href: "https://alkulify.assoli.site",
      },
    },
    {
      title: "pastehtml",
      techStack: ["Next.js", "TypeScript", "Convex", "MCP", "Tailwind CSS"],
      description:
        "Built an MCP-enabled publishing service that turns uploaded HTML into an isolated public URL.",
      link: {
        label: "pastehtml.assoli.site",
        href: "https://pastehtml.assoli.site",
      },
    },
    {
      title: "Gift",
      techStack: [
        "Next.js 16",
        "React Three Fiber",
        "drei",
        "Convex",
        "Tailwind CSS",
        "Turbopack",
      ],
      description: "Animated 3D gifts you send as a link.",
      link: {
        label: "gift.assoli.site",
        href: "https://gift.assoli.site",
      },
    },
    {
      title: "TeleStream",
      techStack: ["Next.js", "TypeScript", "Telegram API", "Tailwind CSS"],
      description: "Read every Telegram channel you follow as one timeline.",
      link: {
        label: "tele-timeline.vercel.app",
        href: "https://tele-timeline.vercel.app",
      },
    },
    {
      title: "Malabji",
      techStack: [
        "React Native",
        "Expo Router",
        "TypeScript",
        "Supabase",
        "Zustand",
        "React Query",
      ],
      description: "Find a pitch, find players, book it, play.",
      link: {
        label: "malabji.vercel.app",
        href: "https://malabji.vercel.app",
      },
    },
    {
      title: "Naqi: Halal Video Filter",
      techStack: [
        "Kotlin",
        "Swift",
        "ONNX Runtime",
        "MediaCodec",
        "OpenGL ES",
        "AVFoundation",
      ],
      description:
        "Built native Android and iOS media pipelines with Kotlin, Swift, ONNX Runtime, MediaCodec, OpenGL ES, and AVFoundation.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.naqi",
      },
    },
    {
      title: "EECommittee",
      techStack: [
        "React Native",
        "Expo",
        "TypeScript",
        "Firebase",
        "Zustand",
        "React Query",
      ],
      description:
        "Every resource an electrical engineering student needs, in one place.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.EECommitte",
      },
    },
    {
      title: "Tawsilah Abshir",
      techStack: [
        "React Native",
        "Expo",
        "TypeScript",
        "Maps",
        "Push Notifications",
        "React Query",
      ],
      description: "Ride-hailing built for Ajloun, not adapted to it.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.assoliindustries.tawsilah",
      },
    },
    {
      title: "Azkari / Dhikr",
      techStack: ["JavaScript", "Swift", "SwiftUI", "Kotlin", "C#", "WPF"],
      description:
        "One remembrance, every so often, on whichever screen you are at.",
      link: {
        label: "dhikr.assoli.site",
        href: "https://dhikr.assoli.site",
      },
    },
    {
      title: "cv.assoli.site",
      techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "SEO"],
      description: "My web résumé: dense, scannable, and printable as-is.",
      link: {
        label: "cv.assoli.site",
        href: "https://cv.assoli.site",
      },
    },
    {
      title: "Almadrsa",
      techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "RTL"],
      description: "An e-learning platform for schools.",
      link: {
        label: "almadrsa.vercel.app",
        href: "https://almadrsa.vercel.app",
      },
    },
    {
      title: "Fazawwijuhu",
      techStack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Convex",
        "Better Auth",
        "Tailwind v4",
      ],
      description: "A supervised platform for lawful marriage introductions.",
      link: {
        label: "fazuwjuh.vercel.app",
        href: "https://fazuwjuh.vercel.app",
      },
    },
    {
      title: "Al-Tibyan Educational Center",
      techStack: [
        "React Native",
        "TypeScript",
        "Firebase",
        "Zustand",
        "React Query",
        "Reanimated",
      ],
      description: "Quran memorisation circles, run properly on a phone.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.majalis",
      },
    },
    {
      title: "DevCards",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "localStorage",
        "Leitner scheduling",
      ],
      description: "Spaced-repetition flashcards for engineering interviews.",
      link: {
        label: "flashcards.assoli.site",
        href: "https://flashcards.assoli.site",
      },
    },
    {
      title: "Hadanati",
      techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "RTL"],
      description:
        "Run a nursery: attendance, assessments, fees and a parent portal.",
      link: {
        label: "hadanati.assoli.site",
        href: "https://hadanati.assoli.site",
      },
    },
    {
      title: "Hirfati",
      techStack: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "SEO",
        "RTL",
      ],
      description: "Find a trusted tradesperson in Jordan and get free quotes.",
      link: {
        label: "hirfati-jo.vercel.app",
        href: "https://hirfati-jo.vercel.app",
      },
    },
    {
      title: "Service",
      techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "RTL"],
      description: "Post a trip or book a seat between Jordan's governorates.",
      link: {
        label: "sarfees.vercel.app",
        href: "https://sarfees.vercel.app",
      },
    },
    {
      title: "Ghurza",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "RTL", "SEO"],
      description: "Learn crochet in Arabic, from the first stitch upward.",
      link: {
        label: "crochet.assoli.site",
        href: "https://crochet.assoli.site",
      },
    },
    {
      title: "Hijabk",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "RTL",
        "SEO",
        "WhatsApp ordering",
      ],
      description:
        "A Jordanian atelier for khimars and abayas, ordered over WhatsApp.",
      link: {
        label: "7jabk.vercel.app",
        href: "https://7jabk.vercel.app",
      },
    },
    {
      title: "Rooh Al-Jouf",
      techStack: [
        "React Native",
        "Expo Router",
        "TypeScript",
        "i18n",
        "Firebase",
        "React Query",
      ],
      description:
        "A digital guide to the Al-Jouf region and everything in it.",
      link: {
        label: "apps.apple.com",
        href: "https://apps.apple.com/us/app/rooh-al-jouf/id6743066965",
      },
    },
    {
      title: "assoli.site",
      techStack: [
        "Next.js",
        "TypeScript",
        "React",
        "Framer Motion",
        "Tailwind CSS",
        "SEO",
      ],
      description:
        "My previous portfolio: one animated page, driven by a command menu.",
      link: {
        label: "assoli.site",
        href: "https://assoli.site",
      },
    },
    {
      title: "FeedGram",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      description: "Follow public Telegram channels without an account.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/telegram-feed",
      },
    },
    {
      title: "Sada",
      techStack: [
        "JavaScript",
        "Manifest V3",
        "transformers.js",
        "NLLB-200",
        "WebGPU",
        "WASM",
      ],
      description:
        "Built on-device English-to-Arabic subtitle translation with NLLB-200, transformers.js, WebGPU, and WASM.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/sada",
      },
    },
    {
      title: "Mubah",
      techStack: [
        "Python",
        "uv",
        "ffmpeg",
        "yt-dlp",
        "Apple Silicon / MPS",
        "Stem separation",
      ],
      description: "Turn any video into a permissible copy, on your own Mac.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/mubah",
      },
    },
    {
      title: "Ghadd",
      techStack: [
        "Kotlin",
        "Android Accessibility Service",
        "ONNX Runtime",
        "NudeNet v3",
        "YOLOv8n",
      ],
      description:
        "Built system-wide on-device image filtering for Android using YOLOv8n, NudeNet, and ONNX Runtime.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/haramblur",
      },
    },
    {
      title: "Horizon",
      techStack: [
        "Electron",
        "TypeScript",
        "React",
        "electron-vite",
        "Vitest",
        "Native bridges",
      ],
      description:
        "Built a cross-platform Electron desktop app with native bridges and presence-aware break reminders.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/horizon",
      },
    },
    {
      title: "Marafiq Plus",
      techStack: [
        "React Native",
        "Expo Router",
        "TypeScript",
        "Google Maps",
        "Firebase",
        "Zustand",
      ],
      description:
        "Find every park and public facility in Amman, and report what is broken.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.hadiqa",
      },
    },
    {
      title: "Discover Ajloun",
      techStack: [
        "React Native",
        "TypeScript",
        "i18n",
        "Firebase",
        "React Query",
        "Reanimated",
      ],
      description:
        "Tourism and municipal complaints for Ajloun Governorate, in one app.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.telescope",
      },
    },
    {
      title: "Sawt",
      techStack: [
        "React Native",
        "TypeScript",
        "OTP verification",
        "Firebase",
        "Zustand",
        "React Query",
      ],
      description: "Automating an election, from voting to results.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.sawt",
      },
    },
    {
      title: "Kheir",
      techStack: [
        "React Native",
        "Expo Router",
        "TypeScript",
        "Firebase",
        "Zustand",
        "React Query",
      ],
      description: "Donate directly to people in need.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/kheir",
      },
    },
    {
      title: "Halal Camera",
      techStack: [
        "Kotlin",
        "Swift",
        "On-device face detection",
        "CameraX",
        "AVFoundation",
      ],
      description: "A camera that blurs faces the moment you shoot.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.halalcamera",
      },
    },
    {
      title: "Al-Manal",
      techStack: ["JavaScript", "Next.js", "Scheduling logic", "RTL"],
      description: "Find a substitute teacher before the bell rings.",
      link: {
        label: "school-teacher-substitution-finder.vercel.app",
        href: "https://school-teacher-substitution-finder.vercel.app",
      },
    },
    {
      title: "Wedding Invitation",
      techStack: [
        "Next.js",
        "TypeScript",
        "Framer Motion",
        "Tailwind CSS",
        "RTL",
      ],
      description: "A wedding invitation that lives at a link.",
      link: {
        label: "h-wedding.assoli.site",
        href: "https://h-wedding.assoli.site",
      },
    },
    {
      title: "Hafiz Platform",
      techStack: [
        "Next.js",
        "TypeScript",
        "Server Components",
        "Server Actions",
        "Zod",
        "Tailwind CSS",
      ],
      description:
        "An escrow-style platform that protects both sides of a sale.",
      link: {
        label: "hafiz-platform.netlify.app",
        href: "https://hafiz-platform.netlify.app",
      },
    },
    {
      title: "nomusic",
      techStack: [
        "Python",
        "Audio source separation",
        "Apple Silicon / MPS",
        "CUDA",
        "yt-dlp",
      ],
      description: "Watch YouTube and Facebook videos without the music.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/nomusic",
      },
    },
    {
      title: "cohere-transcribe",
      techStack: [
        "Python",
        "Silero VAD",
        "GPU batching",
        "SRT / VTT",
        "Hugging Face",
      ],
      description:
        "Built a GPU-batched Arabic and English transcription pipeline with Silero VAD and subtitle export.",
      link: {
        label: "github.com",
        href: "https://github.com/AliOsm/cohere-transcribe",
      },
    },
    {
      title: "T3 Code",
      techStack: ["TypeScript", "React", "React Native", "Electron"],
      description: "Control the coding agents on your machine, from anywhere.",
      link: {
        label: "t3.codes",
        href: "https://t3.codes",
      },
    },
    {
      title: "Recruiter Connector",
      techStack: [
        "React Native",
        "TypeScript",
        "Real-time chat",
        "Push Notifications",
      ],
      description: "A marketplace where recruiters trade candidate profiles.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.ofi.recruiter_new",
      },
    },
    {
      title: "Tafrigh",
      techStack: ["Python", "Whisper", "wit.ai", "SRT / VTT"],
      description:
        "Transcribe Arabic audio and generate SRT and VTT subtitles.",
      link: {
        label: "tafrigh.ieasybooks.com",
        href: "https://tafrigh.ieasybooks.com",
      },
    },
  ],
} as const;
