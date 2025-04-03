import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="text-white font-bold text-2xl">
        <span className="text-[#FF9900]">Amazon</span>
        <span className="text-xs align-top">.co.jp</span>
      </div>
    </Link>
  );
} 