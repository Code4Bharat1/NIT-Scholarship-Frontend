// app/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import HomeNav from '@/app/components/HomeNav';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header/Navbar - Fixed at top */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <HomeNav />
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-6 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/10 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400/10 to-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200/50 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-cyan-700 font-semibold tracking-wide">
                  Scholarship Applications Close For 2025
                </span>
              </div>

              {/* Headline */}
              <div>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
                  Merit should always be{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600">
                    recognized & rewarded.
                  </span>
                </h1>
              </div>

              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-xl">
                Join 2000+ applicants competing for 250 prestigious scholarship
                seats. Secure your future in tech with a guaranteed{' '}
                <span className="font-semibold text-gray-900">₹10,000 fee waiver.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/student-register">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center gap-2">
                      Start Application
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </Link>
                <Link href="/syllabus">
                  <button className="px-8 py-4 bg-white border-2 border-gray-200 hover:border-cyan-500 text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg">
                    Download Syllabus
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="relative">
                  <div className="text-4xl font-bold text-gray-900 mb-1">2k+</div>
                  <div className="text-sm text-gray-500 font-medium">Total Applicants</div>
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
                </div>
                <div className="relative">
                  <div className="text-4xl font-bold text-gray-900 mb-1">250</div>
                  <div className="text-sm text-gray-500 font-medium">Scholarship Seats</div>
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
                </div>
                <div className="relative">
                  <div className="text-4xl font-bold text-gray-900 mb-1">₹10k</div>
                  <div className="text-sm text-gray-500 font-medium">Fee Waiver</div>
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:pl-8">
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 border border-gray-100">
                <Image
                  src="/peopletable.png"
                  alt="Students collaborating"
                  fill
                  className="object-cover"
                />
                {/* Verified Badge Overlay */}
                <div className="absolute bottom-8 left-8 bg-white/98 backdrop-blur-md rounded-2xl px-6 py-4 flex items-center gap-4 shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-7 h-7 text-white"
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
                  <div>
                    <div className="text-base font-bold text-gray-900">
                      Life changing moment at Tier 1
                    </div>
                    <div className="text-sm text-gray-500">2026 Merit Scholar</div>
                  </div>
                </div>
              </div>
              {/* Decorative floating element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl opacity-10 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Three simple steps to claim your scholarship reward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Lines */}
            <div className="hidden md:block absolute top-20 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-200"></div>

            {/* Step 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Register
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fill out application form in under 2 minutes with your basic details. No payment required at this stage.
                </p>
                <Link href="/register" className="text-cyan-600 font-semibold hover:text-cyan-700 inline-flex items-center gap-1">
                  Start here
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Take the Test
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Attempt the 90-minute scholarship exam online or offline at one of our test centers.
                </p>
                <Link href="/test-info" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                  See format
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Claim Reward
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Top 250 scorers get instant ₹10,000 fee waiver and a Merit Scholar badge on completion.
                </p>
                <Link href="/rewards" className="text-cyan-600 font-semibold hover:text-cyan-700 inline-flex items-center gap-1">
                  Learn rewards
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Domains */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                Target Domains
              </h2>
              <p className="text-gray-600 text-lg">
                Scholarships valid for these cutting-edge specializations
              </p>
            </div>
            <Link href="/programs">
              <button className="hidden sm:block px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Programs
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AI Card */}
            <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-cyan-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <Image
                  src="/ai.png"
                  alt="Artificial Intelligence"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-cyan-500 text-white text-xs font-bold rounded-full">
                  6 Months
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  Artificial Intelligence
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Master deep learning and cutting-edge ML algorithms. Build intelligent systems.
                </p>
                <Link href="/programs/ai" className="text-cyan-600 font-semibold hover:text-cyan-700 inline-flex items-center gap-1">
                  View Curriculum
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Cyber Security Card */}
            <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-red-500/20 to-orange-500/20">
                <Image
                  src="/cs.png"
                  alt="Cyber Security"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-blue-500 text-white text-xs font-bold rounded-full">
                  8 Months
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Cyber Security
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Learn ethical hacking, network defense, and modern cryptography techniques.
                </p>
                <Link href="/programs/cybersecurity" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                  View Curriculum
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Robotics Card */}
            <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-purple-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <Image
                  src="/robotics.png"
                  alt="Robotics & IoT"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-purple-500 text-white text-xs font-bold rounded-full">
                  12 Months
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Robotics & IoT
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Design industrial automation systems and advanced sensor integration.
                </p>
                <Link href="/programs/robotics" className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center gap-1">
                  View Curriculum
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Data Science Card */}
            <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-green-500/20 to-teal-500/20">
                <Image
                  src="/graphics.jpeg"
                  alt="Data Science"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-500 text-white text-xs font-bold rounded-full">
                  6 Months
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Data Science
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Extract insights from big data with ML models and business intelligence.
                </p>
                <Link href="/programs/datascience" className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center gap-1">
                  View Curriculum
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nexcore */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Testimonials & Info */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Why Top Students Choose Nexcore?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                We don't just offer education — we shape careers through merit-based recognition and industry-aligned curriculum.
              </p>

              {/* Testimonial Cards */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">Direct Fee Waiver</h3>
                      <p className="text-gray-600 text-sm">
                        Get instant ₹10,000 off. Top 250 scorers are rewarded immediately upon qualifying.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">Placement Access</h3>
                      <p className="text-gray-600 text-sm">
                        Day 0 priority for campus recruitment. Scholars get first access to top companies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 pl-6 border-l-4 border-cyan-500">
                <p className="text-gray-700 italic mb-3">
                  "The scholarship exam was fair and fun. The fee waiver helped me pursue my dream in AI."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Priyanka M.</div>
                    <div className="text-sm text-gray-500">AI Scholar, Batch of 2025</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Key Dates Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 shadow-2xl border border-slate-700">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Key Dates</h3>
                  <p className="text-slate-300">Mark your calendar for the scholarship exam</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-slate-700/50">
                    <div>
                      <div className="font-semibold text-white mb-1">Registration Deadline</div>
                      <div className="text-sm text-slate-400">Last date to register for exam</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-cyan-400">30 June 2024</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-slate-700/50">
                    <div>
                      <div className="font-semibold text-white mb-1">Exam Window</div>
                      <div className="text-sm text-slate-400">Online & offline test centers</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-cyan-400">5-10 July</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-slate-700/50">
                    <div>
                      <div className="font-semibold text-white mb-1">Result Declaration</div>
                      <div className="text-sm text-slate-400">Merit list & score release</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-cyan-400">12 July 2024</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <div>
                      <div className="font-semibold text-white mb-1">Eligibility</div>
                      <div className="text-sm text-slate-400">Age: 18+ Years, Min 60% in 12th Grade</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-sm text-cyan-100">
                      Valid for all Nexcore courses: AI, Machine Learning, Cyber Security, Robotics, Data Science.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl opacity-20 blur-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl opacity-20 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to prove your merit?
          </h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            The exam date is just approaching — join{' '}
            <span className="text-cyan-400 font-semibold">2000+ students</span>{' '}
            who are competing for their future. Secure your seat now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/student-register">
              <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/25 text-lg">
                Enter your mobile number
              </button>
            </Link>
            <button className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300">
              Download Brochure
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span>100% Merit-based</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span>Limited to 250 seats</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <span>Applications closing soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <Image
                src="/logo.png"
                alt="Nexcore Institute"
                width={140}
                height={35}
                className="h-10 w-auto object-contain brightness-0 invert mb-6"
              />
              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                Building careers through cutting-edge technology education. 
                Empowering 10,000+ students since 2011.
              </p>
              <div className="flex gap-3">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a 
                    key={social}
                    href={`#${social}`} 
                    className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <div className="w-5 h-5 bg-slate-400 rounded"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Programs', 'Admissions', 'Placements', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-cyan-400 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Support'].map((link) => (
                  <li key={link}>
                    <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-cyan-400 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2026 Nexcore Institute. All rights reserved.</p>
            <p className="text-sm">Maharashtra, India</p>
          </div>
        </div>
      </footer>
    </main>
  );
}