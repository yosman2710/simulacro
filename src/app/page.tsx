'use client'

import { useState } from 'react';
import { saveVictim } from './actions';

export default function Home() {
  const [step, setStep] = useState<'trap' | 'attack'>('trap');
  const [identifier, setIdentifier] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier) return;

    setIsSubmitting(true);
    
    // Capture user agent
    const userAgent = navigator.userAgent;
    
    await saveVictim(identifier, userAgent);
    
    // Switch to scary state
    setStep('attack');
    setIsSubmitting(false);
  };

  if (step === 'trap') {
    return (
      <section className="hero-trap">
        <div className="trap-card">
          <div className="ms-logo">
            <svg viewBox="0 0 108 23" width="108" height="23">
              <path fill="#f35325" d="M0 0h11v11H0z"/>
              <path fill="#81bc06" d="M12 0h11v11H12z"/>
              <path fill="#05a6f0" d="M0 12h11v11H0z"/>
              <path fill="#ffba08" d="M12 12h11v11H12z"/>
              <text x="28" y="18" fill="#737373" style={{ font: '600 18px "Segoe UI", sans-serif' }}>Microsoft</text>
            </svg>
          </div>
          
          <div className="trap-header">
            <h2>Sign in</h2>
            <p>Use your Microsoft account to continue to Outlook.</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Email, phone, or Skype"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div style={{ marginBottom: '20px', fontSize: '13px' }}>
              No account? <span style={{ color: '#0067b8', cursor: 'pointer' }}>Create one!</span>
            </div>

            <div style={{ marginBottom: '20px', fontSize: '13px', color: '#0067b8', cursor: 'pointer' }}>
              Sign-in options
            </div>

            <button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Next' : 'Next'}
            </button>
          </form>

          <div style={{ clear: 'both' }}></div>
        </div>
        
        <div className="trap-footer">
          Terms of use Privacy & cookies ...
        </div>
      </section>
    );
  }

  return (
    <main>
      {/* SECTION 1: THE REVEAL (ATTACK) */}
      <section className="hero-attack">
        <div className="glitch-container">
          <h1 className="glitch" data-text="CAÍSTE EN UN CIBERATAQUE">
            CAÍSTE EN UN CIBERATAQUE
          </h1>
          <p className="subtext-attack">HAS ENTREGADO TUS CREDENCIALES A UN ATACANTE</p>
        </div>
        <div className="scroll-indicator">
          DESLIZA PARA SABER CÓMO EVITARLO ↓
        </div>
      </section>

      {/* SECTION 2: THE EDUCATION */}
      <section className="hero-safe">
        <div className="safe-card">
          <h2>¿Qué acaba de pasar?</h2>
          <p>
            Al ingresar tu correo en la página anterior, has demostrado lo fácil que es ser víctima de <strong>phishing</strong>. 
            En este simulacro, tus datos están a salvo, pero en un ataque real, tus contraseñas y archivos estarían en manos criminales.
          </p>
          
          <div className="tips-grid">
            <div className="tip">
              <h3>No abras enlaces sospechosos</h3>
              <p>Incluso si parece venir de IT o Seguridad, siempre verifica la URL oficial.</p>
            </div>
            <div className="tip">
              <h3>Fíjate en el diseño</h3>
              <p>Los sitios de phishing a menudo tienen errores tipográficos o diseños ligeramente diferentes al original.</p>
            </div>
            <div className="tip">
              <h3>Sentido de Urgencia</h3>
              <p>Si te piden "verificar tu cuenta" de forma inmediata, detente y sospecha.</p>
            </div>
            <div className="tip">
              <h3>Usa el sentido común</h3>
              <p>Tu empresa nunca te pedirá tus credenciales a través de un enlace enviado por email.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
