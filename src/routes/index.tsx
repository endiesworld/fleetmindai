import { createFileRoute } from "@tanstack/react-router";
import heroNetwork from "@/assets/hero-network.jpg";
import heroVan from "@/assets/new-van-image.png";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FleetMind — Fleet Reliability Intelligence Platform" },
      {
        name: "description",
        content:
          "FleetMind turns raw vehicle signals into evidence-based reliability actions and continuously improves fleet operations using real-world outcomes.",
      },
      { property: "og:title", content: "FleetMind — Fleet Reliability Intelligence Platform" },
      {
        property: "og:description",
        content:
          "The reliability intelligence layer between telematics systems and frontline fleet execution.",
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
    <section className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-14 lg:pt-24 lg:pb-18">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-6 reveal">
            <Tag>Fleet Reliability Intelligence Platform</Tag>
            <h1 className="mt-6 font-display text-[44px] sm:text-[60px] lg:text-[76px] leading-[0.95] tracking-[-0.04em] text-ink">
              From{" "}
              <span className="font-editorial font-bold italic" style={{ color: "var(--red)" }}>
                signal
              </span>
              <br />
              to{" "}
              <span className="font-editorial italic" style={{ color: "var(--green)" }}>
                decision
              </span>
              <br />
              to{" "}
              <span className="inline-flex items-baseline gap-3 font-editorial italic text-ink">
                outcome
                <span
                  className="outcome-check font-sans text-[0.72em] not-italic"
                  style={{ color: "var(--green)" }}
                  aria-hidden
                >
                  ✓
                </span>
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-ink-soft">
              FleetMind operates between telematics systems and frontline fleet execution. It
              transforms raw vehicle signals into evidence-based reliability actions, delivers that
              intelligence through natural conversation, and learns from real-world operational
              outcomes.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[15px] font-medium text-background shadow-[var(--shadow-elevated)] transition-opacity hover:opacity-95"
              >
                See the decision loop
                <span aria-hidden>→</span>
              </a>
              <a
                href="#capabilities"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-rule px-6 text-[15px] text-ink hover:bg-surface transition-colors"
              >
                Explore capabilities
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
              <div>
                <p className="font-display text-2xl" style={{ color: "var(--red)" }}>
                  Alert
                </p>
                <p className="text-xs mt-1">Vehicle signal</p>
              </div>
              <div className="h-8 w-px bg-rule" />
              <div>
                <p className="font-display text-2xl" style={{ color: "var(--green)" }}>
                  Action
                </p>
                <p className="text-xs mt-1">Evidence-backed operation</p>
              </div>
              <div className="h-8 w-px bg-rule" />
              <div>
                <p className="font-display text-2xl text-ink">Learn</p>
                <p className="text-xs mt-1">Outcome improves the next decision</p>
              </div>
            </div>
          </div>

          <div className="reveal lg:col-span-6 lg:self-end" style={{ animationDelay: "120ms" }}>
            <div className="relative">
              <div className="relative h-[430px] overflow-hidden rounded-b-xl bg-surface shadow-[0_34px_80px_-48px_color-mix(in_oklab,var(--ink)_62%,transparent)] sm:h-[520px] lg:h-[620px] lg:rounded-b-2xl">
                <img
                  src={heroVan}
                  alt="Delivery vehicle with FleetMind reliability intelligence overlays"
                  width={1240}
                  height={1268}
                  className="h-full w-full scale-[1.18] object-cover object-[50%_40%]"
                />
              </div>
            </div>
          </div>
        </div>
        <Capabilities />
      </div>
    </section>
  );
}

