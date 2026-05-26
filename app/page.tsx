export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Resume Matching
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Match Your Resume to{" "}
          <span className="text-[#58a6ff]">Any Job Posting</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload your resume, paste a LinkedIn job URL, and instantly see your skill gaps, missing keywords, and exactly what to fix to land more interviews.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
          >
            Start Matching — $9/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required for trial</span>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📄</div>
            <h3 className="text-white font-semibold mb-2">Resume Parsing</h3>
            <p className="text-[#8b949e] text-sm">Upload PDF or DOCX. We extract your skills, experience, and keywords automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🔍</div>
            <h3 className="text-white font-semibold mb-2">Job Analysis</h3>
            <p className="text-[#8b949e] text-sm">Paste any LinkedIn job URL. We scrape and analyze the required skills and keywords.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🎯</div>
            <h3 className="text-white font-semibold mb-2">Gap Report</h3>
            <p className="text-[#8b949e] text-sm">Get a prioritized list of missing skills and exact phrases to add to your resume.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
          <h3 className="text-white text-2xl font-bold mb-2">Pro</h3>
          <div className="flex items-end justify-center gap-1 mb-6">
            <span className="text-5xl font-extrabold text-white">$9</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited resume uploads",
              "Unlimited job post analyses",
              "AI skill gap reports",
              "Keyword optimization tips",
              "Match score per application",
              "Priority email support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. Billed monthly via Lemon Squeezy.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">What file formats does SkillMatch support?</h3>
            <p className="text-[#8b949e] text-sm">We support PDF and DOCX resume formats. Simply upload your file and our parser extracts all relevant information automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How accurate is the skill gap analysis?</h3>
            <p className="text-[#8b949e] text-sm">Our AI model is trained on thousands of job postings and resumes. It identifies both exact keyword matches and semantic skill equivalents with high precision.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes, absolutely. You can cancel at any time from your billing portal. You keep access until the end of your current billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} SkillMatch. All rights reserved.
      </footer>
    </main>
  )
}
