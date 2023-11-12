import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-[#00B5E2] px-4 py-1 sm:py-1 flex justify-center items-center w-full ">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 items-center justify-center">
        <NavLink to="/notebooks" className="text-white hover:bg-[#514689] px-3 py-2 text-xs sm:text-base">Notebooks</NavLink>
        <NavLink to="/all-in-one" className="text-white hover:bg-[#514689] px-3 py-2 text-xs sm:text-base">All in one</NavLink>
        <NavLink to="/celular" className="text-white hover:bg-[#514689] px-3 py-2 text-xs sm:text-base">Celulares</NavLink>
        <NavLink to="/tablets" className="text-white hover:bg-[#514689] px-3 py-2 text-xs sm:text-base">Tablets</NavLink>
        <NavLink to="/smart-home" className="text-white hover:bg-[#514689] px-3 py-2 text-xs sm:text-base">Casa Inteligente</NavLink>
        <NavLink to="/accessories" className="text-white hover:bg-[#514689] px-3 py-2 text-xs sm:text-base">Acessórios</NavLink>
        <NavLink to="/services" className="text-white hover:bg-[#514689] px-3 py-2 text-xs sm:text-base">Serviços</NavLink>
        <NavLink to="/soupositivo" className="text-white hover:bg-[#514689] px-3 py-2 text-xs sm:text-base">#Sou Positivo</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
