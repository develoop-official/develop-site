/**
 * @file IdeaList.tsx
 * @description アイディア一覧を表示するセクションコンポーネント
 */

import IdeaCard from '../elements/IdeaCard';

// 仮のアイディアデータ
const ideas = [
  {
    title: 'AI学習支援システム',
    description: '個別の学習進度に合わせて最適化された学習プランを提案するAIシステム。',
    author: '田中太郎',
    imageUrl: ''
  },
  {
    title: '環境モニタリングアプリ',
    description: 'IoTセンサーと連携して環境データを可視化し、持続可能な社会の実現を支援。',
    author: '佐藤花子',
    imageUrl: ''
  },
  {
    title: '地域コミュニティプラットフォーム',
    description: '地域住民同士の交流を促進し、地域活性化を図るオンラインプラットフォーム。',
    author: '山田次郎',
    imageUrl: ''
  },
  {
    title: '健康管理アプリ',
    description: 'ウェアラブルデバイスと連携して健康データを管理し、予防医療を支援。',
    author: '鈴木美咲',
    imageUrl: ''
  },
  {
    title: '教育ゲーミフィケーション',
    description: 'ゲーム要素を取り入れた学習システムで、楽しく効率的に知識を習得。',
    author: '高橋健太',
    imageUrl: ''
  },
  {
    title: 'スマートホームシステム',
    description: 'AIとIoTを活用して、快適で省エネな住環境を実現する統合システム。',
    author: '伊藤優子',
    imageUrl: ''
  }
];

/**
 * アイディア一覧セクションコンポーネント
 * @returns {JSX.Element} アイディア一覧セクションコンポーネント
 */
const IdeaList = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            学生のアイディア
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            学生たちが生み出した革新的なアイディアをご紹介します。未来を変える可能性を秘めたプロジェクトです。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.map((idea, index) => (
            <IdeaCard
              key={index}
              title={idea.title}
              description={idea.description}
              author={idea.author}
              imageUrl={idea.imageUrl}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/ideas"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            すべてのアイディアを見る
          </a>
        </div>
      </div>
    </section>
  );
};

export default IdeaList; 