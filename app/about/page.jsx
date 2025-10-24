// app/about/page.jsx
export default function About() {
  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-5 gap-6 items-start">
          {/* LEFT: Text (shows first on mobile) */}
          <div className="md:col-span-3">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
              My Tutoring Philosophy
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Clear thinking. Steady progress. Real confidence.
            </h1>

            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              I started tutoring because I saw how many smart students struggled — not from lack of effort,
              but from unclear teaching and stress. Tutoring isn’t about drilling; it’s about giving students
              the confidence and structure to actually <em>think</em> clearly.
            </p>

            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              I believe the best tutoring isn’t about memorizing facts or chasing grades. It’s about learning
              how to think, how to stay calm under pressure, and how to recognize your own progress. My sessions
              are built on clarity, structure, and steady accountability — so students feel capable, not overwhelmed.
            </p>

            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              Before each session, I plan personalized practice that targets each student’s biggest opportunities for growth.
              During lessons, we break problems down step-by-step and reflect on what’s improving. I use interactive tools —
              from digital whiteboards to shared problem-solving — to make every session active and focused. Parents stay in
              the loop with weekly updates that track confidence as much as performance.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900">What I focus on</h3>
            <ul className="mt-2 space-y-2 text-slate-700">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                Building genuine understanding — not surface-level memorization.
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                Developing study systems that last beyond tutoring sessions.
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                Encouraging confidence and curiosity — not anxiety.
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                Clear communication — so parents always know what’s working.
              </li>
            </ul>

            <blockquote className="mt-6 border-l-4 border-slate-300 pl-4 text-slate-700 italic">
              “Good tutoring isn’t about giving the answer — it’s about helping students realize they already have
              what it takes to find it.” — Matt Bernier
            </blockquote>
          </div>

          {/* RIGHT: Image */}
          <aside className="md:col-span-2">
            <img
              src="/philosophy.jpg"
              alt="Calm study setup for online tutoring"
              className="w-full h-[360px] md:h-[520px] object-cover rounded-2xl shadow-md"
            />
          </aside>
        </div>
      </section>
    </main>
  );
}