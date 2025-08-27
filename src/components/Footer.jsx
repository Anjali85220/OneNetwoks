export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="brand">
          <span className="logo-dot" /> <span>1NETWORKS</span>
        </div>
        <nav className="footlinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="copy">© {year} 1NETWORKS. All rights reserved.</div>
      </div>
    </footer>
  )
}
