/**
 * @file projects/page.tsx
 * @description プロジェクト一覧ページ - サークルメンバーの進捗・プロジェクトを一覧表示
 */

import Link from 'next/link';
import  IdeaCard  from '../components/elements/IdeaCard';
import { JSX } from 'react';

/**
 * プロジェクト一覧ページコンポーネント
 * @returns {JSX.Element} プロジェクト一覧ページコンポーネント
 */
export default function ProjectsPage(): JSX.Element {
  // 仮のプロジェクトデータ（後でSupabaseから取得）
  const projects = [
    {
      id: 1,
      title: 'React + TypeScript 学習アプリ',
      description: 'プログラミング初心者向けの学習アプリを開発中。コンポーネントの概念とTypeScriptの型システムを学びながら実装しています。',
      author: '田中太郎',
      authorAvatar: '/images/avatars/user1.jpg',
      tags: ['React', 'TypeScript', '学習アプリ'],
      progress: 75,
      lastUpdated: '2024-12-15',
      likes: 12,
      comments: 5
    },
    {
      id: 2,
      title: 'Discord Bot 開発',
      description: 'サークル用のDiscord Botを作成。イベント通知や進捗管理の機能を実装予定です。',
      author: '佐藤花子',
      authorAvatar: '/images/avatars/user2.jpg',
      tags: ['Discord.js', 'Node.js', 'Bot'],
      progress: 45,
      lastUpdated: '2024-12-14',
      likes: 8,
      comments: 3
    },
    {
      id: 3,
      title: 'ポートフォリオサイト',
      description: '就職活動用のポートフォリオサイトを制作中。レスポンシブデザインとモダンなUIを意識しています。',
      author: '山田次郎',
      authorAvatar: '/images/avatars/user3.jpg',
      tags: ['HTML', 'CSS', 'JavaScript', 'レスポンシブ'],
      progress: 90,
      lastUpdated: '2024-12-16',
      likes: 15,
      comments: 7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">プロジェクト一覧</h1>
              <p className="mt-2 text-gray-600">
                サークルメンバーの進捗やプロジェクトを確認できます
              </p>
            </div>
            <Link
              href="/projects/create"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              進捗を投稿
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
                進行中
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
                完了
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
                計画中
              </button>
            </div>
            
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="プロジェクトを検索..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* プロジェクト一覧 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <IdeaCard key={project.id} title={project.title} description={project.description} author={project.author} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">💡</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              プロジェクトがありません
            </h3>
            <p className="text-gray-600 mb-6">
              最初の進捗を投稿してみましょう！
            </p>
            <Link
              href="/projects/create"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              進捗を投稿
            </Link>
          </div>
        )}
      </div>

      {/* 統計情報 */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{projects.length}</div>
              <div className="text-sm text-gray-600">総プロジェクト数</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {projects.filter(p => p.progress === 100).length}
              </div>
              <div className="text-sm text-gray-600">完了プロジェクト</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">
                {projects.filter(p => p.progress > 0 && p.progress < 100).length}
              </div>
              <div className="text-sm text-gray-600">進行中</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {projects.reduce((sum, p) => sum + p.likes, 0)}
              </div>
              <div className="text-sm text-gray-600">総いいね数</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
