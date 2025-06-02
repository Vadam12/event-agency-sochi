import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Service } from "@/types/services";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
  );
};

export default ServiceCard;
