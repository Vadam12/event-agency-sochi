import { serviceGroups } from "@/data/services";
import { ServiceGroup } from "./services";

const Services = () => {
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
            <ServiceGroup key={groupIndex} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
