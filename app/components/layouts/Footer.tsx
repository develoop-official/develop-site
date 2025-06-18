/**
 * @file Footer.tsx
 * @description サイトのフッターコンポーネント
 */

/**
 * フッターコンポーネント
 * @returns {JSX.Element} フッターコンポーネント
 */
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Develoop</h3>
            <p className="text-gray-300">
              大学のプログラミングサークル
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <a href="/events" className="text-gray-300 hover:text-white">
                  イベント
                </a>
              </li>
              <li>
                <a href="/ideas" className="text-gray-300 hover:text-white">
                  アイディア
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-white">
                  プロジェクト
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
            <p className="text-gray-300">
              Email: contact@develoop.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Develoop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 