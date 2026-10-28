import { profile } from '../data/content'
import fotoPerfil from '../images/foto-linkedin.png'
import adilanEmoji from '../images/adilan-emoji.png'

// dentro do componente:


export default function Hero() {
  return (
    <section id="sobre" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="badge">● {profile.availability}</p>
          <p className="eyebrow">Construo APIs escaláveis e integrações confiáveis entre sistemas</p>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p className="lead">{profile.tagline}</p>
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="cta">
            <a className="btn primary" href="#contato">Vamos conversar</a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <img src={fotoPerfil} alt={profile.name} className="hero-photo" />
      </div>
    </section>
  )
}
