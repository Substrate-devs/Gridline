import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

type PageKind = "product" | "teams" | "pricing" | "changelog";

const content = {
  product: {
    kicker: "01 / PRODUCT",
    title: "An editor that keeps the whole system in view.",
    intro: "Gridline brings your code, context, and next best action into one calm workspace. Less hunting. More building.",
    accent: "lime",
    cards: [
      ["Context engine", "Gridline maps your repository before it suggests a change, so every answer starts from the real shape of your product."],
      ["Agent workspace", "Ask for a plan, a refactor, or a review. See the reasoning, the files, and the diff before anything is applied."],
      ["Ship surface", "Run checks, review the change, and turn the work into a pull request without leaving the flow."],
    ],
  },
  teams: {
    kicker: "02 / FOR TEAMS",
    title: "A shared mental model for the work between the work.",
    intro: "Gridline makes taste and context legible across a team, from the first product thought to the final merge.",
    accent: "blue",
    cards: [
      ["Small teams", "Move quickly without creating a second system to maintain. Everyone sees the why behind the code."],
      ["Growing teams", "Keep patterns discoverable and onboarding closer to a conversation with the people who built the system."],
      ["Leads & makers", "Set the direction once, then let Gridline carry intent through the details."],
    ],
  },
  pricing: {
    kicker: "03 / PRICING",
    title: "Start with a sharper editor. Grow into a calmer system.",
    intro: "Bring your repo and your point of view. Gridline is free while you find the parts of your workflow worth keeping.",
    accent: "orange",
    cards: [
      ["Free", "$0 / month", "Unlimited local projects, core context search, and a command palette built for everyday work."],
      ["Studio", "$24 / seat / month", "Shared workspaces, deeper agent context, review summaries, and priority model access."],
      ["Company", "Let’s talk", "Private deployment options, admin controls, security reviews, and hands-on onboarding."],
    ],
  },
  changelog: {
    kicker: "04 / CHANGELOG",
    title: "Small releases. Noticeable difference.",
    intro: "Gridline is shaped in public by people who care about the feel of their tools as much as the output.",
    accent: "lime",
    cards: [
      ["v0.8 · Command palette", "Ask Gridline to explain, refactor, or find code without leaving the file you are thinking in."],
      ["v0.7 · Repository map", "A faster context pass means better first answers and fewer irrelevant suggestions."],
      ["v0.6 · Review mode", "See intent, files touched, and checks in one compact change surface."],
    ],
  },
} as const;

export default function MarketingPage({ kind }: { kind: PageKind }) {
  const page = content[kind];
  return <div className="site-shell page-shell"><SiteHeader /><main className="marketing-main"><section className={`marketing-hero accent-${page.accent}`}><div className="marketing-hero-copy"><span className="section-index">{page.kicker}</span><h1>{page.title}</h1><p>{page.intro}</p><a className="primary-button" href="/#download">Get early access <ArrowRight size={15} /></a></div><div className="marketing-orbit"><div className="orbit-label"><Sparkles size={15} /> Gridline / in context</div><div className="orbit-code"><span>const</span> intent = <b>"ship thoughtful software"</b><br /><span>await</span> gridline.<i>understand</i>(intent)<br /><span>return</span> <strong>clarity</strong></div><div className="orbit-check"><Check size={14} /> Context loaded · 18 files</div></div></section><section className="marketing-grid">{page.cards.map((card, index) => <article className={`marketing-card marketing-card-${index + 1}`} key={card[0]}><span className="card-index">0{index + 1}</span><h2>{card[0]}</h2>{card[2] ? <strong className="price-tag">{card[1]}</strong> : null}<p>{card[2] || card[1]}</p><a href="/#product" className="inline-link">Explore this layer <ArrowUpRight size={15} /></a></article>)}</section><section className="marketing-quote"><span className="lime-pill">THE GRIDLINE PRINCIPLE</span><blockquote>“The best AI tools don’t make the work feel automated. They make the work feel more like yours.”</blockquote><span className="quote-caption">— Product notes, issue 004</span></section></main><SiteFooter /></div>;
}
