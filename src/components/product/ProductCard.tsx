import Image from 'next/image';
import { Product } from '@/data/products';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white p-4 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="relative w-full h-[200px] mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <h3 className="text-blue-600 hover:text-orange-500 hover:underline text-sm mb-1 line-clamp-2">
        {product.title}
      </h3>
      <div className="flex items-center mb-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            {i < Math.floor(product.rating) ? "★" : "☆"}
          </span>
        ))}
        <span className="text-blue-600 text-sm ml-2">
          {product.reviews.toLocaleString()}
        </span>
      </div>
      <div className="flex items-baseline mb-1">
        <span className="text-xs">￥</span>
        <span className="text-xl font-bold">
          {product.price.toLocaleString()}
        </span>
      </div>
      {product.prime && (
        <div className="text-xs text-gray-500 flex items-center">
          <span className="text-[#00A8E1] font-bold mr-1">Prime</span>
          通常配送無料
        </div>
      )}
    </div>
  );
} 