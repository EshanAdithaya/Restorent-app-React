import React, { useState } from 'react';
import { ShoppingCart, X, ChevronRight, Clock, MapPin } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RestaurantWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Popular');

  const menuCategories = ['Popular', 'Main Course', 'Appetizers', 'Desserts', 'Drinks'];
  
  const menuItems = [
    { id: 1, name: 'Signature Burger', price: 16.99, category: 'Popular', description: 'Premium beef patty with special sauce', image: '/api/placeholder/200/200' },
    { id: 2, name: 'Truffle Pasta', price: 22.99, category: 'Main Course', description: 'Fresh pasta with black truffle', image: '/api/placeholder/200/200' },
    { id: 3, name: 'Caesar Salad', price: 12.99, category: 'Appetizers', description: 'Classic caesar with homemade dressing', image: '/api/placeholder/200/200' },
    { id: 4, name: 'Chocolate Lava Cake', price: 9.99, category: 'Desserts', description: 'Warm chocolate cake with vanilla ice cream', image: '/api/placeholder/200/200' },
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    setCartItems(newCart);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {/* Replaced MenuIcon with a simple hamburger icon using divs */}
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
              </div>
            </button>
            <h1 className="text-xl font-bold">Bistro Modern</h1>
          </div>
          <button 
            onClick={() => setShowCart(!showCart)} 
            className="p-2 relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-4">Experience Fine Dining</h2>
          <p className="text-gray-300 mb-8">Order online for delivery or pickup</p>
          <div className="flex space-x-4">
            <Button variant="default" className="bg-white text-black hover:bg-gray-100">
              Order Now
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Mon-Fri: 11am - 10pm</p>
            <p>Sat-Sun: 10am - 11pm</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>123 Culinary Street</p>
            <p>Foodie City, FC 12345</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ChevronRight className="mr-2 h-5 w-5" />
              Delivery Info
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Free delivery on orders over $30</p>
            <p>30-45 min estimated time</p>
          </CardContent>
        </Card>
      </div>

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Our Menu</h2>
        
        {/* Category Tabs */}
        <div className="flex overflow-x-auto space-x-4 mb-8">
          {menuCategories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems
            .filter(item => item.category === activeCategory)
            .map(item => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <span className="font-bold">${item.price}</span>
                  </div>
                  <Button 
                    onClick={() => addToCart(item)}
                    className="w-full mt-2"
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-xl z-50">
          <div className="h-full flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={() => setShowCart(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty</p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="p-4 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              <Button 
                className="w-full"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="p-4">
            <button onClick={() => setIsMenuOpen(false)} className="mb-4">
              <X className="h-6 w-6" />
            </button>
            <div className="space-y-4">
              <a href="#" className="block py-2 text-lg">Home</a>
              <a href="#" className="block py-2 text-lg">Menu</a>
              <a href="#" className="block py-2 text-lg">About</a>
              <a href="#" className="block py-2 text-lg">Contact</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantWebsite;