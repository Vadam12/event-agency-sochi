import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      emoji: "🎂",
      title: "Детские праздники",
      description:
        "Дни рождения, выпускные и тематические вечеринки с аниматорами и развлечениями",
      features: [
        "Профессиональные аниматоры",
        "Игровые программы",
        "Шоу-программы",
        "Тематическое оформление",
      ],
      price: "от 15 000 ₽",
    },
    {
      emoji: "🎨",
      title: "Творческие мастер-классы",
      description:
        "Увлекательные занятия по рисованию, лепке, рукоделию для детей и взрослых",
      features: [
        "Все материалы включены",
        "Опытные мастера",
        "Групповые и индивидуальные",
        "Готовые поделки домой",
      ],
      price: "от 2 500 ₽/чел",
    },
    {
      emoji: "💑",
      title: "Романтические мероприятия",
      description:
        "Свидания, предложения руки и сердца, юбилеи и особенные моменты",
      features: [
        "Индивидуальный сценарий",
        "Декор и флористика",
        "Фото/видеосъемка",
        "Музыкальное сопровождение",
      ],
      price: "от 25 000 ₽",
    },
    {
      emoji: "🎪",
      title: "Корпоративные события",
      description:
        "Тимбилдинги, презентации, корпоративы и деловые мероприятия",
      features: [
        "Event-менеджмент",
        "Техническое оснащение",
        "Кейтеринг",
        "Развлекательная программа",
      ],
      price: "от 50 000 ₽",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Создаем атмосферу праздника и радости для каждого клиента в уютных
            отелях Сочи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.emoji}</div>
                <CardTitle className="text-xl mb-2 text-gray-800">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <div className="text-lg font-bold text-orange-600 mb-4">
                    {service.price}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
                  >
                    Узнать подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
