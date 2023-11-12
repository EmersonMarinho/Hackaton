import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
