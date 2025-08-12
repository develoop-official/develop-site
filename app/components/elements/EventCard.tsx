/**
 * @file EventCard.tsx
 * @description イベントを表示するカードコンポーネント
 */

import Image from 'next/image';
import { JSX } from 'react';

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
const EventCard = ({ title, date, description, location, imageUrl }: EventCardProps): JSX.Element => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {imageUrl ? (
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
            onError={(e) => {
              // 画像が読み込めない場合はプレースホルダーを表示
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                    <div class="text-center text-gray-600">
                      <svg class="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <p class="text-sm">画像なし</p>
                    </div>
                  </div>
                `;
              }
            }}
          />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <svg className="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <p className="text-sm">画像なし</p>
          </div>
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