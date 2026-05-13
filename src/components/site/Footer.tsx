export function Footer() {
  return (
    <footer className="border-t border-rule mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-ink relative overflow-hidden">
              <div className="absolute inset-1 rounded-sm bg-accent" />
            </div>
            <span className="font-display text-[17px] text-ink">FleetMind</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-ink-soft leading-relaxed">
            Maintenance decision intelligence for modern UK fleets. From signal to decision to outcome — every action makes the next one smarter.
          </p>
          <p className="mt-6 text-xs text-muted-foreground font-mono-tag">
            Registered in England & Wales · London
          </p>
        </div>
        <div>
          <p className="font-mono-tag text-muted-foreground mb-4">Product</p>
          <ul className="space-y-2.5 text-sm text-ink-soft">
            <li><a href="#product" className="hover:text-ink">Diagnostic intelligence</a></li>
            <li><a href="#product" className="hover:text-ink">Decision engine</a></li>
            <li><a href="#product" className="hover:text-ink">Conversational interface</a></li>
            <li><a href="#product" className="hover:text-ink">Outcome tracking</a></li>
          </ul>
        </div>
        <div>
          <p className="font-mono-tag text-muted-foreground mb-4">Company</p>
          <ul className="space-y-2.5 text-sm text-ink-soft">
            <li><a href="#advantage" className="hover:text-ink">Why FleetMind</a></li>
            <li><a href="#uk" className="hover:text-ink">UK market</a></li>
            <li><a href="#contact" className="hover:text-ink">Contact</a></li>
            <li><a href="#contact" className="hover:text-ink">Book a demo</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} FleetMind Ltd. All rights reserved.</p>
          <p className="font-mono-tag">v1.0 · Built in the UK</p>
        </div>
      </div>
    </footer>
  );
}
