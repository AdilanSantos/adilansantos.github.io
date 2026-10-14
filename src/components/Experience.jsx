import { experience, education } from '../data/content'

export default function Experience() {
  return (
    <section id="experiencia">
      <div className="container">
        <h2 className="section-title">Experiência</h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.period + job.role}>
              <span className="period">{job.period}</span>
              <h3>{job.role}</h3>
              <span className="company">{job.company}</span>
              <p className="muted">{job.summary}</p>
              <ul>
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <h3 className="subsection-title">Formação e idiomas</h3>
        <div className="card edu-card">
          <h3>{education.degree}</h3>
          <p className="muted">{education.institution}</p>
          <ul className="langs">
            {education.languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
