# Simple SAX-based OPDS2Json Parser.

## 使用前安裝相依行套件
`npm install`

## Usage 
```javascript
var opds = require('opds2json'); //指定opds2json的位置將其載入
var opdsParser = opds.init('test/catalog.xml');  //指定xml檔案路徑並且回傳物件
var json = opdsParser.findEntry(); //尋找該xml檔案現有的entry標籤抓取出來並且轉成json格式
console.log(json);

opdsParser.json2file(json, 'test/catalog');  //將得到的json資料寫入檔案 並且指定寫入位置(如果沒設定位置，將會跟xml檔案同目錄下寫入)
opdsParser.xml2json('test/chinese.xml');  //將重新指定另一個的xml檔案並將其轉成json
opdsParser.getJson();  //取得你指定的xml檔案且轉成json格式
opdsParser.getFile();  //取得你指定的xml檔案路徑

```




