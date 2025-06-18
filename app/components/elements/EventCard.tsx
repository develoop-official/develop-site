/**
 * @file EventCard.tsx
 * @description イベントを表示するカードコンポーネント
 */

import Image from 'next/image';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  location: string;
  imageUrl?: string;
}

/**
 * イベントカードコンポーネント
 * @param {EventCardProps} props - イベントの情報
 * @returns {JSX.Element} イベントカードコンポーネント
 */
const EventCard = ({ title, date, description, location, imageUrl }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {imageUrl && (
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
      )}
      <div className="p-6">
        <div className="text-sm text-blue-600 font-semibold mb-2">
          {date}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex items-center text-gray-500">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard; 