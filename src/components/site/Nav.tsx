import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type MenuKey = "solutions" | "products" | "resources" | "company";

const MENUS: Record<
  MenuKey,
  { label: string; columns: { heading: string; items: { title: string; desc: string }[] }[] }
> = {
  solutions: {
    label: "Solutions",
    columns: [
      {
        heading: "By industry",
        items: [
          { title: "Last-mile delivery", desc: "Transit & Sprinter fleets" },
          { title: "Field services", desc: "Engineers on the road" },
          { title: "Utilities & infrastructure", desc: "High-uptime operations" },
          { title: "Public sector", desc: "Government and municipal fleets" },
        ],
      },
      {
        heading: "By role",
        items: [
          { title: "Operations managers", desc: "Faster, evidenced decisions" },
          { title: "Fleet directors", desc: "Cost & uptime control" },
          { title: "Drivers", desc: "Talk to the fleet from the cab" },
        ],
      },
    ],
  },
  products: {
    label: "Products",
    columns: [
      {
        heading: "Platform",
        items: [
          { title: "Reliability intelligence", desc: "Ranked risks with evidence" },
          { title: "Decision engine", desc: "Cost, downtime and success trade-offs" },
          { title: "Human-in-the-loop learning", desc: "Rationale captured as data" },
          { title: "Outcome journal", desc: "Every action, remembered" },
        ],
      },
      {
        heading: "Interfaces",
        items: [
          { title: "WhatsApp & voice", desc: "Zero-training access" },
          { title: "Mobile & web", desc: "Any-device access" },
          { title: "Telematics integrations", desc: "Geotab, Samsara, Webfleet" },
        ],
      },
    ],
  },
  resources: {
    label: "Resources",
    columns: [
      {
        heading: "Learn",
        items: [
          { title: "Blog", desc: "Field notes from fleet operators" },
          { title: "Case studies", desc: "Measured outcomes" },
          { title: "Guides", desc: "Compliance, inspections & uptime" },
        ],
      },
      {
        heading: "Support",
        items: [
          { title: "Help centre", desc: "Docs & FAQs" },
          { title: "Status", desc: "Live system health" },
          { title: "Community", desc: "Operations leads forum" },
        ],
      },
    ],
  },
  company: {
    label: "Company",
    columns: [
      {
        heading: "FleetMind",
        items: [
          { title: "About", desc: "Why we exist" },
          { title: "Customers", desc: "Who runs on FleetMind" },
          { title: "Careers", desc: "Build with us" },
          { title: "Contact", desc: "Talk to a human" },
        ],
      },
    ],
  },
};

export function Nav() {
  const [open, setOpen] = useState<MenuKey | null>(null);

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-rule"
      onMouseLeave={() => setOpen(null)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-7 w-7 rounded-md bg-ink relative overflow-hidden">
            <div className="absolute inset-1 rounded-sm bg-accent" />
            <div className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-background" />
          </div>
          <span className="font-display text-[17px] tracking-tight text-ink">FleetMind</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {(Object.keys(MENUS) as MenuKey[]).map((key) => (
            <button
              key={key}
              onMouseEnter={() => setOpen(key)}
              onFocus={() => setOpen(key)}
              className={`inline-flex items-center gap-1 h-16 px-3 transition-colors ${
                open === key ? "text-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              {MENUS[key].label}
              <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            </button>
          ))}
          <a
            href="#pricing"
            className="h-16 inline-flex items-center px-3 text-ink-soft hover:text-ink"
          >
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex h-9 items-center px-3 text-sm text-ink-soft hover:text-ink"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-medium text-background shadow-[var(--shadow-soft)] transition-opacity hover:opacity-95"
          >
            Book a demo
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Mega menu panel */}
      <div
        className={`absolute left-0 right-0 top-16 border-b border-rule bg-background/95 backdrop-blur-md transition-all duration-200 origin-top ${
          open
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
        onMouseEnter={() => open && setOpen(open)}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid grid-cols-12 gap-10">
          {open && (
            <>
              <div className="col-span-3">
                <p className="font-mono-tag text-muted-foreground">{MENUS[open].label}</p>
                <p className="mt-3 font-display text-2xl tracking-[-0.02em] text-ink leading-tight">
                  Built around the reliability decisions fleet teams make every day.
                </p>
              </div>
              <div className="col-span-9 grid grid-cols-2 gap-8">
                {MENUS[open].columns.map((col) => (
                  <div key={col.heading}>
                    <p className="font-mono-tag text-muted-foreground mb-4">{col.heading}</p>
                    <ul className="space-y-3">
                      {col.items.map((item) => (
                        <li key={item.title}>
                          <a
                            href="#"
                            className="group block rounded-lg px-3 py-2 -mx-3 hover:bg-surface transition-colors"
                          >
                            <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                              {item.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
