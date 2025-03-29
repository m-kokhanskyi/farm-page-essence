
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const products = [
    {
      name: "Органічні помідори",
      price: 40,
      unit: "кг",
      description: "Соковиті, ароматні помідори вирощені без використання хімічних добрив та пестицидів."
    },
    {
      name: "Органічні огірки",
      price: 35,
      unit: "кг",
      description: "Хрусткі, свіжі огірки вирощені на відкритому ґрунті з використанням органічних методів."
    },
    {
      name: "Молода картопля",
      price: 18,
      unit: "кг",
      description: "Ароматна молода картопля з пісчаного ґрунту, ідеальна для смаження та варіння."
    },
    {
      name: "Зелень (петрушка, кріп, базилік)",
      price: 15,
      unit: "пучок",
      description: "Свіжа ароматна зелень, багата на вітаміни та мінерали."
    },
    {
      name: "Мед натуральний",
      price: 180,
      unit: "л",
      description: "Натуральний мед з власної пасіки, зібраний з різнотрав'я та квітів."
    },
    {
      name: "Яблука",
      price: 25,
      unit: "кг",
      description: "Соковиті, солодкі яблука різних сортів, вирощені без хімічної обробки."
    },
    {
      name: "Молоко коров'яче",
      price: 28,
      unit: "л",
      description: "Свіже молоко від корів, які годуються на натуральних пасовищах."
    },
    {
      name: "Яйця домашні",
      price: 60,
      unit: "10 шт",
      description: "Свіжі яйця від курей, які вільно гуляють та харчуються натуральними кормами."
    },
    {
      name: "Сир домашній",
      price: 90,
      unit: "кг",
      description: "Натуральний домашній сир, виготовлений за традиційним рецептом."
    }
  ];

  const categories = [
    {
      name: "Овочі та фрукти",
      description: "Свіжі сезонні овочі та фрукти, вирощені органічним способом."
    },
    {
      name: "Молочні продукти",
      description: "Натуральні молочні продукти від корів, які пасуться на чистих пасовищах."
    },
    {
      name: "Мед та продукти бджільництва",
      description: "Натуральний мед та інші продукти з власної пасіки."
    }
  ];

  return (
    <div>
      <Hero 
        title="Наша продукція" 
        subtitle="Ознайомтеся з нашим асортиментом свіжих фермерських продуктів"
        showButton={false}
        backgroundClass="bg-gradient-to-r from-farm-beige to-farm-lightgreen/20"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Категорії продукції</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <div key={index} className="bg-farm-beige/30 p-6 rounded-lg text-center">
                <h3 className="text-xl font-serif mb-3">{category.name}</h3>
                <p className="text-farm-gray">{category.description}</p>
              </div>
            ))}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Актуальні ціни</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard 
                key={index}
                name={product.name}
                price={product.price}
                unit={product.unit}
                description={product.description}
              />
            ))}
          </div>
          
          <div className="mt-16 bg-farm-beige/50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-serif mb-4">Замовлення та доставка</h3>
            <p className="mb-4">
              Для замовлення продуктів зв'яжіться з нами за телефоном або електронною поштою.
              Ми здійснюємо доставку по місту та в навколишні населені пункти.
            </p>
            <p className="font-medium">
              Телефон: +380 12 345 6789<br />
              Email: info@fermaeko.ua
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
