import { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/ProductCard';
import beamThripalaImage from '@/assets/Products/Beam Thripala.jpg';
import grahaniMandamImage from '@/assets/Products/Grahani Mandam Paniya.jpg';
import ingineeDrinkImage from '@/assets/Products/Inginee Drink.jpg';
import kadarapolaImage from '@/assets/Products/Kadahapola Mularoga Suwaya.jpg';
import naturelleImage from '@/assets/Products/Naturelle Heen Bowitiya.jpg';
import osethmaImage from '@/assets/Products/Osethma Slimin.jpg';
import sansthaImage from '@/assets/Products/Sanstha Peyawa.jpg';
import suensuImage from '@/assets/Products/Suensu Syrup.jpg';
import ukwattageImage from '@/assets/Products/Ukwattage Nethrananda Oil.jpg';
import wickramarachchiImage from '@/assets/Products/Wickramarachchi Oral Care.jpg';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Products', count: 10 },
    { id: 'arishta', name: 'අරිෂ්ට Arishta', count: 1 },
    { id: 'kwatha', name: 'ක්වාථ Kwatha', count: 1 },
    { id: 'watee', name: 'වටි Watee', count: 1 },
    { id: 'gritha', name: 'ග්‍රිථ Gritha', count: 0 },
    { id: 'lepa', name: 'ලේප Lepa', count: 0 },
    { id: 'oils', name: 'තෛල Oil', count: 1 },
    { id: 'rasayana', name: 'රසායන Rasayana', count: 1 },
    { id: 'churna', name: 'චූර්ණ Churna', count: 2 },
    { id: 'company', name: 'Company Products', count: 3 },
  ];

  const products = [
    {
      id: 1,
      name: "Beam Thripala 130 Tabs",
      category: "Churna",
      description: "Premium Ayurvedic tablet blend of three fruits (Triphala) for digestive health, detoxification, and overall wellness",
      benefits: ["Digestive Health", "Detoxification", "Antioxidants", "Immunity"],
      price: 450,
      image: beamThripalaImage,
      isExclusive: false,
    },
    {
      id: 2,
      name: "Denagama Minipura Grahani Mandam Paniya 100ml",
      category: "Kwatha",
      description: "Traditional herbal decoction for digestive disorders and stomach health, specially formulated for gastric issues",
      benefits: ["Digestive Health", "Gastric Relief", "Stomach Care", "Traditional Medicine"],
      price: 350,
      image: grahaniMandamImage,
      isExclusive: false,
    },
    {
      id: 3,
      name: "Inginee Drink 340g",
      category: "Company",
      description: "Premium herbal drink powder with natural ingredients for overall wellness and energy boost",
      benefits: ["Energy Boost", "Natural Ingredients", "Wellness", "Herbal Blend"],
      price: 2760,
      image: ingineeDrinkImage,
      isExclusive: true,
    },
    {
      id: 4,
      name: "Kadahapola Moolaroga Suwaya 375ml",
      category: "Watee",
      description: "Traditional herbal preparation for root-related health issues and overall body wellness",
      benefits: ["Root Health", "Body Wellness", "Traditional Medicine", "Herbal Care"],
      price: 900,
      image: kadarapolaImage,
      isExclusive: false,
    },
    {
      id: 5,
      name: "Naturelle Heen Bowitiya 60 Caps",
      category: "Company",
      description: "Premium herbal capsules for women's health and wellness, specially formulated with natural ingredients",
      benefits: ["Women's Health", "Natural Ingredients", "Wellness", "Herbal Care"],
      price: 790,
      image: naturelleImage,
      isExclusive: true,
    },
    {
      id: 6,
      name: "Osethma Slimin 100 Caps",
      category: "Company",
      description: "Natural weight management capsules with herbal ingredients for healthy weight loss and body toning",
      benefits: ["Weight Management", "Natural Slimming", "Body Toning", "Healthy Lifestyle"],
      price: 2300,
      image: osethmaImage,
      isExclusive: true,
    },
    {
      id: 7,
      name: "Sanstha Peyawa 5g x 10",
      category: "Churna",
      description: "Traditional herbal powder packets for digestive health and stomach comfort",
      benefits: ["Digestive Health", "Stomach Comfort", "Traditional Medicine", "Herbal Powder"],
      price: 400,
      image: sansthaImage,
      isExclusive: false,
    },
    {
      id: 8,
      name: "Suensu Blood Formation Syrup 200ml",
      category: "Rasayana",
      description: "Natural herbal syrup for blood formation and circulation, enriched with iron and essential nutrients",
      benefits: ["Blood Formation", "Iron Rich", "Circulation", "Nutrient Boost"],
      price: 600,
      image: suensuImage,
      isExclusive: false,
    },
    {
      id: 9,
      name: "Ukwattage Nethrananda Hair Oil 100ml",
      category: "Oils",
      description: "Premium herbal hair oil for hair growth, scalp health, and natural hair care",
      benefits: ["Hair Growth", "Scalp Health", "Natural Care", "Herbal Oil"],
      price: 410,
      image: ukwattageImage,
      isExclusive: false,
    },
    {
      id: 10,
      name: "Wickramarachchi Oral Care 200ml",
      category: "Arishta",
      description: "Traditional herbal mouthwash and oral care solution for healthy teeth and gums",
      benefits: ["Oral Health", "Teeth Care", "Gum Health", "Fresh Breath"],
      price: 450,
      image: wickramarachchiImage,
      isExclusive: false,
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           product.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ayur-light-green/70 via-ayur-sage/50 to-ayur-deep-green/40"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-ayur-sage/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-ayur-light-green/40 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-ayur-gold/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-ayur-sage/35 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-ayur-light-green/30 text-ayur-deep-green border-ayur-sage/50 px-6 py-2 backdrop-blur-sm">
              <Grid className="w-4 h-4 mr-2 animate-pulse" />
              Our Products
            </Badge>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-ayur-deep-green">
              Premium Ayurvedic Collection
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-ayur-deep-green/90 leading-relaxed">
              Discover our comprehensive range of authentic Ayurvedic products, carefully crafted 
              using traditional methods and the finest natural ingredients from Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gradient-to-b from-background to-ayur-light-green/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between max-w-6xl mx-auto">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
              <Input
                placeholder="Search products, benefits, or ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 sm:pl-12 h-10 sm:h-12 text-base sm:text-lg border-2 border-border/50 focus:border-primary transition-colors duration-300 rounded-xl"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 h-10 sm:h-12 border-2 border-border/50 focus:border-primary transition-colors duration-300 rounded-xl">
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

              {/* View Mode Toggle */}
              <div className="flex border-2 border-border/50 rounded-xl overflow-hidden">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={`rounded-none h-12 px-4 ${
                    viewMode === 'grid' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-primary/10'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={`rounded-none h-12 px-4 ${
                    viewMode === 'list' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-primary/10'
                  }`}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
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

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {filteredProducts.length} Products Found
              </h2>
              <p className="text-muted-foreground">
                {selectedCategory === 'all' 
                  ? 'Showing all available products' 
                  : `Showing products in ${categories.find(c => c.id === selectedCategory)?.name}`
                }
              </p>
            </div>
            <div className="text-sm text-muted-foreground bg-ayur-light-green/20 px-4 py-2 rounded-lg">
              {viewMode === 'grid' ? 'Grid View' : 'List View'}
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 max-w-5xl mx-auto'
            }`}>
              {filteredProducts.map((product, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 animate-fade-in">
              <div className="w-32 h-32 bg-gradient-to-br from-ayur-light-green/20 to-ayur-sage/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Search className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                No products found
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                We couldn't find any products matching your search criteria. 
                Try adjusting your search terms or filters.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="btn-primary hover-glow"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-24 bg-gradient-to-b from-ayur-light-green/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Product Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our diverse range of Ayurvedic products, organized into traditional categories 
              for easy discovery of the perfect solution for your wellness needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category, index) => (
              <Button
                key={category.id}
                variant="outline"
                className={`h-auto p-8 flex flex-col items-center gap-4 hover-lift transition-all duration-300 rounded-xl border-2 ${
                  selectedCategory === category.id 
                    ? 'border-primary bg-primary/5 text-primary' 
                    : 'border-border/50 hover:border-primary/50 hover:bg-primary/5'
                }`}
                onClick={() => setSelectedCategory(category.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-ayur-sage/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-gradient">{category.name.charAt(0)}</div>
                </div>
                <div className="text-lg font-semibold text-center">{category.name}</div>
                <Badge 
                  variant="secondary" 
                  className={`text-xs px-3 py-1 ${
                    selectedCategory === category.id 
                      ? 'bg-primary/20 text-primary border-primary/30' 
                      : 'bg-ayur-light-green/20 text-ayur-sage border-ayur-sage/30'
                  }`}
                >
                  {category.count} items
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;