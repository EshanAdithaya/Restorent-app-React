import React, { useState } from 'react';
  import { Star, Filter, X, Info, Clock, CalendarDays } from 'lucide-react';
  
  const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('Popular');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [filters, setFilters] = useState({
      rating: 0,
      price: 'all',
      allergies: [],
      dietary: [],
      calories: 'all'
    });
  
    const categories = [
      { id: 1, name: 'Popular', icon: '🔥' },
      { id: 2, name: 'Starters', icon: '🥗' },
      { id: 3, name: 'Main Course', icon: '🍽️' },
      { id: 4, name: 'Desserts', icon: '🍰' },
      { id: 5, name: 'Beverages', icon: '🥤' }
    ];
  
    const allergens = [
      { id: 'gluten', name: 'Gluten', icon: '🌾' },
      { id: 'dairy', name: 'Dairy', icon: '🥛' },
      { id: 'nuts', name: 'Nuts', icon: '🥜' },
      { id: 'eggs', name: 'Eggs', icon: '🥚' },
      { id: 'soy', name: 'Soy', icon: '🫘' },
      { id: 'shellfish', name: 'Shellfish', icon: '🦐' }
    ];
  
    const dietaryPreferences = [
      { id: 'vegetarian', name: 'Vegetarian', icon: '🥬' },
      { id: 'vegan', name: 'Vegan', icon: '🌱' },
      { id: 'halal', name: 'Halal', icon: '🍖' },
      { id: 'kosher', name: 'Kosher', icon: '✡️' },
      { id: 'glutenFree', name: 'Gluten Free', icon: '🌾' }
    ];
  
    const calorieRanges = [
      { value: 'all', label: 'All Calories' },
      { value: 'under300', label: 'Under 300', max: 300 },
      { value: '300-500', label: '300-500', min: 300, max: 500 },
      { value: '500-800', label: '500-800', min: 500, max: 800 },
      { value: 'over800', label: 'Over 800', min: 800 }
    ];
  
    const menuItems = [
      {
        id: 1,
        name: 'Classic Burger',
        category: 'Popular',
        price: 12.99,
        description: 'Angus beef patty with cheese, lettuce, tomato',
        image: '/api/placeholder/200/200',
        rating: 4.5,
        reviews: 128,
        allergies: ['gluten', 'dairy'],
        dietary: [],
        calories: 650,
        nutritionInfo: {
          protein: '28g',
          carbs: '35g',
          fat: '22g',
          fiber: '3g',
          sodium: '980mg'
        },
        ingredients: [
          'Angus beef patty',
          'Brioche bun',
          'Cheddar cheese',
          'Lettuce',
          'Tomato',
          'Red onion',
          'House sauce'
        ],
        prepTime: '15-20 min',
        availableFor: ['Lunch', 'Dinner'],
        spicyLevel: 1,
        customizations: [
          { name: 'Extra cheese', price: 1.50 },
          { name: 'Bacon', price: 2.00 },
          { name: 'Avocado', price: 1.50 },
          { name: 'Gluten-free bun', price: 1.00 }
        ]
      },
      {
        id: 2,
        name: 'Margherita Pizza',
        category: 'Main Course',
        price: 14.99,
        description: 'Fresh tomatoes, mozzarella, basil on thin crust',
        image: '/api/placeholder/200/200',
        rating: 4.8,
        reviews: 256,
        allergies: ['gluten', 'dairy'],
        dietary: ['vegetarian'],
        calories: 750,
        nutritionInfo: {
          protein: '24g',
          carbs: '88g',
          fat: '26g',
          fiber: '4g',
          sodium: '1200mg'
        },
        ingredients: [
          'House-made pizza dough',
          'San Marzano tomatoes',
          'Fresh mozzarella',
          'Fresh basil',
          'Extra virgin olive oil',
          'Sea salt'
        ],
        prepTime: '20-25 min',
        availableFor: ['Lunch', 'Dinner'],
        spicyLevel: 0,
        customizations: [
          { name: 'Extra cheese', price: 2.00 },
          { name: 'Gluten-free crust', price: 3.00 },
          { name: 'Add vegetables', price: 1.50 }
        ]
      },
      {
        id: 3,
        name: 'Buddha Bowl',
        category: 'Main Course',
        price: 13.99,
        description: 'Quinoa, roasted vegetables, avocado, tahini',
        image: '/api/placeholder/200/200',
        rating: 4.6,
        reviews: 89,
        allergies: ['nuts'],
        dietary: ['vegan', 'glutenFree'],
        calories: 450,
        nutritionInfo: {
          protein: '15g',
          carbs: '52g',
          fat: '18g',
          fiber: '12g',
          sodium: '420mg'
        },
        ingredients: [
          'Organic quinoa',
          'Roasted sweet potato',
          'Chickpeas',
          'Kale',
          'Avocado',
          'Tahini dressing',
          'Mixed seeds'
        ],
        prepTime: '10-15 min',
        availableFor: ['Lunch', 'Dinner'],
        spicyLevel: 0,
        customizations: [
          { name: 'Extra avocado', price: 2.00 },
          { name: 'Add tofu', price: 2.50 },
          { name: 'Extra dressing', price: 0.75 }
        ]
      }
    ];
  
    const toggleFilter = (type, value) => {
      if (type === 'allergies' || type === 'dietary') {
        setFilters(prev => ({
          ...prev,
          [type]: prev[type].includes(value)
            ? prev[type].filter(item => item !== value)
            : [...prev[type], value]
        }));
      } else {
        setFilters(prev => ({
          ...prev,
          [type]: value
        }));
      }
    };
  
    const filterItems = (items) => {
      return items.filter(item => {
        const ratingMatch = filters.rating === 0 || item.rating >= filters.rating;
        const priceMatch = filters.price === 'all' || 
          (filters.price === 'low' && item.price <= 10) ||
          (filters.price === 'medium' && item.price > 10 && item.price <= 20) ||
          (filters.price === 'high' && item.price > 20);
        const allergyMatch = filters.allergies.length === 0 || 
          !filters.allergies.some(allergy => item.allergies.includes(allergy));
        const dietaryMatch = filters.dietary.length === 0 || 
          filters.dietary.every(pref => item.dietary.includes(pref));
        const calorieMatch = filters.calories === 'all' || 
          (filters.calories === 'under300' && item.calories < 300) ||
          (filters.calories === '300-500' && item.calories >= 300 && item.calories <= 500) ||
          (filters.calories === '500-800' && item.calories >= 500 && item.calories <= 800) ||
          (filters.calories === 'over800' && item.calories > 800);
        
        return ratingMatch && priceMatch && allergyMatch && dietaryMatch && calorieMatch;
      });
    };
  
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
  
    // Food Item Popup Component
    const FoodItemPopup = ({ item, onClose }) => {
      const [selectedTab, setSelectedTab] = useState('description');
      
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 bg-white rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
  
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(item.rating)}
                    <span className="text-gray-500">({item.reviews} reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold mb-1">${item.price}</div>
                  <div className="text-gray-500">{item.calories} cal</div>
                </div>
              </div>
  
              {/* Tab Navigation */}
              <div className="flex border-b mb-6">
                {['description', 'nutrition', 'customization'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-2 -mb-px ${
                      selectedTab === tab
                        ? 'border-b-2 border-black font-semibold'
                        : 'text-gray-500'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
  
              {/* Tab Content */}
              {selectedTab === 'description' && (
                <div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span>{item.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5 text-gray-400" />
                      <span>{item.availableFor.join(', ')}</span>
                    </div>
                  </div>
  
                  <h3 className="font-semibold mb-2">Ingredients</h3>
                  <ul className="list-disc list-inside mb-4">
                    {item.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-600">{ingredient}</li>
                    ))}
                  </ul>
  
                  {/* Allergen & Dietary Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.dietary.map(diet => {
                      const dietInfo = dietaryPreferences.find(d => d.id === diet);
                      return (
                        <span key={diet} className="px-2 py-1 text-sm bg-green-100 text-green-600 rounded-full">
                          {dietInfo?.icon} {dietInfo?.name}
                        </span>
                      );
                    })}
                    {item.allergies.map(allergy => {
                      const allergyInfo = allergens.find(a => a.id === allergy);
                      return (
                        <span key={allergy} className="px-2 py-1 text-sm bg-red-100 text-red-600 rounded-full">
                          {allergyInfo?.icon} {allergyInfo?.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
  
              {selectedTab === 'nutrition' && (
                <div className="space-y-4">
                  <h3 className="font-semibold mb-2">Nutrition Information</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(item.nutritionInfo).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded">
                        <div className="text-gray-500 text-sm">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                        <div className="font-semibold">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
  
              {selectedTab === 'customization' && (
                <div>
                  <h3 className="font-semibold mb-2">Customize Your Order</h3>
                  <div className="space-y-2">
                    {item.customizations.map((option, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 border rounded hover:bg-gray-50"
                      >
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          {option.name}
                        </label>
                        <span className="text-gray-600">+${option.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
  
              <button 
                className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
    };
  
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Our Menu</h1>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>

        {/* Filters Sidebar */}
        {showFilters && (
          <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-xl z-50 overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Minimum Rating</h3>
                <div className="flex gap-2">
                  {[0, 3, 3.5, 4, 4.5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => toggleFilter('rating', rating)}
                      className={`px-3 py-1 rounded ${
                        filters.rating === rating
                          ? 'bg-black text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      {rating === 0 ? 'All' : rating + '★'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="flex gap-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'low', label: '$ < $10' },
                    { value: 'medium', label: '$$ $10-$20' },
                    { value: 'high', label: '$$$ > $20' }
                  ].map((price) => (
                    <button
                      key={price.value}
                      onClick={() => toggleFilter('price', price.value)}
                      className={`px-3 py-1 rounded ${
                        filters.price === price.value
                          ? 'bg-black text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      {price.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calorie Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Calorie Range</h3>
                <div className="flex flex-wrap gap-2">
                  {calorieRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => toggleFilter('calories', range.value)}
                      className={`px-3 py-1 rounded ${
                        filters.calories === range.value
                          ? 'bg-black text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Allergies Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Allergen Warnings</h3>
                <div className="grid grid-cols-2 gap-2">
                  {allergens.map((allergen) => (
                    <button
                      key={allergen.id}
                      onClick={() => toggleFilter('allergies', allergen.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded ${
                        filters.allergies.includes(allergen.id)
                          ? 'bg-red-100 text-red-600 border-2 border-red-200'
                          : 'bg-gray-100'
                      }`}
                    >
                      <span>{allergen.icon}</span>
                      {allergen.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dietary Preferences */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Dietary Preferences</h3>
                <div className="grid grid-cols-2 gap-2">
                  {dietaryPreferences.map((pref) => (
                    <button
                      key={pref.id}
                      onClick={() => toggleFilter('dietary', pref.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded ${
                        filters.dietary.includes(pref.id)
                          ? 'bg-green-100 text-green-600 border-2 border-green-200'
                          : 'bg-gray-100'
                      }`}
                    >
                      <span>{pref.icon}</span>
                      {pref.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => setFilters({
                  rating: 0,
                  price: 'all',
                  allergies: [],
                  dietary: [],
                  calories: 'all'
                })}
                className="w-full py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-50"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
        
        {/* Categories */}
        <div className="flex overflow-x-auto gap-4 pb-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-colors
                ${activeCategory === category.name 
                  ? 'bg-black text-white' 
                  : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterItems(menuItems)
            .filter(item => item.category === activeCategory)
            .map(item => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <div className="flex items-center gap-2">
                        {renderStars(item.rating)}
                        <span className="text-gray-500">({item.reviews})</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold mb-1">${item.price}</div>
                      <div className="text-sm text-gray-500">{item.calories} cal</div>
                    </div>
                  </div>
                  
                  {/* Dietary and Allergy Tags */}
                  {(item.dietary.length > 0 || item.allergies.length > 0) && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.dietary.map(diet => {
                        const dietInfo = dietaryPreferences.find(d => d.id === diet);
                        return (
                          <span key={diet} className="px-2 py-1 text-sm bg-green-100 text-green-600 rounded-full">
                            {dietInfo?.icon} {dietInfo?.name}
                          </span>
                        );
                      })}
                      {item.allergies.map(allergy => {
                        const allergyInfo = allergens.find(a => a.id === allergy);
                        return (
                          <span key={allergy} className="px-2 py-1 text-sm bg-red-100 text-red-600 rounded-full">
                            {allergyInfo?.icon} {allergyInfo?.name}
                          </span>
                        );
                      })}
                    </div>
                  )}
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to cart logic here
                    }}
                    className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Food Item Popup */}
      {selectedItem && (
        <FoodItemPopup 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
};

export default Menu;