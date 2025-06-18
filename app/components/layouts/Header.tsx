/**
 * @file Header.tsx
 * @description サイトのヘッダーコンポーネント
 */

import Link from 'next/link';

/**
 * ヘッダーコンポーネント
 * @returns {JSX.Element} ヘッダーコンポーネント
 */
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Develoop
          </Link>
          <div className="space-x-6">
            <Link href="/events" className="text-gray-600 hover:text-gray-900">
              イベント
            </Link>
            <Link href="/ideas" className="text-gray-600 hover:text-gray-900">
              アイディア
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900">
              プロジェクト
            </Link>
            <Link href="/members" className="text-gray-600 hover:text-gray-900">
              メンバー
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 