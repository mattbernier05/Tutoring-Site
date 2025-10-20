"use client";
// app/page.jsx
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
} from "lucide-react";

export default function Home() {
  const NAME = "Matt Bernier";
  const EMAIL = "mattbernier05@gmail.com";
  const PHONE = "(475) 228-5944";
  const CALENDLY = "https://calendly.com/mattbernier05/30min";
  const HEADSHOT = "https://placekitten.com/400/400"; // temp placeholder

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center shadow-sm">
              <GraduationCap size={18} />
            </div>
            <div className="font-semibold tracking-tight">{NAME} Tutoring</div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CALENDLY}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm"
            >
              <Calendar size={16} /> Book Free Consult
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-slate-300 hover:bg-slate-100 transition"
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            <Sparkles size={14} className="text-yellow-500" /> Online • Math •
            English • SAT/ACT
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Clear, engaging tutoring that builds confidence and results
          </h1>
          <p className="mt-3 text-slate-600 leading-relaxed">
            I’m a Wake Forest sophomore from Fairfield, CT. I help middle & high
            school students master <strong>Math (Algebra → Precalc)</strong>,{" "}
            <strong>English/Writing</strong>, and <strong>SAT/ACT</strong> with
            interactive sessions and quick parent updates after every lesson.
          </p>

          <ul className="mt-4 space-y-2 text-slate-700">
            {[
              "Free 30-minute consultation + micro-diagnostic",
              "Judgment-free explanations with targeted practice",
              "Weekly progress summaries for parents",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-emerald-500 mt-0.5" size={18} />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={CALENDLY}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition shadow"
            >
              <Calendar size={18} /> Book your free consult
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 hover:bg-slate-100 transition"
            >
              <Mail size={18} /> Email me
            </a>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Launch rates: <strong>$35/hr</strong> Math/English •{" "}
            <strong>$45/hr</strong> SAT/ACT
          </p>
        </div>

        <div className="relative">
          <img
            src={HEADSHOT}
            alt="Tutor headshot"
            className="w-full h-[360px] object-cover rounded-3xl shadow-md"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-4 py-10 border-t border-slate-200"
      >
        <h2 className="text-2xl font-bold tracking-tight mb-4">Get in touch</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a
            href={CALENDLY}
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
            href={`mailto:${EMAIL}`}
            className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 hover:bg-slate-50"
          >
            <Mail />
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-slate-600">{EMAIL}</div>
            </div>
          </a>
          <a
            href={`tel:${PHONE.replace(/[^\\d]/g, "")}`}
            className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 hover:bg-slate-50"
          >
            <Phone />
            <div>
              <div className="font-semibold">Call/Text</div>
              <div className="text-sm text-slate-600">{PHONE}</div>
            </div>
          </a>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Response window: within 4 hours on weekdays.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {NAME} Tutoring. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#contact" className="hover:text-slate-700">Contact</a>
            <a href={CALENDLY} className="hover:text-slate-700">Book</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
