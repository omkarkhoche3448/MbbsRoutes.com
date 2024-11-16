import React from 'react'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600 ",
    outline: "border-2 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-600 "
  }
  
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Icon = ({ name }) => {
  const icons = {
    ArrowRight: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    ),
    GraduationCap: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    Globe: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    Award: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    )
  }
  
  return icons[name] || null
}

export default function HeroSection() {
  return (
    <section className="w-full  py-12 mt-20 lg:mt-0 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50  overflow-hidden">
      <div className="lg:container mx-auto px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_600px] ">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-1">Empowering</span> Your Medical Journey Abroad
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl ">
                Expert guidance for aspiring medical professionals. Navigate admissions, visas, and cultural transitions with confidence.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button>
                Start Your Journey
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Explore Programs
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-blue-100 p-2 ">
                  <Icon name="GraduationCap" className="h-6 w-6 text-blue-600 " />
                </div>
                <span className="text-sm font-medium">Top Universities</span>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-purple-100 p-2 ">
                  <Icon name="Globe" className="h-6 w-6 text-purple-600 " />
                </div>
                <span className="text-sm font-medium">Global Network</span>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-indigo-100 p-2 ">
                  <Icon name="Award" className="h-6 w-6 text-indigo-600 " />
                </div>
                <span className="text-sm font-medium">Expert Guidance</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-blue-200 blur-3xl opacity-50"></div>
            <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-purple-200 blur-3xl  opacity-50"></div>
            <div className="relative h-[450px] w-[450px] lg:h-[600px] lg:w-[600px]">
              <img
                src="https://images.hellosivi.com/fit-in/400x400/system/gen_assets/7f55f2d6-cff7-48b1-904f-a80e8d459e3f.png"
                alt="MBBS Consultancy"
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full py-3 px-6 shadow-lg">
                <p className="text-sm font-medium text-gray-900 ">
                  Trusted by 10,000+ Students
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg  bg-white rounded-full py-3 px-6 shadow-lg">
              <p className="text-sm font-medium text-gray-900 -100">
                100+ Partner Universities
              </p>
            </div>
            <div className="absolute top-0 right-0 bg-white  rounded-full py-3 px-6 shadow-lg">
              <p className="text-sm font-medium text-gray-900 ">
                95% Success Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}