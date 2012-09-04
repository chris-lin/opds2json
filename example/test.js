var opds = require('../opds2json');
var opdsParser = opds.init('test/catalog.xml');
var json = opdsParser.findEntry();
  
opdsParser.json2file(json);


var aa = opdsParser.getJson();  //取得你指定的xml檔案且轉成json格式
var bb = opdsParser.getFile();  //取得你指定的xml檔案路徑
console.log(aa)
console.log(bb)
