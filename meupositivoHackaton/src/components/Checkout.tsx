import video from "../assets/3Dvideo.mp4"

const Checkout = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Meu Carrinho</h1>
          </div>
          <div className="flex">
          <video className="w-1/5 mt-4 pt-5 flex items-center justify-center" src={video} autoPlay muted loop width={"10px"} />
            <div className="flex mt-8 ml-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veritatis praesentium necessitatibus. Ullam sed voluptatem quam atque, distinctio, voluptatum temporibus, consequuntur suscipit recusandae quo dignissimos quaerat! Optio esse doloremque voluptas!
            </div>
          </div>

          <div className="flex mt-10 mb-5">
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deserunt soluta porro eaque hic, consequuntur tempora perferendis repudiandae, dicta aspernatur sapiente non rem debitis sed magnam quidem sint beatae sequi!
            </div>
          </div>
          <div className="flex">
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Escolher mais produtos
            </button>
          </div>
        </div>
        
        <div className="w-1/4 bg-gray-100 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Resumo do pedido</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Itens 3</span>
            <span className="font-semibold text-sm">R$1.332,22</span>
          </div>
          <div>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total</span>
              <span>R$1.332,22</span>
            </div>
            <span className="flex font-sans font-light text-gray-500 text-center text-[14px]">5% de Cashback</span>
            <span className="font-sans font-extralight text-gray-500 text-center text-[14px]">50 Pontos Ao realizar a compra deste Produto</span>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm mt-6 text-white uppercase w-full">
              Fechar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
