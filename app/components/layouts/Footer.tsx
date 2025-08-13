/**
 * @file Footer.tsx
 * @description サイトのフッターコンポーネント
 */

/**
 * フッターコンポーネント
 * @returns {JSX.Element} フッターコンポーネント
 * @todo Q&Aリンクセクションを追加する
 * @todo ソーシャルメディアリンクを追加する
 * @todo ニュースレター登録フォームを実装する
 * @todo フッターのレスポンシブデザインを改善する
 * @todo アクセシビリティ対応を強化する
 */
import Link from "next/link";
import { DiscordIcon, XIcon } from "../elements/SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link href="/">
              <img src="/logo-inverse.png" alt="ロゴ" className="mb-2 ml-0 w-48 h-48" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:flex-row space-y-8 md:space-y-4 md:space-x-6 md:grid-cols-2 lg:space-x-8 lg:grid-cols-3 xl:space-x-12">
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
              <h3 className="text-xl font-bold mb-4">Q&A</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white">
                    よくある質問
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-300 hover:text-white">
                    サポート
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div className="mb-4 sm:mb-0">
                  <p className="text-gray-300">
                    Email: contact@develoop.com
                  </p>
                </div>
              </div>
              <div className="flex flex-row space-x-2">
              <a
                href="https://discord.gg/xBvdd3Guak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Discordサーバーに参加"
              >
                <DiscordIcon />
              </a>
              <a
                href="https://x.com/your-account"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="X（Twitter）でフォロー"
              >
                <XIcon />
              </a>
            </div>
            </div>
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