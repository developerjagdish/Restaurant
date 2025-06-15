import React from 'react';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Indian Restaurant Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-4 lg:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl lg:text-2xl font-bold text-white">Shyamnath Restaurant</div>
          <div className="hidden md:flex space-x-4 lg:space-x-8 text-white">
            <a href="#menu" className="hover:text-orange-400 transition-colors text-sm lg:text-base">Menu</a>
            <a href="#about" className="hover:text-orange-400 transition-colors text-sm lg:text-base">About</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors text-sm lg:text-base">Contact</a>
            <a href="tel:+919876543210" className="bg-orange-600 px-4 lg:px-6 py-2 rounded-full hover:bg-orange-700 transition-colors text-sm lg:text-base">Call Now</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <a href="tel:+919876543210" className="bg-orange-600 px-4 py-2 rounded-full hover:bg-orange-700 transition-colors text-sm text-white">Call</a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        <div className="space-y-6 lg:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 rounded-full bg-orange-600/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 text-xs lg:text-sm font-medium">
            <Clock className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
            Open Daily 12:00 PM – 11:00 PM
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              Shyamnath
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 text-orange-200">Restaurant</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            Experience authentic Indian flavors in the heart of Indiranagar. From aromatic biryanis to 
            rich curries, discover the true taste of India in our family-friendly atmosphere.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center px-4">
            <a 
              href="tel:+919876543210"
              className="group w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center justify-center">
                Book Table
                <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="https://example.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-center"
            >
              Visit Website
            </a>
          </div>

          {/* Info Cards - Improved Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-12 lg:mt-16 max-w-5xl mx-auto px-4">
            <div className="p-4 lg:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <MapPin className="w-6 h-6 lg:w-8 lg:h-8 text-orange-400 mb-3 lg:mb-4 group-hover:scale-110 transition-transform mx-auto sm:mx-0" />
              <h3 className="text-base lg:text-lg font-semibold text-white mb-2 text-center sm:text-left">Prime Location</h3>
              <p className="text-gray-200 text-xs lg:text-sm leading-relaxed text-center sm:text-left">Spice Garden, 2nd Floor, Indiranagar 100 Feet Rd, Bangalore</p>
            </div>
            
            <div className="p-4 lg:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <Phone className="w-6 h-6 lg:w-8 lg:h-8 text-orange-400 mb-3 lg:mb-4 group-hover:scale-110 transition-transform mx-auto sm:mx-0" />
              <h3 className="text-base lg:text-lg font-semibold text-white mb-2 text-center sm:text-left">Easy Booking</h3>
              <p className="text-gray-200 text-xs lg:text-sm leading-relaxed text-center sm:text-left">Call us at +91-9876543210 or visit example.com</p>
            </div>
            
            <div className="p-4 lg:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group sm:col-span-2 lg:col-span-1">
              <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-orange-400 mb-3 lg:mb-4 group-hover:scale-110 transition-transform mx-auto sm:mx-0" />
              <h3 className="text-base lg:text-lg font-semibold text-white mb-2 text-center sm:text-left">Daily Service</h3>
              <p className="text-gray-200 text-xs lg:text-sm leading-relaxed text-center sm:text-left">Open every day from 12:00 PM to 11:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 lg:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;