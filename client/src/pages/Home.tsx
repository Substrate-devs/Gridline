import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  AlertCircle,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Command,
  Copy,
  FileCode2,
  GitBranch,
  Github,
  Globe2,
  Layers3,
  Menu,
  Search,
  Sparkles,
  TerminalSquare,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Product", href: "/product" },
  { label: "For teams", href: "/teams" },
  { label: "Pricing", href: "/pricing" },
  { label: "Changelog", href: "/changelog" },
];

const trustedMarks = [
  ["GitHub", "github"], ["Linear", "linear"], ["Vercel", "vercel"], ["Figma", "figma"],
  ["Notion", "notion"], ["Slack", "slack"], ["Raycast", "raycast"], ["Supabase", "supabase"],
  ["PostHog", "posthog"], ["Resend", "resend"], ["GitLab", "gitlab"],
] as const;

function IntegrationMark({ name, type }: { name: string; type: string }) {
  return <img src={`https://cdn.simpleicons.org/${type}/68711f`} alt={`${name} logo`} loading="lazy" />;
}

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
      "Gridline reads the shape of your codebase before it writes a line. Ask for a feature, get a plan you can actually trust.",
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
    <a href="/" className="logo gridline-logo" aria-label="Gridline home">
      <img src="/manus-storage/Screenshot2026-09-22085410_2da4ae3f.png" alt="" />
      <span>gridline</span>
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
    <div className="hero-art" aria-label="Gridline editor product preview">
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
          <div className="window-title"><span className="northstar-mini">✦</span> gridline / orbit-web</div>
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
            <div className="agent-heading"><span><Sparkles size={14} /> Gridline Agent</span><span className="agent-badge">LIVE</span></div>
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
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const validateEmail = (value: string) => {
    if (!value.trim()) return "Enter your work email to continue.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) return "That email looks incomplete. Try name@company.com.";
    return "";
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error = validateEmail(email);
    setEmailError(error);
    if (error) return;
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 550);
  };
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="download-modal" role="dialog" aria-modal="true" aria-labelledby="download-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close dialog"><X size={18} /></button>
        {!submitted ? <>
          <div className="modal-kicker"><span className="lime-pill">EARLY ACCESS</span> Build in your flow</div>
          <h2 id="download-title">A calmer editor is one click away.</h2>
          <p>Drop your email in and we’ll send the Gridline desktop preview to your inbox.</p>
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="email">Work email</label>
            <div className={`email-row ${emailError ? "has-error" : ""}`}><input id="email" type="email" value={email} onChange={(event) => { setEmail(event.target.value); if (emailError) setEmailError(validateEmail(event.target.value)); }} onBlur={() => setEmailError(validateEmail(email))} placeholder="you@company.com" aria-invalid={Boolean(emailError)} aria-describedby="email-error" /><button type="submit" disabled={isSubmitting}>{isSubmitting ? <>Checking your inbox <span className="button-spinner" /></> : <>Send me the preview <ArrowRight size={15} /></>}</button></div>
            {emailError ? <span className="form-error" id="email-error"><AlertCircle size={13} /> {emailError}</span> : null}
          </form>
          <span className="modal-note"><Check size={13} /> No spam. Unsubscribe whenever.</span>
        </> : <div className="success-state"><span className="success-icon"><Check size={22} /></span><h2>You’re on the list.</h2><p>We’ll send a private preview link to <strong>{email}</strong> soon.</p><button className="text-button" onClick={onClose}>Back to Gridline <ArrowRight size={15} /></button></div>}
      </div>
    </div>
  );
}

