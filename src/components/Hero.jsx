import bgImage from '../assets/photo.jpg'

export default function Hero() {
  return (
    <>
      <style>{`
        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .animated-bg::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 70%, rgba(0, 0, 0, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%);
          animation: backgroundFloat 20s ease-in-out infinite;
        }

        .animated-bg::after {
          content: '';
          position: absolute;
          top: -25%;
          left: -25%;
          width: 150%;
          height: 150%;
          background: 
            linear-gradient(45deg, transparent, rgba(220, 38, 38, 0.05), transparent),
            linear-gradient(-45deg, transparent, rgba(255, 255, 255, 0.03), transparent),
            linear-gradient(135deg, transparent, rgba(0, 0, 0, 0.08), transparent);
          animation: backgroundRotate 25s linear infinite;
        }

        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          animation: particleFloat 15s ease-in-out infinite;
        }

        .particle:nth-child(1) {
          width: 4px;
          height: 4px;
          background: rgba(220, 38, 38, 0.6);
          top: 20%;
          left: 10%;
          animation-delay: 0s;
          animation-duration: 18s;
        }

        .particle:nth-child(2) {
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.4);
          top: 60%;
          left: 80%;
          animation-delay: -3s;
          animation-duration: 22s;
        }

        .particle:nth-child(3) {
          width: 3px;
          height: 3px;
          background: rgba(0, 0, 0, 0.3);
          top: 80%;
          left: 20%;
          animation-delay: -6s;
          animation-duration: 16s;
        }

        .particle:nth-child(4) {
          width: 5px;
          height: 5px;
          background: rgba(220, 38, 38, 0.4);
          top: 30%;
          left: 70%;
          animation-delay: -9s;
          animation-duration: 20s;
        }

        .particle:nth-child(5) {
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.6);
          top: 70%;
          left: 40%;
          animation-delay: -12s;
          animation-duration: 24s;
        }

        .particle:nth-child(6) {
          width: 4px;
          height: 4px;
          background: rgba(0, 0, 0, 0.2);
          top: 40%;
          left: 90%;
          animation-delay: -15s;
          animation-duration: 19s;
        }

        .wave-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
          opacity: 0.4;
        }

        .wave-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(220, 38, 38, 0.3),
            rgba(255, 255, 255, 0.2),
            rgba(0, 0, 0, 0.1),
            transparent
          );
          animation: waveMove 12s ease-in-out infinite;
        }

        .wave-line:nth-child(1) {
          top: 25%;
          animation-delay: 0s;
        }

        .wave-line:nth-child(2) {
          top: 50%;
          animation-delay: -4s;
          animation-direction: reverse;
        }

        .wave-line:nth-child(3) {
          top: 75%;
          animation-delay: -8s;
        }

        @keyframes backgroundFloat {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(-20px, -30px) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translate(20px, -20px) rotate(180deg) scale(0.9);
          }
          75% {
            transform: translate(-10px, 20px) rotate(270deg) scale(1.05);
          }
        }

        @keyframes backgroundRotate {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(-15px) scale(0.8);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-30px) translateX(5px) scale(1.1);
            opacity: 0.7;
          }
        }

        @keyframes waveMove {
          0% {
            transform: translateX(-100%) scaleX(0);
            opacity: 0;
          }
          50% {
            transform: translateX(0%) scaleX(1);
            opacity: 1;
          }
          100% {
            transform: translateX(100%) scaleX(0);
            opacity: 0;
          }
        }

        .hero {
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 10;
        }
      `}</style>

      <div
        className="hero"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          height: 'auto',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Animated Background Effects */}
        <div className="animated-bg"></div>
        
        {/* Floating Particles */}
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        {/* Wave Lines */}
        <div className="wave-lines">
          <div className="wave-line"></div>
          <div className="wave-line"></div>
          <div className="wave-line"></div>
        </div>

        <div className="hero-overlay"></div>
        <div className="spiral" aria-hidden="true" />

        <div className="hero-content container hero__grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem'
        }}>
          <div className="hero__text" data-aos="fade-up" style={{
            maxWidth: '500px'
          }}>
            <p className="eyebrow" style={{
              fontSize: '0.9rem',
              marginBottom: '1rem'
            }}>
              Powering the Networks of Tomorrow
            </p>
            <h1 style={{
              fontSize: '2.5rem',
              lineHeight: '1.2',
              marginBottom: '1rem'
            }}>
              Unified, Intelligent & <span className="red">Scalable</span> Networks
            </h1>
            <p className="sub" style={{
              fontSize: '1.1rem',
              lineHeight: '1.5',
              marginBottom: '2rem',
              maxWidth: '450px'
            }}>
              We build dynamic, future-proof infrastructure—from edge to cloud—
              that grows stronger with every connection.
            </p>

            <div className="cta" style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <a href="#services" className="btn btn--primary">Explore Services</a>
              <a href="#contact" className="btn btn--ghost highlight-cta">Talk to Us</a>
            </div>
          </div>

          <div className="hero__stats" data-aos="fade-left" data-aos-delay="100" style={{
            display: 'grid',
            gap: '1.5rem'
          }}>
            <div className="card kpi glass" style={{
              padding: '1.5rem',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(27, 26, 26, 0.7)',
              border: '1px solid rgba(27, 26, 26, 0.67)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '0.5rem'
              }}>30+ Years</h3>
              <p style={{
                fontSize: '0.9rem',
                lineHeight: '1.4',
                opacity: '0.9'
              }}>Rich IT experience behind a 2024-founded, customer-first startup.</p>
            </div>
            <div className="card kpi glass" style={{
              padding: '1.5rem',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(27, 26, 26, 0.7)',
              border: '1px solid rgba(27, 26, 26, 0.67)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '0.5rem'
              }}>End-to-End</h3>
              <p style={{
                fontSize: '0.9rem',
                lineHeight: '1.4',
                opacity: '0.9'
              }}>Consultation, implementation, and ongoing managed support.</p>
            </div>
            <div className="card kpi glass" style={{
              padding: '1.5rem',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(27, 26, 26, 0.7)',
              border: '1px solid rgba(27, 26, 26, 0.67)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '0.5rem'
              }}>Future-Ready</h3>
              <p style={{
                fontSize: '0.9rem',
                lineHeight: '1.4',
                opacity: '0.9'
              }}>Cloud, AI, and data-center solutions built to scale.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}