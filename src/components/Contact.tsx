import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      info: "+7 928 450 02 72",
      subtitle: "Звоните ежедневно с 9:00 до 22:00",
    },
    {
      icon: "Mail",
      title: "Email",
      info: "terator888@gmail.com",
      subtitle: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Локация",
      info: "г. Сочи, центральный район",
      subtitle: "Работаем во всех отелях города",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      info: "Ежедневно 9:00 - 22:00",
      subtitle: "Консультации и бронирование",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Готовы воплотить ваши идеи в жизнь! Обсудим детали и создадим
            идеальное мероприятие
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Icon name={contact.icon} className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg text-gray-800">
                  {contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="font-semibold text-gray-800 mb-2">
                  {contact.info}
                </div>
                <div className="text-sm text-gray-600">{contact.subtitle}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Получить консультацию
            </h3>
            <p className="text-gray-600">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
              <select className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200">
                <option>Выберите тип мероприятия</option>
                <option>Детский праздник</option>
                <option>Мастер-класс</option>
                <option>Романтическое мероприятие</option>
                <option>Корпоративное событие</option>
              </select>
            </div>

            <div>
              <textarea
                placeholder="Расскажите о ваших пожеланиях..."
                rows={6}
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 resize-none"
              ></textarea>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white px-12 py-4 text-lg"
            >
              <Icon name="Send" className="mr-2" />
              Отправить заявку
            </Button>

            <p className="text-xs text-gray-500 mt-4">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
