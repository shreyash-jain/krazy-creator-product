'use client';

import { useState, useEffect } from 'react';
import { FiPackage, FiShoppingCart, FiDatabase, FiBookOpen, FiDownload, FiTrendingUp, FiUsers, FiDollarSign, FiZap, FiTarget } from 'react-icons/fi';

export default function ZaraWireframe() {
  const [mounted, setMounted] = useState(false);

  // Set mounted flag to prevent hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Download form modal state
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandName: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // FAQ accordion state
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleDownloadClick = (resource: string) => {
    setSelectedResource(resource);
    setShowFormModal(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setShowFormModal(false);
      setFormData({ name: '', email: '', brandName: '', interest: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] font-['Inter'] flex items-center justify-center">
        <div className="text-[#111111] font-medium">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-['Inter']">
      {/* Header - Zara Style Minimal */}
      <header className="bg-white border-b border-gray-100 py-4 md:py-6 px-4 md:px-8 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg md:text-2xl font-light text-[#111111] tracking-wider">
            KRAZY KREATORS
          </div>
          
          {/* Navigation - Zara Style Light */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            <span 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-light text-[#111111] hover:text-[#CBB49A] transition-colors cursor-pointer tracking-wide"
            >
              SERVICES
            </span>
            <span 
              onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-light text-[#111111] hover:text-[#CBB49A] transition-colors cursor-pointer tracking-wide"
            >
              RESOURCES
            </span>
            <span 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-light text-[#111111] hover:text-[#CBB49A] transition-colors cursor-pointer tracking-wide"
            >
              PRICING
            </span>
            <span 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-light text-[#111111] hover:text-[#CBB49A] transition-colors cursor-pointer tracking-wide"
            >
              ABOUT
            </span>
            <span 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-light text-[#111111] hover:text-[#CBB49A] transition-colors cursor-pointer tracking-wide"
            >
              CONTACT
            </span>
          </nav>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <div className="w-5 h-px bg-[#111111] mb-1"></div>
            <div className="w-5 h-px bg-[#111111] mb-1"></div>
            <div className="w-5 h-px bg-[#111111]"></div>
          </div>
        </div>
      </header>

      {/* Hero Section - Zara Style Full Width */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image from Unsplash */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Clothing being sewn and manufactured"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Content - Zara Style Editorial */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-4 md:mb-6 tracking-wide leading-none">
            YOUR CREATIVE PARTNER
          </h1>
          <p className="text-base md:text-lg text-white mb-8 md:mb-12 font-light tracking-wide">
            From concept to fulfillment
          </p>
          <button className="bg-[#111111] text-white px-8 md:px-12 py-3 md:py-4 font-light text-base md:text-lg tracking-wider hover:bg-[#CBB49A] transition-colors">
            START YOUR PROJECT
          </button>
        </div>
      </section>

      {/* Existing Clients Carousel */}
      <section className="py-12 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-12 md:mb-16 text-[#111111] tracking-wide">
            TRUSTED BY LEADING BRANDS
          </h2>
          
          <div className="relative overflow-hidden">
            {/* Carousel Container */}
            <div className="flex animate-scroll">
              {/* Client Logos - Duplicated for seamless loop */}
              {[
                { name: 'URBAN STYLE', category: 'Streetwear' },
                { name: 'ECO FASHION', category: 'Sustainable' },
                { name: 'LUXURY BRAND', category: 'Premium' },
                { name: 'MINIMALIST', category: 'Contemporary' },
                { name: 'AVANT-GARDE', category: 'Experimental' },
                { name: 'STREETWEAR', category: 'Urban' },
                { name: 'SPORT LUXE', category: 'Athletic' },
                { name: 'CULTURAL', category: 'Heritage' },
                // Duplicate for seamless loop
                { name: 'URBAN STYLE', category: 'Streetwear' },
                { name: 'ECO FASHION', category: 'Sustainable' },
                { name: 'LUXURY BRAND', category: 'Premium' },
                { name: 'MINIMALIST', category: 'Contemporary' },
                { name: 'AVANT-GARDE', category: 'Experimental' },
                { name: 'STREETWEAR', category: 'Urban' },
                { name: 'SPORT LUXE', category: 'Athletic' },
                { name: 'CULTURAL', category: 'Heritage' }
              ].map((client, index) => (
                <div key={index} className="flex-shrink-0 mx-4 md:mx-8 group cursor-pointer">
                  <div className="bg-white p-4 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[160px] md:min-w-[200px]">
                    <div className="h-12 md:h-16 bg-gray-300 rounded mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300"></div>
                    <h3 className="text-sm md:text-lg font-light text-[#111111] mb-1 md:mb-2 tracking-wide">{client.name}</h3>
                    <p className="text-xs md:text-sm text-gray-500 font-light">{client.category}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gradient Overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F5F5F5] to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F5F5] to-transparent pointer-events-none"></div>
          </div>
          
          {/* Client Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-[#111111] mb-2">50+</div>
              <div className="text-xs md:text-sm text-gray-600 font-light tracking-wide">BRANDS SERVED</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-[#111111] mb-2">500+</div>
              <div className="text-xs md:text-sm text-gray-600 font-light tracking-wide">PROJECTS COMPLETED</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-[#111111] mb-2">98%</div>
              <div className="text-xs md:text-sm text-gray-600 font-light tracking-wide">CLIENT SATISFACTION</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Krazy Kreators Does - Bento Grid */}
      <section id="services" className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-16 md:mb-24 text-[#111111] tracking-wide">
            WHAT KRAZY KREATORS DOES
          </h2>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {/* Main Service Cards */}
            <div className="md:col-span-2 lg:col-span-2 bg-[#F5F5F5] p-6 md:p-8 rounded-lg hover:bg-[#CBB49A]/10 transition-colors duration-300 cursor-pointer group">
              <div className="h-32 md:h-48 bg-gray-300 rounded-lg mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300"></div>
              <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 text-[#111111] tracking-wide">DESIGN SERVICES</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 font-light leading-relaxed">
                Transform your vision into stunning designs with our expert design team.
              </p>
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#CBB49A] mr-3"></div>
                  <span className="text-xs md:text-sm font-light text-[#111111]">Custom fashion design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#CBB49A] mr-3"></div>
                  <span className="text-xs md:text-sm font-light text-[#111111]">Pattern making</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#CBB49A] mr-3"></div>
                  <span className="text-xs md:text-sm font-light text-[#111111]">Tech pack development</span>
                </div>
              </div>
              <button 
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[#111111] border border-[#111111] px-4 md:px-6 py-2 text-xs md:text-sm font-light tracking-wide hover:bg-[#111111] hover:text-white transition-colors"
              >
                CONNECT WITH DESIGN TEAM
              </button>
            </div>

            <div className="md:col-span-1 lg:col-span-2 bg-[#F5F5F5] p-6 md:p-8 rounded-lg hover:bg-[#CBB49A]/10 transition-colors duration-300 cursor-pointer group">
              <div className="h-32 md:h-48 bg-gray-300 rounded-lg mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300"></div>
              <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 text-[#111111] tracking-wide">MANUFACTURING</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 font-light leading-relaxed">
                Bring your designs to life with premium manufacturing capabilities.
              </p>
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#CBB49A] mr-3"></div>
                  <span className="text-xs md:text-sm font-light text-[#111111]">Sample development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#CBB49A] mr-3"></div>
                  <span className="text-xs md:text-sm font-light text-[#111111]">Bulk production</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#CBB49A] mr-3"></div>
                  <span className="text-xs md:text-sm font-light text-[#111111]">Quality control</span>
                </div>
              </div>
              <button 
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[#111111] border border-[#111111] px-4 md:px-6 py-2 text-xs md:text-sm font-light tracking-wide hover:bg-[#111111] hover:text-white transition-colors"
              >
                CONNECT WITH MANUFACTURING TEAM
              </button>
            </div>

            {/* Feature Cards */}
            <div className="bg-[#F5F5F5] p-4 md:p-6 rounded-lg hover:bg-[#CBB49A]/10 transition-colors duration-300 cursor-pointer group">
              <div className="h-24 md:h-32 bg-gray-300 rounded-lg mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300"></div>
              <h4 className="text-base md:text-lg font-light mb-2 text-[#111111] tracking-wide">BRAND IDENTITY</h4>
              <p className="text-xs md:text-sm text-gray-600 font-light">Complete brand development</p>
            </div>

            <div className="bg-[#F5F5F5] p-4 md:p-6 rounded-lg hover:bg-[#CBB49A]/10 transition-colors duration-300 cursor-pointer group">
              <div className="h-24 md:h-32 bg-gray-300 rounded-lg mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300"></div>
              <h4 className="text-base md:text-lg font-light mb-2 text-[#111111] tracking-wide">PROTOTYPING</h4>
              <p className="text-xs md:text-sm text-gray-600 font-light">Rapid sample development</p>
            </div>

            <div className="bg-[#F5F5F5] p-4 md:p-6 rounded-lg hover:bg-[#CBB49A]/10 transition-colors duration-300 cursor-pointer group">
              <div className="h-24 md:h-32 bg-gray-300 rounded-lg mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300"></div>
              <h4 className="text-base md:text-lg font-light mb-2 text-[#111111] tracking-wide">QUALITY ASSURANCE</h4>
              <p className="text-xs md:text-sm text-gray-600 font-light">Rigorous testing process</p>
            </div>

            <div className="bg-[#F5F5F5] p-4 md:p-6 rounded-lg hover:bg-[#CBB49A]/10 transition-colors duration-300 cursor-pointer group">
              <div className="h-24 md:h-32 bg-gray-300 rounded-lg mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300"></div>
              <h4 className="text-base md:text-lg font-light mb-2 text-[#111111] tracking-wide">PACKAGING</h4>
              <p className="text-xs md:text-sm text-gray-600 font-light">Custom packaging solutions</p>
            </div>

            {/* End-to-End Service Card */}
            <div className="md:col-span-3 lg:col-span-4 bg-gradient-to-r from-[#111111] to-[#CBB49A] p-6 md:p-8 rounded-lg text-white hover:scale-[1.02] transition-transform duration-300 cursor-pointer group">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-light mb-4 md:mb-6 tracking-wide">END-TO-END SERVICE</h3>
                  <p className="text-base md:text-lg mb-4 md:mb-6 font-light leading-relaxed opacity-90">
                    Complete fashion solutions from concept to delivery. One team, one process, seamless execution.
                  </p>
                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    <div className="flex items-center">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white mr-3 md:mr-4"></div>
                      <span className="text-sm md:text-base font-light">Full design & development cycle</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white mr-3 md:mr-4"></div>
                      <span className="text-sm md:text-base font-light">Production management & oversight</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white mr-3 md:mr-4"></div>
                      <span className="text-sm md:text-base font-light">Logistics & delivery coordination</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-[#111111] px-6 md:px-8 py-3 md:py-4 font-light tracking-wide hover:bg-[#F5F5F5] transition-colors text-sm md:text-base"
                  >
                    START YOUR PROJECT
                  </button>
                </div>
                <div>
                  <div className="h-48 md:h-64 bg-white/20 rounded-lg group-hover:scale-105 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Design to Shelf - Immersive Storytelling */}
      <section id="how-it-works" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] mb-6 tracking-wide">
              From Design to Shelf in 4 Months
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Experience the complete journey of your fashion collection, from initial concept to final delivery, 
              with transparent tracking at every step.
            </p>
          </div>
          
          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-24">
            {/* Month 1: Design Collaboration */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-6">
                  <span className="text-sm font-light text-[#CBB49A] tracking-widest">MONTH 1</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#111111] mt-2 mb-4">Design Collaboration</h3>
                </div>
                <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-8">
                  Your journey begins with a collaborative design session where our expert team works closely with you 
                  to understand your vision, brand identity, and market requirements. We translate your ideas into 
                  detailed technical specifications and mood boards.
                </p>
                
                {/* Dashboard Preview */}
                <div className="bg-[#F5F5F5] p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-[#111111]">PROJECT DASHBOARD</h4>
                    <span className="text-xs text-[#CBB49A] bg-[#CBB49A]/10 px-2 py-1 rounded">ACTIVE</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Assigned Designer</span>
                      <span className="text-xs font-medium text-[#111111]">Sarah Chen</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Design Status</span>
                      <span className="text-xs text-green-600">In Progress</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Next Milestone</span>
                      <span className="text-xs font-medium text-[#111111]">Initial Sketches</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative group">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Design Collaboration"
                    className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white/90 text-sm font-light italic">
                      "See your concepts come to life through collaborative design sessions"
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Month 2: Sampling & Sourcing */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Sampling & Sourcing"
                    className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white/90 text-sm font-light italic">
                      "Witness the transformation from sketches to physical samples"
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <span className="text-sm font-light text-[#CBB49A] tracking-widest">MONTH 2</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#111111] mt-2 mb-4">Sampling & Sourcing</h3>
                </div>
                <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-8">
                  We create detailed samples using premium materials sourced from our network of trusted suppliers. 
                  Each sample undergoes rigorous testing and refinement to ensure it meets your exact specifications 
                  and quality standards.
                </p>
                
                {/* Dashboard Preview */}
                <div className="bg-[#F5F5F5] p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-[#111111]">SAMPLE TRACKING</h4>
                    <span className="text-xs text-[#CBB49A] bg-[#CBB49A]/10 px-2 py-1 rounded">IN PROGRESS</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Sample Status</span>
                      <span className="text-xs text-blue-600">Pattern Making</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Materials Sourced</span>
                      <span className="text-xs font-medium text-[#111111]">3/5 Complete</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Vendor List</span>
                      <span className="text-xs font-medium text-[#111111]">5 Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Month 3: Bulk Production */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-6">
                  <span className="text-sm font-light text-[#CBB49A] tracking-widest">MONTH 3</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#111111] mt-2 mb-4">Bulk Production</h3>
                </div>
                <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-8">
                  With approved samples and sourced materials, we begin full-scale production in our state-of-the-art 
                  facilities. Our production team ensures consistent quality across every piece while maintaining 
                  strict timelines and quality control protocols.
                </p>
                
                {/* Dashboard Preview */}
                <div className="bg-[#F5F5F5] p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-[#111111]">PRODUCTION STATUS</h4>
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">ON TRACK</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Production Progress</span>
                      <span className="text-xs font-medium text-[#111111]">65% Complete</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Units Produced</span>
                      <span className="text-xs font-medium text-[#111111]">1,300 / 2,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Quality Pass Rate</span>
                      <span className="text-xs text-green-600">98.5%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative group">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Bulk Production"
                    className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white/90 text-sm font-light italic">
                      "Watch your collection come to life in our production facilities"
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Month 4: Quality Check & Dispatch */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Quality Check & Dispatch"
                    className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white/90 text-sm font-light italic">
                      "Final quality assurance before your collection reaches the market"
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <span className="text-sm font-light text-[#CBB49A] tracking-widest">MONTH 4</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#111111] mt-2 mb-4">Quality Check & Dispatch</h3>
                </div>
                <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-8">
                  Every piece undergoes our rigorous quality control process before being carefully packaged and 
                  prepared for dispatch. We coordinate with logistics partners to ensure timely delivery to your 
                  specified locations worldwide.
                </p>
                
                {/* Dashboard Preview */}
                <div className="bg-[#F5F5F5] p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-[#111111]">DISPATCH INFO</h4>
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">READY</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Quality Check</span>
                      <span className="text-xs text-green-600">100% Passed</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Packaging Status</span>
                      <span className="text-xs font-medium text-[#111111]">Complete</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Estimated Delivery</span>
                      <span className="text-xs font-medium text-[#111111]">5-7 Days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Personalized Client Dashboard */}
      <section id="client-dashboard" className="py-20 md:py-32 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] mb-6 tracking-wide">
              Your Personalized Client Dashboard
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Clarity. Control. Collaboration — all in one place.
            </p>
          </div>

          {/* Feature Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#CBB49A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-[#111111] mb-2">Real-Time Order Tracking</h3>
                <p className="text-sm md:text-base text-gray-600 font-light">Monitor every stage of your project with live updates and milestone tracking.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#CBB49A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-[#111111] mb-2">Centralized Communication</h3>
                <p className="text-sm md:text-base text-gray-600 font-light">Direct messaging with your assigned team and instant notifications.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#CBB49A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-[#111111] mb-2">Sample & QC Feedback</h3>
                <p className="text-sm md:text-base text-gray-600 font-light">Review samples, provide feedback, and approve quality check results.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#CBB49A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-[#111111] mb-2">Document Vault</h3>
                <p className="text-sm md:text-base text-gray-600 font-light">Secure storage for all project files, contracts, and technical specifications.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#CBB49A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-[#111111] mb-2">Smart Alerts & Notifications</h3>
                <p className="text-sm md:text-base text-gray-600 font-light">Never miss important updates with intelligent alert systems.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#CBB49A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-[#111111] mb-2">Transparent Vendor Coordination</h3>
                <p className="text-sm md:text-base text-gray-600 font-light">Full visibility into vendor assignments and material sourcing progress.</p>
              </div>
            </div>
          </div>

          {/* Dashboard Mockups */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Project Timeline Tracking */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  {/* Mockup UI */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-20 h-3 bg-gray-200 rounded"></div>
                      <div className="w-12 h-3 bg-[#CBB49A] rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="w-3/4 h-2 bg-[#CBB49A] rounded-full"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Week 1</span>
                        <span>Week 4</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <div className="w-16 h-2 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <div className="w-20 h-2 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-14 h-2 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-medium text-[#111111] mb-2">Project Timeline Tracking</h4>
                  <p className="text-xs text-gray-600 font-light">Visual progress tracking with milestone indicators</p>
                </div>
              </div>
            </div>

            {/* Sample Feedback Interface */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  {/* Mockup UI */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-3 bg-gray-200 rounded"></div>
                      <div className="w-8 h-6 bg-[#CBB49A] rounded text-xs text-white flex items-center justify-center">NEW</div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-8 bg-gray-200 rounded"></div>
                      <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-green-100 rounded border border-green-200"></div>
                        <div className="w-6 h-6 bg-yellow-100 rounded border border-yellow-200"></div>
                        <div className="w-6 h-6 bg-red-100 rounded border border-red-200"></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-2 bg-gray-200 rounded"></div>
                      <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                      <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-medium text-[#111111] mb-2">Sample Feedback Interface</h4>
                  <p className="text-xs text-gray-600 font-light">Review and approve samples with detailed feedback</p>
                </div>
              </div>
            </div>

            {/* Vendor Assignment */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  {/* Mockup UI */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-20 h-3 bg-gray-200 rounded"></div>
                      <div className="w-12 h-3 bg-green-500 rounded text-xs text-white flex items-center justify-center">5</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="flex-1">
                          <div className="w-16 h-2 bg-gray-200 rounded mb-1"></div>
                          <div className="w-12 h-2 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="flex-1">
                          <div className="w-14 h-2 bg-gray-200 rounded mb-1"></div>
                          <div className="w-10 h-2 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="flex-1 h-2 bg-green-200 rounded"></div>
                      <div className="flex-1 h-2 bg-blue-200 rounded"></div>
                      <div className="flex-1 h-2 bg-yellow-200 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-medium text-[#111111] mb-2">Vendor Assignment</h4>
                  <p className="text-xs text-gray-600 font-light">Manage vendor relationships and material sourcing</p>
                </div>
              </div>
            </div>

            {/* Final Delivery Update */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  {/* Mockup UI */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-24 h-3 bg-gray-200 rounded"></div>
                      <div className="w-16 h-3 bg-green-500 rounded text-xs text-white flex items-center justify-center">READY</div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-4 bg-gray-200 rounded"></div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>QC Passed</span>
                        <span>100%</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <div className="w-20 h-2 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <div className="w-16 h-2 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <div className="w-18 h-2 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-medium text-[#111111] mb-2">Final Delivery Update</h4>
                  <p className="text-xs text-gray-600 font-light">Track final quality checks and delivery status</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Krazy Kreators Is Different - Comparison Section */}
      <section id="comparison" className="py-20 md:py-32 bg-[#F9F8F7]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] mb-6 tracking-wide">
              How Krazy Kreators Is Different
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              We're not just another vendor. We're your creative growth partner.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-gray-100">
              <div className="p-6 md:p-8 bg-gray-50">
                <h3 className="text-lg md:text-xl font-medium text-[#111111] mb-2">Feature</h3>
                <p className="text-sm text-gray-600 font-light">What you need to know</p>
              </div>
              <div className="p-6 md:p-8 bg-[#CBB49A]/10 border-l border-gray-100">
                <h3 className="text-lg md:text-xl font-medium text-[#111111] mb-2">Krazy Kreators</h3>
                <p className="text-sm text-gray-600 font-light">Your creative partner</p>
              </div>
              <div className="p-6 md:p-8 bg-gray-50 border-l border-gray-100">
                <h3 className="text-lg md:text-xl font-medium text-[#111111] mb-2">Others</h3>
                <p className="text-sm text-gray-600 font-light">Traditional vendors</p>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-gray-100">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="p-6 md:p-8 flex items-center">
                  <div className="w-8 h-8 bg-[#CBB49A]/20 rounded-full flex items-center justify-center mr-4">
                    <div className="w-3 h-3 bg-[#CBB49A] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-medium text-[#111111] mb-1">End-to-end support</h4>
                    <p className="text-sm text-gray-600 font-light">From design to dispatch</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 bg-[#CBB49A]/5 flex items-center border-l border-gray-100">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-base font-medium text-[#111111]">Complete journey support</span>
                </div>
                <div className="p-6 md:p-8 flex items-center border-l border-gray-100">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <span className="text-base text-gray-500">Fragmented services</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="p-6 md:p-8 flex items-center">
                  <div className="w-8 h-8 bg-[#CBB49A]/20 rounded-full flex items-center justify-center mr-4">
                    <div className="w-3 h-3 bg-[#CBB49A] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-medium text-[#111111] mb-1">No or low MOQ</h4>
                    <p className="text-sm text-gray-600 font-light">For emerging brands</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 bg-[#CBB49A]/5 flex items-center border-l border-gray-100">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-base font-medium text-[#111111]">Flexible minimums</span>
                </div>
                <div className="p-6 md:p-8 flex items-center border-l border-gray-100">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <span className="text-base text-gray-500">High MOQ requirements</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="p-6 md:p-8 flex items-center">
                  <div className="w-8 h-8 bg-[#CBB49A]/20 rounded-full flex items-center justify-center mr-4">
                    <div className="w-3 h-3 bg-[#CBB49A] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-medium text-[#111111] mb-1">Real-time tracking</h4>
                    <p className="text-sm text-gray-600 font-light">Dedicated dashboard</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 bg-[#CBB49A]/5 flex items-center border-l border-gray-100">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-base font-medium text-[#111111]">Live project updates</span>
                </div>
                <div className="p-6 md:p-8 flex items-center border-l border-gray-100">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <span className="text-base text-gray-500">Limited visibility</span>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="p-6 md:p-8 flex items-center">
                  <div className="w-8 h-8 bg-[#CBB49A]/20 rounded-full flex items-center justify-center mr-4">
                    <div className="w-3 h-3 bg-[#CBB49A] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-medium text-[#111111] mb-1">Transparent costing</h4>
                    <p className="text-sm text-gray-600 font-light">With tech pack access</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 bg-[#CBB49A]/5 flex items-center border-l border-gray-100">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-base font-medium text-[#111111]">Full cost breakdown</span>
                </div>
                <div className="p-6 md:p-8 flex items-center border-l border-gray-100">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <span className="text-base text-gray-500">Hidden fees & charges</span>
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="p-6 md:p-8 flex items-center">
                  <div className="w-8 h-8 bg-[#CBB49A]/20 rounded-full flex items-center justify-center mr-4">
                    <div className="w-3 h-3 bg-[#CBB49A] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-medium text-[#111111] mb-1">Creative collaboration</h4>
                    <p className="text-sm text-gray-600 font-light">Personalized approach</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 bg-[#CBB49A]/5 flex items-center border-l border-gray-100">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-base font-medium text-[#111111]">Direct designer access</span>
                </div>
                <div className="p-6 md:p-8 flex items-center border-l border-gray-100">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <span className="text-base text-gray-500">Generic solutions</span>
                </div>
              </div>

              {/* Row 6 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="p-6 md:p-8 flex items-center">
                  <div className="w-8 h-8 bg-[#CBB49A]/20 rounded-full flex items-center justify-center mr-4">
                    <div className="w-3 h-3 bg-[#CBB49A] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-medium text-[#111111] mb-1">Expert procurement</h4>
                    <p className="text-sm text-gray-600 font-light">Material & QC led</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 bg-[#CBB49A]/5 flex items-center border-l border-gray-100">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-base font-medium text-[#111111]">Quality-first sourcing</span>
                </div>
                <div className="p-6 md:p-8 flex items-center border-l border-gray-100">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <span className="text-base text-gray-500">Basic quality checks</span>
                </div>
              </div>

              {/* Row 7 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="p-6 md:p-8 flex items-center">
                  <div className="w-8 h-8 bg-[#CBB49A]/20 rounded-full flex items-center justify-center mr-4">
                    <div className="w-3 h-3 bg-[#CBB49A] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-medium text-[#111111] mb-1">Brand guidance</h4>
                    <p className="text-sm text-gray-600 font-light">Educational resources</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 bg-[#CBB49A]/5 flex items-center border-l border-gray-100">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-base font-medium text-[#111111]">Growth partnership</span>
                </div>
                <div className="p-6 md:p-8 flex items-center border-l border-gray-100">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <span className="text-base text-gray-500">Transactional only</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 md:mt-16">
            <p className="text-lg md:text-xl text-gray-600 font-light mb-6">
              Ready to experience the difference?
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#111111] text-white px-8 md:px-12 py-4 md:py-5 font-light text-base md:text-lg tracking-wider hover:bg-[#CBB49A] transition-colors"
            >
              START YOUR PROJECT
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies - Modern Bento Grid */}
      <section id="case-studies" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] mb-6 tracking-wide">
              Real Brands. Real Results.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              From startup designers to established labels, see how Krazy Kreators brought visions to life.
            </p>
          </div>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Large Card - Spans 2 columns */}
            <div className="md:col-span-2 lg:col-span-2 group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 h-80 md:h-96">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Maison Verde Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 tracking-wide">Maison Verde</h3>
                  <p className="text-white/90 text-base md:text-lg font-light mb-4 leading-relaxed">
                    Sustainable luxury collection with 40% recycled materials. 
                    Complete design-to-delivery in 3 months.
                  </p>
                  <button className="text-white border border-white px-6 py-3 text-sm font-light tracking-wide hover:bg-white hover:text-[#111111] transition-colors">
                    Read Case Study →
                  </button>
                </div>
              </div>
            </div>

            {/* Medium Card - Tall */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 h-80 md:h-96">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Urban Edge Streetwear"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-3 tracking-wide">Urban Edge</h3>
                  <p className="text-white/90 text-sm md:text-base font-light mb-4 leading-relaxed">
                    Streetwear collection scaling from 500 to 5,000 units. 
                    Streamlined production workflow.
                  </p>
                  <button className="text-white border border-white px-4 py-2 text-sm font-light tracking-wide hover:bg-white hover:text-[#111111] transition-colors">
                    Read Case Study →
                  </button>
                </div>
              </div>
            </div>

            {/* Small Square Card */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 h-64 md:h-80">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Minimalist Studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg md:text-xl font-serif text-white mb-2 tracking-wide">Minimalist Studio</h3>
                  <p className="text-white/90 text-sm font-light mb-3 leading-relaxed">
                    Capsule collection with premium materials. 
                    Zero-waste production process.
                  </p>
                  <button className="text-white border border-white px-3 py-1 text-xs font-light tracking-wide hover:bg-white hover:text-[#111111] transition-colors">
                    Read Case Study →
                  </button>
                </div>
              </div>
            </div>

            {/* Medium Card - Wide */}
            <div className="md:col-span-2 group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 h-64 md:h-80">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Luxe Heritage Brand"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-3 tracking-wide">Luxe Heritage</h3>
                  <p className="text-white/90 text-sm md:text-base font-light mb-4 leading-relaxed">
                    Heritage brand modernization with sustainable practices. 
                    60% reduction in production time.
                  </p>
                  <button className="text-white border border-white px-4 py-2 text-sm font-light tracking-wide hover:bg-white hover:text-[#111111] transition-colors">
                    Read Case Study →
                  </button>
                </div>
              </div>
            </div>

            {/* Small Square Card */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 h-64 md:h-80">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Avant-Garde Collective"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg md:text-xl font-serif text-white mb-2 tracking-wide">Avant-Garde Collective</h3>
                  <p className="text-white/90 text-sm font-light mb-3 leading-relaxed">
                    Experimental design concepts. 
                    Innovative material applications.
                  </p>
                  <button className="text-white border border-white px-3 py-1 text-xs font-light tracking-wide hover:bg-white hover:text-[#111111] transition-colors">
                    Read Case Study →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Krazy Kreators Unique - USPs Section */}
      <section id="unique" className="py-20 md:py-32 bg-[#F9F8F7]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] mb-6 tracking-wide">
              What Makes Krazy Kreators Unique
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed mb-4">
              A Personalized Brand. Built on Transparency and Craft.
            </p>
            <p className="text-base md:text-lg text-[#CBB49A] font-light tracking-wide">
              We don't chase speed. We chase quality.
            </p>
          </div>

          {/* USP Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
            {/* USP 1: Low Minimum Order Quantities */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 p-6 md:p-8 group aspect-square flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-[#CBB49A]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiPackage className="w-8 h-8 text-[#CBB49A]" />
              </div>
              <h3 className="text-lg md:text-xl font-serif text-[#111111] mb-4 tracking-wide">
                Low Minimum Order Quantities
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                Design & produce even in the smallest batches — ideal for emerging labels.
              </p>
            </div>

            {/* USP 2: End-to-End Material Procurement */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 p-6 md:p-8 group aspect-square flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-[#CBB49A]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiShoppingCart className="w-8 h-8 text-[#CBB49A]" />
              </div>
              <h3 className="text-lg md:text-xl font-serif text-[#111111] mb-4 tracking-wide">
                End-to-End Material Procurement
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                We test, source, and purchase materials so you avoid costly mistakes.
              </p>
            </div>

            {/* USP 3: Raw Material Inventory Management */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 p-6 md:p-8 group aspect-square flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-[#CBB49A]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiDatabase className="w-8 h-8 text-[#CBB49A]" />
              </div>
              <h3 className="text-lg md:text-xl font-serif text-[#111111] mb-4 tracking-wide">
                Raw Material Inventory Management
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                Helping you stay sustainable and cost-effective across seasons.
              </p>
            </div>

            {/* USP 4: Design Knowledge as a Resource */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 p-6 md:p-8 group aspect-square flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-[#CBB49A]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiBookOpen className="w-8 h-8 text-[#CBB49A]" />
              </div>
              <h3 className="text-lg md:text-xl font-serif text-[#111111] mb-4 tracking-wide">
                Design Knowledge as a Resource
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                Access videos and tools to sharpen your understanding of fashion strategy, manufacturing, and trends.
              </p>
            </div>
          </div>

          {/* Final Statement */}
          <div className="text-center">
            <p className="text-xl md:text-2xl font-serif text-[#111111] tracking-wide">
              Built for the bold. Trusted by the thoughtful.
            </p>
          </div>
        </div>
      </section>

      {/* Knowledge is the New Luxury - Learning Resources */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] mb-6 tracking-wide">
              Knowledge is the New Luxury
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Insights, strategies, and industry wisdom to elevate your fashion journey.
            </p>
          </div>

          {/* Resource Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
            {/* Card 1: Fabric Selection */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-500">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Fabric Selection Guide"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#111111] px-3 py-1 text-xs font-light tracking-wide rounded-full">
                      Blog
                    </span>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-[#111111] px-6 py-3 text-sm font-light tracking-wide hover:bg-[#111111] hover:text-white transition-colors">
                      Read More
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-serif text-[#111111] mb-3 tracking-wide">
                    Choosing the Right Fabric for Longevity
                  </h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    Master the art of fabric selection to create garments that stand the test of time and trends.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Sampling Process */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-500">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Sampling Process"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#111111] px-3 py-1 text-xs font-light tracking-wide rounded-full">
                      Video
                    </span>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-[#111111] px-6 py-3 text-sm font-light tracking-wide hover:bg-[#111111] hover:text-white transition-colors">
                      Watch
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-serif text-[#111111] mb-3 tracking-wide">
                    Watch: How Sampling Happens at KK
                  </h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    Behind-the-scenes look at our meticulous sampling process and quality control standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Sustainable Practices */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-500">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Sustainable Fashion"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#111111] px-3 py-1 text-xs font-light tracking-wide rounded-full">
                      Guide
                    </span>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-[#111111] px-6 py-3 text-sm font-light tracking-wide hover:bg-[#111111] hover:text-white transition-colors">
                      Read More
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-serif text-[#111111] mb-3 tracking-wide">
                    5 Tips for Sustainable Sampling
                  </h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    Reduce waste and costs while maintaining quality in your sampling process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="border-2 border-[#111111] text-[#111111] px-8 py-4 text-base font-light tracking-wide hover:bg-[#111111] hover:text-white transition-colors">
              Explore All Resources
            </button>
          </div>
        </div>
      </section>

      {/* Video Testimonials - Client Success Stories */}
      <section className="py-20 md:py-32 bg-[#F9F8F7]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] mb-6 tracking-wide">
              Styled by Us. Spoken by Them.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Real stories from real fashion entrepreneurs who've partnered with Krazy Kreators — and turned ideas into brands.
            </p>
          </div>

          {/* Video Testimonials Horizontal Scroll */}
          <div className="relative mb-16">
            <div className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4">
              {/* Video Testimonial 1 */}
              <div className="group cursor-pointer animate-fade-in flex-shrink-0 w-full md:w-96 lg:w-[450px]">
                <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 bg-white h-full">
                  <div className="aspect-video relative">
                    <img 
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Sarah Chen - Maison Verde"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#CBB49A]/20 to-transparent"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-l-[12px] border-l-[#111111] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-black/70 text-white px-2 py-1 text-xs font-light rounded">
                        2:34
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-serif text-[#111111] mb-2 tracking-wide">
                      Sarah Chen
                    </h3>
                    <p className="text-sm text-[#CBB49A] font-light tracking-wide mb-3">
                      Founder, Maison Verde
                    </p>
                    <p className="text-base text-gray-600 font-light leading-relaxed">
                      "Krazy Kreators didn't just manufacture our collection — they educated us on sustainable practices that became our brand's foundation."
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Testimonial 2 */}
              <div className="group cursor-pointer animate-fade-in flex-shrink-0 w-full md:w-96 lg:w-[450px]">
                <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 bg-white h-full">
                  <div className="aspect-video relative">
                    <img 
                      src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Marcus Rodriguez - Urban Edge"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#CBB49A]/20 to-transparent"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-l-[12px] border-l-[#111111] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-black/70 text-white px-2 py-1 text-xs font-light rounded">
                        3:12
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-serif text-[#111111] mb-2 tracking-wide">
                      Marcus Rodriguez
                    </h3>
                    <p className="text-sm text-[#CBB49A] font-light tracking-wide mb-3">
                      Creative Director, Urban Edge
                    </p>
                    <p className="text-base text-gray-600 font-light leading-relaxed">
                      "From concept to production, their team guided us through every step. The quality and attention to detail exceeded our expectations."
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Testimonial 3 (Additional for demo) */}
              <div className="group cursor-pointer animate-fade-in flex-shrink-0 w-full md:w-96 lg:w-[450px]">
                <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 bg-white h-full">
                  <div className="aspect-video relative">
                    <img 
                      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Emma Thompson - Minimalist Studio"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#CBB49A]/20 to-transparent"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-l-[12px] border-l-[#111111] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-black/70 text-white px-2 py-1 text-xs font-light rounded">
                        4:18
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-serif text-[#111111] mb-2 tracking-wide">
                      Emma Thompson
                    </h3>
                    <p className="text-sm text-[#CBB49A] font-light tracking-wide mb-3">
                      Founder, Minimalist Studio
                    </p>
                    <p className="text-base text-gray-600 font-light leading-relaxed">
                      "Their zero-waste production process helped us create a truly sustainable capsule collection that our customers love."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Resources Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] mb-6 tracking-wide">
              Your Toolkit to Build Better
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Get exclusive access to Krazy Kreators' tech packs and trend insights. Just tell us who you are — and we'll share the goods.
            </p>
          </div>

          {/* Download Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* Tech Pack Download Card */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden group cursor-pointer" onClick={() => handleDownloadClick('tech-pack')}>
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Technical Specifications"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#CBB49A]/20 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FiDownload className="w-6 h-6 text-[#111111]" />
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-serif text-[#111111] mb-4 tracking-wide">
                  Download a Sample Tech Pack
                </h3>
                <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-6">
                  Explore how we structure product specs, materials, trims, and construction.
                </p>
                <button className="bg-[#111111] text-white px-6 py-3 text-sm font-light tracking-wide hover:bg-[#CBB49A] transition-colors">
                  Get It Now
                </button>
              </div>
            </div>

            {/* Fashion Trends Download Card */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden group cursor-pointer" onClick={() => handleDownloadClick('trends')}>
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Fashion Trends"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#CBB49A]/20 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FiTrendingUp className="w-6 h-6 text-[#111111]" />
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-serif text-[#111111] mb-4 tracking-wide">
                  Download Fashion Trend Report
                </h3>
                <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-6">
                  Discover the latest design directions and seasonal inspiration.
                </p>
                <button className="bg-[#111111] text-white px-6 py-3 text-sm font-light tracking-wide hover:bg-[#CBB49A] transition-colors">
                  View Trends
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Form Modal */}
      {showFormModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 md:p-8">
            {!showSuccess ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-serif text-[#111111] mb-2 tracking-wide">
                    Get Your {selectedResource === 'tech-pack' ? 'Tech Pack' : 'Trend Report'}
                  </h3>
                  <p className="text-sm text-gray-600 font-light">
                    Fill out the form below to access your free resource.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[#111111] font-light mb-2 text-sm tracking-wide">NAME</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 bg-transparent text-[#111111] font-light tracking-wide placeholder-gray-400 focus:border-[#111111] focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[#111111] font-light mb-2 text-sm tracking-wide">EMAIL</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 bg-transparent text-[#111111] font-light tracking-wide placeholder-gray-400 focus:border-[#111111] focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[#111111] font-light mb-2 text-sm tracking-wide">BRAND NAME (OPTIONAL)</label>
                    <input 
                      type="text" 
                      name="brandName"
                      value={formData.brandName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 bg-transparent text-[#111111] font-light tracking-wide placeholder-gray-400 focus:border-[#111111] focus:outline-none"
                      placeholder="Your brand name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[#111111] font-light mb-2 text-sm tracking-wide">WHAT ARE YOU INTERESTED IN?</label>
                    <select 
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 bg-transparent text-[#111111] font-light tracking-wide focus:border-[#111111] focus:outline-none"
                    >
                      <option value="">Select your interest</option>
                      <option value="tech-pack">Tech Pack</option>
                      <option value="trends">Trends</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
                    <button 
                      type="button"
                      onClick={() => setShowFormModal(false)}
                      className="flex-1 border border-[#111111] text-[#111111] px-4 py-3 text-sm font-light tracking-wide hover:bg-[#111111] hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-[#111111] text-white px-4 py-3 text-sm font-light tracking-wide hover:bg-[#CBB49A] transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Get Resource'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-[#111111] mb-2 tracking-wide">
                  Thank You!
                </h3>
                <p className="text-sm text-gray-600 font-light">
                  Your resource is on its way to your email.
                </p>
              </div>
            )}
          </div>
        </div>
             )}

      {/* Retainer-Based Pricing Model Section */}
      <section className="py-20 md:py-32 bg-[#F9F8F7]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Single Large Card */}
          <div className="bg-white rounded-lg shadow-sm border border-[#CBB49A]/20 overflow-hidden">
            {/* Header */}
            <div className="p-8 md:p-12 text-center border-b border-[#CBB49A]/20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] mb-6 tracking-wide">
                Monthly Retainer. Maximum Impact.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                No hidden costs. No huge minimums. Just a creative team on-call — every month.
              </p>
            </div>

            {/* Content Sections */}
            <div className="divide-y divide-[#CBB49A]/20">
              {/* What is a Retainer Model? */}
              <div className="p-8 md:p-12">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#CBB49A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#CBB49A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-serif text-[#111111] mb-4 tracking-wide">
                      What is a Retainer Model?
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                      A monthly pricing model where you get full access to our design, production, and sourcing teams — just like having your own in-house team.
                    </p>
                  </div>
                </div>
              </div>

              {/* What You Get Each Month */}
              <div className="p-8 md:p-12">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#CBB49A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiUsers className="w-6 h-6 text-[#CBB49A]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-serif text-[#111111] mb-4 tracking-wide">
                      What You Get Each Month
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#CBB49A] rounded-full"></div>
                        <span className="text-base text-gray-600 font-light">Dedicated project manager</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#CBB49A] rounded-full"></div>
                        <span className="text-base text-gray-600 font-light">Fashion + graphic + textile designers</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#CBB49A] rounded-full"></div>
                        <span className="text-base text-gray-600 font-light">Sampling, sourcing & production support</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#CBB49A] rounded-full"></div>
                        <span className="text-base text-gray-600 font-light">Regular updates & transparent costing</span>
                      </div>
                      <div className="flex items-center space-x-3 md:col-span-2">
                        <div className="w-2 h-2 bg-[#CBB49A] rounded-full"></div>
                        <span className="text-base text-gray-600 font-light">Access to client dashboard + resources</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why It Works for Startups */}
              <div className="p-8 md:p-12">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#CBB49A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiZap className="w-6 h-6 text-[#CBB49A]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-serif text-[#111111] mb-4 tracking-wide">
                      Why It Works for Startups
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#CBB49A] rounded-full"></div>
                        <span className="text-base text-gray-600 font-light">No MOQs or low MOQs allowed</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#CBB49A] rounded-full"></div>
                        <span className="text-base text-gray-600 font-light">Scalable as you grow</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#CBB49A] rounded-full"></div>
                        <span className="text-base text-gray-600 font-light">Cost savings vs hiring full-time team</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#CBB49A] rounded-full"></div>
                        <span className="text-base text-gray-600 font-light">Month-to-month flexibility</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* You Focus on Growth. We Handle the Rest. */}
              <div className="p-8 md:p-12">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#CBB49A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiTarget className="w-6 h-6 text-[#CBB49A]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-serif text-[#111111] mb-4 tracking-wide">
                      You Focus on Growth. We Handle the Rest.
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 font-light mb-4 leading-relaxed">
                      While you work on branding and selling, we take care of:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#CBB49A] rounded-full"></div>
                        <span className="text-base text-gray-600 font-light">Material procurement</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#CBB49A] rounded-full"></div>
                        <span className="text-base text-gray-600 font-light">Sample creation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#CBB49A] rounded-full"></div>
                        <span className="text-base text-gray-600 font-light">Production</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#CBB49A] rounded-full"></div>
                        <span className="text-base text-gray-600 font-light">Quality checks & shipping</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="p-8 md:p-12 bg-[#F9F8F7] text-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#111111] text-white px-8 py-4 text-base font-light tracking-wide hover:bg-[#CBB49A] transition-colors"
              >
                See Monthly Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-[#F9F8F7]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] mb-6 tracking-wide">
              FAQs — Let's Clear It Up
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Here are a few things fashion brands often ask us. Still have questions? We're just a message away.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {[
              {
                question: "How does your monthly retainer model work?",
                answer: "Our monthly retainer gives you full access to our design, production, and sourcing teams. You pay a fixed monthly fee and get unlimited support for your fashion projects. No hidden costs, no minimum order quantities — just a dedicated team ready to help you grow your brand."
              },
              {
                question: "What's the minimum order quantity (MOQ)?",
                answer: "We work with low MOQs and can accommodate small batch production. For most items, we can start with as few as 50-100 pieces, making it perfect for startups and growing brands who want to test the market before scaling up."
              },
              {
                question: "Can I only use design services without production?",
                answer: "Absolutely! You can choose to work with us for design services only. We offer tech pack creation, pattern making, sample development, and design consultation as standalone services. You can always add production later when you're ready."
              },
              {
                question: "Do you support international brands?",
                answer: "Yes, we work with brands from around the world. Our team is experienced in international shipping, customs documentation, and working across different time zones. We've successfully delivered projects to clients in Europe, Asia, Australia, and the Americas."
              },
              {
                question: "What's included in the sample development phase?",
                answer: "The sample development phase includes initial concept sketches, technical drawings, material sourcing, pattern creation, and 2-3 rounds of sample iterations. We work closely with you to refine the design until it meets your exact specifications before moving to production."
              },
              {
                question: "Can I pause or cancel my retainer anytime?",
                answer: "Yes, you have full flexibility. You can pause your retainer for up to 3 months or cancel with 30 days notice. We understand that business needs change, and we're here to support your growth journey without locking you into long-term commitments."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-[#CBB49A]/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 md:px-8 py-6 md:py-8 text-left flex justify-between items-center hover:bg-[#F9F8F7] transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-serif text-[#111111] tracking-wide pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div className={`w-6 h-6 transition-transform duration-300 ${openFAQ === index ? 'rotate-45' : ''}`}>
                      <div className="w-6 h-0.5 bg-[#111111] mb-1"></div>
                      <div className={`w-6 h-0.5 bg-[#111111] transition-transform duration-300 ${openFAQ === index ? 'rotate-90 -translate-y-1' : ''}`}></div>
                    </div>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 md:mt-24">
            <p className="text-lg md:text-xl text-gray-600 font-light mb-6">
              Still wondering something?
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#111111] text-white px-8 py-4 text-base font-light tracking-wide hover:bg-[#CBB49A] transition-colors"
            >
              Talk to Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Lead Form - Sticky Section */}
      <section id="contact" className="py-32 bg-[#CBB49A]">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-5xl font-light text-center mb-24 text-[#111111] tracking-wide">
            START YOUR PROJECT
          </h2>
          
          <form className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-[#111111] font-light mb-3 tracking-wide text-lg">NAME</label>
              <input 
                type="text" 
                className="w-full p-5 border-2 border-[#111111] bg-transparent text-[#111111] font-light tracking-wide placeholder-gray-600"
                placeholder="Your full name"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label className="block text-[#111111] font-light mb-3 tracking-wide text-lg">EMAIL</label>
              <input 
                type="email" 
                className="w-full p-5 border-2 border-[#111111] bg-transparent text-[#111111] font-light tracking-wide placeholder-gray-600"
                placeholder="your@email.com"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label className="block text-[#111111] font-light mb-3 tracking-wide text-lg">BRAND STAGE</label>
              <select className="w-full p-5 border-2 border-[#111111] bg-transparent text-[#111111] font-light tracking-wide" suppressHydrationWarning>
                <option>Select your brand stage</option>
                <option>STARTUP</option>
                <option>GROWING</option>
                <option>ESTABLISHED</option>
              </select>
            </div>
            <div>
              <label className="block text-[#111111] font-light mb-3 tracking-wide text-lg">SERVICES NEEDED</label>
              <select className="w-full p-5 border-2 border-[#111111] bg-transparent text-[#111111] font-light tracking-wide" suppressHydrationWarning>
                <option>Select services</option>
                <option>DESIGN ONLY</option>
                <option>MANUFACTURING ONLY</option>
                <option>END-TO-END</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit" 
                className="w-full bg-[#111111] text-white py-6 font-light text-xl tracking-wider hover:bg-[#333333] transition-colors"
              >
                GET STARTED
              </button>
            </div>
          </form>
          
          <p className="text-center mt-8 text-base text-[#111111] font-light">
            Once submitted, our team will reach out within 24 hours
          </p>
        </div>
      </section>

      {/* Footer - Minimal Dark */}
      <footer className="bg-[#111111] text-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16">
            <div>
              <div className="text-2xl font-light mb-6 tracking-wide">KRAZY KREATORS</div>
              <p className="text-base text-gray-400 font-light leading-relaxed">
                Your creative and production partner for innovative fashion solutions.
              </p>
            </div>
            <div>
              <h4 className="font-light mb-6 tracking-wide text-lg">SERVICES</h4>
              <ul className="space-y-3 text-base text-gray-400 font-light">
                <li>DESIGN</li>
                <li>MANUFACTURING</li>
                <li>END-TO-END</li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-6 tracking-wide text-lg">COMPANY</h4>
              <ul className="space-y-3 text-base text-gray-400 font-light">
                <li>ABOUT</li>
                <li>PORTFOLIO</li>
                <li>CONTACT</li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-6 tracking-wide text-lg">CONNECT</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#C4C4C4]"></div>
                <div className="w-10 h-10 bg-[#C4C4C4]"></div>
                <div className="w-10 h-10 bg-[#C4C4C4]"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-base text-gray-400 font-light">
            <p>&copy; 2024 KRAZY KREATORS. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 