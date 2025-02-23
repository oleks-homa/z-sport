import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentCategory } from '../state';

const Footer = () => {
  const lang = useSelector(state => state.language.currentLang);
  const categories = useSelector(state => state.category.allCategories);
  return (
    <footer className="flex justify-center bg-neutral-100 text-center text-neutral-600 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              {lang === 'pl' ? 'Produkty' : 'Products'}
            </h6>
            <p className="mb-4">
              <Link
                className="text-neutral-600 hover:text-red-600 cursor-pointer transition-all duration-200"
                to={`/products/${categories[0]?.namePL?.toLowerCase().split(' ').join('-')}`}
                onClick={() => setCurrentCategory(categories[0])}
              >
                {lang === 'pl' ? categories[0]?.namePL : categories[0].nameEN}
              </Link>
            </p>
            <p className="mb-4">
              <Link
                className="text-neutral-600 hover:text-red-600 cursor-pointer transition-all duration-200"
                to={`/products/${categories[3]?.namePL?.toLowerCase().split(' ').join('-')}`}
                onClick={() => setCurrentCategory(categories[3])}
              >
                {lang === 'pl' ? categories[3]?.namePL : categories[3].nameEN}
              </Link>
            </p>
            <p className="mb-4">
              <Link
                className="text-neutral-600 hover:text-red-600 cursor-pointer transition-all duration-200"
                to={`/products/${categories[1]?.namePL?.toLowerCase().split(' ').join('-')}`}
                onClick={() => setCurrentCategory(categories[1])}
              >
                {lang === 'pl' ? categories[1]?.namePL : categories[1].nameEN}
              </Link>
            </p>
            <p>
              <Link
                className="text-neutral-600 hover:text-red-600 cursor-pointer transition-all duration-200"
                to={`/products/${categories[2]?.namePL?.toLowerCase().split(' ').join('-')}`}
                onClick={() => setCurrentCategory(categories[2])}
              >
                {lang === 'pl' ? categories[2]?.namePL : categories[2].nameEN}
              </Link>
            </p>
          </div>

          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              {lang === 'pl' ? 'Użyteczne linki' : 'Useful links'}
            </h6>
            <p className="mb-4">
              <Link
                className="text-neutral-600 hover:text-red-600 cursor-pointer transition-all duration-200"
                to='/contact'
              >
                {lang === 'pl' ? 'Kontakt' : 'Contact'}
              </Link>
            </p>
            <p className="mb-4">
              <Link
                className="text-neutral-600 hover:text-red-600 cursor-pointer transition-all duration-200"
                to='/about'
              >
                {lang === 'pl' ? 'O nas' : 'About us'}
              </Link>
            </p>
            <p className="mb-4">
              <Link
                className="text-neutral-600 hover:text-red-600 cursor-pointer transition-all duration-200"
                to='/'
              >
                {lang === 'pl' ? 'Obsługa klienta' : 'Customer service'}
              </Link>
            </p>
            <p>
              <Link
                className="text-neutral-600 hover:text-red-600 cursor-pointer transition-all duration-200"
                to='/products'
              >
                {lang === 'pl' ? 'Sprzęt sportowy' : 'Sport equipment'}
              </Link>
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              {lang === 'pl' ? 'Kontakt' : 'Contact'}
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <HomeIcon className='mr-2' />
              ul. Kołodziejska 8B, 04-272, Warszawa
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <EmailIcon className='mr-2' />
              <a href="mailto:zsportq@gmail.com" className='text-blue-400 hover:underline'>zsportq@gmail.com</a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <PhoneIcon className='mr-2' />
              <a href="tel:+48 576 231 531" className='text-blue-400 hover:underline'>+48 576 231 531</a> 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;