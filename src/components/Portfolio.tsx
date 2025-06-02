import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const events = [
    {
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=300&fit=crop",
      title: "День рождения в отеле Radisson",
      category: "Детский праздник",
    },
    {
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=300&fit=crop",
      title: "Мастер-класс по керамике",
      category: "Творческое занятие",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=300&fit=crop",
      title: "Корпоратив в Swissotel",
      category: "Деловое мероприятие",
    },
    {
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500&h=300&fit=crop",
      title: "Романтический ужин на террасе",
      category: "Романтика",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      title: "Семейный праздник",
      category: "Семейное торжество",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&h=300&fit=crop",
      title: "Творческая вечеринка",
      category: "Мастер-класс",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Портфолио наших работ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Посмотрите, как мы создаем незабываемые моменты для наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm text-orange-300 mb-2 font-medium">
                    {event.category}
                  </div>
                  <h3 className="text-lg font-bold">{event.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
          >
            Посмотреть все работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
