import { AiOutlineMenu } from 'react-icons/ai';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import useMenu from '../hooks/use-menu';

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const { isOpen, toggleMenu } = useMenu(false);

  return (
    <>
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      <button
        type="button"
        onClick={toggleMenu}
        disabled={isOpen}
        className="fixed right-4 bottom-4 md:hidden p-2 shadow-md shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 transition-all"
      >
        <AiOutlineMenu size={25} />
      </button>
      <Component isOpen={isOpen} toggleMenu={toggleMenu} {...pageProps} />
      <Footer />
    </>
  );
}
