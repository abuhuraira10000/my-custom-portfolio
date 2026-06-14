'use client';

import { useState, useEffect, useRef } from 'react';

// Static asset structures shifted safely outside component loop scope
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

const milestones = [
  {
    date: 'On-Premises Infrastructure & Storage Engineering',
    title: 'Bare-Metal Server Provisioning, Lifecycle Operations & Advanced RAID Topologies',
    desc: 'Directed end-to-end bare-metal hardware engineering across production server rooms and corporate nodes. Expertly handled the physical installation, complex hardware configuration, preventative maintenance routines, and secure bare-metal server deployment lifecycles. Specialized in physical data center array management, executing zero-downtime hot-swappable hard disk expansions, faulty logical volume drive reconstructions, and highly-resilient block-level storage layouts using hardware RAID 0, RAID 1, RAID 5, and multi-disk striping/mirroring across RAID 10 configurations. Managed extensive device setups, peripheral hardware debugging, and structural optimization for enterprise network printers and corporate multi-function photocopiers.'
  },
  {
    date: 'Cloud Architecture & DevOps Infrastructure',
    title: 'Multi-Cloud Orchestration & Distributed Environments',
    desc: 'Designed, provisioned, and managed highly available cloud architecture matrices across Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP). Orchestrated secure infrastructure migrations, serverless execution computing deployments, and continuous delivery pipelines while enforcing cloud network security policy parameters across multi-tenant enterprise environments.'
  },
  {
    date: 'Advanced AI, Data Analytics & Media Design',
    title: 'Intelligence Modeling, Microsoft Ecosystems & Rich Media Operations',
    desc: 'Pioneered the integration of advanced Artificial Intelligence automation models to optimize system workflows and technical operations. Expertly deployed data analytics intelligence layers using Microsoft Power BI dashboard schemas and managed relational local database infrastructure utilizing Microsoft Access DB. Fully proficient across the complete Microsoft Office 365 enterprise suite, backed by advanced rich-media engineering capabilities in professional Adobe Photoshop editing and high-end video editing pipelines.'
  },
  {
    date: 'ERP Systems & Workplace Operations',
    title: 'Enterprise Resource Planning, SaaS & Financial Platforms',
    desc: 'Supervised the administration, data orchestration, and platform integrity of core enterprise environments including SAP architectures and modern Software-as-a-Service (SaaS) utilities. Directed the integration of corporate Time Attendance networks, automated payroll systems, and Time Management Systems (TMS). Successfully maintained business continuity across leading accountancy platforms, including Tally configurations and AutoCount software suites.'
  },
  {
    date: 'Directory Services & OS Orchestration',
    title: 'Active Directory Domain Controls & Multi-Platform Systems',
    desc: 'Architected enterprise-level Identity and Access Management layout modules within Windows Server ecosystems (up to Server 2025 platforms). Mastered the orchestration of Active Directory Domain Services, including automated Group Policy deployments, structural organization tree management, and robust multi-platform workstation compliance matrices spanning Windows 10, Windows 11, and enterprise Linux landscapes.'
  },
  {
    date: 'Cybersecurity & Centralized Endpoint Governance',
    title: 'M365 Admin, Entra ID & Distributed Perimeter Anti-Virus Platforms',
    desc: 'Orchestrated secure enterprise identity management utilizing M365 Admin Center and Microsoft Entra ID. Enforced comprehensive zero-trust architectures by deploying Multi-Factor Authentication (MFA), strict conditional access profiles, and centralized endpoint management tools. Expertly administered distributed network defense configurations across modern cloud security architectures, deploying and maintaining enterprise centralized Anti-Virus platforms including Sophos environments, Trend Vision One threat intelligence, McAfee infrastructure, Bitdefender networks, and Microsoft Defender management. Maintained extensive workstation host defense frameworks across client endpoints using Norton 360, Malwarebytes endpoints, Avast Business utilities, and Avira security tools to completely mitigate environmental security vulnerabilities.'
  },
  {
    date: 'Network Topology, ONT Telecommunications & Vendor Coordination',
    title: 'Core Layer-4 Switching, Optical Fiber Modems & Collaborative Engineering',
    desc: 'Designed and deployed reliable local area networks encompassing core Layer-4 switches, physical routers, high-density Wi-Fi nodes, LAN configurations, and segmented VLAN schemes. Specialized in high-performance telecommunications architectures, executing structural deployments, hardware profiling, provisioning, and complex configurations for edge Optical Network Terminal (ONT) modems to guarantee optimal fiber-optic line termination and connectivity. Maintained deep engineering synergy and technical cooperation with tier-1 internet service providers, hardware suppliers, and external engineering vendors to manage formal replies, draft incident analysis reports, track fault rectification timelines, and execute seamless service level agreements (SLAs). Fully integrated surveillance ecosystems including smart IP cameras, enterprise CCTV systems, and unified IP Phone configurations over PoE networks.'
  },
  {
    date: 'Data Retention & Resiliency Operations',
    title: 'Network-Attached Storage (NAS), Backups & Disaster Recovery',
    desc: 'Engineered fault-tolerant corporate data storage setups deploying standalone Network-Attached Storage (NAS) configurations. Formulated aggressive regulatory backup models, immutable retention storage layers, and rigorous full-volume data recovery protocols to prevent operational business interruption.'
  },
  {
    date: 'Enterprise Web Architecture & Databases',
    title: 'Full-Stack Web Development and Application Development',
    desc: 'Architected and deployed modular enterprise portals and thick-client integrations utilizing an advanced suite of tools including HTML5, CSS3, JScript, JSP, ASP.NET, Bootstrap, React, and Node.js alongside custom VB.NET layouts. Engineered transactional Point of Sale (POS) environments and automated Call Accounting telemetry logging frameworks. Designed and optimized back-end structured engine environments across Microsoft SQL Server, MySQL instances, and heavy enterprise Oracle Database architectures.'
  }
];

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('portfolio-theme') === 'light') {
      setIsLightMode(true);
    }

    // 💡 FIXED: Uses an exact, one-time execution attribute setup
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px', // Triggers smoothly right as it passes the bottom of your phone viewport
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the visible class to fire the slide animation
          entry.target.classList.add('reveal-active');
          
          // 💡 CRITICAL: Instantly disconnect tracker from this DOM node so it stays loaded FOREVER
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextMode = !isLightMode;
    setIsLightMode(nextMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-theme', nextMode ? 'light' : 'dark');
    }
  };

  return (
    <>
      {/* Import Premium Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <style>{`
        /* Default Premium Dark Glass Theme Variables */
        :root {
          --bg-gradient: radial-gradient(circle at top left, #0c0f1d 0%, #05060b 100%);
          --glass-bg: rgba(15, 18, 36, 0.4);
          --glass-border: rgba(255, 255, 255, 0.08);
          --text-primary: #f8fafc;
          --text-secondary: #94a3b8;
          --accent-color: #818cf8;
          --accent-glow: rgba(129, 140, 248, 0.15);
          --card-hover: rgba(129, 140, 248, 0.08);
          --badge-bg: rgba(255, 255, 255, 0.02);
          --name-gradient: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
        }

        /* Explicit Premium Light Glass Theme Variables */
        .light-theme-wrapper {
          --bg-gradient: radial-gradient(circle at top left, #f1f5f9 0%, #cbd5e1 100%);
          --glass-bg: rgba(255, 255, 255, 0.45);
          --glass-border: rgba(15, 23, 42, 0.08);
          --text-primary: #0f172a;
          --text-secondary: #475569;
          --accent-color: #4f46e5;
          --accent-glow: rgba(79, 70, 229, 0.12);
          --card-hover: rgba(79, 70, 229, 0.06);
          --badge-bg: rgba(15, 23, 42, 0.02);
          --name-gradient: linear-gradient(135deg, #0f172a 0%, #4f46e5 100%);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        html {
          scroll-behavior: smooth;
        }

        .app-container {
          background: var(--bg-gradient);
          background-attachment: fixed;
          color: var(--text-primary);
          min-height: 100vh;
          min-height: 100dvh;
          width: 100vw;
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          overflow-x: hidden;
          transition: background 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s ease;
        }

        @media (min-width: 1024px) {
          .app-container {
            padding: 40px 24px;
          }
        }

        /* High-End Glassmorphic Shell Container */
        .portfolio-card {
          background: var(--glass-bg);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          width: 100%;
          max-width: 100%;
          padding: 24px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1),
                      inset 0 1px 1px rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: background 0.3s ease, border-color 0.3s ease;
          
          animation: cardEntrance 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 1024px) {
          .portfolio-card {
            border-radius: 28px;
            padding: 45px;
            max-width: 1100px;
            margin-bottom: 24px;
          }
        }

        .card-controls {
          position: absolute;
          top: 24px;
          right: 24px;
          z-index: 10;
        }

        .profile-title {
          width: 100%;
          text-align: left;
          display: flex;
          flex-direction: column;
          padding-right: 50px;
        }

        .profile-title h1 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          background: var(--name-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          text-align: left;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .profile-title h1 {
            font-size: 3rem;
          }
        }

        .profile-title p {
          color: var(--accent-color);
          font-weight: 600;
          margin-top: 4px;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          text-align: left;
          width: 100%;
        }

        .contact-info-block {
          margin-top: 14px;
          display: flex;
          justify-content: flex-start;
          gap: 10px;
          flex-wrap: wrap;
          width: 100%;
        }

        .contact-link {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--badge-bg);
          border: 1px solid var(--glass-border);
          padding: 8px 14px;
          border-radius: 10px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-link:hover {
          border-color: var(--accent-color);
          background: var(--card-hover);
          color: var(--accent-color);
          box-shadow: 0 0 15px var(--accent-glow);
          transform: translateY(-1px);
        }

        .bio-text {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-top: 16px;
          text-align: justify; 
          width: 100%;
        }

        .section-divider {
          border: 0;
          height: 1px;
          background: var(--glass-border);
          margin: 28px 0;
          width: 100%;
        }

        h2 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          text-align: left;
          gap: 8px;
          width: 100%;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          width: 100%;
        }

        @media (min-width: 600px) {
          .tech-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (min-width: 850px) {
          .tech-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (min-width: 1150px) {
          .tech-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        .tech-badge {
          background: var(--badge-bg);
          border: 1px solid var(--glass-border);
          padding: 12px 16px; 
          border-radius: 12px;
          font-size: 0.82rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: flex-start; 
          gap: 16px; 
          white-space: normal;
          word-break: break-word;
          line-height: 1.3;
          width: 100%;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tech-badge:hover {
          background: var(--card-hover);
          border-color: var(--accent-color);
          transform: translateY(-2px);
          box-shadow: 4px 4px 15px var(--accent-glow);
        }

        .tech-badge i {
          color: var(--accent-color);
          font-size: 0.95rem;
          width: 16px;
          text-align: center;
          flex-shrink: 0;
          order: 0;
        }

        .timeline {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-left: 18px;
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

        /* 💡 FIXED: Hardware-accelerated CSS transition mapping */
        .timeline-item {
          position: relative;
          margin-bottom: 32px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          
          /* Initial invisible resting state */
          opacity: 0;
          transform: translateY(24px);
          will-change: transform, opacity;
          
          /* Smooth transition timing physics */
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* 💡 FIXED: Becomes active exactly ONCE and remains permanently locked solid */
        .timeline-item.reveal-active {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -17px;
          top: 6px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-color);
          box-shadow: 0 0 8px var(--accent-color);
        }

        .timeline-date {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.88rem; 
          color: var(--accent-color);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          text-align: left;
          width: 100%;
          line-height: 1.3;
        }

        .timeline-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 1.1rem; 
          margin-top: 4px;
          letter-spacing: -0.01em;
          color: var(--text-primary);
          text-align: left;
          width: 100%;
          line-height: 1.25;
        }

        .timeline-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-top: 6px;
          line-height: 1.6;
          text-align: justify; 
          width: 100%;
          font-weight: 400;
        }

        .timeline-desc strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .site-footer {
          width: 100%;
          max-width: 1100px;
          text-align: center;
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
          letter-spacing: 0.04em;
          padding: 20px 0 10px 0;
          border-top: 1px solid var(--glass-border);
        }
      `}</style>

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

          <h2><i className="fas fa-history"></i> Engineering Milestones</h2>
          
          <div className="timeline" ref={timelineRef}>
            {milestones.map((m, idx) => (
              <div key={idx} className="timeline-item" data-index={idx}>
                <div className="timeline-date">{m.date}</div>
                <div className="timeline-title">{m.title}</div>
                
                <p className="timeline-desc" dangerouslySetInnerHTML={{
                  __html: m.desc
                    .replace(/(physical installation, complex hardware configuration, preventative maintenance routines, and secure bare-metal server deployment lifecycles)/g, '<strong>$1</strong>')
                    .replace(/(hot-swappable hard disk expansions, faulty logical volume drive reconstructions)/g, '<strong>$1</strong>')
                    .replace(/(RAID 0, RAID 1, RAID 5, and multi-disk striping\/mirroring across RAID 10 configurations)/g, '<strong>$1</strong>')
                    .replace(/(Microsoft Azure, Amazon Web Services \(AWS\), and Google Cloud Platform \(GCP\))/g, '<strong>$1</strong>')
                    .replace(/(advanced Artificial Intelligence automation models)/g, '<strong>$1</strong>')
                    .replace(/(Microsoft Power BI dashboard schemas)/g, '<strong>$1</strong>')
                    .replace(/(Microsoft Access DB)/g, '<strong>$1</strong>')
                    .replace(/(Adobe Photoshop editing and high-end video editing pipelines)/g, '<strong>$1</strong>')
                    .replace(/(SAP architectures)/g, '<strong>$1</strong>')
                    .replace(/(Time Management Systems \(TMS\))/g, '<strong>$1</strong>')
                    .replace(/(Tally configurations and AutoCount software suites)/g, '<strong>$1</strong>')
                    .replace(/(Active Directory Domain Services)/g, '<strong>$1</strong>')
                    .replace(/(Group Policy deployments)/g, '<strong>$1</strong>')
                    .replace(/(M365 Admin Center and Microsoft Entra ID)/g, '<strong>$1</strong>')
                    .replace(/(Sophos environments, Trend Vision One threat intelligence, McAfee infrastructure, Bitdefender networks, and Microsoft Defender management)/g, '<strong>$1</strong>')
                    .replace(/(Norton 360, Malwarebytes endpoints, Avast Business utilities, and Avira security tools)/g, '<strong>$1</strong>')
                    .replace(/(Layer-4 switches, physical routers, high-density Wi-Fi nodes, LAN configurations, and segmented VLAN schemes)/g, '<strong>$1</strong>')
                    .replace(/(Optical Network Terminal \(ONT\) modems)/g, '<strong>$1</strong>')
                    .replace(/(cooperation with tier-1 internet service providers, hardware suppliers, and external engineering vendors)/g, '<strong>$1</strong>')
                    .replace(/(Network-Attached Storage \(NAS\) configurations)/g, '<strong>$1</strong>')
                    .replace(/(HTML5, CSS3, JScript, JSP, ASP.NET, Bootstrap, React, and Node.js alongside custom VB.NET layouts)/g, '<strong>$1</strong>')
                    .replace(/(Microsoft SQL Server, MySQL instances, and heavy enterprise Oracle Database architectures)/g, '<strong>$1</strong>')
                }} />
              </div>
            ))}
          </div>
        </main>

        <footer className="site-footer">
         Copyright &copy;2026 Abdullah. All Rights Reserved
        </footer>

      </div>
    </>
  );
}
