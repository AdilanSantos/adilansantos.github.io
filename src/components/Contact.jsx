import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container">
        <h2 className="section-title">Contato</h2>
        <p>
          Estou disponível para novas oportunidades em back-end, integrações e desenvolvimento full stack.
          Vamos conversar?
        </p>
        <div className="cta">
          <a className="btn primary" href={`mailto:${profile.email}`}>Enviar e-mail</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  )
}
