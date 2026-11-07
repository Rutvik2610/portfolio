import { useEffect, useState, type ReactNode } from "react";
import { motion, MotionConfig } from "motion/react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Sun,
  Moon,
  Menu,
  X,
  MapPin,
  Code2,
  Database,
  Workflow,
  Link,
  Mail,
  Check,
  Copy,
  GraduationCap,
  Award,
  Download,
} from "lucide-react";
import { profile } from "./data/profile";
import { experience } from "./data/experience";
import { skills, additionalSkills } from "./data/skills";
import { projects } from "./data/projects";
import { socials, validExternal } from "./data/socials";
import { ProjectCard } from "./components/ProjectCard";
const sections = ["About", "Projects", "Experience", "Skills", "Contact"];
function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
function SocialLinks({ labels = false }: { labels?: boolean }) {
  return (
    <>
      {validExternal(socials.github) && (
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Rutvik on GitHub"
        >
          <Code2 size={21} />
          {labels && (
            <>
              GitHub
              <ArrowUpRight size={17} />
            </>
          )}
        </a>
      )}
      {validExternal(socials.linkedin) && (
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Rutvik on LinkedIn"
        >
          <Link size={20} />
          {labels && (
            <>
              LinkedIn
              <ArrowUpRight size={17} />
            </>
          )}
        </a>
      )}
      {socials.email && (
        <a href={`mailto:${socials.email}`} aria-label="Email Rutvik">
          <Mail size={20} />
          {labels && (
            <>
              Email
              <ArrowUpRight size={17} />
            </>
          )}
        </a>
      )}
    </>
  );
}
function Heading({
  number,
  first,
  second,
}: {
  number: string;
  first: string;
  second: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-number">/ {number}</span>
      <h2>
        {first}
        <br />
        <span>{second}</span>
      </h2>
    </div>
  );
}
function ProfileCard() {
  return (
    <aside className="profile-card" aria-label="About Rutvik">
      <div className="profile-card-top">
        <span className="card-wordmark">
          rp<span>®</span>
        </span>
        <span className="card-edition">
          ENGINEERING
          <br />
          WITH INTENT.
        </span>
      </div>
      <div className="identity-art" aria-hidden="true">
        <div className="art-grid" />
        <div className="art-orbit orbit-a" />
        <div className="art-orbit orbit-b" />
        <span className="art-bracket bracket-left">[</span>
        <span className="art-monogram">
          RP<span>.</span>
        </span>
        <span className="art-bracket bracket-right">]</span>
        <div className="art-coordinates">
          19.0760° N<br />
          72.8777° E
        </div>
        <span className="art-plus">+</span>
      </div>
      <div className="profile-card-body">
        <p className="card-kicker">THE ENGINEER BEHIND THE CODE</p>
        <h2>{profile.name}</h2>
        <p className="card-role">
          {profile.role}
          <br />
          <span>at {profile.company}</span>
        </p>
        <div className="card-location">
          <MapPin size={15} />
          {profile.location}
        </div>
        <a className="card-cta" href="#contact">
          Let’s connect
          <ArrowUpRight size={20} />
        </a>
        <div className="card-socials">
          <SocialLinks />
        </div>
      </div>
    </aside>
  );
}
export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("about");
  const [showTop, setShowTop] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* Storage is optional. */
    }
  }, [theme]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.toLowerCase());
      if (el) observer.observe(el);
    });
    const onScroll = () => setShowTop(window.scrollY > 650);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);
  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2400);
    return () => window.clearTimeout(timer);
  }, [copied]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(socials.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${socials.email}`;
    }
  }
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a
            href="#about"
            className="header-brand"
            aria-label={`${profile.name}, home`}
          >
            rutvik<span>.</span>
          </a>
          <nav
            aria-label="Main navigation"
            className={menu ? "navigation open" : "navigation"}
            id="navigation"
          >
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                aria-current={
                  active === s.toLowerCase() ? "location" : undefined
                }
                onClick={() => setMenu(false)}
              >
                {s}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="icon-button theme-toggle"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <button
              className="icon-button mobile-toggle"
              aria-label={menu ? "Close navigation" : "Open navigation"}
              aria-expanded={menu}
              aria-controls="navigation"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <div className="portfolio-layout">
        <ProfileCard />
        <main id="main">
          <section className="hero section" id="about">
            <Reveal>
              <div className="eyebrow">
                <span className="live-dot" /> {profile.role.toUpperCase()} · BACKEND ENGINEERING
              </div>
              <p className="hero-greeting">
                Hi, I’m {profile.firstName}. <span>↗</span>
              </p>
              <h1 aria-label="Software Engineer">
                <span className="hero-title-primary">SOFTWARE</span>
                <span>ENGINEER.</span>
              </h1>
              <p className="hero-statement">
                Reliable systems.
                <br />
                Real-world complexity.
              </p>
              <p className="hero-summary">{profile.summary}</p>
              <div className="hero-actions">
                <a href="#projects" className="button primary">
                  Explore my work
                  <ArrowDown size={19} />
                </a>
                <a href="#contact" className="text-link">
                  Let’s talk
                  <ArrowUpRight size={19} />
                </a>
              </div>
              <div className="hero-facts">
                <div>
                  <strong>
                    {profile.experience}
                    <span> YEARS</span>
                  </strong>
                  <p>Enterprise engineering</p>
                </div>
                <div>
                  <strong>100K–300K</strong>
                  <p>Daily records across supported systems</p>
                </div>
              </div>
            </Reveal>
            <Reveal className="about-note">
              <span className="section-number">A LITTLE CONTEXT</span>
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          </section>
          <section className="section" id="projects">
            <Reveal>
              <Heading number="01" first="SELECTED" second="PROJECTS." />
              <p className="section-intro">
                Personal projects where backend fundamentals meet modern .NET
                and cloud services.
              </p>
            </Reveal>
            <div className="projects">
              {projects
                .filter((p) => p.visible)
                .map((p) => (
                  <Reveal key={p.id}>
                    <ProjectCard project={p} />
                  </Reveal>
                ))}
            </div>
            <p className="quiet-note">
              Project details are based on my own work. Illustrations explain
              concepts; they aren’t live product screens.
            </p>
          </section>
          <section className="section" id="experience">
            <Reveal>
              <Heading number="02" first="BUILT IN THE" second="REAL WORLD." />
              <p className="section-intro">
                Experience shaped by production systems, complex integrations,
                and the responsibility of keeping data moving.
              </p>
            </Reveal>
            <div className="experience-list">
              {experience.map((e) => (
                <Reveal key={e.role}>
                  <article className="experience-item">
                    <div className="experience-heading">
                      <div>
                        <span className="company-name">
                          {e.company}
                          {e.current && (
                            <span className="current-badge">CURRENT</span>
                          )}
                        </span>
                        <h3>{e.role}</h3>
                      </div>
                      <span className="experience-date">{e.period}</span>
                    </div>
                    <p className="experience-description">{e.description}</p>
                    <ul>
                      {e.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="quiet-note">
              Client information, proprietary architecture, and sensitive
              healthcare data remain private.
            </p>
            <Reveal className="recognition">
              <Award size={23} />
              <div>
                <span className="section-number">RECOGNITION AT DELOITTE</span>
                <p>{profile.awards}</p>
              </div>
            </Reveal>
          </section>
          <section className="section" id="skills">
            <Reveal>
              <Heading number="03" first="MY EVERYDAY" second="TOOLKIT." />
              <p className="section-intro">
                Tools I use, with context about where I use them.
              </p>
            </Reveal>
            <div className="skill-groups">
              {skills.map((group, i) => {
                const Icon = [Code2, Workflow, Database][i];
                return (
                  <Reveal key={group.title}>
                    <article className="skill-group">
                      <div className="skill-icon">
                        <Icon size={24} />
                      </div>
                      <div>
                        <span className="skill-context">{group.context}</span>
                        <h3>{group.title}</h3>
                        <ul className="tags">
                          {group.skills.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
            <p className="additional-skills">
              <span>ALSO IN THE TOOLBOX</span>
              {additionalSkills.join(" · ")}
            </p>
            <Reveal className="credentials">
              <div>
                <Award size={21} />
                <span className="section-number">CERTIFICATIONS</span>
              </div>
              {profile.certifications.map((c) => (
                <p key={c.name}>
                  {validExternal(c.url) ? (
                    <a className="credential-link" href={c.url} target="_blank" rel="noreferrer" aria-label={`Verify ${c.name}`}>
                      {c.name}<ArrowUpRight size={16} />
                    </a>
                  ) : c.name}
                </p>
              ))}
            </Reveal>
          </section>
          <section className="section philosophy">
            <Reveal>
              <Heading number="04" first="HOW I" second="THINK." />
            </Reveal>
            <div className="principles">
              {profile.principles.map((p, i) => (
                <Reveal key={p.title}>
                  <article>
                    <span>0{i + 1}</span>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="education">
              <GraduationCap size={25} />
              <div>
                <span className="section-number">THE FOUNDATION</span>
                <h3>{profile.education.degree}</h3>
                <p>{profile.education.college}</p>
                <p>
                  {profile.education.university} · {profile.education.year} ·{" "}
                  {profile.education.grade}
                </p>
              </div>
            </Reveal>
          </section>
          <section id="contact" className="section contact">
            <Reveal>
              <div className="eyebrow">
                <span className="live-dot" /> THE NEXT CHAPTER
              </div>
              <h2>
                LET’S BUILD
                <br />
                <span>SOMETHING</span>
                <br />
                MEANINGFUL<span className="accent-dot">.</span>
              </h2>
              <p>
                I’m interested in backend and software engineering opportunities
                where I can solve challenging problems and help build dependable
                systems.
              </p>
              {socials.email ? (
                <div className="email-row">
                  <a href={`mailto:${socials.email}`}>
                    {socials.email}
                    <ArrowUpRight size={23} />
                  </a>
                  <button
                    className="icon-button copy-button"
                    aria-label={copied ? "Email copied" : "Copy email address"}
                    onClick={copyEmail}
                  >
                    {copied ? <Check size={19} /> : <Copy size={19} />}
                  </button>
                  <span role="status" className="copy-status">
                    {copied ? "Copied!" : ""}
                  </span>
                </div>
              ) : (
                <p>Connect with me through my social profiles.</p>
              )}
              <div className="contact-socials">
                <SocialLinks labels />
              </div>
              {profile.resume.enabled && profile.resume.path && (
                <a
                  className="text-link"
                  href={`${import.meta.env.BASE_URL}${profile.resume.path}`}
                  download
                >
                  <Download size={18} />
                  Download resume
                </a>
              )}
              <div className="contact-signoff">
                <MapPin size={15} />
                {profile.location}
                <span>GOOD SYSTEMS START WITH GOOD CONVERSATIONS.</span>
              </div>
            </Reveal>
          </section>
          <footer>
            <span>
              © {new Date().getFullYear()} {profile.name}
            </span>
            <span>
              Built with care. Always improving.{" "}
              <span className="footer-star">✳</span>
            </span>
          </footer>
        </main>
      </div>
      {showTop && (
        <a
          href="#about"
          className="back-top icon-button"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      )}
    </MotionConfig>
  );
}
