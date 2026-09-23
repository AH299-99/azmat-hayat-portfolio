import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  LockKeyhole,
  Menu,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    type: "AI PRODUCT / MOBILE + WEB",
    title: "DocMind AI",
    description:
      "A document understanding product with a cross-platform Expo frontend and a secure REST API backend. Users can summarize, explain, and extract insight from text in a focused workflow.",
    tags: ["Expo", "TypeScript", "Gemini", "MongoDB"],
    accent: "cobalt",
    links: [
      ["Frontend", "https://github.com/AH299-99/docmind-ai-app"],
      ["Backend", "https://github.com/AH299-99/docmind-ai-backend"],
    ],
  },
  {
    number: "02",
    type: "PRODUCT PROTOTYPE / FLASK",
    title: "Zaiqa Point",
    description:
      "A complete food ordering prototype with customer accounts, admin menu management, cart and checkout flow, order history, and an analytics dashboard.",
    tags: ["Python", "Flask", "SQLite", "Bootstrap"],
    accent: "lime",
    links: [["View repository", "https://github.com/AH299-99/Food_Ordering_app"]],
  },
  {
    number: "03",
    type: "AUTOMATION / NODE.JS",
    title: "WhatsApp Reply Bot",
    description:
      "A lightweight automation experiment built with Node.js and whatsapp-web.js, with portable runtime configuration and a clear path toward more reliable workflows.",
    tags: ["Node.js", "Automation", "Web.js"],
    accent: "cream",
    links: [["View repository", "https://github.com/AH299-99/whatsapp-bot"]],
  },
];

const services = [
  {
    icon: <Layers3 size={20} strokeWidth={1.7} />,
    title: "Full-stack builds",
    body: "From first screen to deployed API: clean interfaces, authentication, integrations, and maintainable foundations.",
  },
  {
    icon: <Sparkles size={20} strokeWidth={1.7} />,
    title: "AI features that help",
    body: "Practical AI workflows for documents, knowledge, and operations—designed around the user problem, not the model demo.",
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={1.7} />,
    title: "Debugging & hardening",
    body: "Security reviews, bug fixes, validation, CI improvements, and the unglamorous details that make software dependable.",
  },
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

  const navigate = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <div className="site-shell">
      <header className="site-nav" data-testid="site-nav">
        <a className="brand-mark" href="#top" onClick={() => scrollToId("top")} aria-label="AH299-99 home">
          <span className="brand-dot" />
          <span>AH299-99</span>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <button onClick={() => navigate("work")}>Selected work</button>
          <button onClick={() => navigate("services")}>Services</button>
          <button onClick={() => navigate("approach")}>Approach</button>
          <button className="nav-contact" onClick={() => navigate("contact")}>Let&apos;s talk <ArrowUpRight size={15} /></button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> FULL-STACK SOFTWARE DEVELOPER</div>
            <h1>Build something<br /><em>worth using.</em></h1>
            <p className="hero-lede">I build practical web, mobile, AI, and automation products with a focus on clean code, secure foundations, and real-world outcomes.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollToId("contact")}>Start a project <ArrowUpRight size={17} /></button>
              <a className="button button-quiet" href="https://github.com/AH299-99" target="_blank" rel="noreferrer">View GitHub <Github size={17} /></a>
            </div>
            <div className="hero-proof"><span className="proof-mark"><Check size={13} /></span><span>Security-minded · product-focused · clear communication</span></div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-grid" />
            <div className="art-ring ring-one" />
            <div className="art-ring ring-two" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core"><Code2 size={36} strokeWidth={1.2} /></div>
            <div className="art-label label-top">SHIP / SAFELY</div>
            <div className="art-label label-bottom">SYSTEMS WITH INTENT</div>
          </div>
          <div className="hero-scroll"><span>Scroll to explore</span><ArrowDownRight size={16} /></div>
        </section>

        <section className="signal-strip" aria-label="Capabilities">
          <div><span>01</span> React Native + Expo</div><div><span>02</span> Node.js + Express</div><div><span>03</span> Python + Flask</div><div><span>04</span> AI integrations</div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading split-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</div><h2>Useful products,<br /><em>not just demos.</em></h2></div><p>Every project is an opportunity to make a workflow clearer, faster, or more dependable. Here are a few of the systems I&apos;ve been shaping.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span><span className="project-arrow"><MoveUpRight size={19} /></span></div>
                <div className="project-body"><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-visual"><div className="visual-window"><span /><span /><span /><div className="visual-lines"><i /><i /><i /><i /></div></div></div></div>
                <div className="project-bottom"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} <ExternalLink size={13} /></a>)}</div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading"><div className="eyebrow"><span className="eyebrow-line" /> HOW I CAN HELP</div><h2>From rough idea<br />to <em>reliable release.</em></h2></div>
          <div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}><div className="service-icon">{service.icon}</div><h3>{service.title}</h3><p>{service.body}</p><span className="service-index">0{services.indexOf(service) + 1}</span></article>)}</div>
        </section>

        <section className="principles-section" id="approach">
          <div className="principles-intro"><div className="eyebrow"><span className="eyebrow-line" /> THE APPROACH</div><h2>Good work feels<br /><em>thought through.</em></h2><p>I work best with people who value direct communication, thoughtful decisions, and software that remains understandable after launch day.</p></div>
          <div className="principles-list">{principles.map(([number, title, body]) => <div className="principle" key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div><ChevronRight size={18} /></div>)}</div>
        </section>

        <section className="security-callout"><div className="security-icon"><LockKeyhole size={24} /></div><div><div className="eyebrow"><span className="eyebrow-line" /> A DIFFERENTIATOR</div><h2>Security is part of<br /><em>the build, not a patch.</em></h2></div><p>I look for unsafe defaults, weak validation, exposed secrets, and fragile deployment paths early—so the product is easier to trust and easier to grow.</p></section>

        <section className="contact-section" id="contact">
          <div className="contact-kicker">HAVE A PROJECT IN MIND?</div>
          <h2>Let&apos;s make it<br /><em>real.</em></h2>
          <p>Tell me what you&apos;re trying to build, fix, or improve. I&apos;ll help you find the clearest next step.</p>
          <div className="contact-actions"><a className="button button-primary" href="https://github.com/AH299-99" target="_blank" rel="noreferrer">Message me on GitHub <ArrowUpRight size={17} /></a><a className="button button-outline" href="https://github.com/AH299-99/AH299-99" target="_blank" rel="noreferrer">View profile <Github size={17} /></a></div>
        </section>
      </main>

      <footer className="site-footer"><span>© 2026 AH299-99</span><span>Built with intention.</span><a href="#top" onClick={() => scrollToId("top")}>Back to top <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
