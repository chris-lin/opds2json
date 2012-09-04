var opds = require('../opds2json');
var opdsParser = opds.init('test/catalog.xml');
var json = opdsParser.findEntry();
  
opdsParser.json2file(json, 'test/catalog');

