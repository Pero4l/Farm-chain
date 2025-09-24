// import React, { useState, useEffect } from 'react';
// import { 
//   Home, Users, MessageCircle, Store, Cloud, Bell, Search, Plus, 
//   Heart, MessageSquare, Share, TrendingUp, MapPin, Thermometer,
//   Droplets, Wind, Sun, User, Settings, LogOut, Filter, Star,
//   Calendar, DollarSign, Truck, Leaf, Award, BarChart3, Camera,
//   Video, Mic, Send, Phone, Mail, Globe, Zap, Target, ShoppingCart,
//   CheckCircle, AlertCircle, Clock, Eye, Bookmark, ChevronRight,
//   Activity, PieChart, LineChart, FileText, Download
// } from 'lucide-react';



// const FarmChain = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [selectedFilter, setSelectedFilter] = useState('all');
//   const [notifications, setNotifications] = useState(3);
//   const [isLoading, setIsLoading] = useState(false);

//   // Enhanced data with more realistic farming content
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       farmer: "Sarah Johnson",
//       location: "Iowa, USA",
//       avatar: "SJ",
//       time: "2 hours ago",
//       verified: true,
//       farmSize: "50 acres",
//       content: "BREAKTHROUGH HARVEST! My companion planting experiment yielded 40% more tomatoes than last season! Planting basil and marigolds alongside tomatoes not only increased yield but naturally repelled pests. Zero pesticides used! Who wants the detailed planting schedule?",
//       images: ["bg-gradient-to-br from-red-500 via-orange-400 to-yellow-500", "bg-gradient-to-br from-green-500 to-emerald-600"],
//       likes: 142,
//       comments: 34,
//       shares: 18,
//       type: "success-story",
//       tags: ["#OrganicFarming", "#CompanionPlanting", "#SustainableAgriculture"],
//       category: "small-scale"
//     },
//     {
//       id: 2,
//       farmer: "AgriTech Solutions",
//       location: "California, USA",
//       avatar: "AS",
//       time: "4 hours ago",
//       verified: true,
//       farmSize: "2,500 acres",
//       content: "WEATHER ALERT: Severe drought conditions predicted for Central Valley next month. We're implementing advanced drip irrigation and moisture sensors across all fields. Sharing our water conservation protocol with the community - together we can overcome this challenge.",
//       video: true,
//       likes: 289,
//       comments: 67,
//       shares: 45,
//       type: "alert",
//       tags: ["#DroughtAlert", "#WaterConservation", "#SmartFarming"],
//       category: "commercial"
//     },
//     {
//       id: 3,
//       farmer: "Miguel Rodriguez",
//       location: "Texas, USA",
//       avatar: "MR",
//       time: "8 hours ago",
//       verified: false,
//       farmSize: "15 acres",
//       content: "TRADE OPPORTUNITY: 800 lbs of premium organic corn ready for harvest next week. Looking to trade for quality hay or small equipment rental. This corn tested 99% organic certified. Local Houston area preferred but willing to arrange transport for serious inquiries.",
//       likes: 67,
//       comments: 29,
//       shares: 12,
//       type: "trade",
//       price: "$1,200 value",
//       tags: ["#OrganicCorn", "#TradeOpportunity", "#Houston"],
//       category: "small-scale"
//     }
//   ]);

//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       sender: "Sarah Johnson",
//       avatar: "SJ",
//       lastMessage: "Thanks for the planting schedule! This will help a lot.",
//       time: "5 min ago",
//       unread: true,
//       online: true
//     },
//     {
//       id: 2,
//       sender: "AgriTech Solutions",
//       avatar: "AS",
//       lastMessage: "We'd like to discuss a partnership opportunity.",
//       time: "1 hour ago",
//       unread: true,
//       online: false
//     },
//     {
//       id: 3,
//       sender: "Miguel Rodriguez",
//       avatar: "MR",
//       lastMessage: "Perfect! When can we arrange the corn trade?",
//       time: "3 hours ago",
//       unread: false,
//       online: true
//     }
//   ]);

