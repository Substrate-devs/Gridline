import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Command,
  Copy,
  FileCode2,
  Github,
  Globe2,
  Layers3,
  Menu,
  Play,
  Search,
  Sparkles,
  TerminalSquare,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "For teams", href: "#teams" },
  { label: "Pricing", href: "#pricing" },
  { label: "Changelog", href: "#changelog" },
];

const codeTabs = [
  { file: "app/page.tsx", type: "tsx" },
  { file: "lib/agent.ts", type: "ts" },
  { file: "styles.css", type: "css" },
];

const demoModes = [
  {
    label: "Plan",
    eyebrow: "01 / Make a plan",
    title: "Think in systems, not snippets.",
    description:
      "Northstar reads the shape of your codebase before it writes a line. Ask for a feature, get a plan you can actually trust.",
    accent: "lime",
  },
  {
    label: "Build",
    eyebrow: "02 / Build together",
    title: "Pair with an agent that remembers.",
    description:
      "Keep your intent, context, and open files in one place. The agent works alongside you, never behind a curtain.",
    accent: "blue",
  },
  {
    label: "Ship",
    eyebrow: "03 / Ship with confidence",
    title: "From first thought to clean pull request.",
    description:
      "Review changes in plain English, run the right checks, and ship with a changelog already written.",
    accent: "orange",
  },
];

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Northstar home">
      <span className="logo-mark" aria-hidden="true"><span /></span>
      <span>northstar</span>
    </a>
  );
}

function EditorLines({ mode }: { mode: number }) {
  const lineSets: Array<Array<Array<[string, string]>>> = [
    [
      [["kw", "export"], ["plain", " default function"], ["fn", " Workspace"], ["plain", "() {"]],
      [["plain", "  return ("]],
      [["tag", "    <main"], ["attr", " className"], ["plain", "=\"min-h-screen\""], ["tag", ">"]],
      [["plain", "      <AgentPanel"], ["attr", " intent"], ["plain", "=\"build something lovely\""], ["plain", " />"]],
      [["plain", "      <ProjectCanvas />"]],
      [["plain", "    </main>"]],
      [["plain", "  )"]],
      [["plain", "}"]],
    ],
    [
      [["plain", "import {"], ["fn", " createPlan"], ["plain", " } from \"./context\""]],
      [["plain", ""]],
      [["kw", "export async function"], ["fn", " runAgent"], ["plain", "(prompt: string) {"]],
      [["plain", "  const context = await"], ["fn", " indexWorkspace"], ["plain", "()"]],
      [["plain", "  const plan = await"], ["fn", " createPlan"], ["plain", "({ prompt, context })"]],
      [["kw", "  return"], ["plain", " stream(plan)"]],
      [["plain", "}"]],
    ],
    [
      [["selector", ".workspace"], ["plain", " {"]],
      [["attr", "  display"], ["plain", ": grid;"]],
      [["attr", "  grid-template-columns"], ["plain", ": 1fr auto;"]],
      [["attr", "  gap"], ["plain", ": 2rem;"]],
      [["attr", "  background"], ["plain", ": #f6f7f0;"]],
      [["selector", "  &:has(.agent)"], ["plain", " {"]],
      [["attr", "    box-shadow"], ["plain", ": 0 0 0 1px #dde0d0;"]],
      [["plain", "  }"]],
      [["plain", "}"]],
    ],
  ];
  const lines = lineSets[mode];
  return (
    <div className="code-lines">
      {lines.map((line, index) => (
        <div className="code-line" key={`${mode}-${index}`}>
          <span className="line-number">{String(index + 1).padStart(2, "0")}</span>
          <code>
            {line.map((token, tokenIndex) => {
              const kind = token[0];
              const text = token[1];
              return <span className={`token-${kind}`} key={`${index}-${tokenIndex}`}>{text}</span>;
            })}
            {index === 8 && mode === 0 ? <span className="cursor-mark" /> : null}
          </code>
        </div>
      ))}
    </div>
  );
}

