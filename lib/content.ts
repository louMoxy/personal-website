/** Add your PDF at public/cv.pdf (same path as cvPath) so Download CV links work. */
export const site = {
  name: "Louise Moxhay",
  title: "Louise Moxhay — Principal Frontend Engineer",
  description:
    "Principal frontend engineer in London. React, TypeScript, data visualization, design systems, and interfaces that make hard things feel simple.",
  cvPath: "/cv.pdf",
} as const;

export const hero = {
  headline: "I build interfaces that make hard things feel simple.",
  subline:
    "React, TypeScript, data viz — and a love to add whimsy and fun where I can.",
} as const;

/** Plain text segments; `mark: true` renders as an animated keyword chip; `list` renders a bullet list. */
export type AboutSegment =
  | { readonly text: string }
  | { readonly text: string; readonly mark: true }
  | { readonly list: readonly string[] };

export const about = {
  blocks: [
    [
      { text: "I'm a frontend engineer based in London with over " },
      { text: "ten years", mark: true },
      { text: " of experience building products that people actually rely on." }
    ],
    [
      { text: "My favourite problems sit at the edges — where" },
      { text: "design thinking", mark: true },
      { text: " meets engineering, where " },
      { text: "messy data", mark: true },
      { text: " needs to become something a person can genuinely understand.\n\n" },
      { text: "I've built:" },
      {
        list: [
          "Analytics platforms",
          "Design systems",
          "Chrome extensions",
          "E-commerce stores",
        ],
      },
      { text: " I've grown frontend teams from scratch, worked directly with " },
      { text: "enterprise clients", mark: true },
      { text: ", and shipped things that had to work under " },
      { text: "real pressure", mark: true },
      { text: "." },
    ],
    [
      { text: "When I'm not at a keyboard I'm at a gig, a theatre, or wandering around London in search of good vegan food. " },
      { text: "I make small games in Unity on the side — partly because I love them, partly because I'm obsessed with what makes an interface feel good to use." },
    ],
    [
      { text: "I'm open to " },
      { text: "contracts", mark: true },
      { text: " and " },
      { text: "full-time", mark: true },
      { text: " roles where the work is genuinely interesting and the thing being built actually matters to someone." },
    ],
  ] as const satisfies readonly AboutSegment[][],
} as const;

export type ProjectKind = "current" | "past" | "cofounder" | "side";

export type Project = {
  id: string;
  title: string;
  kind: ProjectKind;
  kindLabel: string;
  summary: string;
  tags: string[];
  stats?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "handshaik",
    title: "Handshaik",
    kind: "current",
    kindLabel: "Current Contract",
    summary:
      "An AI-powered platform helping founders and advisors evaluate companies for M&A. I joined early to build out the frontend — designing the component system, building customer-facing flows, and translating complex backend data into interfaces that feel effortless to use.",
    tags: ["Next.js", "React", "Design system", "GraphQL"],
  },
  {
    id: "scalable",
    title: "Scalable",
    kind: "past",
    kindLabel: "5 years",
    summary:
      "Built and led the frontend of an analytics and data intelligence platform used by enterprise clients including HSBC. I joined as the only engineer and grew the team to six. Along the way I introduced TypeScript, built two Chrome extensions from scratch, established the testing culture, and owned production quality end to end.",
    tags: ["React", "D3.js", "TypeScript", "Chrome extensions"],
    stats: [
      { label: "Team grown", value: "1 → 6 engineers" },
      { label: "Extensions built", value: "3 from scratch" },
      { label: "Role", value: "Senior → Principal" },
    ],
  },
  {
    id: "lucky-night",
    title: "Lucky Night Studio",
    kind: "cofounder",
    kindLabel: "Co-founder",
    summary:
      "Co-founded a design-led digital studio focused on women-led businesses. Built client sites in Next.js, designed and sold website templates, and delivered courses on SEO and AI tools. The Y2K Shopify theme is still one of my favourite things I've made.",
    tags: ["Next.js", "Shopify", "Sanity CMS", "Templates"],
  },
  {
    id: "lil-byte",
    title: "Lil Byte Games",
    kind: "side",
    kindLabel: "Side project",
    summary:
      "My game dev corner of the internet. I build small Unity games to learn as I go — Bug Buddy, Byte Pong, Space Shapes — all playable in browser. My first Steam release is incoming. I write about what I'm building, what I'm breaking, and what makes games feel the way they do.",
    tags: ["Unity", "C#", "WebGL", "Steam"],
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React & Next.js", "TypeScript", "TailwindCSS", "HTML & CSS"],
  },
  {
    title: "Data & viz",
    items: ["D3.js", "TanStack Query", "REST & GraphQL", "Analytics platforms"],
  },
  {
    title: "Quality",
    items: ["Jest & Playwright", "Cypress", "Storybook", "CI/CD"],
  },
  {
    title: "CMS & commerce",
    items: ["Shopify", "Sanity", "Contentful"],
  },
  {
    title: "Creative & 3D",
    items: ["Unity", "C#", "Three.js (learning)"],
  },
];

/** Controls image frame shape so cards read at different sizes in the masonry layout */
export type PortfolioCardSize =
  | "standard"
  | "wide"
  | "tall"
  | "square"
  | "cinema";

export type PortfolioItem = {
  id: string;
  title: string;
  href: string;
  image: string;
  size?: PortfolioCardSize;
  /** Crop anchor when using object-cover (default center) */
  imagePosition?: "top" | "center";
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "moxiethemes",
    title: "Moxiethemes",
    href: "https://moxiethemes.com",
    image: "/portfolio/moxiethemes.png",
    size: "tall",
    imagePosition: "top",
  },
  // {
  //   id: "lil-byte",
  //   title: "Lil Byte",
  //   href: "https://lilbytegames.com",
  //   image: "/portfolio/placeholder.svg",
  //   size: "square",
  // },
  {
    id: "pixie-booth",
    title: "Pixie Booth — Photography booth website",
    href: "https://www.thepixiebooth.com",
    image: "/portfolio/Pixie-booth.jpg",
    size: "cinema",
    imagePosition: "top",
  },
  {
    id: "lash",
    title: "Lash website",
    href: "https://eyelashes-site.netlify.app",
    image: "/portfolio/Lash-website.jpg",
    size: "standard",
  },
];

export const contact = {
  availability:
    "I'm currently open to frontend contracts, particularly in product, fintech, or anything with interesting data to visualise. If you're building something you're proud of and need someone who gives a damn about the details — let's talk.",
  email: "louisemoxy@gmail.com",
  links: [
    { label: "Email", href: "mailto:louisemoxy@gmail.com" },
    { label: "GitHub", href: "https://github.com/louMoxy", handle: "louMoxy" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/louisemoxhay",
      handle: "louisemoxhay",
    },
    {
      label: "Lil Byte Games",
      href: "https://lilbytegames.com",
    },
  ],
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
] as const;
