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
          --header-footer-bg: rgba(255, 255, 255, 0.01);
        }

        .light-theme-wrapper {
          --bg-gradient: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          --glass-bg: rgba(255, 255, 255, 0.7);
          --glass-border: rgba(15, 23, 42, 0.06);
          --text-primary: #0f172a;
          --text-secondary: #475569;
          --accent-color: #4f46e5;
          --card-hover: rgba(79, 70, 229, 0.06);
          --header-footer-bg: rgba(255, 255, 255, 0.4);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        /* Screen Fitting Engine */
        .app-container {
          background: var(--bg-gradient);
          background-attachment: fixed;
          color: var(--text-primary);
          min-height: 100vh;
          min-height: 100dvh; /* Dynamic mobile viewport fallback */
          width: 100vw;
          padding: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          overflow-x: hidden;
        }

        /* Elegant Slim Header */
        .site-header {
          width: 100%;
          max-width: 750px;
          background: var(--header-footer-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 30px;
          padding: 10px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .site-header-title {
          font-size: 1.15rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: var(--text-primary);
        }

        /* Highly Adaptable Central Card Layout */
        .portfolio-card {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          width: 100%;
          max-width: 750px;
          padding: 24px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .profile-title h1 {
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .profile-title p {
          color: var(--accent-color);
          font-size: 0.9rem;
          font-weight: 500;
          margin-top: 1px;
        }

        .bio-text {
          color: var(--text-secondary);
          font-size: 0.88rem;
          line-height: 1.5;
          margin-top: 12px;
        }

        .theme-toggle-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          width: 30px;
          height: 30px;
        }

        .theme-toggle-btn:hover {
          color: var(--accent-color);
        }

        .section-divider {
          border: 0;
          height: 1px;
          background: var(--glass-border);
          margin: 18px 0;
        }

        h2 {
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Device-Agnostic Fluid Skill Matrix Grid */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        @media (min-width: 550px) {
          .tech-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (min-width: 750px) {
          .tech-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .tech-badge {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          padding: 8px 12px;
          border-radius: 10px;
          font-size: 0.8rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tech-badge:hover {
          background: var(--card-hover);
          border-color: var(--accent-color);
        }

        .tech-badge i {
          color: var(--accent-color);
          font-size: 0.9rem;
          width: 14px;
          text-align: center;
        }

        /* Timeline Scaling Layout */
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
          margin-bottom: 12px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -15px;
          top: 4px;
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
          font-size: 0.88rem;
          margin-top: 1px;
        }

        .timeline-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-top: 2px;
          line-height: 1.35;
        }

        /* Elegant Border-less Footer */
        .site-footer {
          width: 100%;
          max-width: 750px;
          text-align: center;
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 400;
          letter-spacing: 0.03em;
          padding: 8px 0;
        }
      `}</style>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <div className={`app-container ${isLightMode ? 'light-theme-wrapper' : ''}`}>
        
        {/* High-End Slim Header */}
        <header className="site-header">
          <div className="site-header-title">Abdullah</div>
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            <i className={`fas ${isLightMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </header>

        {/* Dynamic Scaling Workspace Matrix Container */}
        <main className="portfolio-card">
          <div className="profile-title">
            <h1>Abdullah</h1>
            <p>Full-Stack Engineer & Systems Administrator</p>
          </div>

          <p className="bio-text">
            Developing scalable enterprise environments, full-stack applications, and secure data architecture matrix layouts. Focused on structural computing and optimal database management systems.
          </p>

          <div className="section-divider" />

          {/* Core Technical Grid - Automatically Expands to 4 Columns on Large Screens */}
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

          {/* Optimized Structural Timeline */}
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

        {/* Minimalist, Elegant Branded Footer */}
        <footer className="site-footer">
         Copyright &copy;2026 Abdullah. All Rights Reserved
        </footer>

      </div>
    </>
  );
}
