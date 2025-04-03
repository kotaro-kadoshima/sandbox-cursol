'use client';

export default function SearchBar() {
  return (
    <div className="flex flex-1 mx-4">
      <div className="flex items-center w-full">
        <select className="bg-gray-100 text-black px-2 py-2 rounded-l-md text-sm">
          <option>すべて</option>
          <option>水筒</option>
          {/* 他のカテゴリーもここに追加 */}
        </select>
        <input
          type="text"
          className="w-full px-4 py-2 text-black"
          placeholder="検索"
        />
        <button className="bg-[#febd69] hover:bg-[#f3a847] px-4 py-2 rounded-r-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
} 