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
    { name: 'XML', icon: 'fa-file-code', isFab: false },
    { name: 'Advanced AI', icon: 'fa-brain', isFab: false },
    { name: 'Power BI & Access', icon: 'fa-chart-pie', isFab: false },
    { name: 'ERP & SAP Systems', icon: 'fa-briefcase', isFab: false },
    { name: 'OS & Active Directory', icon: 'fa-folder-tree', isFab: false },
    { name: 'Cyber Security', icon: 'fa-shield-halved', isFab: false },
    { name: 'M365 & Entra ID', icon: 'fa-user-shield', isFab: false },
    { name: 'Firewalls & Network', icon: 'fa-network-wired', isFab: false }
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
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
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

        .card-controls {
          position: absolute;
          top: 25px;
          right: 25px;
        }

        .profile-title {
          margin-bottom: 4px;
        }

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
          padding-left: 20px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 4px;
          top: 6px;
          bottom: 6px;
          width: 1px;
          background: var(--glass-border);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 22px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -19px;
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
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .timeline-title {
          font-weight: 600;
          font-size: 0.92rem;
          margin-top: 2px;
        }

        .timeline-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-top: 4px;
          line-height: 1.45;
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
        
        <main className="portfolio-card">
          
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

          {/* Combined Chronological Engineering Timeline */}
          <h2><i className="fas fa-history"></i> Engineering Milestones</h2>
          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-date">Advanced AI, Data Analytics & Media Design</div>
              <div className="timeline-title">Intelligence Modeling, Microsoft Ecosystems & Rich Media Operations</div>
              <div className="timeline-desc">
                Pioneered the integration of advanced Artificial Intelligence automation models to optimize system workflows and technical operations. Expertly deployed data analytics intelligence layers using Microsoft Power BI dashboard schemas and managed relational local database infrastructure utilizing Microsoft Access DB. Fully proficient across the complete Microsoft Office 365 enterprise suite, backed by advanced rich-media engineering capabilities in professional Adobe Photoshop editing and high-end video editing pipelines.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">ERP Systems & Workplace Operations</div>
              <div className="timeline-title">Enterprise Resource Planning, SaaS & Financial Platforms</div>
              <div className="timeline-desc">
                Supervised the administration, data orchestration, and platform integrity of core enterprise environments including SAP architectures and modern Software-as-a-Service (SaaS) utilities. Directed the integration of corporate Time Attendance networks, automated payroll systems, and Time Management Systems (TMS). Successfully maintained business continuity across leading accountancy platforms, including Tally configurations and AutoCount software suites.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Directory Services & OS Orchestration</div>
              <div className="timeline-title">Active Directory Domain Controls & Multi-Platform Systems</div>
              <div className="timeline-desc">
                Architected enterprise-level Identity and Access Management layout modules within Windows Server ecosystems (up to Server 2025 platforms). Mastered the orchestration of Active Directory Domain Services, including automated Group Policy deployments, structural organization tree management, and robust multi-platform workstation compliance matrices spanning Windows 10, Windows 11, and enterprise Linux landscapes.
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">Cybersecurity & Cloud Identity Governance</div>
              <div className="timeline-title">M365 Admin, Entra ID & Perimeter Defense Platforms</div>
              <div className="timeline-desc">
                Orchestrated secure enterprise identity management utilizing M365 Admin Center and Microsoft Entra ID. Enforced comprehensive zero-trust architectures by deploying Multi-Factor Authentication (MFA), strict conditional access profiles, enterprise-grade Anti-virus, and intelligent Anti-spam gateway filters to mitigate environmental attack vectors.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Network Topology & Physical Infrastructure</div>
              <div className="timeline-title">Core Layer-4 Switching, Routing & Telephony Provisioning</div>
              <div className="timeline-desc">
                Designed and deployed reliable local area networks encompassing core Layer-4 switches, physical routers, high-density Wi-Fi nodes, LAN configurations, and segmented VLAN schemes. Fully integrated integrated surveillance ecosystems including smart IP cameras, enterprise CCTV systems, and unified IP Phone configurations over PoE networks.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Data Retention & Resiliency Operations</div>
              <div className="timeline-title">Network-Attached Storage (NAS), Backups & Disaster Recovery</div>
              <div className="timeline-desc">
                Engineered fault-tolerant corporate data storage setups deploying standalone Network-Attached Storage (NAS) configurations. Formulated aggressive regulatory backup models, immutable retention storage layers, and rigorous full-volume data recovery protocols to prevent operational business interruption.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Full-Stack Application Delivery</div>
              <div className="timeline-title">Enterprise Web Architecture & Identity Integration</div>
              <div className="timeline-desc">
                Architected and deployed modular inventory tracking systems utilizing ASP.NET Core and PHP web frameworks. Successfully implemented secure, token-based authentication modules and custom database-connected layouts. Optimized back-end structural database environments, parallelism scheduling metrics, and query execution mapping inside MS SQL Server and MySQL instances.
              </div>
            </div>

          </div>
        </main>

        <footer className="site-footer">
         Copyright  &copy;2026 Abdullah. All Rights Reserved
        </footer>

      </div>
    </>
  );
}