//   const marketplaceItems = [
//     {
//       id: 1,
//       title: "Premium Organic Wheat",
//       quantity: "5,000 lbs",
//       price: "$2,450",
//       pricePerUnit: "$0.49/lb",
//       seller: "Sunset Organic Farm",
//       location: "Nebraska, USA",
//       rating: 4.9,
//       image: "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400",
//       certified: "USDA Organic",
//       harvestDate: "This week",
//       category: "grain",
//       condition: "Fresh",
//       shipping: "Available"
//     },
//     {
//       id: 2,
//       title: "John Deere 5075E Tractor",
//       condition: "Excellent (2019)",
//       price: "$850/week",
//       pricePerUnit: "$120/day",
//       seller: "Equipment Solutions Co-op",
//       location: "Iowa, USA",
//       rating: 4.8,
//       image: "bg-gradient-to-br from-green-600 via-green-500 to-emerald-600",
//       specifications: "75 HP, 4WD, 450 hours",
//       availability: "Next week",
//       category: "equipment",
//       verified: true,
//       insurance: "Included"
//     }
//   ];

//   const weatherData = {
//     location: "Your Location",
//     current: {
//       temp: "74°F",
//       condition: "Partly Cloudy",
//       humidity: "68%",
//       wind: "12 mph NE",
//       pressure: "30.15 in",
//       uvIndex: 6,
//       visibility: "10 miles",
//       icon: <Sun className="w-12 h-12 text-yellow-500" />
//     },
//     forecast: [
//       { day: "Today", high: "78°", low: "65°", condition: "Sunny", precipitation: "0%", icon: <Sun className="w-8 h-8 text-yellow-500" /> },
//       { day: "Tomorrow", high: "72°", low: "60°", condition: "Cloudy", precipitation: "20%", icon: <Cloud className="w-8 h-8 text-gray-500" /> },
//       { day: "Wednesday", high: "69°", low: "58°", condition: "Rain", precipitation: "85%", icon: <Droplets className="w-8 h-8 text-blue-500" /> }
//     ],
//     alerts: [
//       { type: "warning", message: "Frost warning for Thursday night", severity: "moderate" },
//       { type: "info", message: "Perfect planting conditions this weekend", severity: "low" }
//     ]
//   };

//   const farmingInsights = [
//     { title: "Soil Moisture", value: "72%", status: "optimal", icon: <Droplets className="w-5 h-5" /> },
//     { title: "Growing Days", value: "145", status: "good", icon: <Calendar className="w-5 h-5" /> },
//     { title: "Market Price", value: "+12%", status: "up", icon: <TrendingUp className="w-5 h-5" /> },
//     { title: "Yield Prediction", value: "94%", status: "excellent", icon: <Target className="w-5 h-5" /> }
//   ];

//   const analyticsData = {
//     farmPerformance: [
//       { metric: "Total Revenue", value: "$145,200", change: "+15.3%", trend: "up" },
//       { metric: "Crop Yield", value: "89%", change: "+8.2%", trend: "up" },
//       { metric: "Cost Efficiency", value: "92%", change: "+5.7%", trend: "up" },
//       { metric: "Sustainability Score", value: "87%", change: "+12.1%", trend: "up" }
//     ],
//     cropData: [
//       { crop: "Corn", planted: "125 acres", expected: "8,750 bushels", revenue: "$52,500" },
//       { crop: "Soybeans", planted: "85 acres", expected: "4,250 bushels", revenue: "$42,500" },
//       { crop: "Wheat", planted: "65 acres", expected: "3,900 bushels", revenue: "$31,200" }
//     ]
//   };

