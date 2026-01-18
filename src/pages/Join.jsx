import React from 'react'
import { Heart, Leaf, Users, Calendar, Mail, Phone, MapPin, Award, Target, Lightbulb, Camera, TrendingUp, Globe, Droplet, TreePine, Recycle, BookOpen, Star, CheckCircle,  } from 'lucide-react';
import { Link } from 'react-router-dom';
const Join = () => {
 const benefits = [
    {
      icon: "💚",
      title: "Помощь планете",
      description: "Ваш вклад действительно меняет мир к лучшему"
    },
    {
      icon: "👥",
      title: "Новые друзья",
      description: "Знакомство с единомышленниками со всего региона"
    },
    {
      icon: "💡",
      title: "Знания и опыт",
      description: "Обучение экологии и навыкам командной работы"
    },
    {
      icon: "🏆",
      title: "Сертификаты",
      description: "Официальные документы о волонтёрской деятельности"
    },
    {
      icon: "📸",
      title: "Яркие впечатления",
      description: "Незабываемые эко-походы и мероприятия на природе"
    },
    {
      icon: "⭐",
      title: "Развитие лидерских качеств",
      description: "Возможность возглавить свой проект"
    }
  ];
  const roles = [
    {
      title: "Полевой волонтёр",
      description: "Участие в акциях по очистке территорий и посадке деревьев",
      icon: "🌱"
    },
    {
      title: "Эко-лектор",
      description: "Проведение лекций и мастер-классов в школах и вузах",
      icon: "🎓"
    },
    {
      title: "SMM-волонтёр",
      description: "Ведение социальных сетей и создание контента",
      icon: "📱"
    },
    {
      title: "Координатор",
      description: "Организация мероприятий и координация команд",
      icon: "📋"
    }
  ];

    return (
    <div>
       <div>
          {/* Hero Section */}
          <section className="bg-linear-to-r from-green-500 to-blue-500 py-16">
            <div className="container mx-auto px-4 text-center text-white">
              <Users className="mx-auto mb-4" size={64} />
              <h2 className="text-5xl font-bold mb-4">Присоединяйся к нам!</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Стань частью команды и помоги сделать Узбекистан чище и зеленее
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section className="container mx-auto px-4 py-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4 text-center">Почему стоит стать волонтёром</h3>
            <p className="text-xl text-gray-600 mb-12 text-center">Что вы получите, вступив в нашу команду</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Join */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">Как стать волонтёром</h3>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                      1
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Заполните форму</h4>
                    <p className="text-gray-600 text-sm">Расскажите о себе в короткой анкете</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                      2
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Вступите в группу</h4>
                    <p className="text-gray-600 text-sm">Присоединитесь к нам в Telegram</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                      3
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Приходите на встречу</h4>
                    <p className="text-gray-600 text-sm">Познакомьтесь с командой</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                      4
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Участвуйте!</h4>
                    <p className="text-gray-600 text-sm">Меняйте мир вместе с нами</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What We Offer */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">Что мы предлагаем</h3>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Гибкий график</h4>
                      <p className="text-gray-600">Участвуйте в проектах, когда вам удобно</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Бесплатное обучение</h4>
                      <p className="text-gray-600">Лекции и тренинги по экологии и устойчивому развитию</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Официальные сертификаты</h4>
                      <p className="text-gray-600">Подтверждение вашей волонтёрской деятельности</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Корпоративные мероприятия</h4>
                      <p className="text-gray-600">Походы, пикники и праздники для волонтёров</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Карьерные возможности</h4>
                      <p className="text-gray-600">Рекомендации и связи в экологической сфере</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Roles */}
          <section className="bg-linear-to-br from-green-50 to-blue-50 py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold text-gray-800 mb-4 text-center">Роли в команде</h3>
              <p className="text-xl text-gray-600 mb-12 text-center">Выберите направление, которое вам интересно</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {roles.map((role, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
                    <div className="text-5xl mb-4">{role.icon}</div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">{role.title}</h4>
                    <p className="text-gray-600 text-sm">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Requirements */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">Требования</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-green-600 mb-4">Что нужно:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Желание помогать природе</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Готовность работать в команде</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Минимум 16 лет</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Ответственность и пунктуальность</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-blue-600 mb-4">Что НЕ нужно:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✗</span>
                      <span>Специальное образование</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✗</span>
                      <span>Опыт в экологии</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✗</span>
                      <span>Финансовые вложения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✗</span>
                      <span>Много свободного времени</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto bg-linear-to-r from-green-600 to-blue-600 rounded-3xl shadow-2xl p-10 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Готовы начать?</h3>
              <p className="text-lg mb-6 opacity-90">Заполните форму и мы свяжемся с вами в течение 24 часов</p>
             <Link to="/contact"> <button className="bg-white text-green-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg">
                Заполнить анкету
              </button></Link>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Join
