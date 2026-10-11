import { GitHubIcon, LinkedInIcon, PlayStoreIcon } from "@/components/icons";

type IconComponent = (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;

export interface Project {
  title: string;
  /** Featured projects are listed first and are the only ones printed. */
  featured?: boolean;
  /** Set when the project is not solely my own work, e.g. "Contributor". */
  role?: string;
  techStack: string[];
  description: string;
  source?: string;
  link: { label: string; href: string };
}

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  portfolioUrl: string;
  contact: {
    email: string;
    tel: string;
    social: { name: string; url: string; icon: IconComponent }[];
  };
  education: { school: string; degree: string; start: string; end: string }[];
  certifications: {
    title: string;
    organization: string;
    description: string;
    link: string;
    date: string;
    badges: string[];
  }[];
  work: {
    company: string;
    link: string;
    badges: string[];
    title: string;
    start: string;
    end: string | null;
    description: string[];
  }[];
  skills: { category: string; items: string[] }[];
  projects: Project[];
}

export const RESUME_DATA: ResumeData = {
  name: "Haitham Assoli",
  initials: "HA",
  location: "Amman, Jordan",
  locationLink: "https://www.google.com/maps/place/Amman",
  about: "Software Engineer | Full Stack, Mobile & On-Device ML",
  summary:
    "Software Engineer with 4+ years of experience shipping production web, mobile, desktop, and backend systems across e-commerce, healthcare and bioinformatics, and consumer products. Core stack: TypeScript, React, Next.js, React Native, NestJS, Node.js, and PostgreSQL. Also builds native Kotlin and Swift apps, on-device ML features with ONNX Runtime, Core ML, and WebGPU, and Arabic-first RTL products.",
  avatarUrl: "/avatar.png",
  personalWebsiteUrl: "https://cv.assoli.site/",
  portfolioUrl: "https://portfolio.assoli.site/",
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
      degree: "B.Sc. Computer Science (Grade: Excellent)",
      start: "2022",
      end: "2024",
    },
    {
      school: "Jordan University of Science and Technology",
      degree: "Electrical and Electronics Engineering Coursework",
      start: "2018",
      end: "2022",
    },
  ],
  certifications: [
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
      title: "AWS DevOps Training",
      organization: "Cloud Native Base Camp",
      description:
        "Covered core AWS services and DevOps practices for deploying and operating applications.",
      link: "https://cloudnativebasecamp.com/courses/aws-devops-90/",
      date: "Sep 2024",
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
        "Designing and building a multi-vendor e-commerce platform in TypeScript: NestJS API, Next.js web app, and React Native mobile app.",
        "Building vendor, customer, catalog, order, and payment workflows across web and mobile.",
        "Sharing typed API contracts and business logic between backend, web, and mobile to keep the system modular and consistent.",
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
        "Shipped Generative AI and bioinformatics pipeline features for a no-code platform used by 8,000+ researchers.",
        "Built web and mobile applications with React, React Native, and TypeScript in a monorepo.",
        "Developed type-safe data workflows end to end with Zod, Prisma, and TanStack Query.",
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
        "Founded and built a sports marketplace for discovering venues, booking pitches, finding players, forming teams, and organizing tournaments.",
        "Built the mobile app with React Native, TypeScript, and Supabase.",
        "Owned architecture, authentication, database design, booking workflows, and deployment from concept to production.",
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
        "Built production web and mobile applications for clients with React, Next.js, React Native, Node.js, and TypeScript.",
        "Delivered frontends, backend APIs, database schemas, third-party integrations, deployments, and ongoing maintenance.",
        "Turned client requirements into scoped technical plans and shipped within agreed timelines.",
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
        "Developed and maintained a large-scale React and TypeScript dashboard.",
        "Upgraded legacy dependencies to improve security, maintainability, and performance.",
        "Contributed to backend services built with Node.js and Express.js.",
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
        "Completed a seven-month full-stack training program and shipped 10 responsive web projects.",
      ],
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Kotlin", "Swift", "C++"],
    },
    {
      category: "Frontend, Mobile & Desktop",
      items: [
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "SwiftUI",
        "Jetpack Compose",
        "Electron",
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
        "Prisma",
        "Zod",
        "MongoDB",
        "Convex",
        "Supabase",
        "Firebase",
        "Redis",
        "Meilisearch",
      ],
    },
    {
      category: "AI & On-Device ML",
      items: [
        "LLM & Agent Engineering",
        "MCP",
        "RAG",
        "Vector Databases & Semantic Search",
        "Prompt & Context Engineering",
        "ONNX Runtime",
        "Core ML",
        "transformers.js / WebGPU",
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
        "Vitest",
      ],
    },
  ],
  projects: [
    {
      title: "Aoun",
      featured: true,
      techStack: [
        "Next.js",
        "TypeScript",
        "React",
        "Convex",
        "TanStack Form",
        "TanStack Table",
      ],
      description:
        "Free academic platform for Jordanian university students with searchable course resources and data, on a real-time Convex backend.",
      link: {
        label: "aoun.assoli.site",
        href: "https://aoun.assoli.site",
      },
    },
    {
      title: "Naqi: Halal Video Filter",
      featured: true,
      techStack: [
        "Kotlin",
        "Swift",
        "ONNX Runtime",
        "MediaCodec",
        "OpenGL ES",
        "AVFoundation",
      ],
      description:
        "On-device video pipeline that removes music and censors imagery using ONNX models, with MediaCodec and OpenGL ES on Android and AVFoundation on iOS.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.naqi",
      },
    },
    {
      title: "Kashaf Abi Ja'far",
      featured: true,
      techStack: [
        "Astro",
        "TypeScript",
        "Meilisearch",
        "Whisper ASR",
        "Tailwind CSS",
      ],
      description:
        "Full-text search across thousands of hours of Arabic lessons transcribed with Whisper, jumping to the exact second of each match.",
      link: {
        label: "alkulify.assoli.site",
        href: "https://alkulify.assoli.site",
      },
    },
    {
      title: "Sitr",
      featured: true,
      techStack: ["Swift", "SwiftUI", "ScreenCaptureKit", "Core ML", "AppKit"],
      description:
        "macOS app that detects people on screen with Core ML and covers them in real time through ScreenCaptureKit, fully offline.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/Sitr",
      },
    },
    {
      title: "Sada",
      featured: true,
      techStack: [
        "JavaScript",
        "Manifest V3",
        "transformers.js",
        "NLLB-200",
        "WebGPU",
        "WASM",
      ],
      description:
        "Browser extension that translates English YouTube subtitles into Arabic on-device, running NLLB-200 through transformers.js on WebGPU and WASM.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/sada",
      },
    },
    {
      title: "pastehtml",
      featured: true,
      techStack: ["Next.js", "TypeScript", "Convex", "MCP", "Tailwind CSS"],
      description:
        "Upload an HTML file and get a public URL on its own isolated origin, from the browser or from AI agents through an MCP server.",
      link: {
        label: "pastehtml.assoli.site",
        href: "https://pastehtml.assoli.site",
      },
    },
    {
      title: "Tawsilah Abshir",
      featured: true,
      techStack: [
        "React Native",
        "Expo",
        "TypeScript",
        "Maps",
        "Push Notifications",
        "React Query",
      ],
      description:
        "Ride-hailing app built specifically for Ajloun, with live maps and push notifications.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.assoliindustries.tawsilah",
      },
    },
    {
      title: "Ghadd",
      featured: true,
      techStack: [
        "Kotlin",
        "Android Accessibility Service",
        "ONNX Runtime",
        "NudeNet v3",
        "YOLOv8n",
      ],
      description:
        "Android accessibility service that filters images system-wide using on-device NudeNet and YOLOv8 models via ONNX Runtime.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/haramblur",
      },
    },
    {
      title: "Horizon",
      featured: true,
      techStack: [
        "Electron",
        "TypeScript",
        "React",
        "electron-vite",
        "Vitest",
        "Native bridges",
      ],
      description:
        "Electron desktop app that schedules eye breaks based on real activity detected through native OS bridges.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/horizon",
      },
    },
    {
      title: "Little Muslim",
      featured: true,
      techStack: [
        "Next.js",
        "TypeScript",
        "Convex Auth",
        "RTL",
        "Web Speech API",
      ],
      description:
        "111 illustrated Islamic lessons for children with family accounts, progress tracking, quizzes, and Web Speech API narration.",
      source: "https://github.com/haithamassoli/Teaching-Children-Islam",
      link: {
        label: "littlemuslim.assoli.site",
        href: "https://littlemuslim.assoli.site/",
      },
    },
    {
      title: "Al-Tibyan Educational Center",
      featured: true,
      techStack: [
        "React Native",
        "TypeScript",
        "Firebase",
        "Zustand",
        "React Query",
        "Reanimated",
      ],
      description:
        "Mobile app for managing Quran memorization circles, built with React Native and Firebase.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.majalis",
      },
    },
    {
      title: "EECommittee",
      featured: true,
      techStack: [
        "React Native",
        "Expo",
        "TypeScript",
        "Firebase",
        "Zustand",
        "React Query",
      ],
      description:
        "Course materials and resources for electrical engineering students in one mobile app.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.EECommitte",
      },
    },
    {
      title: "Fazawwijuhu",
      featured: true,
      techStack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Convex",
        "Better Auth",
        "Tailwind v4",
      ],
      description:
        "Supervised platform for lawful marriage introductions, with Better Auth and a Convex backend.",
      link: {
        label: "fazuwjuh.vercel.app",
        href: "https://fazuwjuh.vercel.app",
      },
    },
    {
      title: "Khatwa",
      featured: true,
      techStack: [
        "Kotlin",
        "Jetpack Compose",
        "Material 3",
        "Google Maps",
        "Routes API",
        "Roads API",
      ],
      description:
        "Android app that suggests a better ride-hailing pickup and drop-off point within walking distance, using the Google Routes and Roads APIs.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/Khatwa",
      },
    },
    {
      title: "Azkari / Dhikr",
      featured: true,
      techStack: ["JavaScript", "Swift", "SwiftUI", "Kotlin", "C#", "WPF"],
      description:
        "Periodic dhikr reminders on every screen: web, Apple platforms (SwiftUI), Android (Kotlin), and Windows (WPF).",
      link: {
        label: "dhikr.assoli.site",
        href: "https://dhikr.assoli.site",
      },
    },
    {
      title: "TeleStream",
      featured: true,
      techStack: ["Next.js", "TypeScript", "Telegram API", "Tailwind CSS"],
      description:
        "Merges every Telegram channel you follow into a single timeline using the Telegram API.",
      link: {
        label: "tele-timeline.vercel.app",
        href: "https://tele-timeline.vercel.app",
      },
    },
    {
      title: "Irtajil",
      techStack: ["Astro", "JavaScript", "PWA", "Service Worker", "RTL"],
      description:
        "Offline-capable PWA for practicing impromptu Arabic speaking: draw a topic, start the timer, talk.",
      source: "https://github.com/haithamassoli/Irtajil",
      link: {
        label: "irtajil.vercel.app",
        href: "https://irtajil.vercel.app",
      },
    },
    {
      title: "Wens",
      techStack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind v4",
        "Serwist",
        "PWA",
        "RTL",
      ],
      description:
        "Installable PWA with short games and activities for couples on one phone, no sign-up.",
      source: "https://github.com/haithamassoli/wens",
      link: {
        label: "wens-sigma.vercel.app",
        href: "https://wens-sigma.vercel.app",
      },
    },
    {
      title: "Ma'an",
      featured: true,
      techStack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Convex",
        "Tailwind v4",
        "RTL",
      ],
      description:
        "Couple games played on one device or across two phones, synced in real time with Convex.",
      source: "https://github.com/haithamassoli/romantic-game",
      link: {
        label: "romantic-game-one.vercel.app",
        href: "https://romantic-game-one.vercel.app",
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
      description:
        "Spaced-repetition flashcards for engineering interviews, scheduled with the Leitner system and stored locally.",
      link: {
        label: "flashcards.assoli.site",
        href: "https://flashcards.assoli.site",
      },
    },
    {
      title: "Hadanati",
      featured: true,
      techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "RTL"],
      description:
        "Nursery management system: attendance, assessments, fees, and a parent portal.",
      link: {
        label: "hadanati.assoli.site",
        href: "https://hadanati.assoli.site",
      },
    },
    {
      title: "Hirfati",
      featured: true,
      techStack: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "SEO",
        "RTL",
      ],
      description:
        "SEO-focused marketplace for finding trusted tradespeople in Jordan and requesting free quotes.",
      link: {
        label: "hirfati-jo.vercel.app",
        href: "https://hirfati-jo.vercel.app",
      },
    },
    {
      title: "Sarfees",
      featured: true,
      techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "RTL"],
      description:
        "Intercity ride-sharing between Jordan's governorates: post a trip or book a seat.",
      link: {
        label: "sarfees.vercel.app",
        href: "https://sarfees.vercel.app",
      },
    },
    {
      title: "Almadrsa",
      techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "RTL"],
      description: "Arabic e-learning platform for schools.",
      link: {
        label: "almadrsa.vercel.app",
        href: "https://almadrsa.vercel.app",
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
        "Escrow-style platform that protects both buyer and seller in a sale.",
      link: {
        label: "hafiz-platform.netlify.app",
        href: "https://hafiz-platform.netlify.app",
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
      description: "Bilingual digital guide to the Al-Jouf region.",
      link: {
        label: "apps.apple.com",
        href: "https://apps.apple.com/us/app/rooh-al-jouf/id6743066965",
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
        "Map of every park and public facility in Amman, with in-app reporting of broken facilities.",
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
        "Bilingual tourism guide and municipal complaints app for Ajloun Governorate.",
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
      description:
        "Election app with OTP-verified voting and automated results.",
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
      description:
        "Donation app connecting donors directly with people in need.",
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
      description:
        "Native camera app that blurs faces on-device at capture time, using CameraX and AVFoundation.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.halalcamera",
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
      description:
        "Removes music from any video locally with stem separation accelerated on Apple Silicon.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/mubah",
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
      description:
        "Watch YouTube and Facebook videos without music, using audio source separation on MPS or CUDA.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/nomusic",
      },
    },
    {
      title: "Al-Manal",
      techStack: ["JavaScript", "Next.js", "Scheduling logic", "RTL"],
      description:
        "Scheduling tool that finds an available substitute teacher for any school period.",
      link: {
        label: "school-teacher-substitution-finder.vercel.app",
        href: "https://school-teacher-substitution-finder.vercel.app",
      },
    },
    {
      title: "Ghurza",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "RTL", "SEO"],
      description: "Arabic crochet course, from the first stitch upward.",
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
        "Storefront for a Jordanian khimar and abaya atelier with WhatsApp-based ordering.",
      link: {
        label: "7jabk.vercel.app",
        href: "https://7jabk.vercel.app",
      },
    },
    {
      title: "Gift",
      featured: true,
      techStack: [
        "Next.js 16",
        "React Three Fiber",
        "drei",
        "Convex",
        "Tailwind CSS",
        "Turbopack",
      ],
      description:
        "Animated 3D gifts built with React Three Fiber, sent as a link.",
      link: {
        label: "gift.assoli.site",
        href: "https://gift.assoli.site",
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
      description: "Animated wedding invitation that lives at a link.",
      link: {
        label: "h-wedding.assoli.site",
        href: "https://h-wedding.assoli.site",
      },
    },
    {
      title: "portfolio.assoli.site",
      techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "SEO"],
      description:
        "Multi-page portfolio with a command menu and animated transitions.",
      link: {
        label: "portfolio.assoli.site",
        href: "https://portfolio.assoli.site",
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
        "Previous single-page portfolio, driven by a command menu and animated with Framer Motion.",
      link: {
        label: "assoli.site",
        href: "https://assoli.site",
      },
    },
    {
      title: "cohere-transcribe",
      role: "Contributor",
      techStack: [
        "Python",
        "Silero VAD",
        "GPU batching",
        "SRT / VTT",
        "Hugging Face",
      ],
      description:
        "High-throughput Arabic and English transcription with Silero VAD, GPU batching, and SRT/VTT export.",
      link: {
        label: "github.com",
        href: "https://github.com/AliOsm/cohere-transcribe",
      },
    },
    {
      title: "Tafrigh",
      role: "Contributor",
      techStack: ["Python", "Whisper", "wit.ai", "SRT / VTT"],
      description:
        "Transcribes Arabic audio and generates SRT and VTT subtitles with Whisper or wit.ai.",
      link: {
        label: "tafrigh.ieasybooks.com",
        href: "https://tafrigh.ieasybooks.com",
      },
    },
    {
      title: "T3 Code",
      role: "Contributor",
      techStack: ["TypeScript", "React", "React Native", "Electron"],
      description: "Control the coding agents on your machine, from anywhere.",
      link: {
        label: "t3.codes",
        href: "https://t3.codes",
      },
    },
    {
      title: "Recruiter Connector",
      role: "Client work",
      techStack: [
        "React Native",
        "TypeScript",
        "Real-time chat",
        "Push Notifications",
      ],
      description:
        "Marketplace app where recruiters trade candidate profiles, with real-time chat and push notifications.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.ofi.recruiter_new",
      },
    },
  ],
};