function ProductMockup() {
  return (
    <div className="hero-art" aria-label="Northstar editor product preview">
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="float-card float-card-top">
        <Sparkles size={13} />
        <span>Agent ready</span>
        <span className="status-dot" />
      </div>
      <div className="editor-window">
        <div className="window-bar">
          <div className="window-dots"><i /><i /><i /></div>
          <div className="window-title"><span className="northstar-mini">✦</span> northstar / orbit-web</div>
          <div className="window-actions"><Command size={12} /><span>⌘K</span></div>
        </div>
        <div className="editor-body">
          <aside className="editor-sidebar">
            <div className="sidebar-icon active"><Layers3 size={15} /></div>
            <div className="sidebar-icon"><Search size={15} /></div>
            <div className="sidebar-icon"><Github size={15} /></div>
            <div className="sidebar-spacer" />
            <div className="sidebar-icon"><Sparkles size={15} /></div>
          </aside>
          <div className="file-tree">
            <div className="tree-heading">ORBIT-WEB <ChevronDown size={12} /></div>
            <div className="tree-row folder"><span>⌄</span><span>src</span></div>
            <div className="tree-row indent"><FileCode2 size={13} /><span>app.tsx</span></div>
            <div className="tree-row indent selected"><FileCode2 size={13} /><span>page.tsx</span></div>
            <div className="tree-row indent"><FileCode2 size={13} /><span>agent.ts</span></div>
            <div className="tree-row folder"><span>⌄</span><span>lib</span></div>
            <div className="tree-row indent"><FileCode2 size={13} /><span>context.ts</span></div>
            <div className="tree-row"><span>⌄</span><span>public</span></div>
            <div className="tree-row"><span>⌄</span><span>package.json</span></div>
          </div>
          <div className="editor-main">
            <div className="file-tabs">
              {codeTabs.map((tab, index) => <div className={`file-tab ${index === 0 ? "active" : ""}`} key={tab.file}><FileCode2 size={12} />{tab.file}<X size={11} /></div>)}
            </div>
            <EditorLines mode={0} />
            <div className="editor-status"><span><span className="green-dot" /> main</span><span>Ln 09, Col 22</span><span>UTF-8</span><span>Spaces: 2</span></div>
          </div>
          <div className="agent-panel">
            <div className="agent-heading"><span><Sparkles size={14} /> Northstar Agent</span><span className="agent-badge">LIVE</span></div>
            <div className="agent-prompt">Build a calm landing page for a studio that makes tools for thoughtful teams.</div>
            <div className="agent-message"><div className="agent-avatar">✦</div><div><strong>Here’s a starting point.</strong><p>I found your design tokens and kept the new section in the same visual language.</p></div></div>
            <div className="agent-change"><div className="change-head"><span><Check size={12} /> 3 files changed</span><span>Review</span></div><div className="change-file"><span><FileCode2 size={12} /> page.tsx</span><span className="plus">+18</span><span className="minus">-4</span></div><div className="change-file"><span><FileCode2 size={12} /> styles.css</span><span className="plus">+12</span><span className="minus">-2</span></div><button className="apply-button">Apply changes <ArrowRight size={13} /></button></div>
          </div>
        </div>
      </div>
      <div className="float-card float-card-bottom"><span className="keycap">⌘</span><span>Ask anything</span><span className="keycap">K</span></div>
    </div>
  );
}

function DownloadModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="download-modal" role="dialog" aria-modal="true" aria-labelledby="download-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close dialog"><X size={18} /></button>
        {!submitted ? <>
          <div className="modal-kicker"><span className="lime-pill">EARLY ACCESS</span> Build in your flow</div>
          <h2 id="download-title">A calmer editor is one click away.</h2>
          <p>Drop your email in and we’ll send the Northstar desktop preview to your inbox.</p>
          <form onSubmit={(event) => { event.preventDefault(); if (email.trim()) setSubmitted(true); }}>
            <label htmlFor="email">Work email</label>
            <div className="email-row"><input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" required /><button type="submit">Send me the preview <ArrowRight size={15} /></button></div>
          </form>
          <span className="modal-note"><Check size={13} /> No spam. Unsubscribe whenever.</span>
        </> : <div className="success-state"><span className="success-icon"><Check size={22} /></span><h2>You’re on the list.</h2><p>We’ll send a private preview link to <strong>{email}</strong> soon.</p><button className="text-button" onClick={onClose}>Back to Northstar <ArrowRight size={15} /></button></div>}
      </div>
    </div>
  );
}

function CookieBanner({ onClose }: { onClose: () => void }) {
  return <div className="cookie-banner"><div><strong>OK with cookies?</strong><p>We use cookies to keep things running, understand how teams use Northstar, and improve the experience over time. Some are essential and the site needs them to work.</p><span>You can accept all, reject the non-essentials, or pick exactly what you’re comfortable with.</span></div><div className="cookie-actions"><button onClick={onClose}>Save and continue</button><button className="secondary" onClick={onClose}>Manage my preferences</button></div></div>;
}

