// app/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import HomeNav from '@/app/components/HomeNav';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header/Navbar - Fixed at top */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <HomeNav />
      </header>

      {/* Hero Section - Reduced top padding */}
      <section className="relative pt-8 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Large Background Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.12] pointer-events-none">
          <Image
            src="/verticallogo.png"
            alt=""
            width={1200}
            height={300}
            className="w-full max-w-[1200px] h-auto object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-blue-600 font-medium">
                  Applications closing in 48 hours
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Merit should be <span className="text-cyan-500">rewarded.</span>
              </h1>

              <p className="text-gray-600 text-lg">
                Join 2000+ applicants competing for 250 prestigious scholarship
                seats. Score high, get a ₹10,000 fee waiver, and secure your
                future in tech.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/student-register">
                  <button className="px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                    Apply for Scholarship
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">2k+</div>
                  <div className="text-sm text-gray-500">Applicants</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">250</div>
                  <div className="text-sm text-gray-500">Seats</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">₹10k</div>
                  <div className="text-sm text-gray-500">Fee Waiver</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-500">Merit Based</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/2026.png"
                  alt="Student with laptop"
                  fill
                  className="object-cover"
                />
                {/* Verified Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-3 shadow-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
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
                    <div className="text-sm font-semibold text-gray-900">
                      Verified Scholar
                    </div>
                    <div className="text-xs text-gray-500">Batch of 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Application Process */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple Application Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete these steps to validate your eligibility and claim your
              reward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Register
              </h3>
              <p className="text-gray-600">
                Create your account in under 2 minutes. No credit card or
                payment required for the initial application.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Evaluate
              </h3>
              <p className="text-gray-600">
                Take the 90-minute aptitude test online or at one of our offline
                centers near you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Reward</h3>
              <p className="text-gray-600">
                Top 250 performers receive instant fee waivers and priority
                admission status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Domains */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Target Domains
              </h2>
              <p className="text-gray-600">
                Scholarships valid for the following specializations
              </p>
            </div>
            <Link href="/programs">
              <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors">
                View All Programs
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Domain Card 1 - AI */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-cyan-400 hover:shadow-xl transition-all">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                <Image
                  src="/ai.png"
                  alt="Artificial Intelligence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Artificial Intelligence
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Machine learning frameworks and advanced deep learning
                  concepts.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>6 Months</span>
                </div>
              </div>
            </div>

            {/* Domain Card 2 - Cyber Security */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-cyan-400 hover:shadow-xl transition-all">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-red-500/10 to-orange-500/10">
                <Image
                  src="/cs.png"
                  alt="Cyber Security"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Cyber Security
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ethical hacking, network defense, and cryptography.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>8 Months</span>
                </div>
              </div>
            </div>

            {/* Domain Card 3 - Robotics */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-cyan-400 hover:shadow-xl transition-all">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                <Image
                  src="/robotics.png"
                  alt="Robotics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Robotics
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Industrial automation and sensor integration systems.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>12 Months</span>
                </div>
              </div>
            </div>

            {/* Domain Card 4 - Data Science */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-cyan-400 hover:shadow-xl transition-all">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-green-500/10 to-teal-500/10">
                <Image
                  src="/graphics.jpeg"
                  alt="Data Science"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Data Science
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Big data processing, visualization, and business intelligence.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>6 Months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Top Students Choose Nexcore */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/ml.png"
                  alt="Students with certificates"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Top Students Choose Nexcore?
              </h2>
              <p className="text-gray-600 mb-8">
                We don't just teach technology; we shape careers. Our
                scholarship is a testament to our commitment to merit.
              </p>

              <div className="space-y-6">
                {/* Benefit 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-600"
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
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Direct Fee Reduction
                    </h3>
                    <p className="text-gray-600">
                      Instant ₹10,000 off your tuition fees upon qualifying.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-600"
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
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Placement Advantage
                    </h3>
                    <p className="text-gray-600">
                      Scholars get Day 0 access to campus recruitment
                      opportunities.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-600"
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
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Industry Recognition
                    </h3>
                    <p className="text-gray-600">
                      Earn the 'Merit Scholar' badge on your certification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-[#1e293b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Claim Your Spot?
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Don't let this opportunity pass.{' '}
            <span className="text-white font-semibold">
              Only 250 scholarships
            </span>{' '}
            are up for grabs.
          </p>

          <Link href="/student-register">
            <button className="px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg mb-8">
              Apply for Scholarship Exam
            </button>
          </Link>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Merit-based</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Limited Seats</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Nexcore"
                width={120}
                height={30}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
              <p className="text-gray-400 text-sm">
                © 2024 Nexcore Institute. All rights reserved.
              </p>
            </div>
            <div className="flex gap-8 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}