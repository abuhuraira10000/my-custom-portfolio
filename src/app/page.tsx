'use client';

import { useState, useEffect, useRef } from 'react';

// Static asset structures shifted safely outside component loop scope
const skills = [
  { name: 'Core Java', icon: 'fa-java', isFab: true },
  { name: 'Advanced Java', icon: 'fa-laptop-code', isFab: false },
  { name: 'Web Dev', icon: 'fa-globe', isFab: false },
  { name: 'JSON', icon: 'fa-code', isFab: false },
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
  { name: 'ERP & POS Systems', icon: 'fa-cash-register', isFab: false },
  { name: 'Hyper-V & VMware', icon: 'fa-layer-group', isFab: false },
  { name: 'vSphere & ESXi', icon: 'fa-network-wired', isFab: false },
  { name: 'VPN', icon: 'fa-lock', isFab: false },
  { name: 'Jira', icon: 'fa-jira', isFab: true },
  { name: 'Azure, AWS, GCP', icon: 'fa-cloud', isFab: false },
  { name: 'Advanced AI', icon: 'fa-brain', isFab: false },
  { name: 'Social Engineering', icon: 'fa-user-gear', isFab: false },
  { name: 'Power BI & Access', icon: 'fa-chart-pie', isFab: false },
  { name: 'Hardware & Peripherals', icon: 'fa-screwdriver-wrench', isFab: false },
  { name: 'RAID & Storage Arrays', icon: 'fa-hdd', isFab: false },
  { name: 'OS & Active Directory', icon: 'fa-folder-tree', isFab: false },
  { name: 'Firewalls & Network', icon: 'fa-shield-halved', isFab: false },
  { name: 'Centralized Endpoint Security', icon: 'fa-shield-virus', isFab: false },
  { name: 'ONT Modem & Edge Routing', icon: 'fa-route', isFab: false },
  { name: 'M365 & Entra ID', icon: 'fa-user-shield', isFab: false }
];

const certifications = [
  {
    category: 'Software & Web Development',
    icon: 'fa-code',
    items: [
      { name: 'Oracle Certified Professional: Java SE Developer', desc: 'Validates proficiency in Core Java, Advanced Java, and modern language features.' },
      { name: 'OpenEDG Python Institute PCAP/PCPP', desc: 'Certifies structured coding, object-oriented concepts, and advanced application development in Python.' },
      { name: 'C++ Institute CPA / CPP', desc: 'Proves foundational and advanced programming capabilities in C and C++.' },
      { name: 'Microsoft Certified: Azure Developer Associate', desc: 'Validates enterprise app development using C#, ASP.NET, and XML cloud integrations.' },
      { name: 'Google Certified Web Developer', desc: 'Confirms front-end mastery spanning HTML5, CSS3, JavaScript, and JSON formatting.' }
    ]
  },
  {
    category: 'Cloud & Infrastructure',
    icon: 'fa-cloud',
    items: [
      { name: 'VMware Certified Professional - Data Center Virtualization (VCP-DCV)', desc: 'Validates advanced administration of vSphere, ESXi, and virtual infrastructure.' },
      { name: 'Microsoft Certified: Windows Server Hybrid Administrator Associate', desc: 'Focuses heavily on Hyper-V, Active Directory, and OS identity management.' },
      { name: 'Microsoft 365 Certified: Enterprise Administrator Expert', desc: 'Proves enterprise skills in M365 deployment, identity protection via Entra ID, and compliance.' },
      { name: 'AWS Certified Solutions Architect – Associate', desc: 'Confirms core design and architecture expertise on the Amazon Web Services platform.' },
      { name: 'Google Cloud Certified Associate Cloud Engineer', desc: 'Certifies operational application deployment and monitoring across GCP.' }
    ]
  },
  {
    category: 'Networking & Cybersecurity',
    icon: 'fa-shield-halved',
    items: [
      { name: 'CompTIA Security+', desc: 'Serves as a baseline benchmark for understanding Social Engineering tactics, basic cryptography, and threat mitigation.' },
      { name: 'Certified Ethical Hacker (CEH)', desc: 'Covers advanced penetration testing, system vulnerabilities, and defending against Social Engineering.' },
      { name: 'Cisco Certified Network Associate (CCNA)', desc: 'Focuses deeply on edge routing, ONT modems, switching, and core network configurations.' },
      { name: 'Palo Alto Networks Certified Network Security Administrator (PCNSA)', desc: 'Validates operational knowledge of next-generation firewalls and VPN tunnels.' },
      { name: 'CompTIA Network+', desc: 'Confirms fundamental understanding of network design, hardware & peripherals, and centralized security principles.' }
    ]
  },
  {
    category: 'Data Engineering & Analytics',
    icon: 'fa-chart-pie',
    items: [
      { name: 'Microsoft Certified: Power BI Data Analyst Associate', desc: 'Validates your capability to aggregate data from MS SQL Server or Access to deliver business insights.' },
      { name: 'Oracle Database Administration Certified Professional', desc: 'Tests deep capabilities in deploying, managing, and securing enterprise Oracle Databases.' }
    ]
  },
  {
    category: 'Systems Engineering & Management',
    icon: 'fa-gears',
    items: [
      { name: 'CompTIA A+', desc: 'Validates core hardware & peripherals assembly, operating system troubleshooting, and RAID storage arrays configurations.' },
      { name: 'Atlassian Certified Associate - Jira Project Management', desc: 'Confirms workflow creation, issue tracking, and project lifecycle management.' },
      { name: 'Certified Blockchain Security Professional (CBSP)', desc: 'Proves architecture and protocol-level understanding of secure blockchain implementation.' }
    ]
  },
  {
    category: 'Artificial Intelligence',
    icon: 'fa-brain',
    items: [
      { name: 'Microsoft Certified: Azure AI Engineer Associate', desc: 'Validates AI solution design, covering cognitive services, machine learning models, and NLP.' },
      { name: 'AWS Certified AI Practitioner', desc: 'Tests foundational concepts of generative AI, large language models, and cloud-based intelligence tools.' }
    ]
  }
];

