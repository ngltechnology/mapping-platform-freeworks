## 環境構築
### node.js
v11.4.0
### パッケージのインストール
`$ npm install`  
package.jsonに記述されたパッケージをまとめてインストール  
`$ yarn install`  
でもいけた  

## プロジェクトを始める
### npm start
ローカル開発環境でreactを起動する  
[http://localhost:3000](http://localhost:3000)

### npm test
インタラクティブなテストランナー

### npm run build
buildを行い、deployができるようにする  
`$ yarn build`  
でもいけた

### npm run eject
不可逆にパッケージの依存関係をすべてコピーすることができる  
現状使用厳禁

## 個人用開発環境
### firebaseの設定
`$ npm install -g firebase-tools`  
`$ firebase login`   
`$ firebase init`  
Hostingの列にカーソルを移動させてスペースキーを押して選択し、エンター  
`? What do you want to use as your public directory? build`  
deployしたいディレクトリはbuildに設定する  
buildと記述しエンター  
他の項目は以下の通りで良いはず  
`Configure as a single-page app (rewrite all urls to /index.html)? NO`
`File public/index.html already exists. Overwrite? No`

### hosting先設定
[参考](https://firebase.google.com/docs/hosting/multisites?hl=ja)

`$firebase target:apply hosting target-name resource-name`  
target-nameは自身で定義する名前（何でも良い)  
resource-nameはfirebase consoleから確認できるhostging先の名前  
`例: $firebase target:apply hosting masa masadevelop`

### firebase.jsonを設定する
```{
  "hosting": {
      "target": "target-name",
      "public": "build"
      "rewrites": [...]
  }
}
```
と記述。

### deploy
`$ npm run build`  
`$ firebase deploy`  
でデプロイ
