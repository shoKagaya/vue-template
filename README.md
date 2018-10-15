# popinfo-segment-form

> A Vue.js project

## 環境構築手順

# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev


## cssルール

### 設計思想

SMACSSルールを使用する

https://medium.com/@busramemis/css-methodology-smacss-2116ac5e77d7


- 1.Base
- 2.Layout
- 3.Modules
- 4.State

#### 1.Base
単純なhtmlタグのスタイルで構成されます。

#### 2.Layout
ブログのような特別なレイアウトのスタイルで構成されています。サブメニューのようなブログサイト

#### 3.Modules
再利用可能なデザインが含まれます。フォーム、テーブル、リスト、ボタンなどがあります。

#### 4.State
要素のスタイルをカバーします。アクティブ、無効、非表示などの状態を管理します。

## クラス命名ルール
名詞区切りはローワーキャメルケース

`pageHeader`


共通クラス

`${プリフィックス}-${モジュール名}__${キー名}--${値}`

例

`.mod-btn__size--general`

## html

htmlの運用ルールについて

### 命名規則
共通モジュールにはプリフィックスを付けてください。

#### レイアウトクラス
`.l-`

例

`.l-header`

#### 再利用可能なモジュールクラス
`.mod-`

例

`.mod-btn`
`.mod-title1`