//   const TabButton = ({ id, icon: Icon, label, isActive, onClick, badge }) => (
//     <button
//       onClick={() => onClick(id)}
//       className={`relative flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 w-full ${
//         isActive 
//           ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg transform scale-105' 
//           : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:scale-102'
//       }`}
//     >
//       <Icon className="w-5 h-5" />
//       <span className="font-medium">{label}</span>
//       {badge && (
//         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//           {badge}
//         </span>
//       )}
//     </button>
//   );

//   const PostCard = ({ post }) => (
//     <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//       <div className="p-6 pb-4">
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
//                 {post.avatar}
//               </div>
//               {post.verified && (
//                 <CheckCircle className="absolute -bottom-1 -right-1 w-5 h-5 text-blue-500 bg-white rounded-full" />
//               )}
//             </div>
//             <div className="flex-1">
//               <div className="flex items-center space-x-2 mb-1">
//                 <h3 className="font-bold text-gray-900 text-lg">{post.farmer}</h3>
//                 <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
//                   post.category === 'commercial' ? 'bg-blue-100 text-blue-700' :
//                   post.category === 'cooperative' ? 'bg-purple-100 text-purple-700' :
//                   'bg-green-100 text-green-700'
//                 }`}>
//                   {post.category === 'commercial' ? 'Commercial' : 
//                    post.category === 'cooperative' ? 'Cooperative' : 'Small Scale'}
//                 </span>
//               </div>
//               <div className="flex items-center text-sm text-gray-500 space-x-3">
//                 <span className="flex items-center">
//                   <MapPin className="w-4 h-4 mr-1" />
//                   {post.location}
//                 </span>
//                 <span>•</span>
//                 <span>{post.farmSize}</span>
//                 <span>•</span>
//                 <span>{post.time}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <p className="text-gray-800 leading-relaxed text-lg mb-3">{post.content}</p>
//           {post.price && (
//             <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
//               <DollarSign className="w-4 h-4 mr-1" />
//               {post.price}
//             </div>
//           )}
//         </div>

//         {post.tags && (
//           <div className="flex flex-wrap gap-2 mb-4">
//             {post.tags.map((tag, index) => (
//               <span key={index} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer transition-colors">
//                 {tag}
//               </span>
//             ))}
//           </div>
//         )}

//         {post.images && (
//           <div className="grid grid-cols-2 gap-3 mb-4 rounded-2xl overflow-hidden">
//             {post.images.map((image, index) => (
//               <div key={index} className={`h-48 ${image} flex items-center justify-center text-white text-4xl cursor-pointer hover:scale-105 transition-transform`}>
//                 🌱
//               </div>
//             ))}
//           </div>
//         )}
        
//         {post.video && (
//           <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-64 rounded-2xl flex items-center justify-center text-white mb-4 cursor-pointer hover:scale-105 transition-transform">
//             <div className="text-center">
//               <Video className="w-16 h-16 mx-auto mb-2" />
//               <p className="text-lg font-semibold">Watch Full Video</p>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-6">
//             <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-all duration-200 hover:scale-110">
//               <Heart className="w-5 h-5" />
//               <span className="font-semibold">{post.likes}</span>
//             </button>
//             <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-200 hover:scale-110">
//               <MessageSquare className="w-5 h-5" />
//               <span className="font-semibold">{post.comments}</span>
//             </button>
//             <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-all duration-200 hover:scale-110">
//               <Share className="w-5 h-5" />
//               <span className="font-semibold">{post.shares}</span>
//             </button>
//           </div>
//           <div className="flex items-center space-x-2 text-sm text-gray-500">
//             <Eye className="w-4 h-4" />
//             <span>{post.likes + post.comments * 3} views</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
//       {/* Header */}
//       <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <span className="text-white font-bold text-xl">🌾</span>
//               </div>
//               <div>
//                 <h1 className="text-3xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
//                   Farm Chain
//                 </h1>
//                 <p className="text-sm text-gray-600 font-medium">Revolutionizing Agriculture Together</p>
//               </div>
//             </div>
            
