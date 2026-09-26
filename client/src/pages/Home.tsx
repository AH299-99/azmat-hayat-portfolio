import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  LockKeyhole,
  Mail,
  Menu,
  MessageCircle,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    type: "AI PRODUCT / SOLO DEVELOPER / FEATURED",
    title: "DocMind AI",
    status: "Working product foundation",
    problem: "People often have useful documents but no fast, focused way to understand the important parts and ask better questions about the content.",
    role: "Solo developer with full ownership of the architecture, Expo/React Native frontend, Node.js/Express backend, AI integration, and product workflow.",
    solution: "DocMind AI turns document content into a more approachable workflow for summarizing, explaining, and extracting useful insight. It was built in a single focused sprint, showing the ability to move from product idea to working full-stack system quickly without losing sight of structure and usability.",
    decisions: "A cross-platform Expo/React Native client keeps the product flexible across mobile and web contexts. A separate Node.js/Express API creates a clear boundary for authentication, history, validation, and Gemini AI requests, with MongoDB used for persistent application data.",
    result: "A working AI product foundation with a focused user flow, separated frontend/backend architecture, and a clear path for expanding document workflows.",
    tags: ["Expo", "React Native", "TypeScript", "Node.js", "Express", "MongoDB", "Gemini AI"],
    accent: "cobalt",
    links: [
      ["Frontend repo", "https://github.com/AH299-99/docmind-ai-app"],
      ["Backend repo", "https://github.com/AH299-99/docmind-ai-backend"],
    ],
  },
  {
    number: "02",
    type: "FOOD ORDERING PROTOTYPE / LEARNING PROJECT",
    title: "Zaiqa Point",
    status: "In progress — security hardening underway",
    problem: "A food ordering workflow is a practical way to learn how authentication, roles, menu management, carts, checkout, order history, and admin reporting fit together in one product.",
    role: "Solo developer building a learning project to practice full-stack patterns from database models through customer and admin experiences.",
    solution: "Zaiqa Point is a prototype food ordering system with customer accounts, menu browsing, cart and order placement, order history, admin menu management, and a demand-trend dashboard.",
    decisions: "A Flask application with SQLite and SQLAlchemy keeps the prototype easy to understand and iterate on. Bootstrap provides a practical interface layer, while the application structure makes the core customer/admin patterns visible in one codebase.",
    result: "A credible learning project demonstrating range across authentication, CRUD workflows, roles, ordering logic, persistence, and reporting—currently being strengthened through its security hardening work.",
    tags: ["Python", "Flask", "SQLite", "SQLAlchemy", "Bootstrap", "Plotly"],
    accent: "lime",
    links: [
      ["Repository", "https://github.com/AH299-99/Food_Ordering_app"],
      ["Security hardening PR", "https://github.com/AH299-99/Food_Ordering_app/pull/1"],
    ],
  },
];

const services = [
  { icon: <Layers3 size={20} strokeWidth={1.7} />, title: "Full-stack builds", body: "From first screen to deployed API: clean interfaces, authentication, integrations, and maintainable foundations." },
  { icon: <Sparkles size={20} strokeWidth={1.7} />, title: "AI features that help", body: "Practical AI workflows for documents, knowledge, and operations—designed around the user problem, not the model demo." },
  { icon: <ShieldCheck size={20} strokeWidth={1.7} />, title: "Debugging & hardening", body: "Security reviews, bug fixes, validation, CI improvements, and the unglamorous details that make software dependable." },
];

