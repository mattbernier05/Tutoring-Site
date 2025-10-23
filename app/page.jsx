"use client";
import { useState } from "react";
import {
  Calendar,
  Mail,
  Phone,
  CheckCircle,
  Star,
  BookOpen,
  GraduationCap,
  Timer,
  Sparkles,
  LineChart,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";


const NAME = "Matt Bernier";
const EMAIL = "mattbernier05@gmail.com";
const PHONE = "(475) 228-5944";
const CALENDLY = "https://calendly.com/mattbernier05/30min";
const HEADSHOT = "/Mainheadshotpic.jpg";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <Header name={NAME} calendly={CALENDLY} email={EMAIL} />
      <Hero name={NAME} calendly={CALENDLY} headshot={HEADSHOT} />
      <CredBar />
      <Services />
      <Results />
      <Process />
      <Pricing calendly={CALENDLY} />
      <Testimonials />
      <FAQ />
      <AboutSection name={NAME} headshot={HEADSHOT} />
      <Contact calendly={CALENDLY} email={EMAIL} phone={PHONE} />
      <Footer name={NAME} calendly={CALENDLY} />
    </main>
  );
}

function Header({ name, calendly, email }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center shadow-sm">
            <GraduationCap size={18} />
          </div>
          <div className="font-semibold tracking-tight">{name} Tutoring</div>
        </div>

        {/* Right side actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/about"
            className="text-slate-700 hover:underline text-sm mr-1"
          >
            Philosophy
          </a>
          <a
            href={calendly}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm"
          >
            <Calendar size={16} /> Book Free Consult
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-slate-300 hover:bg-slate-100 transition"
          >
            <Mail size={16} /> Email
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ name, calendly, headshot }) {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-10 pb-6 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
          <Sparkles size={14} className="text-yellow-500" /> Online • Math •
          English • SAT/ACT
        </span>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
  Online tutoring that builds confidence and results
</h1>

<p className="mt-3 text-slate-600 leading-relaxed">
  I’m a Wake Forest sophomore from Fairfield, CT offering{" "}
  <strong>online Math (Algebra → Calculus)</strong>,{" "}
  <strong>English/Writing</strong>, and <strong>SAT/ACT prep</strong> for
  middle and high school students. Clear explanations, targeted practice, and
  parent communication—so progress is visible each week.
</p>

<ul className="mt-4 space-y-2 text-slate-700">
  {[
    "Free 30-minute consult + mini diagnostic to pinpoint focus areas",
    "Interactive sessions (not lectures) with strategies that actually stick",
    "Weekly progress updates for parents • Flexible online scheduling",
  ].map((t, i) => (
    <li key={i} className="flex items-start gap-2">
      <CheckCircle className="text-emerald-500 mt-0.5" size={18} />
      <span>{t}</span>
    </li>
  ))}
</ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={calendly}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition shadow"
          >
            <Calendar size={18} /> Book your free consult
          </a>
          <a
            href="#faq"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 hover:bg-slate-100 transition"
          >
            <ShieldCheck size={18} /> What parents ask
          </a>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Launch rates: <strong>$35/hr</strong> Math/English •{" "}
          <strong>$45/hr</strong> SAT/ACT
        </p>
      </div>
      <div className="relative">
        <img
          src={headshot}
          alt="Matt Bernier — online math, writing, and SAT/ACT tutor"
          className="w-full h-[380px] object-cover rounded-3xl shadow-md"
        />
      </div>
    </section>
  );
}

function CredBar() {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-6 grid sm:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-3">
          <Star className="text-amber-500" size={18} />
          <span>Recent test-taker strategies</span>
        </div>
        <div className="flex items-center gap-3">
          <Timer className="text-emerald-600" size={18} />
          <span>Fast response & flexible scheduling</span>
        </div>
        <div className="flex items-center gap-3">
          <BookOpen className="text-sky-600" size={18} />
          <span>Constant parent communication</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const data = [
    {
      title: "Math (Algebra → Calculus)",
      subtitle: "Master core skills and problem-solving with targeted practice.",
      items: ["Algebra I/II", "Geometry", "Precalculus/Calculus", "Optimized practice plans"],
    },
    {
      title: "English / Writing",
      subtitle: "Stronger essays, grammar, and reading comprehension.",
      items: ["Grammar & style", "Essay planning", "Reading strategies", "College essays (structure)"],
    },
    {
      title: "SAT / ACT",
      subtitle: "Raise scores with timing, strategy, and focused review.",
      items: ["Targeted diagnostics", "Timing & strategies", "Official practice review", "Test-day plan"],
    },
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold tracking-tight">What I Tutor</h2>
      <div className="mt-5 grid md:grid-cols-3 gap-4">
        {data.map((card, idx) => (
          <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-semibold">{card.title}</h3>
            {card.subtitle && (
              <p className="mt-1 text-slate-600 text-sm">{card.subtitle}</p>
            )}
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              {card.items.map((it, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <CheckCircle size={16} className="text-emerald-500 mt-0.5" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold tracking-tight">Recent wins</h2>
        <div className="mt-5 grid sm:grid-cols-3 gap-4 text-sm">
          {[
            { n: "+130", label: "SAT increase in 8 weeks" },
            { n: "+1 letter", label: "Algebra grade in 6 weeks" },
            { n: "4.8/5", label: "Parent satisfaction" },
          ].map((k, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3"
            >
              <LineChart className="text-slate-900" />
              <div>
                <div className="text-2xl font-extrabold">{k.n}</div>
                <div className="text-slate-600">{k.label}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-500">
          * Examples are representative; results vary by student effort and time
          to test.
        </p>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      title: "Free consult (30m)",
      body: "Goals, scheduling, and a 5–10m micro-diagnostic.",
    },
    {
      title: "Plan & kickoff",
      body: "Weekly sessions + targeted practice; shared progress doc.",
    },
    {
      title: "Visible progress",
      body: "Brief parent summary after each session; adjust as needed.",
    },
  ];
  return (
    <section id="how" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold tracking-tight">How it works</h2>
      <div className="mt-5 grid md:grid-cols-3 gap-4 text-sm">
        {steps.map((s, i) => (
          <div
            key={i}
            className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm"
          >
            <div className="text-xs font-semibold text-slate-500">
              Step {i + 1}
            </div>
            <div className="mt-1 font-semibold">{s.title}</div>
            <p className="mt-1 text-slate-700">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing({ calendly }) {
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold tracking-tight">Rates & Packages</h2>
      <div className="mt-5 grid md:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="font-semibold">Math / English</div>
          <div className="mt-2 text-3xl font-extrabold">
            $35<span className="text-base font-semibold text-slate-500">/hr</span>
          </div>
          <ul className="mt-3 text-sm text-slate-700 space-y-1">
            <li className="flex gap-2 items-start">
              <CheckCircle size={16} className="text-emerald-500 mt-0.5" />{" "}
              Interactive, judgment-free sessions
            </li>
            <li className="flex gap-2 items-start">
              <CheckCircle size={16} className="text-emerald-500 mt-0.5" />{" "}
              Weekly parent updates
            </li>
          </ul>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm ring-2 ring-slate-900">
          <div className="font-semibold">SAT / ACT</div>
          <div className="mt-2 text-3xl font-extrabold">
            $45<span className="text-base font-semibold text-slate-500">/hr</span>
          </div>
          <ul className="mt-3 text-sm text-slate-700 space-y-1">
            <li className="flex gap-2 items-start">
              <CheckCircle size={16} className="text-emerald-500 mt-0.5" />{" "}
              Strategy + timing focus
            </li>
            <li className="flex gap-2 items-start">
              <CheckCircle size={16} className="text-emerald-500 mt-0.5" />{" "}
              Official practice review
            </li>
          </ul>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="font-semibold">Starter Pack</div>
          <div className="mt-2 text-3xl font-extrabold">10% off</div>
          <ul className="mt-3 text-sm text-slate-700 space-y-1">
            <li className="flex gap-2 items-start">
              <CheckCircle size={16} className="text-emerald-500 mt-0.5" /> 5-session
              bundle (upfront)
            </li>
            <li className="flex gap-2 items-start">
              <CheckCircle size={16} className="text-emerald-500 mt-0.5" /> Flexible
              scheduling
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <a
          href={calendly}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition shadow"
        >
          <Calendar size={18} /> Book your free 30-minute consult
        </a>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "Explains concepts clearly — our son finally looks forward to math.",
      who: "Parent of 10th-grader",
    },
    {
      quote:
        "Weekly updates keep us in the loop. Grade up a full letter in 6 weeks.",
      who: "Parent of Algebra II student",
    },
    {
      quote:
        "Practical SAT strategies + accountability. +130 points in two months.",
      who: "Parent of 11th-grader",
    },
  ];
  return (
    <section id="testimonials" className="bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold tracking-tight">What parents say</h2>
        <div className="mt-5 grid md:grid-cols-3 gap-4 text-sm">
          {items.map((t, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex gap-1 text-amber-500 mb-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-800">“{t.quote}”</p>
              <div className="mt-2 text-xs text-slate-500">— {t.who}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {  
  const qas = [
  {
    q: "Do you offer a free session?",
    a: "I offer a free 30-minute consult with a micro-diagnostic.",
  },
  {
    q: "What are your feelings towards AI?",
    a: "I think AI is the future — it’s already changing how we learn and work, and it’s a skill everyone should get comfortable with. Used the right way, it can really boost productivity and help us manage time better. That said, I don’t think it should ever replace real thinking or genuine learning. I see it as a tool to help students learn faster and deeper, not something that does the work for them.",
  },
  {
    q: "Do you assign homework?",
    a: "The amount of homework I give depends on the commitment preferences of the parent and student. I do recommend practice in between sessions though for any client.",
  },
  {
    q: "Do you tutor APs?",
    a: "I do – I can tutor AP Calculus AB, AP Physics, AP Statistics, and AP English Language.",
  },
];
  return (
    <section id="faq" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold tracking-tight">FAQ</h2>
      <div className="mt-5 grid md:grid-cols-2 gap-4">
        {qas.map((item, i) => (
          <Accordion key={i} title={item.q}>
            <p className="text-slate-700 text-sm">{item.a}</p>
          </Accordion>
        ))}
      </div>
    </section>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-5 flex items-center justify-between"
      >
        <span className="font-medium">{title}</span>
        <span className="text-slate-500">{open ? "–" : "+"}</span>
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
}

function AboutSection({ name, headshot }) {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-10 bg-slate-50 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-bold tracking-tight text-center mb-6">
  About {name}
</h2>
      <div className="mt-5 grid md:grid-cols-5 gap-6 items-center justify-center text-center md:text-left">
        <div className="md:col-span-2">
          <img
            src={headshot}
            alt="Matt Bernier, Fairfield CT online tutor"
            className="w-64 h-64 object-cover rounded-full mx-auto shadow-md border-4 border-white"
          />
        </div>
        <div className="md:col-span-3 text-slate-700">
         <p>
  I’m a sophomore at Wake Forest University from Fairfield, CT, and I started tutoring to make learning feel less stressful and more rewarding. My approach combines clear explanations, structured strategies, and accountability that actually builds confidence — not pressure.
</p>
<p className="mt-3">
  Before each session, I review progress and plan targeted practice so lessons are tailored to each student’s goals. During sessions, I focus on interaction and problem-solving — not lectures — so students stay engaged and actively learn. I keep communication consistent and transparent, with weekly progress updates for parents so everyone stays on track.
</p>
<p className="mt-3">
  My goal is simple: steady improvement, visible confidence, and students who leave each session understanding <em>why</em> something works — not just <em>how</em> to do it.
</p>
        </div>
      </div>
    </section>
  );
}

function Contact({ calendly, email, phone }) {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 py-10 border-t border-slate-200"
    >
      <h2 className="text-2xl font-bold tracking-tight mb-4">Get in touch</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <a
          href={calendly}
          className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 hover:bg-slate-50"
        >
          <Calendar />
          <div>
            <div className="font-semibold">Book a free consult</div>
            <div className="text-sm text-slate-600">
              Choose a time that works for you
            </div>
          </div>
        </a>
        <a
          href={`mailto:${email}`}
          className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 hover:bg-slate-50"
        >
          <Mail />
          <div>
            <div className="font-semibold">Email</div>
            <div className="text-sm text-slate-600">{email}</div>
          </div>
        </a>
        <a
          href={`tel:${phone.replace(/[^\\d]/g, "")}`}
          className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 hover:bg-slate-50"
        >
          <Phone />
          <div>
            <div className="font-semibold">Call/Text</div>
            <div className="text-sm text-slate-600">{phone}</div>
          </div>
        </a>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Response window: within 4 hours on weekdays.
      </p>
    </section>
  );
}

function Footer({ name, calendly }) {
  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} {name} Tutoring. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#pricing" className="hover:text-slate-700">
            Rates
          </a>
          <a href="#services" className="hover:text-slate-700">
            Services
          </a>
          <a href="/about" className="hover:text-slate-700">
            About
          </a>
          <a href="#contact" className="hover:text-slate-700">
            Contact
          </a>
          <a href={calendly} className="hover:text-slate-700">
            Book
          </a>
        </div>
      </div>
    </footer>
  );
}