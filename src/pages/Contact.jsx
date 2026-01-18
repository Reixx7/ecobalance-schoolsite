import React from 'react'
import { Heart, Leaf, Users, Calendar, Mail, Phone, MapPin, Award, Target, Lightbulb, Camera, TrendingUp, Globe, Droplet, TreePine, Recycle, BookOpen, Star, CheckCircle,  } from 'lucide-react';
const Contact = () => {
  return (
     <div>
          {/* Hero */}
          <section className="bg-linear-to-r from-green-500 to-blue-500 py-16">
            <div className="container mx-auto px-4 text-center text-white">
              <Mail className="mx-auto mb-4" size={64} />
              <h2 className="text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl opacity-90">Мы всегда рады новым людям и вопросам!</p>
            </div>
          </section>

          {/* Contact Info */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@eco-balance.uz</p>
                  <p className="text-sm text-gray-500 mt-1">Ответим в течение 24 часов</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Телефон</h3>
                  <p className="text-gray-600">+998 (90) 123-45-67</p>
                  <p className="text-sm text-gray-500 mt-1">Пн-Пт: 10:00 - 18:00</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Адрес офиса</h3>
                  <p className="text-gray-600">г. Ташкент, Мирабадский район</p>
                  <p className="text-sm text-gray-500 mt-1">ул. Узбекистанская, 57</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">График встреч волонтёров</h3>
                  <p className="text-gray-600">Каждую субботу в 10:00</p>
                  <p className="text-sm text-gray-500 mt-1">Парк Алишера Навои (центральный вход)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Media */}
          <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold text-gray-800 mb-8 text-center">Мы в социальных сетях</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
                  <div className="text-5xl mb-3">📱</div>
                  <h4 className="font-bold text-gray-800 mb-2">Telegram</h4>
                  <p className="text-gray-600 text-sm mb-4">@ecobalance_uz</p>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Подписаться
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
                  <div className="text-5xl mb-3">📸</div>
                  <h4 className="font-bold text-gray-800 mb-2">Instagram</h4>
                  <p className="text-gray-600 text-sm mb-4">@ecobalance.uz</p>
                  <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                    Подписаться
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
                  <div className="text-5xl mb-3">🎥</div>
                  <h4 className="font-bold text-gray-800 mb-2">YouTube</h4>
                  <p className="text-gray-600 text-sm mb-4">Эко-Баланс UZ</p>
                  <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    Подписаться
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="container mx-auto px-4 py-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">Часто задаваемые вопросы</h3>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-bold text-gray-800 mb-2">Нужно ли платить за участие?</h4>
                <p className="text-gray-600">Нет, все наши мероприятия абсолютно бесплатны для волонтёров.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-bold text-gray-800 mb-2">Сколько времени нужно уделять?</h4>
                <p className="text-gray-600">Вы сами выбираете удобный график. Можно участвовать раз в месяц или каждую неделю.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-bold text-gray-800 mb-2">Какой возраст допустим?</h4>
                <p className="text-gray-600">От 16 лет. Дети могут участвовать вместе с родителями.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-bold text-gray-800 mb-2">Нужна ли специальная подготовка?</h4>
                <p className="text-gray-600">Нет, мы проводим вводный инструктаж перед каждой акцией.</p>
              </div>
            </div>
          </section>
        </div>
  )
}

export default Contact
