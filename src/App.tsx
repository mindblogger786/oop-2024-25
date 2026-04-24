import { useState, useRef } from "react";
import { q1Answers } from "./data/q1";
import { q2Answers, q3Answers } from "./data/q2q3";
import { q4Answers, q5Answers, q6Answers, q7Answers } from "./data/q4q5q6q7";

interface QGroup {
  id: string;
  title: string;
  icon: string;
  subs: { id: string; label: string }[];
}

const groups: QGroup[] = [
  { id: "q1", title: "Question 1", icon: "☕", subs: [
    { id: "1a", label: "1a. Objects in Java" },
    { id: "1b", label: "1b. Overloading vs Overriding" },
    { id: "1c", label: "1c. throw and throws" },
    { id: "1d", label: "1d. Font Style & Size" },
    { id: "1e", label: "1e. Multithreading vs Multitasking" },
    { id: "1f", label: "1f. JCheckBox" },
    { id: "1g", label: "1g. Encapsulation & Polymorphism" },
  ]},
  { id: "q2", title: "Question 2", icon: "📝", subs: [
    { id: "2a", label: "2a. Variables in Java" },
    { id: "2b", label: "2b. Object Cloning" },
    { id: "2c", label: "2c. File Copy Program" },
    { id: "2d", label: "2d. Daemon Threads" },
    { id: "2e", label: "2e. Graphics2D" },
  ]},
  { id: "q3", title: "Question 3", icon: "🔧", subs: [
    { id: "3a", label: "3a. Constructor & super()" },
    { id: "3b", label: "3b. Classes & Objects" },
  ]},
  { id: "q4", title: "Question 4", icon: "🏗️", subs: [
    { id: "4a", label: "4a. Inheritance Types" },
    { id: "4b", label: "4b. JVM Architecture" },
  ]},
  { id: "q5", title: "Question 5", icon: "⚠️", subs: [
    { id: "5a", label: "5a. Exception Handling" },
    { id: "5b", label: "5b. File Handling in Java" },
  ]},
  { id: "q6", title: "Question 6", icon: "🔀", subs: [
    { id: "6a", label: "6a. Bounded Types (Generics)" },
    { id: "6b", label: "6b. Thread Life Cycle" },
  ]},
  { id: "q7", title: "Question 7", icon: "🖥️", subs: [
    { id: "7a", label: "7a. Event Handling" },
    { id: "7b", label: "7b. Swing vs AWT" },
  ]},
];

const answers: Record<string, React.ReactNode[]> = {
  q1: q1Answers, q2: q2Answers, q3: q3Answers, q4: q4Answers,
  q5: q5Answers, q6: q6Answers, q7: q7Answers,
};

function App() {
  const [active, setActive] = useState("1a");
  const [sidebar, setSidebar] = useState(false);
  const [done, setDone] = useState<Set<string>>(new Set());
  const ref = useRef<HTMLDivElement>(null);

  const pick = (id: string) => { setActive(id); setSidebar(false); ref.current?.scrollTo({ top: 0, behavior: "smooth" }); };
  const toggle = (id: string) => setDone(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const getAnswer = (): React.ReactNode => {
    for (const g of groups) {
      const i = g.subs.findIndex(q => q.id === active);
      if (i !== -1) return answers[g.id]?.[i] ?? <p>Not found.</p>;
    }
    return <p>Not found.</p>;
  };

  const total = groups.reduce((a, g) => a + g.subs.length, 0);
  const pct = Math.round((done.size / total) * 100);
  const cur = groups.find(g => g.subs.some(q => q.id === active));
  const all = groups.flatMap(g => g.subs);
  const gi = all.findIndex(q => q.id === active);
  const go = (d: "p" | "n") => { const ni = d === "n" ? gi + 1 : gi - 1; if (ni >= 0 && ni < all.length) pick(all[ni].id); };

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      {sidebar && <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setSidebar(false)} />}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen z-40 w-72 flex flex-col bg-white border-r border-gray-200 transition-transform duration-300 ${sidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="p-5 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-lg">OOP</div>
            <div>
              <h1 className="font-bold text-sm text-gray-900">OOP in Java</h1>
              <p className="text-xs text-gray-500">MCA PYQ Solutions</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1"><span className="text-gray-500">Progress</span><span className="font-semibold text-orange-600">{done.size}/{total} ({pct}%)</span></div>
            <div className="h-2 rounded-full bg-gray-200"><div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500" style={{ width: `${pct}%` }} /></div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {groups.map(g => (
            <div key={g.id}>
              <div className="text-xs font-semibold uppercase tracking-wider px-3 py-2 text-gray-400">{g.icon} {g.title}</div>
              {g.subs.map(q => (
                <button key={q.id} onClick={() => pick(q.id)} className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-0.5 flex items-center gap-2 transition-all ${active === q.id ? "bg-orange-100 text-orange-700 font-medium" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"}`}>
                  <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs flex-shrink-0 ${done.has(q.id) ? "bg-emerald-500 border-emerald-500 text-white" : "border-gray-300"}`}>{done.has(q.id) ? "✓" : ""}</span>
                  <span className="truncate">{q.label}</span>
                </button>
              ))}
            </div>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200 text-center text-xs text-gray-400">📚 25 Questions • Score 100%!</div>
      </aside>
      <main className="flex-1 min-h-screen">
        <header className="sticky top-0 z-20 px-4 py-3 flex items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebar(true)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <span className="text-sm font-medium text-gray-500">{cur?.title} • <span className="text-orange-600">{active.toUpperCase()}</span></span>
          </div>
          <button onClick={() => toggle(active)} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${done.has(active) ? "bg-emerald-100 text-emerald-700 border border-emerald-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{done.has(active) ? "✓ Completed" : "Mark Complete"}</button>
        </header>
        <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-y-auto" style={{ maxHeight: "calc(100vh - 130px)" }}>
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white">
            <div className="flex items-start gap-4">
              <div className="text-4xl">☕</div>
              <div>
                <h2 className="text-xl font-bold mb-1">Object Oriented Programming in Java — PYQ Solutions</h2>
                <p className="text-sm text-orange-100">Comprehensive MCA exam solutions covering Objects, Inheritance, Exception Handling, Multithreading, Generics, Swing & more.</p>
                <div className="flex flex-wrap gap-3 mt-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-white/20">25 Questions</span>
                  <span className="px-3 py-1 rounded-full bg-white/20">7 Units</span>
                  <span className="px-3 py-1 rounded-full bg-white/20">400-600 Words Each</span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-area">{getAnswer()}</div>
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button onClick={() => go("p")} disabled={gi <= 0} className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${gi > 0 ? "bg-gray-200 hover:bg-gray-300 text-gray-800" : "opacity-30 cursor-not-allowed text-gray-400"}`}>← Previous</button>
            <span className="text-xs text-gray-400">Question {gi + 1} of {all.length}</span>
            <button onClick={() => go("n")} disabled={gi >= all.length - 1} className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${gi < all.length - 1 ? "bg-orange-600 hover:bg-orange-500 text-white" : "opacity-30 cursor-not-allowed text-gray-400"}`}>Next →</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
