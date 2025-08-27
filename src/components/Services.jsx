export default function Services() {
  const items = [
    { title: 'Cloud & Edge Networking', desc: 'Seamless, secure, and scalable infrastructure from edge to cloud.', icon: '☁️' },
    { title: 'OEM Integration', desc: 'Tailored solutions and integrations for OEM partners.', icon: '🔧' },
    { title: 'Modern Data Center Infrastructure', desc: 'High-performance, scalable, and secure DC designs.', icon: '🏢' },
    { title: 'AMC (Annual Maintenance Contracts)', desc: 'Proactive maintenance and reliable support.', icon: '🛠️' },
    { title: 'Structured Cabling Solutions', desc: 'Organized, reliable connectivity with easy scalability.', icon: '🔌' },
    { title: 'Servers / Storage', desc: 'From desktops to servers—network-ready resources.', icon: '💾' },
    { title: 'IT Consulting', desc: 'Use technology effectively to achieve growth.', icon: '💡' },
    { title: 'Cloud & AI FinOps', desc: 'Optimize cloud costs and operations.', icon: '🤖' },
  ];

  return (
    <section className="services-main-section" id="services">
      <div className="services-bg-animation"></div>
      <div className="services-floating-elements">
        <div className="services-floating-circle services-circle-1"></div>
        <div className="services-floating-circle services-circle-2"></div>
        <div className="services-floating-circle services-circle-3"></div>
        <div className="services-floating-circle services-circle-4"></div>
        <div className="services-floating-circle services-circle-5"></div>
        <div className="services-tech-grid"></div>
        <div className="services-floating-dots">
          <div className="services-dot services-red-dot services-dot-1"></div>
          <div className="services-dot services-white-dot services-dot-2"></div>
          <div className="services-dot services-red-dot services-dot-3"></div>
          <div className="services-dot services-white-dot services-dot-4"></div>
          <div className="services-dot services-red-dot services-dot-5"></div>
          <div className="services-dot services-white-dot services-dot-6"></div>
          <div className="services-dot services-red-dot services-dot-7"></div>
          <div className="services-dot services-white-dot services-dot-8"></div>
          <div className="services-dot services-red-dot services-dot-9"></div>
          <div className="services-dot services-white-dot services-dot-10"></div>
          <div className="services-dot services-red-dot services-dot-11"></div>
          <div className="services-dot services-white-dot services-dot-12"></div>
        </div>
      </div>

      <div className="services-container">
        <div className="services-header-section">
          <h2 className="services-main-title">
            Our <span className="services-red-text">Services</span>
          </h2>
          <p className="services-subtitle">
            End-to-end capabilities to plan, build, and run modern networks.
          </p>
        </div>

        <div className="services-grid-layout">
          {items.map((s, i) => (
            <div
              key={s.title}
              className="services-card"
            >
              <div className="services-icon">{s.icon}</div>
              <div className="services-content">
                <h3 className="services-card-title">{s.title}</h3>
                <p className="services-card-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-main-section {
          position: relative;
          background: linear-gradient(135deg, #000000 0%, #1a0a0a 100%);
          min-height: 100vh;
          padding: 3rem 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
           margin-left: 200px; 
            z-index: 1;
        }

        .services-bg-animation {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #000000 0%, #1a0a0a 100%);
          z-index: 0;
        }

        .services-floating-elements {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }

        .services-floating-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(225, 29, 46, 0.1), rgba(255, 71, 87, 0.05));
          animation: servicesFloat 20s infinite ease-in-out;
          backdrop-filter: blur(10px);
        }

        .services-circle-1 {
          width: 120px;
          height: 120px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
          background: linear-gradient(135deg, rgba(225, 29, 46, 0.15), rgba(255, 71, 87, 0.08));
        }

        .services-circle-2 {
          width: 80px;
          height: 80px;
          top: 20%;
          right: 10%;
          animation-delay: -7s;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(200, 200, 200, 0.05));
        }

        .services-circle-3 {
          width: 150px;
          height: 150px;
          bottom: 15%;
          left: 15%;
          animation-delay: -14s;
          background: linear-gradient(135deg, rgba(225, 29, 46, 0.15), rgba(255, 71, 87, 0.08));
        }

        .services-circle-4 {
          width: 60px;
          height: 60px;
          top: 60%;
          right: 20%;
          animation-delay: -3s;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(200, 200, 200, 0.05));
        }

        .services-circle-5 {
          width: 100px;
          height: 100px;
          bottom: 30%;
          right: 5%;
          animation-delay: -10s;
          background: linear-gradient(135deg, rgba(225, 29, 46, 0.15), rgba(255, 71, 87, 0.08));
        }

        .services-tech-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(225, 29, 46, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(225, 29, 46, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: servicesGridMove 30s linear infinite;
        }

        .services-floating-dots {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .services-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: servicesFloatDots 15s infinite ease-in-out;
        }

        .services-red-dot {
          background: radial-gradient(circle, #e11d2e, #ff4757);
          box-shadow: 0 0 10px rgba(225, 29, 46, 0.4);
        }

        .services-white-dot {
          background: radial-gradient(circle, #ffffff, #cccccc);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
        }

        .services-dot-1 {
          top: 15%;
          left: 10%;
          animation-delay: 0s;
          animation-duration: 12s;
        }

        .services-dot-2 {
          top: 25%;
          right: 15%;
          animation-delay: -2s;
          animation-duration: 18s;
        }

        .services-dot-3 {
          top: 45%;
          left: 8%;
          animation-delay: -4s;
          animation-duration: 14s;
        }

        .services-dot-4 {
          top: 35%;
          right: 25%;
          animation-delay: -6s;
          animation-duration: 16s;
        }

        .services-dot-5 {
          bottom: 30%;
          left: 20%;
          animation-delay: -1s;
          animation-duration: 13s;
        }

        .services-dot-6 {
          bottom: 40%;
          right: 12%;
          animation-delay: -8s;
          animation-duration: 19s;
        }

        .services-dot-7 {
          top: 60%;
          left: 35%;
          animation-delay: -3s;
          animation-duration: 15s;
        }

        .services-dot-8 {
          top: 70%;
          right: 35%;
          animation-delay: -5s;
          animation-duration: 17s;
        }

        .services-dot-9 {
          bottom: 20%;
          left: 45%;
          animation-delay: -7s;
          animation-duration: 11s;
        }

        .services-dot-10 {
          top: 80%;
          right: 40%;
          animation-delay: -9s;
          animation-duration: 20s;
        }

        .services-dot-11 {
          top: 10%;
          left: 60%;
          animation-delay: -2.5s;
          animation-duration: 14s;
        }

        .services-dot-12 {
          bottom: 15%;
          right: 60%;
          animation-delay: -4.5s;
          animation-duration: 16s;
        }

        @keyframes servicesFloatDots {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-30px) translateX(15px);
            opacity: 1;
          }
          50% {
            transform: translateY(-60px) translateX(-10px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-30px) translateX(20px);
            opacity: 0.8;
          }
        }

        @keyframes servicesFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.8;
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-40px) rotate(180deg);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-20px) rotate(270deg);
            opacity: 0.3;
          }
        }

        @keyframes servicesGridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        .services-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1400px;
          padding: 0 2rem;
          margin: 0 auto;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .services-header-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .services-main-title {
          font-size: 3.5rem;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .services-red-text {
          background: linear-gradient(135deg, #e11d2e, #ff4757);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .services-subtitle {
          max-width: 600px;
          margin: 0 auto;
          color: #cccccc;
          font-size: 1.2rem;
          line-height: 1.6;
        }

        .services-grid-layout {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 2rem;
          width: 100%;
          height: auto;
        }

        .services-card {
          background: rgba(185, 181, 181, 0.15);
          border: 1px solid rgba(225, 29, 46, 0.3);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          transition: all 0.4s ease;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
          min-height: 140px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .services-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #e11d2e, #ff4757);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .services-card:hover::before {
          transform: scaleX(1);
        }

        .services-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(225, 29, 46, 0.5);
          box-shadow: 0 20px 40px rgba(225, 29, 46, 0.2);
          background: rgba(30, 30, 30, 0.9);
        }

        .services-icon {
          font-size: 2.8rem;
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(225, 29, 46, 0.2);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .services-card:hover .services-icon {
          background: rgba(225, 29, 46, 0.3);
          transform: scale(1.1);
        }

        .services-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .services-card-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
          line-height: 1.3;
        }

        .services-card-desc {
          font-size: 0.95rem;
          color: #aaaaaa;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 1200px) {
          .services-grid-layout {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(4, 1fr);
          }
          
          .services-main-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .services-main-section {
            padding: 2rem 0;
          }
          
          .services-grid-layout {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(8, 1fr);
            gap: 1.5rem;
          }
          
          .services-card {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1.5rem;
            gap: 1rem;
          }
          
          .services-main-title {
            font-size: 2.5rem;
          }
          
          .services-subtitle {
            font-size: 1.1rem;
          }
          
          .services-header-section {
            margin-bottom: 3rem;
          }
        }

        @media (max-width: 480px) {
          .services-container {
            padding: 0 1rem;
          }
          
          .services-main-title {
            font-size: 2rem;
          }
          
          .services-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}