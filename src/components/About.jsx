export default function About() {
  return (
    <section className="about-section">
      {/* Animated background */}
      <div className="animated-bg">
        <div className="geometric-shapes">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`shape shape-${i % 4}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="floating-particles">
          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className={`particle ${i % 4 === 0 ? "red" : i % 4 === 1 ? "white" : i % 4 === 2 ? "gray" : "accent"}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 6}px`,
                height: `${2 + Math.random() * 6}px`,
                animationDuration: `${15 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        <div className="grid-overlay" />
      </div>

      <div className="container">
        {/* Hero section */}
        <div className="hero-section">
          <h1 className="hero-title">
            About <span className="highlight">1NETWORKS</span>
          </h1>
          <p className="hero-subtitle">
            Pioneering the future of network infrastructure with cutting-edge solutions
          </p>
        </div>

        {/* Content section */}
        <div className="content-section">
          {/* Mission statement */}
          <div className="mission-section">
            <p className="mission-text">
              We're a solutions-driven team delivering innovative technology that fits real business goals—fast, secure, and scalable. Our commitment extends beyond implementation to building lasting partnerships that drive digital transformation.
            </p>
          </div>

          {/* Values section */}
          <div className="values-section">
            <div className="values-grid">
              {[
                {
                  icon: "⚡",
                  title: "Innovation-Driven",
                  description: "We lead with cutting-edge technology and future-oriented thinking.",
                  color: "#ff2626"
                },
                {
                  icon: "📈",
                  title: "Scalable by Design",
                  description: "Our solutions evolve with your business needs.",
                  color: "#4CAF50"
                },
                {
                  icon: "🔒",
                  title: "Security First",
                  description: "Enterprise-grade security at every solution's core.",
                  color: "#FF9800"
                }
              ].map((value, i) => (
                <div
                  key={i}
                  className="value-card"
                  style={{ '--accent-color': value.color }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          position: relative;
          background: linear-gradient(135deg, #000000 0%, #1a0a0a 50%, #000000 100%);
          overflow: hidden;
          min-height: 100vh;
          color: white;
          padding: 2rem 0;
        }

        /* Background elements */
        .animated-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .shape {
          position: absolute;
          opacity: 0.1;
          animation: morphShape 20s infinite ease-in-out;
        }

        .shape-0 {
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, #ff2626, transparent);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }

        .shape-1 {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #ffffff, transparent);
          border-radius: 50%;
        }

        .shape-2 {
          width: 60px;
          height: 120px;
          background: linear-gradient(45deg, #ff2626, transparent);
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }

        .shape-3 {
          width: 90px;
          height: 90px;
          background: linear-gradient(45deg, #333333, transparent);
          transform: rotate(45deg);
        }

        @keyframes morphShape {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.05; }
          50% { transform: scale(0.8) rotate(180deg); opacity: 0.08; }
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.3;
          animation: gentleFloat 30s infinite ease-in-out;
        }

        .particle.red { background: radial-gradient(circle, #ff2626, transparent 50%); }
        .particle.white { background: radial-gradient(circle, #ffffff, transparent 50%); }
        .particle.gray { background: radial-gradient(circle, #666666, transparent 50%); }
        .particle.accent { background: radial-gradient(circle, #ff6b6b, transparent 50%); }

        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(-25px); }
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 38, 38, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 38, 38, 0.03) 1px, transparent 1px);
          background-size: 100px 100px;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Hero section */
        .hero-section {
          text-align: center;
          margin-bottom: 4rem;
          padding: 2rem 0;
        }

        .hero-title {
          font-size: clamp(2rem, 4vw, 4rem);
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
          background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .highlight {
          background: linear-gradient(135deg, #ff2626 0%, #ff6b6b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #cccccc;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Mission section */
        .mission-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #cccccc;
          margin-bottom: 2rem;
          max-width: 800px;
        }

        .mission-highlights {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.2rem;
          background: rgba(255, 38, 38, 0.1);
          border: 1px solid rgba(255, 38, 38, 0.3);
          border-radius: 50px;
          font-weight: 600;
        }

        /* Values section */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .value-card {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          transition: transform 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color);
        }

        .value-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .value-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .value-card p {
          color: #cccccc;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }
          
          .mission-highlights {
            flex-direction: column;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}