function CommandPaletteDemo() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCommand, setActiveCommand] = useState("Explain this file");
  const [highlighted, setHighlighted] = useState(0);
  const [recent, setRecent] = useState<string[]>(() => {
    try { return JSON.parse(window.localStorage.getItem("gridline-recent-commands") || "[]"); } catch { return []; }
  });
  const commands = ["Explain this file", "Find related code", "Refactor this function", "Run the right checks"];
  const filteredCommands = commands.filter((command) => command.toLowerCase().includes(query.toLowerCase()));
  const visibleCommands = query ? filteredCommands : [...recent.filter((command) => commands.includes(command)), ...commands.filter((command) => !recent.includes(command))];
  const chooseCommand = (command: string) => {
    setActiveCommand(command);
    setRecent((previous) => {
      const next = [command, ...previous.filter((item) => item !== command)].slice(0, 4);
      try { window.localStorage.setItem("gridline-recent-commands", JSON.stringify(next)); } catch { /* demo storage can be unavailable */ }
      return next;
    });
    setOpen(false);
    setQuery("");
    setHighlighted(0);
  };
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") { setOpen(false); setQuery(""); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  const generatedCode = activeCommand === "Refactor this function" ? "function normalize(input) {\n  return input.trim().toLowerCase();\n}" : activeCommand === "Find related code" ? "// 4 related files found\nimport { createPlan } from \"./context\";" : activeCommand === "Run the right checks" ? "$ pnpm lint\n✓ 42 files checked in 1.8s" : "// Gridline context\nThis file renders the workspace surface.";
  return <div className="command-demo"><button className="command-line command-trigger" aria-expanded={open} aria-controls="gridline-command-palette" onClick={() => setOpen(true)}><span className="keycap">⌘</span><span className="keycap">K</span><span>Ask Gridline anything…</span><span className="command-caret" /><span className="command-hint">Try it</span></button>{open ? <div className="command-popover" id="gridline-command-palette" role="dialog" aria-label="Gridline command palette"><div className="command-search"><Search size={15} /><input autoFocus value={query} onChange={(event) => { setQuery(event.target.value); setHighlighted(0); }} onKeyDown={(event) => { if (event.key === "ArrowDown") { event.preventDefault(); setHighlighted((value) => Math.min(value + 1, visibleCommands.length - 1)); } if (event.key === "ArrowUp") { event.preventDefault(); setHighlighted((value) => Math.max(value - 1, 0)); } if (event.key === "Enter" && visibleCommands[highlighted]) { event.preventDefault(); chooseCommand(visibleCommands[highlighted]); } }} placeholder="Ask about this codebase…" /><span className="keycap">esc</span></div><div className="command-list" role="listbox">{visibleCommands.map((command, index) => <button role="option" aria-selected={highlighted === index} className={highlighted === index ? "selected" : ""} key={command} onMouseEnter={() => setHighlighted(index)} onClick={() => chooseCommand(command)}>{!query && recent.includes(command) ? <Clock3 size={13} /> : <Sparkles size={13} />}<span>{command}</span><ArrowRight size={13} /></button>)}{visibleCommands.length === 0 ? <span className="command-empty">No matching commands. Try “refactor”.</span> : null}</div><div className="command-result"><span className="result-label"><Sparkles size={12} /> Gridline generated</span><pre>{generatedCode}</pre></div></div> : null}<div className="command-result command-result-static"><span className="result-label"><Sparkles size={12} /> Gridline generated</span><pre>{generatedCode}</pre></div></div>;
}

function AIChatDemo() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showDiff, setShowDiff] = useState(true);
  const [message, setMessage] = useState("I found the auth boundary and 3 related files. I can make the loading state feel immediate without changing the public API.");
  const [streamTarget, setStreamTarget] = useState("");
  useEffect(() => {
    if (!isGenerating || !streamTarget) return;
    let cursor = 0;
    const timer = window.setInterval(() => {
      cursor += 2;
      setMessage(streamTarget.slice(0, cursor));
      if (cursor >= streamTarget.length) {
        window.clearInterval(timer);
        setIsGenerating(false);
        setStreamTarget("");
      }
    }, 28);
    return () => window.clearInterval(timer);
  }, [isGenerating, streamTarget]);
  const generate = (event?: FormEvent) => {
    event?.preventDefault();
    if (!prompt.trim() || isGenerating) return;
    const nextResponse = `I drafted a focused change for “${prompt.trim()}”. The diff keeps the existing contract intact and adds a small, reviewable state transition.`;
    setIsGenerating(true);
    setMessage("");
    setStreamTarget(nextResponse);
    setPrompt("");
    setShowDiff(true);
  };
  return <div className="ai-chat-demo"><div className="chat-header"><span><span className="chat-live-dot" /> Gridline Agent</span><span className="chat-context">12 files in context</span></div><div className="chat-thread"><div className="chat-user"><span className="chat-avatar user-avatar">you</span><p>Make the sign-in screen feel faster on slow networks.</p></div><div className="chat-agent"><span className="chat-avatar agent-avatar-small">✦</span><div><p>{isGenerating && !message ? <span className="typing-label"><i /><i /><i /> thinking across auth/</span> : message}{isGenerating && message ? <span className="stream-cursor" /> : null}</p><div className="chat-files"><span><Code2 size={11} /> auth/loading.tsx</span><span><GitBranch size={11} /> +24 −8</span></div></div></div></div><div className="diff-toggle"><button className={!showDiff ? "active" : ""} onClick={() => setShowDiff(false)}>Conversation</button><button className={showDiff ? "active" : ""} onClick={() => setShowDiff(true)}>Diff view <span className="diff-count">3</span></button></div>{showDiff ? <div className="diff-view"><div className="diff-line diff-muted">@@ auth/loading.tsx</div><div className="diff-line diff-minus">− <span>Loading your account...</span></div><div className="diff-line diff-plus">+ <span>Preparing your workspace <b>...</b></span></div><div className="diff-line diff-plus">+ <span className="diff-accent">aria-live="polite"</span></div></div> : <div className="conversation-hint"><Sparkles size={13} /> Ask for a plan, then switch to diff view when it feels right.</div>}<form className="chat-input" onSubmit={generate}><input value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder="Ask for a change…" /><button aria-label="Generate code" type="submit"><ArrowRight size={14} /></button></form></div>;
}

