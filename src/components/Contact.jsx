import { useRef, useState } from 'react'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ sending: false, ok: null, msg: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ sending: true, ok: null, msg: '' })

    try {
      const emailjs = await import('emailjs-com')
      await emailjs.default.sendForm(
        'service_d9fnf5s',
        'template_7owb9ao',
        formRef.current,
        'lVxA2r26bLwNO0oNy'
      )
      setStatus({ sending: false, ok: true, msg: "Message sent! We'll get back soon." })
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus({ sending: false, ok: false, msg: 'Failed to send. Please try again.' })
    }
  }

  return (
    <section className="contact-main-section">
      <div className="contact-bg-animation"></div>
      <div className="contact-floating-elements">
        <div className="contact-floating-circle contact-circle-1"></div>
        <div className="contact-floating-circle contact-circle-2"></div>
        <div className="contact-floating-circle contact-circle-3"></div>
        <div className="contact-tech-grid"></div>
        <div className="contact-floating-dots">
          <div className="contact-dot contact-red-dot contact-dot-1"></div>
          <div className="contact-dot contact-white-dot contact-dot-2"></div>
          <div className="contact-dot contact-red-dot contact-dot-3"></div>
          <div className="contact-dot contact-white-dot contact-dot-4"></div>
          <div className="contact-dot contact-red-dot contact-dot-5"></div>
          <div className="contact-dot contact-white-dot contact-dot-6"></div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-header-section">
          <h2 className="contact-main-title">
            Contact <span className="contact-red-text">Us</span>
          </h2>
          <p className="contact-subtitle">
            Let's discuss your network goals and transform your infrastructure.
          </p>
        </div>

        <div className="contact-grid-layout">
          <div className="contact-form-card">
            <div className="contact-form-header">
              <h3>Send us a Message</h3>
              <p>Ready to upgrade your network? Let's talk.</p>
            </div>

            <form ref={formRef} onSubmit={onSubmit}>
              <div className="contact-field">
                <label className="contact-label">Name</label>
                <input
                  type="text"
                  name="from_name"
                  className="contact-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="contact-field">
                <label className="contact-label">Email</label>
                <input
                  type="email"
                  name="from_email"
                  className="contact-input"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="contact-field">
                <label className="contact-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="contact-input"
                  placeholder="+91 9876543210"
                  required
                />
              </div>

              <div className="contact-field">
                <label className="contact-label">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="contact-textarea"
                  placeholder="Tell us about your network requirements and goals..."
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-btn contact-btn-primary"
                disabled={status.sending}
              >
                {status.sending ? (
                  <>
                    <span className="contact-spinner"></span>
                    Sending…
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {status.ok !== null && (
                <div
                  className={`contact-status ${
                    status.ok ? 'contact-status-success' : 'contact-status-error'
                  }`}
                >
                  {status.msg}
                </div>
              )}
            </form>
          </div>

          <div className="contact-info-section">
            <div className="contact-info-card">
              <div className="contact-info-header">
                <h3>Get in Touch</h3>
                <p>
                  Ready to transform your network infrastructure? Our experts are here to help.
                </p>
              </div>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon">📞</div>
                  <div className="contact-info-content">
                    <h4>Sales Team</h4>
                    <p>+91 9845522880</p>
                    <p>preetikiran@1networks.in</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">💼</div>
                  <div className="contact-info-content">
                    <h4>Operations & Finance</h4>
                    <p>+91 7019397719</p>
                    <p>priya@1networks.in</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">📍</div>
                  <div className="contact-info-content">
                    <h4>Office Address</h4>
                    <p>Novel Tech Park, #46/4, GB Palya</p>
                    <p>Kudlu Gate, Hosur Road</p>
                    <p>Bangalore – 560068</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Main Section */
        .contact-main-section {
          position: relative;
          background: linear-gradient(135deg, #000000 0%, #1a0a0a 100%);
          padding: 3rem 0;
          overflow: hidden;
          min-height: 100vh;
        }

        /* Container */
        .contact-container {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          width: 100%;
          padding: 0 1.5rem;
          margin: 0 auto;
        }

        /* Header */
        .contact-header-section {
          text-align: center;
          margin-bottom: 2rem;
        }

        .contact-main-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .contact-red-text {
          background: linear-gradient(135deg, #e11d2e, #ff4757);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }

        /* Grid Layout */
        .contact-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          align-items: stretch; /* Make both boxes stretch to same height */
        }

        /* Cards - Now equal in size */
        .contact-form-card,
        .contact-info-card {
          background: rgba(30, 30, 30, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(225, 29, 46, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          height: 100%; /* Ensure both take full height */
          display: flex;
          flex-direction: column;
        }

        /* Card Headers */
        .contact-form-header,
        .contact-info-header {
          margin-bottom: 1.5rem;
        }

        .contact-form-header h3,
        .contact-info-header h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .contact-form-header p,
        .contact-info-header p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Form Fields */
        .contact-field {
          margin-bottom: 1rem;
        }

        .contact-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 0.4rem;
        }

        .contact-input,
        .contact-textarea {
          width: 100%;
          padding: 0.7rem 0.9rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          color: #ffffff;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .contact-textarea {
          resize: vertical;
          min-height: 100px;
        }

        /* Buttons */
        .contact-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem 1.25rem;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          font-size: 0.95rem;
          width: 100%;
          margin-top: 0.5rem;
        }

        .contact-btn-primary {
          background: linear-gradient(135deg, #e11d2e, #ff4757);
          color: white;
        }

        /* Info Items - Now more compact */
        .contact-info-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex-grow: 1; /* Take remaining space */
        }

        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.8rem 0;
        }

        .contact-info-icon {
          font-size: 1.1rem;
          background: rgba(225, 29, 46, 0.2);
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-info-content {
          flex: 1;
        }

        .contact-info-content h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .contact-info-content p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          line-height: 1.4;
          margin-bottom: 0.1rem;
        }

        /* Status Message */
        .contact-status {
          margin-top: 0.8rem;
          padding: 0.6rem;
          border-radius: 6px;
          font-size: 0.85rem;
          text-align: center;
        }

        .contact-status-success {
          background: rgba(40, 167, 69, 0.15);
          color: #28a745;
          border: 1px solid rgba(40, 167, 69, 0.3);
        }

        .contact-status-error {
          background: rgba(220, 53, 69, 0.15);
          color: #dc3545;
          border: 1px solid rgba(220, 53, 69, 0.3);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .contact-grid-layout {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .contact-main-section {
            padding: 2rem 0;
          }
          
          .contact-form-card,
          .contact-info-card {
            padding: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .contact-info-item {
            flex-direction: row;
            align-items: center;
            gap: 0.8rem;
          }
          
          .contact-info-icon {
            width: 32px;
            height: 32px;
            font-size: 1rem;
          }
          
          .contact-info-content h4 {
            font-size: 0.95rem;
          }
          
          .contact-info-content p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  )
}