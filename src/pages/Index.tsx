import { useState, useEffect } from 'react';
import { ArrowRight, Star, Leaf, Shield, Award, MapPin, Phone, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-ayurveda.jpg';
import productsImage from '@/assets/products-hero.jpg';
import heroImage1 from '@/assets/heroimage2new.png';
import heroImage2 from '@/assets/heroimage3new.png';
import heroImage3 from '@/assets/heroimagenew4.png';
import beamThripalaImage from '@/assets/Products/Beam Thripala.jpg';
import ingineeDrinkImage from '@/assets/Products/Inginee Drink.jpg';
import naturelleImage from '@/assets/Products/Naturelle Heen Bowitiya.jpg';
import TrustedPartners from '@/components/TrustedPartners';

const Index = () => {
  const navigate = useNavigate();

  const goToBranches = () => {
    navigate('/branches');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const goToAbout = () => {
    navigate('/about');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const goToProducts = () => {
    navigate('/products');
    // Scroll to products grid section after navigation
    setTimeout(() => {
      const productsGrid = document.getElementById('products-grid');
      if (productsGrid) {
        productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // If element not found, try again after a longer delay
        setTimeout(() => {
          const retryGrid = document.getElementById('products-grid');
          if (retryGrid) {
            retryGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 500);
      }
    }, 200);
  };
  
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselImages = [
    { src: heroImage, alt: "Authentic Ayurvedic Herbs and Medicine" },
    { src: heroImage1, alt: "Premium Ayurvedic Products Collection" },
    { src: heroImage2, alt: "Traditional Herbal Remedies and Oils" },
    { src: heroImage3, alt: "Natural Wellness and Healing Products" }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);

  // Navigation functions
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch support for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const featuredProducts = [
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
      id: 5,
      name: "Naturelle Heen Bowitiya 60 Caps",
      category: "Company",
      description: "Premium herbal capsules for women's health and wellness, specially formulated with natural ingredients",
      benefits: ["Women's Health", "Natural Ingredients", "Wellness", "Herbal Care"],
      price: 790,
      image: naturelleImage,
      isExclusive: true,
    },
  ];

  const highlights = [
    { icon: Award, title: "80+ Years", subtitle: "Of Trust & Excellence" },
    { icon: Users, title: "100+", subtitle: "Skilled Employees" },
    { icon: MapPin, title: "8+", subtitle: "Outlets Across Sri Lanka" },
    { icon: Shield, title: "100%", subtitle: "Authentic Products" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Container */}
        <div 
          className="relative w-full h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Image Slides */}
          <div className="relative w-full h-screen overflow-hidden">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image.src})` }}
                >
                </div>
              </div>
            ))}
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Chakra Shape 1 */}
            <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 animate-float">
              <img 
                src="/src/assets/chakra-removebg-preview.png" 
                alt="Floating chakra" 
                className="w-full h-full object-contain opacity-20 hover:opacity-30 transition-opacity duration-300"
              />
            </div>
            
            {/* Chakra Shape 2 */}
            <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 animate-float" style={{ animationDelay: '1s' }}>
              <img 
                src="/src/assets/chakra-removebg-preview.png" 
                alt="Floating chakra" 
                className="w-full h-full object-contain opacity-30 hover:opacity-40 transition-opacity duration-300"
              />
            </div>
            
            {/* Chakra Shape 3 */}
            <div className="absolute bottom-20 sm:bottom-40 left-4 sm:left-20 w-8 h-8 sm:w-12 sm:h-12 animate-float" style={{ animationDelay: '2s' }}>
              <img 
                src="/src/assets/chakra-removebg-preview.png" 
                alt="Floating chakra" 
                className="w-full h-full object-contain opacity-25 hover:opacity-35 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-ayur-gold scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 animate-fade-in">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6">
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-ayur-sage rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <highlight.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <div className="text-lg sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">
                    {highlight.title}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {highlight.subtitle}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <Badge className="mb-4 bg-secondary text-secondary-foreground text-sm">
              <Star className="w-4 h-4 mr-2" />
              Featured Products
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Premium Ayurvedic Collection
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of authentic Ayurvedic products, 
              crafted using traditional methods and the finest natural ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {featuredProducts.map((product, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="hover:bg-primary hover:text-primary-foreground"
              onClick={goToProducts}
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="relative py-20 bg-gradient-to-br from-ayur-light-green/60 via-ayur-sage/40 to-ayur-deep-green/30 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-32 h-32 bg-ayur-sage/30 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-ayur-light-green/40 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-ayur-gold/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-ayur-sage/35 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
            <div>
              <Badge className="mb-6 bg-ayur-light-green/30 text-ayur-deep-green border-ayur-sage/50 px-6 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ayur-deep-green">
                80+ Years of Ayurvedic Excellence in Sri Lanka
              </h2>
              <p className="text-lg text-ayur-deep-green/90 mb-6 leading-relaxed">
                Founded in 1944, S.H.G. Hela Osu has grown from a small Ayurvedic pharmacy to 
                Sri Lanka's trusted leader in authentic herbal products. Our commitment to quality, 
                tradition, and customer well-being drives everything we do.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-ayur-gold rounded-full"></div>
                  <span className="text-ayur-deep-green font-medium">100% authentic Ayurvedic formulations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-ayur-gold rounded-full"></div>
                  <span className="text-ayur-deep-green font-medium">Expanding to 40 outlets in Colombo region</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-ayur-gold rounded-full"></div>
                  <span className="text-ayur-deep-green font-medium">ISO certified manufacturing processes</span>
                </div>
              </div>
              <Button 
                className="bg-gradient-to-r from-ayur-sage to-ayur-deep-green hover:shadow-xl text-white px-8 py-4 text-lg"
                onClick={goToAbout}
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={productsImage} 
                alt="Ayurvedic Products" 
                className="w-full h-96 object-cover rounded-lg shadow-xl border-4 border-ayur-sage/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ayur-deep-green/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-gradient-to-b from-background to-ayur-light-green/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Find Us on the Map
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Locate our head office and all branch locations easily with our interactive map
            </p>
          </div>

          <div className="mb-16 animate-fade-in">
            <Card className="overflow-hidden shadow-2xl border-2 border-ayur-sage/20">
              <div className="relative">
                {/* Map Container */}
                <div className="w-full h-96 bg-gradient-to-br from-ayur-light-green/20 to-ayur-sage/10 flex items-center justify-center relative">
                  {/* Map Placeholder with Google Maps Integration */}
                  <div className="w-full h-full relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d79.8760997!3d6.9019249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMDYuOSJOIDc5wrA1MiczOS45IkU!5e0!3m2!1sen!2slk!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  
                  {/* Map Overlay with Action Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 right-4 pointer-events-auto">
                    <Button
                      onClick={() => window.open('https://www.google.com/maps/search/shg+hela+osu/@6.9019249,79.8760997,12.18z?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                      className="bg-white text-ayur-deep-green hover:bg-ayur-light-green hover:text-ayur-deep-green shadow-xl font-semibold px-6 py-3"
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        </section>

        {/* Trusted Partners */}
        <TrustedPartners />

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary to-ayur-deep-green text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Visit our outlets, consult with our experts, and discover the perfect Ayurvedic 
            solutions for your health and wellness needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-ayur-gold text-accent-foreground hover:bg-accent hover:shadow-xl"
              onClick={() => window.location.href = 'tel:+94112545497'}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call 0112 545 497
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-ayur-deep-green border-2 border-white hover:bg-ayur-light-green hover:text-ayur-deep-green hover:border-ayur-light-green shadow-xl font-semibold"
              onClick={goToBranches}
            >
              <MapPin className="mr-2 w-5 h-5" />
              Find Nearest Branch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;