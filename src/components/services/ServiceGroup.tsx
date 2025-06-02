import { ServiceGroup as ServiceGroupType } from "@/types/services";
import ServiceCard from "./ServiceCard";

interface ServiceGroupProps {
  group: ServiceGroupType;
}

const ServiceGroup = ({ group }: ServiceGroupProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {group.title}
        </h3>
        <p className="text-gray-600">{group.duration}</p>
      </div>

      <div className="grid gap-4">
        {group.services.map((service, serviceIndex) => (
          <ServiceCard key={serviceIndex} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceGroup;
