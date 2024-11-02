import React from 'react';
import { Clock, MapPin, Star, Users, Award, Coffee } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '10k+', label: 'Happy Customers' },
    { icon: <Star className="w-6 h-6" />, value: '4.9', label: 'Average Rating' },
    { icon: <Coffee className="w-6 h-6" />, value: '15+', label: 'Years Experience' },
    { icon: <Award className="w-6 h-6" />, value: '50+', label: 'Special Dishes' }
  ];

  const team = [
    {
      name: 'Eshan Adithaya',
      role: 'Owner & Head Chef',
      image: '/api/placeholder/300/300',
      description: 'With over 15 years of culinary experience, Eshan brings his passion for innovative cuisine and exceptional dining experiences to every dish.'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Executive Chef',
      image: '/api/placeholder/300/300',
      description: 'Specializing in fusion cuisine, Sarah combines traditional techniques with modern flavors to create unique dining experiences.'
    },
    {
      name: 'David Chen',
      role: 'Pastry Chef',
      image: '/api/placeholder/300/300',
      description: 'A master of sweet creations, David crafts delightful desserts that perfectly complement our menu.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-black">
        <img
          src="/api/placeholder/1920/400"
          alt="Restaurant interior"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Bringing exceptional dining experiences and innovative cuisine to our community since 2008
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-4">
                Founded by Eshan Adithaya in 2008, our restaurant began with a simple mission: 
                to create exceptional dining experiences that combine innovative cuisine with 
                warm hospitality.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've grown from a small family restaurant to a beloved 
                culinary destination, while maintaining our commitment to quality, creativity, 
                and customer satisfaction.
              </p>
              <p className="text-gray-600">
                Today, we continue to push culinary boundaries while honoring traditional 
                techniques, creating dishes that surprise and delight our guests.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/api/placeholder/300/400" 
                alt="Restaurant history 1"
                className="rounded-lg w-full h-full object-cover"
              />
              <img 
                src="/api/placeholder/300/400" 
                alt="Restaurant history 2"
                className="rounded-lg w-full h-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-gray-300">
                We source the finest ingredients and maintain the highest standards in every dish we serve.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-4">Service</h3>
              <p className="text-gray-300">
                Our team is dedicated to providing warm, attentive service that makes every guest feel special.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-300">
                We're committed to sustainable practices and supporting local producers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;