const milestones = [
  {
    date: 'On-Premises Infrastructure & Virtualization Engineering',
    title: 'Bare-Metal Server Provisioning, Hyper-V, VMware vSphere & ESXi Orchestration',
    desc: 'Directed end-to-end bare-metal hardware engineering across production server rooms and virtualized enterprise clusters. Expertly handled physical installation, preventative maintenance, and secure bare-metal server deployment lifecycles. Specialized in deep orchestration environments utilizing Hyper-V, VMware, vSphere, and ESXi virtualization stacks to manage multi-tenant server compute configurations. Executed zero-downtime hot-swappable hard disk expansions, faulty logical volume reconstructions, and highly-resilient storage layouts using hardware RAID topologies. Managed extensive device setups, peripheral hardware debugging, and structural optimization for enterprise network printers and corporate multi-function photocopiers.'
  },
  {
    date: 'Cloud Architecture, DevOps & Workflow Governance',
    title: 'Multi-Cloud Orchestration & Jira Sprint Tracking',
    desc: 'Designed, provisioned, and managed highly available cloud architecture matrices across Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP). Orchestrated secure infrastructure migrations, serverless execution computing deployments, and continuous delivery pipelines while enforcing cloud network security policy parameters across multi-tenant enterprise environments. Streamlined team lifecycle operations, technical documentation, and continuous development infrastructure sprint assignments utilizing Jira configuration modules.'
  },
  {
    date: 'Advanced AI, Data Analytics & Media Design',
    title: 'Intelligence Modeling, Microsoft Ecosystems & Rich Media Operations',
    desc: 'Pioneered the integration of advanced Artificial Intelligence automation models to optimize system workflows and technical operations. Expertly deployed data analytics intelligence layers using Microsoft Power BI dashboard schemas and managed relational local database infrastructure utilizing Microsoft Access DB. Fully proficient across the complete Microsoft Office 365 enterprise suite, backed by advanced rich-media engineering capabilities in professional Adobe Photoshop editing and high-end video editing pipelines.'
  },
  {
    date: 'ERP Systems & Workplace Security Operations',
    title: 'Enterprise Resource Planning, SaaS & Advanced Biometrics Integration',
    desc: 'Supervised the administration, data orchestration, and platform integrity of core enterprise environments including SAP architectures and modern Software-as-a-Service (SaaS) utilities. Successfully maintained business continuity across leading accountancy platforms, including TallyPrime 7.0 and AutoCount Software configurations. Directed the full physical configuration and deployment of the Biometrics Time Attendance System with AI Face Recognition, Fingerprint and RFID access panels across distributed office nodes, while configuring automated payroll systems and Time Management Systems (TMS).'
  },
  {
    date: 'Directory Services & OS Orchestration',
    title: 'Active Directory Domain Controls & Multi-Platform Systems',
    desc: 'Architected enterprise-level Identity and Access Management layout modules within Windows Server ecosystems (up to Server 2025 platforms). Mastered the orchestration of Active Directory Domain Services, including automated Group Policy deployments, structural organization tree management, and robust multi-platform workstation compliance matrices spanning Windows 10, Windows 11, and enterprise Linux landscapes.'
  },
  {
    date: 'Cybersecurity & Centralized Endpoint Governance',
    title: 'M365 Admin, Entra ID & Distributed Perimeter Anti-Virus Platforms',
    desc: 'Orchestrated secure enterprise identity management utilizing M365 Admin Center and Microsoft Entra ID. Enforced comprehensive zero-trust architectures by deploying Multi-Factor Authentication (MFA), strict conditional access profiles, and centralized endpoint management tools. Expertly administered distributed network defense configurations across modern cloud security architectures, deploying and maintaining enterprise centralized Anti-Virus platforms including Sophos environments, Trend Vision One threat intelligence, McAfee infrastructure, Bitdefender networks, and Microsoft Defender management. Maintained extensive workstation host defense frameworks across client endpoints using Norton 360, Malwarebytes endpoints, Avast Business utilities, and Avira security tools to completely mitigate environmental security vulnerabilities. Designed secure Virtual Private Network (VPN) layouts for protected remote perimeter entry, combined with internal human-risk simulation frameworks to defend nodes from social engineering and targeted phishing intrusions.'
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
  const [activeCertCategory, setActiveCertCategory] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('portfolio-theme') === 'light') {
      setIsLightMode(true);
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
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
          --modal-bg: radial-gradient(circle at top left, #12162d 0%, #080a14 100%);
          --modal-overlay: rgba(4, 6, 14, 0.7);
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
          --modal-bg: radial-gradient(circle at top left, #ffffff 0%, #f8fafc 100%);
          --modal-overlay: rgba(241, 245, 249, 0.7);
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

        .portfolio-card {
          background: var(--glass-bg);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          width: 100%;
          max-width: 100%;
          padding: 24px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: background 0.3s ease, border-color 0.3s ease;
          animation: cardEntrance 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cardEntrance {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
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

        .theme-toggle-btn {
          background: var(--badge-bg);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          padding: 10px 14px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-toggle-btn:hover {
          border-color: var(--accent-color);
          background: var(--card-hover);
        }

        .profile-title {
          width: 100%;
          text-align: left;
          display: flex;
          flex-direction: column;
          padding-right: 50px;
          position: relative;
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
          .profile-title h1 { font-size: 3rem; }
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
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          width: 100%;
        }

        .contact-link {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--badge-bg);
          border: 1px solid var(--glass-border);
          padding: 8px 14px;
          border-radius: 10px;
          white-space: nowrap;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .linkedin-text {
          display: none;
        }

        @media (min-width: 768px) {
          .contact-link { font-size: 0.82rem; }
          .linkedin-text { display: inline; }
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

        @media (min-width: 600px) { .tech-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 850px) { .tech-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (min-width: 1150px) { .tech-grid { grid-template-columns: repeat(5, 1fr); } }

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
        }

        .cert-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          width: 100%;
        }

        @media (min-width: 650px) {
          .cert-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 950px) {
          .cert-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .cert-category-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          padding: 18px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cert-category-card:hover {
          background: var(--card-hover);
          border-color: var(--accent-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px var(--accent-glow);
        }

        .cert-category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
        }

        .cert-category-header i {
          color: var(--accent-color);
          font-size: 1.2rem;
          width: 24px;
          text-align: center;
        }

        .cert-category-header h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .cert-count-tag {
          font-size: 0.75rem;
          color: var(--text-secondary);
          background: var(--badge-bg);
          border: 1px solid var(--glass-border);
          padding: 2px 8px;
          border-radius: 6px;
          margin-top: auto;
        }

        .cert-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--modal-overlay);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: fadeIn 0.25s ease-out forwards;
        }

        .cert-modal-content {
          background: var(--modal-bg);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          width: 100%;
          max-width: 650px;
          max-height: 80vh;
          overflow-y: auto;
          padding: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: background 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .cert-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 12px;
          width: 100%;
        }

        .cert-modal-header h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .cert-modal-close-btn {
          background: var(--badge-bg);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          width: 32px;
          height: 32px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .cert-modal-close-btn:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        .cert-item-box {
          border-bottom: 1px dashed var(--glass-border);
          padding-bottom: 14px;
          margin-bottom: 4px;
        }

        .cert-item-box:last-child {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }

        .cert-item-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--accent-color);
          margin-bottom: 4px;
        }

        .cert-item-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
          text-align: justify;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
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

        .timeline-item {
          position: relative;
          margin-bottom: 32px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          opacity: 0;
          transform: translateY(24px);
          will-change: transform, opacity;
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-item.reveal-active {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-item:last-child { margin-bottom: 0; }

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
              <a href="https://www.linkedin.com/in/abuhuraira10000" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-linkedin" style={{ fontSize: '1.05rem' }}></i>
                <span className="linkedin-text">LinkedIn</span>
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

          <h2><i className="fas fa-id-card"></i> Professional Certifications</h2>
          <div className="cert-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-category-card" onClick={() => setActiveCertCategory(idx)}>
                <div className="cert-category-header">
                  <i className={`fas ${cert.icon}`}></i>
                  <h3>{cert.category}</h3>
                </div>
                <span className="cert-count-tag">{cert.items.length} Credentials</span>
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
                    .replace(/(Hyper-V, VMware, vSphere, and ESXi)/g, '<strong>$1</strong>')
                    .replace(/(Hyper-V, VMware vSphere & ESXi Orchestration)/g, '<strong>$1</strong>')
                    .replace(/(Jira)/g, '<strong>$1</strong>')
                    .replace(/(Jira sprint tracking)/g, '<strong>$1</strong>')
                    .replace(/(physical installation, preventative maintenance, and secure bare-metal server deployment lifecycles)/g, '<strong>$1</strong>')
                    .replace(/(zero-downtime hot-swappable hard disk expansions, faulty logical volume reconstructions)/g, '<strong>$1</strong>')
                    .replace(/(Managed extensive device setups, peripheral hardware debugging, and structural optimization for enterprise network printers and corporate multi-function photocopiers\.)/g, '<strong>$1</strong>')
                    .replace(/(Orchestrated secure infrastructure migrations, serverless execution computing deployments, and continuous delivery pipelines while enforcing cloud network security policy parameters across multi-tenant enterprise environments\.)/g, '<strong>$1</strong>')
                    .replace(/(automated payroll systems and Time Management Systems \(TMS\)\.)/g, '<strong>$1</strong>')
                    .replace(/(Microsoft Azure, Amazon Web Services \(AWS\), and Google Cloud Platform \(GCP\))/g, '<strong>$1</strong>')
                    .replace(/(advanced Artificial Intelligence automation models)/g, '<strong>$1</strong>')
                    .replace(/(Microsoft Power BI dashboard schemas)/g, '<strong>$1</strong>')
                    .replace(/(Microsoft Access DB)/g, '<strong>$1</strong>')
                    .replace(/(Adobe Photoshop editing and high-end video editing pipelines)/g, '<strong>$1</strong>')
                    .replace(/(SAP architectures)/g, '<strong>$1</strong>')
                    .replace(/(TallyPrime 7.0 and AutoCount Software)/g, '<strong>$1</strong>')
                    .replace(/(Biometrics Time Attendance System with AI Face Recognition, Fingerprint and RFID)/g, '<strong>$1</strong>')
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
                    .replace(/(Designed secure Virtual Private Network \(VPN\) layouts for protected remote perimeter entry, combined with internal human-risk simulation frameworks to defend nodes from social engineering and targeted phishing intrusions\.)/g, '<strong>$1</strong>')
                }} />
              </div>
            ))}
          </div>
        </main>

        {/* Dynamic Glassmorphic Modal Framework linked completely to global theme context maps */}
        {activeCertCategory !== null && (
          <div className="cert-modal-overlay" onClick={() => setActiveCertCategory(null)}>
            <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="cert-modal-header">
                <h3>{certifications[activeCertCategory].category}</h3>
                <button className="cert-modal-close-btn" onClick={() => setActiveCertCategory(null)}>
                  <i className="fas fa-xmark"></i>
                </button>
              </div>
              <div className="cert-modal-body">
                {certifications[activeCertCategory].items.map((item, idx) => (
                  <div key={idx} className="cert-item-box">
                    <h4 className="cert-item-name">{item.name}</h4>
                    <p className="cert-item-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <footer className="site-footer">
         Copyright &copy;2026 Abdullah. All Rights Reserved
        </footer>

      </div>
    </>
  );
}

