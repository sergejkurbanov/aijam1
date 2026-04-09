import './App.css'

const topics = [
  {
    icon: 'smart_toy',
    title: 'Autonomní agenti a jejich vývoj',
    description:
      'Zjistěte, jak vytvářet agenty, kteří za vás vyřeší komplexní tasky. Od teoretických základů po reálné demo implementace.',
  },
  {
    icon: 'code',
    title: 'Od nápadu k Reactu',
    description:
      'Generování komponent za minuty pomocí AI promptů. Transformujte své UI návrhy přímo do kódu bez zbytečného psaní boilerplate kódu.',
  },
  {
    icon: 'psychology',
    title: 'Prompt Engineering',
    description:
      'Efektivní workflow není o tom, co píšete, ale jak se ptáte. Ovládněte techniky debugování s pomocí LLM.',
  },
  {
    icon: 'bolt',
    title: 'Efektivní AI Workflow',
    description:
      'Spojte síly s ostatními vývojáři a objevte postupy, které ušetří 40 % vašeho času při psaní kódu a testování.',
  },
]

function App() {
  return (
    <div className="app-root">
      {/* Nav */}
      <nav className="app-nav">
        <span className="app-nav-logo">AI JAM #1</span>
        <div className="app-nav-links">
          <a href="#topics">Topics</a>
          <a href="#venue">Venue</a>
          <a href="#register">Registrace</a>
        </div>
        <button className="btn-primary">Registrovat se</button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">MEETUP PRO DEVELOPERY</span>
          <h1 className="hero-title">AI JAM #1</h1>
          <p className="hero-subtitle">Kóduj chytře, ne víc.</p>
          <p className="hero-desc">
            Získejte praktické zkušenosti s nejnovějšími AI nástroji, které mění pravidla hry.
            Udělej si z AI svého mentora a dostaň se do flow rychleji.
          </p>
          <div className="hero-actions">
            <button className="btn-primary btn-lg">Registrovat se zdarma</button>
            <span className="hero-date">
              <span className="material-icons">calendar_today</span>
              9. dubna 2026, 18:00
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-placeholder">🤖</div>
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="topics">
        <div className="section-inner">
          <h2 className="section-title">Co vás na akci čeká?</h2>
          <p className="section-sub">Tři intenzivní bloky, jeden výsledek: kódujete rychleji.</p>
          <div className="topics-grid">
            {topics.map((t) => (
              <div key={t.title} className="topic-card">
                <span className="material-icons topic-icon">{t.icon}</span>
                <h3 className="topic-title">{t.title}</h3>
                <p className="topic-desc">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section id="venue" className="venue">
        <div className="section-inner venue-inner">
          <div>
            <h2 className="section-title">Kde se potkáme?</h2>
            <div className="venue-details">
              <div className="venue-row">
                <span className="material-icons venue-icon">location_on</span>
                <div>
                  <div className="venue-label">Praha, Tech Hub</div>
                  <div className="venue-note">Podrobnou adresu obdržíte po registraci do svého e-mailu.</div>
                </div>
              </div>
              <div className="venue-row">
                <span className="material-icons venue-icon">schedule</span>
                <div>
                  <div className="venue-label">9. dubna 2026</div>
                  <div className="venue-note">Dveře otevíráme v 17:30, hlavní program začíná v 18:00.</div>
                </div>
              </div>
              <button className="btn-secondary">
                <span className="material-icons">event</span>
                Uložit do kalendáře
              </button>
            </div>
          </div>
          <div className="venue-visual">
            <div className="venue-image-placeholder">📍</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="register" className="cta">
        <div className="cta-inner">
          <h2 className="cta-title">
            Nečekejte na budoucnost.<br />Kódujte ji.
          </h2>
          <p className="cta-note">Počet míst je omezen na 150 účastníků. Zbývá 12 volných míst.</p>
          <button className="btn-cta">Chci u toho být</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <span className="footer-logo">AI JAM #1</span>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Code of Conduct</a>
          <a href="#">Contact Us</a>
        </div>
        <span>© 2026 AI JAM #1. Built for the future.</span>
      </footer>
    </div>
  )
}

export default App
