import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const serviceGroups = [
    {
      title: "До 20 человек",
      duration: "40-75 мин",
      services: [
        {
          emoji: "🪄",
          title: "Волшебные палочки",
          price: "6 000 ₽",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          emoji: "✏️",
          title: "Игрушка-карандаш",
          price: "6 500 ₽",
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      title: "До 15 человек",
      duration: "40-75 мин",
      services: [
        {
          emoji: "💎",
          title: "Волшебный браслет с бусинами",
          price: "7 000 ₽",
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
        {
          emoji: "🧁",
          title: "Зефирки/кексики",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Создаем незабываемые мастер-классы для детей любого возраста
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {serviceGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {group.title}
                </h3>
                <p className="text-gray-600">{group.duration}</p>
              </div>

              <div className="grid gap-4">
                {group.services.map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="flex">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-24 h-24 object-cover"
                      />
                      <div className="flex-1">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <span className="text-2xl">{service.emoji}</span>
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-purple-600">
                              {service.price}
                            </span>
                            <Button variant="outline" size="sm">
                              Выбрать
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
