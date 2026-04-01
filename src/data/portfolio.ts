export const personalInfo = {
    name: "Trần Ngọc Nhật Quang",
    role: "Frontend Developer",
    yearsOfExperience: 5,
    email: "nhatquang1397@gmail.com",
    github: "https://github.com/tnnquang",
    linkedin: "https://linkedin.com/in/tnnquang",
    location: "Ho Chi Minh City, Vietnam",
    summary:
        "Frontend Developer with 5+ years of React.js and 4+ years of Next.js experience, delivering production applications across fintech and e-commerce domains. Focused on performance optimization, complex interactive UI architecture, and applying React concurrent patterns to improve user experience. Experienced in mentoring junior developers, coordinating cross-functional teams, and building design systems from scratch without existing specs.",
    shortTermGoal:
        "Deepen full-stack capabilities and gain end-to-end understanding of application flow from UI through backend layers and networking, while expanding proficiency in new languages and tools.",
    longTermGoal:
        "Transition toward project management or team lead roles with greater ownership of technical direction and team growth.",
};

export const education = {
    school: "University of Science — Ho Chi Minh City (HCMUS)",
    degree: "Bachelor of Science in Information Technology",
    period: "09/2016 – 09/2019",
};

export const techStack = [
    {
        category: "Frontend",
        color: "cyan",
        skills: [
            "React.js",
            "Next.js 12–16",
            "TypeScript",
            "UmiJS",
            "Redux",
            "Redux Saga",
            "TanStack Query",
            "TanStack Virtual",
            "React Hook Form",
            "React 19",
        ],
    },
    {
        category: "UI & Libraries",
        color: "purple",
        skills: [
            "TailwindCSS",
            "Shadcn/ui",
            "Ant Design",
            "ProComponents",
            "Material UI",
            "DnD-Kit",
            "Framer Motion",
            "Recharts",
            "CSS-in-JS",
            "SCSS Modules",
        ],
    },
    {
        category: "Architecture",
        color: "green",
        skills: ["Microfrontend", "Module Federation", "SSR / ISR", "Context API", "RBAC", "Adapter Pattern"],
    },
    {
        category: "Backend & Infra",
        color: "pink",
        skills: ["NestJS", "Express.js", "GraphQL", "JsonRPC", "Prisma", "MongoDB", "PostgreSQL", "Socket.IO"],
    },
    {
        category: "Tooling & Testing",
        color: "cyan",
        skills: [
            "Jest",
            "React Testing Library",
            "openapi-typescript",
            "Vite",
            "Webpack",
            "Git",
            "Jira",
            "Agile / Scrum",
        ],
    },
];

