export default function Home() {
  return (
    <main>
      {/* SECTION 1: THE TRAP */}
      <section className="hero-attack">
        <div className="glitch-container">
          <h1 className="glitch" data-text="CAÍSTE EN UN CIBERATAQUE">
            CAÍSTE EN UN CIBERATAQUE
          </h1>
          <p className="subtext-attack">TU INFORMACIÓN HA SIDO COMPROMETIDA</p>
        </div>
        <div className="scroll-indicator">
          DESLIZA PARA SABER MÁS ↓
        </div>
      </section>

      {/* SECTION 2: THE REVEAL */}
      <section className="hero-safe">
        <div className="safe-card">
          <h2>¡Mantén la calma!</h2>
          <p>
            Esto es solo un <strong>simulacro controlado</strong> para enseñarte cómo funcionan los ataques de phishing. 
            En un ataque real, no siempre hay un mensaje de advertencia.
          </p>
          
          <div className="tips-grid">
            <div className="tip">
              <h3>Revisa el Remitente</h3>
              <p>Los atacantes a menudo usan correos que parecen oficiales pero vienen de dominios extraños.</p>
            </div>
            <div className="tip">
              <h3>Cuidado con los Enlaces</h3>
              <p>Pasa el cursor sobre los enlaces antes de hacer clic para ver la dirección real.</p>
            </div>
            <div className="tip">
              <h3>Usa 2FA</h3>
              <p>La autenticación de dos factores es tu mejor defensa contra el acceso no autorizado.</p>
            </div>
            <div className="tip">
              <h3>Sentido de Urgencia</h3>
              <p>Si el mensaje te presiona para actuar rápido, probablemente sea una trampa.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
