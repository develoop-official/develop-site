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

import Header from '../components/layouts/Header';

/**
 * プロフィールページのメインコンポーネント
 * 
 * @returns {React.ReactElement} プロフィールページのReact要素
 */
export default function ProfilePage(): React.ReactElement {
  return (
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
              <div className="w-48 h-48 bg-amber-200 rounded-full flex items-center justify-center">
                <span className="text-4xl text-amber-600">👤</span>
              </div>
            </div>
            
            {/* 名前 */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">琉大太郎</h1>
            </div>
            
            {/* 説明文 */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded animate-pulse w-1/2"></div>
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
  );
}
