/**
 * @file events/page.tsx
 * @description イベント一覧ページ - サークルのイベントを一覧表示
 */

import Link from 'next/link';
import  EventCard  from '../components/elements/EventCard';
import { JSX } from 'react';

/**
 * イベント一覧ページコンポーネント
 * @returns {JSX.Element} イベント一覧ページコンポーネント
 */
export default function EventsPage(): JSX.Element {
  // 仮のイベントデータ（後でSupabaseから取得）
  const events = [
    {
      id: 1,
      title: 'プログラミング勉強会 #1',
      description: 'ReactとTypeScriptの基礎を学ぼう',
      date: '2024-12-20',
      time: '19:00-21:00',
      location: 'オンライン（Discord）',
      participants: 15,
      maxParticipants: 20,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'ハッカソン準備会',
      description: '来月のハッカソンに向けてチーム編成とアイデア出し',
      date: '2024-12-25',
      time: '14:00-17:00',
      location: '大学内会議室A',
      participants: 8,
      maxParticipants: 12,
      status: 'upcoming'
    },
    {
      id: 3,
      title: '技術共有会',
      description: '各自が学んだ技術を共有する会',
      date: '2024-12-18',
      time: '18:00-20:00',
      location: 'オンライン（Zoom）',
      participants: 12,
      maxParticipants: 15,
      status: 'completed'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">イベント一覧</h1>
              <p className="mt-2 text-gray-600">
                サークルのイベントや勉強会の情報を確認できます
              </p>
            </div>
            <Link
              href="/events/create"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              イベントを作成
            </Link>
          </div>
        </div>
      </div>

      {/* フィルター・検索 */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg border border-blue-200">
                すべて
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
                開催予定
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
                終了済み
              </button>
            </div>
            
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="イベントを検索..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* イベント一覧 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard 
                key={event.id}
                title={event.title} 
                description={event.description}
                date={event.date}
                location={event.location}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📅</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              イベントがありません
            </h3>
            <p className="text-gray-600 mb-6">
              最初のイベントを作成してみましょう！
            </p>
            <Link
              href="/events/create"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              イベントを作成
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