//             <div className="flex-1 max-w-2xl mx-8">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search farmers, crops, equipment, tips, locations..."
//                   className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-2xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-700"
//                 />
//                 <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors">
//                   <Filter className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-4">
//               <button className="relative p-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200">
//                 <Bell className="w-6 h-6" />
//                 {notifications > 0 && (
//                   <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
//                     {notifications}
//                   </span>
//                 )}
//               </button>
//               <button className="relative p-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200">
//                 <MessageCircle className="w-6 h-6" />
//                 <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
//               </button>
//               <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:scale-110 transition-transform">
//                 U
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-100 p-6 sticky top-28">
//               <nav className="space-y-3 mb-8">
//                 <TabButton id="dashboard" icon={BarChart3} label="Dashboard" isActive={activeTab === 'dashboard'} onClick={setActiveTab} />
//                 <TabButton id="feed" icon={Home} label="Community Feed" isActive={activeTab === 'feed'} onClick={setActiveTab} />
//                 <TabButton id="marketplace" icon={Store} label="Marketplace" isActive={activeTab === 'marketplace'} onClick={setActiveTab} />
//                 <TabButton id="weather" icon={Cloud} label="Weather Hub" isActive={activeTab === 'weather'} onClick={setActiveTab} />
//                 <TabButton id="messages" icon={MessageCircle} label="Messages" isActive={activeTab === 'messages'} onClick={setActiveTab} badge={5} />
//                 <TabButton id="analytics" icon={TrendingUp} label="Farm Analytics" isActive={activeTab === 'analytics'} onClick={setActiveTab} />
//               </nav>
              
//               <div className="space-y-4">
//                 <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105">
//                   <Plus className="w-5 h-5" />
//                   <span>Create Post</span>
//                 </button>
//                 <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105">
//                   <ShoppingCart className="w-5 h-5" />
//                   <span>List Product</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {activeTab === 'dashboard' && (
//               <div className="space-y-8">
//                 <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-blue-600 rounded-3xl shadow-2xl text-white p-8 relative overflow-hidden">
//                   <div className="absolute inset-0 bg-black/10"></div>
//                   <div className="relative z-10">
//                     <div className="flex items-center justify-between mb-6">
//                       <div>
//                         <h2 className="text-3xl font-black mb-2">Welcome back, Farmer! 🌱</h2>
//                         <p className="text-green-100 text-lg">Your farm is thriving. Here's what's happening today.</p>
//                       </div>
//                       <div className="text-6xl opacity-20">🚜</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//                   {farmingInsights.map((insight, index) => (
//                     <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
//                       <div className="flex items-center justify-between mb-4">
//                         <div className={`p-3 rounded-xl ${
//                           insight.status === 'excellent' ? 'bg-green-100 text-green-600' :
//                           insight.status === 'optimal' ? 'bg-blue-100 text-blue-600' :
//                           insight.status === 'up' ? 'bg-purple-100 text-purple-600' :
//                           'bg-gray-100 text-gray-600'
//                         }`}>
//                           {insight.icon}
//                         </div>
//                         <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
//                           insight.status === 'excellent' ? 'bg-green-100 text-green-700' :
//                           insight.status === 'optimal' ? 'bg-blue-100 text-blue-700' :
//                           insight.status === 'up' ? 'bg-purple-100 text-purple-700' :
//                           'bg-gray-100 text-gray-700'
//                         }`}>
//                           {insight.status.toUpperCase()}
//                         </span>
//                       </div>
//                       <h3 className="text-gray-600 text-sm font-medium mb-2">{insight.title}</h3>
//                       <p className="text-2xl font-black text-gray-900">{insight.value}</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//                     <Zap className="w-7 h-7 mr-3 text-yellow-500" />
//                     Recent Activity
//                   </h3>
//                   <div className="space-y-4">
//                     {posts.slice(0, 2).map((post) => (
//                       <div key={post.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
//                         <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
//                           {post.avatar}
//                         </div>
//                         <div className="flex-1">
//                           <p className="font-semibold text-gray-900">{post.farmer}</p>
//                           <p className="text-gray-600 text-sm truncate">{post.content.substring(0, 60)}...</p>
//                         </div>
//                         <div className="text-sm text-gray-500">{post.time}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'feed' && (
//               <div className="space-y-8">
//                 <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
//                   <div className="flex items-start space-x-4 mb-6">
//                     <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
//                       U
//                     </div>
//                     <div className="flex-1">
//                       <textarea
//                         placeholder="Share your farming insights, ask questions, or showcase your harvest..."
//                         className="w-full bg-gray-50 rounded-2xl px-6 py-4 focus:bg-white focus:ring-2 focus:ring-green-500 transition-all resize-none text-lg"
//                         rows={4}
//                       />
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <div className="flex space-x-4">
//                       <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors px-4 py-2 rounded-xl hover:bg-green-50">
//                         <Camera className="w-5 h-5" />
//                         <span>Photo</span>
//                       </button>
//                       <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-xl hover:bg-blue-50">
//                         <Video className="w-5 h-5" />
//                         <span>Video</span>
//                       </button>
//                       <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors px-4 py-2 rounded-xl hover:bg-purple-50">
//                         <MapPin className="w-5 h-5" />
//                         <span>Location</span>
//                       </button>
//                     </div>
//                     <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
//                       Share Post
//                     </button>
//                   </div>
//                 </div>

