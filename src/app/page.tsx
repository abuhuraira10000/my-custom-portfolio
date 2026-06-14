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
    { name: 'Oracle Database', icon: 'fa-server', isFab: false },
    { name: 'C Language', icon: 'fa-terminal', isFab: false },
    { name: 'C++', icon: 'fa-microchip', isFab: false },
    { name: 'C# & VB.NET', icon: 'fa-hashtag', isFab: false },
    { name: 'Blockchain', icon: 'fa-link', isFab: false },
    { name: 'ASP.NET', icon: 'fa-windows', isFab: true },
    { name: 'XML', icon: 'fa-file-code', isFab: false },
    { name: 'Azure, AWS, GCP', icon: 'fa-cloud', isFab: false },
    { name: 'Advanced AI', icon: 'fa-brain', isFab: false },
    { name: 'Power BI & Access', icon: 'fa-chart-pie', isFab: false },
    { name: 'ERP & POS Systems', icon: 'fa-cash-register', isFab: false },
    { name: 'Hardware & Peripherals', icon: 'fa-screwdriver-wrench', isFab: false },
    { name: 'RAID & Storage Arrays', icon: 'fa-hdd', isFab: false },
    { name: 'OS & Active Directory', icon: 'fa-folder-tree', isFab: false },
    { name: 'Centralized Endpoint Security', icon: 'fa-shield-virus', isFab: false },
    { name: 'ONT Modem & Edge Routing', icon: 'fa-route', isFab: false },
    { name: 'M365 & Entra ID', icon: 'fa-user-shield', isFab: false },
    { name: 'Firewalls & Network', icon: 'fa-network-wired', isFab: false }
  ];

  return (
    <>
      <style>{`
        /* Default Dark Theme Variables */
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

        /* Explicit Light Theme Classes applied dynamically */
        .light-theme-wrapper {
          --bg-gradient: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          --glass-bg: rgba(255, 255, 255, 0.75);
          --glass-border: rgba(15, 23, 42, 0.08);
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
          transition: background 0.3s ease, color 0.3s ease;
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
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
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
          transition: color 0.3s ease;
        }

        .contact-info-block {
          margin-top: 10px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .contact-link {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          padding: 6px 12px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          border-color: var(--accent-color);
          background: var(--card-hover);
          color: var(--accent-color);
        }

        .bio-text {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-top: 16px;
          transition: color 0.3s ease;
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
          transition: color 0.3s ease, background 0.3s ease;
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
          transition: background 0.3s ease;
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
          transition: color 0.3s ease;
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
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.2s ease;
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
          transition: color 0.3s ease;
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
          transition: background 0.3s ease;
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
          transition: background 0.3s ease;
        }

        .timeline-date {
          font-size: 0.75rem;
          color: var(--accent-color);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          transition: color 0.3s ease;
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
          transition: color 0.3s ease;
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
          transition: color 0.3s ease;
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
            
            <div className="contact-info-block">
              <a href="mailto:abdulla10k@atomicmail.io" className="contact-link">
                <i className="fas fa-envelope"></i> abdulla10k@atomicmail.io
              </a>
            </div>
          </div>

          <p className="bio-text">
            Architecting high-availability multi-cloud environments, modern full-stack web platforms, and secure data infrastructure layouts. Specialized in building scalable applications, orchestrating deep endpoint security layers, and optimizing robust relational database systems across enterprise networks.
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

          {/* Chronological Engineering Timeline */}
          <h2><i className="fas fa-history"></i> Engineering Milestones</h2>
          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-date">On-Premises Infrastructure & Storage Engineering</div>
              <div className="timeline-title">Bare-Metal Server Provisioning, Lifecycle Operations & Advanced RAID Topologies</div>
              <div className="timeline-desc">
                Directed end-to-end bare-metal hardware engineering across production server rooms and corporate nodes. Expertly handled the physical installation, complex hardware configuration, preventative maintenance routines, and secure bare-metal server deployment lifecycles. Specialized in physical data center array management, executing zero-downtime hot-swappable hard disk expansions, faulty logical volume drive reconstructions, and highly-resilient block-level storage layouts using hardware RAID 0, RAID 1, RAID 5, and multi-disk striping/mirroring across RAID 10 configurations. Managed extensive device setups, peripheral hardware debugging, and structural optimization for enterprise network printers and corporate multi-function photocopiers.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Cloud Architecture & DevOps Infrastructure</div>
              <div className="timeline-title">Multi-Cloud Orchestration & Distributed Environments</div>
              <div className="timeline-desc">
                Designed, provisioned, and managed highly available cloud architecture matrices across Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP). Orchestrated secure infrastructure migrations, serverless execution computing deployments, and continuous delivery pipelines while enforcing cloud network security policy parameters across multi-tenant enterprise environments.
              </div>
            </div>

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
              <div className="timeline-date">Cybersecurity & Centralized Endpoint Governance</div>
              <div className="timeline-title">M365 Admin, Entra ID & Distributed Perimeter Anti-Virus Platforms</div>
              <div className="timeline-desc">
                Orchestrated secure enterprise identity management utilizing M365 Admin Center and Microsoft Entra ID. Enforced comprehensive zero-trust architectures by deploying Multi-Factor Authentication (MFA), strict conditional access profiles, and centralized endpoint management tools. Expertly administered distributed network defense configurations across modern cloud security architectures, deploying and maintaining enterprise centralized Anti-Virus platforms including Sophos environments, Trend Vision One threat intelligence, McAfee infrastructure, Bitdefender networks, and Microsoft Defender management. Maintained extensive workstation host defense frameworks across client endpoints using Norton 360, Malwarebytes endpoints, Avast Business utilities, and Avira security tools to completely mitigate environmental security vulnerabilities.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Network Topology, ONT Telecommunications & Vendor Coordination</div>
              <div className="timeline-title">Core Layer-4 Switching, Optical Fiber Modems & Collaborative Engineering</div>
              <div className="timeline-desc">
                Designed and deployed reliable local area networks encompassing core Layer-4 switches, physical routers, high-density Wi-Fi nodes, LAN configurations, and segmented VLAN schemes. Specialized in high-performance telecommunications architectures, executing structural deployments, hardware profiling, provisioning, and complex configurations for edge Optical Network Terminal (ONT) modems to guarantee optimal fiber-optic line termination and connectivity. Maintained deep engineering synergy and technical cooperation with tier-1 internet service providers, hardware suppliers, and external engineering vendors to manage formal replies, draft incident analysis reports, track fault rectification timelines, and execute seamless service level agreements (SLAs). Fully integrated surveillance ecosystems including smart IP cameras, enterprise CCTV systems, and unified IP Phone configurations over PoE networks.
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
              <div className="timeline-date">Enterprise Web Architecture & Databases</div>
              <div className="timeline-title">Full-Stack Web Development and Application Development</div>
              <div className="timeline-desc">
                Architected and deployed modular enterprise portals and thick-client integrations utilizing an advanced suite of tools including HTML5, CSS3, JScript, JSP, ASP.NET, Bootstrap, React, and Node.js alongside custom VB.NET layouts. Engineered transactional Point of Sale (POS) environments and automated Call Accounting telemetry logging frameworks. Designed and optimized back-end structured engine environments across Microsoft SQL Server, MySQL instances, and heavy enterprise Oracle Database architectures.
              </div>
            </div>

          </div>
        </main>

        <footer className="site-footer">
        Copyright &copy;2026 Abdullah. All Rights Reserved
        </footer>

      </div>
    </>
  );
}
