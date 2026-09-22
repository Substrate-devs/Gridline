import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, CircleDot, Code2, GitBranch, LockKeyhole, Play, Sparkles, Terminal, Zap } from "lucide-react";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

type FeatureKind = "context" | "agent" | "ship";

type FeatureData = {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  accent: string;
  stat: string;
  statLabel: string;
  bullets: string[];
  code: string;
  cardTitle: string;
  cardBody: string;
  mascot: string;
  mascotName: string;
};

const data: Record<FeatureKind, FeatureData> = {
  context: {
    eyebrow: "01 / CONTEXT",
    title: <>A codebase<br /><em>with a memory.</em></>,
    intro: "Gridline maps the shape of your system before it writes into it. Every suggestion starts from the routes, patterns, and decisions that make your product yours.",
    accent: "lime",
    stat: "18 files",
    statLabel: "understood before the first suggestion",
    bullets: ["Repository map that updates as you work", "Answers grounded in the files that matter", "Private by default, local to your workspace"],
    code: "const context = await gridline\n  .map(repository)\n  .surface(relevantFiles)\n  .return(clarity)",
    cardTitle: "The shape of the problem",
    cardBody: "Gridline found the auth boundary, three related components, and the test that protects the edge case.",
    mascot: "/manus-storage/gridline-mascot-context_0d909790.png",
    mascotName: "Context Owl"
  },
  agent: {
    eyebrow: "02 / AGENT",
    title: <>Make intent<br /><em>executable.</em></>,
    intro: "Describe the outcome in your own words. Gridline turns a rough thought into a plan, a reviewable diff, and a conversation you can steer at every step.",
    accent: "dark",
    stat: "4×",
    statLabel: "fewer context switches per task",
    bullets: ["Plan before code, with decisions attached", "Conversation and diff view in one surface", "Keyboard-first command palette with history"],
    code: "agent.listen(\"make this feel faster\")\n  .plan(decisions)\n  .draft(reviewableDiff)",
    cardTitle: "Here’s a starting point.",
    cardBody: "I found the loading boundary and kept the public API unchanged. Three files are ready for review.",
    mascot: "/manus-storage/gridline-mascot-agent_64c401a6.png",
    mascotName: "Agent Fox"
  },
  ship: {
    eyebrow: "03 / SHIP",
    title: <>Ship with<br /><em>receipts.</em></>,
    intro: "The work does not end when the diff looks right. Gridline keeps checks, rationale, and release notes attached so your team can move with confidence.",
    accent: "green",
    stat: "0",
    statLabel: "black-box changes applied without review",
    bullets: ["Diffs that explain what changed and why", "Checks and affected files visible at a glance", "Turn finished work into a clean handoff"],
    code: "diff.verify(checks)\n  .summarize(changelog)\n  .ship(confidently)",
    cardTitle: "All checks passed",
    cardBody: "The change is scoped to four files, the edge case is covered, and a release note is ready to share.",
    mascot: "/manus-storage/gridline-mascot-ship_d91f3dc6.png",
    mascotName: "Ship Swallow"
  }
};

