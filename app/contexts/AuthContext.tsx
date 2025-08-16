/**
 * @file contexts/AuthContext.tsx
 * @description 認証状態管理コンテキスト
 */

'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { auth, userProfile } from '@/lib/supabase';
import type { UserProfile } from '@/types/user';

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signOut: async () => {},
  refreshProfile: async () => {},
});

/**
 * 認証コンテキストプロバイダー
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 初期認証状態を確認
    const getInitialSession = async () => {
      const { user } = await auth.getCurrentUser();
      setUser(user);
      
      if (user) {
        // ユーザーがログインしている場合、プロフィール情報を取得
        const { data: profileData } = await userProfile.getProfile();
        setProfile(profileData);
      }
      
      setLoading(false);
    };

    getInitialSession();

    // 認証状態の変更を監視
    const { data: { subscription } } = auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // ログイン時にプロフィール情報を取得
          const { data: profileData } = await userProfile.getProfile();
          setProfile(profileData);
        } else {
          // ログアウト時にプロフィール情報をクリア
          setProfile(null);
        }
        
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await auth.signOut();
    setProfile(null);
  };

  const refreshProfile = async () => {
    if (user) {
      const { data: profileData } = await userProfile.getProfile();
      setProfile(profileData);
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signOut, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * 認証コンテキストフック
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
