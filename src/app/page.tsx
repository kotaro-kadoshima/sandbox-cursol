import ProductGrid from '@/components/product/ProductGrid';
import { categories, brands, products } from '@/data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-[1480px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* 左側のフィルター */}
          <div className="hidden md:block bg-white p-4 rounded-lg h-fit">
            <h2 className="font-bold mb-2">絞り込み</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold mb-2">カテゴリー</h3>
                {categories.map((category) => (
                  <label key={category} className="flex items-center text-sm mb-1">
                    <input type="checkbox" className="mr-2" />
                    {category}
                  </label>
                ))}
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2">ブランド</h3>
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center text-sm mb-1">
                    <input type="checkbox" className="mr-2" />
                    {brand}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* 商品一覧エリア */}
          <div className="md:col-span-3">
            <div className="bg-white p-4 rounded-lg mb-4">
              <div className="text-sm">
                1-{products.length}件 表示
              </div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <ProductGrid />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
