import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-industrial-gray">
      {/* Header */}
      <header className="bg-secondary text-white px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Zap" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
              ЭЛЕКТРОМОНТАЖ ПРО
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary to-industrial-dark text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
                ПРОФЕССИОНАЛЬНЫЙ
                <span className="text-primary block">ЭЛЕКТРОМОНТАЖ</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Качественная установка электропроводки в жилых и коммерческих помещениях. 
                Гарантия 5 лет на все работы.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-orange-600 text-white text-lg px-8 py-4">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать электрика
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-4">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Расчет стоимости
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/41923d4b-0b6b-41ec-8c0f-eba13f578d7b.jpg"
                alt="Профессиональный электромонтаж"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
              НАШИ УСЛУГИ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр электромонтажных работ для дома и бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Home" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Электропроводка в квартирах</CardTitle>
                <CardDescription>
                  Полная замена электропроводки в жилых помещениях с соблюдением всех норм безопасности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Демонтаж старой проводки</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Установка новых розеток</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Монтаж выключателей</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Коммерческие объекты</CardTitle>
                <CardDescription>
                  Электромонтаж в офисах, магазинах, ресторанах и других коммерческих помещениях
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Силовые линии</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Освещение</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Системы безопасности</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Аварийные вызовы</CardTitle>
                <CardDescription>
                  Экстренный ремонт электрики 24/7. Быстрый выезд мастера в любое время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Выезд в течение часа</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Диагностика проблем</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Устранение неисправностей</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-industrial-gray">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/img/4d9698bb-cc61-4880-991e-3256ea16c049.jpg"
                alt="Современное электрооборудование"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-8" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
                ПОЧЕМУ ВЫБИРАЮТ НАС
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Гарантия качества</h3>
                    <p className="text-gray-600">5 лет гарантии на все выполненные работы и установленное оборудование</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Опытные мастера</h3>
                    <p className="text-gray-600">Сертифицированные электрики с опытом работы более 15 лет</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Точно в срок</h3>
                    <p className="text-gray-600">Соблюдаем все договорные обязательства и выполняем работы в срок</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
            ГОТОВЫ НАЧАТЬ ПРОЕКТ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Получите бесплатную консультацию и расчет стоимости работ уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать на WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Zap" size={32} className="text-primary" />
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
                  ЭЛЕКТРОМОНТАЖ ПРО
                </h3>
              </div>
              <p className="text-gray-300">
                Профессиональные электромонтажные работы с гарантией качества
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Электропроводка в квартирах</li>
                <li>Коммерческие объекты</li>
                <li>Аварийные вызовы</li>
                <li>Диагностика электросетей</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@elektromontazh.pro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Электриков, 15</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="text-gray-300 space-y-1">
                <p>Пн-Пт: 8:00 - 20:00</p>
                <p>Сб-Вс: 9:00 - 18:00</p>
                <p className="text-primary font-semibold">Аварийные вызовы 24/7</p>
              </div>
            </div>
          </div>
          
          <hr className="border-gray-600 my-8" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ЭлектроМонтаж Про. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;