const principles = [
  ["01", "Start with the real problem", "Good software begins with a clear user outcome—not a long feature list."],
  ["02", "Build the useful core", "I prefer a small, testable first release that can earn feedback quickly."],
  ["03", "Make it easier to trust", "Readable code, safe defaults, and clear documentation are part of the product."],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (id: string) => { setMenuOpen(false); scrollToId(id); };

  return (
    <div className="site-shell">
      <header className="site-nav" data-testid="site-nav">
        <a className="brand-mark" href="#top" onClick={() => scrollToId("top")} aria-label="Azmat Hayat home"><span className="brand-dot" /><span>Azmat Hayat</span></a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <button onClick={() => navigate("work")}>Selected work</button><button onClick={() => navigate("services")}>Services</button><button onClick={() => navigate("about")}>About</button><button onClick={() => navigate("approach")}>Approach</button><button className="nav-contact" onClick={() => navigate("contact")}>Let&apos;s talk <ArrowUpRight size={15} /></button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> FULL-STACK SOFTWARE DEVELOPER</div>
            <h1>Build something<br /><em>worth using.</em></h1>
            <p className="hero-lede">I build practical web, mobile, AI, and automation products with a focus on clean code, secure foundations, and real-world outcomes.</p>
            <div className="hero-actions"><button className="button button-primary" onClick={() => scrollToId("contact")}>Start a project <ArrowUpRight size={17} /></button><a className="button button-quiet" href="https://github.com/AH299-99" target="_blank" rel="noreferrer">View GitHub <Github size={17} /></a></div>
            <div className="hero-proof"><span className="proof-mark"><Check size={13} /></span><span>Based in Peshawar · Open to remote freelance & contract work</span></div>
          </div>
          <div className="hero-art" aria-hidden="true"><div className="art-grid" /><div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><Code2 size={36} strokeWidth={1.2} /></div><div className="art-label label-top">SHIP / SAFELY</div><div className="art-label label-bottom">SYSTEMS WITH INTENT</div></div>
          <div className="hero-scroll"><span>Scroll to explore</span><ArrowDownRight size={16} /></div>
        </section>

        <section className="signal-strip" aria-label="Capabilities"><div><span>01</span> React Native + Expo</div><div><span>02</span> Node.js + Express</div><div><span>03</span> Python + Flask</div><div><span>04</span> AI integrations</div></section>

        <section className="section work-section" id="work">
          <div className="section-heading split-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</div><h2>Useful products,<br /><em>not just demos.</em></h2></div><p>Each project shows a different kind of problem-solving—from a focused AI product to an honest learning prototype built around real full-stack patterns.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span><span className="project-arrow"><MoveUpRight size={19} /></span></div>
                <div className="project-heading-row"><div><h3>{project.title}</h3><span className="project-status">{project.status}</span></div><div className="project-visual" aria-label={`${project.title} project preview`}><div className="visual-window"><span /><span /><span /><div className="visual-lines"><i /><i /><i /><i /></div></div></div></div>
                <div className="case-study-grid">
                  <div><span className="case-label">Problem</span><p>{project.problem}</p></div><div><span className="case-label">Role</span><p>{project.role}</p></div><div><span className="case-label">Solution</span><p>{project.solution}</p></div><div><span className="case-label">Key technical decisions</span><p>{project.decisions}</p></div><div><span className="case-label">Result</span><p>{project.result}</p></div>
                </div>
                <div className="project-bottom"><div><span className="case-label">Stack</span><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div><span className="case-label">Links</span><div className="project-links">{project.links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} <ExternalLink size={13} /></a>)}</div></div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services"><div className="section-heading"><div className="eyebrow"><span className="eyebrow-line" /> HOW I CAN HELP</div><h2>From rough idea<br />to <em>reliable release.</em></h2></div><div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.title}><div className="service-icon">{service.icon}</div><h3>{service.title}</h3><p>{service.body}</p><span className="service-index">0{index + 1}</span></article>)}</div></section>

        <section className="about-section" id="about"><div className="about-label"><div className="eyebrow"><span className="eyebrow-line" /> ABOUT AZMAT</div></div><div className="about-copy"><h2>A developer who cares about the <em>details.</em></h2><p>I build practical software for people who want to turn a clear idea into something useful. My path into software has crossed a Diploma in Information Technology, a Master’s degree in English Literature, and a BS in Bioinformatics—an unusual mix that taught me to think in systems, communicate clearly, and notice the details that make software easier to use and trust. That perspective now shapes how I translate messy requirements into clean, well-documented web, mobile, AI, and automation products.</p><p>I’m based in <strong>Peshawar, Pakistan</strong>, and I’m open to remote freelance and contract projects. I work flexible hours, stay responsive, and can move quickly when a project needs a focused build, thoughtful debugging, or a reliable next step.</p></div><div className="about-links"><span className="availability-label">AVAILABLE FOR</span><span>Remote freelance projects</span><span>Contract work</span><span>Flexible hours · Quick response</span><a href="mailto:azmathayat646@gmail.com"><Mail size={17} /> azmathayat646@gmail.com <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/azmat-hayat-b8070b175" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn profile <ArrowUpRight size={14} /></a></div></section>

        <section className="principles-section" id="approach"><div className="principles-intro"><div className="eyebrow"><span className="eyebrow-line" /> THE APPROACH</div><h2>Good work feels<br /><em>thought through.</em></h2><p>I work best with people who value direct communication, thoughtful decisions, and software that remains understandable after launch day.</p></div><div className="principles-list">{principles.map(([number, title, body]) => <div className="principle" key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div><ChevronRight size={18} /></div>)}</div></section>

        <section className="security-callout"><div className="security-icon"><LockKeyhole size={24} /></div><div><div className="eyebrow"><span className="eyebrow-line" /> A DIFFERENTIATOR</div><h2>Security is part of<br /><em>the build, not a patch.</em></h2></div><p>I look for unsafe defaults, weak validation, exposed secrets, and fragile deployment paths early—so the product is easier to trust and easier to grow.</p></section>

        <section className="contact-section" id="contact"><div className="contact-kicker">HAVE A PROJECT IN MIND?</div><h2>Let&apos;s make it<br /><em>real.</em></h2><p>Tell me what you&apos;re working toward and I&apos;ll help identify the clearest next step. I’m available for remote freelance and contract projects from Peshawar, Pakistan.</p><div className="contact-actions"><a className="button button-primary" href="mailto:azmathayat646@gmail.com">Email me <Mail size={17} /></a><a className="button button-outline" href="https://wa.me/923024212240" target="_blank" rel="noreferrer">Message me on WhatsApp <MessageCircle size={17} /></a><a className="button button-outline" href="https://www.linkedin.com/in/azmat-hayat-b8070b175" target="_blank" rel="noreferrer">Connect on LinkedIn <Linkedin size={17} /></a><a className="button button-quiet" href="https://github.com/AH299-99" target="_blank" rel="noreferrer">View GitHub <Github size={17} /></a></div></section>
      </main>

      <footer className="site-footer"><span>© 2026 Azmat Hayat</span><span>Peshawar, Pakistan · Remote-ready</span><a href="#top" onClick={() => scrollToId("top")}>Back to top <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}

function Layers3({ size, strokeWidth }: { size: number; strokeWidth: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></svg>;
}
