/*
 metainfo/examples/byapi.js

 This file is part of the 'MetaInfo' project.
 https://github.com/LouisT/MetaInfo
*/
var MetaInfo = require('../')();
MetaInfo.dailymotion('xycczk',function (obj) {
   console.log('(byapi) dailymotion: '+JSON.stringify(obj)+'\n\n');
});
MetaInfo.vimeo('61969130',function (obj) {
   console.log('(byapi) vimeo: '+JSON.stringify(obj)+'\n\n');
});
MetaInfo.yt('QK8mJJJvaes',function (obj) {
   console.log('(byapi) youtube: '+JSON.stringify(obj)+'\n\n');
});
MetaInfo.onaol('517675925',function (obj) {
   console.log('(byapi) onaol: '+JSON.stringify(obj)+'\n\n');
});
MetaInfo.bambuser('3453034',function (obj) {
   console.log('(byapi) bambuser: '+JSON.stringify(obj)+'\n\n');
},{apikey:'APIKEY'});
MetaInfo.wistia('piywx9v8rr',function (obj,e) {
   if (!e) {
      console.log('(byapi) wista: '+JSON.stringify(obj)+'\n\n');
    } else {
      console.log('(byapi - ERROR) wista: '+JSON.stringify({error:true,message:obj})+'\n\n');
   }
},{basicauth:'USERNAME:PASSWORD'});
MetaInfo.flickr('e9964e',function (obj) {
   console.log('(byapi) flickr: '+JSON.stringify(obj)+'\n\n');
},{apikey:'APIKEY'});
