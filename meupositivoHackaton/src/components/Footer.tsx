import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2F393B] text-white p-8 flex-wrap justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h5 className="text-xl font-bold mb-3">Empresa</h5>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Sobre nós</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Carreira</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Mídias</a></li>
            <li><a href="#" className="hover:underline">Novidades</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-xl font-bold mb-3">Suporte</h5>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Contato</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Centro de Ajuda</a></li>
            <li><a href="#" className="hover:underline">Políticas do Suporte</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-xl font-bold mb-3">Jurídico</h5>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Termos e Serviços</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Privacidade</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Política de Cookies</a></li>
            <li><a href="#" className="hover:underline">Inforamções de Patente</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-xl font-bold mb-3">Recursos</h5>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">eBooks</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Webinars</a></li>
            <li><a href="#" className="hover:underline">Forums</a></li>
          </ul>
        </div>
      </div>
      
      <div className="text-center text-xs mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Todos os Direitos Reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
