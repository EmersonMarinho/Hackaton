import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-[#00B5E2] px-4 py-1 sm:py-1 flex justify-center items-center w-full h-full
    ">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 items-center justify-center font-sans font-semibold">
        <NavLink to="/" className="text-white hover:bg-[#514689] duration-300 px-3 py-2 text-xs sm:text-base">Notebooks</NavLink>
        <NavLink to="/" className="text-white hover:bg-[#514689] duration-300 px-3 py-2 text-xs sm:text-base">All in one</NavLink>
        <NavLink to="/" className="text-white hover:bg-[#514689] duration-300 px-3 py-2 text-xs sm:text-base">Celulares</NavLink>
        <NavLink to="/" className="text-white hover:bg-[#514689] duration-300 px-3 py-2 text-xs sm:text-base">Tablets</NavLink>
        <NavLink to="/" className="text-white hover:bg-[#514689] duration-300 px-3 py-2 text-xs sm:text-base">Casa Inteligente</NavLink>
        <NavLink to="/" className="text-white hover:bg-[#514689] duration-300 px-3 py-2 text-xs sm:text-base">Acessórios</NavLink>
        <NavLink to="/" className="text-white hover:bg-[#514689] duration-300 px-3 py-2 text-xs sm:text-base">Serviços</NavLink>
        <NavLink to="/souPositivo" className="text-white hover:bg-[#514689] duration-300 px-3 py-2 text-xs sm:text-base">#Sou Positivo</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
