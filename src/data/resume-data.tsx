import { GitHubIcon, LinkedInIcon, PlayStoreIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Haitham Assoli",
  initials: "HA",
  location: "Amman, Jordan",
  locationLink: "https://www.google.com/maps/place/Amman",
  about:
    "Detail-oriented Web & Mobile FullStack Developer dedicated to building high-quality products.",
  summary:
    "I love turning beautiful designs into usable websites that respond to various devices and user contexts and are powered by code that’s just as beautiful, as well as scalable. I always seek perfection to make my projects unique and creative and I do so by keeping my eyes on the new tools, reading articles, and following the right people.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/74528836?s=400&u=6d3ef2f0aab56016211b826c9457156aee8c8c81&v=4",
  personalWebsiteUrl: "https://haitham-assoli-resume.vercel.app/",
  contact: {
    email: "haitham.b.assoli@gmail.com",
    tel: "+962775331416",
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
        url: "https://play.google.com/store/apps/developer?id=Haitham+Assoli",
        icon: PlayStoreIcon,
      },
    ],
  },
  education: [
    {
      school: "Irbid National University",
      badges: [],
      degree: "Bachelor's degree, Computer Science - Excellent",
      start: "2022",
      end: "2024",
    },
    {
      school: "Jordan University of Science and Technology",
      badges: ["Incomplete"],
      degree:
        "Bachelor's degree, Electrical and Electronics Engineering - Very Good",
      start: "2018",
      end: "2022",
    },
  ],
  certifications: [
    // {
    //   title: "AWS DevOps",
    //   organization: "Cloud Native Base Camp",
    //   description:
    //     "Focuses on core database engineering concepts, not SQL or programming. Covers advanced topics such as Indexing, Partitioning, Sharding, Replication, B-trees, Concurrency Control, Database Engines, and Security.",
    //   link: "https://media.licdn.com/dms/image/v2/D4E2DAQEMdqFJ-fG1Tg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1700185915279?e=1728586800&v=beta&t=zngIo0WeaB-MVMmwkq_ugfuGaLnzuvnv0sGjTcPnPfg",
    //   date: "Feb 2024",
    //   badges: ["24 hours"],
    // },
    // {
    //   title: "Data Structures Decode",
    //   organization: "Cloud Native Base Camp",
    //   description:
    //     "Focuses on core database engineering concepts, not SQL or programming. Covers advanced topics such as Indexing, Partitioning, Sharding, Replication, B-trees, Concurrency Control, Database Engines, and Security.",
    //   link: "https://media.licdn.com/dms/image/v2/D4E2DAQEMdqFJ-fG1Tg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1700185915279?e=1728586800&v=beta&t=zngIo0WeaB-MVMmwkq_ugfuGaLnzuvnv0sGjTcPnPfg",
    //   date: "Feb 2024",
    //   badges: ["24 hours"],
    // },
    {
      title: "Algorithms Analysis and Design from scratch",
      organization: "Cloud Native Base Camp",
      description:
        "Thinking through code before writing it and explore common approaches to coding. This builds a solid foundation for your work.",
      link: "https://media.licdn.com/dms/image/v2/D4E2DAQHCBWtSwAMnjQ/profile-treasury-document-cover-images_800/profile-treasury-document-cover-images_800/0/1728290255865?e=1728903600&v=beta&t=PXXnJmhoW6dXaSfGtGBvu3-0fk7hiU4ThXsJqt_ZHeI",
      date: "Oct 2024",
      badges: [],
    },
    {
      title: "Node.js From Scratch",
      organization: "Cloud Native Base Camp",
      description: "How Node.js works behind the scenes",
      link: "https://cloudnativebasecamp.com/courses/node-js-from-scratch/",
      date: "Oct 2024",
      badges: [],
    },
    {
      title: "Fundamentals of Database Engineering",
      organization: "Udemy",
      description:
        "Focuses on core database engineering concepts, not SQL or programming. Covers advanced topics such as Indexing, Partitioning, Sharding, Replication, B-trees, Concurrency Control, Database Engines, and Security.",
      link: "https://media.licdn.com/dms/image/v2/D4E2DAQEMdqFJ-fG1Tg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1700185915279?e=1728586800&v=beta&t=zngIo0WeaB-MVMmwkq_ugfuGaLnzuvnv0sGjTcPnPfg",
      date: "Feb 2023",
      badges: ["24 hours"],
    },
    {
      title: "JavaScript Algorithms and Data Structures Masterclass",
      organization: "Udemy",
      description:
        "Comprehensive curriculum covering both foundational and advanced topics such as Big O notation, Algorithms, and Data structures.",
      link: "https://media.licdn.com/dms/image/v2/D4E2DAQEChtxNRCWn3w/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1700186000489?e=1728590400&v=beta&t=5wMzilkkAwJGWXUAh4Vohf0naIrBxAW400bYm-FlQnU",
      date: "Feb 2022",
      badges: ["22 hours"],
    },
    {
      title: "React Native - The Practical Guide",
      organization: "Udemy",
      description:
        "Explore the React Native ecosystem, covering core concepts, responsive design, navigation, and using native components like maps and the camera.",
      link: "https://www.udemy.com/certificate/UC-28ff8b71-f242-47cd-be59-f8b06b2cc43d/",
      date: "Apr 2022",
      badges: ["58 hours"],
    },
    {
      title: "Linux Basics Course",
      organization: "Flex Courses",
      description:
        "Learn essential Linux skills, focusing on Command Line proficiency and system basics for effective use.",
      link: "https://www.flexcourses.com/certificates/401651095889/view",
      date: "Apr 2022",
      badges: ["3 hours"],
    },
  ],
  work: [
    {
      company: "Freelance",
      link: "",
      badges: [],
      title: "Web & Mobile FullStack Developer",
      start: "2022",
      end: null,
      description:
        "Collaborated with clients to gather requirements, propose technical solutions, and deliver high-quality products within deadlines.",
    },
    {
      company: "Repzo inc",
      link: "https://repzo.com/",
      badges: [],
      title: "Software Engineer",
      start: "2022",
      end: "2023",
      description:
        "Worked on creating and keeping up a sizable dashboard. Code and dependencies were updated to keep the system up to date with the newest versions, enhancing security and speed. Technologies: TypeScript, React, Node.js with express.",
    },
    {
      company: "Orange Jordan",
      link: "https://orange.jo/",
      badges: ["Internship"],
      title: "Full-stack Developer Trainee",
      start: "2021",
      end: "2022",
      description:
        "A 7-month internship, gaining hands-on experience with web development technologies. Developed 10 projects that involved building dynamic websites. Collaborated with peers and mentors to deliver functional and user-friendly solutions.",
    },
    {
      company: "EECommittee",
      link: "https://www.facebook.com/groups/eelajna.just",
      badges: ["Volunteer"],
      title: "Full Stack Developer",
      start: "2018",
      end: null,
      description:
        "Collaborated closely with the group to enhance classmates educational experiences.",
    },
  ],
  skills: [
    "C++",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "React Query",
    "React Native",
    "Next.js",
    "Framer Motion",
    "NestJS",
    "Express",
    "Php",
    "Laravel",
    "MySQL",
    "Firebase",
    "Tailwind CSS",
    "Node.js",
    "Figma",
    "Git",
    "SEO",
    "UX",
    "Linux",
    "Algorithms",
    "Data Structures",
    // "AWS",
  ],
  projects: [
    {
      title: "Portfolio",
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Framer Motion",
        "Tailwind CSS",
        "SEO",
        "UI/UX",
      ],
      description:
        "Portfolio website showcasing my skills in Web and Mobile FullStack Development.",
      link: {
        label: "vercel.app",
        href: "https://haitham-assoli-portfolio.vercel.app/",
      },
    },
    {
      title: "EECommittee",
      techStack: [
        "React Native",
        "TypeScript",
        "Zod",
        "Firebase",
        "Zustand",
        "React Query",
        "Reanimated",
        "Caching",
      ],
      description: "Application for serving electrical engineering students.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.EECommitte",
      },
    },
    {
      title: "Majalis",
      techStack: [
        "React Native",
        "TypeScript",
        "Zod",
        "Firebase",
        "Zustand",
        "React Query",
        "Reanimated",
        "Caching",
        "Skia",
        "Restyle",
        "Notifications",
        "UI/UX",
      ],
      description:
        "An application for reciting and organizing the memorization of the Quran.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.majalisquran",
      },
    },
    {
      title: "Kheir",
      techStack: [
        "React Native",
        "TypeScript",
        "Zod",
        "Firebase",
        "Zustand",
        "React Query",
        "Reanimated",
        "Restyle",
      ],
      description: "An application to donate to the needy and help them.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.kheir",
      },
    },
    {
      title: "Telescope",
      techStack: [
        "React Native",
        "TypeScript",
        "Zod",
        "Firebase",
        "UI/UX",
        "React Query",
        "Reanimated",
        "Notifications",
      ],
      description: "Ajloun Governorate Tourism Service Application",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.ajloun.telescope23",
      },
    },
    {
      title: "Azkari",
      techStack: ["Javascript", "VSCode Extension"],
      description:
        "VSCode extension to remind you to remember Allah every now and then.",
      link: {
        label: "marketplace.visualstudio.com",
        href: "https://marketplace.visualstudio.com/items?itemName=HaithamAssoli.azkari",
      },
    },
    {
      title: "Marafiq+",
      techStack: [
        "React Native",
        "TypeScript",
        "Google Maps",
        "Zod",
        "Firebase",
        "Zustand",
        "React Query",
        "Reanimated",
        "Restyle",
      ],
      description:
        "An application that helps you find parks and public facilities.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.hadiqa",
      },
    },
    {
      title: "Sawt",
      techStack: [
        "React Native",
        "TypeScript",
        "OTP",
        "Zod",
        "Firebase",
        "Zustand",
        "React Query",
        "Reanimated",
        "Restyle",
      ],
      description:
        "Implementing an innovative technological solution that aims to automate and facilitate election processes.",
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.haithamassoli.sawt",
      },
    },
    {
      title: "Boost Me",
      techStack: [
        "Javascript",
        "React",
        "Php",
        "Laravel",
        "MySQL",
        "Tailwind CSS",
      ],
      description:
        "Book a professional player to help you perform difficult tasks in games.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/Boost-me",
      },
    },
    {
      title: "Online Quizzes",
      techStack: ["Javascript", "Php", "Laravel", "MySQL", "API", "Sass"],
      description: "Website for managing and performing online exams.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/Online-Quiz-Laravel",
      },
    },
    {
      title: "Booking System",
      techStack: [
        "Javascript",
        "React",
        "Node.Js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      description: "Restaurant table reservation system.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/Booking-System",
      },
    },
    {
      title: "Coza Store",
      techStack: ["Javascript", "Php", "MySQL", "Sass"],
      description: "Online store for the latest clothes and accessories.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/Coza-Store-PHP",
      },
    },
    {
      title: "Food Funday Restaurant",
      techStack: ["Javascript", "React", "Tailwind CSS", "Sass"],
      description:
        "A system for reserving a restaurant table with food or taking the order upon arrival at the restaurant.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/Food-Funday-Restaurant",
      },
    },
    {
      title: "Amazon Clone",
      techStack: ["Javascript", "React", "Firebase", "MUI"],
      description:
        "E-commerce replicates the familiar layout and design of Amazon, allowing users to browse and purchase products.",
      link: {
        label: "github.com",
        href: "https://github.com/haithamassoli/Amazon-Clone",
      },
    },
  ],
} as const;
