/* eslint-disable @typescript-eslint/no-explicit-any */
function Card({ icon: Icon, children }: { icon: any, children: any })  {
    return (
      <div className="flex items-center justify-center bg-gray-800 text-white p-4 rounded-lg w-full hover:bg-black hover:bg-opacity-90 transition-all cursor-pointer">
        <Icon className="h-6 w-6 mr-2" />
        {children}
      </div>
    );
  }

  export default Card;