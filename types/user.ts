/**
 * @file types/user.ts
 * @description ユーザー関連の型定義
 */

export interface UserProfile {
  id: string;
  username: string | null;
  icon_url: string | null;
  profile_message: string | null;
  created_at: string;
  updated_at: string;
}

export interface UpdateUserProfileData {
  username?: string | null;
  icon_url?: string | null;
  profile_message?: string | null;
}
