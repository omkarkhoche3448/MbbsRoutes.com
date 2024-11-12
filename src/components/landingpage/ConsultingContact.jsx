import React from 'react';
import { 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Target,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const ConsultingContact = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Strategic Planning",
      description: "Transform your vision into actionable strategies. Our expert consultants help chart the course for sustainable growth."
    },
    {
      icon: TrendingUp,
      title: "Business Optimization",
      description: "Streamline operations and maximize efficiency. We identify opportunities to enhance your business performance."
    },
    {
      icon: Users,
      title: "Team Development",
      description: "Build high-performing teams that drive success. Our proven methods enhance collaboration and productivity."
    },
    {
      icon: Target,
      title: "Market Expansion",
      description: "Unlock new markets and opportunities. We guide your business through successful market entry and growth."
    }
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Transform Your Business With Expert Guidance
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready to take your business to the next level? Our consulting services 
              provide the insights and strategies you need to achieve exceptional results. 
              Let's collaborate to unlock your full potential.
            </p>
            
            {/* Contact Button */}
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Start the Conversation
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Quick Contact Card */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">
                Get in Touch
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Schedule a free consultation to discuss your business needs:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• Detailed business analysis</li>
                <li>• Custom strategy development</li>
                <li>• Implementation roadmap</li>
                <li>• ROI projections</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingContact;