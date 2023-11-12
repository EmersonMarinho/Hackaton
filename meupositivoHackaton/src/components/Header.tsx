import { useNavigate } from 'react-router-dom';
import LogoPositivo from '../assets/logo.svg';
import { UserIcon, ShoppingBagIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

function Header() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }
  return (
    <header className="bg-[#2F393B] p-4 flex flex-col sm:flex-row justify-around items-center w-full font-sans">
      <div className="flex items-center justify-around w-full sm:space-x-7 mb-4 sm:mb-0">
        <img onClick={handleClick} src={LogoPositivo} alt="Logo Positivo" className="h-10 cursor-pointer" />
        <div className="flex-1 max-w-xs sm:max-w-xl">
          <div className="relative">
            <MagnifyingGlassIcon className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
            <input 
              type="search" 
              placeholder="Digite Aqui" 
              className="w-full pl-12 pr-4 py-2 rounded-sm outline-none bg-[white] placeholder-gray-400 hover:focus:outline-none focus:ring-2 focus:ring-blue-50"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-6">
          <a href="/" className="text-white flex items-center">
            <UserIcon className="h-6 w-6 mr-1" />
            Suporte
          </a>
          <a href="/" className="text-white flex items-center">
            <ShoppingBagIcon className="h-6 w-6 mr-1" />
            Minha Conta
          </a>
          <a href='/' className="text-white flex items-center">
            <ShoppingCartIcon className="h-6 w-6 mr-1" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
