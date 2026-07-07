import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Phone, Smartphone, MapPin, Clock, Shield, Zap, Star, Car, Plane,
  Package, Users, CreditCard, ChevronDown, Check, Navigation, Sparkles,
  Award, HeartHandshake, Menu, X,
} from "lucide-react";
import heroTaxi from "@/assets/hero-taxi.jpg";
import driverImg from "@/assets/driver.jpg";
import interiorImg from "@/assets/interior.jpg";
import popradImg from "@/assets/poprad.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONES = [
  { label: "Telekom", number: "0911 334 773", tel: "+421911334773", color: "var(--telekom)" },
  { label: "Orange",  number: "0915 334 773", tel: "+421915334773", color: "var(--orange)" },
  { label: "O2",      number: "0948 334 773", tel: "+421948334773", color: "var(--o2)" },
];

const NAV = [
  { href: "#objednat", label: "Objednať" },
  { href: "#cena",     label: "Cenník" },
  { href: "#sluzby",   label: "Služby" },
  { href: "#o-nas",    label: "O nás" },
  { href: "#kontakt",  label: "Kontakt" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pb-32 sm:pb-0">
        <Hero />
        <Phones />
        <PriceCalculator />
        <Services />
        <Fleet />
        <WhyUs />
        <Coverage />
        <Testimonials />
        <AppDownload />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  );
}

