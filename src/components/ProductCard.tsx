import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

interface Variant {
  size: string;
  price: number;
}

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  image?: string;
  rating?: number;
  price?: number;
  variants?: Variant[];
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
  variants,
  isExclusive = false 
}: ProductCardProps) => {

  const [showFullDescription, setShowFullDescription] = useState(false);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    variants ? variants[0] : null
  );

  const handleCardClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();

    const finalPrice = selectedVariant ? selectedVariant.price : price;

    if (finalPrice) {
      addToCart({
        id,
        name: selectedVariant ? `${name} (${selectedVariant.size})` : name,
        price: finalPrice,
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
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/20 to-ayur-sage/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl sm:text-3xl font-bold text-primary">{name.charAt(0)}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">{category}</p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {isExclusive && (
          <Badge className="absolute top-3 right-3 bg-gradient-to-r from-ayur-gold to-ayur-warm-gold text-white shadow-lg font-semibold">
            <Star className="w-3 h-3 mr-1" />
            Exclusive
          </Badge>
        )}

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

          <div className="flex items-center gap-1 sm:gap-2 bg-yellow-100 px-2 sm:px-3 py-1 sm:py-2 rounded-full border-2 border-yellow-300">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-500 text-yellow-500" />
            <span className="text-sm sm:text-base font-black text-gray-900">{rating}</span>
          </div>
        </div>

        <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl text-black group-hover:text-green-700 transition-all duration-300 leading-tight">
          {name}
        </h3>
      </CardHeader>

      <CardContent className="space-y-4 sm:space-y-5 p-4 sm:p-6 pt-0 bg-white">

        <p className={`text-sm sm:text-base text-black leading-relaxed font-medium ${
          showFullDescription ? 'line-clamp-none' : 'line-clamp-2'
        }`}>
          {description}
        </p>

        {/* Benefits */}
        <div className="space-y-2 sm:space-y-3">
          <p className="text-xs sm:text-sm font-black text-black uppercase tracking-wide">Key Benefits:</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {benefits.slice(0, showFullDescription ? benefits.length : 3).map((benefit, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-4 bg-green-100 border-2 border-green-300 text-green-900 font-bold"
              >
                {benefit}
              </Badge>
            ))}

            {!showFullDescription && benefits.length > 3 && (
              <Badge 
                variant="outline" 
                className="text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-4 bg-yellow-100 border-2 border-yellow-300 text-yellow-900 font-bold"
              >
                +{benefits.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Variant Selector */}
        {variants && (
          <div className="flex gap-2 flex-wrap">
            {variants.map((variant, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVariant(variant);
                }}
                className={`px-3 py-1 rounded-lg border text-sm font-semibold ${
                  selectedVariant?.size === variant.size
                    ? "bg-green-600 text-white border-green-600"
                    : "border-gray-300"
                }`}
              >
                {variant.size}
              </button>
            ))}
          </div>
        )}

        {/* Price */}
        {(price || selectedVariant) && (
          <div className="flex items-center justify-between pt-3 sm:pt-4 border-t-2 border-gray-300">
            <span className="text-2xl sm:text-3xl font-black text-green-700">
              Rs. {(selectedVariant ? selectedVariant.price : price)?.toLocaleString()}
            </span>
            <div className="text-xs sm:text-sm text-gray-600 font-semibold">per unit</div>
          </div>
        )}

      </CardContent>

      <CardFooter className="flex gap-3 sm:gap-4 p-4 sm:p-6 pt-0 bg-white">
        <Button 
          size="lg" 
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-black text-base sm:text-lg shadow-xl"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
          Add to Cart
        </Button>

        <Button 
          variant="outline" 
          size="lg" 
          className="border-3 border-gray-400 hover:border-green-600 hover:bg-green-50 text-black hover:text-green-700 font-black"
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
