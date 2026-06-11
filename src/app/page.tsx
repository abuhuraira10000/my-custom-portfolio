'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('portfolio-theme') === 'light') {
      setIsLightMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextMode = !isLightMode;
    setIsLightMode(nextMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-theme', nextMode ? 'light' : 'dark');
    }
  };

  const skills = [
    { name: 'Core Java', icon: 'fa-java', isFab: true },
    { name: 'Advanced Java', icon: 'fa-laptop-code', isFab: false },
    { name: 'Web Dev', icon: 'fa-code', isFab: false },
    { name: 'JScript', icon: 'fa-js', isFab: true },
    { name: 'Python', icon: 'fa-python', isFab: true },
    { name: 'HTML5', icon: 'fa-html5', isFab: true },
    { name: 'CSS3', icon: 'fa-css3-alt', isFab: true },
    { name: 'MS SQL Server', icon: 'fa-database', isFab: false },
    { name: 'C Language', icon: 'fa-terminal', isFab: false },
    { name: 'C++', icon: 'fa-microchip', isFab: false },
    { name: 'C#', icon: 'fa-hashtag', isFab: false },
    { name: 'Blockchain', icon: 'fa-link', isFab: false },
    { name: 'ASP.NET', icon: 'fa-windows', isFab: true },
    { name: 'XML', icon: 'fa-file-code', isFab: false }
  ];

  return (
    <>
      <style>{`
        :root {
          --bg-gradient: linear-gradient(135deg, #070a13 0%, #0f0c20 100%);
          --glass-bg: rgba(255, 255, 255, 0.02);
          --glass-border: rgba(255, 255, 255, 0.06);
          --text-primary: #f8fafc;
          --text-secondary: #94a3b8;
          --accent-color: #818cf8;
          --card-hover: rgba(129, 140, 248, 0.08);
          --name-gradient: linear-gradient(135deg, #ffffff 30%, #c7d2fe 100%);
        }

        .light-theme-wrapper {
          --bg-gradient: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          --glass-bg: rgba(255, 255, 255, 0.7);
          --glass-border: rgba(15, 23, 42, 0.06);
          --text-primary: #0f172a;
          --text-secondary: #475569;
          --accent-color: #4f46e5;
          --card-hover: rgba(79, 70, 229, 0.06);
          --name-gradient: linear-gradient(135deg, #0f172a 30%, #4f46e5 100%);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        .app-container {
          background: var(--bg-gradient);
          background-attachment: fixed;
          color: var(--text-primary);
          min-height: 100vh;
          min-height: 100dvh;
          width: 100vw;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          overflow-x: hidden;
        }

        .portfolio-card {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          width: 100%;
          max-width: 700px;
          padding: 35px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        /* Top Corner Floating Theme Toggle Control */
        .card-controls {
          position: absolute;
          top: 25px;
          right: 25px;
        }

        .profile-title {
          margin-bottom: 4px;
        }

        /* Elegant SF Pro Dynamic Gradient Header Styling */
        .profile-title h1 {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          background: var(--name-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .profile-title p {
          color: var(--accent-color);
          font-size: 0.92rem;
          font-weight: 500;
          margin-top: 4px;
          letter-spacing: -0.01em;
        }

        .bio-text {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.55;
          margin-top: 14px;
        }

        .theme-toggle-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.05rem;
          width: 35px;
          height: 35px;
          border-radius: 50%;
        }

        .theme-toggle-btn:hover {
          color: var(--accent-color);
          background: var(--card-hover);
        }

        .section-divider {
          border: 0;
          height: 1px;
          background: var(--glass-border);
          margin: 22px 0;
        }

        h2 {
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        @media (min-width: 550px) {
          .tech-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (min-width: 700px) {
          .tech-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .tech-badge {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 0.82rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tech-badge:hover {
          background: var(--card-hover);
          border-color: var(--accent-color);
          transform: translateY(-1px);
        }

        .tech-badge i {
          color: var(--accent-color);
          font-size: 0.95rem;
          width: 14px;
          text-align: center;
        }

        .timeline {
          position: relative;
          padding-left: 16px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 4px;
          top: 4px;
          bottom: 4px;
          width: 1px;
          background: var(--glass-border);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 14px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -15px;
          top: 5px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-color);
        }

        .timeline-date {
          font-size: 0.75rem;
          color: var(--accent-color);
          font-weight: 600;
        }

        .timeline-title {
          font-weight: 600;
          font-size: 0.9rem;
          margin-top: 1px;
        }

        .timeline-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-top: 3px;
          line-height: 1.4;
        }

        .site-footer {
          width: 100%;
          max-width: 700px;
          text-align: center;
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 400;
          letter-spacing: 0.03em;
          padding: 4px 0;
        }
      `}</style>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <div className={`app-container ${isLightMode ? 'light-theme-wrapper' : ''}`}>
        
        {/* Core Main Workspace Layout */}
        <main className="portfolio-card">
          
          {/* Theme Switcher tucked neatly in the card corner */}
          <div className="card-controls">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              <i className={`fas ${isLightMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
          </div>

          <div className="profile-title">
            <h1>Abdullah</h1>
            <p>Full-Stack Engineer & Systems Administrator</p>
          </div>

          <p className="bio-text">
            Developing scalable enterprise environments, full-stack applications, and secure data architecture matrix layouts. Focused on structural computing and optimal database management systems.
          </p>

          <div className="section-divider" />

          {/* Technical Expertise Matrix */}
          <h2><i className="fas fa-cubes"></i> Technical Expertise</h2>
          <div className="tech-grid">
            {skills.map((skill, idx) => (
              <div className="tech-badge" key={idx}>
                <i className={`${skill.isFab ? 'fab' : 'fas'} ${skill.icon}`}></i>
                {skill.name}
              </div>
            ))}
          </div>

          <div className="section-divider" />

          {/* Engineering Milestones */}
          <h2><i className="fas fa-history"></i> Engineering Milestones</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Active Focus</div>
              <div className="timeline-title">Infrastructure Deployment & Modular Code Architecture</div>
              <div className="timeline-desc">Building robust server systems, writing high-performance algorithm structures, and managing advanced schema layouts.</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Systems Optimization</div>
              <div className="timeline-title">Database Administration & Environment Control</div>
              <div className="timeline-desc">Implementing configuration parallelisms, system synchronization mechanisms, and secure transactional tracking.</div>
            </div>
          </div>
        </main>

        {/* Minimalist Footer */}
        <footer className="site-footer">
          &copy; copyright 2026 Abdullah. All Rights Reserved
        </footer>

      </div>
    </>
  );
}

