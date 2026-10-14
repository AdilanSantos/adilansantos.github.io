import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projetos">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <div className="skills-grid">
          {projects.map((p) => (
            <article className="card project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <ul className="tags">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="links">
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Código</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Demo</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
