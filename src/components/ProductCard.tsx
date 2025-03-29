
interface ProductProps {
  name: string;
  price: number;
  unit: string;
  description: string;
}

const ProductCard = ({ name, price, unit, description }: ProductProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-[1.02]">
      <h3 className="text-xl font-serif font-medium mb-2">{name}</h3>
      <div className="bg-farm-beige inline-block px-3 py-1 rounded text-farm-brown font-medium mb-4">
        {price} грн / {unit}
      </div>
      <p className="text-farm-gray">{description}</p>
    </div>
  );
};

export default ProductCard;
