import React from 'react';

type Product = {
  id: string;
  video: string;
  name: string;
  description: string;
  tags: string[];
  price: string;
  oldPrice?: string;
  discountTag?: string;
  shippingTag?: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <video className="w-full" src={product.video} autoPlay muted loop />
      <div className="px-6 py-4">
        {product.discountTag && (
          <span className="bg-red-500 text-white font-bold rounded-full px-2">
            {product.discountTag}
          </span>
        )}
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">
          {product.description}
        </p>
        <p className="text-gray-500 text-xs my-2">
          {product.tags.join(' | ')}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        {product.oldPrice && (
          <span className="text-sm line-through text-gray-500">{product.oldPrice}</span>
        )}
        <span className="text-xl font-bold text-gray-900">{product.price}</span>
        {product.shippingTag && (
          <span className="text-green-500 text-xs font-bold rounded-full px-2">
            {product.shippingTag}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
