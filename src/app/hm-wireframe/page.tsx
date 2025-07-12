'use client';

import { useState, useEffect } from 'react';

export default function HMWireframe() {
  const [mounted, setMounted] = useState(false);

  // Set mounted flag to prevent hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white font-['Inter'] flex items-center justify-center">
        <div className="text-[#111111] font-medium">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      {/* Header - H&M Style */}
      <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#111111]">
            KRAZY KREATORS
          </div>
          
          {/* Navigation - H&M Style Bold */}
          <nav className="hidden md:flex space-x-8">
            <span className="text-sm font-semibold text-[#111111] hover:text-[#CBB49A] transition-colors cursor-pointer">
              SERVICES
            </span>
            <span className="text-sm font-semibold text-[#111111] hover:text-[#CBB49A] transition-colors cursor-pointer">
              PROCESS
            </span>
            <span className="text-sm font-semibold text-[#111111] hover:text-[#CBB49A] transition-colors cursor-pointer">
              ABOUT
            </span>
            <span className="text-sm font-semibold text-[#111111] hover:text-[#CBB49A] transition-colors cursor-pointer">
              CONTACT
            </span>
          </nav>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <div className="w-6 h-0.5 bg-[#111111] mb-1"></div>
            <div className="w-6 h-0.5 bg-[#111111] mb-1"></div>
            <div className="w-6 h-0.5 bg-[#111111]"></div>
          </div>
        </div>
      </header>

      {/* Hero Section - H&M Style Bold */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-[#F5F5F5]">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-[#C4C4C4] opacity-30"></div>
        
        {/* Content - H&M Style Bold */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-8">
          <h1 className="text-6xl md:text-7xl font-bold text-[#111111] mb-8 tracking-tight leading-none">
            YOUR CREATIVE
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold text-[#111111] mb-12 tracking-tight leading-none">
            PARTNER
          </h1>
          <p className="text-xl text-[#111111] mb-12 font-medium tracking-wide">
            From first sketch to final shipment
          </p>
          <button className="bg-[#111111] text-white px-16 py-5 font-bold text-lg tracking-wide hover:bg-[#333333] transition-colors">
            START PROJECT
          </button>
        </div>
      </section>

      {/* Services Section - H&M Style Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#111111] tracking-tight">
            OUR SERVICES
          </h2>
          
          {/* H&M Style 3-Column Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Design */}
            <div className="text-center group">
              <div className="w-full h-80 bg-[#C4C4C4] mb-8 group-hover:opacity-80 transition-opacity"></div>
              <h3 className="text-3xl font-bold mb-6 text-[#111111] tracking-tight">DESIGN</h3>
              <p className="text-base text-gray-600 mb-8 font-medium leading-relaxed">
                Creative design solutions tailored to your brand vision
              </p>
              <button className="text-[#111111] border-2 border-[#111111] px-8 py-3 font-bold tracking-wide hover:bg-[#111111] hover:text-white transition-colors">
                CONNECT WITH TEAM
              </button>
            </div>

            {/* Manufacturing */}
            <div className="text-center group">
              <div className="w-full h-80 bg-[#C4C4C4] mb-8 group-hover:opacity-80 transition-opacity"></div>
              <h3 className="text-3xl font-bold mb-6 text-[#111111] tracking-tight">MANUFACTURING</h3>
              <p className="text-base text-gray-600 mb-8 font-medium leading-relaxed">
                Premium quality manufacturing with strict quality control
              </p>
              <button className="text-[#111111] border-2 border-[#111111] px-8 py-3 font-bold tracking-wide hover:bg-[#111111] hover:text-white transition-colors">
                CONNECT WITH TEAM
              </button>
            </div>

            {/* End-to-End */}
            <div className="text-center group">
              <div className="w-full h-80 bg-[#C4C4C4] mb-8 group-hover:opacity-80 transition-opacity"></div>
              <h3 className="text-3xl font-bold mb-6 text-[#111111] tracking-tight">END-TO-END</h3>
              <p className="text-base text-gray-600 mb-8 font-medium leading-relaxed">
                Complete solution from concept to delivery
              </p>
              <button className="text-[#111111] border-2 border-[#111111] px-8 py-3 font-bold tracking-wide hover:bg-[#111111] hover:text-white transition-colors">
                CONNECT WITH TEAM
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - H&M Style Timeline */}
      <section id="how-it-works" className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#111111] tracking-tight">
            HOW IT WORKS
          </h2>
          
          {/* H&M Style Horizontal Timeline */}
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { month: 'MONTH 1', title: 'DISCOVERY', desc: 'Initial consultation and project scope' },
              { month: 'MONTH 2', title: 'DESIGN', desc: 'Creative development and sample creation' },
              { month: 'MONTH 3', title: 'PRODUCTION', desc: 'Manufacturing with quality assurance' },
              { month: 'MONTH 4', title: 'DELIVERY', desc: 'Final delivery and ongoing support' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-sm font-bold text-[#CBB49A] mb-4 tracking-widest">{step.month}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#111111] tracking-tight">{step.title}</h3>
                <p className="text-base text-gray-600 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview - H&M Style Split */}
      <section id="dashboard" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-12 text-[#111111] tracking-tight">
                CLIENT DASHBOARD
              </h2>
              <h3 className="text-3xl font-bold mb-8 text-[#111111] tracking-tight">
                Track Your Project Progress
              </h3>
              <ul className="space-y-6">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#CBB49A] mr-6"></div>
                  <span className="text-base font-medium text-[#111111] tracking-wide">Track Samples & Prototypes</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#CBB49A] mr-6"></div>
                  <span className="text-base font-medium text-[#111111] tracking-wide">Approve Designs in Real-time</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#CBB49A] mr-6"></div>
                  <span className="text-base font-medium text-[#111111] tracking-wide">Monitor Production Timeline</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#CBB49A] mr-6"></div>
                  <span className="text-base font-medium text-[#111111] tracking-wide">Access Quality Reports</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="w-full h-96 bg-[#C4C4C4]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Retainer Benefits - H&M Style Clean */}
      <section id="retainer" className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#111111] tracking-tight">
            RETAINER MODEL
          </h2>
          
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-12 text-[#111111] tracking-tight">
                Why Choose Our Retainer Model?
              </h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#CBB49A] mr-6 mt-1"></div>
                  <div>
                    <h4 className="font-bold mb-3 text-[#111111] tracking-wide text-lg">PREDICTABLE COSTS</h4>
                    <p className="text-base text-gray-600 font-medium">Fixed monthly retainer with no hidden fees</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#CBB49A] mr-6 mt-1"></div>
                  <div>
                    <h4 className="font-bold mb-3 text-[#111111] tracking-wide text-lg">PRIORITY ACCESS</h4>
                    <p className="text-base text-gray-600 font-medium">Dedicated team and faster turnaround times</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#CBB49A] mr-6 mt-1"></div>
                  <div>
                    <h4 className="font-bold mb-3 text-[#111111] tracking-wide text-lg">SCALABLE SOLUTIONS</h4>
                    <p className="text-base text-gray-600 font-medium">Flexible capacity to match your growth</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full h-96 bg-[#C4C4C4]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - H&M Style Table */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#111111] tracking-tight">
            WHY KRAZY KREATORS?
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="p-8 text-left font-bold text-[#111111] tracking-wide text-lg">FEATURE</th>
                  <th className="p-8 text-center font-bold text-[#111111] tracking-wide text-lg">KRAZY KREATORS</th>
                  <th className="p-8 text-center font-bold text-[#111111] tracking-wide text-lg">TRADITIONAL VENDORS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-8 font-bold text-[#111111] text-lg">QUALITY CONTROL</td>
                  <td className="p-8 text-center">
                    <span className="text-base font-bold text-[#CBB49A] tracking-wide">✓ PREMIUM</span>
                  </td>
                  <td className="p-8 text-center">
                    <span className="text-base font-bold text-gray-400 tracking-wide">✗ VARIABLE</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-8 font-bold text-[#111111] text-lg">COMMUNICATION</td>
                  <td className="p-8 text-center">
                    <span className="text-base font-bold text-[#CBB49A] tracking-wide">✓ REAL-TIME</span>
                  </td>
                  <td className="p-8 text-center">
                    <span className="text-base font-bold text-gray-400 tracking-wide">✗ LIMITED</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-8 font-bold text-[#111111] text-lg">TIMELINE</td>
                  <td className="p-8 text-center">
                    <span className="text-base font-bold text-[#CBB49A] tracking-wide">✓ GUARANTEED</span>
                  </td>
                  <td className="p-8 text-center">
                    <span className="text-base font-bold text-gray-400 tracking-wide">✗ UNPREDICTABLE</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-8 font-bold text-[#111111] text-lg">COST TRANSPARENCY</td>
                  <td className="p-8 text-center">
                    <span className="text-base font-bold text-[#CBB49A] tracking-wide">✓ CLEAR</span>
                  </td>
                  <td className="p-8 text-center">
                    <span className="text-base font-bold text-gray-400 tracking-wide">✗ HIDDEN FEES</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials - H&M Style Grid */}
      <section id="testimonials" className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#111111] tracking-tight">
            CASE STUDIES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Client 1 */}
            <div className="bg-white p-8">
              <div className="w-20 h-20 bg-[#C4C4C4] mb-6"></div>
              <p className="text-base text-gray-600 mb-6 font-medium leading-relaxed italic">
                "Krazy Kreators transformed our design process completely. The quality and attention to detail exceeded our expectations."
              </p>
              <div className="w-full h-40 bg-[#C4C4C4]"></div>
            </div>

            {/* Client 2 */}
            <div className="bg-white p-8">
              <div className="w-20 h-20 bg-[#C4C4C4] mb-6"></div>
              <p className="text-base text-gray-600 mb-6 font-medium leading-relaxed italic">
                "The retainer model saved us 40% on costs while improving our production timeline significantly."
              </p>
              <div className="w-full h-40 bg-[#C4C4C4]"></div>
            </div>
          </div>

          {/* Video Testimonial */}
          <div className="bg-white p-12 text-center">
            <div className="w-full h-80 bg-[#C4C4C4] mb-8 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#CBB49A] flex items-center justify-center">
                  <span className="text-white text-3xl">▶</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#111111] tracking-tight">CLIENT SUCCESS STORY</h3>
            <p className="text-base text-gray-600 font-medium">Watch how we helped transform their brand</p>
          </div>
        </div>
      </section>

      {/* Resources - H&M Style Carousel */}
      <section id="resources" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#111111] tracking-tight">
            LEARNING RESOURCES
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'DESIGN TRENDS 2024', type: 'BLOG', cta: 'READ MORE' },
              { title: 'MANUFACTURING BEST PRACTICES', type: 'VIDEO', cta: 'WATCH NOW' },
              { title: 'QUALITY CONTROL GUIDE', type: 'BLOG', cta: 'READ MORE' }
            ].map((resource, index) => (
              <div key={index} className="group">
                <div className="w-full h-56 bg-[#C4C4C4] mb-6 group-hover:opacity-80 transition-opacity"></div>
                <div className="text-sm font-bold text-[#CBB49A] mb-2 tracking-widest">{resource.type}</div>
                <h3 className="text-xl font-bold mb-4 text-[#111111] tracking-tight">{resource.title}</h3>
                <button className="text-[#111111] border-2 border-[#111111] px-6 py-2 font-bold tracking-wide hover:bg-[#111111] hover:text-white transition-colors">
                  {resource.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - H&M Style Clean */}
      <section id="contact" className="py-24 bg-[#CBB49A]">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#111111] tracking-tight">
            START YOUR PROJECT
          </h2>
          
          <form className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-[#111111] font-bold mb-3 tracking-wide text-lg">NAME</label>
              <input 
                type="text" 
                className="w-full p-5 border-2 border-[#111111] bg-transparent text-[#111111] font-medium tracking-wide placeholder-gray-600"
                placeholder="Your full name"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label className="block text-[#111111] font-bold mb-3 tracking-wide text-lg">EMAIL</label>
              <input 
                type="email" 
                className="w-full p-5 border-2 border-[#111111] bg-transparent text-[#111111] font-medium tracking-wide placeholder-gray-600"
                placeholder="your@email.com"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label className="block text-[#111111] font-bold mb-3 tracking-wide text-lg">BRAND STAGE</label>
              <select className="w-full p-5 border-2 border-[#111111] bg-transparent text-[#111111] font-medium tracking-wide" suppressHydrationWarning>
                <option>Select your brand stage</option>
                <option>STARTUP</option>
                <option>GROWING</option>
                <option>ESTABLISHED</option>
              </select>
            </div>
            <div>
              <label className="block text-[#111111] font-bold mb-3 tracking-wide text-lg">SERVICES NEEDED</label>
              <select className="w-full p-5 border-2 border-[#111111] bg-transparent text-[#111111] font-medium tracking-wide" suppressHydrationWarning>
                <option>Select services</option>
                <option>DESIGN ONLY</option>
                <option>MANUFACTURING ONLY</option>
                <option>END-TO-END</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit" 
                className="w-full bg-[#111111] text-white py-5 font-bold text-lg tracking-wide hover:bg-[#333333] transition-colors"
              >
                GET STARTED
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* About - H&M Style Split */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-12 text-[#111111] tracking-tight">OUR ORIGIN</h2>
              <p className="text-base text-gray-600 mb-8 font-medium leading-relaxed">
                Founded with a vision to bridge the gap between creative design and efficient manufacturing, 
                Krazy Kreators has been at the forefront of fashion innovation for over a decade.
              </p>
              <div className="w-40 h-40 bg-[#C4C4C4]"></div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-8 text-[#111111] tracking-tight">OUR VISION</h3>
              <p className="text-base text-gray-600 mb-6 font-medium leading-relaxed">
                To become the leading partner for fashion brands seeking innovative, 
                sustainable, and efficient design and manufacturing solutions.
              </p>
              <p className="text-base text-gray-600 font-medium leading-relaxed">
                We believe in the power of collaboration, transparency, and continuous 
                improvement to deliver exceptional results for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - H&M Style Bold */}
      <footer className="bg-[#111111] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="text-2xl font-bold mb-6 tracking-wide">KRAZY KREATORS</div>
              <p className="text-base text-gray-400 font-medium leading-relaxed">
                Your creative and production partner for innovative fashion solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 tracking-wide text-lg">SERVICES</h4>
              <ul className="space-y-3 text-base text-gray-400 font-medium">
                <li>DESIGN</li>
                <li>MANUFACTURING</li>
                <li>END-TO-END</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 tracking-wide text-lg">COMPANY</h4>
              <ul className="space-y-3 text-base text-gray-400 font-medium">
                <li>ABOUT</li>
                <li>CASE STUDIES</li>
                <li>CONTACT</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 tracking-wide text-lg">CONNECT</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#C4C4C4]"></div>
                <div className="w-10 h-10 bg-[#C4C4C4]"></div>
                <div className="w-10 h-10 bg-[#C4C4C4]"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-base text-gray-400 font-medium">
            <p>&copy; 2024 KRAZY KREATORS. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 