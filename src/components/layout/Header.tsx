import Logo from '../common/Logo';
import SearchBar from '../common/SearchBar';
import CartIcon from '../common/CartIcon';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header>
      <div className="bg-[#131921] dark:bg-black text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Logo />
          <SearchBar />
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <div className="text-sm">
                <div className="text-gray-300">こんにちは</div>
                <div className="font-bold">アカウント＆リスト</div>
              </div>
            </div>
            <ThemeToggle />
            <CartIcon />
          </div>
        </div>
      </div>
      <nav className="bg-[#232f3e] dark:bg-gray-800 py-1">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4 text-sm text-white">
            <li className="cursor-pointer hover:text-gray-300">すべて</li>
            <li className="cursor-pointer hover:text-gray-300">Prime Video</li>
            <li className="cursor-pointer hover:text-gray-300">マイストア</li>
            <li className="cursor-pointer hover:text-gray-300">ギフト券</li>
            <li className="cursor-pointer hover:text-gray-300">Amazonで売る</li>
          </ul>
        </div>
      </nav>
    </header>
  );
} 