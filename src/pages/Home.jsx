import React from 'react'
import { Heart, Leaf, Users, Calendar, Mail, Phone, MapPin, Award, Target, Lightbulb, Camera, TrendingUp, Globe, Droplet, TreePine, Recycle, BookOpen, Star, CheckCircle,  } from 'lucide-react';
import { Link } from 'react-router-dom';
const Home = () => {
  const achievements = [
    { number: "500+", label: "Активных волонтёров", description: "По всему Узбекистану" },
    { number: "50+", label: "Проектов", description: "Реализовано за 3 года" },
    { number: "10 тонн", label: "Мусора собрано", description: "И отправлено на переработку" },
    { number: "2000+", label: "Деревьев", description: "Посажено в 2024-2025" },
    { number: "15", label: "Водоемов", description: "Очищено в этом году" },
    { number: "3", label: "Награды", description: "За экологическую деятельность" }
  ];
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
   const testimonials = [
    {
      name: "Алина К.",
      role: "Волонтёр с 2023 года",
      text: "Эко-Баланс изменил моё отношение к природе. Теперь я не могу пройти мимо мусора на улице!",
      avatar: "👩"
    },
    {
      name: "Тимур Р.",
      role: "Координатор проектов",
      text: "Здесь я нашёл настоящих друзей и понял, что один человек действительно может изменить мир.",
      avatar: "👨"
    },
    {
      name: "Наргиза С.",
      role: "Эко-активист",
      text: "Самое крутое волонтёрское сообщество! Каждая акция - это праздник и реальная польза для природы.",
      avatar: "👩‍🦱"
    }
  ];


    return (
   <div>
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 bg-linear-to-br from-green-200 to-blue-200 rounded-full flex items-center justify-center shadow-xl">
                    <div className="text-7xl">🌍</div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <Heart className="text-white" size={32} />
                  </div>
                </div>
              </div>
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                Меняем мир к лучшему
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Присоединяйтесь к команде неравнодушных людей, которые заботятся об экологии и будущем нашей планеты
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/join"><button 
               
                  className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Стать волонтёром
                </button></Link>
                <Link to="/projects"><button 
                
                  className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  Наши проекты
                </button></Link>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Наши достижения</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {achievements.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-linear-to-br from-green-50 to-blue-50 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-3xl font-bold text-green-600 mb-1">{stat.number}</div>
                    <div className="text-gray-800 font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">Наша миссия и ценности</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Target className="text-green-600" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">Наша миссия</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Команда Эко-Баланс объединяет людей, которые хотят сделать мир чище и лучше. Мы верим, что каждое маленькое действие имеет значение, и вместе мы можем добиться больших перемен для будущих поколений.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Globe className="text-blue-600" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">Наши ценности</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Мы создаем устойчивое будущее через экологическое просвещение, практические акции и формирование ответственного отношения к природе. Открытость, честность и забота — наши главные принципы.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Preview Projects */}
          <section className="bg-linear-to-r from-green-500 to-blue-500 py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold text-white mb-4 text-center">Наши направления</h3>
              <p className="text-white text-center text-lg mb-12 opacity-90">Каждый проект — это шаг к чистой планете</p>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {projects.slice(0, 3).map((project, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                    <div className="text-5xl mb-4">{project.icon}</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="text-sm text-green-600 font-semibold">{project.achievements}</div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/projects"><button 
                
                  className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  Смотреть все проекты
                </button> </Link>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="container mx-auto px-4 py-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">Отзывы волонтёров</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                  <div className="text-5xl mb-4">{testimonial.avatar}</div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-linear-to-r from-green-600 to-blue-600 rounded-3xl shadow-2xl p-12 text-center text-white max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold mb-4">Готовы изменить мир?</h3>
              <p className="text-xl mb-8 opacity-90">Присоединяйтесь к нам уже сегодня!</p>
              <Link to="/join"><button 
                className="bg-white text-green-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Стать частью команды
              </button></Link>
            </div>
          </section>
        </div>
      

  )
}

export default Home
