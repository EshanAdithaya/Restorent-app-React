import React, { useState } from 'react';
import { ShoppingCart, X, ChevronRight, Clock, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const RestaurantWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Popular');

  const menuCategories = [
    { name: 'Popular', icon: '🔥' },
    { name: 'Main Course', icon: '🍽️' },
    { name: 'Appetizers', icon: '🥗' },
    { name: 'Desserts', icon: '🍰' },
    { name: 'Drinks', icon: '🥤' }
  ];
  
  const menuItems = [
    { 
      id: 1, 
      name: 'Signature Burger', 
      price: 16.99, 
      category: 'Popular', 
      description: 'Premium beef patty with special sauce', 
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviews: 124
    },
    { 
      id: 2, 
      name: 'Truffle Pasta', 
      price: 22.99, 
      category: 'Main Course', 
      description: 'Fresh pasta with black truffle', 
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 89
    },
    { 
      id: 3, 
      name: 'Caesar Salad', 
      price: 12.99, 
      category: 'Appetizers', 
      description: 'Classic caesar with homemade dressing', 
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviews: 156
    },
    { 
      id: 4, 
      name: 'Chocolate Lava Cake', 
      price: 9.99, 
      category: 'Desserts', 
      description: 'Warm chocolate cake with vanilla ice cream', 
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 208
    }
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    setCartItems(newCart);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-gray-800"></div>
                <div className="w-6 h-0.5 bg-gray-800"></div>
                <div className="w-6 h-0.5 bg-gray-800"></div>
              </div>
            </button>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Bistro Modern
            </Link>
          </div>
          <button 
            onClick={() => setShowCart(!showCart)} 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center animate-pulse">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-6 text-white leading-tight">
              Experience Culinary Excellence
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Indulge in a symphony of flavors, where traditional recipes meet modern innovation.
              Order online for a seamless dining experience.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                Order Now
              </button>
              <Link to="/menu" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <Clock className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold ml-4">Hours</h3>
            </div>
            <p className="text-gray-600 mb-2">Mon-Fri: 11am - 10pm</p>
            <p className="text-gray-600">Sat-Sun: 10am - 11pm</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <MapPin className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold ml-4">Location</h3>
            </div>
            <p className="text-gray-600 mb-2">123 Culinary Street</p>
            <p className="text-gray-600">Foodie City, FC 12345</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold ml-4">Delivery Info</h3>
            </div>
            <p className="text-gray-600 mb-2">Free delivery on orders over $30</p>
            <p className="text-gray-600">30-45 min estimated time</p>
          </div>
        </div>
      </div>

      {/* Featured Menu Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our chef's specially curated selection of dishes, crafted with passion and the finest ingredients.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex overflow-x-auto space-x-4 mb-12 pb-4 justify-center">
          {menuCategories.map(category => (
            <button
              key={category.name}
              className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                activeCategory === category.name 
                ? "bg-black text-white shadow-lg transform scale-105" 
                : "border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems
            .filter(item => item.category === activeCategory)
            .map(item => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                    <span className="font-bold text-gray-800">${item.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    {renderStars(item.rating)}
                    <span className="text-sm text-gray-500">({item.reviews} reviews)</span>
                  </div>
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300">
          <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-xl">
            <div className="h-full flex flex-col">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Your Cart</h2>
                <button 
                  onClick={() => setShowCart(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold">{item.name}</h3>
                          <p className="text-gray-600">${item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-500 hover:text-red-600 p-1"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 border-t border-gray-200">
                <div className="flex justify-between mb-4">
                  <span className="font-bold text-lg">Total:</span>
                  <span className="font-bold text-lg">${total.toFixed(2)}</span>
                </div>
                <button 
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed inset-y-0 left-0 w-full md:w-80 bg-white">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Menu</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <nav className="space-y-4">
                <Link 
                  to="/" 
                  className="block py-3 px-4 text-lg hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/menu" 
                  className="block py-3 px-4 text-lg hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </Link>
                <Link 
                  to="/about" 
                  className="block py-3 px-4 text-lg hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="block py-3 px-4 text-lg hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>

              {/* Additional Mobile Menu Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm font-semibold">Hours</p>
                      <p className="text-sm text-gray-600">11am - 10pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm font-semibold">Location</p>
                      <p className="text-sm text-gray-600">123 Culinary Street</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <ShoppingCart className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm font-semibold">Free Delivery</p>
                      <p className="text-sm text-gray-600">On orders over $30</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantWebsite;