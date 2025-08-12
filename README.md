# Develoop - プログラミングサークル進捗報告アプリ

本リポジトリは、プログラミングサークルのメンバーが進捗を共有し、イベントを作成・管理できる Web アプリケーションです。Next.js(App Router) + TypeScript + React + Tailwind CSS を採用しています。

## ファイル構成（抜粋）
```
develop-site/
├─ app/
│  ├─ components/
│  │  ├─ elements/
│  │  │  ├─ EventCard.tsx
│  │  │  └─ IdeaCard.tsx
│  │  ├─ layouts/
│  │  │  ├─ Header.tsx
│  │  │  └─ Footer.tsx
│  │  └─ sections/
│  │     ├─ Hero.tsx
│  │     ├─ EventList.tsx
│  │     └─ IdeaList.tsx
│  ├─ auth/
│  │  └─ signin/page.tsx
│  ├─ events/
│  │  ├─ page.tsx           # イベント一覧
│  │  └─ create/page.tsx    # イベント作成
│  ├─ projects/
│  │  ├─ page.tsx           # プロジェクト/進捗 一覧
│  │  └─ create/page.tsx    # 進捗投稿
│  ├─ not-found.tsx          # 404ページ
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ globals.css
├─ public/
│  └─ images/
│     ├─ heros/
│     │  ├─ hero-1.png
│     │  ├─ hero-2.png
│     │  └─ hero-3.png
│     └─ develoop_logo2.png
├─ documents/
│  └─ PRD.md                 # プロダクト要件（PRD）
├─ next.config.ts
├─ tsconfig.json
├─ package.json
└─ README.md
```

## 技術スタック
- フロントエンド: Next.js 15 / React 19 / TypeScript 5.7
- UI: Tailwind CSS 4（App Router）, shadcn/ui（導入予定）
- 画像: next/image（ローカル最適化は `unoptimized: true`）
- 認証・DB（予定）: Supabase（Auth, DB, Storage） + Discord OAuth 2.0
- デプロイ（予定）: Vercel（フロント） / Supabase（BaaS）

## セットアップ
```bash
# 依存関係のインストール
npm ci  # or: npm i

# 開発サーバー起動
npm run dev
# http://localhost:3000 を開く
```

## 開発コマンド
```bash
npm run dev      # 開発起動（Turbopack）
npm run build    # 本番ビルド
npm run start    # 本番起動
```

## 実装済みページ（抜粋）
- /               ホーム（Heroセクション）
- /events         イベント一覧
- /events/create  イベント作成
- /projects       プロジェクト/進捗一覧
- /projects/create 進捗投稿
- /auth/signin    サインイン（Discord OAuth導線 + Email/Passwordフォーム）
- /not-found      404ページ

## 変更点（このコミットでの主な追加・修正）
- 404ページ（`app/not-found.tsx`）を新規作成
- イベント一覧（`app/events/page.tsx`）とイベント作成（`app/events/create/page.tsx`）を実装
- プロジェクト一覧（`app/projects/page.tsx`）と進捗投稿（`app/projects/create/page.tsx`）を実装
- サインインページ（`app/auth/signin/page.tsx`）を実装（Discord OAuth 導線／Emailフォーム）
- ヒーロー画像の読み込み改善、エラーハンドリング強化
- `next.config.ts` に `images.unoptimized: true` を設定
- `documents/PRD.md` を追加し、PRDを格納

## 今後のTODO（PRDより）
- Supabase 導入（Auth, Postgres, Storage）
- Discord Provider 設定（OAuth 2.0）
- イベント詳細 / 編集ページ、プロフィール / 進捗詳細の整備
- Markdown エディタ導入（進捗投稿）
- RLSポリシー整備、CI/CD 構築、Lighthouse 最適化

## PRD
- ドキュメント: `documents/PRD.md`

## ライセンス
- 本リポジトリのライセンスは未定義です（必要に応じて追記してください）。
