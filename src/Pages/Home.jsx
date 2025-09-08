// HomePage.jsx

import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { fetchProducts, getProducts } from '../store/slices/ProductSlice';
import { useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';


export default function Home() {

  const {data, loading, error} = useSelector((state) => state.Products)
  console.log(data,loading,error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());

  }, [])
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Wireless Headphones',
  //     description: 'High-quality over-ear headphones with noise cancellation.',
  //     price: 99.99,
  //     image: 'https://via.placeholder.com/300x200?text=Headphones',
  //   },
  //   {
  //     id: 2,
  //     name: 'Smart Watch',
  //     description: 'Stay connected and track your health on the go.',
  //     price: 149.99,
  //     image: 'https://via.placeholder.com/300x200?text=Smart+Watch',
  //   },
  //   {
  //     id: 3,
  //     name: 'Running Shoes',
  //     description: 'Lightweight and comfortable for everyday use.',
  //     price: 79.99,
  //     image: 'https://via.placeholder.com/300x200?text=Shoes',
  //   },
  //   {
  //     id: 4,
  //     name: 'Bluetooth Speaker',
  //     description: 'Portable speaker with amazing sound quality.',
  //     price: 59.99,
  //     image: 'https://via.placeholder.com/300x200?text=Speaker',
  //   },
  // ];


    if (loading) return <LoadingScreen />;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
