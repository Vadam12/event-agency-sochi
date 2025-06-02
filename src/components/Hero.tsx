import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-500 via-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-white/15 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-700"></div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <div className="mb-6 text-6xl">🎉</div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Незабываемые
          <span className="text-yellow-300 block">праздники</span>в сердце Сочи
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Организуем яркие мероприятия и творческие мастер-классы для детей и
          взрослых в лучших отелях курорта
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 text-lg px-8 py-4 h-14"
          >
            <Icon name="Calendar" className="mr-2" />
            Заказать мероприятие
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 h-14"
          >
            <Icon name="Phone" className="mr-2" />
            Связаться с нами
          </Button>
        </div>

        <div className="mt-12 flex justify-center items-center gap-8 text-white/80">
          <div className="text-center">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm">Проведено мероприятий</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold">15+</div>
            <div className="text-sm">Партнер отелей</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold">4.9</div>
            <div className="text-sm">Рейтинг клиентов</div>
          </div>
        </div>
      </div>

      {/* Волна внизу */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path
            d="M0,60 C300,20 900,100 1200,60 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
