import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../contexts/CartContext';
import shgLogo from '@/assets/shg-logo-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useCart();

  // Function to navigate and scroll to top
  const navigateToPage = (path: string) => {
    navigate(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Function to navigate to products and scroll to products grid
  const navigateToProducts = () => {
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

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Branches', href: '/branches' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={`${shgLogo}?v=${Date.now()}`} 
              alt="S.H.G. Hela Osu - Ayurvedic Products" 
              className="h-14 sm:h-16 lg:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateToPage(item.href)}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-primary group ${
                  isActive(item.href) 
                    ? 'text-primary' 
                    : 'text-foreground hover:scale-105'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-ayur-sage transition-all duration-300 group-hover:w-full ${
                  isActive(item.href) ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-3">
            <Button 
              size="sm" 
              className="btn-gold hover-glow group text-xs lg:text-sm px-2 lg:px-4 relative"
              onClick={() => navigateToPage('/cart')}
            >
              <ShoppingCart className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2 group-hover:animate-bounce" />
              <span className="hidden lg:inline">Cart</span>
              <span className="lg:hidden">Cart</span>
              {state.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {state.totalItems}
                </span>
              )}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="btn-outline hover-lift text-xs lg:text-sm px-2 lg:px-4"
              onClick={() => navigateToPage('/branches')}
            >
              <MapPin className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">Find Branch</span>
              <span className="lg:hidden">Branches</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:bg-ayur-gold/10 hover:text-ayur-gold transition-all duration-300 p-2"
            >
              <User className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden hover:bg-primary/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-border/50 bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigateToPage(item.href);
                    setIsMenuOpen(false);
                  }}
                  className={`text-base font-medium transition-all duration-300 hover:text-primary px-4 py-3 rounded-lg hover:bg-primary/5 ${
                    isActive(item.href) 
                      ? 'text-primary bg-gradient-to-r from-primary/10 to-ayur-sage/10 border-l-4 border-primary' 
                      : 'text-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/50 mt-4">
                <Button 
                  size="lg" 
                  className="btn-gold hover-glow text-base py-3 relative"
                  onClick={() => {
                    navigateToPage('/cart');
                    setIsMenuOpen(false);
                  }}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Cart
                  {state.totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                      {state.totalItems}
                    </span>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="btn-outline hover-lift text-base py-3"
                  onClick={() => {
                    navigateToPage('/branches');
                    setIsMenuOpen(false);
                  }}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Find Branch
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="hover:bg-ayur-gold/10 hover:text-ayur-gold transition-all duration-300 text-base py-3"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <User className="w-5 h-5 mr-2" />
                  Account
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;