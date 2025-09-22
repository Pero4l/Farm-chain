'use client'
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Play, Users, TrendingUp, Shield, Zap, Globe,
  CheckCircle, Star, MessageCircle, ShoppingCart, Cloud,
  Menu, X, ChevronDown, Award, Heart, Share, Eye
} from 'lucide-react';

const FarmChainLanding = () => {

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({ farmers: 0, trades: 0, communities: 0 });

  // Animate stats counter
  useEffect(() => {
    const animateStats = () => {
      const targetStats = { farmers: 25000, trades: 150000, communities: 500 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let current = { farmers: 0, trades: 0, communities: 0 };
      
      const timer = setInterval(() => {
        current.farmers = Math.min(current.farmers + targetStats.farmers / steps, targetStats.farmers);
        current.trades = Math.min(current.trades + targetStats.trades / steps, targetStats.trades);
        current.communities = Math.min(current.communities + targetStats.communities / steps, targetStats.communities);
        
        setStats({
          farmers: Math.floor(current.farmers),
          trades: Math.floor(current.trades),
          communities: Math.floor(current.communities)
        });

        if (current.farmers >= targetStats.farmers) {
          clearInterval(timer);
        }
      }, increment);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Organic Farm Owner",
      location: "Iowa, USA",
      avatar: "SJ",
      content: "Farm Chain transformed my small organic farm! I've connected with amazing farmers, learned sustainable techniques, and increased my sales by 300% through the marketplace.",
      rating: 5,
      verified: true,
      farmSize: "50 acres"
    },
    {
      name: "Miguel Rodriguez",
      role: "Cooperative Manager",
      location: "Texas, USA", 
      avatar: "MR",
      content: "Managing our 20-farm cooperative became effortless with Farm Chain. The weather alerts saved us from drought damage, and our community sharing increased yields across all farms.",
      rating: 5,
      verified: true,
      farmSize: "Cooperative - 1,200 acres"
    },
    {
      name: "AgriTech Solutions",
      role: "Commercial Farm",
      location: "California, USA",
      avatar: "AS", 
      content: "The analytics and market insights on Farm Chain are game-changing. We optimized our crop planning and connected with suppliers globally, reducing costs by 25%.",
      rating: 5,
      verified: true,
      farmSize: "2,500 acres"
    }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Farming Community",
      description: "Connect with 25,000+ farmers worldwide. Share knowledge, collaborate on projects, and build lasting partnerships.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Smart Marketplace",
      description: "Buy and sell crops, equipment, and services with verified farmers. Advanced filtering and secure transactions.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Weather Intelligence",
      description: "Get hyper-local weather forecasts, alerts, and farming recommendations powered by advanced meteorological data.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Farm Analytics",
      description: "Track yield predictions, market trends, and optimize your farming operations with data-driven insights.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Network",
      description: "Trade with confidence through our verification system. All members are authenticated for security and trust.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Alerts",
      description: "Stay ahead with instant notifications about weather changes, market opportunities, and community updates.",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const plans = [
    {
      name: "Community",
      price: "Free",
      description: "Perfect for small-scale farmers getting started",
      features: [
        "Basic community access",
        "Weather updates",
        "5 marketplace listings/month",
        "Standard support",
        "Mobile app access"
      ],
      color: "border-gray-300",
      buttonColor: "bg-gray-600 hover:bg-gray-700"
    },
    {
      name: "Professional",
      price: "$29/month",
      description: "Ideal for growing farms and cooperatives", 
      features: [
        "Everything in Community",
        "Advanced analytics dashboard",
        "Unlimited marketplace listings",
        "Priority weather alerts",
        "Direct messaging",
        "API access",
        "Priority support"
      ],
      color: "border-green-500 ring-2 ring-green-200",
      buttonColor: "bg-green-600 hover:bg-green-700",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99/month",
      description: "For large commercial operations",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced market insights",
        "White-label options",
        "24/7 phone support",
        "Custom training sessions"
      ],
      color: "border-purple-500",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      {/* <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">🌾</span>
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Farm Chain
                </h1>
                <p className="text-xs text-gray-500 font-medium">Connecting Agriculture</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Features</a>
              <a href="#marketplace" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Marketplace</a>
              <a href="#pricing" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Stories</a>
              <button className="text-gray-700 hover:text-green-600 font-medium transition-colors">Login</button>
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Get Started
              </button>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div> */}

          {/* Mobile Menu */}
          {/* {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#features" className="text-gray-700 hover:text-green-600 font-medium">Features</a>
                <a href="#marketplace" className="text-gray-700 hover:text-green-600 font-medium">Marketplace</a>
                <a href="#pricing" className="text-gray-700 hover:text-green-600 font-medium">Pricing</a>
                <a href="#testimonials" className="text-gray-700 hover:text-green-600 font-medium">Stories</a>
                <button className="text-left text-gray-700 hover:text-green-600 font-medium">Login</button>
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-xl font-semibold w-fit">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </header> */}

      {/* Hero Section */}
      {/* <section className="pt-24 pb-16 relative overflow-hidden"> */}
        {/* Background Elements */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div> */}
        
        {/* Floating Elements */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${20 + Math.random() * 20}px`,
              }}
            >
              {['🌱', '🌾', '🚜', '🌽', '🍃', '☀️', '💧'][Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">
                  <Zap className="w-4 h-4" />
                  <span>Revolutionizing Agriculture</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Connect.
                  <br />
                  <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Trade.
                  </span>
                  <br />
                  Thrive.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Join the world's largest farming community where knowledge flows freely, 
                  trades happen securely, and every harvest brings us closer together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3">
                  <span>Start Growing Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group flex items-center justify-center space-x-3 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold text-lg hover:border-green-500 hover:text-green-600 transition-all duration-300 hover:scale-105">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex -space-x-3">
                  {['SJ', 'MR', 'AS', 'GV', 'TC'].map((avatar, index) => (
                    <div key={index} className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg">
                      {avatar}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-gray-900 font-bold">25,000+ farmers</p>
                  <p className="text-gray-600 text-sm">already growing together</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"> */}
                {/* Mock App Interface */}
                {/* <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        🌾
                      </div>
                      <span className="font-bold">Farm Chain</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">Welcome back, Sarah! 👋</p>
                    <p className="text-green-100">Your farm is thriving</p>
                  </div>
                </div>

                <div className="p-6 space-y-4"> */}
                  {/* Mock Post */}
                  {/* <div className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        MR
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Miguel Rodriguez</p>
                        <p className="text-xs text-gray-500">Texas, USA • 2 hours ago</p>
                      </div>
                    </div>
                    <p className="text-gray-800 mb-3">🌽 Amazing harvest this season! My companion planting technique increased yield by 40%...</p>
                    <div className="flex space-x-4 text-sm">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                        <Heart className="w-4 h-4" />
                        <span>24</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                        <MessageCircle className="w-4 h-4" />
                        <span>8</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                        <Share className="w-4 h-4" />
                        <span>3</span>
                      </button>
                    </div>
                  </div> */}

                  {/* Mock Weather Widget */}
                  {/* <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-4 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg font-bold">74°F</p>
                        <p className="text-sm opacity-90">Partly Cloudy</p>
                      </div>
                      <div className="text-3xl">⛅</div>
                    </div>
                  </div> */}

                  {/* Mock Marketplace Item */}
                  {/* <div className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">Organic Wheat - 2000 lbs</p>
                        <p className="text-green-600 font-bold text-lg">$800</p>
                      </div>
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    </div>
                    <p className="text-sm text-gray-600">Green Valley Farm • Nebraska</p>
                  </div>
                </div>
              </div> */}

              {/* Floating Stats */}
              {/* <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-black text-green-600">98%</p>
                  <p className="text-xs text-gray-600">Success Rate</p>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-black text-blue-600">24/7</p>
                  <p className="text-xs text-gray-600">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      {/* <section id="stats-section" className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-2">
              <p className="text-5xl font-black">{stats.farmers.toLocaleString()}+</p>
              <p className="text-green-100 text-lg font-medium">Active Farmers</p>
              <p className="text-green-200 text-sm">Growing every day</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-black">{stats.trades.toLocaleString()}+</p>
              <p className="text-green-100 text-lg font-medium">Successful Trades</p>
              <p className="text-green-200 text-sm">Trusted marketplace</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-black">{stats.communities}+</p>
              <p className="text-green-100 text-lg font-medium">Communities</p>
              <p className="text-green-200 text-sm">Across 85 countries</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      {/* <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Everything You Need to
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Grow Your Farm
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From community connections to smart trading, Farm Chain provides all the tools 
              modern farmers need to succeed in today's agricultural landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`inline-flex p-4 bg-gradient-to-r ${feature.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Stories from Our
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Growing Community
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real farmers sharing real success stories from around the world.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-12 max-w-4xl mx-auto">
              <div className="flex items-start space-x-6">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  {testimonials[currentTestimonial].verified && (
                    <CheckCircle className="absolute -bottom-2 -right-2 w-6 h-6 text-blue-500 bg-white rounded-full" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                      {testimonials[currentTestimonial].farmSize}
                    </span>
                  </div>
                  <blockquote className="text-xl text-gray-800 leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                    <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Testimonial Indicators */}
            {/* <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-green-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Choose Your
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Growth Plan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and scale as your farm grows. Every plan includes our core community features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-3xl shadow-xl border-2 ${plan.color} p-8 hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'transform scale-105' : 'hover:scale-105'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-black text-gray-900">{plan.price.split('/')[0]}</span>
                    {plan.price.includes('/') && <span className="text-gray-600">/{plan.price.split('/')[1]}</span>}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full ${plan.buttonColor} text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}>
                  {plan.name === 'Community' ? 'Start Free' : 'Start Trial'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black leading-tight">
              Ready to Transform
              <br />
              Your Farm's Future?
            </h2>
            <p className="text-xl lg:text-2xl text-green-100 leading-relaxed">
              Join thousands of farmers who are already growing smarter, trading better, 
              and building stronger communities through Farm Chain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-white text-green-600 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center space-x-3">
                <span>Start Your Journey</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300 hover:scale-110 flex items-center space-x-3">
                <Play className="w-6 h-6 group-hover:scale-125 transition-transform" />
                <span>Schedule Demo</span>
              </button>
            </div>

            <div className="pt-8">
              <p className="text-green-100 mb-4">Trusted by farmers worldwide</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                {['🇺🇸', '🇨🇦', '🇧🇷', '🇦🇺', '🇮🇳', '🇪🇺'].map((flag, index) => (
                  <span key={index} className="text-3xl hover:scale-125 transition-transform cursor-pointer">
                    {flag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.7; }
          50% { transform: translateY(-20px); opacity: 1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FarmChainLanding;