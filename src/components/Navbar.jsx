import { useEffect, useState } from 'react'
import { Home, User, Briefcase, Mail } from 'lucide-react'
import logo from '../assets/logo.ico'

const links = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About Us', icon: User },
  { href: '#services', label: 'Services', icon: Briefcase },
  { href: '#contact', label: 'Contact', icon: Mail },
]

export default function VerticalNavbar() {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Observer to track which section is in view
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    // Observe all sections
    links.forEach(link => {
      const sectionId = link.href.replace('#', '')
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleSectionClick = (href) => {
    const sectionId = href.replace('#', '')
    setActiveSection(sectionId)
    
    // Get the target element
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate the exact position to center the section
      const elementTop = element.offsetTop
      const elementHeight = element.offsetHeight
      const windowHeight = window.innerHeight
      
      // Scroll to position that centers the section
      const scrollToPosition = elementTop - (windowHeight / 2) + (elementHeight / 2)
      
      window.scrollTo({
        top: Math.max(0, scrollToPosition),
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <style>{`
        /* Logo and Brand - Top Left */
        .brand-container {
          position: fixed;
          top: 2rem;
          left: 2rem;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 0;
          transition: all 0.3s ease;
        }

        .brand-logo {
          height: 5rem;
          width: 5rem;
          object-fit: contain;
          filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.4));
          transition: all 0.4s ease;
          border-radius: 12px;
        }

        .brand-logo:hover {
          transform: scale(1.08) rotate(2deg);
          filter: drop-shadow(0 8px 25px rgba(220, 38, 38, 0.7))
                  drop-shadow(0 0 40px rgba(255, 255, 255, 0.3));
        }

        .brand-text {
          font-size: 2.5rem;
          font-weight: 900;
          text-decoration: none;
          transition: all 0.4s ease;
          letter-spacing: -1px;
          position: relative;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.9) 20%,
            rgba(220, 38, 38, 1) 40%,
            rgba(239, 68, 68, 1) 60%,
            rgba(255, 255, 255, 0.95) 80%,
            rgba(220, 38, 38, 0.8) 100%
          );
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: flameGradient 3s ease-in-out infinite;
          text-shadow: 
            0 0 20px rgba(220, 38, 38, 0.5),
            0 0 40px rgba(220, 38, 38, 0.3),
            0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .brand-text:hover {
          transform: translateY(-2px) scale(1.02);
          animation: flameGradient 1.5s ease-in-out infinite;
          text-shadow: 
            0 0 30px rgba(220, 38, 38, 0.8),
            0 0 60px rgba(220, 38, 38, 0.5),
            0 0 80px rgba(255, 255, 255, 0.4),
            0 6px 12px rgba(0, 0, 0, 0.4);
        }

        @keyframes flameGradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Vertical Navigation - Left Side */
        .vertical-nav {
          position: fixed;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 999;
          transition: all 0.3s ease;
        }

        .vertical-nav__inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          padding: 1.5rem 1rem;
        }

        .vertical-nav__links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          position: relative;
        }

        /* Navigation Line */
        .nav-line {
          position: absolute;
          left: 0.75rem;
          top: 0;
          width: 0;
          height: 100%;
          border-left: 3px dotted rgba(255, 255, 255, 0.4);
        }

        .nav-line__active {
          position: absolute;
          left: 0.75rem;
          width: 0;
          border-left: 3px dotted rgba(220, 38, 38, 0.9);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: drop-shadow(0 0 8px rgba(220, 38, 38, 0.5));
        }

        .magic-nav-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          height: 3.5rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 0.75rem 0;
          z-index: 10;
          opacity: 0.5;
          padding-left: 2rem;
        }

        .magic-nav-item.active {
          opacity: 1;
        }

        .magic-nav-item:hover {
          opacity: 0.8;
        }

        .nav-icon {
          width: 1.5rem;
          height: 1.5rem;
          transition: all 0.3s ease;
          color: rgba(255, 255, 255, 0.7);
          z-index: 20;
          position: relative;
        }

        .magic-nav-item.active .nav-icon {
          color: rgba(220, 38, 38, 1);
          transform: scale(1.15);
          filter: drop-shadow(0 0 8px rgba(220, 38, 38, 0.6));
        }

        .magic-nav-item:hover .nav-icon {
          color: rgba(220, 38, 38, 0.8);
          transform: scale(1.05);
        }

        /* Navigation Text */
        .nav-text {
          color: rgba(255, 255, 255, 0.7);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .magic-nav-item.active .nav-text {
          color: rgba(255, 255, 255, 1);
          text-shadow: 
            0 0 10px rgba(220, 38, 38, 0.4),
            0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .magic-nav-item:hover .nav-text {
          color: rgba(255, 255, 255, 0.9);
        }

        /* Sparkle animation for active item */
        @keyframes sparkle {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
          }
          50% { 
            transform: scale(1.02) rotate(1deg);
          }
        }

        .magic-nav-item.active {
          animation: sparkle 3s ease-in-out infinite;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .brand-container {
            top: 1rem;
            left: 1rem;
            gap: 1rem;
          }

          .brand-logo {
            height: 4rem;
            width: 4rem;
          }

          .brand-text {
            font-size: 2rem;
          }

          .vertical-nav {
            left: 0.5rem;
            transform: translateY(-50%) scale(0.9);
             background: transparent !important;
          }

          .vertical-nav__inner {
            padding: 1rem 0.5rem;
             background: transparent !important;
          }

          .magic-nav-item {
            height: 2.5rem;
             background: transparent !important;
          }

          .nav-text {
            font-size: 0.8rem;
          }

          .nav-icon {
            width: 1.2rem;
            height: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .brand-container {
            top: 0.5rem;
            left: 0.5rem;
            gap: 0.8rem;
             background: transparent !important;
          }

          .brand-logo {
            height: 3.5rem;
            width: 3.5rem;
          }

          .brand-text {
            font-size: 1.8rem;
          }

          .vertical-nav {
            left: 0.2rem;
            transform: translateY(-50%) scale(0.8);
             background: transparent !important;
    box-shadow: none !important;
          }

          .vertical-nav__inner {
            padding: 0.8rem 0.3rem;
             background: transparent !important;
          }
        }

        /* Add margin to body to prevent content overlap */
        .page-content {
          margin-left: 200px;
        }

        @media (max-width: 768px) {
          .page-content {
            margin-left: 150px;
          }
        }

        @media (max-width: 480px) {
          .page-content {
            margin-left: 120px;
          }
        }
      `}</style>

      {/* Logo and Brand - Top Left */}
      <div className="brand-container">
        <img 
          src={logo}
          alt="1NETWORKS Logo" 
          className="brand-logo"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
        <a href="#home" className="brand-text">
          1NETWORKS
        </a>
      </div>

      {/* Vertical Navigation - Left Side */}
      <nav className="vertical-nav">
        <div className="vertical-nav__inner">
          <div className="vertical-nav__links">
            {/* Navigation Line */}
            <div className="nav-line"></div>
            
            {/* Active Section Indicator */}
            <div 
              className="nav-line__active"
              style={{
                height: '3.5rem',
                top: `${links.findIndex(link => link.href.replace('#', '') === activeSection) * 4.25}rem`
              }}
            />

            {/* Navigation Items */}
            {links.map((link, index) => {
              const Icon = link.icon
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              const isHovered = hoveredItem === sectionId
              
              return (
                <div 
                  key={link.href} 
                  className={`magic-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleSectionClick(link.href)}
                  onMouseEnter={() => setHoveredItem(sectionId)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Navigation Icon */}
                  <Icon className="nav-icon" />
                  
                  {/* Navigation Text */}
                  <span className="nav-text">{link.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}