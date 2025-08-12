/**
 * @file IdeaCard.tsx
 * @description アイディアを表示するカードコンポーネント
 */

import Image from 'next/image';

interface IdeaCardProps {
  title: string;
  description: string;
  author: string;
  imageUrl?: string;
}

/**
 * アイディアカードコンポーネント
 * @param {IdeaCardProps} props - アイディアの情報
 * @returns {JSX.Element} アイディアカードコンポーネント
 */
const IdeaCard = ({ title, description, author, imageUrl }: IdeaCardProps) => {
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
                  <div class="w-full h-full bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                    <div class="text-center text-gray-600">
                      <svg class="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
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
        <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <svg className="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            <p className="text-sm">画像なし</p>
          </div>
        </div>
      )}
      <div className="p-6">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard; 