//                 <div className="space-y-8">
//                   {posts.map((post) => (
//                     <PostCard key={post.id} post={post} />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeTab === 'messages' && (
//               <div className="space-y-8">
//                 <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-3xl shadow-2xl text-white p-8 relative overflow-hidden">
//                   <div className="absolute inset-0 bg-black/10"></div>
//                   <div className="relative z-10">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h2 className="text-3xl font-black mb-2">Messages 💬</h2>
//                         <p className="text-purple-100 text-lg">Stay connected with the farming community</p>
//                       </div>
//                       <div className="text-6xl opacity-20">📨</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
//                   <div className="p-6 border-b border-gray-100">
//                     <div className="flex items-center justify-between">
//                       <h3 className="text-xl font-bold text-gray-900">Conversations</h3>
//                       <button className="bg-green-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-700 transition-colors">
//                         New Message
//                       </button>
//                     </div>
//                   </div>
//                   <div className="divide-y divide-gray-100">
//                     {messages.map((message) => (
//                       <div key={message.id} className="p-6 hover:bg-gray-50 cursor-pointer transition-colors">
//                         <div className="flex items-center space-x-4">
//                           <div className="relative">
//                             <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
//                               {message.avatar}
//                             </div>
//                             {message.online && (
//                               <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
//                             )}
//                           </div>
//                           <div className="flex-1">
//                             <div className="flex items-center justify-between mb-1">
//                               <h4 className="font-semibold text-gray-900">{message.sender}</h4>
//                               <span className="text-sm text-gray-500">{message.time}</span>
//                             </div>
//                             <p className={`text-sm ${message.unread ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
//                               {message.lastMessage}
//                             </p>
//                           </div>
//                           {message.unread && (
//                             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'marketplace' && (
//               <div className="space-y-8">
//                 <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl text-white p-8 relative overflow-hidden">
//                   <div className="absolute inset-0 bg-black/10"></div>
//                   <div className="relative z-10">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h2 className="text-3xl font-black mb-2">Marketplace</h2>
//                         <p className="text-blue-100 text-lg">Buy, sell, and trade agricultural products</p>
//                       </div>
//                       <div className="text-6xl opacity-20">🏪</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid lg:grid-cols-2 gap-8">
//                   {marketplaceItems.map((item) => (
//                     <div key={item.id} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
//                       <div className={`h-48 ${item.image} flex items-center justify-center text-white text-6xl relative`}>
//                         <div className="absolute inset-0 bg-black/20"></div>
//                         <span className="relative z-10">
//                           {item.category === 'equipment' ? '🚜' : '🌾'}
//                         </span>
//                         {item.certified && (
//                           <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
//                             {item.certified}
//                           </div>
//                         )}
//                       </div>
                      
