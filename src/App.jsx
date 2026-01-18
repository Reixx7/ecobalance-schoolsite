import React  from 'react';
import { Heart, Leaf, Users, Calendar, Mail, Phone, MapPin, Award, Target, Lightbulb, Camera, TrendingUp, Globe, Droplet, TreePine, Recycle, BookOpen, Star, CheckCircle,  } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

const EcoBalanceWebsite = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="text-green-600" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-800">Команда Эко-Баланс</h1>
                <p className="text-sm text-gray-600">Вместе за чистую планету</p>
              </div>
            </div>
            <nav className=" md:flex gap-6 list-none">
              <Link to="/home"> <li 
                
               className= 'text-gray-600 hover:text-green-600'   
              >
                Главная
              </li> </Link>
              <Link to="/projects"><li 
               
                className= 'text-gray-600 hover:text-green-600'
              >
                Проекты
              </li></Link>
              <Link to="/join"><li 
              
                className= 'text-gray-600 hover:text-green-600'
              >
                Присоединиться
              </li></Link>
              <Link to="/contact"><li 
                className='text-gray-600 hover:text-green-600'
              >
                Контакты
              </li></Link>
            </nav>
          </div>
        </div>
      </header>



     <Outlet />

     

    

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf size={24} />
                <span className="text-xl font-semibold">Команда Эко-Баланс</span>
              </div>
              <p className="text-gray-400">
                Волонтерская организация по защите окружающей среды в Узбекистане
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors">Главная</li>
                <li className="hover:text-white transition-colors">Проекты</li>
                <li className="hover:text-white transition-colors">Присоединиться</li>
                <li className="hover:text-white transition-colors">Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@eco-balance.uz</li>
                <li>Тел: +998 (90) 123-45-67</li>
                <li>г. Ташкент, Узбекистан</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2026 Команда Эко-Баланс. Все права защищены. Вместе за чистую планету! 🌍</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcoBalanceWebsite;