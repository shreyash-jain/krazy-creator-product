"use client"

import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FileText, Users, Workflow, Target, Lightbulb, Layout, ArrowUp, BookOpen, ChevronRight } from "lucide-react"

export default function ResearchReport() {
  const [activeSection, setActiveSection] = useState("")
  const [tocOpen, setTocOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    if (!mounted) return
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setTocOpen(false) // Close TOC on mobile after selection
  }

  // Set mounted flag
  useEffect(() => {
    setMounted(true)
  }, [])

  // Intersection Observer to track active section
  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    // Use setTimeout to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => observer.observe(section))
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [mounted])

  // Scroll to top function
  const scrollToTop = () => {
    if (!mounted) return
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Persistent Floating Table of Contents */}
      {mounted && (
        <div key="floating-toc" className="fixed top-4 right-4 md:top-8 md:right-8 z-50">
          <div className="relative">
            {/* TOC Toggle Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTocOpen(!tocOpen)}
              className="bg-white/95 backdrop-blur-sm border-neutral-300 shadow-lg hover:bg-white text-xs md:text-sm"
            >
              <BookOpen className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Contents</span>
              <span className="sm:hidden">TOC</span>
              <ChevronRight className={`w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 transition-transform ${tocOpen ? 'rotate-90' : ''}`} />
            </Button>

            {/* Floating TOC Panel */}
            <div className={`absolute top-full right-0 mt-2 w-72 md:w-80 bg-white/95 backdrop-blur-sm border border-neutral-200 rounded-lg shadow-xl transition-all duration-300 ease-in-out ${tocOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
            <div className="p-4 md:p-6 max-h-80 md:max-h-96 overflow-y-auto">
              <h3 className="text-base md:text-lg font-bold text-neutral-900 mb-3 md:mb-4">Table of Contents</h3>
              <nav className="space-y-1 md:space-y-2">


                <Button
                  variant="ghost"
                  className={`w-full justify-start text-left h-auto p-3 rounded-md ${mounted && activeSection === "operational-workflows" ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600 hover:bg-neutral-50'}`}
                  onClick={() => scrollToSection("operational-workflows")}
                >
                  <span className="text-sm font-medium">01. Operational Workflows</span>
                </Button>

                <Button
                  variant="ghost"
                  className={`w-full justify-start text-left h-auto p-3 rounded-md ${mounted && activeSection === "organization-structure" ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600 hover:bg-neutral-50'}`}
                  onClick={() => scrollToSection("organization-structure")}
                >
                  <span className="text-sm font-medium">02. Organization Structure</span>
                </Button>

                <Button
                  variant="ghost"
                  className={`w-full justify-start text-left h-auto p-3 rounded-md ${mounted && activeSection === "role-types" ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600 hover:bg-neutral-50'}`}
                  onClick={() => scrollToSection("role-types")}
                >
                  <span className="text-sm font-medium">03. Role Types & Responsibilities</span>
                </Button>

                <Button
                  variant="ghost"
                  className={`w-full justify-start text-left h-auto p-3 rounded-md ${mounted && activeSection === "landing-page" ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600 hover:bg-neutral-50'}`}
                  onClick={() => scrollToSection("landing-page")}
                >
                  <span className="text-sm font-medium">04. Landing Page Content</span>
                </Button>

                <Button
                  variant="ghost"
                  className={`w-full justify-start text-left h-auto p-3 rounded-md ${mounted && activeSection === "wireframes" ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600 hover:bg-neutral-50'}`}
                  onClick={() => scrollToSection("wireframes")}
                >
                  <span className="text-sm font-medium">05. Low Fidelity Wireframes</span>
                </Button>

              </nav>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Cover Page with Background Image */}
      <section id="cover" className="min-h-screen flex items-center justify-center relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl w-full px-4 md:px-8 text-white">
          {/* Main Title */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 md:mb-8 leading-none">
              RESEARCH REPORT
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-10 tracking-wide">
              KRAZY KREATORS
            </h2>
            <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium text-white/80 tracking-wide uppercase px-4">
              Operational Insights, Structure, Roles & Web Content
            </h3>
          </div>

          {/* Document Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-center">
            <div>
              <p className="text-xs md:text-sm font-semibold text-white/60 uppercase tracking-wider mb-2 md:mb-3">Prepared by</p>
              <p className="text-lg md:text-xl font-bold text-white">Vidyayatan Technologies</p>
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold text-white/60 uppercase tracking-wider mb-2 md:mb-3">Date</p>
              <p className="text-lg md:text-xl font-bold text-white" suppressHydrationWarning>
                {mounted ? new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                }) : 'December 2024'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents Section */}
      <section id="table-of-contents" className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">TABLE OF CONTENTS</h2>
            <Separator className="w-16 md:w-24 mt-6 md:mt-8 bg-neutral-400" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-3 md:space-y-4">


                              <Button
                  variant="ghost"
                  className={`w-full justify-start text-left h-auto p-4 md:p-6 rounded-lg border-2 ${mounted && activeSection === "operational-workflows" ? 'border-neutral-900 bg-white' : 'border-neutral-200 hover:border-neutral-400 hover:bg-white'}`}
                  onClick={() => scrollToSection("operational-workflows")}
                >
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <span className="text-xl md:text-2xl font-black text-neutral-400">01</span>
                    <div className="text-left">
                      <div className="font-bold text-neutral-900 text-base md:text-lg">Operational Workflows</div>
                      <div className="text-xs md:text-sm text-neutral-500">Current processes & procedures</div>
                    </div>
                  </div>
                </Button>

                <Button
                  variant="ghost"
                  className={`w-full justify-start text-left h-auto p-4 md:p-6 rounded-lg border-2 ${mounted && activeSection === "organization-structure" ? 'border-neutral-900 bg-white' : 'border-neutral-200 hover:border-neutral-400 hover:bg-white'}`}
                  onClick={() => scrollToSection("organization-structure")}
                >
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <span className="text-xl md:text-2xl font-black text-neutral-400">02</span>
                    <div className="text-left">
                      <div className="font-bold text-neutral-900 text-base md:text-lg">Organization Structure</div>
                      <div className="text-xs md:text-sm text-neutral-500">Hierarchy & team dynamics</div>
                    </div>
                  </div>
                </Button>

                <Button
                  variant="ghost"
                  className={`w-full justify-start text-left h-auto p-4 md:p-6 rounded-lg border-2 ${mounted && activeSection === "role-types" ? 'border-neutral-900 bg-white' : 'border-neutral-200 hover:border-neutral-400 hover:bg-white'}`}
                  onClick={() => scrollToSection("role-types")}
                >
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <span className="text-xl md:text-2xl font-black text-neutral-400">03</span>
                    <div className="text-left">
                      <div className="font-bold text-neutral-900 text-base md:text-lg">Role Types & Responsibilities</div>
                      <div className="text-xs md:text-sm text-neutral-500">Detailed role descriptions</div>
                    </div>
                  </div>
                </Button>
            </div>

            <div className="space-y-3 md:space-y-4">
              <Button
                variant="ghost"
                className={`w-full justify-start text-left h-auto p-4 md:p-6 rounded-lg border-2 ${mounted && activeSection === "landing-page" ? 'border-neutral-900 bg-white' : 'border-neutral-200 hover:border-neutral-400 hover:bg-white'}`}
                onClick={() => scrollToSection("landing-page")}
              >
                <div className="flex items-center space-x-3 md:space-x-4">
                  <span className="text-xl md:text-2xl font-black text-neutral-400">04</span>
                  <div className="text-left">
                    <div className="font-bold text-neutral-900 text-base md:text-lg">Landing Page Content</div>
                    <div className="text-xs md:text-sm text-neutral-500">Web content strategy</div>
                  </div>
                </div>
              </Button>

              <Button
                variant="ghost"
                className={`w-full justify-start text-left h-auto p-4 md:p-6 rounded-lg border-2 ${mounted && activeSection === "wireframes" ? 'border-neutral-900 bg-white' : 'border-neutral-200 hover:border-neutral-400 hover:bg-white'}`}
                onClick={() => scrollToSection("wireframes")}
              >
                <div className="flex items-center space-x-3 md:space-x-4">
                  <span className="text-xl md:text-2xl font-black text-neutral-400">05</span>
                  <div className="text-left">
                    <div className="font-bold text-neutral-900 text-base md:text-lg">Low Fidelity Wireframes</div>
                    <div className="text-xs md:text-sm text-neutral-500">Layout variants & structure</div>
                  </div>
                </div>
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-20 md:space-y-32">
        


        {/* Operational Workflows */}
        <section id="operational-workflows" className="scroll-mt-20">
          <div>
            <div className="mb-12 md:mb-16">
              <span className="text-xl md:text-2xl font-black text-neutral-400 tracking-wider">01</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mt-2 tracking-tight">OPERATIONAL WORKFLOWS</h2>
              <Separator className="w-16 md:w-24 mt-6 md:mt-8 bg-neutral-400" />
            </div>
            
            <div className="prose prose-neutral max-w-none">
              
              {/* Client Lifecycle Workflow */}
              <div className="mb-20 md:mb-32">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 mb-8 md:mb-12">CLIENT LIFECYCLE WORKFLOW</h3>
                <p className="text-base md:text-lg text-neutral-600 mb-12 md:mb-16 max-w-3xl">
                  Our analysis reveals a six-step journey from initial inquiry to post-delivery support, designed to create 
                  lasting partnerships and exceptional outcomes.
                </p>
                
                <div className="relative">
                  {/* Connecting Lines */}
                  <div className="absolute left-4 md:left-8 top-8 md:top-16 bottom-8 md:bottom-16 w-0.5 bg-neutral-300"></div>
                  
                  <div className="space-y-8 md:space-y-12">
                    {/* Step 1 */}
                    <div className="flex items-start space-x-4 md:space-x-8 relative">
                      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-neutral-900 rounded-full flex items-center justify-center relative z-10">
                        <span className="text-lg md:text-2xl font-black text-white">1</span>
                      </div>
                      <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                          <div>
                            <h4 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 md:mb-4">Client Inquiry & Discovery</h4>
                            <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-neutral-700 mb-4 md:mb-6">
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Conducted initial consultation</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Understood brand vision, target audience & goals</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Performed brand analysis</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Researched client&apos;s target market</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Defined project scope & objectives</span>
                              </li>
                            </ul>
                          </div>
                          <div className="relative">
                            <div className="w-full h-48 md:h-64 bg-cover bg-center rounded-lg" style={{
                              backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                            }}></div>
                            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                            <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                              <p className="text-xs md:text-sm font-medium">Client Consultation & Discovery</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start space-x-8 relative">
                      <div className="flex-shrink-0 w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center relative z-10">
                        <span className="text-2xl font-black text-white">2</span>
                      </div>
                      <div className="flex-1">
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-2xl font-bold text-neutral-900 mb-4">Project Kickoff</h4>
                            <ul className="space-y-3 text-lg text-neutral-700 mb-6">
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Assigned Designer Project Manager & core team</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Created detailed timeline with key milestones</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Defined communication protocols (dashboard, email, WhatsApp)</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Allocated internal resources</span>
                              </li>
                            </ul>
                          </div>
                          <div className="relative">
                            <div className="w-full h-64 bg-cover bg-center rounded-lg" style={{
                              backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
                            }}></div>
                            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                              <p className="text-sm font-medium">Team Planning & Project Setup</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start space-x-8 relative">
                      <div className="flex-shrink-0 w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center relative z-10">
                        <span className="text-2xl font-black text-white">3</span>
                      </div>
                      <div className="flex-1">
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-2xl font-bold text-neutral-900 mb-4">Design & Sampling</h4>
                            <ul className="space-y-3 text-lg text-neutral-700 mb-6">
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Developed initial concepts & creative direction</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Created detailed tech packs, CADs, and prints</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Coordinated sampling process (fit samples, lab dips, trims)</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Collected feedback & refined designs</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Validated quality before production</span>
                              </li>
                            </ul>
                          </div>
                          <div className="relative">
                            <div className="w-full h-64 bg-cover bg-center rounded-lg" style={{
                              backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                            }}></div>
                            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                              <p className="text-sm font-medium">Fashion Design & Sample Creation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-start space-x-8 relative">
                      <div className="flex-shrink-0 w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center relative z-10">
                        <span className="text-2xl font-black text-white">4</span>
                      </div>
                      <div className="flex-1">
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-2xl font-bold text-neutral-900 mb-4">Production Coordination</h4>
                            <ul className="space-y-3 text-lg text-neutral-700 mb-6">
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Chose vendor based on category & MOQ</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Coordinated bulk production with partner units</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Monitored progress & shared real-time updates with client</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Conducted ongoing quality checks throughout production</span>
                              </li>
                            </ul>
                          </div>
                          <div className="relative">
                            <div className="w-full h-64 bg-cover bg-center rounded-lg" style={{
                              backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                            }}></div>
                            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                              <p className="text-sm font-medium">Manufacturing & Production</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex items-start space-x-8 relative">
                      <div className="flex-shrink-0 w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center relative z-10">
                        <span className="text-2xl font-black text-white">5</span>
                      </div>
                      <div className="flex-1">
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-2xl font-bold text-neutral-900 mb-4">Final Quality Check & Shipping</h4>
                            <ul className="space-y-3 text-lg text-neutral-700 mb-6">
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Conducted internal and vendor-level QC</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Validated all units against client-approved standards</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Finalized packaging and labeling</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Arranged logistics based on client preference</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Uploaded shipping & dispatch details to client portal</span>
                              </li>
                            </ul>
                          </div>
                          <div className="relative">
                            <div className="w-full h-64 bg-cover bg-center rounded-lg" style={{
                              backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                            }}></div>
                            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                              <p className="text-sm font-medium">Quality Control & Packaging</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 6 */}
                    <div className="flex items-start space-x-8 relative">
                      <div className="flex-shrink-0 w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center relative z-10">
                        <span className="text-2xl font-black text-white">6</span>
                      </div>
                      <div className="flex-1">
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                          <div>
                            <h4 className="text-2xl font-bold text-neutral-900 mb-4">Post-Delivery Support</h4>
                            <ul className="space-y-3 text-lg text-neutral-700 mb-6">
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Scheduled feedback and performance review</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Discussed restocking or follow-up needs</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Offered continued support under monthly retainer</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Integrated learnings into next project phase</span>
                              </li>
                            </ul>
                          </div>
                          <div className="relative">
                            <div className="w-full h-64 bg-cover bg-center rounded-lg" style={{
                              backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                            }}></div>
                            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                              <p className="text-sm font-medium">Customer Support & Feedback</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Internal Operational Workflow */}
              <div className="mb-32">
                <h3 className="text-4xl font-black text-neutral-900 mb-12">INTERNAL OPERATIONAL WORKFLOW</h3>
                <p className="text-lg text-neutral-600 mb-16 max-w-3xl">
                  Our research shows that behind the scenes, their internal systems ensure seamless coordination across departments, 
                  maintaining the perfect balance of creativity and operational excellence.
                </p>
                
                {/* Department Overview with Enhanced Graphics */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  <div className="p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 rounded-lg hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-neutral-200 rounded-full -mr-10 -mt-10 opacity-20"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-full flex items-center justify-center mb-6 relative z-10">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-3">Design Department</h4>
                    <p className="text-neutral-700 text-sm mb-4">
                      Creative vision, technical specifications, and trend analysis
                    </p>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 rounded-lg hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-neutral-200 rounded-full -mr-10 -mt-10 opacity-20"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-full flex items-center justify-center mb-6 relative z-10">
                      <Workflow className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-3">Production Team</h4>
                    <p className="text-neutral-700 text-sm mb-4">
                      Manufacturing coordination, quality control, and timeline management
                    </p>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 rounded-lg hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-neutral-200 rounded-full -mr-10 -mt-10 opacity-20"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-full flex items-center justify-center mb-6 relative z-10">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-3">Quality Assurance</h4>
                    <p className="text-neutral-700 text-sm mb-4">
                      Standards enforcement, testing protocols, and final validation
                    </p>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 rounded-lg hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-neutral-200 rounded-full -mr-10 -mt-10 opacity-20"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-full flex items-center justify-center mb-6 relative z-10">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-3">Finance & Control</h4>
                    <p className="text-neutral-700 text-sm mb-4">
                      Budget management, cost tracking, and financial reporting
                    </p>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 rounded-lg hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-neutral-200 rounded-full -mr-10 -mt-10 opacity-20"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-full flex items-center justify-center mb-6 relative z-10">
                      <Layout className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-3">Vendor Coordination</h4>
                    <p className="text-neutral-700 text-sm mb-4">
                      Supplier management, relationship building, and performance monitoring
                    </p>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 rounded-lg hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-neutral-200 rounded-full -mr-10 -mt-10 opacity-20"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-full flex items-center justify-center mb-6 relative z-10">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-3">Client Relations</h4>
                    <p className="text-neutral-700 text-sm mb-4">
                      Communication management, feedback collection, and partnership development
                    </p>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                    </div>
                  </div>
                </div>




              </div>
            </div>
          </div>
        </section>

        {/* Organization Structure */}
        <section id="organization-structure" className="scroll-mt-20">
          <div>
            <div className="mb-12 md:mb-16">
              <span className="text-xl md:text-2xl font-black text-neutral-400 tracking-wider">02</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mt-2 tracking-tight">ORGANIZATION STRUCTURE</h2>
              <Separator className="w-16 md:w-24 mt-6 md:mt-8 bg-neutral-400" />
            </div>
            
            <div className="prose prose-neutral max-w-none">
              
              {/* Organizational Hierarchy Chart */}
              <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 md:p-12 lg:p-16 border border-neutral-200 rounded-lg mb-12 md:mb-20">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 md:mb-12 text-center">ORGANIZATIONAL HIERARCHY</h3>
                
                <div className="flex flex-col items-center space-y-6 md:space-y-8">
                  {/* Level 1: CEO */}
                  <div className="relative">
                    <div className="bg-white border-2 border-neutral-900 px-4 md:px-6 lg:px-8 py-3 md:py-4 rounded-lg shadow-lg">
                      <div className="text-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                          <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-neutral-900">CEO</h4>
                        <p className="text-xs md:text-sm text-neutral-600">Admin Dashboard</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-6 md:h-8 bg-neutral-300"></div>
                  </div>

                  {/* Level 2: Project Managers */}
                  <div className="relative">
                    <div className="bg-white border-2 border-neutral-700 px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md">
                      <div className="text-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-neutral-700 to-neutral-600 rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2">
                          <Workflow className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <h4 className="text-base md:text-lg font-bold text-neutral-800">Project Managers</h4>
                        <p className="text-xs text-neutral-600">Project Manager Dashboard</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-6 md:h-8 bg-neutral-300"></div>
                  </div>

                  {/* Level 3: Project Manager Team */}
                  <div className="relative">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4 mb-6 md:mb-8">
                      <div className="bg-white border border-neutral-300 px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-sm relative">
                        <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-3 md:h-4 bg-neutral-300"></div>
                        <div className="text-center">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-neutral-600 to-neutral-500 rounded-full flex items-center justify-center mx-auto mb-1">
                            <FileText className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                          </div>
                          <h4 className="text-xs font-bold text-neutral-700">Fashion Designer</h4>
                        </div>
                      </div>
                      <div className="bg-white border border-neutral-300 px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-sm relative">
                        <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-3 md:h-4 bg-neutral-300"></div>
                        <div className="text-center">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-neutral-600 to-neutral-500 rounded-full flex items-center justify-center mx-auto mb-1">
                            <Layout className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                          </div>
                          <h4 className="text-xs font-bold text-neutral-700">Graphic Designer</h4>
                        </div>
                      </div>
                      <div className="bg-white border border-neutral-300 px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-sm relative">
                        <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-3 md:h-4 bg-neutral-300"></div>
                        <div className="text-center">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-neutral-600 to-neutral-500 rounded-full flex items-center justify-center mx-auto mb-1">
                            <Target className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                          </div>
                          <h4 className="text-xs font-bold text-neutral-700">Textile Expert</h4>
                        </div>
                      </div>
                      <div className="bg-white border border-neutral-300 px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-sm relative">
                        <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-3 md:h-4 bg-neutral-300"></div>
                        <div className="text-center">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-neutral-600 to-neutral-500 rounded-full flex items-center justify-center mx-auto mb-1">
                            <Users className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                          </div>
                          <h4 className="text-xs font-bold text-neutral-700">Pattern Masters</h4>
                        </div>
                      </div>
                      <div className="bg-white border border-neutral-300 px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-sm relative md:col-span-1 col-span-2">
                        <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-3 md:h-4 bg-neutral-300"></div>
                        <div className="text-center">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-neutral-600 to-neutral-500 rounded-full flex items-center justify-center mx-auto mb-1">
                            <Users className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                          </div>
                          <h4 className="text-xs font-bold text-neutral-700">Stichers</h4>
                          <p className="text-xs text-neutral-500">Sample Karigar</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-6 md:h-8 bg-neutral-300"></div>
                  </div>

                  {/* Level 4: Production Team */}
                  <div className="relative">
                    <div className="flex flex-col items-center space-y-3 md:space-y-4 mb-6 md:mb-8">
                      <div className="bg-white border border-neutral-300 px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-sm relative">
                        <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-3 md:h-4 bg-neutral-300"></div>
                        <div className="text-center">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-neutral-500 to-neutral-400 rounded-full flex items-center justify-center mx-auto mb-1">
                            <Workflow className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                          </div>
                          <h4 className="text-xs font-bold text-neutral-600">Production Manager</h4>
                        </div>
                      </div>
                      <div className="w-0.5 h-3 md:h-4 bg-neutral-300"></div>
                      <div className="bg-white border border-neutral-300 px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-sm relative">
                        <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-3 md:h-4 bg-neutral-300"></div>
                        <div className="text-center">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-neutral-500 to-neutral-400 rounded-full flex items-center justify-center mx-auto mb-1">
                            <Target className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                          </div>
                          <h4 className="text-xs font-bold text-neutral-600">Quality Check Manager</h4>
                        </div>
                      </div>
                      <div className="w-0.5 h-3 md:h-4 bg-neutral-300"></div>
                      <div className="bg-white border border-neutral-300 px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-sm relative">
                        <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-3 md:h-4 bg-neutral-300"></div>
                        <div className="text-center">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-neutral-500 to-neutral-400 rounded-full flex items-center justify-center mx-auto mb-1">
                            <Workflow className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                          </div>
                          <h4 className="text-xs font-bold text-neutral-600">Shipping Manager</h4>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              {/* Workflow Diagrams */}
              <div className="space-y-12 md:space-y-20">
                {/* Part 1: Design Workflow */}
                <div className="bg-white p-6 md:p-8 lg:p-12 border border-neutral-200 rounded-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-6 md:mb-8 text-center">PART 1 – DESIGN WORKFLOW</h3>
                  <p className="text-center text-neutral-600 mb-8 md:mb-12 text-sm md:text-base">Under PM + Creative Team Supervision</p>
                  
                  <div className="flex flex-col items-center space-y-6 md:space-y-8">
                    {/* Step 1: Brainstorming & Conceptualization */}
                    <div className="bg-white border-2 border-neutral-700 px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <h4 className="text-base md:text-lg font-bold text-neutral-900 mb-2 md:mb-3">1. Brainstorming & Conceptualization</h4>
                        <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-neutral-700">
                          <p><strong>Project Manager & Team</strong></p>
                          <p><strong>Fashion Designer</strong></p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-6 md:h-8 bg-neutral-400"></div>
                      <div className="w-0 h-0 border-t-3 md:border-t-4 border-t-neutral-400 border-l-2 border-l-transparent border-r-2 border-r-transparent mt-1"></div>
                    </div>
                    
                    {/* Step 2: Final Illustrations */}
                    <div className="bg-white border-2 border-neutral-700 px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <h4 className="text-base md:text-lg font-bold text-neutral-900 mb-2 md:mb-3">2. Final Illustrations</h4>
                        <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-neutral-700">
                          <p><strong>Project Manager & Team</strong></p>
                          <p><strong>Fashion Designer</strong></p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-6 md:h-8 bg-neutral-400"></div>
                      <div className="w-0 h-0 border-t-3 md:border-t-4 border-t-neutral-400 border-l-2 border-l-transparent border-r-2 border-r-transparent mt-1"></div>
                    </div>
                    
                    {/* Step 3: Tech Pack Creation */}
                    <div className="bg-white border-2 border-neutral-700 px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <h4 className="text-base md:text-lg font-bold text-neutral-900 mb-2 md:mb-3">3. Tech Pack Creation</h4>
                        <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-neutral-700 mb-2 md:mb-3">
                          <p><strong>Project Manager & Team</strong></p>
                          <p><strong>Fashion Designer</strong></p>
                        </div>
                        <div className="text-xs text-neutral-600 bg-neutral-50 px-2 md:px-3 py-1 md:py-2 rounded border">
                          Includes fabric color, materials, trims, and garment specs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 2: Product Sampling Workflow */}
                <div className="bg-white p-6 md:p-8 lg:p-12 border border-neutral-200 rounded-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-6 md:mb-8 text-center">PART 2 – PRODUCT SAMPLING WORKFLOW</h3>
                  <p className="text-center text-neutral-600 mb-8 md:mb-12 text-sm md:text-base">Under Project Manager Supervision</p>
                  
                  <div className="flex flex-col items-center space-y-6 md:space-y-8">
                    {/* Step 1: Pattern Making */}
                    <div className="bg-white border-2 border-neutral-700 px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <h4 className="text-base md:text-lg font-bold text-neutral-900 mb-2 md:mb-3">1. Pattern Making</h4>
                        <div className="text-xs md:text-sm text-neutral-700">
                          <p><strong>Pattern Masters</strong></p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-6 md:h-8 bg-neutral-400"></div>
                      <div className="w-0 h-0 border-t-3 md:border-t-4 border-t-neutral-400 border-l-2 border-l-transparent border-r-2 border-r-transparent mt-1"></div>
                    </div>
                    
                    {/* Step 2: Fit Sample Creation */}
                    <div className="bg-white border-2 border-neutral-700 px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <h4 className="text-base md:text-lg font-bold text-neutral-900 mb-2 md:mb-3">2. Fit Sample Creation</h4>
                        <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-neutral-700 mb-2 md:mb-3">
                          <p><strong>Sample Karigar (Stitcher)</strong></p>
                        </div>
                        <div className="text-xs text-neutral-600 bg-neutral-50 px-2 md:px-3 py-1 md:py-2 rounded border">
                          To check the fittings of the garment
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-6 md:h-8 bg-neutral-400"></div>
                      <div className="w-0 h-0 border-t-3 md:border-t-4 border-t-neutral-400 border-l-2 border-l-transparent border-r-2 border-r-transparent mt-1"></div>
                    </div>
                    
                    {/* Step 3: Material Sourcing */}
                    <div className="bg-white border-2 border-neutral-700 px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <h4 className="text-base md:text-lg font-bold text-neutral-900 mb-2 md:mb-3">3. Material Sourcing</h4>
                        <div className="text-xs md:text-sm text-neutral-700">
                          <p><strong>Fabric Manager</strong></p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-6 md:h-8 bg-neutral-400"></div>
                      <div className="w-0 h-0 border-t-3 md:border-t-4 border-t-neutral-400 border-l-2 border-l-transparent border-r-2 border-r-transparent mt-1"></div>
                    </div>
                    
                    {/* Step 4: Final Sample Production */}
                    <div className="bg-white border-2 border-neutral-700 px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <h4 className="text-base md:text-lg font-bold text-neutral-900 mb-2 md:mb-3">4. Final Sample Production</h4>
                        <div className="text-xs md:text-sm text-neutral-700">
                          <p><strong>Sample Karigar (Stitcher)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 3: Full Scale Production Workflow */}
                <div className="bg-white p-6 md:p-8 lg:p-12 border border-neutral-200 rounded-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-6 md:mb-8 text-center">PART 3 – FULL SCALE PRODUCTION WORKFLOW</h3>
                  <p className="text-center text-neutral-600 mb-8 md:mb-12 text-sm md:text-base">Under Production Manager Supervision</p>
                  
                  <div className="flex flex-col items-center space-y-6 md:space-y-8">
                    {/* Step 1: Material Procurement */}
                    <div className="bg-white border-2 border-neutral-900 px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-md relative">
                      <div className="absolute -top-2 md:-top-3 -right-2 md:-right-3 w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-xs md:text-sm font-bold text-neutral-900">★</span>
                      </div>
                      <div className="text-center">
                        <h4 className="text-base md:text-lg font-bold text-neutral-900 mb-2 md:mb-3">1. Material Procurement</h4>
                        <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-neutral-700 mb-2 md:mb-3">
                          <p><strong>Production Manager</strong></p>
                          <p><strong>Fabric Manager</strong></p>
                        </div>
                        <div className="text-xs text-neutral-600 bg-yellow-50 px-2 md:px-3 py-1 md:py-2 rounded border border-yellow-200">
                          <strong>KK USP:</strong> Direct sourcing control
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-8 bg-neutral-400"></div>
                      <div className="w-0 h-0 border-t-4 border-t-neutral-400 border-l-2 border-l-transparent border-r-2 border-r-transparent mt-1"></div>
                    </div>
                    
                    {/* Step 2: Fabric Cutting */}
                    <div className="bg-white border-2 border-neutral-700 px-6 py-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-neutral-900 mb-3">2. Fabric Cutting</h4>
                        <div className="space-y-2 text-sm text-neutral-700">
                          <p><strong>Production Manager</strong></p>
                          <p><strong>Fabric Manager</strong></p>
                        </div>
                        <div className="text-xs text-neutral-500 mt-2">(Factory)</div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-8 bg-neutral-400"></div>
                      <div className="w-0 h-0 border-t-4 border-t-neutral-400 border-l-2 border-l-transparent border-r-2 border-r-transparent mt-1"></div>
                    </div>
                    
                    {/* Step 3: Garment Stitching */}
                    <div className="bg-white border-2 border-neutral-700 px-6 py-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-neutral-900 mb-3">3. Garment Stitching</h4>
                        <div className="space-y-2 text-sm text-neutral-700">
                          <p><strong>Production Manager</strong></p>
                          <p><strong>Fabric Manager</strong></p>
                        </div>
                        <div className="text-xs text-neutral-500 mt-2">(Factory)</div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-8 bg-neutral-400"></div>
                      <div className="w-0 h-0 border-t-4 border-t-neutral-400 border-l-2 border-l-transparent border-r-2 border-r-transparent mt-1"></div>
                    </div>
                    
                    {/* Step 4: Finishing */}
                    <div className="bg-white border-2 border-neutral-700 px-6 py-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-neutral-900 mb-3">4. Finishing</h4>
                        <div className="space-y-2 text-sm text-neutral-700">
                          <p><strong>Production Manager</strong></p>
                          <p><strong>Fabric Manager</strong></p>
                        </div>
                        <div className="text-xs text-neutral-500 mt-2">(Factory)</div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-8 bg-neutral-400"></div>
                      <div className="w-0 h-0 border-t-4 border-t-neutral-400 border-l-2 border-l-transparent border-r-2 border-r-transparent mt-1"></div>
                    </div>
                    
                    {/* Step 5: Quality Checking */}
                    <div className="bg-white border-2 border-neutral-900 px-6 py-4 rounded-lg shadow-md relative">
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-neutral-900">★</span>
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-neutral-900 mb-3">5. Quality Checking</h4>
                        <div className="space-y-2 text-sm text-neutral-700 mb-3">
                          <p><strong>Quality Check Manager</strong></p>
                        </div>
                        <div className="text-xs text-neutral-600 bg-yellow-50 px-3 py-2 rounded border border-yellow-200">
                          <strong>KK USP:</strong> In-house quality check by KK&apos;s dedicated team
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-8 bg-neutral-400"></div>
                      <div className="w-0 h-0 border-t-4 border-t-neutral-400 border-l-2 border-l-transparent border-r-2 border-r-transparent mt-1"></div>
                    </div>
                    
                    {/* Step 6: Packing */}
                    <div className="bg-white border-2 border-neutral-700 px-6 py-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-neutral-900 mb-3">6. Packing</h4>
                        <div className="space-y-2 text-sm text-neutral-700">
                          <p><strong>Production Manager</strong></p>
                          <p><strong>Fabric Manager</strong></p>
                        </div>
                        <div className="text-xs text-neutral-500 mt-2">(Factory)</div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-8 bg-neutral-400"></div>
                      <div className="w-0 h-0 border-t-4 border-t-neutral-400 border-l-2 border-l-transparent border-r-2 border-r-transparent mt-1"></div>
                    </div>
                    
                    {/* Step 7: Shipping */}
                    <div className="bg-white border-2 border-neutral-700 px-6 py-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-neutral-900 mb-3">7. Shipping</h4>
                        <div className="space-y-2 text-sm text-neutral-700">
                          <p><strong>Shipping Manager</strong></p>
                        </div>
                        <div className="text-xs text-neutral-500 mt-2">(KK)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Role Types & Responsibilities */}
        <section id="role-types" className="scroll-mt-20">
          <div>
            <div className="mb-16">
              <span className="text-2xl font-black text-neutral-400 tracking-wider">03</span>
              <h2 className="text-5xl font-black text-neutral-900 mt-2 tracking-tight">ROLE TYPES & RESPONSIBILITIES</h2>
              <Separator className="w-24 mt-8 bg-neutral-400" />
            </div>
            
            <div className="prose prose-neutral max-w-none">
              
              {/* CEO/Admin Role */}
              <div className="mb-32">
                <div className="bg-white border-2 border-neutral-900 p-8 rounded-lg shadow-lg mb-12">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-neutral-900">CEO / ADMIN</h3>
                    <p className="text-neutral-600 mt-2">Central Command & Strategic Oversight</p>
                  </div>
                  
                  {/* Connected Teams */}
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
                    <div className="bg-neutral-50 border border-neutral-300 px-4 py-3 rounded-lg text-center">
                      <div className="w-8 h-8 bg-neutral-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Workflow className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-xs font-bold text-neutral-700">Project Managers</p>
                    </div>
                    <div className="bg-neutral-50 border border-neutral-300 px-4 py-3 rounded-lg text-center">
                      <div className="w-8 h-8 bg-neutral-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-xs font-bold text-neutral-700">Quality Check Manager</p>
                    </div>
                    <div className="bg-neutral-50 border border-neutral-300 px-4 py-3 rounded-lg text-center">
                      <div className="w-8 h-8 bg-neutral-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Workflow className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-xs font-bold text-neutral-700">Production Manager</p>
                    </div>
                    <div className="bg-neutral-50 border border-neutral-300 px-4 py-3 rounded-lg text-center">
                      <div className="w-8 h-8 bg-neutral-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-xs font-bold text-neutral-700">Shipping Manager</p>
                    </div>
                    <div className="bg-neutral-50 border border-neutral-300 px-4 py-3 rounded-lg text-center">
                      <div className="w-8 h-8 bg-neutral-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-xs font-bold text-neutral-700">Vetted Vendors</p>
                    </div>
                    <div className="bg-neutral-50 border border-neutral-300 px-4 py-3 rounded-lg text-center">
                      <div className="w-8 h-8 bg-neutral-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-xs font-bold text-neutral-700">Clients</p>
                    </div>
                  </div>
                  
                  {/* Key Responsibilities */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-900">Project Overview</h4>
                          <p className="text-sm text-neutral-600">Oversees all projects, clients, vendors, and teams</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-900">Team Assignment</h4>
                          <p className="text-sm text-neutral-600">Assigns team for each project</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-900">Task Status Tracking</h4>
                          <div className="flex space-x-2 mt-2">
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">In Sync</span>
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Slightly Delayed</span>
                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Delayed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-900">Custom Phases</h4>
                          <p className="text-sm text-neutral-600">Defines custom phases for each project (e.g., &ldquo;30 Days – Stitching&rdquo;)</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">5</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-900">Lead Management</h4>
                          <p className="text-sm text-neutral-600">Gets lead information from website</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">6</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-900">Resource Database</h4>
                          <p className="text-sm text-neutral-600">Adds & shares learning materials (resource database access)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Manager Role */}
              <div className="mb-32">
                <div className="bg-white border-2 border-neutral-700 p-8 rounded-lg shadow-lg">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Workflow className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-neutral-900">PROJECT MANAGER</h3>
                    <p className="text-neutral-600 mt-2">Client Project Execution & Team Coordination</p>
                  </div>
                  
                  {/* Responsibility Clusters */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Cluster 1: Project Ownership */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">Project Ownership</h4>
                      </div>
                      <ul className="space-y-3 text-sm text-neutral-700">
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Manages multiple client projects</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Finalizes timelines, deliverables, inspirations</span>
                        </li>
                      </ul>
                    </div>

                    {/* Cluster 2: Internal Team Management */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">Internal Team Management</h4>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-neutral-800">Assigns design tasks to:</p>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-white px-3 py-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Fashion Designers</p>
                          </div>
                          <div className="bg-white px-3 py-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Graphic Designers</p>
                          </div>
                          <div className="bg-white px-3 py-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Textile Experts</p>
                          </div>
                        </div>
                        <p className="text-sm text-neutral-700">Coordinates with Stichers for fit samples</p>
                      </div>
                    </div>

                    {/* Cluster 3: Inter-Department Collaboration */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">Inter-Department Collaboration</h4>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-neutral-800">Works with:</p>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white px-3 py-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Production Manager</p>
                            <p className="text-xs text-neutral-500">(sourcing & mass production)</p>
                          </div>
                          <div className="bg-white px-3 py-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Quality Check Manager</p>
                            <p className="text-xs text-neutral-500">(for QC)</p>
                          </div>
                          <div className="bg-white px-3 py-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Shipping Manager</p>
                            <p className="text-xs text-neutral-500">(for dispatch)</p>
                          </div>
                          <div className="bg-white px-3 py-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Client</p>
                            <p className="text-xs text-neutral-500">(for updates)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cluster 4: Quoting & Approval Flow */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">4</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">Quoting & Approval Flow</h4>
                      </div>
                      <ul className="space-y-3 text-sm text-neutral-700">
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Prepares costings for different quantities</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Manages client negotiation & approval loop</span>
                        </li>
                      </ul>
                    </div>

                    {/* Cluster 5: Resource Sharing */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 md:col-span-2">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">5</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">Resource Sharing (Conditional)</h4>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm font-semibold text-neutral-800 mb-3">Can share:</p>
                          <div className="flex space-x-3">
                            <div className="bg-white px-4 py-2 rounded border text-center">
                              <p className="text-sm font-bold text-neutral-700">Blogs</p>
                            </div>
                            <div className="bg-white px-4 py-2 rounded border text-center">
                              <p className="text-sm font-bold text-neutral-700">Videos</p>
                            </div>
                            <div className="bg-white px-4 py-2 rounded border text-center">
                              <p className="text-sm font-bold text-neutral-700">Reading Materials</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-800 mb-3">Requires Admin approval to:</p>
                          <div className="bg-yellow-50 border border-yellow-200 px-4 py-3 rounded">
                            <p className="text-sm text-neutral-700">Add new learning materials to resource database</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Landing Page Content */}
        <section id="landing-page" className="scroll-mt-20">
          <div>
            <div className="mb-16">
              <span className="text-2xl font-black text-neutral-400 tracking-wider">04</span>
              <h2 className="text-5xl font-black text-neutral-900 mt-2 tracking-tight">LANDING PAGE CONTENT</h2>
              <Separator className="w-24 mt-8 bg-neutral-400" />
            </div>
            
            <div className="prose prose-neutral max-w-none">
              
              {/* Part 1: Design Moodboard */}
              <div className="mb-32">
                <div className="bg-white border-2 border-neutral-900 p-8 rounded-lg shadow-lg mb-12">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Layout className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-neutral-900">DESIGN MOODBOARD</h3>
                    <p className="text-neutral-600 mt-2">Visual Style & Brand Direction</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Color Palette */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <h4 className="text-lg font-bold text-neutral-900 mb-4">Primary Color Palette</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-[#111111] rounded-lg border border-neutral-300"></div>
                          <div>
                            <p className="font-bold text-neutral-900">Charcoal Black</p>
                            <p className="text-sm text-neutral-600">#111111</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg border border-neutral-300"></div>
                          <div>
                            <p className="font-bold text-neutral-900">Soft White</p>
                            <p className="text-sm text-neutral-600">#F5F5F5</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-[#CBB49A] rounded-lg border border-neutral-300"></div>
                          <div>
                            <p className="font-bold text-neutral-900">Warm Beige</p>
                            <p className="text-sm text-neutral-600">#CBB49A</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Typography */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <h4 className="text-lg font-bold text-neutral-900 mb-4">Typography</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-neutral-700 mb-1">Headers</p>
                          <p className="text-lg font-bold uppercase tracking-wide">Neue Haas Grotesk</p>
                          <p className="text-xs text-neutral-600">Bold, uppercase</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-700 mb-1">Body</p>
                          <p className="text-base font-light">Inter / Helvetica Neue</p>
                          <p className="text-xs text-neutral-600">Light, clean sans</p>
                        </div>
                      </div>
                    </div>

                    {/* UI Style */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <h4 className="text-lg font-bold text-neutral-900 mb-4">UI Style</h4>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Bold, minimal layout</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Whitespace & large visuals</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Smooth hovers & scroll reveals</span>
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-neutral-100 rounded">
                        <p className="text-xs font-semibold text-neutral-800">Inspiration:</p>
                        <p className="text-xs text-neutral-600">Zara, Nike, H&M, Adidas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 2: Landing Page Content Plan */}
              <div className="mb-32">
                <div className="bg-white border-2 border-neutral-700 p-8 rounded-lg shadow-lg">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-neutral-900">LANDING PAGE CONTENT PLAN</h3>
                    <p className="text-neutral-600 mt-2">Section-by-Section Breakdown</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Section 1: Hero */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">Hero Section</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded border">
                          <p className="text-lg font-bold text-neutral-900 mb-2">&ldquo;Your Creative Partner & Production Powerhouse&rdquo;</p>
                          <p className="text-sm text-neutral-600">Bold statement headline</p>
                        </div>
                        <div className="bg-neutral-900 text-white p-3 rounded text-center">
                          <p className="font-bold">&ldquo;Start Your Project&rdquo; → Lead Form</p>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Services */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">Our Services</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border">
                          <p className="font-bold text-neutral-900">Design Services</p>
                          <p className="text-sm text-neutral-600">→ Connect CTA</p>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <p className="font-bold text-neutral-900">Manufacturing Services</p>
                          <p className="text-sm text-neutral-600">→ Connect CTA</p>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <p className="font-bold text-neutral-900">End-to-End Services</p>
                          <p className="text-sm text-neutral-600">→ CTA</p>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: How It Works */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">How It Works</h4>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm text-neutral-700">Story-driven journey of a startup founder across 4 months</p>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-white p-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Dashboard</p>
                          </div>
                          <div className="bg-white p-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Samples</p>
                          </div>
                          <div className="bg-white p-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Packaging</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Client Dashboard */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">4</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">Client Dashboard</h4>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-neutral-800">Key Features:</p>
                        <ul className="space-y-2 text-sm text-neutral-700">
                          <li>• Project tracking</li>
                          <li>• Messaging</li>
                          <li>• Approvals</li>
                        </ul>
                        <div className="bg-neutral-200 p-3 rounded text-center">
                          <p className="text-xs text-neutral-600">Visual screenshot previews</p>
                        </div>
                      </div>
                    </div>

                    {/* Section 5: Retainer Model */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">5</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">Retainer Model</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white p-3 rounded border text-center">
                            <p className="text-sm font-bold text-neutral-900">Monthly Continuity</p>
                          </div>
                          <div className="bg-white p-3 rounded border text-center">
                            <p className="text-sm font-bold text-neutral-900">One-off Orders</p>
                          </div>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
                          <p className="text-sm font-semibold text-neutral-800">Benefits:</p>
                          <p className="text-xs text-neutral-700">Cost savings, flexibility, no MOQ</p>
                        </div>
                      </div>
                    </div>

                    {/* Section 6: Why Different */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">6</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">Why We&apos;re Different</h4>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm text-neutral-700">Comparison with others</p>
                        <div className="bg-white p-3 rounded border">
                          <div className="flex justify-between text-sm">
                            <span className="font-bold text-neutral-900">Feature</span>
                            <span className="font-bold text-neutral-900">Others</span>
                            <span className="font-bold text-neutral-900">KK</span>
                          </div>
                          <div className="flex justify-between text-sm mt-2">
                            <span className="text-neutral-700">Low MOQ</span>
                            <span className="text-red-600">✗</span>
                            <span className="text-green-600">✓</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 7: Case Studies */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">7</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">Case Studies + Testimonials</h4>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm text-neutral-700">Carousel style or tiled layout</p>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white p-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Case Studies</p>
                          </div>
                          <div className="bg-white p-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Video Testimonials</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 8: Resources Hub */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">8</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">Resources Hub</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="flex space-x-2">
                          <div className="bg-white px-3 py-2 rounded border">
                            <p className="text-xs font-bold text-neutral-700">Blogs</p>
                          </div>
                          <div className="bg-white px-3 py-2 rounded border">
                            <p className="text-xs font-bold text-neutral-700">Videos</p>
                          </div>
                        </div>
                        <div className="bg-neutral-900 text-white p-3 rounded text-center">
                          <p className="font-bold text-sm">&ldquo;Get Weekly Fashion Insights&rdquo;</p>
                        </div>
                      </div>
                    </div>

                    {/* Section 9: Lead Form */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">9</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">Lead Generation Form</h4>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-neutral-800">Capture:</p>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white p-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Name</p>
                          </div>
                          <div className="bg-white p-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Email</p>
                          </div>
                          <div className="bg-white p-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Brand Stage</p>
                          </div>
                          <div className="bg-white p-2 rounded border text-center">
                            <p className="text-xs font-bold text-neutral-700">Services</p>
                          </div>
                        </div>
                        <p className="text-xs text-neutral-600">Data goes to Admin Portal</p>
                      </div>
                    </div>

                    {/* Section 10: About Us */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">10</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">About Us</h4>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm text-neutral-700">Origin story, vision, personal & transparent tone</p>
                        <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
                          <p className="text-sm font-semibold text-neutral-800">Values:</p>
                          <p className="text-xs text-neutral-700">Quality &gt; Speed, low-MOQ support, creative-first</p>
                        </div>
                      </div>
                    </div>

                    {/* Optional Features */}
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 md:col-span-2">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">+</span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900">Optional Features</h4>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-sm font-semibold text-neutral-800 mb-3">AI Forecasting Tool</p>
                          <div className="space-y-2 text-xs text-neutral-700">
                            <p>• First use free</p>
                            <p>• Next gated behind email</p>
                            <p>• Personalized follow-up</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-800 mb-3">Downloadables</p>
                          <div className="space-y-2">
                            <div className="bg-white p-2 rounded border text-center">
                              <p className="text-xs font-bold text-neutral-700">Tech Pack Template</p>
                            </div>
                            <div className="bg-white p-2 rounded border text-center">
                              <p className="text-xs font-bold text-neutral-700">Trending Reports</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-800 mb-3">CTA Placement</p>
                          <div className="space-y-2">
                            <div className="bg-neutral-900 text-white p-2 rounded text-center">
                              <p className="text-xs font-bold">Primary CTAs</p>
                            </div>
                            <div className="bg-neutral-200 p-2 rounded text-center">
                              <p className="text-xs font-bold text-neutral-700">Secondary CTAs</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Low Fidelity Wireframes */}
        <section id="wireframes" className="scroll-mt-20">
          <div>
            <div className="mb-12 md:mb-16">
              <span className="text-xl md:text-2xl font-black text-neutral-400 tracking-wider">05</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mt-2 tracking-tight">LOW FIDELITY WIREFRAMES</h2>
              <Separator className="w-16 md:w-24 mt-6 md:mt-8 bg-neutral-400" />
            </div>
            
            <div className="prose prose-neutral max-w-none">
              <p className="text-base md:text-xl leading-relaxed text-neutral-700 mb-12 md:mb-16">
                Interactive wireframe layout for the Krazy Kreators landing page featuring modern design elements 
                with minimalist aesthetics, clean typography, and premium visual hierarchy. Click the card below to view the live wireframe implementation.
              </p>

              {/* Interactive Wireframe Card */}
              <div className="mt-12 md:mt-16 mb-12 md:mb-16">
                <div className="text-center mb-8 md:mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 md:mb-4">INTERACTIVE WIREFRAME</h3>
                  <p className="text-neutral-600 text-sm md:text-base">Click the card to view the live wireframe</p>
                </div>
                
                <div className="flex justify-center">
                  <div 
                    className="bg-white border-2 border-neutral-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group max-w-md w-full"
                    onClick={() => window.open('/zara-wireframe', '_blank')}
                  >
                    <div className="p-6 md:p-8">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                        <Layout className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4 md:mb-6 text-center">MODERN DESIGN</h4>
                      <p className="text-sm md:text-base text-neutral-600 mb-6 md:mb-8 text-center leading-relaxed">
                        Clean, minimalist design with premium typography and generous white space. 
                        Features full-width hero sections, elegant hover effects, and sophisticated color palette.
                      </p>
                      <div className="space-y-3 mb-6 md:mb-8">
                        <div className="h-2 bg-neutral-200 rounded"></div>
                        <div className="h-2 bg-neutral-200 rounded w-3/4"></div>
                        <div className="h-2 bg-neutral-200 rounded w-1/2"></div>
                      </div>
                      <div className="text-center">
                        <div className="inline-flex items-center text-neutral-900 font-medium group-hover:text-[#CBB49A] transition-colors">
                          <span>View Wireframe</span>
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Scroll to Top Button */}
      {mounted && (
        <Button
          key="scroll-to-top"
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 rounded-none w-10 h-10 md:w-12 md:h-12 p-0 bg-neutral-900 hover:bg-neutral-800 text-white shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
        </Button>
      )}
    </div>
  )
} 