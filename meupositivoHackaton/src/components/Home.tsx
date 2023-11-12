import { DevicePhoneMobileIcon, ComputerDesktopIcon, DeviceTabletIcon, CreditCardIcon   } from "@heroicons/react/24/solid";
import Card from "./Card";
import ProductCard from "./ProductCard";
import video from "../assets/3Dvideo.mp4"


function Home() {
  return (
    <div className="container mx-auto px-4 font-sans">
      <nav className="text-white py-3">
        <ul className="flex space-x-2">
          <li className='text-black font-bold uppercase font-sans'>Home</li>
        </ul>
      </nav>

      <div className="bg-black text-white p-6 rounded-md mb-6">
        <h1 className="text-4xl font-bold mb-4">#SOU POSITIVO</h1>
        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto itaque, et officia quis dicta neque quae praesentium ab. Culpa nemo architecto inventore nisi repellendus dolor delectus dicta nesciunt ratione ducimus.</p>
        <p className="text-3xl mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis numquam dolore consectetur impedit id sit. Distinctio autem aut vero deserunt quisquam, corporis obcaecati inventore, sapiente hic consequatur eaque ratione.</p>
        <p>Lorem ipsum dolor sit</p>
      </div>

      {/* Products and Filters */}
      <section className='w-full mx-auto'>
      <div className="flex justify-center items-center mb-2 w-full">
          <div className="flex gap-4 w-full">
          <div className="flex gap-4 mb-8 w-full">
                <Card icon={CreditCardIcon}>Menor preço</Card>
                <Card icon={ComputerDesktopIcon}>Notebooks</Card>
                <Card icon={DeviceTabletIcon}>Tablets</Card>
                <Card icon={DevicePhoneMobileIcon}>Smartphones</Card>
      </div>
          </div>
        </div>

        {/* Product List (Placeholder) */}
        <div className="flex w-full justify-between gap-7">
        <div>
          <ProductCard product={{
                      id: "1",
                      video: video,
                      name: "Cellphone",
                      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                      tags: ["Infinix", "Infinix" ] ,
                      price: "R$ 150,00",
                      oldPrice: "R$ 200,00",
                      discountTag: "25%",
                      shippingTag: "Frete Grátis"
                  }} />
        </div>
        <div>
          <ProductCard product={{
                      id: "2",
                      video: video,
                      name: "Cellphone",
                      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                      tags: ["Infinix", "Infinix" ] ,
                      price: "R$ 150,00",
                      oldPrice: "R$ 200,00",
                      discountTag: "25%",
                      shippingTag: "Frete Grátis"
                  }} />
        </div>
        <div>
          <ProductCard product={{
                      id: "3",
                      video: video,
                      name: "Cellphone",
                      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                      tags: ["Infinix", "Infinix" ] ,
                      price: "R$ 150,00",
                      oldPrice: "R$ 200,00",
                      discountTag: "25%",
                      shippingTag: "Frete Grátis"
                  }} />
        </div>
        <div>
          <ProductCard product={{
                      id: "4",
                      video: video,
                      name: "Cellphone",
                      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                      tags: ["Infinix", "Infinix" ] ,
                      price: "R$ 150,00",
                      oldPrice: "R$ 200,00",
                      discountTag: "25%",
                      shippingTag: "Frete Grátis"
                  }} />
        </div>
        </div>
        
      </section>
    </div>
    
  );
}

export default Home;
