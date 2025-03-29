
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-farm-green text-white py-10 mt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">ФермаЕко</h3>
            <p className="text-sm opacity-90">
              Натуральні фермерські продукти вирощені з любов'ю та турботою про природу.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Навігація</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm opacity-90 hover:opacity-100">Головна</Link></li>
              <li><Link to="/about" className="text-sm opacity-90 hover:opacity-100">Про нас</Link></li>
              <li><Link to="/products" className="text-sm opacity-90 hover:opacity-100">Продукція</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Контакти</h3>
            <p className="text-sm opacity-90 mb-2">Адреса: вул. Фермерська, 123, с. Зелене</p>
            <p className="text-sm opacity-90 mb-2">Телефон: +380 12 345 6789</p>
            <p className="text-sm opacity-90">Email: info@fermaeko.ua</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} ФермаЕко. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
