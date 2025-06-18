/**
 * @file EventList.tsx
 * @description イベント一覧を表示するセクションコンポーネント
 */

import EventCard from '../elements/EventCard';

// 仮のイベントデータ
const events = [
  {
    title: 'ハッカソン2024',
    date: '2024年4月15日',
    description: '24時間でアイディアを形に！チーム開発の楽しさを体験しよう。',
    location: '大学内 イノベーションセンター',
    imageUrl: '/images/hackathon.jpg'
  },
  {
    title: 'プログラミング勉強会',
    date: '2024年4月20日',
    description: '初心者向けのプログラミング勉強会。Pythonの基礎から学べます。',
    location: '大学内 情報処理室',
    imageUrl: '/images/study.jpg'
  },
  {
    title: 'LT会',
    date: '2024年4月25日',
    description: '技術的な知見を共有するLT会。5分間のプレゼンテーション。',
    location: '大学内 セミナー室',
    imageUrl: '/images/lt.jpg'
  }
];

/**
 * イベント一覧セクションコンポーネント
 * @returns {JSX.Element} イベント一覧セクションコンポーネント
 */
const EventList = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            開催予定のイベント
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            最新のイベント情報をお届けします。参加して、技術を学び、仲間と交流しましょう。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
              location={event.location}
              imageUrl={event.imageUrl}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/events"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            すべてのイベントを見る
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventList; 