import React from 'react';
import { ChefHat, Utensils, Award, Users, Clock, Wifi } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: ChefHat,
      title: 'Authentic Indian Cuisine',
      description: 'Traditional recipes passed down through generations, prepared with authentic spices and techniques.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Utensils,
      title: 'Veg & Non-Veg Options',
      description: 'Extensive menu with vegetarian, vegan, and Jain food options alongside delicious non-vegetarian dishes.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Award,
      title: "Chef's Specials",
      description: 'Signature dishes like Tandoori Pomfret, Mughlai Chicken Curry, and Royal Thali Combo.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'Warm, welcoming atmosphere perfect for families, friends, and special celebrations.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Clock,
      title: 'Convenient Hours',
      description: 'Open daily from 12:00 PM to 11:00 PM with both indoor AC and rooftop seating.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Wifi,
      title: 'Modern Amenities',
      description: 'Free Wi-Fi, basement parking, and comfortable seating options for all occasions.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  const menuHighlights = [
    {
      name: 'Veg Biryani 🌱',
      description: 'Aromatic basmati rice cooked with fresh vegetables and traditional spices',
      price: '₹280',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Butter Chicken 🍗',
      description: 'Tender chicken in rich, creamy tomato-based curry - mildly spiced and flavorful',
      price: '₹420',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Paneer Tikka 🔥',
      description: 'Marinated cottage cheese grilled to perfection with bell peppers and onions',
      price: '₹320',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Tandoori Pomfret 🐟',
      description: "Chef's special - fresh pomfret marinated in tandoori spices and grilled",
      price: '₹650',
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Royal Thali Combo',
      description: 'Complete meal with dal, sabzi, rice, roti, pickle, and dessert',
      price: '₹380',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Gulab Jamun 🍯',
      description: 'Traditional Indian dessert - soft milk dumplings in sweet cardamom syrup',
      price: '₹120',
      image: 'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <>
      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Shyamnath Restaurant
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the authentic taste of India with our traditional recipes, warm hospitality, and modern amenities
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 lg:p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white"
                >
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 lg:w-8 lg:h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Menu Highlights
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From aromatic biryanis to rich curries, discover our most popular dishes crafted with authentic Indian spices
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {menuHighlights.map((dish, index) => (
              <div key={index} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <div className="relative overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 lg:top-4 right-3 lg:right-4 bg-orange-600 text-white px-2 lg:px-3 py-1 rounded-full font-semibold text-sm lg:text-base">
                    {dish.price}
                  </div>
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <a 
              href="https://example.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 lg:px-8 py-3 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Full Menu
              <ChefHat className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Additional Menu Items */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">More Favorites</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl lg:text-3xl mb-2 lg:mb-3">🍞</div>
              <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Garlic Naan</h4>
              <p className="text-gray-600 text-xs lg:text-sm mt-1">Fresh baked with garlic & herbs</p>
            </div>
            
            <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl lg:text-3xl mb-2 lg:mb-3">🍵</div>
              <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Masala Chai</h4>
              <p className="text-gray-600 text-xs lg:text-sm mt-1">Traditional spiced tea</p>
            </div>
            
            <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl lg:text-3xl mb-2 lg:mb-3">🍛</div>
              <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Mughlai Chicken</h4>
              <p className="text-gray-600 text-xs lg:text-sm mt-1">Rich & creamy curry</p>
            </div>
            
            <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl lg:text-3xl mb-2 lg:mb-3">🥗</div>
              <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Jain Options</h4>
              <p className="text-gray-600 text-xs lg:text-sm mt-1">Special Jain preparations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready for Authentic Indian Flavors?
          </h2>
          <p className="text-lg lg:text-xl text-orange-100 mb-6 lg:mb-8">
            Book your table today and experience the true taste of India at Shyamnath Restaurant
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <a 
              href="tel:+919876543210"
              className="px-6 lg:px-8 py-3 lg:py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Call +91-9876543210
            </a>
            <a 
              href="https://example.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 lg:px-8 py-3 lg:py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Visit Website
            </a>
          </div>
          
          <div className="mt-6 lg:mt-8 text-orange-100 space-y-1 lg:space-y-2">
            <p className="text-sm lg:text-base">📍 Spice Garden, 2nd Floor, Indiranagar 100 Feet Rd, Bangalore</p>
            <p className="text-sm lg:text-base">🕒 Open Daily: 12:00 PM – 11:00 PM</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;