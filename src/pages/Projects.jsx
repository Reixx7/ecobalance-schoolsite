import React from 'react'
import { Heart, Leaf, Users, Calendar, Mail, Phone, MapPin, Award, Target, Lightbulb, Camera, TrendingUp, Globe, Droplet, TreePine, Recycle, BookOpen, Star, CheckCircle,  } from 'lucide-react';
const Projects = () => {
 const projects = [
    {
      title: "Очистка рек и водоемов",
      description: "Регулярные акции по очистке рек, озер и прудов от мусора и загрязнений",
      icon: "🌊",
      color: "blue",
      achievements: "Планна очищение водоемов"
    },
    {
      title: "Посадка деревьев",
      description: "Высаживаем деревья для озеленения города и восстановления лесов",
      icon: "🌳",
      color: "green",
      
    },
    {
      title: "Раздельный сбор отходов",
      description: "Обучаем правильной сортировке и организуем пункты сбора вторсырья",
      icon: "♻️",
      color: "emerald",
      achievements: "1 кг мусора переработано"
    },
    {
      title: "Эко-образование",
      description: "Проводим лекции, мастер-классы и интерактивные занятия в школах",
      icon: "📚",
      color: "purple",
      achievements: "50+ школ посетили"
    },
    {
      title: "Защита биоразнообразия",
      description: "Охрана редких видов растений и животных в нашем регионе",
      icon: "💚",
      color: "pink",
      achievements: "5 природных зон под защитой"
    },
    {
      title: "Эко-мониторинг",
      description: "Следим за состоянием окружающей среды и публикуем отчеты",
      icon: "📊",
      color: "indigo",
      achievements: "Ежемесячные отчеты с 2023 года"
    }
  ];
const upcomingEvents = [
    {
      date: "25 января",
      title: "Очистка реки Чирчик",
      participants: "Требуется 30 волонтёров",
      time: "09:00 - 14:00"
    },
    {
      date: "1 февраля",
      title: "Посадка деревьев в парке",
      participants: "Принимаем всех желающих",
      time: "10:00 - 13:00"
    },
    {
      date: "8 февраля",
      title: "Эко-лекция в школе №45",
      participants: "Для опытных волонтёров",
      time: "14:00 - 16:00"
    }
  ];
    return (
    <div>
          {/* Hero Section */}
          <section className="bg-linear-to-r from-green-500 to-blue-500 py-16">
            <div className="container mx-auto px-4 text-center text-white">
              <h2 className="text-5xl font-bold mb-4">Наши проекты</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Мы работаем по шести ключевым направлениям для защиты окружающей среды и создания устойчивого будущего
              </p>
            </div>
          </section>

          {/* All Projects */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="text-5xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  <div className="inline-block px-4 py-2 bg-green-100 rounded-full">
                    <span className="text-sm font-semibold text-green-700">
                      ✓ {project.achievements}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

       

          {/* Upcoming Events */}
          <section className="container mx-auto px-4 py-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">Ближайшие мероприятия</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all">
                  <div className="text-green-600 font-bold text-sm mb-2">{event.date}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    Записаться
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Success Stories */}
          <section className="bg-linear-to-br from-green-50 to-blue-50 py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">Истории успеха</h3>
              <div className="max-w-5xl mx-auto space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8 flex gap-6 items-start">
                  <div className="text-6xl shrink-0">🌊</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">Спасение реки Чирчик</h4>
                    <p className="text-gray-600 leading-relaxed">
                      В 2024 году мы провели крупнейшую акцию по очистке реки Чирчик. Более 200 волонтёров собрали 3 тонны мусора за один день. Благодаря этому, качество воды улучшилось на 40%, и в реку вернулись редкие виды рыб.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 flex gap-6 items-start">
                  <div className="text-6xl shrink-0">🌳</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">Парк "Зелёное будущее"</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Совместно с городской администрацией мы создали новый парк в районе Чиланзар. Высадили 500 деревьев и 1000 кустарников. Теперь это любимое место отдыха для 10 000 жителей района.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 flex gap-6 items-start">
                  <div className="text-6xl shrink-0">♻️</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">Программа раздельного сбора</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Запустили систему раздельного сбора отходов в 25 многоквартирных домах. За полгода жители собрали и отправили на переработку 5 тонн пластика, 2 тонны бумаги и 1 тонну стекла.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
  )
}

export default Projects
