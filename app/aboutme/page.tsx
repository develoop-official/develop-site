/**
 * サークルについてページ
 * 
 * DeveLoopサークルの詳細情報、設立理由、活動内容、魅力などを紹介するページ
 * 
 * @description サークルの概要、設立理由、活動内容、魅力、今後の展望などを
 * 分かりやすく整理して表示する
 * @author Develoop Team
 * @version 1.0.0
 */

import Header from '../components/layouts/Header';

/**
 * サークルについてページのメインコンポーネント
 * 
 * @returns {React.ReactElement} サークルについてページのReact要素
 */
export default function AboutPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <Header />
      
      {/* ヘッダーと重なる空白部分 */}
      <div className="h-32 bg-white"></div>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">DeveLoopについて</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            開発し続けることを目指す、琉球大学のプログラミングサークル
          </p>
        </div>

        {/* サークル基本情報 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">サークル基本情報</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">サークル名</h3>
                <p className="text-gray-600">DeveLoop</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">サークル長</h3>
                <p className="text-gray-600">末吉 良多</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">設立理由</h3>
                <p className="text-gray-600">
                  ものづくりやプログラミングに取り組む人たちが、お互いの進捗を報告し合いながら
                  モチベーションを維持できる環境を作るため
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">サークル名の意味</h2>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 mb-4">DeveLoop</div>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Development</span> = 開発<br />
                <span className="font-semibold">Loop</span> = ループ<br />
                <span className="text-blue-600 font-bold">"開発し続ける"</span>という意味
              </p>
            </div>
          </div>
        </div>

        {/* 活動内容・概要 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">活動内容・概要</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">主な活動</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  プログラミング関連の目標設定と進捗報告
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  組み込みプログラミング、アプリ・ゲーム制作、プログラミング練習
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  ウェブサイトでのログイン・進捗管理
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  アイディア掲示板でのタスク共有
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">活動ルール</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  必ず1個から3個までの目標を掲げる
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  年に2回プレゼン会を開催
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  技術交流会も予定（参加自由）
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  年会費：現在無料（サーバー費用次第で年間500円程度の可能性）
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* サークルの魅力 */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">DeveLoopの魅力</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">自由さ</h3>
              <p className="text-gray-600">
                ハッカソンのようにみんなで集まって開発してもいいし、<br />
                一人で静かに勉強や制作に取り組むだけでもOK。<br />
                自分のペースで関われます。
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">活かせる実績</h3>
              <p className="text-gray-600">
                個人のものづくりは就職活動で話しにくいこともありますが、<br />
                DeveLoopでの取り組みは「サークル活動の一環」として実績化できます。<br />
                履歴書や面接で堂々と語れるエピソードになります。
              </p>
            </div>
          </div>
        </div>

        {/* 今後の制度・展望 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">今後制定予定の制度</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">ポイント制度（ほぼ確定）</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 一回サボったら -10ポイント</li>
                <li>• 報告があったら +5ポイント</li>
                <li>• 10％進んだら +10ポイント</li>
                <li>• 溜まったポイントでランキング作成</li>
                <li>• スポンサーがついた場合、商品券などの特典も検討</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-pink-100 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">今後の展望</h2>
            <div className="space-y-4">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  琉球大学内だけでなく、沖縄にある大学にも規模拡大
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  その次は県外大学まで範囲を広げる（インカレサークル化）
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  スポンサー確保（年間3万円以上）
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 管理メンバー */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">管理メンバー（開発メンバー）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <h3 className="font-semibold text-gray-800 mb-2">責任者</h3>
              <p className="text-gray-600">245429H 末吉 良多</p>
              <p className="text-gray-600">245428K 比屋根 蓮司</p>
              <p className="text-gray-600">245745J 知念 拓弥</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <h3 className="font-semibold text-gray-800 mb-2">メンバー</h3>
              <p className="text-gray-600">247116H 荷川取 大河</p>
              <p className="text-gray-600">245719K 宮城琉徳</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <h3 className="font-semibold text-gray-800 mb-2">メンバー</h3>
              <p className="text-gray-600">243287B 齋藤遼樹</p>
            </div>
          </div>
        </div>

        {/* CTAセクション */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">一緒に開発し続けませんか？</h2>
          <p className="text-xl mb-8 opacity-90">
            あなたの目的やスタイルに合わせて柔軟に活動できるのが、このサークルの最大の強みです。
          </p>
          <div className="space-x-4">
            <a 
              href="/auth/signin" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              ログイン
            </a>
            <a 
              href="/events" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              イベントを見る
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
