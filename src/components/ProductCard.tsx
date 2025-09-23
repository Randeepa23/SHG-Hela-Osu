import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Info, Eye } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  image?: string;
  rating?: number;
  price?: number;
  isExclusive?: boolean;
}

const ProductCard = ({ 
  id,
  name, 
  category, 
  description, 
  benefits, 
  image, 
  rating = 4.8, 
  price,
  isExclusive = false 
}: ProductCardProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { addToCart } = useCart();

  const handleCardClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (price) {
      addToCart({
        id,
        name,
        price,
        image: image || '',
        category,
      });
    }
  };

  return (
    <Card 
      className="group bg-white border-2 border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden bg-white">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 sm:h-64 object-contain bg-white group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-ayur-sage/20 to-secondary/40 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/20 to-ayur-sage/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl font-bold text-primary">{name.charAt(0)}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">{category}</p>
            </div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {isExclusive && (
          <Badge className="absolute top-3 right-3 bg-gradient-to-r from-ayur-gold to-ayur-warm-gold text-white shadow-lg animate-glow font-semibold">
            <Star className="w-3 h-3 mr-1" />
            Exclusive
          </Badge>
        )}

        {/* Quick view button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="sm" 
            className="bg-ayur-gold hover:bg-ayur-warm-gold text-white font-semibold shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              setShowFullDescription(!showFullDescription);
            }}
          >
            <Eye className="w-4 h-4 mr-2" />
            {showFullDescription ? 'Hide Details' : 'View Details'}
          </Button>
        </div>
      </div>

      <CardHeader className="space-y-3 sm:space-y-4 p-4 sm:p-6 bg-white">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs sm:text-sm font-bold bg-green-200 text-green-900 border-2 border-green-300 px-3 sm:px-4 py-1 sm:py-2">
            {category}
          </Badge>
          {rating && (
            <div className="flex items-center gap-1 sm:gap-2 bg-yellow-100 px-2 sm:px-3 py-1 sm:py-2 rounded-full border-2 border-yellow-300">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-500 text-yellow-500" />
              <span className="text-sm sm:text-base font-black text-gray-900">{rating}</span>
            </div>
          )}
        </div>
        <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl text-black group-hover:text-green-700 transition-all duration-300 leading-tight">
          {name}
        </h3>
      </CardHeader>

      <CardContent className="space-y-4 sm:space-y-5 p-4 sm:p-6 pt-0 bg-white">
        <p className={`text-sm sm:text-base text-black leading-relaxed font-medium transition-all duration-300 ${
          showFullDescription ? 'line-clamp-none' : 'line-clamp-2'
        }`}>
          {description}
        </p>
        
        <div className="space-y-2 sm:space-y-3">
          <p className="text-xs sm:text-sm font-black text-black uppercase tracking-wide">Key Benefits:</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {showFullDescription ? (
              // Show all benefits when expanded
              benefits.map((benefit, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-4 bg-green-100 border-2 border-green-300 text-green-900 hover:bg-green-200 transition-colors duration-300 font-bold"
                >
                  {benefit}
                </Badge>
              ))
            ) : (
              // Show limited benefits when collapsed
              <>
                {benefits.slice(0, 3).map((benefit, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-4 bg-green-100 border-2 border-green-300 text-green-900 hover:bg-green-200 transition-colors duration-300 font-bold"
                  >
                    {benefit}
                  </Badge>
                ))}
                {benefits.length > 3 && (
                  <Badge 
                    variant="outline" 
                    className="text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-4 bg-yellow-100 border-2 border-yellow-300 text-yellow-900 font-bold"
                  >
                    +{benefits.length - 3} more
                  </Badge>
                )}
              </>
            )}
          </div>
        </div>

        {price && (
          <div className="flex items-center justify-between pt-3 sm:pt-4 border-t-2 border-gray-300">
            <span className="text-2xl sm:text-3xl font-black text-green-700">Rs. {price.toLocaleString()}</span>
            <div className="text-xs sm:text-sm text-gray-600 font-semibold">per unit</div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex gap-3 sm:gap-4 p-4 sm:p-6 pt-0 bg-white">
        <Button 
          size="lg" 
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-black text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group py-2 sm:py-3"
          onClick={handleAddToCart}
          disabled={!price}
        >
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:animate-bounce" />
          <span className="hidden sm:inline">Add to Cart</span>
          <span className="sm:hidden">Add</span>
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="border-3 border-gray-400 hover:border-green-600 hover:bg-green-50 text-black hover:text-green-700 font-black text-base sm:text-lg transition-all duration-300 py-2 sm:py-3 px-3 sm:px-4"
          onClick={(e) => {
            e.stopPropagation();
            setShowFullDescription(!showFullDescription);
          }}
        >
          <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;