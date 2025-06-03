import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Adults = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            <Icon name="ArrowLeft" size={20} />
            Назад
          </Button>
          <h2 className="text-xl font-semibold text-gray-800">
            Услуги для взрослых
          </h2>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Яркие Мероприятия и Неформальные Праздники для Взрослых в Отелях
            Сочи!
          </h1>

          {/* Hero Image Placeholder */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800&h=400&fit=crop"
              alt="Мероприятие для взрослых с видом на море"
              className="w-full h-64 md:h-80 object-cover"
            />
            <p className="text-sm text-gray-600 p-2 bg-white">
              Атмосферное фото с мероприятия для взрослых: группа людей на МК
              "Краски & Вино" с видом на море
            </p>
          </div>

          <div className="text-lg text-gray-700 leading-relaxed space-y-6 text-left md:text-center">
            <p>
              Отдыхаете в Сочи с друзьями, семьей или коллегами? Сделайте ваше
              время вместе незабываемым, организовав яркое мероприятие прямо в
              отеле! Мы предлагаем оригинальные форматы праздников,
              увлекательные активности и мастер-классы, которые идеально
              впишутся в атмосферу курорта и возможности вашей гостиницы.
            </p>

            <p>
              Будь то стильный день рождения, веселый девичник, неформальный
              корпоратив или просто встреча друзей – мы возьмем на себя все
              организационные моменты. Выбирайте формат, а мы превратим
              банкетный зал, террасу, зону у бассейна или даже территорию отеля
              в идеальную площадку для вашего события.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Популярные форматы мероприятий
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg">
              <Icon name="Palette" size={40} className="text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Мастер-классы "Краски & Вино"
              </h3>
              <p className="text-gray-700">
                Творческие вечера с профессиональным художником и дегустацией
                вин
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg">
              <Icon
                name="PartyPopper"
                size={40}
                className="text-blue-600 mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">
                Тематические вечеринки
              </h3>
              <p className="text-gray-700">
                Стильные праздники с декором, музыкой и развлекательной
                программой
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg">
              <Icon name="Users" size={40} className="text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Корпоративные мероприятия
              </h3>
              <p className="text-gray-700">
                Неформальные встречи команды с тимбилдингом и активностями
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-lg">
              <Icon name="Cake" size={40} className="text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Дни рождения</h3>
              <p className="text-gray-700">
                Незабываемые празднования с индивидуальным подходом
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl shadow-lg">
              <Icon name="Heart" size={40} className="text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Девичники и встречи
              </h3>
              <p className="text-gray-700">
                Стильные посиделки с подругами в уютной атмосфере
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl shadow-lg">
              <Icon name="Waves" size={40} className="text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Мероприятия у бассейна
              </h3>
              <p className="text-gray-700">
                Летние вечеринки с коктейлями и видом на море
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Готовы организовать незабываемое мероприятие?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами, и мы подберем идеальный формат для вашего
            праздника
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-purple-700 hover:text-purple-800"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Связаться с нами
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Adults;
