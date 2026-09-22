import { ArrowUpRight, Menu } from "lucide-react";

const logoPath = "/manus-storage/Screenshot2026-09-22085410_2da4ae3f.png";

export function GridlineLogo({ href = "/" }: { href?: string }) {
  return <a href={href} className="logo gridline-logo" aria-label="Gridline home"><img src={logoPath} alt="" /><span>gridline</span></a>;
}

export function SiteHeader() {
  return <header className="site-header site-header-pages"><GridlineLogo /><nav className="desktop-nav" aria-label="Primary navigation"><a href="/product">Product</a><a href="/teams">For teams</a><a href="/pricing">Pricing</a><a href="/changelog">Changelog</a></nav><div className="header-actions"><a className="sales-link" href="/teams">Talk to sales</a><a className="download-chip" href="/#download"><span className="chip-icon">⌘</span> Download</a><button className="menu-toggle" aria-label="Open menu"><Menu size={17} /></button></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer site-footer-pages"><GridlineLogo /><span>© 2026 Gridline, Inc.</span><div className="footer-links"><a href="/product">Product</a><a href="/teams">Teams</a><a href="/pricing">Pricing</a><a href="/changelog">Changelog</a><a href="/">Back to home <ArrowUpRight size={12} /></a></div></footer>;
}
