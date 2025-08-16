/**
 * @file projects/create/page.tsx
 * @description 進捗投稿ページ - 新しい進捗やプロジェクトを投稿する
 */

'use client';

import { JSX, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ProtectedRoute from '../../components/auth/ProtectedRoute';

/**
 * 進捗投稿ページコンポーネント
 * @returns {JSX.Element} 進捗投稿ページコンポーネント
 */
export default function CreateProjectPage(): JSX.Element {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    tags: '',
    progress: 0,
    status: 'in-progress',
    isPublic: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * フォームデータの更新処理
   * @param {string} field - フィールド名
   * @param {string | number | boolean} value - 値
   */
  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  /**
   * フォーム送信処理
   * @param {React.FormEvent} e - フォームイベント
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Supabaseに進捗データを保存
      console.log('進捗投稿データ:', formData);
      
      // 成功時の処理
      alert('進捗が投稿されました！');
      router.push('/projects');
    } catch (error) {
      console.error('進捗投稿エラー:', error);
      alert('進捗の投稿に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">進捗を投稿</h1>
              <p className="mt-2 text-gray-600">
                学習の進捗やプロジェクトの状況を共有しましょう
              </p>
            </div>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← プロジェクト一覧に戻る
            </Link>
          </div>
        </div>
      </div>

      {/* フォーム */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border p-6">
          <div className="space-y-6">
            {/* タイトル */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                タイトル <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                required
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="例: React + TypeScript 学習アプリ"
              />
            </div>

            {/* 簡潔な説明 */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                簡潔な説明 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                required
                rows={3}
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="プロジェクトの概要や目的を簡潔に説明してください"
              />
            </div>

            {/* 詳細な内容（Markdown対応） */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                詳細な内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="content"
                required
                rows={8}
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                placeholder={`# 学習内容

## 今日学んだこと
- Reactのコンポーネントの概念
- TypeScriptの型システム

## 実装した機能
- 基本的なカウンターアプリ
- プロップスの受け渡し

## 次回の予定
- 状態管理の学習
- より複雑なコンポーネントの作成

Markdown形式で記述できます。`}
              />
              <p className="mt-1 text-sm text-gray-500">
                Markdown形式で記述できます。見出し、リスト、コードブロックなどが使用可能です。
              </p>
            </div>

            {/* 進捗状況 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="progress" className="block text-sm font-medium text-gray-700 mb-2">
                  進捗率 <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    id="progress"
                    min="0"
                    max="100"
                    value={formData.progress}
                    onChange={(e) => handleInputChange('progress', parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-lg font-semibold text-blue-600 w-16 text-center">
                    {formData.progress}%
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {formData.progress === 0 && '計画中'}
                  {formData.progress > 0 && formData.progress < 100 && '進行中'}
                  {formData.progress === 100 && '完了'}
                </div>
              </div>
              
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                  ステータス
                </label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="planning">計画中</option>
                  <option value="in-progress">進行中</option>
                  <option value="completed">完了</option>
                  <option value="on-hold">一時停止</option>
                </select>
              </div>
            </div>

            {/* タグ */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                タグ
              </label>
              <input
                type="text"
                id="tags"
                value={formData.tags}
                onChange={(e) => handleInputChange('tags', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="例: React, TypeScript, 学習アプリ"
              />
              <p className="mt-1 text-sm text-gray-500">
                カンマ区切りで複数のタグを入力できます
              </p>
            </div>

            {/* 公開設定 */}
            <div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isPublic"
                  checked={formData.isPublic}
                  onChange={(e) => handleInputChange('isPublic', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isPublic" className="ml-2 text-sm font-medium text-gray-700">
                  公開する
                </label>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                チェックを外すと、自分だけが見える非公開の投稿になります
              </p>
            </div>
          </div>

          {/* 送信ボタン */}
          <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
            <Link
              href="/projects"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              キャンセル
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? '投稿中...' : '進捗を投稿'}
            </button>
          </div>
        </form>
      </div>
    </div>
    </ProtectedRoute>
  );
}
