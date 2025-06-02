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
        {
          emoji: "🕯️",
          title: "Свечи ручной работы",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1602006847415-22e9fef1e90b?w=400&h=300&fit=crop",
        },
        {
          emoji: "🌸",
          title: "Фоамиран украшения",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1633505319104-0b73b56c1e49?w=400&h=300&fit=crop",
        },
        {
          emoji: "🌈",
          title: "Слайм",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=300&fit=crop",
        },
        {
          emoji: "🎭",
          title: "Роспись масок",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop",
        },
        {
          emoji: "🔑",
          title: "Брелки",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
        },
        {
          emoji: "🎨",
          title: "Деревянные фигурки роспись",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          emoji: "🏖️",
          title: "Картины из песка",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        },
        {
          emoji: "🎨",
          title: "Правополушарное рисование",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          emoji: "🏺",
          title: "Полимерная глина",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          emoji: "🧼",
          title: "Мыловарение",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
        },
        {
          emoji: "🌙",
          title: "Ловцы снов",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      title: "До 10 человек",
      duration: "40-75 мин",
      services: [
        {
          emoji: "📦",
          title: "Роспись шкатулок",
          price: "8 500 ₽",
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          emoji: "🧗",
          title: "Браслет выживания",
          price: "8 500 ₽",
          image:
            "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop",
        },
        {
          emoji: "🏠",
          title: "Роспись домиков",
          price: "8 500 ₽",
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          emoji: "🏮",
          title: "Фонарики желаний",
          price: "8 500 ₽",
          image:
            "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=300&fit=crop",
        },
        {
          emoji: "🍫",
          title: "Шоколадные фигурки",
          price: "9 000 ₽",
          image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        },
        {
          emoji: "🧩",
          title: "Термомозайка",
          price: "9 000 ₽",
          image:
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
        },
        {
          emoji: "🍭",
          title: "Леденцы на палочке",
          price: "9 000 ₽",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          emoji: "🥄",
          title: "Ложки деревянные",
          price: "9 000 ₽",
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          emoji: "🧢",
          title: "Бейсболки",
          price: "9 500 ₽",
          image:
            "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=300&fit=crop",
        },
        {
          emoji: "👕",
          title: "Футболки",
          price: "9 500 ₽",
          image:
            "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=300&fit=crop",
        },
        {
          emoji: "🏡",
          title: "Скворечники",
          price: "9 500 ₽",
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          emoji: "👜",
          title: "Шоперы",
          price: "10 000 ₽",
          image:
            "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=300&fit=crop",
        },
        {
          emoji: "💎",
          title: "Эпоксидная смола",
          price: "10 000 ₽",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          emoji: "🍪",
          title: "Пряники (3 шт)",
          price: "10 000 ₽",
          image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        },
        {
          emoji: "🖊️",
          title: "3D ручка",
          price: "10 000 ₽",
          image:
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
        },
        {
          emoji: "🌈",
          title: "Роспись витражными красками",
          price: "11 000 ₽",
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          emoji: "🛁",
          title: "Бомбочки для ванн",
          price: "11 000 ₽",
          image:
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
        },
        {
          emoji: "🌌",
          title: "Космос в бутылке",
          price: "11 000 ₽",
          image:
            "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
        },
        {
          emoji: "🥏",
          title: "Фрисби",
          price: "11 000 ₽",
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          emoji: "🦾",
          title: "Кожаные браслеты",
          price: "12 000 ₽",
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
        {
          emoji: "🥤",
          title: "Овершейк",
          price: "12 000 ₽",
          image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        },
        {
          emoji: "🌱",
          title: "Кашпо с живыми цветами/мхом",
          price: "12 000 ₽",
          image:
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      title: "Дополнительные услуги",
      duration: "30-75 мин",
      services: [
        {
          emoji: "🎁",
          title: "Упаковка подарков",
          price: "11 500 ₽",
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          emoji: "🍦",
          title: "Мороженое с азотом",
          price: "9 500 ₽",
          image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        },
        {
          emoji: "🧪",
          title: "Научные эксперименты",
          price: "8 500 ₽",
          image:
            "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=400&h=300&fit=crop",
        },
        {
          emoji: "🫧",
          title: "Пузыри с погружением",
          price: "10 000 ₽",
          image:
            "https://images.unsplash.com/photo-1520637836862-4d197d17c50a?w=400&h=300&fit=crop",
        },
        {
          emoji: "💫",
          title: "Мини пузыри (30 мин)",
          price: "3 000 ₽",
          image:
            "https://images.unsplash.com/photo-1520637836862-4d197d17c50a?w=400&h=300&fit=crop",
        },
        {
          emoji: "🎨",
          title: "Аквагрим (30 мин)",
          price: "3 500 ₽",
          image:
            "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop",
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
