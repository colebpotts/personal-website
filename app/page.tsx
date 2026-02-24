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

function TagChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
      {label}
    </span>
  );
}

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 text-sm font-semibold tracking-wide text-neutral-900"
    >
      {title}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto w-full max-w-4xl px-6 py-10 sm:px-8 sm:py-14">
        <header className="space-y-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold tracking-tight text-neutral-950">
                Cole Beevor-Potts
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-neutral-700">
                Product + data guy building useful software and exploring
                real-world problems (built environment, running, coffee).
              </p>
            </div>

            <nav aria-label="Section navigation" className="shrink-0">
              <ul className="flex flex-wrap gap-2 text-sm">
                {[
                  ["About", "#about"],
                  ["Experience", "#experience"],
                  ["Projects", "#projects"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="inline-flex rounded-full border border-neutral-200 px-3 py-1.5 text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            <a
              href="mailto:colebpotts@gmail.com"
              className="inline-flex rounded-full border border-neutral-200 px-3 py-1.5 text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/colebeevor-potts/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-neutral-200 px-3 py-1.5 text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/colebpotts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-neutral-200 px-3 py-1.5 text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
            >
              GitHub
            </a>
            <a
              href="https://run-routr.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-neutral-200 px-3 py-1.5 text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
            >
              RunRoutr (Live)
            </a>
            <span className="inline-flex rounded-full border border-dashed border-neutral-200 px-3 py-1.5 text-neutral-500">
              Resume: ask me for the PDF when you need it
            </span>
          </div>
        </header>

        <div className="mt-14 space-y-14">
          <section aria-labelledby="about" className="space-y-5">
            <SectionHeading id="about" title="About" />
            <div className="max-w-3xl space-y-4 text-sm leading-7 text-neutral-700">
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
                Outside of work, I spend a lot of time thinking about the built
                environment and cities, training for runs, and paying too much
                attention to coffee and design.
              </p>
              <p className="text-neutral-500">
                Interests: running • cities/real estate • coffee • design
              </p>
            </div>
          </section>

          <section aria-labelledby="experience" className="space-y-5">
            <SectionHeading id="experience" title="Experience" />
            <div className="space-y-8">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {item.role} @ {item.company}
                    </h3>
                    <p className="text-xs text-neutral-500">{item.dates}</p>
                  </div>

                  <ul className="mt-4 space-y-2.5 text-sm leading-6 text-neutral-700">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <TagChip key={tag} label={tag} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="projects" className="space-y-5">
            <SectionHeading id="projects" title="Projects" />
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <TagChip key={tag} label={tag} />
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className={`underline underline-offset-4 transition ${
                          link.muted
                            ? "text-neutral-500 hover:text-neutral-700"
                            : "text-neutral-800 hover:text-neutral-950"
                        }`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}

              <article className="rounded-2xl border border-dashed border-neutral-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-neutral-900">
                  More projects coming soon
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  I&apos;m adding a few more product/data builds and experiments
                  here over time.
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
