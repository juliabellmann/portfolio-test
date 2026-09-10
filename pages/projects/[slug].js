import Head from "next/head";
import Link from "next/link";
import { projects } from "../../data/projects";

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((item) => item.slug === params.slug);
  return { props: { project } };
}

export default function ProjectPage({ project }) {
  return (
    <>
      <Head>
        <title>{project.title} — Julia Bellmann</title>
        <meta name="description" content={project.description} />
      </Head>

      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="brand">
            <span className="brand-mark">JB</span>
            <span className="brand-name">Julia Bellmann</span>
          </Link>
          <nav className="nav">
            <Link href="/#projects">Projekte</Link>
            <Link href="/#about">Über mich</Link>
            <Link href="/#contact">Kontakt</Link>
          </nav>
        </div>
      </header>

      <main className="case-study">
        <div className="container">
          <Link href="/#projects" className="back-link">← Alle Projekte</Link>

          <div className="case-header">
            <p className="eyebrow">{project.type === "own" ? "CASE STUDY" : "PROJECT"}</p>
            <h1>{project.title}</h1>
            <p className="case-subtitle">{project.subtitle}</p>
            <div className="tag-list">
              {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>

          <div className={`case-visual project-preview preview-case-${project.slug}`}>
            <div className="browser-bar"><i /><i /><i /><span>{project.slug}</span></div>
            <div className="mock-dashboard">
              <div className="mock-sidebar"><b>JB</b><span /><span /><span /><span /></div>
              <div className="mock-content">
                <div className="mock-title">{project.title}</div>
                <div className="mock-cards"><div /><div /><div /></div>
                <div className="mock-table"><span /><span /><span /><span /><span /></div>
              </div>
            </div>
          </div>

          <div className="case-grid">
            <div>
              <p className="eyebrow">DAS PROBLEM</p>
              <h2>Warum diese Anwendung?</h2>
            </div>
            <p>{project.problem}</p>
          </div>

          <div className="case-grid">
            <div>
              <p className="eyebrow">DIE LÖSUNG</p>
              <h2>Was ich umgesetzt habe.</h2>
            </div>
            <div>
              <p>{project.solution}</p>
              <div className="case-features">
                {project.features.map((feature) => (
                  <div key={feature}><span>+</span>{feature}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="case-grid">
            <div>
              <p className="eyebrow">TECH STACK</p>
              <h2>Technische Umsetzung.</h2>
            </div>
            <div className="case-tech-list">
              {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>

          <div className="case-actions">
            <a className="button button-dark" href={project.demo} target="_blank" rel="noreferrer">Live Demo ↗</a>
            <a className="button button-light" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </main>
    </>
  );
}
