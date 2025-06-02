export interface Service {
  emoji: string;
  title: string;
  price: string;
  image: string;
}

export interface ServiceGroup {
  title: string;
  duration: string;
  services: Service[];
}