function CookieBanner({ onClose }: { onClose: () => void }) {
  return <div className="cookie-banner"><div><strong>OK with cookies?</strong><p>We use cookies to keep things running, understand how teams use Gridline, and improve the experience over time. Some are essential and the site needs them to work.</p><span>You can accept all, reject the non-essentials, or pick exactly what you’re comfortable with.</span></div><div className="cookie-actions"><button onClick={onClose}>Save and continue</button><button className="secondary" onClick={onClose}>Manage my preferences</button></div></div>;
}

const workflowStories = [
  { label: "Before the change", title: "Start with the shape of the problem.", body: "Gridline reads routes, components, tests, and conventions before it suggests a plan. You get a brief grounded in your actual product.", code: "context.map(repo)\n  .surface(intent)\n  .return(clarity)", note: "18 files understood" },
  { label: "In the flow", title: "Keep the why beside the work.", body: "Ask, explore, and refine in one quiet workspace. The agent keeps your open files and decisions close, so momentum never turns into tab chaos.", code: "agent.listen(intent)\n  .show(reasoning)\n  .draft(reviewableDiff)", note: "3 decisions attached" },
  { label: "After the review", title: "Ship with receipts, not mystery.", body: "Checks, summaries, and release notes arrive at the end of the same thread. Every change is easy to understand, share, and trust.", code: "diff.verify(checks)\n  .summarize(changelog)\n  .ship(confidently)", note: "All checks passed" },
];

function WorkflowStory() {
  const [active, setActive] = useState(0);
  const story = workflowStories[active];
  return <section className="workflow-story reveal-on-scroll"><div className="workflow-heading"><span className="section-index">06 / THE GRIDLINE RHYTHM</span><h2>Good work has a<br /><em>before, during,</em><br />and after.</h2><p>Gridline stays useful across the whole arc of building software — not just the moment you ask it to write code.</p></div><div className="workflow-stage"><div className="workflow-tabs">{workflowStories.map((item, index) => <button className={active === index ? "active" : ""} key={item.label} onClick={() => setActive(index)}><span>0{index + 1}</span>{item.label}<ArrowRight size={14} /></button>)}</div><div className="workflow-visual"><div className="workflow-orbit orbit-a" /><div className="workflow-orbit orbit-b" /><div className="workflow-window"><div className="workflow-window-top"><span className="mini-dots"><i /><i /><i /></span><span>gridline / workspace</span><span className="workflow-live">LIVE</span></div><div className="workflow-window-body"><div className="workflow-code"><span className="code-kicker">{story.label}</span><pre>{story.code}</pre><span className="workflow-note"><Check size={12} /> {story.note}</span></div><div className="workflow-agent-card"><span className="agent-badge">✦ Gridline Agent</span><p>{story.title}</p><span className="agent-card-line" /><span className="agent-card-line short" /><button>Review next step <ArrowUpRight size={12} /></button></div></div></div></div><div className="workflow-copy"><span className="section-index">0{active + 1} / {story.label.toUpperCase()}</span><h3>{story.title}</h3><p>{story.body}</p><a href="/product" className="inline-link">Explore the workflow <ArrowUpRight size={15} /></a></div></div></section>;
}

