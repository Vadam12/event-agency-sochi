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
            "https://images.unsplash.com/photo-1602623322989-8b5c4e86f75c?w=400&h=300&fit=crop",
        },
        {
          emoji: "🌸",
          title: "Фоамиран украшения",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1583278529063-5f7e7bcb5e40?w=400&h=300&fit=crop",
        },
        {
          emoji: "🟢",
          title: "Слайм",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          emoji: "🎭",
          title: "Роспись масок",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          emoji: "🔑",
          title: "Брелки",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
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
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          emoji: "🧠",
          title: "Правополушарное рисование",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
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
            "https://images.unsplash.com/photo-1602623322989-8b5c4e86f75c?w=400&h=300&fit=crop",
        },
        {
          emoji: "💤",
          title: "Ловцы снов",
          price: "7 500 ₽",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
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
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          emoji: "🪢",
          title: "Браслет выживания",
          price: "8 500 ₽",
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
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
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          emoji: "🍫",
          title: "Шоколадные фигурки",
          price: "9 000 ₽",
          image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        },
        {
          emoji: "🔷",
          title: "Термомозайка",
          price: "9 000 ₽",
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          emoji: "🍭",
          title: "Леденцы на палочке",
          price: "9 000 ₽",
          image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        },
        {
          emoji: "🥄",
          title: "Деревянные ложки",
          price: "9 000 ₽",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          emoji: "🧢",
          title: "Бейсболки",
          price: "9 500 ₽",
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          emoji: "👕",
          title: "Футболки",
          price: "9 500 ₽",
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          emoji: "🏠",
          title: "Скворечники",
          price: "9 500 ₽",
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          emoji: "🛍️",
          title: "Шоперы",
          price: "10 000 ₽",
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
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
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          emoji: "🌈",
          title: "Роспись витражными красками",
          price: "11 000 ₽",
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          emoji: "🛁",
          title: "Бомбочки для ванн",
          price: "11 000 ₽",
          image:
            "https://images.unsplash.com/photo-1602623322989-8b5c4e86f75c?w=400&h=300&fit=crop",
        },
        {
          emoji: "🌌",
          title: "Космос в бутылке",
          price: "11 000 ₽",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          emoji: "🥏",
          title: "Фрисби",
          price: "11 000 ₽",
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          emoji: "🔗",
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
          emoji: "🪴",
          title: "Кашпо с живыми цветами/мхом",
          price: "12 000 ₽",
          image:
            "https://images.unsplash.com/photo-1583278529063-5f7e7bcb5e40?w=400&h=300&fit=crop",
        },
      ],
    },
  ];

  const specialServices = [
    {
      emoji: "🎁",
      title: "Упаковка подарков",
      price: "11 500 ₽",
      duration: "40-75 мин",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    },
    {
      emoji: "🍦",
      title: "Мороженое с азотом",
      price: "9 500 ₽",
      duration: "40-75 мин",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    },
    {
      emoji: "🔬",
      title: "Научные эксперименты",
      price: "8 500 ₽",
      duration: "40-75 мин",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    },
    {
      emoji: "🫧",
      title: "Пузыри с погружением",
      price: "10 000 ₽",
      duration: "40-75 мин",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    },
    {
      emoji: "💭",
      title: "Мини пузыри",
      price: "3 000 ₽",
      duration: "30 мин",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    },
    {
      emoji: "🎨",
      title: "Аквагрим",
      price: "3 500 ₽",
      duration: "30 мин",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Создаём незабываемые моменты для детей и взрослых
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{service.emoji}</span>
                  <h3 className="text-xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">
                    {service.price}
                  </span>
                  <span className="text-gray-500">{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">
            Дополнительные услуги
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-2">{service.emoji}</span>
                  <h4 className="text-lg font-bold text-gray-800">
                    {service.title}
                  </h4>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-purple-600">
                    {service.price}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {service.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
