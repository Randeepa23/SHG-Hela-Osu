import { useState } from 'react';
import { Search, Calendar, User, ArrowRight, BookOpen, Leaf, Heart, Brain, Shield, X, Clock, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Import blog images
import beamKushmandaRasayanaya from '@/assets/blog/Beam Kushmanda Rasayanaya.jpg';
import beamThripalaJuly2025 from '@/assets/blog/Beam Thripala July2025.jpg';
import binaraPoya2025LiaIncense from '@/assets/blog/BinaraPoya 2025 Lia Incense.jpg';
import ituraAugust2025 from '@/assets/blog/Itura August 2025 18.jpg';
import ituraSept2025 from '@/assets/blog/Itura Sept 2025 19.jpg';
import jeeviHeenBovitiyaSep2025 from '@/assets/blog/Jeevi Heen Bovitiya Sep2025.jpg';
import kadahapolaMoolaRogaSuwayaJuly2025 from '@/assets/blog/Kadahapola Moola Roga Suwaya July2025.jpg';
import nuwaraOsuUndugowwaSuwayaAug2025 from '@/assets/blog/NuwaraOsu Undugowwa Suwaya Aug2025.jpg';
import swasthaAmurthaNEW from '@/assets/blog/Swastha Amurtha NEW .jpg';
import vendolKesharajaOilSep2025 from '@/assets/blog/Vendol Kesharaja Oil Sep2025.jpg';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', count: 10 },
    { id: 'ayurveda', name: 'Ayurveda Basics', count: 3 },
    { id: 'herbs', name: 'Herbs & Ingredients', count: 4 },
    { id: 'wellness', name: 'Wellness Tips', count: 2 },
    { id: 'recipes', name: 'Recipes', count: 1 },
    { id: 'lifestyle', name: 'Lifestyle', count: 0 },
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "Beam Kushmanda Rasayanaya: The Power of Pumpkin Seed Medicine",
      excerpt: "Discover the incredible health benefits of Kushmanda Rasayanaya, a traditional Ayurvedic formulation that promotes digestive health and vitality.",
      category: "ayurveda",
      author: "Dr. Priya Fernando",
      date: "2024-09-15",
      readTime: "12 min read",
      image: beamKushmandaRasayanaya,
      featured: true,
      tags: ["Kushmanda", "Ayurveda", "Digestive Health"],
    },
    {
      id: 2,
      title: "Beam Thripala: The Ultimate Ayurvedic Digestive Formula",
      excerpt: "Learn about the powerful combination of three fruits in Thripala and how this ancient formula supports digestive wellness and detoxification.",
      category: "herbs",
      author: "Dr. Rajesh Kumar",
      date: "2024-07-20",
      readTime: "10 min read",
      image: beamThripalaJuly2025,
      featured: true,
      tags: ["Thripala", "Digestion", "Detox"],
    },
    {
      id: 3,
      title: "Binara Poya 2025: Sacred Incense for Spiritual Wellness",
      excerpt: "Explore the spiritual and therapeutic benefits of traditional Lia incense used during Binara Poya celebrations for meditation and purification.",
      category: "wellness",
      author: "Dr. Anjali Perera",
      date: "2024-09-10",
      readTime: "8 min read",
      image: binaraPoya2025LiaIncense,
      featured: true,
      tags: ["Incense", "Spirituality", "Meditation"],
    },
  ];

  const regularArticles = [
    {
      id: 4,
      title: "Itura Ayurvedic Medicine: Traditional Healing Excellence",
      excerpt: "Explore the therapeutic benefits of Itura's premium Ayurvedic formulations designed to promote holistic health and wellness.",
      category: "ayurveda",
      author: "Dr. Priya Fernando",
      date: "2024-08-18",
      readTime: "7 min read",
      image: ituraAugust2025,
      featured: false,
      tags: ["Itura", "Traditional Medicine", "Wellness"],
    },
    {
      id: 5,
      title: "Itura September 2025: Advanced Ayurvedic Solutions",
      excerpt: "Discover the latest innovations in Ayurvedic medicine with Itura's September 2025 collection of natural healing products.",
      category: "herbs",
      author: "Dr. Rajesh Kumar",
      date: "2024-09-19",
      readTime: "6 min read",
      image: ituraSept2025,
      featured: false,
      tags: ["Innovation", "Natural Healing", "Modern Ayurveda"],
    },
    {
      id: 6,
      title: "Jeevi Heen Bovitiya: Natural Respiratory Wellness",
      excerpt: "Learn about the powerful benefits of Jeevi Heen Bovitiya for respiratory health and breathing comfort using traditional Ayurvedic principles.",
      category: "herbs",
      author: "Dr. Anjali Perera",
      date: "2024-09-25",
      readTime: "8 min read",
      image: jeeviHeenBovitiyaSep2025,
      featured: false,
      tags: ["Respiratory Health", "Breathing", "Natural Relief"],
    },
    {
      id: 7,
      title: "Kadahapola Moola Roga Suwaya: Root Cause Healing",
      excerpt: "Understanding the traditional Ayurvedic approach to treating root causes of illness with Kadahapola's specialized formulation.",
      category: "ayurveda",
      author: "Dr. Priya Fernando",
      date: "2024-07-15",
      readTime: "9 min read",
      image: kadahapolaMoolaRogaSuwayaJuly2025,
      featured: false,
      tags: ["Root Cause", "Healing", "Traditional Treatment"],
    },
    {
      id: 8,
      title: "Nuwara Osu Undugowwa Suwaya: Mountain Herb Medicine",
      excerpt: "Discover the healing power of mountain herbs with Nuwara Osu's Undugowwa Suwaya for digestive wellness and vitality.",
      category: "herbs",
      author: "Dr. Rajesh Kumar",
      date: "2024-08-30",
      readTime: "6 min read",
      image: nuwaraOsuUndugowwaSuwayaAug2025,
      featured: false,
      tags: ["Mountain Herbs", "Digestive Health", "Vitality"],
    },
    {
      id: 9,
      title: "Swastha Amurtha: The Elixir of Natural Health",
      excerpt: "Explore the rejuvenating properties of Swastha Amurtha, a traditional Ayurvedic tonic for overall health and longevity.",
      category: "wellness",
      author: "Dr. Anjali Perera",
      date: "2024-09-05",
      readTime: "8 min read",
      image: swasthaAmurthaNEW,
      featured: false,
      tags: ["Elixir", "Rejuvenation", "Longevity"],
    },
    {
      id: 10,
      title: "Vendol Kesharaja Oil: Premium Hair Care Solution",
      excerpt: "Learn about the nourishing benefits of Vendol Kesharaja Oil for healthy hair growth and scalp wellness using Ayurvedic principles.",
      category: "herbs",
      author: "Dr. Priya Fernando",
      date: "2024-09-22",
      readTime: "7 min read",
      image: vendolKesharajaOilSep2025,
      featured: false,
      tags: ["Hair Care", "Scalp Health", "Natural Oil"],
    },
  ];

  const allArticles = [...featuredArticles, ...regularArticles];

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ayurveda': return BookOpen;
      case 'herbs': return Leaf;
      case 'wellness': return Heart;
      case 'recipes': return Brain;
      case 'lifestyle': return Shield;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ayurveda': return 'from-primary/20 to-ayur-sage/20 text-primary';
      case 'herbs': return 'from-ayur-light-green/20 to-ayur-sage/20 text-ayur-deep-green';
      case 'wellness': return 'from-ayur-gold/20 to-ayur-warm-gold/20 text-ayur-gold';
      case 'recipes': return 'from-ayur-sage/20 to-ayur-light-green/20 text-ayur-sage';
      case 'lifestyle': return 'from-ayur-deep-green/20 to-primary/20 text-ayur-deep-green';
      default: return 'from-primary/20 to-ayur-sage/20 text-primary';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ayur-light-green/70 via-ayur-sage/50 to-ayur-deep-green/40"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-ayur-sage/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-ayur-light-green/40 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-ayur-gold/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <Badge className="mb-8 bg-ayur-light-green/30 text-ayur-deep-green border-ayur-sage/50 px-6 py-2 text-sm font-medium backdrop-blur-sm">
              <BookOpen className="w-4 h-4 mr-2 animate-pulse" />
              Knowledge Hub
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-ayur-deep-green">
              Ayurvedic 
              <span className="block text-ayur-gold">Wisdom & Wellness</span>
            </h1>
            <p className="text-xl md:text-2xl text-ayur-deep-green/90 leading-relaxed max-w-4xl mx-auto">
              Discover the ancient wisdom of Ayurveda through our comprehensive collection of articles, 
              guides, and insights to enhance your health and well-being journey.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gradient-to-b from-background to-ayur-light-green/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between max-w-6xl mx-auto animate-fade-in">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
              <Input
                placeholder="Search articles, topics, or ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 sm:pl-12 h-10 sm:h-12 text-base sm:text-lg border-2 border-border/50 focus:border-primary transition-colors duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 h-10 sm:h-12 border-2 border-border/50 focus:border-primary transition-colors duration-300">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex items-center gap-3 mt-6 max-w-6xl mx-auto">
            {selectedCategory !== 'all' && (
              <Badge 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary/10 transition-colors duration-300 px-4 py-2" 
                onClick={() => setSelectedCategory('all')}
              >
                {categories.find(c => c.id === selectedCategory)?.name} ×
              </Badge>
            )}
            {searchTerm && (
              <Badge 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary/10 transition-colors duration-300 px-4 py-2" 
                onClick={() => setSearchTerm('')}
              >
                "{searchTerm}" ×
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Featured Articles - Image Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular and insightful articles to help you on your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
            {featuredArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="group hover-lift animate-fade-in overflow-hidden cursor-pointer bg-white border-2 border-gray-100 hover:border-ayur-sage/50 hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open('https://web.facebook.com/shghelaosu/photos', '_blank')}
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-ayur-light-green/20 to-ayur-sage/10 flex items-center justify-center">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-ayur-gold to-ayur-warm-gold text-white px-3 py-1 text-xs font-bold shadow-lg">
                      Featured
                    </Badge>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-semibold">View on Facebook</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-gradient-to-b from-ayur-light-green/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              All Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our complete collection of Ayurvedic knowledge and wellness insights
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArticles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className="group hover-lift animate-fade-in overflow-hidden cursor-pointer bg-white border-2 border-gray-100 hover:border-ayur-sage/50 hover:shadow-2xl transition-all duration-500"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => window.open('https://web.facebook.com/shghelaosu/photos', '_blank')}
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 bg-gradient-to-br from-ayur-light-green/20 to-ayur-sage/10 flex items-center justify-center">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Featured Badge */}
                    {article.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-gradient-to-r from-ayur-gold to-ayur-warm-gold text-white px-2 py-1 text-xs font-bold shadow-lg">
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="text-center text-white">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-1">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                        <p className="text-xs font-semibold">View on Facebook</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="btn-primary"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Blog;