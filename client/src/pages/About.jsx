import Footer from '../components/Footer';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';

import { useSelector } from 'react-redux';

const About = () => {
  const lang = useSelector(state => state.language.currentLang);
  return (
    <div>
      <Header />
      <h2 className="text-4xl text-gray-700 font-bold mb-6 text-center uppercase relative mt-5">
        {lang === 'pl' ? 'O nas' : 'About us'}
      </h2>
      <div className='w-full max-w-[1200px] xl:mx-auto flex flex-row gap-x-7 xl:gap-x-20 h-auto mt-5 mb-5'>
        <div className="hidden lg:flex flex-col w-[30%] ml-3 xl:ml-0">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full lg:w-[70%] mr-3 ml-3 lg:ml-0 xl:mr-0">
          {lang === 'pl' ? (
            <p className='text-lg text-justify'>
              Firma <span className='font-bold text-xl'><span className='text-red-600'>Z</span>-Sport</span> Sp. z o.o. jest szybko rozwijającym się producentem i dystrybutorem sprzętu sportowego. <br /><br />

              Na rynku Europy wschodniej i krajów baltyckich od roku 2007 cieszy się dużą popularnością wśród nabywców. <br /><br />

              Priorytetem  <span className='font-bold text-xl'><span className='text-red-600'>Z</span>-Sport</span> jest zadowolenie każdego najbardziej wymagającego klienta oraz zapewnienie produktów najwyższej jakości w konkurencyjnych cenach. <br /><br />

              Wszystkie wyroby produkowane są z zachowaniem najwyższych standardów bezpieczeństwa oraz norm jakości, potwierdzeniem czego służą certyfikaty zgodności z normami europejskimi. <br /><br />

              Własne biuro konstrukcyjno-projektowe służy fachowym doradztwem naszym klijentom przy wyposażaniu siłowni, klubów sportowych, gabinetów rehabilitacyjnych oraz sal gimnastycznych. <br /><br />

              <span className='font-bold text-xl'><span className='text-red-600'>Z</span>-Sport</span> oferuje pełny zakres usług od indywidualnego projektu 2D i 3D do instalacji urządzeń sportowych na miejscu, wszystkim naszym klientom zapewniamy obsługę w ramach <span className='font-bold'>gwarancji</span> jak również <span className='font-bold'>po zakończeniu okresu gwarancyjnego</span> na produkt. <br /><br />
            </p>
          ) : (
            <p className='text-lg text-justify'>
              <span className='font-bold text-xl'><span className='text-red-600'>Z</span>-Sport</span> Sp. z o.o. is a rapidly growing manufacturer and distributor of sports equipment. <br /><br />

              Since 2007, it has enjoyed great popularity among customers in the Eastern European and Baltic markets. <br /><br />

              <span className='font-bold text-xl'><span className='text-red-600'>Z</span>-Sport's</span> priority is the satisfaction of even the most demanding customers and providing the highest quality products at competitive prices. <br /><br />

              All products are manufactured in compliance with the highest safety standards and quality norms, as confirmed by certificates of conformity with European standards. <br /><br />

              Our in-house design and engineering office offers professional advice to our clients in equipping gyms, sports clubs, rehabilitation clinics, and gymnasiums. <br /><br />

              <span className='font-bold text-xl'><span className='text-red-600'>Z</span>-Sport</span> provides a full range of services, from individual 2D and 3D design projects to on-site installation of sports equipment. We ensure service support for all our clients both during the <span className='font-bold'>warranty period and after its expiration.</span> <br /><br />
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About