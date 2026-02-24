type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  tags: string[];
};

type ProjectItem = {
  name: string;
  description: string;
  tags: string[];
  links: { label: string; href: string; external?: boolean; muted?: boolean }[];
};

const experience: ExperienceItem[] = [
  {
    company: "Intellifi",
    role: "Senior Product Analyst",
    dates: "Dec 2024 - Present",
    bullets: [
      "Owned discovery and delivery for loan origination workflow improvements supporting $2B+ annual volume.",
      "Led cross-functional collaboration to scope releases, manage dependencies, and ship iterative improvements.",
      "Led modernization of a legacy asset management platform supporting $30B+ AUM, improving usability and maintainability.",
      "Created Figma mockups and AI-assisted functional prototypes to validate features pre-build and accelerate engineering execution.",
    ],
    tags: ["Product", "Delivery", "Figma", "Analytics"],
  },
  {
    company: "Autograph Analytics",
    role: "Data Insights Strategist",
    dates: "Feb 2024 - Nov 2024",
    bullets: [
      "Built and scaled executive dashboards for automotive dealer groups; standardized KPI definitions to improve reporting consistency and trust.",
      "Centralized and transformed marketing data (Google Analytics + paid platforms) using dbt, SQL, and Python.",
      "Improved client onboarding time by 60% by upgrading data intake and transformation workflows.",
    ],
    tags: ["SQL", "Python", "dbt", "Dashboards", "Data Modeling"],
  },
  {
    company: "Addy",
    role: "Product Manager",
    dates: "Sep 2021 - Oct 2022",
    bullets: [
      "Directed end-to-end development of a real-estate crowdfunding platform enabling 4,000+ investors to contribute $7.6M.",
      "Doubled MAUs in 8 months by iterating on onboarding and key workflows informed by user feedback.",
      "Built and managed a direct user feedback loop via Discord to accelerate discovery and validate roadmap decisions.",
      "Defined acquisition and activation success metrics; built shared dashboards to standardize KPI tracking.",
    ],
    tags: ["Product", "Growth", "Metrics", "User Research"],
  },
];

const projects: ProjectItem[] = [
  {
    name: "RunRoutr",
    description:
      "A run route generator that creates loop routes by target distance.",
    tags: ["Next.js", "Mapbox", "Routing"],
    links: [
      {
        label: "Live",
        href: "https://run-routr.vercel.app/",
        external: true,
      },
      {
        label: "GitHub (placeholder)",
        href: "https://github.com/colebpotts",
        external: true,
        muted: true,
      },
    ],
  },
];

function SectionLabel({ id, title }: { id: string; title: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400"
    >
      {title}
    </h2>
  );
}

function TagChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-neutral-300/90 bg-white/80 px-2.5 py-1 text-[11px] text-neutral-600">
      {label}
    </span>
  );
}

function TextLink({
  href,
  children,
  external,
  muted,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  muted?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`underline underline-offset-4 transition ${
        muted
          ? "decoration-neutral-200 text-neutral-500 hover:decoration-neutral-400 hover:text-neutral-700"
          : "decoration-neutral-300 text-neutral-700 hover:decoration-neutral-600 hover:text-neutral-950"
      }`}
    >
      {children}
    </a>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.84a9.3 9.3 0 0 1 2.5.35c1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.58 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.28 10.28 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
      <path d="M4.98 3.5a2.49 2.49 0 1 0 0 4.98 2.49 2.49 0 0 0 0-4.98ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.7 4.76 6.22V21h-4v-5.48c0-1.31-.02-3-1.8-3-1.8 0-2.08 1.43-2.08 2.9V21h-4V9Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-8 w-8 fill-none stroke-current"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-14">
        <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-20">
          <aside className="lg:sticky lg:top-14 lg:self-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-neutral-950">
                  Cole Beevor-Potts
                </h1>
                <p className="max-w-xs text-[15px] leading-7 text-neutral-700">
                  Product + data guy building useful software and exploring
                  real-world problems.
                </p>
              </div>

              <nav aria-label="Section navigation" className="pt-2">
                <ul className="space-y-3 text-sm tracking-[0.12em] text-neutral-400">
                  <li>
                    <a
                      href="#about"
                      className="inline-flex items-center gap-3 uppercase hover:text-neutral-700"
                    >
                      <span className="h-px w-5 bg-neutral-300" />
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="inline-flex items-center gap-3 uppercase text-neutral-700 hover:text-neutral-950"
                    >
                      <span className="h-px w-5 bg-neutral-500" />
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-3 uppercase hover:text-neutral-700"
                    >
                      <span className="h-px w-5 bg-neutral-300" />
                      Projects
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="mt-16 text-sm text-neutral-600">
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/colebpotts"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-neutral-500 transition hover:text-neutral-900"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/colebeevor-potts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-neutral-500 transition hover:text-neutral-900"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="mailto:colebpotts@gmail.com"
                  aria-label="Email"
                  className="text-neutral-500 transition hover:text-neutral-900"
                >
                  <MailIcon />
                </a>
              </div>
            </div>
          </aside>

          <div className="space-y-20 pb-16 lg:pt-1">
            <section aria-labelledby="about" className="space-y-5">
              <SectionLabel id="about" title="About" />
              <div className="max-w-2xl space-y-5 text-[15px] leading-8 text-neutral-700">
                <p>
                  I work across product, analytics, and operations, with a focus
                  on turning ambiguous problems into shipped software and usable
                  systems. Most of my work sits at the intersection of discovery,
                  execution, and measurement.
                </p>
                <p>
                  I like roles where I can move between strategy and details:
                  talking to users, defining scope, building prototypes, working
                  with engineers, and making sure the data tells us whether
                  changes are actually helping.
                </p>
              <p>
                Outside of work, you can find me sailing, camping, or playing
                beach volleyball, enjoying coffee and great food, and soaking
                in being alive with my buds.
              </p>
              </div>
            </section>

            <section aria-labelledby="experience" className="space-y-7">
              <SectionLabel id="experience" title="Experience" />
              <div className="space-y-12">
                {experience.map((item) => (
                  <article key={`${item.company}-${item.role}`} className="space-y-4">
                    <div className="grid gap-2 text-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6">
                      <h3 className="text-[15px] leading-7 text-neutral-900">
                        <span className="font-semibold">{item.role}</span>{" "}
                        <span className="text-neutral-600">@ {item.company}</span>
                      </h3>
                      <p className="text-sm text-neutral-500 sm:pt-0.5">
                        {item.dates}
                      </p>
                    </div>

                    <ul className="space-y-2.5 text-[15px] leading-7 text-neutral-700">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-[12px] h-1 w-1 shrink-0 rounded-full bg-neutral-400"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.tags.map((tag) => (
                        <TagChip key={tag} label={tag} />
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="projects" className="space-y-7">
              <SectionLabel id="projects" title="Projects" />
              <div className="space-y-10">
                {projects.map((project) => (
                  <article key={project.name} className="space-y-3">
                    <h3 className="text-[15px] font-semibold text-neutral-900">
                      {project.name}
                    </h3>

                    <p className="max-w-2xl text-[15px] leading-7 text-neutral-700">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <TagChip key={tag} label={tag} />
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                      {project.links.map((link) => (
                        <TextLink
                          key={link.label}
                          href={link.href}
                          external={link.external}
                          muted={link.muted}
                        >
                          {link.label}
                        </TextLink>
                      ))}
                    </div>
                  </article>
                ))}

                <article className="border-l border-neutral-200 pl-4">
                  <h3 className="text-[15px] font-semibold text-neutral-900">
                    More projects coming soon
                  </h3>
                  <p className="mt-1 text-[15px] leading-7 text-neutral-600">
                    Adding more product/data experiments and tools over time.
                  </p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
