var parser = require('xml2json');
var fs = require('fs');
var path = require('path');
var assert = require('assert');

var init = function (file) {
  return new opds2json(file);
}

var opds2json = function(file) {
  this._file;
  this._json;
  this.setFileName(file);
  this.xml2json(file);
}

opds2json.prototype.xml2json = function(file) {
  var xml = fs.readFileSync(file) + '',
      json = parser.toJson(xml);
      //obj = parser.toJson(xml, {object: true, space: true});
  this.setFileName(file);
  this.setJson(json);
  return this;
}

opds2json.prototype.findEntry = function() {
  var obj = JSON.parse(this.getJson());
  var entry_books = JSON.stringify(obj.feed.entry, null, 4);
  return entry_books;
}

opds2json.prototype.json2file = function(json, filepath) {
  var json = json ? json : this.getJson(),
      filename = filepath ? filepath : this.getFileName(),
      ext = path.extname(filename),
      dirname = path.dirname(filename),
      basename = path.basename(filename, ext);
      filepath = dirname + '/' + basename + '.json';
  fs.writeFileSync(filepath, json);
  return this;
}

opds2json.prototype.setJson = function(json) {
  this._json = json;
  return this;
}

opds2json.prototype.getJson = function() {
  return this._json;
}

opds2json.prototype.setFileName = function(file) {
  this._file = file;
  return this;
}

opds2json.prototype.getFileName = function() {
  return this._file;
}

module.exports.init = init;
