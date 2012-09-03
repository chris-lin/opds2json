var opdsParser = require('../opds2json');

var json =
opdsParser
  .xml2json('test/catalog.xml')
  .findEntry();

opdsParser.json2file(json);

console.log(json)


//var file = './chinese.xml';
//var file = process.argv[2];
//console.log(process.argv[2])

//var opds_json = xml2json(file);
//console.log(opds_json);
//console.log(typeof opds_json);
//findEntry(opds_json)
