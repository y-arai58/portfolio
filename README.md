# Portfolio

個人ポートフォリオサイト。React + TypeScript + Vite で構築し、GitHub Pages にデプロイしている。

公開URL: https://y-arai58.github.io/portfolio/

## 構成

- FV（ファーストビュー）とヘッダーの下に、ナビゲーションでタブ切り替えするコンテンツエリアを配置
- タブは「スキル」「経歴」「制作物」の3種類（お問い合わせはヘッダーのメールアイコンから遷移、ナビには非表示）

```
src/
  App.tsx                 # タブ状態を管理するルート
  components/
    Fv/                   # ファーストビュー
    Header/                # ヘッダー（お問い合わせへの導線もここ）
    Nav/                   # タブ切り替えナビゲーション
    Skill/                 # スキルタブ
    Career/                # 経歴タブ
    Works/                 # 制作物タブ
    Contact/               # お問い合わせタブ（ナビには非表示）
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

`predeploy` でビルド後、`gh-pages` パッケージで `dist/` を GitHub Pages（`gh-pages` ブランチ）に公開する。公開先は `package.json` の `homepage` フィールド（https://y-arai58.github.io/portfolio/）。
