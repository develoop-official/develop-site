/**
 * @file Hero.tsx
 * @description トップページのヒーローセクションコンポーネント（画像3枚を時間で変化）
 */

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// ヒーロー画像の配列
const heroImages = [
  {
    src: '/images/heros/hero-1.png',
    alt: 'チームでの協働作業の様子'
  },
  {
    src: '/images/heros/hero-2.png',
    alt: 'オフィスでの技術的な議論'
  },
  {
    src: '/images/heros/hero-3.png',
    alt: 'テーブルを囲んでの会話'
  }
];

/**
 * ヒーローセクションコンポーネント
 * @returns {JSX.Element} ヒーローセクションコンポーネント
 */
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // デバッグ用: コンポーネントのマウントを確認
  useEffect(() => {
    console.log('Heroコンポーネントがマウントされました');
    console.log('画像配列:', heroImages);
  }, []);

  // 5秒ごとに画像を切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像 - フェードイン・アウト効果付き */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            onError={(e) => {
              console.error(`画像の読み込みに失敗しました: ${image.src}`);
              // エラーが発生した場合、この画像を非表示にする
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* 画像の上にオーバーレイを追加 */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ))}
      
      {/* フォールバック背景 - 画像が読み込めない場合のデフォルト背景 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
      
      {/* コンテンツ */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* デバッグ情報 */}
        <div className="mb-4 p-2 bg-black bg-opacity-50 rounded text-sm">
          現在の画像: {currentImageIndex + 1} / {heroImages.length}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Develoop
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          大学のプログラミングサークル
        </p>
        <p className="text-lg mb-12">
          アイディアを形に、技術で未来を創る
        </p>
        <div className="space-x-4">
          <a
            href="/events"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            イベントを見る
          </a>
          <a
            href="/projects"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            プロジェクトを見る
          </a>
        </div>
      </div>

      {/* 画像インジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImageIndex 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`画像${index + 1}に切り替え`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 