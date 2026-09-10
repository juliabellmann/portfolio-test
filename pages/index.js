import Head from "next/head";
import Link from "next/link";
import { projects, skills, qualifications } from "../data/projects";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured && p.type === "own");

  return (
    <>
      <Head>
        <title>Julia Bellmann — Webentwicklung & Webdesign</title>
        <meta
          name="description"
          content="Portfolio von Julia Bellmann — Webentwicklung, Webdesign und JavaScript."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="brand" aria-label="Julia Bellmann Startseite">
            <span className="brand-mark">JB</span>
            <span className="brand-name">Julia Bellmann</span>
          </Link>

          <nav className="nav">
            <a href="#about">Über mich</a>
            <a href="#projects">Projekte</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Kontakt</a>
            <a className="nav-github" href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">WEB DEVELOPMENT</p>
              <h1>
                Ich entwickle
                <br />
                <span>moderne Webanwendungen.</span>
              </h1>
              <p className="hero-lead">
                Quereinsteigerin mit Schwerpunkt JavaScript, React und Next.js —
                mit eigenen Full-Stack-Projekten und einem Hintergrund im Bauwesen.
              </p>

              <div className="hero-actions">
                <a className="button button-dark" href="#projects">
                  Projekte ansehen
                </a>
                <a className="button button-light" href="/lebenslauf.pdf" download>
                  Lebenslauf <span>↓</span>
                </a>
              </div>

              <div className="hero-stack">
                <span>JavaScript</span>
                <span>React</span>
                <span>Next.js</span>
                <span>Supabase</span>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="hero-logo">
                <div className="logo-j">J</div>
                <div className="logo-b">B</div>
              </div>
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="hero-note">BUILD · LEARN · IMPROVE</div>
            </div>
          </div>
        </section>

        <section className="tech-strip">
          <div className="container tech-inner">
            <span className="tech-label">BUILT WITH</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Supabase</span>
            <span>PostgreSQL</span>
            <span>Git</span>
            <span>Vercel</span>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SELECTED PROJECT</p>
                <h2>Praxis statt nur Theorie.</h2>
              </div>
              <p>
                Eigene Anwendungen zeigen am besten, wie ich Probleme analysiere,
                Lösungen entwickle und Technologien miteinander verbinde.
              </p>
            </div>

            <article className="featured-project">
              <div className="project-preview large-preview">
                <div className="browser-bar"><i /><i /><i /><span>dateneingang-app</span></div>
                <div className="mock-dashboard">
                  <div className="mock-sidebar">
                    <b>JB</b>
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mock-content">
                    <div className="mock-title">Dateneingang</div>
                    <div className="mock-cards">
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="mock-table">
                      <span /><span /><span /><span /><span />
                    </div>
                  </div>
                </div>
              </div>

              <div className="featured-copy">
                <div className="project-number">01</div>
                <h3>{featured.title}</h3>
                <p className="project-kicker">{featured.subtitle}</p>
                <p>{featured.description}</p>

                <div className="tag-list">
                  {featured.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>

                <div className="feature-list">
                  {featured.features.map((item) => (
                    <div key={item}><b>+</b><span>{item}</span></div>
                  ))}
                </div>

                <div className="project-actions">
                  <Link href={`/projects/${featured.slug}`} className="text-link">
                    Case Study <Arrow />
                  </Link>
                  <a href={featured.demo} target="_blank" rel="noreferrer" className="text-link">
                    Live Demo <Arrow />
                  </a>
                  <a href={featured.github} target="_blank" rel="noreferrer" className="text-link">
                    GitHub <Arrow />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-heading compact">
              <div>
                <p className="eyebrow">MORE PROJECTS</p>
                <h2>Weitere eigene Anwendungen.</h2>
              </div>
            </div>

            <div className="project-grid">
              {others.map((project, index) => (
                <article className="project-card" key={project.slug}>
                  <div className={`project-preview preview-${index + 2}`}>
                    <div className="mini-window">
                      <div className="mini-top" />
                      <div className="mini-main">
                        <div className="mini-sidebar" />
                        <div className="mini-lines">
                          <i /><i /><i /><i />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="card-number">0{index + 2}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list small">
                      {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <Link href={`/projects/${project.slug}`} className="text-link">
                      Projekt ansehen <Arrow />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="learning-box">
              <div>
                <p className="eyebrow">LEARNING PROJECTS</p>
                <h3>Auch aus Kursprojekten habe ich gelernt.</h3>
              </div>
              <p>The Wild Oasis · Travel List · usePopcorn · Budget Planner · Workflow Wizard</p>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">ABOUT ME</p>
              <h2>Vom Bauwesen zur Softwareentwicklung.</h2>
            </div>
            <div className="about-copy">
              <p>
                Mein beruflicher Hintergrund liegt im Bauwesen. Dort habe ich gelernt,
                komplexe Aufgaben zu strukturieren, Prozesse zu analysieren und
                praktische Lösungen zu entwickeln.
              </p>
              <p>
                Mit meiner Weiterbildung zur Softwareentwicklerin mit Schwerpunkt
                JavaScript habe ich diese Denkweise in die digitale Welt übertragen.
              </p>
              <p>
                Heute entwickle ich eigene Webanwendungen — von der Idee und
                Benutzeroberfläche über Datenmodellierung und Programmierung bis
                zum Deployment.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container process">
            <div className="section-heading dark-heading">
              <div>
                <p className="eyebrow">HOW I WORK</p>
                <h2>Von der Idee zur Anwendung.</h2>
              </div>
              <p>
                Ein strukturierter Entwicklungsprozess hilft mir, Anforderungen
                verständlich zu machen und Lösungen Schritt für Schritt umzusetzen.
              </p>
            </div>

            <div className="process-grid">
              {[
                ["01", "Understand", "Problem & Anforderungen"],
                ["02", "Design", "Struktur & UI/UX"],
                ["03", "Develop", "React / Next.js / JavaScript"],
                ["04", "Connect", "Datenbank / APIs / Backend"],
                ["05", "Test", "Fehlerfälle & Responsive Design"],
                ["06", "Deploy", "GitHub → Vercel"]
              ].map(([num, title, text]) => (
                <div className="process-item" key={num}>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">WHAT I BRING</p>
                <h2>Technologien & Kompetenzen.</h2>
              </div>
            </div>

            <div className="skills-grid">
              {skills.map((group) => (
                <div className="skill-group" key={group.title}>
                  <span className="skill-index">{group.index}</span>
                  <h3>{group.title}</h3>
                  <div className="skill-items">
                    {group.items.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="additional-skills">
              Weitere Kenntnisse: SASS · Tailwind · Styled Components · Bootstrap · Python · C++ · Arduino · WordPress
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container timeline-section">
            <div>
              <p className="eyebrow">QUALIFICATIONS</p>
              <h2>Werdegang & Weiterbildung.</h2>
            </div>
            <div className="timeline">
              {qualifications.map((item) => (
                <div className="timeline-item" key={item.title}>
                  <span>{item.year}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-inner">
            <p className="eyebrow">LET&apos;S BUILD SOMETHING</p>
            <h2>Bereit für den nächsten Schritt.</h2>
            <p>
              Ich freue mich über die Möglichkeit, meine Kenntnisse in der
              Webentwicklung in einem professionellen Umfeld einzusetzen.
            </p>
            <div className="contact-actions">
              <a className="button button-dark" href="mailto:deine-email@example.com">
                Kontakt aufnehmen
              </a>
              <a className="button button-light" href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="brand-mark">JB</span>
            <div>
              <b>Julia Bellmann</b>
              <span>Web Development & Web Design</span>
            </div>
          </div>
          <div className="footer-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="#" aria-label="LinkedIn Platzhalter">LinkedIn</a>
            <a href="mailto:deine-email@example.com">E-Mail</a>
          </div>
          <div className="footer-meta">© 2026 Julia Bellmann · Impressum · Datenschutz</div>
        </div>
      </footer>
    </>
  );
}
