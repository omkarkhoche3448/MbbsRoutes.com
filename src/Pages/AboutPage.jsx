import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, GraduationCap, Users, BookOpen, ChevronRight, MapPin, X } from 'lucide-react'

const InteractiveMBBSAbroad = () => {
  const [activeSection, setActiveSection] = useState('overview')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({ title: '', content: '' })

  const sections = ['overview', 'countries', 'process', 'testimonials']

  const countries = [
    { name: 'USA', universities: ['Harvard Medical School', 'Johns Hopkins School of Medicine'] },
    { name: 'UK', universities: ['University of Oxford Medical Sciences Division', 'Imperial College London Faculty of Medicine'] },
    { name: 'Germany', universities: ['Heidelberg University Faculty of Medicine', 'Charité - Universitätsmedizin Berlin'] },
    { name: 'Australia', universities: ['University of Melbourne Medical School', 'University of Sydney Medical School'] },
  ]

  const processes = [
    { title: 'Consultation', description: 'Initial assessment and guidance' },
    { title: 'University Selection', description: 'Find your perfect match' },
    { title: 'Application', description: 'Streamlined application process' },
    { title: 'Visa Support', description: 'Navigate visa requirements' },
    { title: 'Pre-departure', description: 'Prepare for your journey' },
  ]

  const testimonials = [
    { name: 'Sarah J.', quote: 'The support I received was invaluable. Now Im studying at my dream university!', university: 'Harvard Medical School' },
    { name: 'Rahul P.', quote: 'From application to arrival, the guidance was exceptional. Highly recommended!', university: 'University of Oxford' },
    { name: 'Li Wei', quote: 'They made my international MBBS journey smooth and exciting. Thank you!', university: 'Heidelberg University' },
  ]

  const openModal = (title, content) => {
    setModalContent({ title, content })
    setShowModal(true)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSection((prev) => {
        const currentIndex = sections.indexOf(prev)
        return sections[(currentIndex + 1) % sections.length]
      })
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 py-24">
      <header className="py-6 px-4 ">
        <nav className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-4 mx-auto">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeSection === section
                      ? 'bg-blue-600 text-white'
                      : 'text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto py-12 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl p-8"
          >
            {activeSection === 'overview' && (
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Your Gateway to MBBS Abroad
                </h2>
                <p className="text-xl mb-8">
                  Embark on a journey to become a global medical professional. We're here to guide you every step of the way.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { icon: GraduationCap, title: 'Expert Guidance', description: 'Personalized counseling from experienced advisors' },
                    { icon: Globe, title: 'Global Network', description: 'Access to top medical universities worldwide' },
                    { icon: Users, title: 'Comprehensive Support', description: 'From application to arrival, weve got you covered' },
                  ].map((feature, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'countries' && (
              <div>
                <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Explore MBBS Destinations
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {countries.map((country) => (
                    <motion.div
                      key={country.name}
                      className="bg-gray-50 p-6 rounded-lg cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => openModal(country.name, country.universities.join(', '))}
                    >
                      <h3 className="text-xl font-semibold mb-2">{country.name}</h3>
                      <p className="text-gray-600">{country.universities.length} Universities</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'process' && (
              <div>
                <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Your MBBS Journey
                </h2>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
                  {processes.map((step, index) => (
                    <div key={index} className="flex items-center mb-8">
                      <div className="w-1/2 text-right pr-8">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                        {index + 1}
                      </div>
                      <div className="w-1/2 pl-8">
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'testimonials' && (
              <div>
                <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Success Stories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50 p-6 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                      <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-blue-600">{testimonial.university}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-xl p-6 max-w-md w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{modalContent.title}</h3>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-600">{modalContent.content}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default InteractiveMBBSAbroad