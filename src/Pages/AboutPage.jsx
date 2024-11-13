import React from 'react';
import { Globe, Award, Users,  MessageSquare } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your Gateway to MBBS Abroad
              </h1>
              <p className="text-xl opacity-90">
                Empowering aspiring medical students to achieve their dreams through quality education abroad. Expert guidance, comprehensive support, and a proven track record of success.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Globe size={250} className="text-white opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              We are dedicated to guiding ambitious medical aspirants toward world-class MBBS education opportunities abroad. Our mission is to simplify the complex journey of international medical education, ensuring each student finds their perfect academic fit while receiving comprehensive support throughout their journey.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Counselors",
                description: "Seasoned professionals with 10+ years of experience in international medical education guidance."
              },
              {
                title: "University Partnerships",
                description: "Direct partnerships with top medical universities across Europe, Asia, and the Americas."
              },
              {
                title: "Complete Support",
                description: "End-to-end assistance from application to visa processing and post-arrival support."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Lead Educational Consultant",
                description: "15+ years experience in international medical education counseling"
              },
              {
                name: "Michael Chen",
                role: "University Relations Manager",
                description: "Expert in university partnerships and admission processes"
              },
              {
                name: "Priya Patel",
                role: "Student Success Coordinator",
                description: "Specialized in student visa and documentation support"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description: "Free consultation to understand your goals"
                },
                {
                  step: "2",
                  title: "University Selection",
                  description: "Matching you with the best universities"
                },
                {
                  step: "3",
                  title: "Application Process",
                  description: "Guided application submission"
                },
                {
                  step: "4",
                  title: "Pre-Departure Support",
                  description: "Visa and travel assistance"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Student Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                text: "The guidance I received was invaluable. From university selection to visa processing, everything was handled professionally. I'm now pursuing my MBBS dream in Germany!",
                name: "Rahul Sharma",
                university: "Medical University of Warsaw"
              },
              {
                text: "Their experience and network of universities made my application process smooth. The pre-departure orientation was especially helpful in preparing for life abroad.",
                name: "Lisa Chen",
                university: "Charles University, Prague"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <MessageSquare className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-blue-600">{testimonial.university}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;