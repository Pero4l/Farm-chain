'use client';

import React, { useState } from 'react';
import { 
  Home, Users, MessageCircle, Store, Cloud, Bell, Search, Plus, 
  Heart, MessageSquare, Share, TrendingUp, MapPin, Thermometer,
  Droplets, Wind, Sun, User, Settings, LogOut
} from 'lucide-react';

const FarmChain = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [posts, setPosts] = useState([
    {
      id: 1,
      farmer: "Sarah Johnson",
      location: "Iowa, USA",
      avatar: "SJ",
      time: "2 hours ago",
      content: "Just harvested my first batch of organic tomatoes this season! The yield is incredible thanks to the companion planting tips I got from this community. Thank you all! 🍅",
      image: "bg-gradient-to-br from-red-400 to-green-500",
      likes: 24,
      comments: 8,
      type: "small-scale"
    },
    {
      id: 2,
      farmer: "AgriTech Farms",
      location: "California, USA",
      avatar: "AT",
      time: "4 hours ago",
      content: "Weather update: Heavy rains expected next week. We're adjusting our irrigation systems and recommend all farmers in the Central Valley to prepare drainage systems.",
      likes: 45,
      comments: 12,
      type: "commercial"
    },
    {
      id: 3,
      farmer: "Miguel Rodriguez",
      location: "Texas, USA",
      avatar: "MR",
      time: "6 hours ago",
      content: "Looking to trade 500 lbs of organic corn for equipment rental. Anyone have a small harvester available in the Houston area?",
      likes: 18,
      comments: 15,
      type: "small-scale"
    }
  ]);

  const marketplaceItems = [
    {
      id: 1,
      title: "Organic Wheat - 2000 lbs",
      price: "$800",
      seller: "Green Valley Farm",
      location: "Nebraska",
      image: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      title: "John Deere Tractor Rental",
      price: "$150/day",
      seller: "Equipment Co-op",
      location: "Iowa",
      image: "bg-gradient-to-br from-green-600 to-blue-600"
    },
    {
      id: 3,
      title: "Fresh Vegetables Bundle",
      price: "$45",
      seller: "Family Farms",
      location: "Local",
      image: "bg-gradient-to-br from-green-400 to-emerald-500"
    }
  ];

  const weatherData = {
    current: {
      temp: "74°F",
      condition: "Partly Cloudy",
      humidity: "65%",
      wind: "8 mph",
      icon: <Sun className="w-8 h-8 text-yellow-500" />
    },
    forecast: [
      { day: "Today", high: "78°", low: "65°", icon: <Sun className="w-6 h-6" /> },
      { day: "Tomorrow", high: "72°", low: "60°", icon: <Cloud className="w-6 h-6" /> },
      { day: "Wed", high: "69°", low: "58°", icon: <Droplets className="w-6 h-6" /> }
    ]
  };

  type TabButtonProps = {
    id: string;
    icon: React.ElementType;
    label: string;
    isActive: boolean;
    onClick: (id: string) => void;
  };

  const TabButton: React.FC<TabButtonProps> = ({ id, icon: Icon, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${
        isActive 
          ? 'bg-green-600 text-white shadow-lg' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌾</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Farm Chain
                </h1>
                <p className="text-sm text-gray-500">Connecting Agriculture</p>
              </div>
            </div>
            
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search farmers, products, tips..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                U
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <nav className="space-y-2">
                <TabButton id="feed" icon={Home} label="Feed" isActive={activeTab === 'feed'} onClick={setActiveTab} />
                <TabButton id="community" icon={Users} label="Community" isActive={activeTab === 'community'} onClick={setActiveTab} />
                <TabButton id="marketplace" icon={Store} label="Marketplace" isActive={activeTab === 'marketplace'} onClick={setActiveTab} />
                <TabButton id="weather" icon={Cloud} label="Weather" isActive={activeTab === 'weather'} onClick={setActiveTab} />
                <TabButton id="messages" icon={MessageCircle} label="Messages" isActive={activeTab === 'messages'} onClick={setActiveTab} />
              </nav>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>New Post</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'feed' && (
              <div className="space-y-6">
                {/* Create Post */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      U
                    </div>
                    <input
                      type="text"
                      placeholder="Share your farming experience, tips, or questions..."
                      className="flex-1 bg-gray-50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <button className="text-gray-500 hover:text-green-600 transition-colors">📷 Photo</button>
                      <button className="text-gray-500 hover:text-green-600 transition-colors">📍 Location</button>
                      <button className="text-gray-500 hover:text-green-600 transition-colors">🏪 Market</button>
                    </div>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Post
                    </button>
                  </div>
                </div>

                {/* Posts Feed */}
                {posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {post.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-gray-900">{post.farmer}</h3>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              post.type === 'commercial' 
                                ? 'bg-blue-100 text-blue-700' 
                                : 'bg-green-100 text-green-700'
                            }`}>
                              {post.type === 'commercial' ? 'Commercial' : 'Small Scale'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {post.location} • {post.time}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-800 mb-4 leading-relaxed">{post.content}</p>
                      
                      {post.image && (
                        <div className={`w-full h-64 ${post.image} rounded-xl mb-4 flex items-center justify-center text-white text-4xl`}>
                          🌱
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                          <Heart className="w-5 h-5" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                          <MessageSquare className="w-5 h-5" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                          <Share className="w-5 h-5" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'marketplace' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Marketplace</h2>
                  <div className="grid gap-6">
                    {marketplaceItems.map((item) => (
                      <div key={item.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-4">
                          <div className={`w-20 h-20 ${item.image} rounded-lg flex items-center justify-center text-white text-2xl`}>
                            🌾
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                            <p className="text-green-600 font-bold text-xl">{item.price}</p>
                            <p className="text-gray-600">by {item.seller}</p>
                            <p className="text-sm text-gray-500 flex items-center mt-1">
                              <MapPin className="w-4 h-4 mr-1" />
                              {item.location}
                            </p>
                          </div>
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                            Contact
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'weather' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Weather Updates</h2>
                  
                  {/* Current Weather */}
                  <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-xl p-6 text-white mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Current Weather</h3>
                        <p className="text-3xl font-bold">{weatherData.current.temp}</p>
                        <p className="opacity-90">{weatherData.current.condition}</p>
                      </div>
                      <div className="text-right">
                        {weatherData.current.icon}
                        <div className="mt-4 space-y-1">
                          <div className="flex items-center space-x-2">
                            <Droplets className="w-4 h-4" />
                            <span className="text-sm">{weatherData.current.humidity}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Wind className="w-4 h-4" />
                            <span className="text-sm">{weatherData.current.wind}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Forecast */}
                  <div className="grid grid-cols-3 gap-4">
                    {weatherData.forecast.map((day, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                        <p className="font-semibold text-gray-700 mb-2">{day.day}</p>
                        <div className="flex justify-center mb-2 text-gray-600">
                          {day.icon}
                        </div>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">{day.high}</span> / {day.low}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Quick Weather */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Cloud className="w-5 h-5 mr-2 text-blue-500" />
                  Quick Weather
                </h3>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{weatherData.current.temp}</div>
                  <p className="text-sm text-gray-600">{weatherData.current.condition}</p>
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                  Trending Topics
                </h3>
                <div className="space-y-3">
                  {['#OrganicFarming', '#DroughtResistant', '#SustainableAgriculture', '#CropRotation'].map((tag) => (
                    <button key={tag} className="block w-full text-left text-green-600 hover:text-green-700 font-medium transition-colors">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Farmers */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  Active Farmers
                </h3>
                <div className="space-y-3">
                  {['Sarah J.', 'Mike Chen', 'AgriTech Co.', 'Green Valley'].map((farmer, index) => (
                    <div key={farmer} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {farmer.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{farmer}</p>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-xs text-gray-500">Online</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmChain;