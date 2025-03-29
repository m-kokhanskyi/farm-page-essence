
import Hero from "../components/Hero";

const About = () => {
  return (
    <div>
      <Hero 
        title="Про наше господарство" 
        subtitle="Дізнайтеся більше про нашу історію, цінності та методи ведення господарства"
        showButton={false}
        backgroundClass="bg-gradient-to-r from-farm-beige to-farm-lightgreen/20"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Наша історія</h2>
          
          <div className="bg-farm-beige/30 p-8 rounded-lg mb-8">
            <p className="text-lg mb-4">
              Фермерське господарство "ФермаЕко" було засноване у 2010 році сім'єю ентузіастів, які мріяли вирощувати чисті, органічні продукти для своєї родини та спільноти.
            </p>
            <p className="text-lg mb-4">
              Починаючи з невеликої ділянки землі, ми поступово розширювали наше господарство, дотримуючись принципів органічного землеробства та поваги до природних екосистем.
            </p>
            <p className="text-lg">
              Сьогодні "ФермаЕко" — це успішне господарство, що забезпечує місцеву громаду якісними органічними продуктами та сприяє розвитку сталого сільського господарства в Україні.
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Наші цінності</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif mb-4 text-farm-green">Якість та безпека</h3>
              <p>Ми гарантуємо найвищу якість та безпеку наших продуктів, вирощуючи їх без використання хімічних речовин та ГМО.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif mb-4 text-farm-green">Сталий розвиток</h3>
              <p>Ми використовуємо методи, які зберігають та відновлюють природні ресурси, підтримуючи здоров'я ґрунту та біорізноманіття.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif mb-4 text-farm-green">Прозорість</h3>
              <p>Ми відкрито ділимося інформацією про наші методи вирощування та виробництва, будуючи довірчі відносини з нашими клієнтами.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif mb-4 text-farm-green">Місцева спільнота</h3>
              <p>Ми підтримуємо місцеву економіку та сприяємо зміцненню зв'язків у громаді через надання якісних місцевих продуктів.</p>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Наші методи</h2>
          
          <div className="bg-farm-beige/30 p-8 rounded-lg mb-8">
            <p className="text-lg mb-4">
              У нашому господарстві ми використовуємо органічні методи вирощування, які базуються на традиційних знаннях та сучасних екологічних підходах:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Використання натуральних компостів та зелених добрив для живлення ґрунту</li>
              <li>Сівозміна для підтримки здоров'я ґрунту та зменшення кількості шкідників</li>
              <li>Мульчування для збереження вологи та зменшення росту бур'янів</li>
              <li>Біологічні методи контролю шкідників</li>
              <li>Збереження та розширення біорізноманіття</li>
            </ul>
            <p className="text-lg">
              Ми постійно вдосконалюємо наші методи, шукаючи найбільш екологічні та ефективні підходи до вирощування здорових, поживних продуктів.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