export default function Home() {
  const [activeMode, setActiveMode] = useState(0);
  const [showDownload, setShowDownload] = useState(false);
  const [showCookies, setShowCookies] = useState(true);
  const current = demoModes[activeMode];

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav>
        <div className="header-actions"><a className="sales-link" href="#teams">Talk to sales</a><button className="download-chip" onClick={() => setShowDownload(true)}><span className="chip-icon">⌘</span> Download</button><button className="menu-toggle" aria-label="Open menu"><Menu size={17} /></button></div>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <a href="#product" className="eyebrow-link"><span className="lime-pill">NEW</span><span>Northstar for the way you think</span><ArrowRight size={13} /></a>
            <h1 id="hero-title">The AI code editor for <em>clearer</em> thinking.</h1>
            <p className="hero-subtitle">Write, refactor, and ship with an agent that understands your codebase — and stays out of your way.</p>
            <div className="hero-actions"><button className="primary-button" onClick={() => setShowDownload(true)}>Try Northstar free <ArrowDown size={15} /></button><a className="quiet-link" href="#product">See how it works <ArrowRight size={14} /></a></div>
            <div className="platform-note"><span className="check-ring"><Check size={12} /></span> Available for macOS, Windows, and Linux</div>
          </div>
          <ProductMockup />
          <div className="hero-side-note"><span>01</span><span>Make room for<br />better ideas.</span></div>
        </section>

        <section className="signal-strip" aria-label="Product promise"><div><span className="strip-icon"><Zap size={14} /></span><span>Built for the 10x curious</span></div><div><span className="strip-icon"><Globe2 size={14} /></span><span>Private by default</span></div><div><span className="strip-icon"><TerminalSquare size={14} /></span><span>Works with your stack</span></div><div className="strip-arrow"><ArrowDown size={15} /></div></section>

        <section className="product-section" id="product">
          <div className="section-intro"><span className="section-index">02 / THE NORTHSTAR METHOD</span><h2>Less prompting.<br /><span>More momentum.</span></h2><p>Northstar is an AI-native editor built around the way good work actually happens: a little context, a little taste, and a lot of iteration.</p></div>
          <div className="demo-wrap">
            <div className="demo-tabs">{demoModes.map((mode, index) => <button className={activeMode === index ? "active" : ""} onClick={() => setActiveMode(index)} key={mode.label}><span>0{index + 1}</span>{mode.label}<ArrowRight size={14} /></button>)}</div>
            <div className={`demo-panel accent-${current.accent}`}>
              <div className="demo-copy"><span className="section-index">{current.eyebrow}</span><h3>{current.title}</h3><p>{current.description}</p><a href="#teams" className="inline-link">Explore the workflow <ArrowUpRight size={15} /></a></div>
              <div className="mini-editor"><div className="mini-editor-head"><span className="mini-dots"><i /><i /><i /></span><span>{activeMode === 0 ? "plan.md" : activeMode === 1 ? "agent.ts" : "pull-request.md"}</span><span className="mini-head-right"><Copy size={12} /> <span>Copy</span></span></div><div className="mini-editor-body"><EditorLines mode={activeMode} /><div className="mini-agent-note"><Sparkles size={13} /><span>{activeMode === 0 ? "Northstar mapped 4 files to this plan" : activeMode === 1 ? "Agent is using 12 relevant files" : "All checks passed · ready to review"}</span></div></div></div>
            </div>
          </div>
        </section>

        <section className="teams-section" id="teams">
          <div className="team-card team-card-large"><div className="card-topline"><span>FOR SMALL TEAMS</span><ArrowUpRight size={16} /></div><div><h3>Make the space between idea and <span>shipped</span> feel smaller.</h3><p>Northstar gives every teammate a shared mental model of the work — not just a autocomplete box.</p></div><div className="avatar-row"><span className="avatar avatar-a">JM</span><span className="avatar avatar-b">RK</span><span className="avatar avatar-c">AL</span><span className="avatar-more">+ 14 teammates</span></div></div>
          <div className="team-card team-card-dark"><div className="card-topline"><span>CONTEXT, ON COMMAND</span><Command size={16} /></div><div className="command-card"><div className="command-line"><span className="keycap">⌘</span><span className="keycap">K</span><span>Ask Northstar anything…</span><span className="command-caret" /></div><div className="command-suggestions"><span><Sparkles size={12} /> Explain this file</span><span><ArrowRight size={12} /> Find related code</span><span><Play size={12} /> Run the right checks</span></div></div><p>Context should be one shortcut away. Never more.</p></div>
          <div className="team-card team-card-lime"><div className="card-topline"><span>THE FEELING</span><span className="starburst">✳</span></div><h3>Quietly<br />powerful.</h3><p>No black-box magic. Just a better place to do your best work.</p><div className="lime-card-line" /></div>
        </section>

        <section className="pricing-section" id="pricing"><div><span className="section-index">03 / START SMALL</span><h2>A better editor<br />for <em>every</em> build.</h2></div><div className="pricing-copy"><p>Start free. Bring your repo, your shortcuts, and your point of view. Upgrade when Northstar becomes the part of your workflow you can’t imagine losing.</p><button className="primary-button" onClick={() => setShowDownload(true)}>Get early access <ArrowRight size={15} /></button></div></section>

        <section className="footer-cta" id="changelog"><div className="footer-cta-mark">✦</div><h2>Keep your eyes<br />on the <span>north star.</span></h2><button className="dark-button" onClick={() => setShowDownload(true)}>Try it on your next build <ArrowUpRight size={16} /></button></section>
      </main>

      <footer className="site-footer"><Logo /><span>© 2026 Northstar, Inc.</span><div className="footer-links"><a href="#product">Product</a><a href="#teams">Teams</a><a href="#pricing">Pricing</a><a href="#top">Back to top ↑</a></div></footer>
      {showCookies ? <CookieBanner onClose={() => setShowCookies(false)} /> : null}
      {showDownload ? <DownloadModal onClose={() => setShowDownload(false)} /> : null}
    </div>
  );
}
