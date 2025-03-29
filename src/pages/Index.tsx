
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { Leaf, Package, TreePine } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-farm-green" />,
      title: "Органічні продукти",
      description: "Наші продукти вирощені без використання хімічних добрив та пестицидів."
    },
    {
      icon: <Package className="h-10 w-10 text-farm-green" />,
      title: "Свіжість та якість",
      description: "Ми пропонуємо тільки свіжі сезонні продукти найвищої якості."
    },
    {
      icon: <TreePine className="h-10 w-10 text-farm-green" />,
      title: "Екологічне господарство",
      description: "Наше господарство працює за принципами сталого розвитку та турботи про природу."
    }
  ];

  return (
    <div>
      <Hero 
        title="Свіжі фермерські продукти" 
        subtitle="Ми вирощуємо найкращі органічні продукти з любов'ю до землі та турботою про ваше здоров'я"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Чому обирають нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-farm-beige/30">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                <p className="text-farm-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-farm-green/10 to-farm-beige/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Наші сезонні продукти</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-farm-gray">
            Кожного сезону ми пропонуємо різноманітні свіжі овочі, фрукти та інші фермерські продукти.
          </p>
          <Link to="/products" className="btn-primary">Переглянути продукцію</Link>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Про наше господарство</h2>
              <p className="text-farm-gray mb-4">
                Наше фермерське господарство засноване на принципах сталого землеробства та поваги до природи. Ми вирощуємо продукти, які не тільки смачні, але й корисні для вашого здоров'я.
              </p>
              <p className="text-farm-gray mb-6">
                Ми не використовуємо хімічні добрива та пестициди, віддаючи перевагу традиційним методам вирощування та захисту рослин.
              </p>
              <Link to="/about" className="btn-secondary">Дізнатися більше</Link>
            </div>
            <div className="md:w-5/12 bg-farm-beige h-64 rounded-lg flex items-center justify-center">
              <p className="text-farm-brown font-serif text-xl">Фото господарства</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
