// app/about/page.jsx
import { BookOpen, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
          My Tutoring Philosophy
        </h1>
<div className="max-w-6xl mx-auto px-4">
  <img
    src="/philosophy.jpg"
    alt="Student workspace with books and laptop"
    className="w-full rounded-2xl shadow-md mb-8"
  />
</div>
        <p>
  I believe the best tutoring isn’t about memorizing facts — it’s about learning <em>how to think</em>. 
  My sessions focus on simplicity, structure, and confidence. Students shouldn’t feel overwhelmed or judged — 
  they should feel capable, supported, and proud of their progress.
</p>

<p className="mt-4">
  Whether it’s Algebra, essay writing, or SAT prep, I focus on real understanding. 
  We break down each concept step-by-step, using quick reflection at the end of every session 
  so students know exactly what they improved and what’s next.
</p>

<p className="mt-4">
  My approach blends clear explanation with curiosity — because good tutoring isn’t about giving 
  the answer, it’s about helping students realize they already have what it takes to find it.
</p>
        <div className="border-l-4 border-slate-400 pl-4 italic text-slate-600 my-8">
          “Good tutoring isn’t about giving the answer — it’s about showing
          students that they already have what it takes to find it.”
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
          What I Focus On
        </h2>
        <ul className="space-y-3 text-slate-700">
          <li className="flex items-start gap-2">
            <BookOpen className="text-emerald-600 mt-1" size={18} />  
            Building genuine understanding — not surface-level memorization.
          </li>
          <li className="flex items-start gap-2">
            <BookOpen className="text-emerald-600 mt-1" size={18} />  
            Developing study systems that last beyond tutoring sessions.
          </li>
          <li className="flex items-start gap-2">
            <BookOpen className="text-emerald-600 mt-1" size={18} />  
            Encouraging confidence and curiosity — not anxiety.
          </li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-12 mb-4">
          Student Feedback
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              quote:
                "He explains concepts clearly and never makes you feel dumb — it’s like studying with an older friend who knows exactly what’s confusing.",
              who: "10th Grade Algebra Student",
            },
            {
              quote:
                "We saw results in weeks — not just better grades, but more confidence and independence in his studying.",
              who: "Parent of 11th Grader",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex text-amber-500 mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-800 italic">“{t.quote}”</p>
              <p className="mt-2 text-xs text-slate-500">— {t.who}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
