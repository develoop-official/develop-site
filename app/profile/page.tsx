/**
 * プロフィールページ
 * 
 * ユーザーのプロフィール情報とプロジェクト履歴を表示するページ
 * 
 * @description 左側にプロフィール画像、名前、説明文を表示し、
 * 右側に現在のプロジェクトと過去のプロジェクトを表示する
 * @author Develoop Team
 * @version 1.0.0
 */

'use client';

import { useState, useEffect } from 'react';
import Header from '../components/layouts/Header';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import { useAuth } from '../contexts/AuthContext';
import { userProfile } from '@/lib/supabase';
import type { UpdateUserProfileData } from '@/types/user';

/**
 * プロフィールページのメインコンポーネント
 * 
 * @returns {React.ReactElement} プロフィールページのReact要素
 */
export default function ProfilePage(): React.ReactElement {
  const { user, profile, refreshProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    icon_url: '',
    profile_message: '',
  });

  // プロフィールデータが変更されたときにフォームデータを更新
  useEffect(() => {
    if (profile) {
      setFormData({
        username: profile.username || '',
        icon_url: profile.icon_url || '',
        profile_message: profile.profile_message || '',
      });
    }
  }, [profile]);

  /**
   * フォームデータの更新
   */
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  /**
   * プロフィール更新処理
   */
  const handleUpdateProfile = async () => {
    setIsUpdating(true);
    try {
      const updates: UpdateUserProfileData = {};
      
      // 空文字列の場合はnullに変換
      if (formData.username.trim() !== (profile?.username || '')) {
        updates.username = formData.username.trim() || '';
      }
      if (formData.icon_url.trim() !== (profile?.icon_url || '')) {
        updates.icon_url = formData.icon_url.trim() || '';
      }
      if (formData.profile_message.trim() !== (profile?.profile_message || '')) {
        updates.profile_message = formData.profile_message.trim() || '';
      }

      // 最低限ユーザー名は必須とする
      if (!formData.username.trim()) {
        updates.username = user?.email?.split('@')[0] || 'user';
      }

      // 何かしらの更新がある場合のみ実行
      if (Object.keys(updates).length > 0) {
        const { data, error } = await userProfile.updateProfile(updates);
        
        if (error) {
          throw error;
        }
        
        await refreshProfile();
        alert('プロフィールを更新しました！');
      } else {
        alert('変更がありませんでした。');
      }
      
      setIsEditing(false);
    } catch (error: any) {
      console.error('プロフィール更新エラー:', error);
      
      let errorMessage = 'プロフィールの更新に失敗しました。';
      if (error.message.includes('duplicate key') || error.code === '23505') {
        errorMessage = 'そのユーザー名は既に使用されています。';
      } else if (error.code === 'PGRST116') {
        errorMessage = 'プロフィールの作成に失敗しました。もう一度お試しください。';
      }
      
      alert(errorMessage);
    } finally {
      setIsUpdating(false);
    }
  };

  /**
   * 編集キャンセル
   */
  const handleCancelEdit = () => {
    setFormData({
      username: profile?.username || '',
      icon_url: profile?.icon_url || '',
      profile_message: profile?.profile_message || '',
    });
    setIsEditing(false);
  };

  /**
   * 編集開始
   */
  const handleStartEdit = () => {
    setFormData({
      username: profile?.username || '',
      icon_url: profile?.icon_url || '',
      profile_message: profile?.profile_message || '',
    });
    setIsEditing(true);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        {/* ヘッダー */}
        <Header />
        
        {/* ヘッダーと重なる空白部分 */}
        <div className="h-32 bg-white"></div>

        {/* メインコンテンツ */}
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* 左側：プロフィールセクション */}
            <div className="space-y-6">
              {/* プロフィール画像 */}
              <div className="flex justify-center">
                <div className="relative">
                  {profile?.icon_url ? (
                    <img
                      src={profile.icon_url}
                      alt="プロフィール画像"
                      className="w-48 h-48 rounded-full object-cover border-4 border-blue-200"
                    />
                  ) : (
                    <div className="w-48 h-48 bg-amber-200 rounded-full flex items-center justify-center">
                      <span className="text-4xl text-amber-600">👤</span>
                    </div>
                  )}
                  {isEditing && (
                    <div className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              
              {/* 名前 */}
              <div className="text-center">
                {isEditing ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      className="text-3xl font-bold text-gray-900 text-center bg-transparent border-b-2 border-blue-500 focus:outline-none"
                      placeholder="ユーザー名を入力"
                    />
                    <p className="text-sm text-gray-500">
                      メールアドレス: {user?.email}
                    </p>
                  </div>
                ) : (
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                      {profile?.username || user?.email || 'ユーザー'}
                    </h1>
                    <p className="text-gray-600 mt-2">
                      {user?.email}
                    </p>
                  </div>
                )}
              </div>
              
              {/* プロフィールメッセージ */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">プロフィール</h3>
                  {!isEditing && (
                    <button
                      onClick={handleStartEdit}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      編集
                    </button>
                  )}
                </div>
                
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        アイコンURL
                      </label>
                      <input
                        type="url"
                        value={formData.icon_url}
                        onChange={(e) => handleInputChange('icon_url', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://example.com/icon.jpg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        プロフィールメッセージ
                      </label>
                      <textarea
                        value={formData.profile_message}
                        onChange={(e) => handleInputChange('profile_message', e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="自己紹介やメッセージを入力してください"
                      />
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={handleUpdateProfile}
                        disabled={isUpdating}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isUpdating ? '更新中...' : '保存'}
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                      >
                        キャンセル
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {profile?.profile_message ? (
                      <p className="text-gray-700 whitespace-pre-wrap">
                        {profile.profile_message}
                      </p>
                    ) : (
                      <p className="text-gray-500 italic">
                        プロフィールメッセージが設定されていません
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* ユーザー情報 */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">ユーザー情報</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">メールアドレス:</span>
                    <span className="text-gray-900">{user?.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">登録日:</span>
                    <span className="text-gray-900">
                      {user?.created_at ? new Date(user.created_at).toLocaleDateString('ja-JP') : '-'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">認証方法:</span>
                    <span className="text-gray-900">
                      {user?.app_metadata?.provider === 'discord' ? 'Discord' : 'Email'}
                    </span>
                  </div>
                  {profile?.updated_at && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">プロフィール更新日:</span>
                      <span className="text-gray-900">
                        {new Date(profile.updated_at).toLocaleDateString('ja-JP')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* 右側：プロジェクトセクション */}
            <div className="space-y-8">
              {/* 現在のプロジェクト */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Current project</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-6 rounded-lg border-2 border-blue-500">
                    <div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded animate-pulse w-3/4"></div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded animate-pulse w-3/4"></div>
                  </div>
                </div>
              </div>
              
              {/* 過去のプロジェクト */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Past project</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded animate-pulse w-3/4"></div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded animate-pulse w-3/4"></div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded animate-pulse w-3/4"></div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded animate-pulse w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
