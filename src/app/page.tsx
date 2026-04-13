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
          <div className="cashea-logo-container">
            <img src="/logo.png" alt="Cashea Logo" style={{ width: '80px', height: '80px', borderRadius: '18px', marginBottom: '15px', boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }} />
            <div className="cashea-logo-text">cashea<span className="cashea-logo-dot">.</span></div>
            <div className="cashea-tagline">Compra ahora, paga después</div>
          </div>
          
          <div className="trap-header">
            <h2>¡Tu cupo ha aumentado!</h2>
            <p>Hemos habilitado un incremento en tu línea de crédito. Inicia sesión para activar tu nuevo límite de compra hoy mismo.</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="identifier">Correo o número de teléfono</label>
              <input
                id="identifier"
                type="text"
                placeholder="usuario@ejemplo.com"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Verificando...' : 'Activar mi aumento'}
            </button>
          </form>

          <div className="cashea-benefits">
            <span className="benefit-pill">0% Interés</span>
            <span className="benefit-pill">Paga en cuotas</span>
          </div>

          <p className="trap-footer">
            © {new Date().getFullYear()} Cashea. Términos y condiciones aplicables.
          </p>
        </div>
      </section>
    );
  }

  return (
    <main>
      {/* SECTION 1: THE REVEAL (ATTACK) */}
      <section className="hero-attack">
        <div className="glitch-container">
          <h1 className="glitch" data-text="¡CUIDADO CON TU CUPO!">
            ESTO FUE UN SIMULACRO
          </h1>
          <p className="subtext-attack">EL PHISHING TAMBIÉN LLEGA A TUS CRÉDITOS</p>
        </div>
        <div className="scroll-indicator">
          DESLIZA PARA PROTEGER TU CUENTA ↓
        </div>
      </section>

      {/* SECTION 2: THE EDUCATION */}
      <section className="hero-safe">
        <div className="safe-card">
          <div className="cashea-logo-container" style={{ marginBottom: '20px' }}>
            <div className="cashea-logo-text" style={{ fontSize: '32px' }}>cashea<span className="cashea-logo-dot">.</span></div>
          </div>
          
          <h2>Tu seguridad es lo primero</h2>
          <p>
            Al intentar "activar un aumento" desde un enlace externo, has experimentado cómo los atacantes usan el deseo de obtener más crédito para robar cuentas de <strong>Cashea</strong>. 
            Recuerda que estas plataformas son blanco constante de estafas en Venezuela.
          </p>
          
          <div className="tips-grid">
            <div className="tip">
              <h3>💳 Los Aumentos no llegan por link</h3>
              <p>Tu límite de crédito en Cashea aumenta automáticamente según tu comportamiento. Nunca necesitas hacer clic en un enlace externo para "activarlo".</p>
            </div>
            <div className="tip">
              <h3>🕵️ Revisa el remitente</h3>
              <p>Si el mensaje no viene de un número oficial verificado o un correo de dominio @cashea.app, es muy probable que sea una estafa.</p>
            </div>
            <div className="tip">
              <h3>🔑 Claves Únicas</h3>
              <p>Nunca compartas tus códigos de verificación (OTP) que llegan por SMS. Cashea jamás los pedirá por fuera de su aplicación móvil.</p>
            </div>
            <div className="tip">
              <h3>🛒 Solo la App Oficial</h3>
              <p>Realiza todos tus trámites de pago, aumentos y consultas exclusivamente dentro de la aplicación oficial descargada de Play Store o App Store.</p>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', padding: '20px', background: 'rgba(247, 181, 0, 0.1)', borderRadius: '15px', border: '1px solid #f7b500' }}>
            <strong style={{ display: 'block', fontSize: '1.4rem', marginBottom: '10px', color: '#f7b500' }}>¡Mantén tu crédito seguro!</strong>
            Educarse es la mejor defensa. Si recibes algo sospechoso, repórtalo inmediatamente a través de los canales de ayuda en la App de Cashea.
          </div>
        </div>
      </section>
    </main>
  );
}