export default function Home() {
  const [activeMode, setActiveMode] = useState(0);
  const [showDownload, setShowDownload] = useState(false);
  const [showCookies, setShowCookies] = useState(true);
  const current = demoModes[activeMode];

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal-on-scroll"));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.16 });
    items.forEach((item) => observer.observe(item));
    const onScroll = () => document.documentElement.style.setProperty("--scroll-progress", `${Math.min(window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1), 1)}`);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav>
        <div className="header-actions"><a className="sales-link" href="#teams">Talk to sales</a><button className="download-chip" onClick={() => setShowDownload(true)}><span className="chip-icon">⌘</span> Download</button><button className="menu-toggle" aria-label="Open menu"><Menu size={17} /></button></div>
      </header>

      <main>
        <section className="hero-section" id="download" aria-labelledby="hero-title">
          <div className="hero-copy">
            <a href="/product" className="eyebrow-link"><span className="lime-pill">NEW</span><span>Gridline for the way you think</span><ArrowRight size={13} /></a>
            <h1 id="hero-title">The AI code editor for <em>clearer</em> thinking.</h1>
            <p className="hero-subtitle">Write, refactor, and ship with an agent that understands your codebase — and stays out of your way.</p>
            <div className="hero-actions"><button className="primary-button" onClick={() => setShowDownload(true)}>Try Gridline free <ArrowDown size={15} /></button><a className="quiet-link" href="#product">See how it works <ArrowRight size={14} /></a></div>
            <div className="platform-note"><span className="check-ring"><Check size={12} /></span> Available for macOS, Windows, and Linux</div>
          </div>
          <ProductMockup />
          <div className="hero-side-note"><span>01</span><span>Make room for<br />better ideas.</span></div>
        </section>

        <section className="signal-strip" aria-label="Product promise"><div><span className="strip-icon"><Zap size={14} /></span><span>Built for the 10x curious</span></div><div><span className="strip-icon"><Globe2 size={14} /></span><span>Private by default</span></div><div><span className="strip-icon"><TerminalSquare size={14} /></span><span>Works with your stack</span></div><div className="strip-arrow"><ArrowDown size={15} /></div></section>

        <section className="integration-marquee reveal-on-scroll" aria-label="Supported integrations"><div className="marquee-label"><span className="section-index">WORKS WITH YOUR STACK</span><p>Bring the tools<br /><em>you already trust.</em></p></div><div className="marquee-window"><div className="marquee-track"><span>GitHub</span><i>✦</i><span>GitLab</span><i>✦</i><span>Linear</span><i>✦</i><span>Slack</span><i>✦</i><span>Notion</span><i>✦</i><span>Figma</span><i>✦</i><span>Sentry</span><i>✦</i><span>Vercel</span><i>✦</i><span>GitHub</span><i>✦</i><span>GitLab</span><i>✦</i></div></div></section>

        <section className="product-section" id="product">
          <div className="section-intro"><span className="section-index">02 / THE GRIDLINE METHOD</span><h2>Less prompting.<br /><span>More momentum.</span></h2><p>Gridline is an AI-native editor built around the way good work actually happens: a little context, a little taste, and a lot of iteration.</p></div>
          <div className="demo-wrap">
            <div className="demo-tabs">{demoModes.map((mode, index) => <button className={activeMode === index ? "active" : ""} onClick={() => setActiveMode(index)} key={mode.label}><span>0{index + 1}</span>{mode.label}<ArrowRight size={14} /></button>)}</div>
            <div className={`demo-panel accent-${current.accent}`}>
              <div className="demo-copy"><span className="section-index">{current.eyebrow}</span><h3>{current.title}</h3><p>{current.description}</p><a href="/product" className="inline-link">Explore the workflow <ArrowUpRight size={15} /></a></div>
              <div className="mini-editor"><div className="mini-editor-head"><span className="mini-dots"><i /><i /><i /></span><span>{activeMode === 0 ? "plan.md" : activeMode === 1 ? "agent.ts" : "pull-request.md"}</span><span className="mini-head-right"><Copy size={12} /> <span>Copy</span></span></div><div className="mini-editor-body"><EditorLines mode={activeMode} /><div className="mini-agent-note"><Sparkles size={13} /><span>{activeMode === 0 ? "Gridline mapped 4 files to this plan" : activeMode === 1 ? "Agent is using 12 relevant files" : "All checks passed · ready to review"}</span></div></div></div>
            </div>
          </div>
        </section>

        <section className="teams-section" id="teams">
          <div className="team-card team-card-large"><div className="card-topline"><span>FOR SMALL TEAMS</span><ArrowUpRight size={16} /></div><div><h3>Make the space between idea and <span>shipped</span> feel smaller.</h3><p>Gridline gives every teammate a shared mental model of the work — not just a autocomplete box.</p></div><div className="avatar-row"><span className="avatar avatar-a">JM</span><span className="avatar avatar-b">RK</span><span className="avatar avatar-c">AL</span><span className="avatar-more">+ 14 teammates</span></div></div>
          <div className="team-card team-card-dark"><div className="card-topline"><span>CONTEXT, ON COMMAND</span><Command size={16} /></div><div className="demo-duo"><CommandPaletteDemo /><AIChatDemo /></div><p>Context should be one shortcut away. Never more.</p></div>
          <div className="team-card team-card-lime"><div className="card-topline"><span>THE FEELING</span><span className="starburst">✳</span></div><h3>Quietly<br />powerful.</h3><p>No black-box magic. Just a better place to do your best work.</p><div className="lime-card-line" /></div>
        </section>

        <section className="feature-story reveal-on-scroll"><div className="feature-story-copy"><span className="section-index">03 / SIGNAL, NOT NOISE</span><h2>Make every output<br /><span>feel intentional.</span></h2><p>From generated code to release notes, Gridline keeps the human signal in the loop. See where a suggestion came from, what it touches, and why it belongs.</p><div className="story-points"><div><b>01</b><span>Traceable context</span></div><div><b>02</b><span>Reviewable changes</span></div><div><b>03</b><span>Human-led shipping</span></div></div></div><div className="feature-story-art"><img src="/manus-storage/Screenshot2026-09-22121557_7932d635.png" alt="Gridline product signal visual" /><div className="feature-caption"><Sparkles size={13} /> Output verified in context</div></div></section>

        <WorkflowStory />

        <section className="logo-wall reveal-on-scroll"><div className="logo-wall-heading"><span className="section-index">FOR THE DOERS</span><h2>Trusted by teams<br /><em>who care about the details.</em></h2></div><div className="logo-wall-grid">{trustedMarks.map(([name, type]) => <a className="logo-mark-cell" href="/product" key={name} aria-label={`${name} integration`}><IntegrationMark name={name} type={type} /><span>{name}</span></a>)}</div><div className="logo-wall-feature-links"><a href="/context">Explore Context <ArrowUpRight size={14} /></a><a href="/agent">Explore Agent <ArrowUpRight size={14} /></a><a href="/ship">Explore Ship <ArrowUpRight size={14} /></a></div></section>

        <section className="tagline-editorial"><img src="/manus-storage/Screenshot2026-09-22085841_5a68e6a7.png" alt="Built what's next." /><div className="tagline-overlay"><span className="section-index">04 / THE NEXT LINE</span><p>For the builders who can already see the shape of what comes next.</p><a href="/teams" className="editorial-link">Meet Gridline for teams <ArrowUpRight size={14} /></a></div></section>

        <section className="pricing-section" id="pricing"><div><span className="section-index">05 / START SMALL</span><h2>A better editor<br />for <em>every</em> build.</h2></div><div className="pricing-copy"><p>Start free. Bring your repo, your shortcuts, and your point of view. Upgrade when Gridline becomes the part of your workflow you can’t imagine losing.</p><button className="primary-button" onClick={() => setShowDownload(true)}>Get early access <ArrowRight size={15} /></button></div></section>

        <section className="footer-cta" id="changelog"><div className="footer-cta-mark">✦</div><h2>Keep your eyes<br />on the <span>next line.</span></h2><button className="dark-button" onClick={() => setShowDownload(true)}>Try it on your next build <ArrowUpRight size={16} /></button></section>
      </main>

      <footer className="site-footer"><Logo /><span>© 2026 Gridline, Inc.</span><div className="footer-links"><a href="/product">Product</a><a href="/teams">Teams</a><a href="/pricing">Pricing</a><a href="#top">Back to top ↑</a></div></footer>
      {showCookies ? <CookieBanner onClose={() => setShowCookies(false)} /> : null}
      {showDownload ? <DownloadModal onClose={() => setShowDownload(false)} /> : null}
    </div>
  );
}