/* ---------------------- HEADER ---------------------- */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-amber)" }}>
            <Car className="h-5 w-5" style={{ color: "var(--primary-foreground)" }} />
          </span>
          <span className="truncate font-display text-lg font-bold tracking-tight">
            ABA <span className="text-gradient-amber">TAXI</span>
          </span>
          <span className="ml-1 hidden rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:inline">Poprad</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              {n.label}
            </a>
          ))}
          <a href="tel:+421911334773" className="btn-amber ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
            <Phone className="h-4 w-4" /> 0911 334 773
          </a>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                 className="rounded-xl px-3 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------------- HERO ---------------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroTaxi} alt="ABA Taxi v Poprade s Vysokými Tatrami v pozadí" width={1600} height={1200} className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.10 0.01 260 / 0.4) 0%, oklch(0.12 0.01 260 / 0.9) 60%, var(--background) 100%)" }} />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Online 24/7 · Dispečing beží
        </div>

        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Taxi Poprad, <br className="hidden sm:block" />
          <span className="text-gradient-amber">rýchlo a férovo.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          Od roku 2010 vás vozíme po Poprade, Tatrách aj po Slovensku.
          Objednajte cez aplikáciu za 10 sekúnd, alebo zavolajte – auto máte pred domom
          zvyčajne do 5 minút.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a href="#objednat" className="btn-amber inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold sm:text-base">
            <Sparkles className="h-4 w-4" /> Objednať taxi
          </a>
          <a href="tel:+421911334773" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-card sm:text-base">
            <Phone className="h-4 w-4" /> 0911 334 773
          </a>
        </div>

        <dl className="mt-10 grid grid-cols-3 gap-3 sm:max-w-lg">
          {[
            { k: "15+", v: "rokov skúseností" },
            { k: "~5 min", v: "priemerný príjazd" },
            { k: "4,9★", v: "hodnotenie klientov" },
          ].map((s) => (
            <div key={s.k} className="card-surface rounded-2xl p-3 text-center sm:p-4">
              <dt className="text-gradient-amber font-display text-xl font-bold sm:text-2xl">{s.k}</dt>
              <dd className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------------------- PHONES ---------------------- */
function Phones() {
  return (
    <section id="objednat" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Volajte 24/7</p>
          <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">Vyberte si operátora</h2>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {PHONES.map((p) => (
          <a key={p.label} href={`tel:${p.tel}`}
             className="group relative overflow-hidden rounded-3xl p-5 transition-transform hover:-translate-y-1"
             style={{ background: `linear-gradient(135deg, ${p.color}, oklch(from ${p.color} calc(l - 0.1) c h))` }}>
            <div className="flex items-center justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-black/25 backdrop-blur">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <span className="rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">{p.label}</span>
            </div>
            <div className="mt-6 font-display text-3xl font-bold text-white">{p.number}</div>
            <div className="mt-1 text-sm text-white/80">Ťuknite pre okamžitý hovor</div>
            <div className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------------------- PRICE CALCULATOR ---------------------- */
const RATE_START = 2.0;     // EUR
const RATE_PER_KM = 0.90;   // EUR/km
const RATE_PER_MIN = 0.20;  // EUR/min waiting
const NIGHT_MULT = 1.2;

function PriceCalculator() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [km, setKm] = useState(5);
  const [pax, setPax] = useState(2);
  const [night, setNight] = useState(false);
  const [luggage, setLuggage] = useState(false);

  const price = useMemo(() => {
    let base = RATE_START + km * RATE_PER_KM;
    if (pax > 4) base += 2;
    if (luggage) base += 1;
    if (night) base *= NIGHT_MULT;
    return base;
  }, [km, pax, night, luggage]);

  const eta = Math.max(3, Math.round(km * 1.8));

  return (
    <section id="cena" className="mx-auto mt-16 max-w-6xl px-4 sm:mt-24 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Cena vopred</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Vypočítajte si jazdu za pár sekúnd</h2>
          <p className="mt-3 text-muted-foreground">
            Transparentné ceny bez skrytých poplatkov. Odhad zahŕňa nástupnú sadzbu,
            kilometre a prípadné príplatky. Konečnú cenu vždy potvrdí dispečing.
          </p>
          <div className="card-surface mt-6 space-y-4 rounded-3xl p-5 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Odkiaľ" icon={<MapPin className="h-4 w-4" />} value={from} onChange={setFrom} placeholder="napr. Železničná stanica Poprad" />
              <Field label="Kam"    icon={<Navigation className="h-4 w-4" />} value={to} onChange={setTo} placeholder="napr. Aquacity Poprad" />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Vzdialenosť</span>
                <span className="font-semibold">{km} km</span>
              </div>
              <input type="range" min={1} max={80} value={km} onChange={(e) => setKm(+e.target.value)}
                     className="w-full accent-[oklch(0.85_0.17_88)]" />
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <Counter label="Cestujúci" value={pax} setValue={setPax} min={1} max={8} icon={<Users className="h-4 w-4" />} />
              <Toggle label="Nočná jazda" hint="22:00 – 6:00" active={night} onChange={setNight} />
              <Toggle label="Batožina navyše" hint="+ 1 €" active={luggage} onChange={setLuggage} />
            </div>
          </div>
        </div>

        <div className="card-surface relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-amber)" }} />
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Odhad ceny
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-6xl font-bold text-gradient-amber sm:text-7xl">
                {price.toFixed(2)}
              </span>
              <span className="font-display text-2xl font-semibold text-muted-foreground">€</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {from && to ? <>Trasa <b className="text-foreground">{from}</b> → <b className="text-foreground">{to}</b></> : "Zadajte trasu pre presnejší odhad"}
            </div>

            <ul className="mt-6 space-y-2 text-sm">
              <Row k="Nástupná sadzba" v={`${RATE_START.toFixed(2)} €`} />
              <Row k={`${km} km × ${RATE_PER_KM.toFixed(2)} €`} v={`${(km * RATE_PER_KM).toFixed(2)} €`} />
              {pax > 4 && <Row k="Skupina 5+ osôb" v="+ 2,00 €" />}
              {luggage && <Row k="Batožina navyše" v="+ 1,00 €" />}
              {night && <Row k="Nočný príplatok (×1.2)" v="—" />}
              <Row k="Odhadovaný príjazd" v={`~${eta} min`} strong />
            </ul>
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <a href="tel:+421911334773" className="btn-amber inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold">
              <Phone className="h-4 w-4" /> Objednať telefonicky
            </a>
            <a href="#app" className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:bg-muted">
              <Smartphone className="h-4 w-4" /> Cez aplikáciu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, icon }: { label: string; value: string; onChange: (v: string) => void; placeholder: string; icon: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">{icon}{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
             className="w-full rounded-xl border border-border bg-background/60 px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20" />
    </label>
  );
}
function Counter({ label, value, setValue, min, max, icon }: { label: string; value: number; setValue: (n: number) => void; min: number; max: number; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-3">
      <div className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">{icon}{label}</div>
      <div className="flex items-center justify-between">
        <button onClick={() => setValue(Math.max(min, value - 1))} className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-muted">−</button>
        <span className="font-display text-lg font-bold">{value}</span>
        <button onClick={() => setValue(Math.min(max, value + 1))} className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-muted">+</button>
      </div>
    </div>
  );
}
function Toggle({ label, hint, active, onChange }: { label: string; hint?: string; active: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={() => onChange(!active)}
      className={`rounded-xl border p-3 text-left transition-colors ${active ? "border-primary/60 bg-primary/10" : "border-border bg-background/60 hover:bg-muted"}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{label}</span>
        <span className={`grid h-5 w-9 place-items-center rounded-full transition-colors ${active ? "bg-primary" : "bg-muted"}`}>
          <span className={`h-4 w-4 rounded-full bg-background transition-transform ${active ? "translate-x-2" : "-translate-x-2"}`} />
        </span>
      </div>
      {hint && <div className="mt-0.5 text-[11px] text-muted-foreground">{hint}</div>}
    </button>
  );
}
function Row({ k, v, strong }: { k: string; v: string; strong?: boolean }) {
  return (
    <li className={`flex items-center justify-between border-b border-border/60 pb-2 last:border-none ${strong ? "text-foreground" : "text-muted-foreground"}`}>
      <span>{k}</span><span className={strong ? "font-semibold" : ""}>{v}</span>
    </li>
  );
}

/* ---------------------- SERVICES ---------------------- */
const SERVICES = [
  { icon: Car,      title: "Mestské jazdy",     text: "Rýchle presuny po Poprade a okolí. Auto pred dverami zvyčajne do 5 minút." },
  { icon: Plane,    title: "Letiská a stanice", text: "Košice, Poprad-Tatry, Krakov, Viedeň. Fixná cena, sledovanie letu, čakanie zdarma." },
  { icon: Package,  title: "Kuriér a rozvoz",   text: "Doručíme balík, dokumenty alebo nákup diskrétne a načas kdekoľvek v regióne." },
  { icon: Users,    title: "Skupinové jazdy",   text: "Vozidlá pre 4 – 8 osôb. Ideálne na svadby, výlety a firemné akcie." },
  { icon: HeartHandshake, title: "Firemné účty", text: "Mesačná fakturácia, prioritný dispečing, reporting pre zamestnancov a klientov." },
  { icon: CreditCard, title: "Platba kartou",   text: "V hotovosti, kartou v aute alebo online cez aplikáciu. Bez skrytých poplatkov." },
];

function Services() {
  return (
    <section id="sluzby" className="mx-auto mt-20 max-w-6xl px-4 sm:mt-28 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Čo pre vás robíme</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Služby na pro úrovni</h2>
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div key={s.title} className="card-surface group relative overflow-hidden rounded-3xl p-5 transition-transform hover:-translate-y-1">
            <div className="grid h-11 w-11 place-items-center rounded-2xl" style={{ background: "var(--gradient-amber)" }}>
              <s.icon className="h-5 w-5" style={{ color: "var(--primary-foreground)" }} />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------- FLEET ---------------------- */
function Fleet() {
  const cars = [
    { img: heroTaxi, name: "Komfort sedan", cap: "1–4 osoby", tags: ["Klimatizácia", "Bezpečnostné sedačky na požiadanie", "USB nabíjanie"] },
    { img: interiorImg, name: "Prémium interiér", cap: "1–4 osoby", tags: ["Kožené sedadlá", "Ticho a klimatizácia", "Wi-Fi"] },
    { img: driverImg, name: "Van 5–8 osôb", cap: "Skupiny a batožina", tags: ["Veľký kufor", "Detské sedačky", "Preprava lyží / bicyklov"] },
  ];
  return (
    <section className="mx-auto mt-20 max-w-6xl px-4 sm:mt-28 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Vozový park</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Čisté, moderné, pripravené</h2>
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {cars.map((c) => (
          <article key={c.name} className="card-surface overflow-hidden rounded-3xl">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                <span className="font-display text-lg font-bold">{c.name}</span>
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs backdrop-blur">{c.cap}</span>
              </div>
            </div>
            <ul className="space-y-1.5 p-4 text-sm text-muted-foreground">
              {c.tags.map((t) => (
                <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------------- WHY US ---------------------- */
function WhyUs() {
  const items = [
    { icon: Zap, title: "Rýchlosť",     text: "Inteligentný dispečing prideľuje najbližšie auto v sekundách." },
    { icon: Shield, title: "Bezpečnosť", text: "Preverení vodiči, kontrolovaný technický stav vozidiel." },
    { icon: Award, title: "Kvalita",     text: "Od roku 2010 rastieme vďaka spokojným zákazníkom." },
    { icon: Clock, title: "24/7",        text: "Dispečing beží nonstop. Deň, noc, sviatky – sme tu." },
  ];
  return (
    <section id="o-nas" className="mx-auto mt-20 max-w-6xl px-4 sm:mt-28 sm:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <img src={driverImg} alt="Profesionálny vodič ABA Taxi" loading="lazy" className="rounded-3xl object-cover shadow-[var(--shadow-card)]" />
          <div className="card-surface absolute -bottom-6 -right-4 hidden max-w-xs rounded-2xl p-4 sm:block">
            <div className="flex items-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-2 text-sm">„Za 15 rokov nás priviezli tisíckrát – vždy načas.“</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Prečo ABA TAXI</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Poprad, ktorý poznáme naspamäť</h2>
          <p className="mt-3 text-muted-foreground">
            Sme lokálna taxislužba s dušou. Spájame skúsenosť dispečerov a vodičov
            s modernými technológiami – aby ste dostali auto rýchlo, cestu bezpečne
            a cenu férovo.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {items.map((i) => (
              <div key={i.title} className="card-surface rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                    <i.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-display font-semibold">{i.title}</div>
                    <div className="text-xs text-muted-foreground">{i.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- COVERAGE ---------------------- */
function Coverage() {
  const places = [
    "Poprad", "Vysoké Tatry", "Štrbské Pleso", "Tatranská Lomnica", "Starý Smokovec",
    "Svit", "Kežmarok", "Levoča", "Spišská Nová Ves", "Aquacity Poprad",
    "Letisko Poprad-Tatry", "Letisko Košice", "Letisko Krakov",
  ];
  return (
    <section className="relative mx-auto mt-20 max-w-6xl px-4 sm:mt-28 sm:px-6">
      <div className="card-surface relative overflow-hidden rounded-3xl">
        <img src={popradImg} alt="Poprad v noci" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Kam vás odvezieme</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Poprad, Tatry a celé Slovensko</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Krátke cesty po meste aj diaľkové trasy na letiská a do zahraničia. Fixné ceny
            na dlhé jazdy vypočítame na požiadanie.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {places.map((p) => (
              <li key={p} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-sm backdrop-blur">
                <MapPin className="h-3.5 w-3.5 text-primary" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- TESTIMONIALS ---------------------- */
function Testimonials() {
  const rs = [
    { n: "Martina K.", t: "Objednala som cez appku, auto prišlo do 4 minút. Vodič milý, cena férová.", s: 5 },
    { n: "Peter H.",   t: "Odviezli nás z Popradu do Krakova bez stresu, fixná cena a auto ako nové.", s: 5 },
    { n: "Zuzana M.",  t: "Používame ich pre firmu už roky. Mesačná faktúra, žiadne komplikácie.",  s: 5 },
    { n: "Ivan D.",    t: "Nočný návrat z Tatier – dispečing okamžite pomohol. Odporúčam.",         s: 5 },
  ];
  return (
    <section className="mx-auto mt-20 max-w-6xl px-4 sm:mt-28 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Recenzie</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Čo hovoria naši zákazníci</h2>
        </div>
        <div className="hidden items-center gap-1 text-primary sm:flex">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
          <span className="ml-2 text-sm text-muted-foreground">4,9 / 5 · overené jazdy</span>
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {rs.map((r) => (
          <figure key={r.n} className="card-surface flex flex-col rounded-3xl p-5">
            <div className="flex items-center gap-1 text-primary">
              {[...Array(r.s)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <blockquote className="mt-3 flex-1 text-sm text-foreground/90">„{r.t}“</blockquote>
            <figcaption className="mt-4 text-xs font-semibold text-muted-foreground">— {r.n}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------------------- APP DOWNLOAD ---------------------- */
function AppDownload() {
  return (
    <section id="app" className="mx-auto mt-20 max-w-6xl px-4 sm:mt-28 sm:px-6">
      <div className="card-surface relative overflow-hidden rounded-3xl p-6 sm:p-10">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-amber)" }} />
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Aplikácia ABA TAXI</p>
            <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Objednávka na dva ťuknutia</h2>
            <p className="mt-3 text-muted-foreground">
              Živé sledovanie vozidla, história jázd, uložené obľúbené miesta,
              odhad ceny vopred a platba kartou. Všetko v jednej appke.
            </p>
            <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
              {["Živá poloha auta", "Odhad ceny vopred", "Platba kartou", "História a bloky", "Obľúbené miesta", "Notifikácie príjazdu"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary" />{f}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://play.google.com/store/apps/details?id=sk.abataxi.customers" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 hover:bg-muted">
                <Smartphone className="h-6 w-6" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">Stiahnuť na</span>
                  <span className="font-display text-base font-semibold">Google Play</span>
                </span>
              </a>
              <a href="https://itunes.apple.com/us/app/taxi-poprad/id1449139981" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 hover:bg-muted">
                <Smartphone className="h-6 w-6" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">Stiahnuť na</span>
                  <span className="font-display text-base font-semibold">App Store</span>
                </span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="float-slow relative mx-auto aspect-[9/19] w-56 rounded-[2.5rem] border-4 border-border bg-black p-2 shadow-[var(--shadow-card)] sm:w-64">
      <div className="relative h-full w-full overflow-hidden rounded-[2rem]" style={{ background: "linear-gradient(180deg, oklch(0.18 0.02 260), oklch(0.13 0.01 260))" }}>
        <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="px-4 pt-10">
          <div className="text-[10px] uppercase tracking-widest text-primary">ABA TAXI</div>
          <div className="mt-1 font-display text-lg font-bold text-white">Objednať jazdu</div>
          <div className="mt-4 space-y-2">
            <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-[10px] text-white/80">📍 Železničná stanica</div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-[10px] text-white/80">🎯 Aquacity Poprad</div>
          </div>
          <div className="mt-3 rounded-xl bg-white/5 p-3">
            <div className="text-[10px] text-white/60">Odhad ceny</div>
            <div className="text-gradient-amber font-display text-2xl font-bold">6,50 €</div>
            <div className="text-[10px] text-white/60">Príjazd ~4 min</div>
          </div>
          <button className="btn-amber mt-4 w-full rounded-xl py-2 text-xs font-semibold">Potvrdiť</button>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- FAQ ---------------------- */
const FAQ = [
  { q: "Ako rýchlo príde auto?",         a: "V Poprade zvyčajne do 3 – 7 minút. V špičke alebo mimo mesta o niečo dlhšie – presný čas potvrdí dispečing." },
  { q: "Aké sú ceny?",                   a: "Nástupná sadzba 2,00 €, ~0,90 €/km, čakanie ~0,20 €/min. Nočný príplatok 22:00 – 6:00. Dlhé trasy na fixnú cenu." },
  { q: "Dá sa platiť kartou?",           a: "Áno – kartou v aute aj online cez aplikáciu. Prijímame aj hotovosť." },
  { q: "Prepravujete zvieratá?",         a: "Áno, malé zvieratá v prenoske bez príplatku. Väčších psov nahláste vopred, pridelíme vhodné auto." },
  { q: "Máte detské sedačky?",           a: "Máme. Pri objednávke prosím uveďte vek dieťaťa, aby sme priradili správnu sedačku." },
  { q: "Firemné faktúry?",               a: "Áno, firemné účty s mesačnou fakturáciou a reportingom pripravíme na mieru." },
];
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto mt-20 max-w-3xl px-4 sm:mt-28 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</p>
      <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Časté otázky</h2>
      <div className="mt-6 divide-y divide-border rounded-3xl border border-border bg-card/60">
        {FAQ.map((f, i) => (
          <button key={f.q} onClick={() => setOpen(open === i ? null : i)}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 px-5 py-4 text-left">
            <div className="min-w-0">
              <div className="font-display font-semibold">{f.q}</div>
              {open === i && <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>}
            </div>
            <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180 text-primary" : ""}`} />
          </button>
        ))}
      </div>
    </section>
  );
}

