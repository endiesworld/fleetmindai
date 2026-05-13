import { createFileRoute } from "@tanstack/react-router";
import heroNetwork from "@/assets/hero-network.jpg";
import ukFleet from "@/assets/uk-fleet.jpg";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FleetMind — Maintenance decision intelligence for UK fleets" },
      {
        name: "description",
        content:
          "FleetMind turns vehicle signals into evidence-based maintenance decisions, learning from every repair to make the next one smarter. Built for UK fleet operators.",
      },
      { property: "og:title", content: "FleetMind — Decision intelligence for fleet maintenance" },
      {
        property: "og:description",
        content:
          "From signal to decision to outcome. The intelligence layer between telematics and the workshop.",
      },
    ],
  }),
  component: Index,
});

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono-tag text-muted-foreground">
      <span className="h-1 w-1 rounded-full bg-accent" />
      {children}
    </span>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden noise" style={{ backgroundImage: "var(--gradient-glow)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 reveal">
            <Tag>UK · Fleet maintenance intelligence</Tag>
            <h1 className="mt-6 font-display text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.95] tracking-[-0.04em] text-ink">
              Every repair,
              <br />
              <span className="font-editorial italic text-ink-soft">smarter</span> than the last.
            </h1>
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-ink-soft">
              FleetMind is the decision layer between your telematics and your workshop. It turns raw vehicle signals into ranked, evidence-backed maintenance actions — and learns from every outcome, on every van.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[15px] font-medium text-background hover:bg-ink/90 transition-colors shadow-[var(--shadow-soft)]"
              >
                Book a UK demo
                <span aria-hidden>→</span>
              </a>
              <a
                href="#how"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-rule px-6 text-[15px] text-ink hover:bg-surface transition-colors"
              >
                See how it works
              </a>
            </div>

            <div className="mt-14 flex items-center gap-8 text-sm text-muted-foreground">
              <div>
                <p className="font-display text-2xl text-ink">−38%</p>
                <p className="text-xs mt-1">Avg. repeat-fault rate</p>
              </div>
              <div className="h-8 w-px bg-rule" />
              <div>
                <p className="font-display text-2xl text-ink">4.2×</p>
                <p className="text-xs mt-1">Faster diagnosis</p>
              </div>
              <div className="h-8 w-px bg-rule" />
              <div>
                <p className="font-display text-2xl text-ink">24/7</p>
                <p className="text-xs mt-1">Conversational access</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 reveal" style={{ animationDelay: "120ms" }}>
            <div className="relative rounded-2xl border border-rule bg-card overflow-hidden shadow-[var(--shadow-elevated)]">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-rule bg-surface">
                <div className="h-2.5 w-2.5 rounded-full bg-rule" />
                <div className="h-2.5 w-2.5 rounded-full bg-rule" />
                <div className="h-2.5 w-2.5 rounded-full bg-rule" />
                <p className="ml-3 font-mono-tag text-muted-foreground">fleetmind · workshop chat</p>
              </div>
              <div className="p-5 space-y-4 text-[14px]">
                <div className="space-y-1">
                  <p className="font-mono-tag text-muted-foreground">Mike · Workshop lead</p>
                  <p className="text-ink">Van VX23 KLM keeps throwing a P0299 — second time this month.</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono-tag text-accent">FleetMind</p>
                  <div className="rounded-xl bg-surface border border-rule p-4">
                    <p className="text-ink leading-relaxed">
                      Most likely a leaking boost pipe at the EGR coupler — 71% confidence based on 14 similar Transit 2.0 EcoBlue cases in your fleet.
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                      <div className="rounded-md bg-background border border-rule p-2">
                        <p className="text-muted-foreground">Cost</p>
                        <p className="text-ink font-medium">£94</p>
                      </div>
                      <div className="rounded-md bg-background border border-rule p-2">
                        <p className="text-muted-foreground">Downtime</p>
                        <p className="text-ink font-medium">2.5h</p>
                      </div>
                      <div className="rounded-md bg-background border border-rule p-2">
                        <p className="text-muted-foreground">Success</p>
                        <p className="text-ink font-medium">88%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button className="text-xs rounded-full bg-ink text-background px-3 h-8">Approve action</button>
                  <button className="text-xs rounded-full border border-rule px-3 h-8 text-ink-soft">Show alternatives</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* logo strip */}
      <div className="border-y border-rule bg-surface/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center gap-10 overflow-hidden">
          <p className="font-mono-tag text-muted-foreground shrink-0">Built for fleets like</p>
          <div className="flex gap-12 marquee whitespace-nowrap text-ink-soft/70 font-display text-lg tracking-tight">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                <span>DPD UK</span><span>·</span>
                <span>Royal Mail</span><span>·</span>
                <span>British Gas</span><span>·</span>
                <span>National Grid</span><span>·</span>
                <span>Openreach</span><span>·</span>
                <span>Tesco Logistics</span><span>·</span>
                <span>Eddie Stobart</span><span>·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    "Telematics shouts. Nobody decides.",
    "Diagnoses live in one engineer's head.",
    "Repeat faults. Repeat costs.",
    "No record of what actually worked.",
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Tag>The problem</Tag>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl tracking-[-0.035em] text-ink">
            Fleets see everything,
            <br />
            <span className="font-editorial italic text-ink-soft">decide nothing.</span>
          </h2>
        </div>
        <div className="lg:col-span-8 lg:pt-3">
          <ul className="divide-y divide-rule border-y border-rule">
            {items.map((t, i) => (
              <li key={t} className="flex items-baseline gap-6 py-6">
                <span className="font-mono-tag text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-2xl lg:text-[28px] tracking-[-0.02em] text-ink">{t}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-ink-soft max-w-2xl leading-relaxed">
            UK operators lose millions every year to unnecessary downtime, inconsistent repair quality and lost institutional knowledge. The dashboards keep multiplying. The decisions don't get easier.
          </p>
        </div>
      </div>
    </section>
  );
}

function Product() {
  const features = [
    {
      tag: "01 · Diagnostic intelligence",
      title: "Ranked diagnoses, with the receipts.",
      body: "FleetMind fuses live vehicle state, your repair history and external technical knowledge — OEM manuals, fault databases — into ordered diagnoses with confidence scores.",
    },
    {
      tag: "02 · Decision engine",
      title: "Trade-offs, made explicit.",
      body: "Every recommended action is weighed on cost, downtime, parts availability and likelihood of success against your operational priorities.",
    },
    {
      tag: "03 · Conversational interface",
      title: "Ask in WhatsApp. Act in the bay.",
      body: "Web, mobile, Slack, WhatsApp and voice. No dashboards to learn, no forms to fill — your team just talks to the fleet.",
    },
    {
      tag: "04 · Outcome tracking",
      title: "A repair journal that remembers.",
      body: "Every action, every fix duration, every recurrence — captured as a structured signal that compounds into fleet-specific intelligence.",
    },
  ];
  return (
    <section id="product" className="bg-surface border-y border-rule">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <div className="max-w-3xl">
          <Tag>The product</Tag>
          <h2 className="mt-5 font-display text-4xl lg:text-6xl tracking-[-0.035em] text-ink leading-[1]">
            One system. Four moves that change <span className="font-editorial italic">everything.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-rule border border-rule rounded-2xl overflow-hidden">
          {features.map((f) => (
            <article key={f.tag} className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors">
              <p className="font-mono-tag text-accent">{f.tag}</p>
              <h3 className="mt-4 font-display text-2xl lg:text-[28px] tracking-[-0.02em] text-ink">
                {f.title}
              </h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{f.body}</p>
              <div className="mt-6 h-px w-12 bg-ink group-hover:w-24 transition-all duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { k: "Signal", v: "Telematics, DTCs, driver reports and sensor history are normalised into a decision context." },
    { k: "Decision", v: "FleetMind ranks faults, scores actions, and surfaces the recommendation with full evidence." },
    { k: "Outcome", v: "The action is logged. Time-to-fix, success and recurrence feed back into the model." },
    { k: "Learning", v: "Confidence, costs and success rates update — uniquely, for your fleet, every day." },
  ];
  return (
    <section id="how" className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <Tag>How it works</Tag>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl tracking-[-0.035em] text-ink leading-[1.02]">
            A closed loop from signal to learning.
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed max-w-md">
            Most platforms stop at visibility. FleetMind keeps going — and improves itself with every repair.
          </p>
          <div className="mt-10 rounded-2xl border border-rule overflow-hidden bg-card">
            <img
              src={heroNetwork}
              alt="FleetMind decision flow visualization"
              width={1600}
              height={1200}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>

        <ol className="lg:col-span-7 relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-rule" aria-hidden />
          {steps.map((s, i) => (
            <li key={s.k} className="relative pl-12 pb-12 last:pb-0">
              <span className="absolute left-0 top-1 h-6 w-6 rounded-full bg-background border border-ink flex items-center justify-center font-mono-tag text-[10px] text-ink">
                {i + 1}
              </span>
              <h3 className="font-display text-3xl lg:text-4xl tracking-[-0.03em] text-ink">{s.k}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed max-w-xl">{s.v}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Advantage() {
  return (
    <section id="advantage" className="relative bg-ink text-background overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <span className="font-mono-tag text-background/50">The strategic advantage</span>
            <h2 className="mt-5 font-display text-4xl lg:text-6xl tracking-[-0.035em] leading-[1]">
              The longer it runs, <br />
              the <span className="font-editorial italic text-accent-foreground/90">harder</span> it is to replace.
            </h2>
            <p className="mt-8 text-background/70 max-w-lg leading-relaxed">
              Outcome-linked learning means every action is connected to its result. Knowledge accumulates uniquely for your fleet — how it fails, and how it's best repaired. That moat doesn't transfer.
            </p>
          </div>

          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-px bg-background/10 border border-background/10 rounded-2xl overflow-hidden">
            {[
              ["Recommends", "specific actions, not just alerts"],
              ["Explains", "trade-offs in plain language"],
              ["Captures", "rationale and outcomes"],
              ["Learns", "from real-world results"],
            ].map(([k, v]) => (
              <div key={k} className="bg-ink p-8">
                <p className="font-display text-2xl text-background">{k}</p>
                <p className="mt-2 text-sm text-background/60">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function UkSection() {
  return (
    <section id="uk" className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden border border-rule">
          <img
            src={ukFleet}
            alt="UK commercial van fleet at a depot"
            width={1600}
            height={1000}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
        <div>
          <Tag>Built for the UK market</Tag>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl tracking-[-0.035em] text-ink leading-[1.02]">
            Tuned to British vans, depots and DVSA realities.
          </h2>
          <ul className="mt-8 space-y-5 text-ink-soft">
            {[
              ["Transit, Sprinter, Vivaro & Crafter intelligence", "Pre-trained on the vehicles that actually run UK roads."],
              ["DVSA-aligned record keeping", "Maintenance evidence in a format that survives an audit."],
              ["Workshop & roadside ready", "WhatsApp, voice and PWA — built for the bay, the cab and the van side."],
              ["GBP-native trade-offs", "Cost, downtime and SLA modelled in the units your operations team already uses."],
            ].map(([h, b]) => (
              <li key={h} className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <div>
                  <p className="text-ink font-medium">{h}</p>
                  <p className="text-sm mt-1 leading-relaxed">{b}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 lg:px-10 pb-12">
      <div className="relative rounded-3xl border border-rule bg-surface p-10 lg:p-16 overflow-hidden">
        <div
          className="absolute -top-32 -right-20 h-80 w-80 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--accent)" }}
        />
        <div className="relative grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Tag>Get started</Tag>
            <h2 className="mt-5 font-display text-4xl lg:text-6xl tracking-[-0.035em] text-ink leading-[1]">
              See FleetMind on <span className="font-editorial italic">your</span> fleet.
            </h2>
            <p className="mt-6 text-ink-soft max-w-xl leading-relaxed">
              30-minute working session with our team. We'll plug into a sample of your vehicles and show ranked decisions for real faults — no slideware.
            </p>
          </div>
          <form
            className="lg:col-span-5 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll be in touch shortly.");
            }}
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                required
                type="email"
                placeholder="you@fleet.co.uk"
                className="flex-1 h-12 rounded-full border border-rule bg-background px-5 text-[15px] text-ink placeholder:text-muted-foreground focus:outline-none focus:border-ink"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-ink px-6 text-[15px] font-medium text-background hover:bg-ink/90 transition-colors"
              >
                Book a demo
              </button>
            </div>
            <p className="text-xs text-muted-foreground pl-2">
              UK-based team · Reply within one working day
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <Problem />
      <Product />
      <HowItWorks />
      <Advantage />
      <UkSection />
      <Cta />
      <Footer />
    </main>
  );
}
