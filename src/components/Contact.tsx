import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Формируем текст сообщения
    const message = `🎉 *Новая заявка с сайта*

👤 *Имя:* ${formData.name}
📱 *Телефон:* ${formData.phone}
🎊 *Тип мероприятия:* ${formData.eventType}
💬 *Сообщение:* ${formData.message}`;

    // Кодируем сообщение для URL
    const encodedMessage = encodeURIComponent(message);

    // Формируем WhatsApp ссылку
    const whatsappUrl = `https://wa.me/79284500272?text=${encodedMessage}`;

    // Открываем WhatsApp
    window.open(whatsappUrl, "_blank");

    // Очищаем форму
    setFormData({ name: "", phone: "", eventType: "", message: "" });
  };
  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      info: "+7 (928) 450-02-72",
      subtitle: "Звоните ежедневно с 9:00 до 22:00",
      action: () => window.open("tel:+79284500272", "_self"),
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
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg text-center ${contact.action ? "cursor-pointer hover:shadow-xl transition-shadow" : ""}`}
              onClick={contact.action}
            >
              <Icon
                name={contact.icon as any}
                size={32}
                className="text-purple-600 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
              <p className="text-gray-800 font-medium mb-1">{contact.info}</p>
              <p className="text-sm text-gray-600">{contact.subtitle}</p>
            </div>
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
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ваше имя"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Телефон"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              >
                <option value="">Выберите тип мероприятия</option>
                <option value="Детский праздник">Детский праздник</option>
                <option value="Мастер-класс">Мастер-класс</option>
                <option value="Романтическое мероприятие">
                  Романтическое мероприятие
                </option>
                <option value="Корпоративное событие">
                  Корпоративное событие
                </option>
              </select>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Расскажите о ваших пожеланиях..."
                rows={6}
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 resize-none"
              ></textarea>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="text-center mt-8">
              <Button
                type="submit"
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