/* ---------------------- CONTACT ---------------------- */
function Contact() {
  return (
    <section id="kontakt" className="mx-auto mt-20 max-w-6xl px-4 sm:mt-28 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="card-surface rounded-3xl p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Kontakt</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Sme tu 24/7</h2>
          <div className="mt-6 space-y-3">
            {PHONES.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`}
                 className="flex items-center justify-between rounded-2xl border border-border p-3 hover:bg-muted">
                <span className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl text-white" style={{ background: p.color }}>
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-widest text-muted-foreground">{p.label}</span>
                    <span className="font-display font-semibold">{p.number}</span>
                  </span>
                </span>
                <ChevronDown className="h-5 w-5 -rotate-90 text-muted-foreground" />
              </a>
            ))}
          </div>
          <div className="mt-6 space-y-1.5 text-sm text-muted-foreground">
            <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" />Stanovisko: Jiřího Wolkera, 058 01 Poprad, Slovensko</div>
            <div className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-primary" />Dispečing: 24 hodín denne, 7 dní v týždni</div>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border">
          <iframe
            title="ABA TAXI Poprad – mapa"
            src="https://www.openstreetmap.org/export/embed.html?bbox=20.28%2C49.05%2C20.32%2C49.07&layer=mapnik&marker=49.059512%2C20.297928"
            className="h-[380px] w-full sm:h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------------- FOOTER ---------------------- */
function Footer() {
  return (
    <footer className="mx-auto mt-20 max-w-6xl px-4 pb-10 sm:px-6">
      <div className="border-t border-border pt-8">
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: "var(--gradient-amber)" }}>
                <Car className="h-5 w-5" style={{ color: "var(--primary-foreground)" }} />
              </span>
              <span className="font-display text-lg font-bold">ABA <span className="text-gradient-amber">TAXI</span> Poprad</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Moderná taxislužba v Poprade od roku 2010. Rýchlo, bezpečne, férovo.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {PHONES.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted">
                {p.label}: {p.number}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} ABA TAXI Poprad. Všetky práva vyhradené.</div>
      </div>
    </footer>
  );
}

/* ---------------------- STICKY CALL BAR (mobile) ---------------------- */
function StickyCallBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 sm:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="card-surface flex items-center gap-2 rounded-2xl p-2 shadow-[var(--shadow-card)]">
        <a href="tel:+421911334773" className="btn-amber pulse-ring flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold">
          <Phone className="h-4 w-4" /> Volať 0911 334 773
        </a>
        <a href="#objednat" className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background">
          <Sparkles className="h-5 w-5 text-primary" />
        </a>
      </div>
    </div>
  );
}
