/**
 * @file not-found.tsx
 * @description 404ページ - ページが見つからない場合のエラーページ
 */

import Link from 'next/link';
import { JSX } from 'react';

/**
 * 404ページコンポーネント
 * @returns {JSX.Element} 404ページコンポーネント
 */
export default function NotFound(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404アイコン */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
          <div className="text-2xl font-semibold text-gray-800 mb-2">
            ページが見つかりません
          </div>
          <p className="text-gray-600">
            お探しのページは存在しないか、移動または削除された可能性があります。
          </p>
        </div>

        {/* ナビゲーション */}
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            ホームに戻る
          </Link>
          
          <div className="text-sm text-gray-500">
            または以下のページをご利用ください：
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/events"
              className="bg-white text-blue-600 py-2 px-4 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors text-sm"
            >
              イベント一覧
            </Link>
            <Link
              href="/projects"
              className="bg-white text-blue-600 py-2 px-4 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors text-sm"
            >
              プロジェクト一覧
            </Link>
          </div>
        </div>

        {/* ヘルプ情報 */}
        <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">お困りの場合</h3>
          <p className="text-sm text-gray-600">
            サークルメンバーの方は、Discordでお問い合わせください。
          </p>
        </div>
      </div>
    </div>
  );
}
