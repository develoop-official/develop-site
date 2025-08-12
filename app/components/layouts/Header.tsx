/**
 * @file Header.tsx
 * @description サイトのヘッダーコンポーネント
 */

import Link from 'next/link';
import Image from 'next/image';

/**
 * ヘッダーコンポーネント
 * @returns {JSX.Element} ヘッダーコンポーネント
 */
const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* home_button - 白いパネルで丸みを帯びたデザイン */}
          <div className="bg-white rounded-r-3xl px-6 py-3 -mr-6 shadow-lg">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/develoop_logo2.png"
                alt="Develoop"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-black">DEVELOOP</span>
            </Link>
          </div>
          
          {/* ナビゲーションエリア - 丸みを帯びた白いコンテナ */}
          <div className="flex space-x-4">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="flex space-x-6">
                <Link href="/events" className="text-black hover:text-blue-600 font-medium">
                  イベント
                </Link>
                <Link href="/ideas" className="text-black hover:text-blue-600 font-medium">
                  アイディア
                </Link>
                <Link href="/about" className="text-black hover:text-blue-600 font-medium">
                  サークルについて
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-lg">
              <Link href="/login" className="text-black hover:text-blue-600 font-medium">
                ログイン
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 