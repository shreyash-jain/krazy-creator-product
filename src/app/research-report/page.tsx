"use client"

import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FileText, Users, Workflow, Target, Lightbulb, Layout, ArrowUp, BookOpen, ChevronRight, Globe } from "lucide-react"

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

                <Button
                  variant="ghost"
                  className={`w-full justify-start text-left h-auto p-3 rounded-md ${mounted && activeSection === "apprelix-workflow" ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600 hover:bg-neutral-50'}`}
                  onClick={() => scrollToSection("apprelix-workflow")}
                >
                  <span className="text-sm font-medium">06. Apprelix Workflow</span>
                </Button>

                <Button
                  variant="ghost"
                  className={`w-full justify-start text-left h-auto p-3 rounded-md ${mounted && activeSection === "product-structure" ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600 hover:bg-neutral-50'}`}
                  onClick={() => scrollToSection("product-structure")}
                >
                  <span className="text-sm font-medium">07. Product Structure</span>
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
              <p className="text-lg md:text-xl font-bold text-white">
                December 2024
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

              <Button
                variant="ghost"
                className={`w-full justify-start text-left h-auto p-4 md:p-6 rounded-lg border-2 ${mounted && activeSection === "apprelix-workflow" ? 'border-neutral-900 bg-white' : 'border-neutral-200 hover:border-neutral-400 hover:bg-white'}`}
                onClick={() => scrollToSection("apprelix-workflow")}
              >
                <div className="flex items-center space-x-3 md:space-x-4">
                  <span className="text-xl md:text-2xl font-black text-neutral-400">06</span>
                  <div className="text-left">
                    <div className="font-bold text-neutral-900 text-base md:text-lg">Apprelix Workflow</div>
                    <div className="text-xs md:text-sm text-neutral-500">Sales to shipment process</div>
                  </div>
                </div>
              </Button>

              <Button
                variant="ghost"
                className={`w-full justify-start text-left h-auto p-4 md:p-6 rounded-lg border-2 ${mounted && activeSection === "product-structure" ? 'border-neutral-900 bg-white' : 'border-neutral-200 hover:border-neutral-400 hover:bg-white'}`}
                onClick={() => scrollToSection("product-structure")}
              >
                <div className="flex items-center space-x-3 md:space-x-4">
                  <span className="text-xl md:text-2xl font-black text-neutral-400">07</span>
                  <div className="text-left">
                    <div className="font-bold text-neutral-900 text-base md:text-lg">Product Structure</div>
                    <div className="text-xs md:text-sm text-neutral-500">Unified platform architecture</div>
                  </div>
                </div>
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="w-full px-4 md:px-8 py-16 md:py-24 space-y-20 md:space-y-32">
        


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

        {/* Apprelix Workflow */}
        <section id="apprelix-workflow" className="scroll-mt-20">
          <div>
            <div className="mb-12 md:mb-16">
              <span className="text-xl md:text-2xl font-black text-neutral-400 tracking-wider">06</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mt-2 tracking-tight">APPRELIX WORKFLOW</h2>
              <Separator className="w-16 md:w-24 mt-6 md:mt-8 bg-neutral-400" />
            </div>
            
            <div className="prose prose-neutral max-w-none">
              <p className="text-base md:text-xl leading-relaxed text-neutral-700 mb-12 md:mb-16">
                A comprehensive visual representation of the end-to-end process flow in Apprelix — a software used by fabric and garment manufacturing companies 
                to manage sales orders and production from initial order creation to final shipment delivery.
              </p>

              {/* Flowchart Title */}
              <div className="text-center mb-12 md:mb-16">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 mb-4 md:mb-6">Apprelix Workflow: Sales to Shipment</h3>
                <p className="text-neutral-600 text-sm md:text-base">Complete process flow with color-coded stages and clear directional guidance</p>
              </div>

              {/* Main Flowchart */}
              <div className="bg-white border-2 border-neutral-200 rounded-lg p-8 md:p-12 mb-12 md:mb-16">
                <div className="max-w-6xl mx-auto">
                  
                  {/* Stage 1: Sales Order Creation */}
                  <div className="mb-8 md:mb-12">
                    <div className="text-center mb-6 md:mb-8">
                      <h4 className="text-lg md:text-xl font-bold text-blue-700 bg-blue-50 px-4 py-2 rounded-lg inline-block">STAGE 1: SALES ORDER CREATION</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">1</span>
                        </div>
                        <h5 className="font-bold text-blue-900 mb-2">Order Entry</h5>
                        <p className="text-sm text-blue-700">Buyer, style, color, size, quantity selection</p>
                      </div>
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">2</span>
                        </div>
                        <h5 className="font-bold text-blue-900 mb-2">SKU Generation</h5>
                        <p className="text-sm text-blue-700">Automatic product code creation</p>
                      </div>
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">3</span>
                        </div>
                        <h5 className="font-bold text-blue-900 mb-2">Order Approval</h5>
                        <p className="text-sm text-blue-700">Management review and approval</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="text-center mb-8 md:mb-12">
                    <div className="w-8 h-8 bg-neutral-400 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* Stage 2: Inventory & Purchase Management */}
                  <div className="mb-8 md:mb-12">
                    <div className="text-center mb-6 md:mb-8">
                      <h4 className="text-lg md:text-xl font-bold text-green-700 bg-green-50 px-4 py-2 rounded-lg inline-block">STAGE 2: INVENTORY & PURCHASE MANAGEMENT</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">1</span>
                        </div>
                        <h5 className="font-bold text-green-900 mb-2">Stock Check</h5>
                        <p className="text-sm text-green-700">Check raw material availability</p>
                      </div>
                      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">2</span>
                        </div>
                        <h5 className="font-bold text-green-900 mb-2">Shortage Detection</h5>
                        <p className="text-sm text-green-700">Identify material gaps</p>
                      </div>
                      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">3</span>
                        </div>
                        <h5 className="font-bold text-green-900 mb-2">Purchase Orders</h5>
                        <p className="text-sm text-green-700">Raise PO for shortages</p>
                      </div>
                      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">4</span>
                        </div>
                        <h5 className="font-bold text-green-900 mb-2">Goods Receipt</h5>
                        <p className="text-sm text-green-700">Receive and update inventory</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="text-center mb-8 md:mb-12">
                    <div className="w-8 h-8 bg-neutral-400 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* Stage 3: Production Order Management */}
                  <div className="mb-8 md:mb-12">
                    <div className="text-center mb-6 md:mb-8">
                      <h4 className="text-lg md:text-xl font-bold text-purple-700 bg-purple-50 px-4 py-2 rounded-lg inline-block">STAGE 3: PRODUCTION ORDER MANAGEMENT</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
                      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">1</span>
                        </div>
                        <h5 className="font-bold text-purple-900 mb-2">Convert to PO</h5>
                        <p className="text-sm text-purple-700">Sales order to production order</p>
                      </div>
                      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">2</span>
                        </div>
                        <h5 className="font-bold text-purple-900 mb-2">BOM Assignment</h5>
                        <p className="text-sm text-purple-700">Assign Bill of Materials</p>
                      </div>
                      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">3</span>
                        </div>
                        <h5 className="font-bold text-purple-900 mb-2">Production Track</h5>
                        <p className="text-sm text-purple-700">Cutting → Stitching → Washing</p>
                      </div>
                      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">4</span>
                        </div>
                        <h5 className="font-bold text-purple-900 mb-2">Quality Check</h5>
                        <p className="text-sm text-purple-700">Inspection and testing</p>
                      </div>
                      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">5</span>
                        </div>
                        <h5 className="font-bold text-purple-900 mb-2">Pack & Move</h5>
                        <p className="text-sm text-purple-700">Finished goods to inventory</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="text-center mb-8 md:mb-12">
                    <div className="w-8 h-8 bg-neutral-400 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* Stage 4: Dispatch & Delivery */}
                  <div className="mb-8 md:mb-12">
                    <div className="text-center mb-6 md:mb-8">
                      <h4 className="text-lg md:text-xl font-bold text-orange-700 bg-orange-50 px-4 py-2 rounded-lg inline-block">STAGE 4: DISPATCH & DELIVERY</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                      <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">1</span>
                        </div>
                        <h5 className="font-bold text-orange-900 mb-2">Dispatch Plan</h5>
                        <p className="text-sm text-orange-700">Create shipping schedule</p>
                      </div>
                      <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">2</span>
                        </div>
                        <h5 className="font-bold text-orange-900 mb-2">Generate Documents</h5>
                        <p className="text-sm text-orange-700">Packing list and invoice</p>
                      </div>
                      <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">3</span>
                        </div>
                        <h5 className="font-bold text-orange-900 mb-2">Shipment Dispatch</h5>
                        <p className="text-sm text-orange-700">Mark as dispatched</p>
                      </div>
                    </div>
                  </div>

                  {/* Final Success Indicator */}
                  <div className="text-center">
                    <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6 md:p-8 inline-block">
                      <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h5 className="font-bold text-emerald-900 text-lg md:text-xl mb-2">Order Completed</h5>
                      <p className="text-sm text-emerald-700">Successfully delivered to customer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Benefits */}
              <div className="bg-neutral-50 p-8 md:p-12 rounded-lg border border-neutral-200">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 mb-6 md:mb-8 text-center">PROCESS BENEFITS</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">Efficiency</h4>
                    <p className="text-sm md:text-base text-neutral-600">Streamlined workflow reduces processing time and eliminates bottlenecks</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">Accuracy</h4>
                    <p className="text-sm md:text-base text-neutral-600">Automated processes minimize human errors and ensure data consistency</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">Visibility</h4>
                    <p className="text-sm md:text-base text-neutral-600">Real-time tracking provides complete transparency across all stages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Structure */}
        <section id="product-structure" className="scroll-mt-20 w-full">
          <div className="w-full">
            <div className="mb-12 md:mb-16">
              <span className="text-xl md:text-2xl font-black text-neutral-400 tracking-wider">07</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mt-2 tracking-tight">PRODUCT STRUCTURE</h2>
              <Separator className="w-16 md:w-24 mt-6 md:mt-8 bg-neutral-400" />
            </div>
            
            <div className="prose prose-neutral max-w-none w-full">
              <p className="text-base md:text-xl leading-relaxed text-neutral-700 mb-12 md:mb-16">
                A comprehensive visual representation of the unified product architecture that seamlessly integrates Krazy Kreators' creative platform 
                with Apprelix's manufacturing and production workflow, creating a complete end-to-end solution for fabric and garment manufacturing.
              </p>

              {/* Diagram Title */}
              <div className="text-center mb-12 md:mb-16">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 mb-4 md:mb-6">Unified Product Structure: Krazy Kreators x Apprelix</h3>
                <p className="text-neutral-600 text-sm md:text-base">Integrated platform architecture with role-based access and dual portal system</p>
              </div>

              {/* Main Product Structure Diagram */}
              <div className="bg-white border-2 border-neutral-200 rounded-lg p-8 md:p-12 mb-12 md:mb-16 w-full">
                <div className="w-full">
                  
                  {/* Top Level: Two Main Portals */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                    
                    {/* Internal Organization Portal */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-6 md:p-8">
                      <div className="text-center mb-6 md:mb-8">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-blue-900">Internal Organization Portal</h4>
                        <p className="text-sm md:text-base text-blue-700">Complete internal management system</p>
                      </div>

                      {/* User Roles */}
                      <div className="mb-6 md:mb-8">
                        <h5 className="font-bold text-blue-900 mb-3 md:mb-4 text-center">User Roles</h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                          <div className="bg-blue-200 p-2 md:p-3 rounded text-center">
                            <span className="text-xs md:text-sm font-bold text-blue-900">Admin</span>
                          </div>
                          <div className="bg-blue-200 p-2 md:p-3 rounded text-center">
                            <span className="text-xs md:text-sm font-bold text-blue-900">Project Manager</span>
                          </div>
                          <div className="bg-blue-200 p-2 md:p-3 rounded text-center">
                            <span className="text-xs md:text-sm font-bold text-blue-900">Design Team</span>
                          </div>
                          <div className="bg-blue-200 p-2 md:p-3 rounded text-center">
                            <span className="text-xs md:text-sm font-bold text-blue-900">Production Manager</span>
                          </div>
                          <div className="bg-blue-200 p-2 md:p-3 rounded text-center">
                            <span className="text-xs md:text-sm font-bold text-blue-900">QC Manager</span>
                          </div>
                          <div className="bg-blue-200 p-2 md:p-3 rounded text-center">
                            <span className="text-xs md:text-sm font-bold text-blue-900">Shipping Manager</span>
                          </div>
                        </div>
                      </div>

                      {/* Mode Switcher */}
                      <div className="bg-blue-200 p-3 md:p-4 rounded-lg mb-6 md:mb-8">
                        <h5 className="font-bold text-blue-900 mb-2 text-center">Mode Access</h5>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-blue-600 text-white p-2 rounded text-center">
                            <span className="text-xs md:text-sm font-bold">Organization Mode</span>
                            <p className="text-xs text-blue-100">All roles access</p>
                          </div>
                          <div className="bg-blue-300 p-2 rounded text-center">
                            <span className="text-xs md:text-sm font-bold text-blue-900">Clients Mode</span>
                            <p className="text-xs text-blue-700">Admin & PM only</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Client Portal */}
                    <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-6 md:p-8">
                      <div className="text-center mb-6 md:mb-8">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-green-900">Client Portal</h4>
                        <p className="text-sm md:text-base text-green-700">External client interface</p>
                      </div>

                      {/* Single Tab Structure */}
                      <div className="bg-green-200 p-4 md:p-6 rounded-lg">
                        <h5 className="font-bold text-green-900 mb-3 md:mb-4 text-center">Manufacturing Management Tab</h5>
                        <div className="space-y-2 md:space-y-3">
                          <div className="bg-green-300 p-2 md:p-3 rounded">
                            <span className="text-xs md:text-sm font-bold text-green-900">Place Purchase Orders</span>
                          </div>
                          <div className="bg-green-300 p-2 md:p-3 rounded">
                            <span className="text-xs md:text-sm font-bold text-green-900">Track Production & Order Status</span>
                          </div>
                          <div className="bg-green-300 p-2 md:p-3 rounded">
                            <span className="text-xs md:text-sm font-bold text-green-900">View Order History</span>
                          </div>
                          <div className="bg-green-300 p-2 md:p-3 rounded">
                            <span className="text-xs md:text-sm font-bold text-green-900">Communication Channel</span>
                          </div>
                          <div className="bg-green-300 p-2 md:p-3 rounded">
                            <span className="text-xs md:text-sm font-bold text-green-900">Resource Tab</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                                     {/* Organization Mode Details */}
                   <div className="mb-12 md:mb-16">
                     <div className="text-center mb-6 md:mb-8">
                       <h4 className="text-lg md:text-xl font-bold text-blue-700 bg-blue-50 px-4 py-2 rounded-lg inline-block">Krazy Kreators – Internal Portal Structure for Fabric Manufacturing</h4>
                     </div>

                     {/* Dashboard - Central Hub */}
                     <div className="mb-8 md:mb-12">
                       <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 md:p-8 text-center text-white">
                         <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                           <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                           </svg>
                         </div>
                         <h5 className="text-xl md:text-2xl font-bold mb-2">Dashboard</h5>
                         <p className="text-blue-100 text-sm md:text-base">Centralized overview for all internal activities</p>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-4">
                           <div className="bg-white/20 p-2 rounded">
                             <span className="text-xs font-bold">Production</span>
                           </div>
                           <div className="bg-white/20 p-2 rounded">
                             <span className="text-xs font-bold">Inventory</span>
                           </div>
                           <div className="bg-white/20 p-2 rounded">
                             <span className="text-xs font-bold">Vendors</span>
                           </div>
                           <div className="bg-white/20 p-2 rounded">
                             <span className="text-xs font-bold">Dispatch</span>
                           </div>
                         </div>
                       </div>
                     </div>

                     {/* Order & Production Flow */}
                     <div className="mb-8 md:mb-12">
                       <div className="text-center mb-6 md:mb-8">
                         <h5 className="text-lg md:text-xl font-bold text-orange-700 bg-orange-50 px-4 py-2 rounded-lg inline-block">Order & Production Flow</h5>
                       </div>
                       
                       {/* Horizontal Flow Layout for Desktop */}
                       <div className="hidden lg:block">
                         <div className="flex items-center justify-between space-x-4 mb-6">
                           <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 flex-1 text-center min-h-[160px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">1</span>
                             </div>
                             <h5 className="font-bold text-orange-900 text-lg mb-2">Inventory Management</h5>
                             <p className="text-sm text-orange-700 leading-relaxed">Raw material tracking and stock levels</p>
                           </div>
                           
                           <div className="flex flex-col items-center">
                             <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                               </svg>
                             </div>
                           </div>

                           <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 flex-1 text-center min-h-[160px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">2</span>
                             </div>
                             <h5 className="font-bold text-orange-900 text-lg mb-2">Purchase Order Management</h5>
                             <p className="text-sm text-orange-700 leading-relaxed">Vendor orders and material procurement</p>
                           </div>
                           
                           <div className="flex flex-col items-center">
                             <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                               </svg>
                             </div>
                           </div>

                           <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 flex-1 text-center min-h-[160px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">3</span>
                             </div>
                             <h5 className="font-bold text-orange-900 text-lg mb-2">Production Order Management</h5>
                             <p className="text-sm text-orange-700 leading-relaxed">Manufacturing workflow and BOM management</p>
                           </div>
                           
                           <div className="flex flex-col items-center">
                             <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                               </svg>
                             </div>
                           </div>

                           <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 flex-1 text-center min-h-[160px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">4</span>
                             </div>
                             <h5 className="font-bold text-orange-900 text-lg mb-2">QC & Dispatch Tracking</h5>
                             <p className="text-sm text-orange-700 leading-relaxed">Quality control and shipping management</p>
                           </div>
                         </div>
                       </div>

                       {/* Mobile/Tablet Grid Layout */}
                       <div className="lg:hidden">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                           <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 text-center min-h-[140px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">1</span>
                             </div>
                             <h5 className="font-bold text-orange-900 text-lg mb-2">Inventory Management</h5>
                             <p className="text-sm text-orange-700 leading-relaxed">Raw material tracking and stock levels</p>
                           </div>

                           <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 text-center min-h-[140px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">2</span>
                             </div>
                             <h5 className="font-bold text-orange-900 text-lg mb-2">Purchase Order Management</h5>
                             <p className="text-sm text-orange-700 leading-relaxed">Vendor orders and material procurement</p>
                           </div>

                           <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 text-center min-h-[140px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">3</span>
                             </div>
                             <h5 className="font-bold text-orange-900 text-lg mb-2">Production Order Management</h5>
                             <p className="text-sm text-orange-700 leading-relaxed">Manufacturing workflow and BOM management</p>
                           </div>

                           <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 text-center min-h-[140px] flex flex-col justify-center md:col-span-2">
                             <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">4</span>
                             </div>
                             <h5 className="font-bold text-orange-900 text-lg mb-2">QC & Dispatch Tracking</h5>
                             <p className="text-sm text-orange-700 leading-relaxed">Quality control and shipping management</p>
                           </div>
                         </div>
                       </div>
                     </div>

                     {/* Planning & Collaboration */}
                     <div className="mb-8 md:mb-12">
                       <div className="text-center mb-6 md:mb-8">
                         <h5 className="text-lg md:text-xl font-bold text-purple-700 bg-purple-50 px-4 py-2 rounded-lg inline-block">Planning & Collaboration</h5>
                       </div>
                       
                       {/* Horizontal Layout for Desktop */}
                       <div className="hidden lg:block">
                         <div className="flex items-stretch space-x-6">
                           <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 flex-1 text-center min-h-[160px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">6</span>
                             </div>
                             <h5 className="font-bold text-purple-900 text-lg mb-2">Project Management Suite</h5>
                             <p className="text-sm text-purple-700 leading-relaxed">Plan A/B/C, Calendar, Tracker integration</p>
                           </div>

                           <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 flex-1 text-center min-h-[160px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">7</span>
                             </div>
                             <h5 className="font-bold text-purple-900 text-lg mb-2">Vendor Management</h5>
                             <p className="text-sm text-purple-700 leading-relaxed">Supplier relationships and performance tracking</p>
                           </div>

                           <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 flex-1 text-center min-h-[160px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">8</span>
                             </div>
                             <h5 className="font-bold text-purple-900 text-lg mb-2">Teams Tab</h5>
                             <p className="text-sm text-purple-700 leading-relaxed">Team members, roles, and permissions</p>
                           </div>

                           <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 flex-1 text-center min-h-[160px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">9</span>
                             </div>
                             <h5 className="font-bold text-purple-900 text-lg mb-2">Internal Communication</h5>
                             <p className="text-sm text-purple-700 leading-relaxed">Per-project communication channels</p>
                           </div>
                         </div>
                       </div>

                       {/* Mobile/Tablet Grid Layout */}
                       <div className="lg:hidden">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                           <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 text-center min-h-[140px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">6</span>
                             </div>
                             <h5 className="font-bold text-purple-900 text-lg mb-2">Project Management Suite</h5>
                             <p className="text-sm text-purple-700 leading-relaxed">Plan A/B/C, Calendar, Tracker integration</p>
                           </div>

                           <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 text-center min-h-[140px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">7</span>
                             </div>
                             <h5 className="font-bold text-purple-900 text-lg mb-2">Vendor Management</h5>
                             <p className="text-sm text-purple-700 leading-relaxed">Supplier relationships and performance tracking</p>
                           </div>

                           <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 text-center min-h-[140px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">8</span>
                             </div>
                             <h5 className="font-bold text-purple-900 text-lg mb-2">Teams Tab</h5>
                             <p className="text-sm text-purple-700 leading-relaxed">Team members, roles, and permissions</p>
                           </div>

                           <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 text-center min-h-[140px] flex flex-col justify-center">
                             <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <span className="text-white font-bold text-lg">9</span>
                             </div>
                             <h5 className="font-bold text-purple-900 text-lg mb-2">Internal Communication</h5>
                             <p className="text-sm text-purple-700 leading-relaxed">Per-project communication channels</p>
                           </div>
                         </div>
                       </div>
                     </div>

                     {/* Knowledge & Training */}
                     <div className="mb-8 md:mb-12">
                       <div className="text-center mb-6 md:mb-8">
                         <h5 className="text-lg md:text-xl font-bold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-lg inline-block">Knowledge & Training</h5>
                       </div>
                       <div className="flex justify-center">
                         <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-4 md:p-6 max-w-md">
                           <div className="flex items-center mb-3">
                             <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                               <span className="text-white font-bold text-sm">10</span>
                             </div>
                             <h5 className="font-bold text-emerald-900">Resource Tab</h5>
                           </div>
                           <p className="text-xs md:text-sm text-emerald-700">Educational content, training materials, and documentation</p>
                         </div>
                       </div>
                     </div>

                     {/* Process Flow Summary */}
                     <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-6 md:p-8 rounded-lg border-2 border-neutral-300">
                       <h5 className="text-lg md:text-xl font-bold text-neutral-900 mb-4 md:mb-6 text-center">Operational Process Flow</h5>
                       <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                         <div className="bg-orange-600 text-white p-3 rounded-lg text-center">
                           <span className="text-sm font-bold">Sales Order</span>
                         </div>
                         <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                         </svg>
                         <div className="bg-orange-600 text-white p-3 rounded-lg text-center">
                           <span className="text-sm font-bold">Production Order</span>
                         </div>
                         <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                         </svg>
                         <div className="bg-orange-600 text-white p-3 rounded-lg text-center">
                           <span className="text-sm font-bold">QC & Dispatch</span>
                         </div>
                       </div>
                     </div>
                   </div>

               {/* Internal Portal Wireframe */}
               <div className="mb-12 md:mb-16">
                 <div className="text-center mb-8 md:mb-12">
                   <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 mb-4 md:mb-6">Internal Portal – Organization Mode (Wireframe Preview)</h3>
                   <p className="text-neutral-600 text-sm md:text-base">Low-fidelity wireframe mockup showing the internal portal structure and navigation</p>
                 </div>

                 <div className="bg-white border-2 border-neutral-300 rounded-lg p-6 md:p-8 mb-8">
                   <div className="flex flex-col lg:flex-row h-[800px] md:h-[900px]">
                     
                     {/* Left Sidebar Navigation */}
                     <div className="w-full lg:w-64 bg-neutral-100 border-r border-neutral-300 p-4">
                       <div className="mb-6">
                         <div className="w-32 h-8 bg-neutral-300 rounded mb-4"></div>
                         <div className="text-xs text-neutral-600 font-semibold mb-2">NAVIGATION MENU</div>
                       </div>
                       
                       <nav className="space-y-2">
                         <div className="flex items-center p-2 bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm font-medium text-neutral-700">Dashboard</span>
                         </div>

                         <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm text-neutral-600">Project Management</span>
                         </div>
                         <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm text-neutral-600">Production Order Management</span>
                         </div>
                         <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm text-neutral-600">Raw Material Inventory</span>
                         </div>
                         <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm text-neutral-600">Purchase Order Management</span>
                         </div>
                         <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm text-neutral-600">Vendor Management</span>
                         </div>
                         <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm text-neutral-600">Teams</span>
                         </div>
                         <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm text-neutral-600">Internal Communication</span>
                         </div>
                         <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm text-neutral-600">Resource Library</span>
                         </div>
                       </nav>
                     </div>

                     {/* Main Content Area */}
                     <div className="flex-1 flex flex-col">
                       
                       {/* Top Bar */}
                       <div className="h-16 bg-neutral-50 border-b border-neutral-300 flex items-center justify-between px-6">
                         <div className="flex items-center space-x-4">
                           <div className="w-24 h-6 bg-neutral-300 rounded"></div>
                           <span className="text-sm text-neutral-600">Krazy Kreators Portal</span>
                         </div>
                         <div className="flex items-center space-x-4">
                           {/* Mode Switch */}
                           <div className="flex items-center space-x-2">
                             <span className="text-sm text-gray-600">Organization</span>
                             <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                               <div className="inline-block h-4 w-4 transform rounded-full bg-white transition"></div>
                             </div>
                             <span className="text-sm text-gray-600">Client</span>
                           </div>
                           <div className="w-6 h-6 bg-neutral-300 rounded-full"></div>
                           <div className="w-6 h-6 bg-neutral-300 rounded-full"></div>
                           <div className="w-6 h-6 bg-neutral-300 rounded-full"></div>
                         </div>
                       </div>

                       {/* Dashboard Content */}
                       <div className="flex-1 p-6 bg-neutral-50">
                         <div className="mb-6">
                           <h2 className="text-xl font-bold text-neutral-800 mb-2">Dashboard Overview</h2>
                           <p className="text-sm text-neutral-600">Real-time monitoring of all operational activities</p>
                         </div>

                         {/* Dashboard Grid */}
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                           
                           {/* Production Overview */}
                           <div className="bg-white border border-neutral-300 rounded-lg p-4">
                             <div className="flex items-center justify-between mb-3">
                               <h3 className="font-semibold text-neutral-800">Production Overview</h3>
                               <div className="w-4 h-4 bg-blue-300 rounded"></div>
                             </div>
                             <div className="text-center mb-3">
                               <div className="text-3xl font-bold text-blue-600 mb-1">18</div>
                               <div className="text-xs text-neutral-600">Active Orders</div>
                             </div>
                             <div className="space-y-2">
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">In Production</span>
                                 <span className="font-medium text-blue-600">12</span>
                               </div>
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">Quality Check</span>
                                 <span className="font-medium text-orange-600">4</span>
                               </div>
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">Ready to Ship</span>
                                 <span className="font-medium text-green-600">2</span>
                               </div>
                             </div>
                           </div>

                           {/* Inventory Status */}
                           <div className="bg-white border border-neutral-300 rounded-lg p-4">
                             <div className="flex items-center justify-between mb-3">
                               <h3 className="font-semibold text-neutral-800">Inventory Status</h3>
                               <div className="w-4 h-4 bg-green-300 rounded"></div>
                             </div>
                             <div className="space-y-3">
                               <div>
                                 <div className="flex justify-between text-xs text-neutral-600 mb-1">
                                   <span>Raw Materials</span>
                                   <span>78%</span>
                                 </div>
                                 <div className="w-full bg-neutral-200 rounded-full h-2">
                                   <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
                                 </div>
                               </div>
                               <div>
                                 <div className="flex justify-between text-xs text-neutral-600 mb-1">
                                   <span>Finished Goods</span>
                                   <span>45%</span>
                                 </div>
                                 <div className="w-full bg-neutral-200 rounded-full h-2">
                                   <div className="bg-yellow-400 h-2 rounded-full w-1/2"></div>
                                 </div>
                               </div>
                               <div>
                                 <div className="flex justify-between text-xs text-neutral-600 mb-1">
                                   <span>Packaging</span>
                                   <span>92%</span>
                                 </div>
                                 <div className="w-full bg-neutral-200 rounded-full h-2">
                                   <div className="bg-green-400 h-2 rounded-full w-11/12"></div>
                                 </div>
                               </div>
                             </div>
                           </div>

                           {/* Low Stock Alerts */}
                           <div className="bg-white border border-neutral-300 rounded-lg p-4">
                             <div className="flex items-center justify-between mb-3">
                               <h3 className="font-semibold text-neutral-800">Low Stock Alerts</h3>
                               <div className="w-4 h-4 bg-red-300 rounded"></div>
                             </div>
                             <div className="space-y-2">
                               <div className="flex items-center justify-between p-2 bg-red-50 rounded border border-red-200">
                                 <div className="flex items-center space-x-2">
                                   <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                   <span className="text-sm text-neutral-700">Premium Cotton Fabric</span>
                                 </div>
                                 <span className="text-xs text-red-600 font-medium">5%</span>
                               </div>
                               <div className="flex items-center justify-between p-2 bg-orange-50 rounded border border-orange-200">
                                 <div className="flex items-center space-x-2">
                                   <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                   <span className="text-sm text-neutral-700">Metal Zippers</span>
                                 </div>
                                 <span className="text-xs text-orange-600 font-medium">12%</span>
                               </div>
                               <div className="flex items-center justify-between p-2 bg-yellow-50 rounded border border-yellow-200">
                                 <div className="flex items-center space-x-2">
                                   <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                   <span className="text-sm text-neutral-700">Polyester Thread</span>
                                 </div>
                                 <span className="text-xs text-yellow-600 font-medium">18%</span>
                               </div>
                             </div>
                           </div>

                           {/* Production Progress */}
                           <div className="bg-white border border-neutral-300 rounded-lg p-4">
                             <div className="flex items-center justify-between mb-3">
                               <h3 className="font-semibold text-neutral-800">Production Progress</h3>
                               <div className="w-4 h-4 bg-blue-300 rounded"></div>
                             </div>
                             <div className="space-y-3">
                               <div>
                                 <div className="flex justify-between text-xs text-neutral-600 mb-1">
                                   <span>Order #PO-2024-001</span>
                                   <span>85%</span>
                                 </div>
                                 <div className="w-full bg-neutral-200 rounded-full h-2">
                                   <div className="bg-blue-400 h-2 rounded-full w-5/6"></div>
                                 </div>
                                 <div className="text-xs text-neutral-500 mt-1">ABC Corp - 500m Cotton</div>
                               </div>
                               <div>
                                 <div className="flex justify-between text-xs text-neutral-600 mb-1">
                                   <span>Order #PO-2024-002</span>
                                   <span>62%</span>
                                 </div>
                                 <div className="w-full bg-neutral-200 rounded-full h-2">
                                   <div className="bg-blue-400 h-2 rounded-full w-3/5"></div>
                                 </div>
                                 <div className="text-xs text-neutral-500 mt-1">XYZ Ltd - 300m Polyester</div>
                               </div>
                               <div>
                                 <div className="flex justify-between text-xs text-neutral-600 mb-1">
                                   <span>Order #PO-2024-003</span>
                                   <span>38%</span>
                                 </div>
                                 <div className="w-full bg-neutral-200 rounded-full h-2">
                                   <div className="bg-blue-400 h-2 rounded-full w-2/5"></div>
                                 </div>
                                 <div className="text-xs text-neutral-500 mt-1">DEF Inc - 200m Silk</div>
                               </div>
                             </div>
                           </div>

                           {/* Vendor Communications */}
                           <div className="bg-white border border-neutral-300 rounded-lg p-4">
                             <div className="flex items-center justify-between mb-3">
                               <h3 className="font-semibold text-neutral-800">Vendor Communications</h3>
                               <div className="w-4 h-4 bg-purple-300 rounded"></div>
                             </div>
                             <div className="space-y-2">
                               <div className="flex items-center space-x-2 p-2 bg-green-50 rounded border border-green-200">
                                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                 <div className="flex-1">
                                   <div className="text-sm font-medium text-neutral-700">Fabric Supplier Co.</div>
                                   <div className="text-xs text-neutral-600">PO #1234 Confirmed - Delivery in 3 days</div>
                                 </div>
                               </div>
                               <div className="flex items-center space-x-2 p-2 bg-blue-50 rounded border border-blue-200">
                                 <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                 <div className="flex-1">
                                   <div className="text-sm font-medium text-neutral-700">Hardware Vendor Ltd.</div>
                                   <div className="text-xs text-neutral-600">Zippers shipment scheduled for tomorrow</div>
                                 </div>
                               </div>
                               <div className="flex items-center space-x-2 p-2 bg-yellow-50 rounded border border-yellow-200">
                                 <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                 <div className="flex-1">
                                   <div className="text-sm font-medium text-neutral-700">Thread Supplier Inc.</div>
                                   <div className="text-xs text-neutral-600">Payment pending - ₹45,000 due</div>
                                 </div>
                               </div>
                             </div>
                           </div>

                           {/* Team Performance */}
                           <div className="bg-white border border-neutral-300 rounded-lg p-4">
                             <div className="flex items-center justify-between mb-3">
                               <h3 className="font-semibold text-neutral-800">Team Performance</h3>
                               <div className="w-4 h-4 bg-indigo-300 rounded"></div>
                             </div>
                             <div className="space-y-3">
                               <div className="flex items-center justify-between">
                                 <div className="flex items-center space-x-2">
                                   <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                     P
                                   </div>
                                   <span className="text-sm text-neutral-700">Production Team</span>
                                 </div>
                                 <div className="text-right">
                                   <div className="text-sm font-medium text-neutral-800">95%</div>
                                   <div className="text-xs text-neutral-500">Efficiency</div>
                                 </div>
                               </div>
                               <div className="flex items-center justify-between">
                                 <div className="flex items-center space-x-2">
                                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                     Q
                                   </div>
                                   <span className="text-sm text-neutral-700">QC Team</span>
                                 </div>
                                 <div className="text-right">
                                   <div className="text-sm font-medium text-neutral-800">98%</div>
                                   <div className="text-xs text-neutral-500">Accuracy</div>
                                 </div>
                               </div>
                               <div className="flex items-center justify-between">
                                 <div className="flex items-center space-x-2">
                                   <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                     L
                                   </div>
                                   <span className="text-sm text-neutral-700">Logistics</span>
                                 </div>
                                 <div className="text-right">
                                   <div className="text-sm font-medium text-neutral-800">92%</div>
                                   <div className="text-xs text-neutral-500">On-time</div>
                                 </div>
                               </div>
                             </div>
                           </div>

                           {/* Quick Actions */}
                           <div className="bg-white border border-neutral-300 rounded-lg p-4">
                             <div className="flex items-center justify-between mb-3">
                               <h3 className="font-semibold text-neutral-800">Quick Actions</h3>
                               <div className="w-4 h-4 bg-neutral-300 rounded"></div>
                             </div>
                             <div className="space-y-2">
                               <div className="w-full h-8 bg-blue-100 border border-blue-200 rounded text-center text-sm text-blue-700 flex items-center justify-center hover:bg-blue-200">
                                 Create Production Order
                               </div>
                               <div className="w-full h-8 bg-green-100 border border-green-200 rounded text-center text-sm text-green-700 flex items-center justify-center hover:bg-green-200">
                                 Check Inventory
                               </div>
                               <div className="w-full h-8 bg-purple-100 border border-purple-200 rounded text-center text-sm text-purple-700 flex items-center justify-center hover:bg-purple-200">
                                 Generate Report
                               </div>
                               <div className="w-full h-8 bg-orange-100 border border-orange-200 rounded text-center text-sm text-orange-700 flex items-center justify-center hover:bg-orange-200">
                                 Contact Vendor
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Wireframe Legend */}
                 <div className="mt-6 bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                   <h4 className="font-semibold text-neutral-800 mb-3">Wireframe Components:</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                     <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-neutral-300 rounded"></div>
                       <span className="text-neutral-600">Navigation Menu (10 tabs)</span>
                     </div>
                     <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-neutral-200 rounded"></div>
                       <span className="text-neutral-600">Dashboard Widgets</span>
                     </div>
                     <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-neutral-400 rounded"></div>
                       <span className="text-neutral-600">Interactive Elements</span>
                     </div>
                     <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-red-300 rounded"></div>
                       <span className="text-neutral-600">Alert Indicators</span>
                     </div>
                     <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-blue-400 rounded"></div>
                       <span className="text-neutral-600">Status Indicators</span>
                     </div>
                     <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-yellow-400 rounded"></div>
                       <span className="text-neutral-600">Warning Indicators</span>
                     </div>
                   </div>
                 </div>
               </div>



                  {/* Clients Mode Details */}
                  <div className="mb-12 md:mb-16">
                    <div className="text-center mb-6 md:mb-8">
                      <h4 className="text-lg md:text-xl font-bold text-purple-700 bg-purple-50 px-4 py-2 rounded-lg inline-block">CLIENTS MODE - External Management (Admin & PM Only)</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 md:p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">1</span>
                          </div>
                          <h5 className="font-bold text-purple-900">Sales Order Management</h5>
                        </div>
                        <p className="text-xs md:text-sm text-purple-700">Customer orders, specifications, and approvals</p>
                      </div>

                      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 md:p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">2</span>
                          </div>
                          <h5 className="font-bold text-purple-900">Client List</h5>
                        </div>
                        <p className="text-xs md:text-sm text-purple-700">Manage all client accounts and information</p>
                      </div>

                      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 md:p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">3</span>
                          </div>
                          <h5 className="font-bold text-purple-900">Project Communication</h5>
                        </div>
                        <p className="text-xs md:text-sm text-purple-700">Project-wise communication channels</p>
                      </div>

                      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 md:p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">4</span>
                          </div>
                          <h5 className="font-bold text-purple-900">Resource Tab</h5>
                        </div>
                        <p className="text-xs md:text-sm text-purple-700">Share documents and resources with clients</p>
                      </div>

                      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 md:p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">5</span>
                          </div>
                          <h5 className="font-bold text-purple-900">Client Leads Section</h5>
                        </div>
                        <p className="text-xs md:text-sm text-purple-700">Lead capture data and management</p>
                      </div>


                    </div>
                  </div>

               {/* Client Mode Wireframe */}
               <div className="mb-12 md:mb-16">
                 <div className="text-center mb-8 md:mb-12">
                   <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 mb-4 md:mb-6">Client Mode – Internal Portal (Wireframe Preview)</h3>
                   <p className="text-neutral-600 text-sm md:text-base">Low-fidelity wireframe mockup showing the client mode structure and navigation</p>
                 </div>

                 <div className="bg-white border-2 border-neutral-300 rounded-lg p-6 md:p-8">
                   <div className="flex flex-col lg:flex-row h-[600px] md:h-[700px]">
                     
                     {/* Top Navigation Bar */}
                     <div className="w-full h-16 bg-neutral-50 border-b border-neutral-300 flex items-center justify-between px-6 mb-4 lg:mb-0 lg:hidden">
                       <div className="flex items-center space-x-4">
                         <div className="w-24 h-6 bg-neutral-300 rounded"></div>
                         <span className="text-sm text-neutral-600">Krazy Kreators</span>
                       </div>
                       <div className="flex items-center space-x-4">
                         {/* Mode Switch - Mobile */}
                         <div className="flex items-center space-x-2">
                           <span className="text-xs text-gray-600">Org</span>
                           <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-purple-600">
                             <div className="inline-block h-3 w-3 transform translate-x-4 rounded-full bg-white transition"></div>
                           </div>
                           <span className="text-xs text-gray-600">Client</span>
                         </div>
                         <div className="w-6 h-6 bg-neutral-300 rounded-full"></div>
                       </div>
                     </div>

                     {/* Left Sidebar Navigation */}
                     <div className="w-full lg:w-64 bg-neutral-100 border-r border-neutral-300 p-4">
                       <div className="mb-6">
                         <div className="w-32 h-8 bg-neutral-300 rounded mb-4"></div>
                         <div className="text-xs text-neutral-600 font-semibold mb-2">CLIENT MODE – EXTERNAL MANAGEMENT</div>
                       </div>
                       
                       <nav className="space-y-2">
                         <div className="flex items-center p-2 bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm font-medium text-neutral-700">Dashboard</span>
                         </div>
                         <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm text-neutral-600">Sales Order Management</span>
                         </div>
                         <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm text-neutral-600">Sales Inventory</span>
                         </div>
                         <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm text-neutral-600">Client List</span>
                         </div>
                         <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm text-neutral-600">Project Communication</span>
                         </div>
                         <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm text-neutral-600">Resource Tab</span>
                         </div>
                         <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                           <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                           <span className="text-sm text-neutral-600">Client Leads Section</span>
                         </div>
                       </nav>
                     </div>

                     {/* Main Content Area */}
                     <div className="flex-1 flex flex-col">
                       
                       {/* Top Bar - Desktop */}
                       <div className="hidden lg:flex h-16 bg-neutral-50 border-b border-neutral-300 items-center justify-between px-6">
                         <div className="flex items-center space-x-4">
                           <div className="w-24 h-6 bg-neutral-300 rounded"></div>
                           <span className="text-sm text-neutral-600">Krazy Kreators Portal</span>
                         </div>
                         <div className="flex items-center space-x-4">
                           {/* Mode Switch - Desktop */}
                           <div className="flex items-center space-x-2">
                             <span className="text-sm text-gray-600">Organization</span>
                             <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                               <div className="inline-block h-4 w-4 transform translate-x-5 rounded-full bg-white transition"></div>
                             </div>
                             <span className="text-sm text-gray-600">Client</span>
                           </div>
                           <div className="w-6 h-6 bg-neutral-300 rounded-full"></div>
                         </div>
                       </div>

                       {/* Dashboard Content */}
                       <div className="flex-1 p-6 bg-neutral-50">
                         <div className="mb-6">
                           <h2 className="text-xl font-bold text-neutral-800 mb-2">Client Management Dashboard</h2>
                           <p className="text-sm text-neutral-600">Overview of client orders, sales performance, and key metrics</p>
                         </div>

                         {/* Dashboard Grid */}
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                           
                           {/* Active Client Orders */}
                           <div className="bg-white border border-neutral-300 rounded-lg p-4">
                             <div className="flex items-center justify-between mb-3">
                               <h3 className="font-semibold text-neutral-800">Active Client Orders</h3>
                               <div className="w-4 h-4 bg-blue-300 rounded"></div>
                             </div>
                             <div className="text-center">
                               <div className="text-3xl font-bold text-blue-600 mb-1">24</div>
                               <div className="text-xs text-neutral-600">Orders in Progress</div>
                             </div>
                             <div className="mt-3 space-y-1">
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">Pending Approval</span>
                                 <span className="font-medium">8</span>
                               </div>
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">In Production</span>
                                 <span className="font-medium">12</span>
                               </div>
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">Ready to Ship</span>
                                 <span className="font-medium">4</span>
                               </div>
                             </div>
                           </div>

                           {/* Sales Performance */}
                           <div className="bg-white border border-neutral-300 rounded-lg p-4">
                             <div className="flex items-center justify-between mb-3">
                               <h3 className="font-semibold text-neutral-800">Sales Performance</h3>
                               <div className="w-4 h-4 bg-green-300 rounded"></div>
                             </div>
                             <div className="text-center">
                               <div className="text-3xl font-bold text-green-600 mb-1">₹2.4M</div>
                               <div className="text-xs text-neutral-600">This Month</div>
                             </div>
                             <div className="mt-3 space-y-1">
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">New Orders</span>
                                 <span className="font-medium text-green-600">+15%</span>
                               </div>
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">Revenue</span>
                                 <span className="font-medium text-green-600">+8%</span>
                               </div>
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">Avg Order Value</span>
                                 <span className="font-medium">₹98K</span>
                               </div>
                             </div>
                           </div>

                           {/* Client Satisfaction */}
                           <div className="bg-white border border-neutral-300 rounded-lg p-4">
                             <div className="flex items-center justify-between mb-3">
                               <h3 className="font-semibold text-neutral-800">Client Satisfaction</h3>
                               <div className="w-4 h-4 bg-purple-300 rounded"></div>
                             </div>
                             <div className="text-center">
                               <div className="text-3xl font-bold text-purple-600 mb-1">4.8</div>
                               <div className="text-xs text-neutral-600">Average Rating</div>
                             </div>
                             <div className="mt-3 space-y-1">
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">5-Star Reviews</span>
                                 <span className="font-medium">85%</span>
                               </div>
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">Response Time</span>
                                 <span className="font-medium">2.3h</span>
                               </div>
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">Repeat Clients</span>
                                 <span className="font-medium">72%</span>
                               </div>
                             </div>
                           </div>

                           {/* Recent Client Activities */}
                           <div className="bg-white border border-neutral-300 rounded-lg p-4">
                             <div className="flex items-center justify-between mb-3">
                               <h3 className="font-semibold text-neutral-800">Recent Client Activities</h3>
                               <div className="w-4 h-4 bg-neutral-300 rounded"></div>
                             </div>
                             <div className="space-y-2">
                               <div className="flex items-center space-x-2">
                                 <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                 <span className="text-sm text-neutral-600">New order from ABC Corp</span>
                               </div>
                               <div className="flex items-center space-x-2">
                                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                 <span className="text-sm text-neutral-600">XYZ Ltd order completed</span>
                               </div>
                               <div className="flex items-center space-x-2">
                                 <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                 <span className="text-sm text-neutral-600">Payment pending - DEF Inc</span>
                               </div>
                             </div>
                           </div>

                           {/* Inventory Status */}
                           <div className="bg-white border border-neutral-300 rounded-lg p-4">
                             <div className="flex items-center justify-between mb-3">
                               <h3 className="font-semibold text-neutral-800">Inventory Status</h3>
                               <div className="w-4 h-4 bg-orange-300 rounded"></div>
                             </div>
                             <div className="space-y-2">
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">Available Stock</span>
                                 <span className="font-medium text-green-600">85%</span>
                               </div>
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">Low Stock Items</span>
                                 <span className="font-medium text-orange-600">3</span>
                               </div>
                               <div className="flex justify-between text-xs">
                                 <span className="text-neutral-600">Out of Stock</span>
                                 <span className="font-medium text-red-600">1</span>
                               </div>
                             </div>
                           </div>

                           {/* Quick Actions */}
                           <div className="bg-white border border-neutral-300 rounded-lg p-4">
                             <div className="flex items-center justify-between mb-3">
                               <h3 className="font-semibold text-neutral-800">Quick Actions</h3>
                               <div className="w-4 h-4 bg-neutral-300 rounded"></div>
                             </div>
                             <div className="space-y-2">
                               <div className="w-full h-8 bg-neutral-200 rounded text-center text-sm text-neutral-600 flex items-center justify-center">
                                 Create New Order
                               </div>
                               <div className="w-full h-8 bg-neutral-200 rounded text-center text-sm text-neutral-600 flex items-center justify-center">
                                 Add New Client
                               </div>
                               <div className="w-full h-8 bg-neutral-200 rounded text-center text-sm text-neutral-600 flex items-center justify-center">
                                 Generate Report
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Wireframe Legend */}
                 <div className="mt-6 bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                   <h4 className="font-semibold text-neutral-800 mb-3">Client Mode Wireframe Components:</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                     <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-neutral-300 rounded"></div>
                       <span className="text-neutral-600">Mode Toggle Switch</span>
                     </div>
                     <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-neutral-200 rounded"></div>
                       <span className="text-neutral-600">Navigation Menu (7 tabs)</span>
                     </div>
                     <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-neutral-400 rounded"></div>
                       <span className="text-neutral-600">Content Tables/Lists</span>
                     </div>
                     <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-neutral-100 rounded"></div>
                       <span className="text-neutral-600">Quick Action Buttons</span>
                     </div>
                     <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-neutral-50 rounded"></div>
                       <span className="text-neutral-600">Status Indicators</span>
                     </div>
                     <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-neutral-300 rounded"></div>
                       <span className="text-neutral-600">Pagination Controls</span>
                     </div>
                   </div>
                 </div>
               </div>

                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* CLIENT PORTAL - Component-Level Product Structure */}
        <section id="client-portal-structure" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  CLIENT PORTAL - Component-Level Product Structure
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  External client-facing portal for manufacturing order management and communication in the dual-portal ERP platform
                </p>
              </div>

              {/* Portal Overview */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">Client Portal Overview</h3>
                    <p className="text-blue-700">External access portal for manufacturing clients</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white p-3 rounded-lg border border-blue-200">
                    <div className="font-semibold text-blue-900 mb-1">Target Users</div>
                    <div className="text-blue-700">External manufacturing clients</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-200">
                    <div className="font-semibold text-blue-900 mb-1">Primary Function</div>
                    <div className="text-blue-700">Order management & communication</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-200">
                    <div className="font-semibold text-blue-900 mb-1">Access Level</div>
                    <div className="text-blue-700">Client-specific data only</div>
                  </div>
                </div>
              </div>

              {/* Component Structure Map */}
              <div className="space-y-8">
                
                {/* 1. Dashboard Tab */}
                <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">Dashboard</h3>
                      <p className="text-neutral-600">Central overview and monitoring hub</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* KPI Blocks */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-neutral-800 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        KPI Blocks
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-green-800">Active Orders</div>
                          <div className="text-xs text-green-600">Real-time count</div>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-blue-800">Production Status</div>
                          <div className="text-xs text-blue-600">Progress indicators</div>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-purple-800">Latest Updates</div>
                          <div className="text-xs text-purple-600">Recent activities</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Data Tables */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-neutral-800 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Data Components
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-neutral-800">Order Summary Table</div>
                          <div className="text-xs text-neutral-600">Sortable, filterable list</div>
                        </div>
                        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-neutral-800">Recent Messages</div>
                          <div className="text-xs text-neutral-600">Communication feed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Manufacturing Management Tab */}
                <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">Manufacturing Management</h3>
                      <p className="text-neutral-600">Complete order lifecycle management</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Sub-tab 1 */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Place Purchase Orders
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="bg-white p-2 rounded border border-blue-200">
                          <div className="font-medium text-blue-800">Order Form</div>
                          <div className="text-xs text-blue-600">Multi-step form wizard</div>
                        </div>
                        <div className="bg-white p-2 rounded border border-blue-200">
                          <div className="font-medium text-blue-800">Specification Upload</div>
                          <div className="text-xs text-blue-600">File attachment system</div>
                        </div>
                        <div className="bg-white p-2 rounded border border-blue-200">
                          <div className="font-medium text-blue-800">Quote Generation</div>
                          <div className="text-xs text-blue-600">Automated pricing</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Sub-tab 2 */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Track Order Status
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="bg-white p-2 rounded border border-green-200">
                          <div className="font-medium text-green-800">Status Table</div>
                          <div className="text-xs text-green-600">Real-time updates</div>
                        </div>
                        <div className="bg-white p-2 rounded border border-green-200">
                          <div className="font-medium text-green-800">Progress Timeline</div>
                          <div className="text-xs text-green-600">Visual progress tracking</div>
                        </div>
                        <div className="bg-white p-2 rounded border border-green-200">
                          <div className="font-medium text-green-800">Status Notifications</div>
                          <div className="text-xs text-green-600">Email/SMS alerts</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Sub-tab 3 */}
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        Order History
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="bg-white p-2 rounded border border-purple-200">
                          <div className="font-medium text-purple-800">Filterable List</div>
                          <div className="text-xs text-purple-600">Advanced search filters</div>
                        </div>
                        <div className="bg-white p-2 rounded border border-purple-200">
                          <div className="font-medium text-purple-800">Export Options</div>
                          <div className="text-xs text-purple-600">PDF/Excel reports</div>
                        </div>
                        <div className="bg-white p-2 rounded border border-purple-200">
                          <div className="font-medium text-purple-800">Analytics View</div>
                          <div className="text-xs text-purple-600">Performance metrics</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Communication Channel Tab */}
                <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">Communication Channel</h3>
                      <p className="text-neutral-600">Integrated messaging and support system</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Project Chat */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-neutral-800 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        Project-wise Chat Threads
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-purple-800">Thread Organization</div>
                          <div className="text-xs text-purple-600">Project-based conversations</div>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-purple-800">File Sharing</div>
                          <div className="text-xs text-purple-600">Document attachments</div>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-purple-800">Message History</div>
                          <div className="text-xs text-purple-600">Searchable archives</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Support System */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-neutral-800 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Support/Help Messages
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-orange-800">Ticket System</div>
                          <div className="text-xs text-orange-600">Structured support requests</div>
                        </div>
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-orange-800">FAQ Integration</div>
                          <div className="text-xs text-orange-600">Self-service help</div>
                        </div>
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-orange-800">Priority Routing</div>
                          <div className="text-xs text-orange-600">Urgent issue handling</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Resource Tab */}
                <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-orange-600 font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">Resource Tab</h3>
                      <p className="text-neutral-600">Document management and resource access</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Document Management */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-neutral-800 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Document Grid/List View
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-orange-800">Grid Layout</div>
                          <div className="text-xs text-orange-600">Visual document cards</div>
                        </div>
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-orange-800">List Layout</div>
                          <div className="text-xs text-orange-600">Detailed information view</div>
                        </div>
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-orange-800">Preview System</div>
                          <div className="text-xs text-orange-600">Inline document viewing</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Download & Filters */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-neutral-800 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                        Download & Category Filters
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-teal-800">Download Buttons</div>
                          <div className="text-xs text-teal-600">One-click file access</div>
                        </div>
                        <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-teal-800">Category Filters</div>
                          <div className="text-xs text-teal-600">Organized document types</div>
                        </div>
                        <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-teal-800">Search Function</div>
                          <div className="text-xs text-teal-600">Quick document finder</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Principles */}
              <div className="mt-12 bg-gradient-to-r from-neutral-50 to-neutral-100 p-6 rounded-xl border border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Design Principles & Usability Focus</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-neutral-200">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-blue-600 font-bold">H</span>
                    </div>
                    <h4 className="font-semibold text-neutral-800 mb-2">Hierarchy</h4>
                    <p className="text-sm text-neutral-600">Clear visual hierarchy with consistent navigation patterns and logical information flow</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-neutral-200">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-green-600 font-bold">U</span>
                    </div>
                    <h4 className="font-semibold text-neutral-800 mb-2">Usability</h4>
                    <p className="text-sm text-neutral-600">Intuitive interface design with minimal learning curve and efficient task completion</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-neutral-200">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-purple-600 font-bold">C</span>
                    </div>
                    <h4 className="font-semibold text-neutral-800 mb-2">Clean Layout</h4>
                    <p className="text-sm text-neutral-600">Uncluttered design with proper spacing, consistent styling, and focused content areas</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CLIENT PORTAL - Low Fidelity Wireframe */}
        <section id="client-portal-wireframe" className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  CLIENT PORTAL - Low Fidelity Wireframe
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  External client-facing portal wireframe for manufacturing order management and communication
                </p>
              </div>

              {/* Wireframe Container */}
              <div className="bg-white border border-neutral-300 rounded-xl shadow-lg overflow-hidden">
                
                {/* Top Navigation Bar */}
                <div className="h-16 bg-neutral-100 border-b border-neutral-300 flex items-center justify-between px-6">
                  {/* Logo */}
                  <div className="flex items-center space-x-4">
                    <div className="w-32 h-8 bg-neutral-300 rounded"></div>
                    <span className="text-sm text-neutral-600 font-medium">Client Portal</span>
                  </div>
                  
                  {/* Right Side */}
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-neutral-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-neutral-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-neutral-300 rounded-full"></div>
                  </div>
                </div>

                {/* Main Layout */}
                <div className="flex h-[600px]">
                  
                  {/* Left Sidebar Navigation */}
                  <div className="w-64 bg-neutral-50 border-r border-neutral-300 p-4">
                    <nav className="space-y-2">
                      <div className="flex items-center p-3 bg-neutral-200 rounded-lg">
                        <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                        <span className="text-sm font-medium text-neutral-700">Dashboard</span>
                      </div>
                      
                      <div className="space-y-1 ml-4">
                        <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Manufacturing Management</div>
                        <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                          <div className="w-3 h-3 bg-neutral-400 rounded mr-2"></div>
                          <span className="text-sm text-neutral-600">Place Purchase Order</span>
                        </div>
                        <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                          <div className="w-3 h-3 bg-neutral-400 rounded mr-2"></div>
                          <span className="text-sm text-neutral-600">Track Order Status</span>
                        </div>
                        <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                          <div className="w-3 h-3 bg-neutral-400 rounded mr-2"></div>
                          <span className="text-sm text-neutral-600">Order History</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                        <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                        <span className="text-sm text-neutral-600">Communication Channel</span>
                      </div>
                      
                      <div className="flex items-center p-2 hover:bg-neutral-200 rounded">
                        <div className="w-4 h-4 bg-neutral-400 rounded mr-3"></div>
                        <span className="text-sm text-neutral-600">Resource Tab</span>
                      </div>
                    </nav>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 flex flex-col">
                    
                    {/* Content Header */}
                    <div className="h-12 bg-neutral-50 border-b border-neutral-300 flex items-center px-6">
                      <h3 className="text-lg font-semibold text-neutral-800">Dashboard</h3>
                    </div>
                    
                    {/* Dashboard Content */}
                    <div className="flex-1 p-6 bg-white">
                      
                      {/* KPI Widgets */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-4">
                          <div className="h-4 bg-neutral-300 rounded w-1/2 mb-2"></div>
                          <div className="h-8 bg-neutral-300 rounded w-1/3"></div>
                          <div className="text-xs text-neutral-500 mt-2">Active Orders</div>
                        </div>
                        <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-4">
                          <div className="h-4 bg-neutral-300 rounded w-1/2 mb-2"></div>
                          <div className="h-8 bg-neutral-300 rounded w-1/3"></div>
                          <div className="text-xs text-neutral-500 mt-2">Pending Approval</div>
                        </div>
                        <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-4">
                          <div className="h-4 bg-neutral-300 rounded w-1/2 mb-2"></div>
                          <div className="h-8 bg-neutral-300 rounded w-1/3"></div>
                          <div className="text-xs text-neutral-500 mt-2">In Production</div>
                        </div>
                      </div>

                      {/* Order Summary Table */}
                      <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-4 mb-6">
                        <div className="h-5 bg-neutral-300 rounded w-1/4 mb-4"></div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white rounded border">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-neutral-300 rounded"></div>
                              <div>
                                <div className="h-3 bg-neutral-200 rounded w-20 mb-1"></div>
                                <div className="h-2 bg-neutral-200 rounded w-32"></div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 h-6 bg-neutral-200 rounded text-xs text-neutral-600 flex items-center justify-center">
                                In Progress
                              </div>
                              <div className="w-4 h-4 bg-neutral-300 rounded"></div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between p-3 bg-white rounded border">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-neutral-300 rounded"></div>
                              <div>
                                <div className="h-3 bg-neutral-200 rounded w-24 mb-1"></div>
                                <div className="h-2 bg-neutral-200 rounded w-28"></div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 h-6 bg-neutral-200 rounded text-xs text-neutral-600 flex items-center justify-center">
                                Pending
                              </div>
                              <div className="w-4 h-4 bg-neutral-300 rounded"></div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between p-3 bg-white rounded border">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-neutral-300 rounded"></div>
                              <div>
                                <div className="h-3 bg-neutral-200 rounded w-18 mb-1"></div>
                                <div className="h-2 bg-neutral-200 rounded w-30"></div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 h-6 bg-neutral-200 rounded text-xs text-neutral-600 flex items-center justify-center">
                                Completed
                              </div>
                              <div className="w-4 h-4 bg-neutral-300 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recent Communications */}
                      <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-4">
                        <div className="h-5 bg-neutral-300 rounded w-1/3 mb-4"></div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-2 bg-white rounded border">
                            <div className="w-8 h-8 bg-neutral-300 rounded-full"></div>
                            <div className="flex-1">
                              <div className="h-3 bg-neutral-200 rounded w-1/2 mb-1"></div>
                              <div className="h-2 bg-neutral-200 rounded w-3/4"></div>
                            </div>
                            <div className="text-xs text-neutral-500">2h ago</div>
                          </div>
                          
                          <div className="flex items-center space-x-3 p-2 bg-white rounded border">
                            <div className="w-8 h-8 bg-neutral-300 rounded-full"></div>
                            <div className="flex-1">
                              <div className="h-3 bg-neutral-200 rounded w-1/3 mb-1"></div>
                              <div className="h-2 bg-neutral-200 rounded w-2/3"></div>
                            </div>
                            <div className="text-xs text-neutral-500">1d ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wireframe Legend */}
              <div className="mt-8 bg-white p-6 rounded-lg border border-neutral-200">
                <h4 className="font-semibold text-neutral-800 mb-4">Client Portal Wireframe Components:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-neutral-300 rounded"></div>
                    <span className="text-neutral-600">Top Navigation Bar (Logo, Profile, Notifications)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-neutral-200 rounded"></div>
                    <span className="text-neutral-600">Left Sidebar Navigation (5 main sections)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-neutral-400 rounded"></div>
                    <span className="text-neutral-600">KPI Widgets (Active Orders, Status)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-neutral-100 rounded"></div>
                    <span className="text-neutral-600">Order Summary Table (Sortable)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-neutral-50 rounded"></div>
                    <span className="text-neutral-600">Recent Communications Feed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-neutral-300 rounded"></div>
                    <span className="text-neutral-600">Status Indicators & Action Buttons</span>
                  </div>
                </div>
              </div>

              {/* Additional Views Preview */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Place Purchase Order View */}
                <div className="bg-white border border-neutral-300 rounded-lg p-6">
                  <h4 className="font-semibold text-neutral-800 mb-4">Place Purchase Order View</h4>
                  <div className="space-y-4">
                    {/* Form Header */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="text-sm font-medium text-blue-800">New Purchase Order</div>
                      <div className="text-xs text-blue-600">Fill in the details below to create your order</div>
                    </div>
                    
                    {/* Product Information */}
                    <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-4">
                      <div className="text-sm font-medium text-neutral-700 mb-3">Product Information</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-neutral-500 mb-1">Product Type</div>
                          <div className="h-8 bg-neutral-200 rounded border px-3 flex items-center text-sm">
                            Cotton Fabric - Premium Quality
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-neutral-500 mb-1">Quantity (Meters)</div>
                          <div className="h-8 bg-neutral-200 rounded border px-3 flex items-center text-sm">
                            500
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Specifications */}
                    <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-4">
                      <div className="text-sm font-medium text-neutral-700 mb-3">Specifications</div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-neutral-500 mb-1">Color</div>
                          <div className="h-8 bg-neutral-200 rounded border px-3 flex items-center text-sm">
                            Navy Blue
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-neutral-500 mb-1">Weight (GSM)</div>
                          <div className="h-8 bg-neutral-200 rounded border px-3 flex items-center text-sm">
                            180
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-neutral-500 mb-1">Width (cm)</div>
                          <div className="h-8 bg-neutral-200 rounded border px-3 flex items-center text-sm">
                            150
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* File Upload */}
                    <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-4">
                      <div className="text-sm font-medium text-neutral-700 mb-3">Additional Files</div>
                      <div className="border-2 border-dashed border-neutral-300 rounded-lg p-4 text-center">
                        <div className="text-sm text-neutral-500 mb-2">Drop files here or click to upload</div>
                        <div className="text-xs text-neutral-400">Design specs, samples, or reference images</div>
                      </div>
                    </div>
                    
                    {/* Timeline & Submit */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="text-xs text-neutral-500 mb-1">Required By</div>
                          <div className="h-8 bg-neutral-200 rounded border px-3 flex items-center text-sm">
                            March 15, 2024
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-neutral-500 mb-1">Priority</div>
                          <div className="h-8 bg-neutral-200 rounded border px-3 flex items-center text-sm">
                            High
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-20 h-8 bg-neutral-300 rounded text-center text-xs text-neutral-600 flex items-center justify-center">
                          Save Draft
                        </div>
                        <div className="w-24 h-8 bg-blue-600 rounded text-center text-xs text-white flex items-center justify-center">
                          Submit Order
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Communication Channel View */}
                <div className="bg-white border border-neutral-300 rounded-lg p-6">
                  <h4 className="font-semibold text-neutral-800 mb-4">Communication Channel View</h4>
                  <div className="space-y-4">
                    {/* Project Header */}
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                      <div className="text-sm font-medium text-purple-800">Project: Cotton Fabric Order #PO-2024-001</div>
                      <div className="text-xs text-purple-600">Active conversation with production team</div>
                    </div>
                    
                    {/* Message Thread */}
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {/* Message 1 */}
                      <div className="flex items-start space-x-3 p-3 bg-neutral-100 rounded-lg border">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                          PM
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-medium text-neutral-800">Production Manager</span>
                            <span className="text-xs text-neutral-500">2 hours ago</span>
                          </div>
                          <div className="text-sm text-neutral-700">
                            Hi! We've received your order specifications. The navy blue color is available in stock. 
                            We can start production by next week. Do you have any specific quality requirements?
                          </div>
                        </div>
                      </div>
                      
                      {/* Message 2 */}
                      <div className="flex items-start space-x-3 p-3 bg-neutral-100 rounded-lg border">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                          CL
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-medium text-neutral-800">Client</span>
                            <span className="text-xs text-neutral-500">1 hour ago</span>
                          </div>
                          <div className="text-sm text-neutral-700">
                            Perfect! We need A-grade quality with no defects. Can you send us a sample before 
                            starting the full production?
                          </div>
                        </div>
                      </div>
                      
                      {/* Message 3 */}
                      <div className="flex items-start space-x-3 p-3 bg-neutral-100 rounded-lg border">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                          PM
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-medium text-neutral-800">Production Manager</span>
                            <span className="text-xs text-neutral-500">30 min ago</span>
                          </div>
                          <div className="text-sm text-neutral-700">
                            Absolutely! We'll prepare a sample piece and ship it to you by tomorrow. 
                            You should receive it within 2-3 days for approval.
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* New Message Input */}
                    <div className="border border-neutral-300 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                          CL
                        </div>
                        <div className="flex-1">
                          <div className="h-8 bg-neutral-100 rounded border px-3 flex items-center text-sm text-neutral-500">
                            Type your message here...
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 bg-neutral-200 rounded flex items-center justify-center">
                            <div className="w-4 h-4 bg-neutral-400 rounded"></div>
                          </div>
                          <div className="w-16 h-8 bg-blue-600 rounded text-center text-xs text-white flex items-center justify-center">
                            Send
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <div className="flex items-center space-x-4">
                        <span>📎 Attach files</span>
                        <span>📋 Request sample</span>
                        <span>⏰ Set reminder</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>Online</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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