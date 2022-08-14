### 関数化
- {}内で使う関数を、()内に引数として渡す

```
const setTitle = (year, month) => {
    let title = document.getElementById("title");
    title.textContent = `${year}年${month}月`;
}
```

### breakとreturn
- break：swich(case)文を終了・for文のループを抜ける
- return：関数の実行を停止する
  値が指定されていれば、その値を関数の呼び出し元に返す

### Number
文字列や変数を数値として使用する
```
Number(lines[0]);
```

### Github
- 参加するリポジトリのURLをもらう
- ターミナル上で、保存先のフォルダまで移動
- 下記のコマンドを実行
```
git clone https://github.com/myname/project1
// リポジトリURL
```
1) 「ソース管理」の「・・・」から「プル」する　＝　最新情報を得る
2) 保存したいファイルを指定して、コメントを付けて「コミット」する（コミットメッセージ）
3) 「ソース管理」の「・・・」から「プッシュ」する　＝　Github上にアップロードする

### コマンド
- 「command + / 」= コメントアウト
- 「command + F」= ページ内、文字列検索
→　＞を押して一括変更
- 「command + P」 = ファイル名検索
- 「command + shift + F」 = プロジェクト内、文字列検索
- 「クリック三回」 = 一行選択
- 「クリック二回」 = 単語選択
- 「command + shift + R」 = スーパーリロード
- 「tab」= インデントを左にずらす
- 「tab + shift」= インデントを右にずらす
- 「command + J」= ターミナルを表示

### [.getElementById();](https://developer.mozilla.org/ja/docs/Web/API/Document/getElementById)
- idを指定して要素を取得（HTMLから引っ張ってくる）
```
document.getElementById("targetId");
```

### [.createElement();](https://developer.mozilla.org/ja/docs/Web/API/Document/createElement)
- 要素を作成（箱を作る）
```
document.createElement("div");
```

### [.textContent =](https://developer.mozilla.org/ja/docs/Web/API/Node/textContent)
- 要素に中身を追加
```
th.textContent = weekList[i]
```

### [.appendChild();](https://developer.mozilla.org/ja/docs/Web/API/Node/appendChild)
- 要素の中の最後尾に子要素を追加
```
let div = document.createElement("div");
let div2 = document.createElement("div");
div.appendChild(div2);
```

### [.addEventListener("", (e) => {});](https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener)
- イベントリスナを追加する
```
//対象要素がページ全体なら、windowを使う
//イベント名"scroll"
//使用する引数e(イベントオブジェクト)
window.addEventListener('click', (e) => {
  console.log(`クリックした位置は上から${e.pageY}、左から${e.pageX}です`)
});
```
```
target.addEventListener('click', function(e) {
  console.log(e.target); // クリックされた要素
  console.log(e.clientX); // ブラウザ内の左上からのX座標
  console.log(e.clientY); // ブラウザ内の左上からのY座標
  console.log(e.pageX); // HTML全体の左上からのX座標
  console.log(e.pageY); // HTML全体の左上からのy座標
  console.log(e.offsetX); // クリックターゲットの要素左上からのX座標
  console.log(e.offsetY); // クリックターゲットの要素左上からのy座標
});
```
```
const addMonthBtn = document.getElementById("addMonth");
addMonthBtn.addEventListener("click",  (e) => {
  currentMonth++;
  checkYear();
  createHeader();
  changeMonth();
});
```

### localStorage使用方法
- DB登録　localStorage.setItem(key, value);
→「この暗証番号（key）で、この情報（value）を登録する」

- DB削除　localStorage.removeItem(key);
→「このkeyで登録されている情報を削除する」

- DB情報取得　localStorage.getItem(key);
→「このkeyの情報を使用（取得）する」

```
localStorage.setItem(`${year}_${month}_${day}_startHour_${i}`, localStorage.getItem(`${year}_${month}_${day}_startHour_${i + 1}`));
localStorage.removeItem(`${year}_${month}_${day}_startHour_${d}`);
let index = localStorage.getItem(`${year}_${month}_${day}_index`);
```

### .innerHTML
- 要素のHTMLを操作

### .classList
- HTML/CSSのclassを操作
- 例は「modalについているclassを取り外す」という操作
- ("対象のクラス名")
```
modal.classList.remove('hidden');
// 特定の要素のクラス名を追加したり、削除したり、参照したりすることが出来る便利なプロパティ
// classListの後にメソッドを定義することにより、追加削除などの機能を指定することができる
```

### .value
selectボックスの値を取得

### .splitと.slice
- split()：split(何で分割するかを入力);
　　　　　　 文字列をリスト化
- slice()：slice(配列内の指定した項目)
　　　　　　 リストの中身を取り出す

### 配列の最後尾を選択する
- array[array.length -1]
- array.pop()
- array.slice(-1)[0]