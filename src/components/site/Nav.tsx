import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-rule">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-7 w-7 rounded-md bg-ink relative overflow-hidden">
            <div className="absolute inset-1 rounded-sm bg-accent" />
            <div className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-background" />
          </div>
          <span className="font-display text-[17px] tracking-tight text-ink">FleetMind</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          <a href="#product" className="hover:text-ink transition-colors">Product</a>
          <a href="#how" className="hover:text-ink transition-colors">How it works</a>
          <a href="#advantage" className="hover:text-ink transition-colors">Advantage</a>
          <a href="#uk" className="hover:text-ink transition-colors">For UK fleets</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden sm:inline-flex h-9 items-center px-3 text-sm text-ink-soft hover:text-ink">
            Sign in
          </a>
          <a
            href="#contact"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-medium text-background hover:bg-ink/90 transition-colors"
          >
            Book a demo
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
