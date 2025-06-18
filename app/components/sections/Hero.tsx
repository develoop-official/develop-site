/**
 * @file Hero.tsx
 * @description トップページのヒーローセクションコンポーネント
 */

/**
 * ヒーローセクションコンポーネント
 * @returns {JSX.Element} ヒーローセクションコンポーネント
 */
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
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
      </div>
    </section>
  );
};

export default Hero; 