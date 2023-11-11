import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-[#00B5E2] p-4 flex justify-center items-center w-full h-12">
      <div className="flex space-x-4 items-center justify-center">
        <NavLink to="/notebooks" className="text-white hover:bg-[#2F393B] px-3 py-2">Notebooks</NavLink>
        <NavLink to="/all-in-one" className="text-white hover:bg-[#2F393B] px-3 py-2">All in one</NavLink>
        <NavLink to="/cellular" className="text-white hover:bg-[#2F393B] px-3 py-2">Celulares</NavLink>
        <NavLink to="/tablets" className="text-white hover:bg-[#2F393B] px-3 py-2">Tablets</NavLink>
        <NavLink to="/smart-home" className="text-white hover:bg-[#2F393B] px-3 py-2">Casa Inteligente</NavLink>
        <NavLink to="/accessories" className="text-white hover:bg-[#2F393B] px-3 py-2">Acessórios</NavLink>
        <NavLink to="/services" className="text-white hover:bg-[#2F393B] px-3 py-2">Serviços</NavLink>
        <NavLink to="/soupositivo" className="text-white hover:bg-[#2F393B] px-3 py-2">#Sou Positivo</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
