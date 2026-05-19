export function Footer() {
  return (
    <footer className="mt-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-ink relative overflow-hidden">
              <div className="absolute inset-1 rounded-sm bg-accent" />
            </div>
            <span className="font-display text-[17px] text-ink">FleetMind</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-ink-soft leading-relaxed">
            Fleet Reliability Intelligence Platform for modern fleets. From signal to decision to
            outcome — every action makes the next one smarter.
          </p>
          <p className="mt-6 text-xs text-muted-foreground font-mono-tag">
            Built for multi-region fleet operations
          </p>
        </div>
        <div>
          <p className="font-mono-tag text-muted-foreground mb-4">Product</p>
          <ul className="space-y-2.5 text-sm text-ink-soft">
            <li>
              <a href="#capabilities" className="hover:text-ink">
                Reliability intelligence
              </a>
            </li>
            <li>
              <a href="#capabilities" className="hover:text-ink">
                Decision engine
              </a>
            </li>
            <li>
              <a href="#capabilities" className="hover:text-ink">
                Human-in-the-loop learning
              </a>
            </li>
            <li>
              <a href="#capabilities" className="hover:text-ink">
                Conversational interface
              </a>
            </li>
            <li>
              <a href="#capabilities" className="hover:text-ink">
                Outcome tracking
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono-tag text-muted-foreground mb-4">Company</p>
          <ul className="space-y-2.5 text-sm text-ink-soft">
            <li>
              <a href="#advantage" className="hover:text-ink">
                Why FleetMind
              </a>
            </li>
            <li>
              <a href="#strategy" className="hover:text-ink">
                Strategic advantage
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-ink">
                Contact
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-ink">
                Book a demo
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} FleetMind Ltd. All rights reserved.</p>
          <p className="font-mono-tag">v1.0 · Built for operating teams</p>
        </div>
      </div>
    </footer>
  );
}
