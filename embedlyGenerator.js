#!/usr/local/bin/node
/*
 VidInfo - v0.2.1 - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/VidInfo

 For more information on oEmbed visit http://oembed.com/

 ~ This has much room for improvement! ~
 Embedly.js file generator. Writes to ./apis/disabled/embedly.js
 WARCNING: DO NOT ENABLE EMBEDLY.JS WITH OTHER APIS!
*/
var fs = require('fs'),
    http_get = require('./libs/http_get');
http_get('http://api.embed.ly/1/services',{type:'json'},function (list,err) {
   fs.readFile("./libs/template.js", function (err, data) {
       if (err) throw err;
       var temp = data.toString(),
           shortcuts = [],
           regex = [];
       for (var num in list) {
           var data = list[num];
           if (data.type == "video") {
              for (var reg in data['regex']) {
                  regex.push(new RegExp(data['regex'][reg].replace(/\*/gi,'(?:.+)').replace(/\//gi,'\\/'),'i'));
              };
              var sc = data.name.toLowerCase().replace('www','');
              if (shortcuts.indexOf(sc) === -1) {
                 shortcuts.push(sc);
              };
           };
       };
       fs.writeFileSync('./apis/embedly.js',stringFormat(temp,{REGEX:regex.join(',\n               '),
                                                              SHORTCUTS:'\''+shortcuts.join('\',\n               \'')+'\''}));
   });
});
function stringFormat (str,opts) {
         return str.replace(/{(\\?:)([^}]+)}/g,function(m,o,k) {
                return (getType((v=(opts[k]?opts[k]:m)))=="Function"?v(k,m,opts):v);
         });
};
function getType (obj) {
         return Object.prototype.toString.call(obj).match(/^\[object (.*)\]$/)[1];
};
