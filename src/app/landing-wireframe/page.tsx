'use client';

import { useState } from 'react';

export default function LandingWireframe() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-[#111111] text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Krazy Kreators</div>
          <nav className="hidden md:flex space-x-8">
            <span className="text-gray-300">Services</span>
            <span className="text-gray-300">How It Works</span>
            <span className="text-gray-300">About</span>
            <span className="text-gray-300">Contact</span>
          </nav>
          <div className="md:hidden">
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#111111] to-[#333333]">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="w-full h-96 bg-[#C4C4C4] mb-8 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 text-lg">Hero Banner Image</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 font-['Montserrat']">
            Your Creative & Production Partner
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            From first sketch to final shipment
          </p>
          <button className="bg-[#CBB49A] hover:bg-[#B8A589] text-[#111111] px-8 py-4 rounded-lg font-bold text-lg transition-colors">
            Start Your Project
          </button>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Montserrat']">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Design */}
            <div className="text-center p-8 border border-gray-200 rounded-lg">
              <div className="w-24 h-24 bg-[#C4C4C4] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-600">🎨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Design</h3>
              <p className="text-gray-600 mb-6">
                Creative design solutions tailored to your brand vision
              </p>
              <button className="bg-[#111111] text-white px-6 py-3 rounded-lg hover:bg-[#333333] transition-colors">
                Connect with Team
              </button>
            </div>

            {/* Manufacturing */}
            <div className="text-center p-8 border border-gray-200 rounded-lg">
              <div className="w-24 h-24 bg-[#C4C4C4] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-600">🏭</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Manufacturing</h3>
              <p className="text-gray-600 mb-6">
                Premium quality manufacturing with strict quality control
              </p>
              <button className="bg-[#111111] text-white px-6 py-3 rounded-lg hover:bg-[#333333] transition-colors">
                Connect with Team
              </button>
            </div>

            {/* End-to-End */}
            <div className="text-center p-8 border border-gray-200 rounded-lg">
              <div className="w-24 h-24 bg-[#C4C4C4] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-600">🔄</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">End-to-End</h3>
              <p className="text-gray-600 mb-6">
                Complete solution from concept to delivery
              </p>
              <button className="bg-[#111111] text-white px-6 py-3 rounded-lg hover:bg-[#333333] transition-colors">
                Connect with Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Montserrat']">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { month: 'Month 1', title: 'Discovery & Planning', desc: 'Initial consultation and project scope' },
              { month: 'Month 2', title: 'Design & Prototyping', desc: 'Creative development and sample creation' },
              { month: 'Month 3', title: 'Production & QC', desc: 'Manufacturing with quality assurance' },
              { month: 'Month 4', title: 'Delivery & Support', desc: 'Final delivery and ongoing support' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#C4C4C4] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-600 font-bold">{index + 1}</span>
                </div>
                <div className="text-sm text-[#CBB49A] font-bold mb-2">{step.month}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Dashboard Preview */}
      <section id="dashboard" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Montserrat']">
            Client Dashboard Preview
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-80 bg-[#C4C4C4] rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-600">Dashboard Screenshot</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Track Your Project Progress</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#CBB49A] rounded-full mr-4"></div>
                  <span>Track Samples & Prototypes</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#CBB49A] rounded-full mr-4"></div>
                  <span>Approve Designs in Real-time</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#CBB49A] rounded-full mr-4"></div>
                  <span>Monitor Production Timeline</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#CBB49A] rounded-full mr-4"></div>
                  <span>Access Quality Reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Retainer Model Benefits */}
      <section id="retainer" className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Montserrat']">
            Retainer Model Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Retainer Model?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#CBB49A] rounded-full mr-4 flex items-center justify-center text-white font-bold">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">Predictable Costs</h4>
                    <p className="text-gray-600">Fixed monthly retainer with no hidden fees</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#CBB49A] rounded-full mr-4 flex items-center justify-center text-white font-bold">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">Priority Access</h4>
                    <p className="text-gray-600">Dedicated team and faster turnaround times</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#CBB49A] rounded-full mr-4 flex items-center justify-center text-white font-bold">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">Scalable Solutions</h4>
                    <p className="text-gray-600">Flexible capacity to match your growth</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full h-80 bg-[#C4C4C4] rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Cost-Saving Comparison Chart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Krazy Kreators */}
      <section id="why-us" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Montserrat']">
            Why Krazy Kreators?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#111111] text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Krazy Kreators</th>
                  <th className="p-4 text-center">Traditional Vendors</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-bold">Quality Control</td>
                  <td className="p-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">✓ Premium</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">✗ Variable</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold">Communication</td>
                  <td className="p-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">✓ Real-time</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">✗ Limited</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold">Timeline</td>
                  <td className="p-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">✓ Guaranteed</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">✗ Unpredictable</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Cost Transparency</td>
                  <td className="p-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">✓ Clear</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">✗ Hidden Fees</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Studies + Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Montserrat']">
            Case Studies + Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Client 1 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-[#C4C4C4] rounded-full mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Logo</span>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Krazy Kreators transformed our design process completely. The quality and attention to detail exceeded our expectations."
              </p>
              <div className="w-full h-32 bg-[#C4C4C4] rounded flex items-center justify-center">
                <span className="text-gray-600">Case Study Image</span>
              </div>
            </div>

            {/* Client 2 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="w-16 h-16 bg-[#C4C4C4] rounded-full mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Logo</span>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The retainer model saved us 40% on costs while improving our production timeline significantly."
              </p>
              <div className="w-full h-32 bg-[#C4C4C4] rounded flex items-center justify-center">
                <span className="text-gray-600">Case Study Image</span>
              </div>
            </div>
          </div>

          {/* Video Testimonial */}
          <div className="bg-white p-8 rounded-lg text-center">
            <div className="w-full h-64 bg-[#C4C4C4] rounded-lg mb-4 flex items-center justify-center relative">
              <div className="w-16 h-16 bg-[#CBB49A] rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">▶</span>
              </div>
              <span className="absolute bottom-4 left-4 text-gray-600">Video Testimonial</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Client Success Story</h3>
            <p className="text-gray-600">Watch how we helped transform their brand</p>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section id="resources" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Montserrat']">
            Learning Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Design Trends 2024', type: 'Blog', cta: 'Read More' },
              { title: 'Manufacturing Best Practices', type: 'Video', cta: 'Watch Now' },
              { title: 'Quality Control Guide', type: 'Blog', cta: 'Read More' }
            ].map((resource, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-48 bg-[#C4C4C4] flex items-center justify-center">
                  <span className="text-gray-600">Resource Image</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#CBB49A] font-bold mb-2">{resource.type}</div>
                  <h3 className="text-xl font-bold mb-4">{resource.title}</h3>
                  <button className="bg-[#111111] text-white px-4 py-2 rounded hover:bg-[#333333] transition-colors">
                    {resource.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Form */}
      <section id="contact" className="py-20 px-6 bg-[#CBB49A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Montserrat'] text-[#111111]">
            Start Your Project
          </h2>
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#111111] font-bold mb-2">Name</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-[#111111] font-bold mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-[#111111] font-bold mb-2">Brand Stage</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>Select your brand stage</option>
                <option>Startup</option>
                <option>Growing</option>
                <option>Established</option>
              </select>
            </div>
            <div>
              <label className="block text-[#111111] font-bold mb-2">Services Needed</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>Select services</option>
                <option>Design Only</option>
                <option>Manufacturing Only</option>
                <option>End-to-End</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit" 
                className="w-full bg-[#111111] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#333333] transition-colors"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-['Montserrat']">Our Origin</h2>
              <p className="text-gray-600 mb-6">
                Founded with a vision to bridge the gap between creative design and efficient manufacturing, 
                Krazy Kreators has been at the forefront of fashion innovation for over a decade.
              </p>
              <div className="w-32 h-32 bg-[#C4C4C4] rounded-full flex items-center justify-center">
                <span className="text-gray-600">Founder</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To become the leading partner for fashion brands seeking innovative, 
                sustainable, and efficient design and manufacturing solutions.
              </p>
              <p className="text-gray-600">
                We believe in the power of collaboration, transparency, and continuous 
                improvement to deliver exceptional results for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Krazy Kreators</div>
              <p className="text-gray-400">
                Your creative and production partner for innovative fashion solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Design</li>
                <li>Manufacturing</li>
                <li>End-to-End</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Case Studies</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-[#C4C4C4] rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-[#C4C4C4] rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm">in</span>
                </div>
                <div className="w-8 h-8 bg-[#C4C4C4] rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm">ig</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Krazy Kreators. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 