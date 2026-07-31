# Portfolio

個人ポートフォリオサイト。React + TypeScript + Vite で構築し、GitHub Pages にデプロイしている。

公開URL: https://araiyui.github.io/portfolio/

## 構成

- FV（ファーストビュー）とヘッダーの下に、ナビゲーションでタブ切り替えするコンテンツエリアを配置
- タブは「スキル」「経歴」の2種類（お問い合わせ(Contact)コンポーネントは実装済みだがナビ非表示）

```
src/
  App.tsx                 # タブ状態を管理するルート
  components/
    Fv/                   # ファーストビュー
    Header/                # ヘッダー
    Nav/                   # タブ切り替えナビゲーション
    Skill/                 # スキルタブ
    Career/                # 経歴タブ
    Contact/               # お問い合わせタブ（現在ナビから非表示）
    Works/                 # 制作物セクション（現在非表示）
  styles/                  # global.scss, reset.scss, mixin.scss など共通スタイル
```

## 技術スタック

- React 19 / TypeScript
- Vite 6（`@vitejs/plugin-react-swc`）
- Sass（コンポーネントごとに `.scss` を分離）
- ESLint（typescript-eslint）
- gh-pages（GitHub Pages への手動デプロイ）

## セットアップ

```bash
npm install
```

## 開発

```bash
npm run dev
```

## Lint

```bash
npm run lint
```

## ビルド

```bash
npm run build
```

`tsc -b && vite build` を実行し、`dist/` に出力する。

## デプロイ

```bash
npm run deploy
```

`predeploy` でビルド後、`gh-pages` パッケージで `dist/` を GitHub Pages（`gh-pages` ブランチ）に公開する。公開先は `package.json` の `homepage` フィールド（https://araiyui.github.io/portfolio/）。
