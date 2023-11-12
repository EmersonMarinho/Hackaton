import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};
  const [cep, setCep] = useState('');


  if (!product) {
    return <div>Product not found</div>;
  }

  const handleFreightCalculation = () => {
    console.log('Calculating freight for CEP:', cep);
  };
  

    const handleClick = () => {
        navigate(`/checkout/`,);
    }

  return (
    <div className="container mx-auto p-4 mb-10 mt-5">
    <div className="flex flex-col lg:flex-row justify-center items-center">
        {/* Product Video */}
        <div className="flex-1 justify-center items-center mr-16">
          <video 
            src={product.video} 
            autoPlay
            muted
            loop
            className="w-full h-auto mx-auto" // 'mx-auto' to center horizontally
            />
        </div>

        {/* Product Information */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4 text-center">
            {product.name}
          </h1>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="p-4 border rounded">
              <h2 className="font-bold">Descrição do Produto</h2>
              <p>{product.description}</p>
            </div>
            <div className="p-4 border rounded">
              <h2 className="font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit!</h2>
            </div>
            <div className="p-4 border rounded flex gap-5">
              <h2 className="font-bold">Valor</h2>
              <p>{product.price}</p>
            </div>
            <button className='p-4 rounded border w-2/4 bg-[#E59D28] hover:brightness-90' onClick={handleClick}>
                <h2 className='font-bold text-center text-white uppercase'>Comprar</h2>
            </button>
            <div className="p-4 border rounded w-full md:w-1/2 lg:w-full mx-auto">
        <h2 className="font-bold mb-2 text-center">Calcular o Frete</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={handleFreightCalculation}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded w-full"
        >
          OK
        </button>
        <div className="mt-2 text-center text-sm">
          <a href="#" className="text-blue-500 hover:underline">Não sei meu CEP</a>
        </div>
      </div>
            <div className="flex space-x-4 gap-44 w-full">
              <div className="p-4 border rounded w-full text-center">
                <h2 className="font-bold">1200 Pontos</h2>
              </div>
              <div className="p-4 border rounded w-full text-center">
                <h2 className="font-bold">Bronze</h2>
              </div>
              <div className="p-4 border rounded w-full text-center">
                <h2 className="font-bold">60H de conteúdo</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
