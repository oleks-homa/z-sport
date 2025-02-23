import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';

const Contact = () => {
  const lang = useSelector(state => state.language.currentLang);

  return (
    <>
      <Header />
      <h2 className="text-4xl text-gray-700 font-bold mb-6 text-center uppercase relative mt-5">
            {lang === 'pl' ? 'Kontakt' : 'Contact'}
          </h2>
      <div className='w-full max-w-[1200px] mx-auto flex flex-row gap-x-20 h-auto mt-5 mb-5'>
        <div className="hidden lg:flex flex-col w-[30%]">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full lg:w-[70%]">
          <table className='w-full lg:w-2/3 mb-4 text-gray-500 text-sm sm:text-base hidden md:block'>
            <tbody>
              <tr>
                <td>Tel: <a href="tel:+48 576 231 531" className='text-blue-400 hover:underline'>+48 576 231 531</a> <br /><br /> Email: <a href="mailto:zsportq@gmail.com" className='text-blue-400 hover:underline'>zsportq@gmail.com</a> <br /><br /><br /></td>
                <td>Z-Sport sp. z o.o. <br /><br />

                  ul. Kołodziejska 8B 04-272 Warszawa <br /><br />

                  KRS: 0000639196 NIP: 7010618550 REGON: 365505102</td>
              </tr>
            </tbody>
          </table>
          <div className='md:hidden space-y-2 ml-2'>
              <p>Tel: <a href="tel:+48 576 231 531" className='text-blue-400 hover:underline'>+48 576 231 531</a></p>
              <p>Email: <a href="mailto:zsportq@gmail.com" className='text-blue-400 hover:underline'>zsportq@gmail.com</a></p>
              <p>Z-Sport sp. z o.o.</p>
              <p>ul. Kołodziejska 8B 04-272 Warszawa</p>
              <p>KRS: 0000639196 NIP: 7010618550 REGON: 365505102</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2865.5442418927946!2d19.997633!3d52.736907!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecdf9788f8535%3A0x13da0d20ba4edee5!2sZ-Sport!5e1!3m2!1sen!2sus!4v1739144295089!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0, marginBottom: 15 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact