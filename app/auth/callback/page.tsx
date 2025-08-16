/**
 * @file auth/callback/page.tsx
 * @description OAuth認証コールバック処理ページ
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

/**
 * OAuth認証コールバックページコンポーネント
 * @returns {JSX.Element} コールバックページコンポーネント
 */
export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // URLハッシュからセッション情報を取得
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('認証エラー:', error);
          // エラーの場合はサインインページに戻る
          router.push('/auth/signin?error=callback_error');
          return;
        }

        if (data.session) {
          // 認証成功時はホームページにリダイレクト
          console.log('認証成功:', data.session.user);
          router.push('/');
        } else {
          // セッションがない場合はサインインページに戻る
          router.push('/auth/signin');
        }
      } catch (error) {
        console.error('コールバック処理エラー:', error);
        router.push('/auth/signin?error=callback_error');
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">認証処理中...</p>
      </div>
    </div>
  );
}
