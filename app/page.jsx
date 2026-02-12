import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1628] text-white">
      {/* Header/Navbar - Fixed at top only */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-gray-800 font-semibold text-lg">
              NEXCORE INSTITUTE
            </span>
          </div>
          <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors">
            Student Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-md">
                <span className="text-sm text-blue-400">
                  Scholarship Entrance Exam
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Get <span className="text-cyan-400">₹10,000</span> Fee Waiver on
                Merit
              </h1>

              <button className="px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20">
                Register for Scholarship Exam
              </button>

              <p className="text-sm text-gray-400">
                No payment required to apply
              </p>

              {/* Stats */}
              <div className="flex gap-12 pt-8">
                <div>
                  <div className="text-3xl font-bold">2000+</div>
                  <div className="text-sm text-gray-400">Applicants</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">250</div>
                  <div className="text-sm text-gray-400">Scholarships</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Since 2011</div>
                  <div className="text-sm text-gray-400">Trusted Legacy</div>
                </div>
              </div>
            </div>

            {/* Right Image - AI Brain Visualization */}
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10">
                {/* Placeholder for hero image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <Image src="/ai.png" alt="AI Illustration" fill />
                </div>
                {/* Overlay with limited seats indicator */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 text-sm font-medium">
                    Limited seats available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="max-w-7xl mx-auto mt-16 text-center">
          <a
            href="#programs"
            className="text-gray-400 text-sm hover:text-white transition-colors"
          >
            SCROLL DOWN
          </a>
        </div>
      </section>

      {/* Programs Covered Section */}
      <section
        id="programs"
        className="py-20 px-6 bg-gradient-to-b from-[#0a1628] to-[#0d1b2e]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold">Programs Covered</h2>
            <button className="px-6 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors font-medium">
              View All Programs
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Program Card 1 - AI & ML */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/5 hover:border-cyan-500/30 transition-all">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <Image src="/hero.png" alt="AI Illustration" fill />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">
                  Artificial Intelligence & Machine Learning
                </h3>
                <p className="text-gray-300 text-sm">
                  Build smart systems using data, models, and algorithms.
                </p>
              </div>
            </div>

            {/* Program Card 2 - AI & Robotics */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/5 hover:border-cyan-500/30 transition-all">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <Image src="/robotics.png" alt="AI Illustration" fill />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">
                  Artificial Intelligence & Robotics
                </h3>
                <p className="text-gray-300 text-sm">
                  Design and control intelligent robots and automation.
                </p>
              </div>
            </div>

            {/* Program Card 3 - Cyber Security */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/5 hover:border-cyan-500/30 transition-all">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-red-500/20 to-orange-500/20">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <Image src="/cs.png" alt="AI Illustration" fill />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Cyber Security</h3>
                <p className="text-gray-300 text-sm">
                  Learn to secure systems, networks, and critical data.
                </p>
              </div>
            </div>

            {/* Program Card 4 - VFX & Multimedia */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/5 hover:border-orange-500/30 transition-all">
            <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
  <Image
    src="/vfx.png"
    alt="Graphic Animation, VFX & Multimedia"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6">
  <h3 className="text-2xl font-bold mb-2">
    Graphic Animation, VFX & Multimedia
  </h3>
  <p className="text-gray-300 text-sm">
    Create impactful visuals, animation, and motion graphics.
  </p>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Apply / How it Works Split Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0d1b2e] to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Why Apply */}
            <div>
              <h2 className="text-4xl font-bold mb-12 text-white">
                Why Apply?
              </h2>

              <div className="space-y-6">
                {/* Card 1 */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-white/10">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path
                        fillRule="evenodd"
                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    ₹10,000 Waiver
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Earn direct scholarship on fees upon qualifying.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-white/10">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Merit-Based
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Selection is purely based on entrance exam score.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-white/10">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Industry Ready
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Curriculum aligned with modern tech needs.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-white/10">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Since 2011
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Trusted institute with over a decade of legacy.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - How it Works */}
            <div>
              <h2 className="text-4xl font-bold mb-12 text-gray-900">
                How it Works
              </h2>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-800 font-medium">
                      Fill out the simple application form. No payment required.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-800 font-medium">
                      Appear for the verbal/offline entrance test on the
                      scheduled date.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-cyan-400 text-gray-900 rounded-full flex items-center justify-center font-bold">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-cyan-600 font-bold text-lg mb-1">
                      Get Scholarship
                    </h3>
                    <p className="text-gray-800 font-medium">
                      Top 250 performers receive the ₹10,000 fee waiver
                      instantly.
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 p-6 bg-white rounded-xl border-2 border-gray-200">
                  <p className="text-gray-600 text-sm">
                    Join a community of focused learners. Your merit is the only
                    criteria here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-[#0a1628]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Ready to Claim Your Spot?
            </h2>

            <p className="text-gray-300 mb-2">
              Don&apos;t let this opportunity pass.{' '}
              <span className="text-orange-400 font-semibold">
                Only 250 scholarships
              </span>{' '}
              are up for grabs.
            </p>

            <button className="mt-8 px-10 py-4 bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20">
              Apply for Scholarship Exam
            </button>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
              <span>Merit-Based</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span>Limited Seats</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#0a1628] border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2024 Nexcore Institute of Technology. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
