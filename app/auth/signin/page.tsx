/**
 * @file auth/signin/page.tsx
 * @description サインインページ - Discord OAuth + Email/Password認証
 */

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

/**
 * サインインページコンポーネント
 * @returns {JSX.Element} サインインページコンポーネント
 */
export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /**
   * フォームデータの更新処理
   * @param {string} field - フィールド名
   * @param {string} value - 値
   */
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  /**
   * Email/Passwordサインイン処理
   * @param {React.FormEvent} e - フォームイベント
   */
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Supabase Authでサインイン
      console.log('サインイン試行:', formData);
      
      // 成功時の処理
      alert('サインインに成功しました！');
      router.push('/');
    } catch (error) {
      console.error('サインインエラー:', error);
      alert('サインインに失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Discord OAuth認証処理
   */
  const handleDiscordSignIn = async () => {
    try {
      // TODO: Discord OAuth認証の実装
      console.log('Discord OAuth認証開始');
      alert('Discord OAuth認証機能は準備中です');
    } catch (error) {
      console.error('Discord OAuthエラー:', error);
      alert('Discord認証に失敗しました。');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* ロゴ・タイトル */}
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-blue-600 mb-2">Develoop</div>
          <h1 className="text-2xl font-semibold text-gray-900">サインイン</h1>
          <p className="text-gray-600 mt-2">
            プログラミングサークルの進捗管理アプリ
          </p>
        </div>

        {/* サインインフォーム */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Discord OAuth */}
          <button
            onClick={handleDiscordSignIn}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors mb-6 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Discordでサインイン
          </button>

          {/* 区切り線 */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">または</span>
            </div>
          </div>

          {/* Email/Passwordフォーム */}
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                パスワード
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  required
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  placeholder="パスワードを入力"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'サインイン中...' : 'サインイン'}
            </button>
          </form>

          {/* リンク */}
          <div className="mt-6 text-center">
            <Link
              href="/auth/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              パスワードを忘れた場合
            </Link>
          </div>
        </div>

        {/* サインアップリンク */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            アカウントをお持ちでない方は{' '}
            <Link
              href="/auth/signup"
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              サインアップ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