function FeatureCanvas({ kind, feature }: { kind: FeatureKind; feature: FeatureData }) {
  const [pulse, setPulse] = useState(0);
  const canvasRef = useRef<HTMLDivElement>(null);
  useEffect(() => { const timer = window.setInterval(() => setPulse((value) => value + 1), 3400); return () => window.clearInterval(timer); }, []);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.82 - rect.top) / (window.innerHeight + rect.height * 0.72)));
        canvasRef.current.style.setProperty("--feature-scroll", progress.toFixed(3));
      }
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update(); window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (frame) window.cancelAnimationFrame(frame); };
  }, []);
  return <div ref={canvasRef} className={`feature-canvas feature-canvas-${kind}`}><div className="feature-canvas-orbit orbit-one" /><div className="feature-canvas-orbit orbit-two" /><div className="feature-window"><div className="feature-window-bar"><span className="mini-dots"><i /><i /><i /></span><span>gridline / {kind}</span><span className="window-status"><CircleDot size={10} /> LIVE</span></div><div className="feature-window-main"><div className="feature-code-pane"><div className="pane-label"><Terminal size={12} /> {kind === "context" ? "repository-map.ts" : kind === "agent" ? "agent.plan.ts" : "release.md"}</div><pre>{feature.code}</pre><div className={`code-cursor cursor-${pulse % 3}`} /></div><div className="feature-agent-pane"><span className="feature-agent-label"><Sparkles size={12} /> Gridline Agent</span><strong>{feature.cardTitle}</strong><p>{feature.cardBody}</p><div className="feature-check-row"><Check size={12} /> {feature.stat} <small>{feature.statLabel}</small></div><button>Review next step <ArrowUpRight size={12} /></button></div></div></div><div className="canvas-float float-top"><Zap size={13} /> {kind === "context" ? "Context loaded" : kind === "agent" ? "Thinking with you" : "Ready to ship"}</div><div className="canvas-float float-bottom"><Code2 size={13} /> {kind === "context" ? "4 boundaries linked" : kind === "agent" ? "3 files changed" : "All checks passed"}</div><div className="canvas-mascot"><img src={feature.mascot} alt={feature.mascotName} /><span>{feature.mascotName}</span></div></div>;
}

export default function FeaturePage({ kind }: { kind: FeatureKind }) {
  const feature = data[kind];
  return <div className="site-shell feature-page"><SiteHeader /><main><section className={`feature-hero feature-hero-${feature.accent}`}><div className="feature-hero-copy"><span className="section-index">{feature.eyebrow}</span><h1>{feature.title}</h1><p>{feature.intro}</p><div className="feature-actions"><a className="primary-button" href="/#download">Try Gridline free <ArrowRight size={15} /></a><a className="inline-link" href="#details">See the details <ArrowUpRight size={15} /></a></div><div className="feature-stat"><strong>{feature.stat}</strong><span>{feature.statLabel}</span></div></div><FeatureCanvas kind={kind} feature={feature} /></section><section id="details" className="feature-detail-grid"><div className="feature-detail-intro"><span className="section-index">THE {kind.toUpperCase()} LAYER</span><h2>Quietly powerful.<br /><em>Deliberately yours.</em></h2><p>Good tools reduce the distance between what you mean and what gets built. This is the layer that makes Gridline feel less like automation and more like a place to think.</p></div><div className="feature-bullets">{feature.bullets.map((bullet, index) => <div className="feature-bullet" key={bullet}><span>0{index + 1}</span><div><Check size={15} /><p>{bullet}</p></div></div>)}</div></section><section className="feature-deep-dive"><div className="deep-dive-index"><span className="section-index">A CLOSER LOOK</span><span className="deep-dive-mark">{kind === "context" ? <GitBranch /> : kind === "agent" ? <Sparkles /> : <LockKeyhole />}</span></div><div className="deep-dive-copy"><h2>{feature.cardTitle}</h2><p>{feature.cardBody} Gridline keeps the state visible, the reasoning close, and the next action obvious.</p><a className="dark-button" href="/#download">Open a workspace <ArrowUpRight size={16} /></a></div></section><section className="feature-next"><span className="section-index">KEEP GOING</span><h2>{kind === "context" ? <>When the system is clear,<br /><em>make intent executable.</em></> : kind === "agent" ? <>When the change feels right,<br /><em>ship with receipts.</em></> : <>When the work is shipped,<br /><em>keep the context.</em></>}</h2><a className="inline-link" href={kind === "context" ? "/agent" : kind === "agent" ? "/ship" : "/context"}>{kind === "context" ? "Meet the Agent" : kind === "agent" ? "Meet Ship" : "Back to Context"} <ArrowRight size={15} /></a></section></main><SiteFooter /></div>;
}

export function ContextPage() { return <FeaturePage kind="context" />; }
export function AgentPage() { return <FeaturePage kind="agent" />; }
export function ShipPage() { return <FeaturePage kind="ship" />; }
