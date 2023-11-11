import { DevicePhoneMobileIcon, ComputerDesktopIcon, DeviceTabletIcon, CreditCardIcon   } from "@heroicons/react/24/solid";
import Card from "./Card";


function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Breadcrumb */}
      <nav className="text-white py-3">
        <ul className="flex space-x-2">
          <li className='text-black'>Home</li>
        </ul>
      </nav>

      {/* Banner */}
      <div className="bg-black text-white p-6 rounded-md mb-6">
        <h1 className="text-4xl font-bold mb-4">#SOU POSITIVO</h1>
        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto itaque, et officia quis dicta neque quae praesentium ab. Culpa nemo architecto inventore nisi repellendus dolor delectus dicta nesciunt ratione ducimus.</p>
        <p className="text-3xl mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis numquam dolore consectetur impedit id sit. Distinctio autem aut vero deserunt quisquam, corporis obcaecati inventore, sapiente hic consequatur eaque ratione.</p>
        <p>Lorem ipsum dolor sit</p>
      </div>

      {/* Products and Filters */}
      <section className='w-full mx-auto'>
      <div className="flex justify-center items-center mb-8 w-full">
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
        <div>
          {/* Insert product cards here */}
        </div>
      </section>
    </div>
  );
}

export default Home;