function Capabilities() {
  const features = [
    {
      tag: "01 · Reliability intelligence",
      title: "Ranked reliability insights using service history, OEM knowledge and fault data.",

      color: "var(--green)",
    },
    {
      tag: "02 · Decision engine",
      title: "Operational actions evaluated against real constraints.",

      color: "var(--red)",
    },
    {
      tag: "03 · Human-in-the-loop learning",
      title: "Approvals, rejections and changes become learning signals.",

      color: "var(--ink)",
    },
    {
      tag: "04 · Conversational interface",
      title: "Accessible through natural conversation on any device.",

      color: "var(--green)",
    },
    {
      tag: "05 · Outcome tracking",
      title: "An outcome journal that records what actually happened.",

      color: "var(--green)",
    },
    {
      tag: "06 · Continuous learning",
      title: "Every outcome improves future decisions.",

      color: "var(--red)",
    },
  ];
  const slideFeatures = [...features, ...features];

  return (
    <div id="capabilities" className="pt-12 lg:pt-14">
      <div className="max-w-3xl">
        <Tag>Platform capabilities</Tag>
      </div>

      <div className="capability-slider mt-8 overflow-hidden py-3">
        <div className="capability-track flex w-max gap-4">
          {slideFeatures.map((f, index) => (
            <article
              key={`${f.tag}-${index}`}
              className="relative min-h-[170px] w-[64vw] max-w-[245px] shrink-0 overflow-hidden rounded-lg border border-rule bg-background p-4 shadow-[var(--shadow-soft)] transition-colors hover:bg-card sm:w-[220px] lg:w-[235px]"
              aria-hidden={index >= features.length ? true : undefined}
            >
              <span className="absolute top-0 left-0 h-0.5 w-12" style={{ background: f.color }} />
              <p className="font-mono text-[0.58rem] font-normal uppercase tracking-[0.03em] text-muted-foreground">
                {f.tag}
              </p>
              <h3 className="mt-3 text-[15px] font-medium leading-snug tracking-[-0.01em] text-ink-soft lg:text-base">
                {f.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      k: "Signal",
      v: "Telematics, DTCs, driver reports, sensor history and service records are normalised into an operational context.",
    },
    {
      k: "Decision",
      v: "FleetMind ranks reliability risks, evaluates operational options and recommends the best action with supporting evidence.",
    },
    {
      k: "Outcome",
      v: "The operational action, resolution time, recurrence and human rationale are captured after execution.",
    },
    {
      k: "Learning",
      v: "Reliability confidence, action success rates and fleet-specific patterns improve the next recommendation.",
    },
  ];
  return (
    <section id="how" className="bg-surface">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 py-14 lg:grid-cols-12 lg:px-10 lg:py-18">
        <div className="lg:col-span-6 lg:sticky lg:top-24">
          <Tag>How it works</Tag>
          <h2 className="mt-5 max-w-md font-display text-3xl leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl">
            The outcome-linked{" "}
            <span className="font-editorial italic" style={{ color: "var(--green)" }}>
              learning loop.
            </span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
            FleetMind’s core advantage is not visibility alone. Each outcome feeds the loop and
            improves the next fleet reliability decision.
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

        <ol className="relative lg:col-span-6">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-rule" aria-hidden />
          {steps.map((s, i) => (
            <li
              key={s.k}
              className="workflow-step relative pb-12 pl-12 last:pb-0"
              style={{ animationDelay: `${i * 3}s` }}
            >
              <span className="absolute left-0 top-1 h-6 w-6 rounded-full bg-background border border-ink flex items-center justify-center font-mono-tag text-[10px] text-ink">
                {i + 1}
              </span>
              <h3 className="font-display text-3xl lg:text-4xl tracking-[-0.03em] text-ink">
                {s.k}
              </h3>
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
    <section id="advantage" className="relative overflow-hidden bg-surface text-ink">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-18">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="font-mono-tag text-muted-foreground">Differentiation</span>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.04] tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
              Traditional systems stop at{" "}
              <span className="font-editorial italic" style={{ color: "var(--red)" }}>
                visibility.
              </span>{" "}
              FleetMind closes the{" "}
              <span className="font-editorial italic" style={{ color: "var(--green)" }}>
                loop.
              </span>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-ink-soft">
              The system moves from signal to decision to outcome to learning, so every real-world
              result becomes part of the fleet reliability intelligence layer.
            </p>
          </div>

          <div className="relative h-[210px] overflow-hidden rounded-2xl border border-rule bg-background shadow-[var(--shadow-soft)] lg:col-span-6">
            {[
              ["Recommends", "specific actions, not just alerts"],
              ["Explains", "cost, downtime and success trade-offs"],
              ["Captures", "rationale and outcomes"],
              ["Delivers", "intelligence through conversation"],
            ].map(([k, v], index) => (
              <div
                key={k}
                className="advantage-flash-card absolute inset-0 flex flex-col justify-center p-8"
                style={{ animationDelay: `${index * 3}s` }}
              >
                <p className="font-mono-tag text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 font-display text-3xl tracking-[-0.03em] text-ink">{k}</p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StrategicAdvantage() {
  return (
    <section id="strategy" className="bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-12 lg:px-10 lg:py-18">
        <div className="lg:col-span-6">
          <Tag>Strategic advantage</Tag>
          <h2 className="mt-5 max-w-xl font-display text-3xl leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl">
            Outcome-linked learning compounds into{" "}
            <span className="font-editorial italic" style={{ color: "var(--green)" }}>
              fleet-specific intelligence.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Over time, FleetMind learns which reliability actions work best for a given situation:
            the asset, fault pattern, operating context, cost profile, team judgement and
            operational result. That knowledge improves future decisions instead of being lost after
            the work order closes.
          </p>
        </div>
        <div className="rounded-2xl border border-rule bg-background p-7 shadow-[var(--shadow-soft)] lg:col-span-6 lg:p-9">
          <p className="font-mono-tag text-muted-foreground">Knowledge captured</p>
          <ul className="mt-6 divide-y divide-rule text-ink-soft">
            {[
              [
                "What failed",
                "Vehicle state, fault codes, driver reports and reliability evidence.",
              ],
              [
                "What was decided",
                "Approved, rejected or modified actions and the rationale behind them.",
              ],
              ["What happened", "Resolution time, recurrence, cost impact and action success."],
              [
                "What improves",
                "Confidence scores, action success rates and future recommendations.",
              ],
            ].map(([h, b]) => (
              <li key={h} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <div>
                  <p className="text-sm font-medium text-ink">{h}</p>
                  <p className="mt-1 text-sm leading-relaxed">{b}</p>
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
    <section id="contact" className="bg-surface px-6 pb-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 py-12 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-6">
          <Tag>Get started</Tag>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.06] tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
            See how FleetMind can{" "}
            <span className="font-editorial italic" style={{ color: "var(--green)" }}>
              reason
            </span>{" "}
            through your fleet reliability{" "}
            <span className="font-editorial italic" style={{ color: "var(--red)" }}>
              decisions.
            </span>
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
            Bring telematics alerts, service history or recurring reliability issues. FleetMind
            builds operational context, ranks risks, recommends actions and turns outcomes into
            learning.
          </p>
        </div>
        <form
          className="rounded-2xl bg-card p-5 shadow-[var(--shadow-elevated)] sm:p-6 lg:col-span-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks — we'll be in touch shortly.");
          }}
        >
          <p className="font-mono-tag text-muted-foreground">Demo request</p>
          <div className="mt-5 flex flex-col gap-3">
            <input
              required
              type="email"
              placeholder="you@fleet.com"
              className="h-11 rounded-xl bg-background px-4 text-sm text-ink shadow-[inset_0_0_0_1px_var(--rule)] placeholder:text-muted-foreground focus:outline-none focus:shadow-[inset_0_0_0_1px_var(--ink)]"
            />
            <button
              type="submit"
              className="h-11 rounded-xl bg-ink px-5 text-sm font-medium text-background transition-colors hover:bg-ink/90"
            >
              Book a demo
            </button>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Operator-focused team · Reply within one working day
          </p>
        </form>
      </div>
      <div className="mx-auto max-w-7xl overflow-hidden py-4">
        <div className="marquee-reverse cta-marquee flex w-max gap-10 whitespace-nowrap font-display text-base tracking-tight text-ink-soft/70">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="font-mono-tag">Built for teams managing</span>
              <span>·</span>
              <span>Telematics alerts</span>
              <span>·</span>
              <span>Service history</span>
              <span>·</span>
              <span>Fault databases</span>
              <span>·</span>
              <span>OEM manuals</span>
              <span>·</span>
              <span>Operational decisions</span>
              <span>·</span>
              <span>Reliability outcomes</span>
              <span>·</span>
              <span>Institutional knowledge</span>
              <span>·</span>
            </div>
          ))}
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
      <HowItWorks />
      <Advantage />
      <StrategicAdvantage />
      <Cta />
      <Footer />
    </main>
  );
}
