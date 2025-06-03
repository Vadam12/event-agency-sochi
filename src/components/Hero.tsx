import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Незабываемые Мероприятия в Сочи
        </h1>
        <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
          Организуем праздники и события любого масштаба с профессиональным
          подходом
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="secondary"
            className="text-purple-700 hover:text-purple-800 min-w-[200px]"
          >
            <Icon name="Palette" size={20} className="mr-2" />
            Детские праздники
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/vzroslye")}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 min-w-[200px]"
          >
            <Icon name="PartyPopper" size={20} className="mr-2" />
            Услуги для взрослых
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
