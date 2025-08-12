/**
 * @file page.tsx
 * @description トップページ
 */

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Hero from './components/sections/Hero';
import EventList from './components/sections/EventList';
import IdeaList from './components/sections/IdeaList';

/**
 * トップページ
 * @returns {JSX.Element} トップページコンポーネント
 */
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <EventList />
      <IdeaList />
      <Footer />
    </main>
  );
} 