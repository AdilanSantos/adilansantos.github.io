import { profile } from '../data/content'
import fotoPerfil from '/src/images/foto-linkedin.jpg'

// dentro do componente:


export default function Hero() {
  return (
    <section id="sobre" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="badge">● {profile.availability}</p>
          <p className="eyebrow">Olá, eu sou</p>
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
