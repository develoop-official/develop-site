/**
 * @file events/create/page.tsx
 * @description イベント作成ページ - 新しいイベントを作成する
 */

'use client';

import { JSX, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ProtectedRoute from '../../components/auth/ProtectedRoute';

/**
 * イベント作成ページコンポーネント
 * @returns {JSX.Element} イベント作成ページコンポーネント
 */
export default function CreateEventPage(): JSX.Element {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    maxParticipants: '',
    isOnline: false,
    onlineUrl: '',
    tags: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * フォームデータの更新処理
   * @param {string} field - フィールド名
   * @param {string | boolean} value - 値
   */
  const handleInputChange = (field: string, value: string | boolean) => {
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
      // TODO: Supabaseにイベントデータを保存
      console.log('イベント作成データ:', formData);
      
      // 成功時の処理
      alert('イベントが作成されました！');
      router.push('/events');
    } catch (error) {
      console.error('イベント作成エラー:', error);
      alert('イベントの作成に失敗しました。もう一度お試しください。');
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
              <h1 className="text-3xl font-bold text-gray-900">イベントを作成</h1>
              <p className="mt-2 text-gray-600">
                新しいイベントや勉強会の情報を入力してください
              </p>
            </div>
            <Link
              href="/events"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← イベント一覧に戻る
            </Link>
          </div>
        </div>
      </div>

      {/* フォーム */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border p-6">
          <div className="space-y-6">
            {/* イベント名 */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                イベント名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                required
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="例: プログラミング勉強会 #1"
              />
            </div>

            {/* 説明 */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                説明 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                required
                rows={4}
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="イベントの詳細や目的を説明してください"
              />
            </div>

            {/* 日時・場所 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  開催日 <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                  開催時間 <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  id="time"
                  required
                  value={formData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* オンライン/オフライン設定 */}
            <div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="isOnline"
                  checked={formData.isOnline}
                  onChange={(e) => handleInputChange('isOnline', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isOnline" className="ml-2 text-sm font-medium text-gray-700">
                  オンラインイベント
                </label>
              </div>
              
              {formData.isOnline ? (
                <div>
                  <label htmlFor="onlineUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    オンラインURL
                  </label>
                  <input
                    type="url"
                    id="onlineUrl"
                    value={formData.onlineUrl}
                    onChange={(e) => handleInputChange('onlineUrl', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://discord.gg/..."
                  />
                </div>
              ) : (
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    開催場所
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="例: 大学内会議室A"
                  />
                </div>
              )}
            </div>

            {/* 参加者数制限 */}
            <div>
              <label htmlFor="maxParticipants" className="block text-sm font-medium text-gray-700 mb-2">
                最大参加者数
              </label>
              <input
                type="number"
                id="maxParticipants"
                min="1"
                value={formData.maxParticipants}
                onChange={(e) => handleInputChange('maxParticipants', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="制限なしの場合は空欄"
              />
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
                placeholder="例: React, TypeScript, 初心者歓迎"
              />
              <p className="mt-1 text-sm text-gray-500">
                カンマ区切りで複数のタグを入力できます
              </p>
            </div>
          </div>

          {/* 送信ボタン */}
          <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
            <Link
              href="/events"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              キャンセル
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? '作成中...' : 'イベントを作成'}
            </button>
          </div>
        </form>
      </div>
    </div>
    </ProtectedRoute>
  );
}