//                       <div className="p-6">
//                         <div className="flex items-start justify-between mb-4">
//                           <div className="flex-1">
//                             <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
//                             <div className="flex items-center space-x-4 mb-2">
//                               <span className="text-3xl font-black text-green-600">{item.price}</span>
//                               <span className="text-gray-500 text-sm">({item.pricePerUnit})</span>
//                             </div>
//                             {item.quantity && (
//                               <p className="text-gray-600 font-medium">Quantity: {item.quantity}</p>
//                             )}
//                           </div>
//                           <div className="flex items-center space-x-1">
//                             <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                             <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
//                           </div>
//                         </div>
                        
//                         <div className="space-y-3 mb-6">
//                           <div className="flex items-center justify-between text-sm">
//                             <span className="text-gray-500">Seller:</span>
//                             <span className="font-semibold text-gray-900">{item.seller}</span>
//                           </div>
//                           <div className="flex items-center justify-between text-sm">
//                             <span className="text-gray-500">Location:</span>
//                             <span className="font-medium text-gray-700 flex items-center">
//                               <MapPin className="w-4 h-4 mr-1" />
//                               {item.location}
//                             </span>
//                           </div>
//                         </div>
                        
//                         <div className="grid grid-cols-2 gap-3">
//                           <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
//                             <MessageCircle className="w-4 h-4" />
//                             <span>Contact</span>
//                           </button>
//                           <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
//                             <ShoppingCart className="w-4 h-4" />
//                             <span>Buy Now</span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeTab === 'weather' && (
//               <div className="space-y-8">
//                 <div className="bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 rounded-3xl shadow-2xl text-white p-8 relative overflow-hidden">
//                   <div className="absolute inset-0 bg-black/10"></div>
//                   <div className="relative z-10">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h2 className="text-3xl font-black mb-2">Weather Hub</h2>
//                         <p className="text-blue-100 text-lg">Advanced weather insights for smart farming</p>
//                       </div>
//                       <div className="text-right">
//                         <div className="text-5xl font-black mb-2">{weatherData.current.temp}</div>
//                         <p className="text-blue-200">{weatherData.current.condition}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//                     <Calendar className="w-7 h-7 mr-3 text-green-500" />
//                     3-Day Forecast
//                   </h3>
//                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//                     {weatherData.forecast.map((day, index) => (
//                       <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
//                         <div className="font-bold text-lg text-gray-900 mb-3">{day.day}</div>
//                         <div className="flex justify-center mb-4">
//                           {day.icon}
//                         </div>
//                         <div className="text-sm text-gray-600 mb-2">{day.condition}</div>
//                         <div className="font-bold text-lg text-gray-900 mb-2">
//                           <span className="text-xl">{day.high}</span> / <span className="text-gray-600">{day.low}</span>
//                         </div>
//                         <div className="text-xs text-blue-600 font-semibold">
//                           {day.precipitation} rain
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {weatherData.alerts.length > 0 && (
//                   <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//                       <AlertCircle className="w-7 h-7 mr-3 text-orange-500" />
//                       Weather Alerts
//                     </h3>
//                     <div className="space-y-4">
//                       {weatherData.alerts.map((alert, index) => (
//                         <div key={index} className={`p-4 rounded-2xl border-l-4 ${
//                           alert.severity === 'moderate' ? 'bg-orange-50 border-orange-500' :
//                           'bg-blue-50 border-blue-500'
//                         }`}>
//                           <div className="flex items-center space-x-3">
//                             <AlertCircle className={`w-5 h-5 ${
//                               alert.severity === 'moderate' ? 'text-orange-500' : 'text-blue-500'
//                             }`} />
//                             <p className="font-semibold text-gray-900">{alert.message}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

//             {activeTab === 'analytics' && (
//               <div className="space-y-8">
//                 <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-3xl shadow-2xl text-white p-8 relative overflow-hidden">
//                   <div className="absolute inset-0 bg-black/10"></div>
//                   <div className="relative z-10">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h2 className="text-3xl font-black mb-2">Farm Analytics</h2>
//                         <p className="text-purple-100 text-lg">Data-driven insights for better decisions</p>
//                       </div>
//                       <div className="text-6xl opacity-20">📊</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//                   {analyticsData.farmPerformance.map((metric, index) => (
//                     <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
//                       <div className="flex items-center justify-between mb-4">
//                         <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
//                           <BarChart3 className="w-5 h-5" />
//                         </div>
//                         <span className={`text-sm font-semibold ${
//                           metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
//                         }`}>
//                           {metric.change}
//                         </span>
//                       </div>
//                       <h3 className="text-gray-600 text-sm font-medium mb-2">{metric.metric}</h3>
//                       <p className="text-2xl font-black text-gray-900">{metric.value}</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//                     <PieChart className="w-7 h-7 mr-3 text-purple-500" />
//                     Crop Overview
//                   </h3>
//                   <div className="space-y-6">
//                     {analyticsData.cropData.map((crop, index) => (
//                       <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
//                         <div className="flex items-center justify-between mb-4">
//                           <h4 className="text-xl font-bold text-gray-900">{crop.crop}</h4>
//                           <span className="text-2xl font-black text-green-600">{crop.revenue}</span>
//                         </div>
//                         <div className="grid grid-cols-2 gap-4 text-sm">
//                           <div>
//                             <span className="text-gray-500">Planted:</span>
//                             <span className="font-semibold text-gray-900 ml-2">{crop.planted}</span>
//                           </div>
//                           <div>
//                             <span className="text-gray-500">Expected:</span>
//                             <span className="font-semibold text-gray-900 ml-2">{crop.expected}</span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="space-y-6 sticky top-28">
//               <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-xl text-white p-6 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-black/10"></div>
//                 <div className="relative z-10">
//                   <h3 className="font-bold text-lg mb-4 flex items-center">
//                     <Cloud className="w-5 h-5 mr-2" />
//                     Weather Now
//                   </h3>
//                   <div className="text-center">
//                     <div className="text-3xl font-black mb-2">{weatherData.current.temp}</div>
//                     <p className="text-blue-100 text-sm mb-4">{weatherData.current.condition}</p>
//                     <div className="grid grid-cols-2 gap-4 text-sm">
//                       <div>
//                         <Droplets className="w-4 h-4 mx-auto mb-1" />
//                         <div className="font-semibold">{weatherData.current.humidity}</div>
//                       </div>
//                       <div>
//                         <Wind className="w-4 h-4 mx-auto mb-1" />
//                         <div className="font-semibold">{weatherData.current.wind.split(' ')[0]}</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
//                 <h3 className="font-bold text-lg text-gray-900 mb-6 flex items-center">
//                   <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
//                   Market Prices
//                 </h3>
//                 <div className="space-y-4">
//                   {[
//                     { crop: 'Corn', price: '$6.45', change: '+2.3%', status: 'up' },
//                     { crop: 'Soybeans', price: '$14.23', change: '-1.2%', status: 'down' },
//                     { crop: 'Wheat', price: '$8.91', change: '+0.8%', status: 'up' }
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
//                       <div>
//                         <p className="font-semibold text-gray-900">{item.crop}</p>
//                         <p className="text-gray-600 text-sm">per bushel</p>
//                       </div>
//                       <div className="text-right">
//                         <p className="font-bold text-lg text-gray-900">{item.price}</p>
//                         <span className={`text-sm font-semibold ${
//                           item.status === 'up' ? 'text-green-600' : 'text-red-500'
//                         }`}>
//                           {item.change}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FarmChain;