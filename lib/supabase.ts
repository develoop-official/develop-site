/**
 * @file lib/supabase.ts
 * @description Supabaseクライアントの設定
 */

import { createClient } from '@supabase/supabase-js';
import type { UserProfile, UpdateUserProfileData } from '@/types/user';

// 環境変数からSupabaseの設定を取得
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Supabaseクライアントを作成
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Supabase Authのヘルパー関数
 */
export const auth = {
  /**
   * メールアドレスとパスワードでサインイン
   */
  signInWithPassword: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  /**
   * メールアドレスとパスワードでサインアップ
   */
  signUp: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    return { data, error };
  },

  /**
   * Discord OAuth認証
   */
  signInWithDiscord: async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    return { data, error };
  },

  /**
   * サインアウト
   */
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  /**
   * 現在のユーザー情報を取得
   */
  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
  },

  /**
   * 認証状態の変更を監視
   */
  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    return supabase.auth.onAuthStateChange(callback);
  },
};

/**
 * ユーザープロフィール管理のヘルパー関数
 */
export const userProfile = {
  /**
   * ユーザープロフィールを取得
   */
  getProfile: async (userId?: string): Promise<{ data: UserProfile | null; error: any }> => {
    const targetUserId = userId || (await supabase.auth.getUser()).data.user?.id;
    
    if (!targetUserId) {
      return { data: null, error: new Error('User not authenticated') };
    }

    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', targetUserId)
      .single();

    // プロフィールが存在しない場合は自動作成
    if (error && error.code === 'PGRST116') {
      const { data: { user } } = await supabase.auth.getUser();
      if (user && user.id === targetUserId) {
        const { data: newProfile, error: createError } = await supabase
          .from('user_profiles')
          .insert({
            id: user.id,
            username: user.email?.split('@')[0] || 'user',
            icon_url: null,
            profile_message: null,
          })
          .select()
          .single();

        return { data: newProfile as UserProfile | null, error: createError };
      }
    }

    return { data: data as UserProfile | null, error };
  },

  /**
   * ユーザープロフィールを更新
   */
  updateProfile: async (updates: UpdateUserProfileData): Promise<{ data: UserProfile | null; error: any }> => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { data: null, error: new Error('User not authenticated') };
    }

    // まず既存のプロフィールがあるかチェック
    const { data: existingProfile } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (!existingProfile) {
      // プロフィールが存在しない場合は新規作成
      const { data, error } = await supabase
        .from('user_profiles')
        .insert({
          id: user.id,
          username: updates.username || user.email?.split('@')[0] || 'user',
          icon_url: updates.icon_url,
          profile_message: updates.profile_message,
        })
        .select()
        .single();

      return { data: data as UserProfile | null, error };
    } else {
      // プロフィールが存在する場合は更新
      const { data, error } = await supabase
        .from('user_profiles')
        .update(updates)
        .eq('id', user.id)
        .select()
        .single();

      return { data: data as UserProfile | null, error };
    }
  },

  /**
   * ユーザープロフィールを作成（通常はトリガーで自動作成されるが、手動作成も可能）
   */
  createProfile: async (profileData: Partial<UserProfile>): Promise<{ data: UserProfile | null; error: any }> => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { data: null, error: new Error('User not authenticated') };
    }

    const { data, error } = await supabase
      .from('user_profiles')
      .insert({
        id: user.id,
        username: profileData.username || user.email,
        icon_url: profileData.icon_url,
        profile_message: profileData.profile_message,
      })
      .select()
      .single();

    return { data: data as UserProfile | null, error };
  },

  /**
   * ユーザー名の重複チェック
   */
  checkUsernameAvailability: async (username: string): Promise<{ available: boolean; error: any }> => {
    const { data: { user } } = await supabase.auth.getUser();
    
    let query = supabase
      .from('user_profiles')
      .select('id')
      .eq('username', username);

    // 現在のユーザーのものは除外
    if (user) {
      query = query.neq('id', user.id);
    }

    const { data, error } = await query;

    if (error) {
      return { available: false, error };
    }

    return { available: data.length === 0, error: null };
  },

  /**
   * 公開プロフィール一覧を取得（管理者用など）
   */
  getPublicProfiles: async (limit = 50): Promise<{ data: UserProfile[] | null; error: any }> => {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .limit(limit)
      .order('created_at', { ascending: false });

    return { data: data as UserProfile[] | null, error };
  },
};