export const experiences = [
    {
        company: "Finviet Technology Corporation",
        role: "Frontend Developer",
        period: "02/2025 – Present",
        type: "Full-time",
        projects: [
            {
                name: "Lending Admin Dashboard",
                tech: ["UmiJS", "ProComponents", "Ant Design", "Redux", "DnD-Kit", "TanStack Virtual", "Recharts", "openapi-typescript", "Jest"],
                team: 15,
                highlights: [
                    "Consolidated form data into a Map-based indexed structure, replacing redundant array copies and enabling O(1) lookups across 100+ configurable fields",
                    "Engineered a multi-layer drag-and-drop system handling 4 interaction types: field-to-group assignment, within-group reorder, cross-group transfer, and group reorder",
                    "Developed a custom formula editor with real-time syntax highlighting (8-type tokenizer), contentEditable cursor restoration via DFS DOM traversal, and Vietnamese diacritics normalization",
                    "Adopted React concurrent features (useTransition, useDeferredValue) to keep UI responsive during heavy form computations",
                    "Integrated TanStack Virtual with Ant Design Form.List for virtual scrolling on forms with 50+ dynamic fields",
                    "Established type-safe API workflow with openapi-typescript to generate TypeScript definitions from Swagger specs",
                ],
            },
            {
                name: "E-Invoice Webview For Mobile",
                tech: ["React.js 19", "Material UI", "TanStack Query", "React Hook Form", "Context API", "Framer Motion"],
                team: 2,
                highlights: [
                    "Set up entire project foundation from scratch — component hierarchy, custom hooks, shared contexts, and project-wide configurations",
                    "Served as primary frontend liaison coordinating with Backend, BA, PO, Design, and PM teams",
                    "Created a tailored design system by wrapping and extending Material UI components for the company's mobile app ecosystem",
                    "Architected a multi-step form workflow using Context API for complex user journeys across sub-screens",
                    "Integrated IntrustCA digital signature provider with an extensible adapter pattern for future CA providers",
                    "Shipped production release enabling digital signature and e-invoice as a shared service in all company mobile apps",
                ],
            },
            {
                name: "Microfrontend Architecture with Next.js",
                tech: ["Next.js 15", "Module Federation", "UmiJS"],
                team: null,
                highlights: [
                    "Proposed and implemented enterprise microfrontend architecture with Next.js 15 as host shell, supporting SSR and independent deployment",
                    "Built centralized authentication layer with role-based access control (RBAC) governing granular CRUD permissions across all remotes",
                    "Utilized Next.js middleware for conditional routing logic and shared utilities between host and UmiJS remotes",
                    "Authored comprehensive technical documentation and delivered an internal presentation as a reference guide",
                ],
            },
        ],
    },
    {
        company: "Gihot Technology",
        role: "Frontend Developer",
        period: "07/2022 – 09/2024",
        type: "Full-time",
        projects: [
            {
                name: "Nemoverse — Web3 NFT Marketplace",
                tech: ["Next.js 12", "Redux Saga", "GraphQL", "JsonRPC", "Material UI"],
                team: 10,
                highlights: [
                    "Designed a GraphQL integration layer with Redux Saga for async blockchain data fetching and caching",
                    "Implemented core NFT operations (minting, burning, swapping) via JsonRPC smart contract calls",
                    "Translated Figma mockups into pixel-perfect responsive interfaces with custom SCSS modules",
                ],
            },
            {
                name: "ENS Registration Platform",
                tech: ["Next.js 12", "Redux Saga", "GraphQL", "styled-components", "JsonRPC", "i18n"],
                team: 10,
                highlights: [
                    "Designed end-to-end domain registration workflow connecting frontend to ENS smart contracts via JsonRPC",
                    "Implemented i18n support covering multiple languages for a global user base",
                    "Developed a reusable component library with styled-components establishing consistent visual language",
                ],
            },
            {
                name: "Decentralized Exchange (DEX)",
                tech: ["Next.js 12", "Redux Saga", "GraphQL", "Material UI", "JsonRPC"],
                team: 10,
                highlights: [
                    "Implemented multi-token swap functionality with real-time price chart visualization",
                    "Structured Redux state management to handle high-frequency trading data while maintaining UI responsiveness",
                ],
            },
            {
                name: "Nemoverse Admin Dashboard",
                tech: ["Next.js 14 App Router", "Redux Saga", "GraphQL", "Ant Design", "TailwindCSS"],
                team: 10,
                highlights: [
                    "Developed internal admin panel for user management and NFT minting with modular component architecture",
                ],
            },
            {
                name: "Mobile NFT Marketplace",
                tech: ["React Native", "React Context", "GraphQL", "JsonRPC", "i18n"],
                team: 10,
                highlights: [
                    "Built cross-platform mobile app for browsing, managing, and trading NFTs with integrated wallet connectivity",
                    "Structured API data flow using React Context to minimize redundant network requests",
                ],
            },
        ],
    },
    {
        company: "Freelancer",
        role: "Next.js Developer",
        period: "01/2025 – 10/2025",
        type: "Freelance",
        projects: [
            {
                name: "Bong7.vn — Football News & Live Scores",
                tech: ["Next.js 15 App Router", "TailwindCSS", "Shadcn/ui", "Redux Saga", "GraphQL"],
                team: 8,
                highlights: [
                    "Improved page load with custom image loader — priority flags for above-fold, lazy loading, responsive srcSet",
                    "Generated structured JSON-LD data server-side via Next.js middleware for rich snippets and SEO",
                    "Integrated WordPress SDK with ISR caching strategy to balance content freshness and server load",
                    "Defined comprehensive metadata strategy — Open Graph, canonical URLs, dynamic title/description",
                ],
            },
            {
                name: "Telegram Mini App",
                tech: ["Next.js 15", "Shadcn/ui", "TanStack Query", "openapi-typescript"],
                team: 8,
                highlights: [
                    "Automated API client layer with openapi-typescript generating type-safe functions from Swagger specs",
                    "Implemented Telegram-native auth and daily check-in reward system with real-time point balance updates",
                    "Built infinite scroll for match listings using intersection observers and windowed rendering",
                    "Developed leaderboard and user prediction history with real-time sync via TanStack Query polling",
                ],
            },
        ],
    },
];

export const sideProjects = [
    {
        name: "News Website",
        description: "Kenh14-style news platform with full editorial CMS and reader experience",
        tech: ["Next.js 14", "NestJS", "Prisma", "PostgreSQL", "TailwindCSS"],
        github: null,
    },
    {
        name: "Movie Streaming Platform",
        description: "Real-time streaming app with room-based watch parties via Socket.IO",
        tech: ["Next.js 14", "Socket.IO", "Express.js", "MongoDB", "TailwindCSS"],
        github: "#",
    },
    {
        name: "Comic Reading Platform",
        description: "Chapter-based comic reader with CDN-optimized image delivery",
        tech: ["Next.js 14", "Express.js", "MongoDB", "TailwindCSS"],
        github: "#",
    },
    {
        name: "Live Football Streaming",
        description: "Live match streaming with real-time score feeds and commentary",
        tech: ["Next.js 14", "TailwindCSS"],
        github: null,
    },
    {
        name: "Real-time Chat App",
        description: "Messenger-style chat with rooms, typing indicators, and read receipts",
        tech: ["Next.js 13", "Socket.IO", "Express.js", "MongoDB"],
        github: "#",
    },
    {
        name: "E-commerce Platform",
        description: "Full-featured bike e-commerce (xedap.vn) with cart, orders, and admin panel",
        tech: ["Next.js 13", "NestJS", "MongoDB", "TailwindCSS"],
        github: null,
    },
];

export const coreCompetencies = [
    "Technical Mentorship",
    "Code Review & Documentation",
    "UI/UX Problem Solving",
    "Cross-functional Collaboration",
    "Agile / Scrum",
    "Self-directed Design Implementation",
];
