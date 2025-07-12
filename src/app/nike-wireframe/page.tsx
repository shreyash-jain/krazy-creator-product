'use client';

import { useState, useEffect } from 'react';

export default function NikeWireframe() {
  const [mounted, setMounted] = useState(false);

  // Set mounted flag to prevent hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white font-['Inter'] flex items-center justify-center">
        <div className="text-[#111111] font-bold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      {/* Header - Nike Style */}
      <header className="bg-white border-b border-gray-200 py-6 px-8 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-black text-[#111111] tracking-tight">
            KRAZY KREATORS
          </div>
          
          {/* Navigation - Nike Style Bold */}
          <nav className="hidden md:flex space-x-10">
            <span className="text-sm font-black text-[#111111] hover:text-[#CBB49A] transition-colors cursor-pointer tracking-wide">
              SERVICES
            </span>
            <span className="text-sm font-black text-[#111111] hover:text-[#CBB49A] transition-colors cursor-pointer tracking-wide">
              PROCESS
            </span>
            <span className="text-sm font-black text-[#111111] hover:text-[#CBB49A] transition-colors cursor-pointer tracking-wide">
              ABOUT
            </span>
            <span className="text-sm font-black text-[#111111] hover:text-[#CBB49A] transition-colors cursor-pointer tracking-wide">
              CONTACT
            </span>
          </nav>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <div className="w-7 h-0.5 bg-[#111111] mb-1.5"></div>
            <div className="w-7 h-0.5 bg-[#111111] mb-1.5"></div>
            <div className="w-7 h-0.5 bg-[#111111]"></div>
          </div>
        </div>
      </header>

      {/* Hero Section - Nike Style Dynamic */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-[#F5F5F5] overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-[#C4C4C4] opacity-40"></div>
        
        {/* Dynamic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        
        {/* Content - Nike Style Dynamic */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
          <h1 className="text-8xl md:text-9xl font-black text-[#111111] mb-10 tracking-tight leading-none">
            YOUR CREATIVE
          </h1>
          <h1 className="text-8xl md:text-9xl font-black text-[#111111] mb-16 tracking-tight leading-none">
            PARTNER
          </h1>
          <p className="text-2xl text-[#111111] mb-16 font-bold tracking-wide">
            From first sketch to final shipment
          </p>
          <button className="bg-[#111111] text-white px-20 py-6 font-black text-xl tracking-wider hover:bg-[#333333] transition-colors transform hover:scale-105">
            START PROJECT
          </button>
        </div>
      </section>

      {/* Services Section - Nike Style Layered */}
      <section id="services" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-6xl font-black text-center mb-24 text-[#111111] tracking-tight">
            OUR SERVICES
          </h2>
          
          {/* Nike Style Layered Grid */}
          <div className="grid md:grid-cols-3 gap-16 relative">
            {/* Design */}
            <div className="text-center group transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-96 bg-[#C4C4C4] mb-10 group-hover:opacity-80 transition-opacity shadow-2xl"></div>
              <h3 className="text-4xl font-black mb-8 text-[#111111] tracking-tight">DESIGN</h3>
              <p className="text-lg text-gray-600 mb-10 font-bold leading-relaxed">
                Creative design solutions tailored to your brand vision
              </p>
              <button className="text-[#111111] border-4 border-[#111111] px-10 py-4 font-black tracking-wider hover:bg-[#111111] hover:text-white transition-colors transform hover:scale-105">
                CONNECT WITH TEAM
              </button>
            </div>

            {/* Manufacturing */}
            <div className="text-center group transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-96 bg-[#C4C4C4] mb-10 group-hover:opacity-80 transition-opacity shadow-2xl"></div>
              <h3 className="text-4xl font-black mb-8 text-[#111111] tracking-tight">MANUFACTURING</h3>
              <p className="text-lg text-gray-600 mb-10 font-bold leading-relaxed">
                Premium quality manufacturing with strict quality control
              </p>
              <button className="text-[#111111] border-4 border-[#111111] px-10 py-4 font-black tracking-wider hover:bg-[#111111] hover:text-white transition-colors transform hover:scale-105">
                CONNECT WITH TEAM
              </button>
            </div>

            {/* End-to-End */}
            <div className="text-center group transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-96 bg-[#C4C4C4] mb-10 group-hover:opacity-80 transition-opacity shadow-2xl"></div>
              <h3 className="text-4xl font-black mb-8 text-[#111111] tracking-tight">END-TO-END</h3>
              <p className="text-lg text-gray-600 mb-10 font-bold leading-relaxed">
                Complete solution from concept to delivery
              </p>
              <button className="text-[#111111] border-4 border-[#111111] px-10 py-4 font-black tracking-wider hover:bg-[#111111] hover:text-white transition-colors transform hover:scale-105">
                CONNECT WITH TEAM
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Nike Style Dynamic */}
      <section id="how-it-works" className="py-32 bg-[#F5F5F5] relative">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-6xl font-black text-center mb-24 text-[#111111] tracking-tight">
            HOW IT WORKS
          </h2>
          
          {/* Nike Style Dynamic Timeline */}
          <div className="grid md:grid-cols-4 gap-16">
            {[
              { month: 'MONTH 1', title: 'DISCOVERY', desc: 'Initial consultation and project scope' },
              { month: 'MONTH 2', title: 'DESIGN', desc: 'Creative development and sample creation' },
              { month: 'MONTH 3', title: 'PRODUCTION', desc: 'Manufacturing with quality assurance' },
              { month: 'MONTH 4', title: 'DELIVERY', desc: 'Final delivery and ongoing support' }
            ].map((step, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-sm font-black text-[#CBB49A] mb-6 tracking-widest">{step.month}</div>
                <h3 className="text-3xl font-black mb-6 text-[#111111] tracking-tight">{step.title}</h3>
                <p className="text-lg text-gray-600 font-bold leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview - Nike Style Dynamic */}
      <section id="dashboard" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-6xl font-black mb-16 text-[#111111] tracking-tight">
                CLIENT DASHBOARD
              </h2>
              <h3 className="text-4xl font-black mb-10 text-[#111111] tracking-tight">
                Track Your Project Progress
              </h3>
              <ul className="space-y-8">
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-[#CBB49A] mr-8"></div>
                  <span className="text-xl font-bold text-[#111111] tracking-wide">Track Samples & Prototypes</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-[#CBB49A] mr-8"></div>
                  <span className="text-xl font-bold text-[#111111] tracking-wide">Approve Designs in Real-time</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-[#CBB49A] mr-8"></div>
                  <span className="text-xl font-bold text-[#111111] tracking-wide">Monitor Production Timeline</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-[#CBB49A] mr-8"></div>
                  <span className="text-xl font-bold text-[#111111] tracking-wide">Access Quality Reports</span>
                </li>
              </ul>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-[500px] bg-[#C4C4C4] shadow-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Retainer Benefits - Nike Style Dynamic */}
      <section id="retainer" className="py-32 bg-[#F5F5F5] relative">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-6xl font-black text-center mb-24 text-[#111111] tracking-tight">
            RETAINER MODEL
          </h2>
          
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="text-4xl font-black mb-16 text-[#111111] tracking-tight">
                Why Choose Our Retainer Model?
              </h3>
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#CBB49A] mr-8 mt-2"></div>
                  <div>
                    <h4 className="font-black mb-4 text-[#111111] tracking-wide text-2xl">PREDICTABLE COSTS</h4>
                    <p className="text-lg text-gray-600 font-bold">Fixed monthly retainer with no hidden fees</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#CBB49A] mr-8 mt-2"></div>
                  <div>
                    <h4 className="font-black mb-4 text-[#111111] tracking-wide text-2xl">PRIORITY ACCESS</h4>
                    <p className="text-lg text-gray-600 font-bold">Dedicated team and faster turnaround times</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#CBB49A] mr-8 mt-2"></div>
                  <div>
                    <h4 className="font-black mb-4 text-[#111111] tracking-wide text-2xl">SCALABLE SOLUTIONS</h4>
                    <p className="text-lg text-gray-600 font-bold">Flexible capacity to match your growth</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-[500px] bg-[#C4C4C4] shadow-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Nike Style Dynamic */}
      <section id="why-us" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-6xl font-black text-center mb-24 text-[#111111] tracking-tight">
            WHY KRAZY KREATORS?
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-4 border-gray-300">
                  <th className="p-10 text-left font-black text-[#111111] tracking-wide text-2xl">FEATURE</th>
                  <th className="p-10 text-center font-black text-[#111111] tracking-wide text-2xl">KRAZY KREATORS</th>
                  <th className="p-10 text-center font-black text-[#111111] tracking-wide text-2xl">TRADITIONAL VENDORS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-10 font-black text-[#111111] text-2xl">QUALITY CONTROL</td>
                  <td className="p-10 text-center">
                    <span className="text-lg font-black text-[#CBB49A] tracking-wide">✓ PREMIUM</span>
                  </td>
                  <td className="p-10 text-center">
                    <span className="text-lg font-black text-gray-400 tracking-wide">✗ VARIABLE</span>
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-10 font-black text-[#111111] text-2xl">COMMUNICATION</td>
                  <td className="p-10 text-center">
                    <span className="text-lg font-black text-[#CBB49A] tracking-wide">✓ REAL-TIME</span>
                  </td>
                  <td className="p-10 text-center">
                    <span className="text-lg font-black text-gray-400 tracking-wide">✗ LIMITED</span>
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-10 font-black text-[#111111] text-2xl">TIMELINE</td>
                  <td className="p-10 text-center">
                    <span className="text-lg font-black text-[#CBB49A] tracking-wide">✓ GUARANTEED</span>
                  </td>
                  <td className="p-10 text-center">
                    <span className="text-lg font-black text-gray-400 tracking-wide">✗ UNPREDICTABLE</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-10 font-black text-[#111111] text-2xl">COST TRANSPARENCY</td>
                  <td className="p-10 text-center">
                    <span className="text-lg font-black text-[#CBB49A] tracking-wide">✓ CLEAR</span>
                  </td>
                  <td className="p-10 text-center">
                    <span className="text-lg font-black text-gray-400 tracking-wide">✗ HIDDEN FEES</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials - Nike Style Dynamic */}
      <section id="testimonials" className="py-32 bg-[#F5F5F5] relative">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-6xl font-black text-center mb-24 text-[#111111] tracking-tight">
            CASE STUDIES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            {/* Client 1 */}
            <div className="bg-white p-10 transform hover:scale-105 transition-transform duration-300 shadow-2xl">
              <div className="w-24 h-24 bg-[#C4C4C4] mb-8"></div>
              <p className="text-lg text-gray-600 mb-8 font-bold leading-relaxed italic">
                "Krazy Kreators transformed our design process completely. The quality and attention to detail exceeded our expectations."
              </p>
              <div className="w-full h-48 bg-[#C4C4C4]"></div>
            </div>

            {/* Client 2 */}
            <div className="bg-white p-10 transform hover:scale-105 transition-transform duration-300 shadow-2xl">
              <div className="w-24 h-24 bg-[#C4C4C4] mb-8"></div>
              <p className="text-lg text-gray-600 mb-8 font-bold leading-relaxed italic">
                "The retainer model saved us 40% on costs while improving our production timeline significantly."
              </p>
              <div className="w-full h-48 bg-[#C4C4C4]"></div>
            </div>
          </div>

          {/* Video Testimonial */}
          <div className="bg-white p-16 text-center transform hover:scale-105 transition-transform duration-300 shadow-2xl">
            <div className="w-full h-96 bg-[#C4C4C4] mb-10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#CBB49A] flex items-center justify-center">
                  <span className="text-white text-4xl">▶</span>
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-black mb-6 text-[#111111] tracking-tight">CLIENT SUCCESS STORY</h3>
            <p className="text-lg text-gray-600 font-bold">Watch how we helped transform their brand</p>
          </div>
        </div>
      </section>

      {/* Resources - Nike Style Dynamic */}
      <section id="resources" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-6xl font-black text-center mb-24 text-[#111111] tracking-tight">
            LEARNING RESOURCES
          </h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { title: 'DESIGN TRENDS 2024', type: 'BLOG', cta: 'READ MORE' },
              { title: 'MANUFACTURING BEST PRACTICES', type: 'VIDEO', cta: 'WATCH NOW' },
              { title: 'QUALITY CONTROL GUIDE', type: 'BLOG', cta: 'READ MORE' }
            ].map((resource, index) => (
              <div key={index} className="group transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-64 bg-[#C4C4C4] mb-8 group-hover:opacity-80 transition-opacity shadow-2xl"></div>
                <div className="text-sm font-black text-[#CBB49A] mb-3 tracking-widest">{resource.type}</div>
                <h3 className="text-2xl font-black mb-6 text-[#111111] tracking-tight">{resource.title}</h3>
                <button className="text-[#111111] border-4 border-[#111111] px-8 py-3 font-black tracking-wider hover:bg-[#111111] hover:text-white transition-colors transform hover:scale-105">
                  {resource.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - Nike Style Dynamic */}
      <section id="contact" className="py-32 bg-[#CBB49A] relative">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-6xl font-black text-center mb-24 text-[#111111] tracking-tight">
            START YOUR PROJECT
          </h2>
          
          <form className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="block text-[#111111] font-black mb-4 tracking-wide text-xl">NAME</label>
              <input 
                type="text" 
                className="w-full p-6 border-4 border-[#111111] bg-transparent text-[#111111] font-bold tracking-wide placeholder-gray-600"
                placeholder="Your full name"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label className="block text-[#111111] font-black mb-4 tracking-wide text-xl">EMAIL</label>
              <input 
                type="email" 
                className="w-full p-6 border-4 border-[#111111] bg-transparent text-[#111111] font-bold tracking-wide placeholder-gray-600"
                placeholder="your@email.com"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label className="block text-[#111111] font-black mb-4 tracking-wide text-xl">BRAND STAGE</label>
              <select className="w-full p-6 border-4 border-[#111111] bg-transparent text-[#111111] font-bold tracking-wide" suppressHydrationWarning>
                <option>Select your brand stage</option>
                <option>STARTUP</option>
                <option>GROWING</option>
                <option>ESTABLISHED</option>
              </select>
            </div>
            <div>
              <label className="block text-[#111111] font-black mb-4 tracking-wide text-xl">SERVICES NEEDED</label>
              <select className="w-full p-6 border-4 border-[#111111] bg-transparent text-[#111111] font-bold tracking-wide" suppressHydrationWarning>
                <option>Select services</option>
                <option>DESIGN ONLY</option>
                <option>MANUFACTURING ONLY</option>
                <option>END-TO-END</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit" 
                className="w-full bg-[#111111] text-white py-8 font-black text-2xl tracking-wider hover:bg-[#333333] transition-colors transform hover:scale-105"
              >
                GET STARTED
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* About - Nike Style Dynamic */}
      <section id="about" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-6xl font-black mb-16 text-[#111111] tracking-tight">OUR ORIGIN</h2>
              <p className="text-lg text-gray-600 mb-10 font-bold leading-relaxed">
                Founded with a vision to bridge the gap between creative design and efficient manufacturing, 
                Krazy Kreators has been at the forefront of fashion innovation for over a decade.
              </p>
              <div className="w-48 h-48 bg-[#C4C4C4] shadow-2xl"></div>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-10 text-[#111111] tracking-tight">OUR VISION</h3>
              <p className="text-lg text-gray-600 mb-8 font-bold leading-relaxed">
                To become the leading partner for fashion brands seeking innovative, 
                sustainable, and efficient design and manufacturing solutions.
              </p>
              <p className="text-lg text-gray-600 font-bold leading-relaxed">
                We believe in the power of collaboration, transparency, and continuous 
                improvement to deliver exceptional results for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Nike Style Dynamic */}
      <footer className="bg-[#111111] text-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16">
            <div>
              <div className="text-3xl font-black mb-8 tracking-wide">KRAZY KREATORS</div>
              <p className="text-lg text-gray-400 font-bold leading-relaxed">
                Your creative and production partner for innovative fashion solutions.
              </p>
            </div>
            <div>
              <h4 className="font-black mb-8 tracking-wide text-xl">SERVICES</h4>
              <ul className="space-y-4 text-lg text-gray-400 font-bold">
                <li>DESIGN</li>
                <li>MANUFACTURING</li>
                <li>END-TO-END</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-8 tracking-wide text-xl">COMPANY</h4>
              <ul className="space-y-4 text-lg text-gray-400 font-bold">
                <li>ABOUT</li>
                <li>CASE STUDIES</li>
                <li>CONTACT</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-8 tracking-wide text-xl">CONNECT</h4>
              <div className="flex space-x-6">
                <div className="w-12 h-12 bg-[#C4C4C4]"></div>
                <div className="w-12 h-12 bg-[#C4C4C4]"></div>
                <div className="w-12 h-12 bg-[#C4C4C4]"></div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-gray-800 mt-16 pt-10 text-center text-lg text-gray-400 font-bold">
            <p>&copy; 2024 KRAZY KREATORS. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 