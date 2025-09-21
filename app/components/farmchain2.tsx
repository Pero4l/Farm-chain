'use client'
import Button from './Atoms/button'
import React, { useState, useEffect } from 'react';
import { 
  Home, Users, MessageCircle, Store, Cloud, Bell, Search, Plus, 
  Heart, MessageSquare, Share, TrendingUp, MapPin, Thermometer,
  Droplets, Wind, Sun, User, Settings, LogOut, Filter, Star,
  Calendar, DollarSign, Truck, Leaf, Award, BarChart3, Camera,
  Video, Mic, Send, Phone, Mail, Globe, Zap, Target, ShoppingCart,
  CheckCircle, AlertCircle, Clock, Eye, Bookmark
} from 'lucide-react';

const FarmChain = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [notifications, setNotifications] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  // Enhanced data with more realistic farming content
  const [posts, setPosts] = useState([
    {
      id: 1,
      farmer: "Sarah Johnson",
      location: "Iowa, USA",
      avatar: "SJ",
      time: "2 hours ago",
      verified: true,
      farmSize: "50 acres",
      content: "🌱 BREAKTHROUGH HARVEST! My companion planting experiment yielded 40% more tomatoes than last season! Planting basil and marigolds alongside tomatoes not only increased yield but naturally repelled pests. Zero pesticides used! Who wants the detailed planting schedule?",
      images: ["bg-gradient-to-br from-red-500 via-orange-400 to-yellow-500", "bg-gradient-to-br from-green-500 to-emerald-600"],
      likes: 142,
      comments: 34,
      shares: 18,
      type: "success-story",
      tags: ["#OrganicFarming", "#CompanionPlanting", "#SustainableAgriculture"],
      category: "small-scale"
    },
    {
      id: 2,
      farmer: "AgriTech Solutions",
      location: "California, USA",
      avatar: "AS",
      time: "4 hours ago",
      verified: true,
      farmSize: "2,500 acres",
      content: "🚨 WEATHER ALERT: Severe drought conditions predicted for Central Valley next month. We're implementing advanced drip irrigation and moisture sensors across all fields. Sharing our water conservation protocol with the community - together we can overcome this challenge.",
      video: true,
      likes: 289,
      comments: 67,
      shares: 45,
      type: "alert",
      tags: ["#DroughtAlert", "#WaterConservation", "#SmartFarming"],
      category: "commercial"
    },
    {
      id: 3,
      farmer: "Miguel Rodriguez",
      location: "Texas, USA",
      avatar: "MR",
      time: "8 hours ago",
      verified: false,
      farmSize: "15 acres",
      content: "🤝 TRADE OPPORTUNITY: 800 lbs of premium organic corn ready for harvest next week. Looking to trade for quality hay or small equipment rental. This corn tested 99% organic certified. Local Houston area preferred but willing to arrange transport for serious inquiries.",
      likes: 67,
      comments: 29,
      shares: 12,
      type: "trade",
      price: "$1,200 value",
      tags: ["#OrganicCorn", "#TradeOpportunity", "#Houston"],
      category: "small-scale"
    },
    {
      id: 4,
      farmer: "Green Valley Cooperative",
      location: "Oregon, USA",
      avatar: "GV",
      time: "12 hours ago",
      verified: true,
      farmSize: "Cooperative - 50 farms",
      content: "🎓 FREE WORKSHOP ANNOUNCEMENT: 'Soil Health & Carbon Sequestration' this Saturday 10AM. Expert speakers include Dr. Emma Chen (Soil Scientist) and Mark Thompson (Regenerative Farming Pioneer). Limited to 100 participants. Link in comments to register!",
      likes: 234,
      comments: 89,
      shares: 156,
      type: "event",
      tags: ["#Education", "#SoilHealth", "#CarbonSequestration", "#Workshop"],
      category: "cooperative"
    }
  ]);

  const marketplaceItems = [
    {
      id: 1,
      title: "Premium Organic Wheat",
      quantity: "5,000 lbs",
      price: "$2,450",
      pricePerUnit: "$0.49/lb",
      seller: "Sunset Organic Farm",
      location: "Nebraska, USA",
      rating: 4.9,
      image: "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400",
      certified: "USDA Organic",
      harvestDate: "This week",
      category: "grain",
      condition: "Fresh",
      shipping: "Available"
    },
    {
      id: 2,
      title: "John Deere 5075E Tractor",
      condition: "Excellent (2019)",
      price: "$850/week",
      pricePerUnit: "$120/day",
      seller: "Equipment Solutions Co-op",
      location: "Iowa, USA",
      rating: 4.8,
      image: "bg-gradient-to-br from-green-600 via-green-500 to-emerald-600",
      specifications: "75 HP, 4WD, 450 hours",
      availability: "Next week",
      category: "equipment",
      verified: true,
      insurance: "Included"
    },
    {
      id: 3,
      title: "Heirloom Tomato Seedlings",
      quantity: "500 plants",
      price: "$375",
      pricePerUnit: "$0.75 each",
      seller: "Heritage Seeds Farm",
      location: "California, USA",
      rating: 5.0,
      image: "bg-gradient-to-br from-red-500 via-pink-400 to-orange-500",
      varieties: "Cherokee Purple, Brandywine",
      readyDate: "April 15th",
      category: "seeds",
      organic: true,
      guarantee: "90% germination"
    },
    {
      id: 4,
      title: "Raw Honey Bulk Sale",
      quantity: "200 jars (12 oz each)",
      price: "$1,800",
      pricePerUnit: "$9/jar",
      seller: "Golden Bee Apiary",
      location: "Montana, USA",
      rating: 4.9,
      image: "bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500",
      flowerSource: "Wildflower & Clover",
      harvestDate: "Last month",
      category: "products",
      tested: "Lab certified pure",
      wholesale: true
    }
  ];

  const weatherData = {
    location: "Your Location",
    current: {
      temp: "74°F",
      condition: "Partly Cloudy",
      humidity: "68%",
      wind: "12 mph NE",
      pressure: "30.15 in",
      uvIndex: 6,
      visibility: "10 miles",
      icon: <Sun className="w-12 h-12 text-yellow-500" />
    },
    forecast: [
      { day: "Today", high: "78°", low: "65°", condition: "Sunny", precipitation: "0%", icon: <Sun className="w-8 h-8 text-yellow-500" /> },
      { day: "Tomorrow", high: "72°", low: "60°", condition: "Cloudy", precipitation: "20%", icon: <Cloud className="w-8 h-8 text-gray-500" /> },
      { day: "Wednesday", high: "69°", low: "58°", condition: "Rain", precipitation: "85%", icon: <Droplets className="w-8 h-8 text-blue-500" /> },
      { day: "Thursday", high: "73°", low: "61°", condition: "Partly Cloudy", precipitation: "10%", icon: <Sun className="w-8 h-8 text-yellow-500" /> },
      { day: "Friday", high: "76°", low: "64°", condition: "Sunny", precipitation: "5%", icon: <Sun className="w-8 h-8 text-yellow-500" /> }
    ],
    alerts: [
      { type: "warning", message: "Frost warning for Thursday night", severity: "moderate" },
      { type: "info", message: "Perfect planting conditions this weekend", severity: "low" }
    ]
  };

  const farmingInsights = [
    { title: "Soil Moisture", value: "72%", status: "optimal", icon: <Droplets className="w-5 h-5" /> },
    { title: "Growing Days", value: "145", status: "good", icon: <Calendar className="w-5 h-5" /> },
    { title: "Market Price", value: "+12%", status: "up", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Yield Prediction", value: "94%", status: "excellent", icon: <Target className="w-5 h-5" /> }
  ];

  const TabButton = ({ id, icon: Icon, label, isActive, onClick, badge }: { id: any; icon: any; label: any; isActive: any; onClick: any; badge?: any }) => (
    <button
      onClick={() => onClick(id)}
      className={`relative flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 w-full ${
        isActive 
          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg transform scale-105' 
          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:scale-102'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
      {badge && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );

  type Post = {
    id: number;
    farmer: string;
    location: string;
    avatar: string;
    time: string;
    verified: boolean;
    farmSize: string;
    content: string;
    images?: string[];
    video?: boolean;
    likes: number;
    comments: number;
    shares: number;
    type: string;
    price?: string;
    tags?: string[];
    category: string;
  };

  const PostCard = ({ post }: { post: Post }) => (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Post Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                {post.avatar}
              </div>
              {post.verified && (
                <CheckCircle className="absolute -bottom-1 -right-1 w-5 h-5 text-blue-500 bg-white rounded-full" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-bold text-gray-900 text-lg">{post.farmer}</h3>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  post.category === 'commercial' ? 'bg-blue-100 text-blue-700' :
                  post.category === 'cooperative' ? 'bg-purple-100 text-purple-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {post.category === 'commercial' ? 'Commercial' : 
                   post.category === 'cooperative' ? 'Cooperative' : 'Small Scale'}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 space-x-3">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {post.location}
                </span>
                <span>•</span>
                <span>{post.farmSize}</span>
                <span>•</span>
                <span>{post.time}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bookmark className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Settings className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Post Content */}
        <div className="mb-4">
          <p className="text-gray-800 leading-relaxed text-lg mb-3">{post.content}</p>
          {post.price && (
            <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
              <DollarSign className="w-4 h-4 mr-1" />
              {post.price}
            </div>
          )}
        </div>

        {/* Tags */}
        {post.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: string, index: number) => (
              <span key={index} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer transition-colors">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Media */}
        {post.images && (
          <div className="grid grid-cols-2 gap-3 mb-4 rounded-2xl overflow-hidden">
            {post.images.map((image: string, index: number) => (
              <div key={index} className={`h-48 ${image} flex items-center justify-center text-white text-4xl cursor-pointer hover:scale-105 transition-transform`}>
                🌱
              </div>
            ))}
          </div>
        )}
        
        {post.video && (
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-64 rounded-2xl flex items-center justify-center text-white mb-4 cursor-pointer hover:scale-105 transition-transform">
            <div className="text-center">
              <Video className="w-16 h-16 mx-auto mb-2" />
              <p className="text-lg font-semibold">Watch Full Video</p>
            </div>
          </div>
        )}
      </div>

      {/* Post Actions */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-all duration-200 hover:scale-110">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-200 hover:scale-110">
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold">{post.comments}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-all duration-200 hover:scale-110">
              <Share className="w-5 h-5" />
              <span className="font-semibold">{post.shares}</span>
            </button>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Eye className="w-4 h-4" />
            <span>{post.likes + post.comments * 3} views</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Enhanced Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between space-x-10">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">🌾</span>
              </div>
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Farm Chain
                </h1>
                <p className="text-sm text-gray-600 font-medium">Revolutionizing Agriculture Together</p>
              </div>
            </div>
            
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search farmers, crops, equipment, tips, locations..."
                  className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-2xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-700"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200">
                <Bell className="w-6 h-6" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                    {notifications}
                  </span>
                )}
              </button>
              <button className="relative p-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200">
                <MessageCircle className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:scale-110 transition-transform">
                U
              </div>
            </div>

                {/* <Button/> */}

          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-100 p-6 sticky top-28">
              <nav className="space-y-3 mb-8">
                <TabButton id="dashboard" icon={BarChart3} label="Dashboard" isActive={activeTab === 'dashboard'} onClick={setActiveTab} />
                <TabButton id="feed" icon={Home} label="Community Feed" isActive={activeTab === 'feed'} onClick={setActiveTab} />
                <TabButton id="marketplace" icon={Store} label="Marketplace" isActive={activeTab === 'marketplace'} onClick={setActiveTab} />
                <TabButton id="weather" icon={Cloud} label="Weather Hub" isActive={activeTab === 'weather'} onClick={setActiveTab} />
                <TabButton id="messages" icon={MessageCircle} label="Messages" isActive={activeTab === 'messages'} onClick={setActiveTab} badge={5} />
                <TabButton id="analytics" icon={TrendingUp} label="Farm Analytics" isActive={activeTab === 'analytics'} onClick={setActiveTab} />
              </nav>
              
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105">
                  <Plus className="w-5 h-5" />
                  <span>Create Post</span>
                </button>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105">
                  <ShoppingCart className="w-5 h-5" />
                  <span>List Product</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                {/* Welcome Section */}
                <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-blue-600 rounded-3xl shadow-2xl text-white p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-3xl font-black mb-2">Welcome back, Farmer! 🌱</h2>
                        <p className="text-green-100 text-lg">Your farm is thriving. Here's what's happening today.</p>
                      </div>
                      <div className="text-6xl opacity-20">🚜</div>
                    </div>
                  </div>
                </div>

                {/* Farm Insights */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {farmingInsights.map((insight, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl ${
                          insight.status === 'excellent' ? 'bg-green-100 text-green-600' :
                          insight.status === 'optimal' ? 'bg-blue-100 text-blue-600' :
                          insight.status === 'up' ? 'bg-purple-100 text-purple-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {insight.icon}
                        </div>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          insight.status === 'excellent' ? 'bg-green-100 text-green-700' :
                          insight.status === 'optimal' ? 'bg-blue-100 text-blue-700' :
                          insight.status === 'up' ? 'bg-purple-100 text-purple-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {insight.status.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-gray-600 text-sm font-medium mb-2">{insight.title}</h3>
                      <p className="text-2xl font-black text-gray-900">{insight.value}</p>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Zap className="w-7 h-7 mr-3 text-yellow-500" />
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    {posts.slice(0, 2).map((post) => (
                      <div key={post.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          {post.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">{post.farmer}</p>
                          <p className="text-gray-600 text-sm truncate">{post.content.substring(0, 60)}...</p>
                        </div>
                        <div className="text-sm text-gray-500">{post.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'feed' && (
              <div className="space-y-8">
                {/* Enhanced Create Post */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      U
                    </div>
                    <div className="flex-1">
                      <textarea
                        placeholder="Share your farming insights, ask questions, or showcase your harvest..."
                        className="w-full bg-gray-50 rounded-2xl px-6 py-4 focus:bg-white focus:ring-2 focus:ring-green-500 transition-all resize-none text-lg"
                        rows={4}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors px-4 py-2 rounded-xl hover:bg-green-50">
                        <Camera className="w-5 h-5" />
                        <span>Photo</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-xl hover:bg-blue-50">
                        <Video className="w-5 h-5" />
                        <span>Video</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors px-4 py-2 rounded-xl hover:bg-purple-50">
                        <MapPin className="w-5 h-5" />
                        <span>Location</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors px-4 py-2 rounded-xl hover:bg-orange-50">
                        <Store className="w-5 h-5" />
                        <span>Marketplace</span>
                      </button>
                    </div>
                    <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Share Post
                    </button>
                  </div>
                </div>

                {/* Feed Filters */}
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {[
                    { id: 'all', label: 'All Posts', icon: '🌾' },
                    { id: 'success', label: 'Success Stories', icon: '🏆' },
                    { id: 'trade', label: 'Trading', icon: '🤝' },
                    { id: 'alerts', label: 'Alerts', icon: '🚨' },
                    { id: 'events', label: 'Events', icon: '📅' }
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 whitespace-nowrap ${
                        selectedFilter === filter.id
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <span>{filter.icon}</span>
                      <span>{filter.label}</span>
                    </button>
                  ))}
                </div>

                {/* Posts Feed */}
                <div className="space-y-8">
                  {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'marketplace' && (
              <div className="space-y-8">
                {/* Marketplace Header */}
                <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl text-white p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-3xl font-black mb-2">Farm Marketplace 🛒</h2>
                        <p className="text-blue-100 text-lg">Buy, sell, and trade agricultural products & equipment</p>
                      </div>
                      <div className="text-6xl opacity-20">🏪</div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold">2,847</div>
                        <div className="text-blue-200 text-sm">Active Listings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">$4.2M</div>
                        <div className="text-blue-200 text-sm">Total Volume</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">98.5%</div>
                        <div className="text-blue-200 text-sm">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Filters */}
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {[
                    { id: 'all', label: 'All Categories', icon: '🌾', color: 'from-green-600 to-emerald-600' },
                    { id: 'grains', label: 'Grains & Seeds', icon: '🌾', color: 'from-yellow-600 to-orange-600' },
                    { id: 'equipment', label: 'Equipment', icon: '🚜', color: 'from-blue-600 to-indigo-600' },
                    { id: 'livestock', label: 'Livestock', icon: '🐄', color: 'from-red-600 to-pink-600' },
                    { id: 'produce', label: 'Fresh Produce', icon: '🥕', color: 'from-green-600 to-teal-600' },
                    { id: 'supplies', label: 'Farm Supplies', icon: '🛠️', color: 'from-purple-600 to-violet-600' }
                  ].map((category) => (
                    <button
                      key={category.id}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 whitespace-nowrap bg-gradient-to-r ${category.color} text-white shadow-lg hover:shadow-xl hover:scale-105`}
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span>{category.label}</span>
                    </button>
                  ))}
                </div>

                {/* Marketplace Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {marketplaceItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <div className={`h-48 ${item.image} flex items-center justify-center text-white text-6xl relative`}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <span className="relative z-10">
                          {item.category === 'equipment' ? '🚜' : 
                           item.category === 'grain' ? '🌾' : 
                           item.category === 'products' ? '🍯' : '🌱'}
                        </span>
                        {item.certified && (
                          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {item.certified}
                          </div>
                        )}
                        {item.verified && (
                          <CheckCircle className="absolute top-4 left-4 w-8 h-8 text-white bg-blue-500 rounded-full p-1" />
                        )}
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                            <div className="flex items-center space-x-4 mb-2">
                              <span className="text-3xl font-black text-green-600">{item.price}</span>
                              <span className="text-gray-500 text-sm">({item.pricePerUnit})</span>
                            </div>
                            {item.quantity && (
                              <p className="text-gray-600 font-medium">Quantity: {item.quantity}</p>
                            )}
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Seller:</span>
                            <span className="font-semibold text-gray-900">{item.seller}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Location:</span>
                            <span className="font-medium text-gray-700 flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {item.location}
                            </span>
                          </div>
                          {item.condition && (
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">Condition:</span>
                              <span className="font-medium text-gray-700">{item.condition}</span>
                            </div>
                          )}
                          {item.harvestDate && (
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">Harvest:</span>
                              <span className="font-medium text-green-600">{item.harvestDate}</span>
                            </div>
                          )}
                        </div>

                        {/* Special Features */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {item.organic && (
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                              <Leaf className="w-3 h-3 mr-1" />
                              Organic
                            </span>
                          )}
                          {item.shipping && (
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                              <Truck className="w-3 h-3 mr-1" />
                              Shipping Available
                            </span>
                          )}
                          {item.wholesale && (
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                              Wholesale
                            </span>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                            <MessageCircle className="w-4 h-4" />
                            <span>Contact</span>
                          </button>
                          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                            <ShoppingCart className="w-4 h-4" />
                            <span>Buy Now</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'weather' && (
              <div className="space-y-8">
                {/* Weather Header */}
                <div className="bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 rounded-3xl shadow-2xl text-white p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-black mb-2">Weather Hub ⛅</h2>
                        <p className="text-blue-100 text-lg">Advanced weather insights for smart farming decisions</p>
                      </div>
                      <div className="text-right">
                        <div className="text-5xl font-black mb-2">{weatherData.current.temp}</div>
                        <p className="text-blue-200">{weatherData.current.condition}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Weather Details */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Thermometer className="w-7 h-7 mr-3 text-blue-500" />
                    Current Conditions
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-2xl">
                      <Droplets className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                      <div className="font-bold text-2xl text-gray-900">{weatherData.current.humidity}</div>
                      <div className="text-gray-600 text-sm">Humidity</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                      <Wind className="w-8 h-8 text-gray-500 mx-auto mb-3" />
                      <div className="font-bold text-2xl text-gray-900">{weatherData.current.wind}</div>
                      <div className="text-gray-600 text-sm">Wind Speed</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-2xl">
                      <Eye className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                      <div className="font-bold text-2xl text-gray-900">{weatherData.current.visibility}</div>
                      <div className="text-gray-600 text-sm">Visibility</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-2xl">
                      <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                      <div className="font-bold text-2xl text-gray-900">{weatherData.current.uvIndex}</div>
                      <div className="text-gray-600 text-sm">UV Index</div>
                    </div>
                  </div>
                </div>

                {/* Weather Alerts */}
                {weatherData.alerts.length > 0 && (
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <AlertCircle className="w-7 h-7 mr-3 text-orange-500" />
                      Weather Alerts
                    </h3>
                    <div className="space-y-4">
                      {weatherData.alerts.map((alert, index) => (
                        <div key={index} className={`p-4 rounded-2xl border-l-4 ${
                          alert.severity === 'moderate' ? 'bg-orange-50 border-orange-500' :
                          alert.severity === 'high' ? 'bg-red-50 border-red-500' :
                          'bg-blue-50 border-blue-500'
                        }`}>
                          <div className="flex items-center space-x-3">
                            <AlertCircle className={`w-5 h-5 ${
                              alert.severity === 'moderate' ? 'text-orange-500' :
                              alert.severity === 'high' ? 'text-red-500' :
                              'text-blue-500'
                            }`} />
                            <p className="font-semibold text-gray-900">{alert.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5-Day Forecast */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Calendar className="w-7 h-7 mr-3 text-green-500" />
                    5-Day Forecast
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                    {weatherData.forecast.map((day, index) => (
                      <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <div className="font-bold text-lg text-gray-900 mb-3">{day.day}</div>
                        <div className="flex justify-center mb-4">
                          {day.icon}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">{day.condition}</div>
                        <div className="font-bold text-lg text-gray-900 mb-2">
                          <span className="text-xl">{day.high}</span> / <span className="text-gray-600">{day.low}</span>
                        </div>
                        <div className="text-xs text-blue-600 font-semibold">
                          💧 {day.precipitation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-28">
              {/* Quick Weather Widget */}
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-xl text-white p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Cloud className="w-5 h-5 mr-2" />
                    Weather Now
                  </h3>
                  <div className="text-center">
                    <div className="text-3xl font-black mb-2">{weatherData.current.temp}</div>
                    <p className="text-blue-100 text-sm mb-4">{weatherData.current.condition}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <Droplets className="w-4 h-4 mx-auto mb-1" />
                        <div className="font-semibold">{weatherData.current.humidity}</div>
                      </div>
                      <div>
                        <Wind className="w-4 h-4 mx-auto mb-1" />
                        <div className="font-semibold">{weatherData.current.wind.split(' ')[0]}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trending in Community */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                  Trending Topics
                </h3>
                <div className="space-y-4">
                  {[
                    { tag: '#OrganicFarming', posts: '2.1k posts', trend: '+12%' },
                    { tag: '#ClimateResilience', posts: '891 posts', trend: '+45%' },
                    { tag: '#SustainableAgriculture', posts: '1.5k posts', trend: '+8%' },
                    { tag: '#PrecisionFarming', posts: '743 posts', trend: '+23%' },
                    { tag: '#CropRotation', posts: '564 posts', trend: '+15%' }
                  ].map((topic, index) => (
                    <button key={index} className="w-full text-left p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-green-600 group-hover:text-green-700">{topic.tag}</p>
                          <p className="text-gray-500 text-xs">{topic.posts}</p>
                        </div>
                        <span className="text-green-500 text-sm font-bold">{topic.trend}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Market Prices */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                  Live Market Prices
                </h3>
                <div className="space-y-4">
                  {[
                    { crop: 'Corn', price: '$6.45', change: '+2.3%', status: 'up' },
                    { crop: 'Soybeans', price: '$14.23', change: '-1.2%', status: 'down' },
                    { crop: 'Wheat', price: '$8.91', change: '+0.8%', status: 'up' },
                    { crop: 'Rice', price: '$12.67', change: '+4.1%', status: 'up' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-semibold text-gray-900">{item.crop}</p>
                        <p className="text-gray-600 text-sm">per bushel</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-gray-900">{item.price}</p>
                        <span className={`text-sm font-semibold ${
                          item.status === 'up' ? 'text-green-600' : 'text-red-500'
                        }`}>
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Farmers Online */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-6 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  Farmers Online
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'Sarah Johnson', farm: 'Organic Valley', status: 'online', avatar: 'SJ' },
                    { name: 'Mike Chen', farm: 'Green Acres', status: 'online', avatar: 'MC' },
                    { name: 'AgriTech Co.', farm: 'Commercial', status: 'busy', avatar: 'AC' },
                    { name: 'Emma Rodriguez', farm: 'Heritage Farm', status: 'online', avatar: 'ER' },
                    { name: 'Tech Innovations', farm: 'Smart Farming', status: 'online', avatar: 'TI' }
                  ].map((farmer, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {farmer.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                          farmer.status === 'online' ? 'bg-green-500' :
                          farmer.status === 'busy' ? 'bg-yellow-500' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 truncate">{farmer.name}</p>
                        <p className="text-gray-500 text-xs truncate">{farmer.farm}</p>
                      </div>
                      <button className="p-2 hover:bg-green-100 rounded-full transition-colors">
                        <MessageCircle className="w-4 h-4 text-green-600" />
                      </button>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-center text-green-600 hover:text-green-700 font-semibold text-sm py-2 hover:bg-green-50 rounded-xl transition-colors">
                  View All (1,247 online)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmChain;
                  