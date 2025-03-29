
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  showButton?: boolean;
  backgroundClass?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  showButton = true,
  backgroundClass = "bg-gradient-to-r from-farm-beige to-farm-lightgreen/10"
}: HeroProps) => {
  return (
    <div className={`py-16 md:py-24 ${backgroundClass}`}>
      <div className="container-custom text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-farm-gray">{subtitle}</p>
        
        {showButton && (
          <div className="flex justify-center space-x-4">
            <Link to="/products" className="btn-primary">Наша продукція</Link>
            <Link to="/about" className="btn-secondary">Про нас</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
