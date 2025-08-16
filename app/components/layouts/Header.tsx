'use client';

/**
 * @file Header.tsx
 * @description サイトのヘッダーコンポーネント（レスポンシブ対応・ハンバーガーメニュー付き）
 */

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useAuth } from '@/app/contexts/AuthContext';

/**
 * ヘッダーコンポーネント
 * @returns {JSX.Element} ヘッダーコンポーネント
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading, signOut } = useAuth();

  /**
   * ハンバーガーメニューの開閉を切り替える
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * メニューを閉じる
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /**
   * サインアウト処理
   */
  const handleSignOut = async () => {
    try {
      await signOut();
      closeMenu();
    } catch (error) {
      console.error('サインアウトエラー:', error);
      alert('サインアウトに失敗しました。');
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="pl-0 pr-4 py-4">
        <div className="flex justify-between items-center">
          {/* home_button - 白いパネルで丸みを帯びたデザイン */}
          <div className="bg-white rounded-r-3xl px-6 py-3 shadow-lg">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
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
          
          {/* デスクトップ用ナビゲーション - スマホでは非表示 */}
          <div className="hidden md:flex space-x-4">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="flex space-x-6">
                <Link href="/events" className="text-black hover:text-blue-600 font-medium">
                  イベント
                </Link>
                <Link href="/ideas" className="text-black hover:text-blue-600 font-medium">
                  アイディア
                </Link>
                <Link href="/projects" className="text-black hover:text-blue-600 font-medium">
                  プロジェクト
                </Link>
                <Link href="/aboutme" className="text-black hover:text-blue-600 font-medium">
                  サークルについて
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-lg">
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link href="/profile" className="text-black hover:text-blue-600 font-medium">
                    プロフィール
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-black hover:text-red-600 font-medium"
                  >
                    ログアウト
                  </button>
                </div>
              ) : (
                <Link href="/auth/signin" className="text-black hover:text-blue-600 font-medium">
                  ログイン
                </Link>
              )}
            </div>
          </div>

          {/* ハンバーガーメニューボタン - スマホでのみ表示 */}
          <button
            className="md:hidden bg-white rounded-full p-3 shadow-lg"
            onClick={toggleMenu}
            aria-label="メニューを開く"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}></span>
              <span className={`block w-5 h-0.5 bg-black mt-1 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-5 h-0.5 bg-black mt-1 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* モバイル用ナビゲーションメニュー - オーバーレイ形式 */}
        <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}>
          <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'
          }`} onClick={closeMenu}></div>
          <div className={`absolute top-0 right-0 w-64 h-full bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="p-6">
              <div className="flex justify-end mb-6">
                <button
                  onClick={closeMenu}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="メニューを閉じる"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <Link
                  href="/events"
                  className="block py-3 px-4 text-lg text-black hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  イベント
                </Link>
                <Link
                  href="/ideas"
                  className="block py-3 px-4 text-lg text-black hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  アイディア
                </Link>
                <Link
                  href="/projects"
                  className="block py-3 px-4 text-lg text-black hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  プロジェクト
                </Link>
                <Link
                  href="/aboutme"
                  className="block py-3 px-4 text-lg text-black hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  サークルについて
                </Link>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  {user ? (
                    <>
                      <Link
                        href="/profile"
                        className="block py-3 px-4 text-lg text-black hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={closeMenu}
                      >
                        プロフィール
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left py-3 px-4 text-lg text-black hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        ログアウト
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/auth/signin"
                      className="block py-3 px-4 text-lg text-black hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={closeMenu}
                    >
                      ログイン
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 