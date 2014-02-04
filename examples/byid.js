/*
 metainfo/examples/byid.js

 This file is part of the 'MetaInfo' project.
 https://github.com/LouisT/MetaInfo
*/
var MetaInfo = require('../')();
MetaInfo.byID('xycczk','dailymotion',function (obj) {
   console.log('(byID) dailymotion: '+JSON.stringify(obj)+'\n\n');
});
MetaInfo.byID('61969130','vimeo',function (obj) {
   console.log('(byID) vimeo: '+JSON.stringify(obj)+'\n\n');
});
MetaInfo.byID('QK8mJJJvaes','youtube',function (obj) {
   console.log('(byID) youtube: '+JSON.stringify(obj)+'\n\n');
});
MetaInfo.byID('517675925','onaol',function (obj) {
   console.log('(byID) onaol: '+JSON.stringify(obj)+'\n\n');
});
MetaInfo.byID('3453034','bambuser',function (obj) {
   console.log('(byID) bambuser: '+JSON.stringify(obj)+'\n\n');
},{apikey:'APIKEY'});
MetaInfo.byID(["movie","after-earth-2013"],"trakt",function (obj) {
   console.log('(byID) trakt(movie): '+JSON.stringify(obj)+'\n\n');
},{apikey:"APIKEY"})
MetaInfo.byID(["show","under-the-dome"],"trakt",function (obj) {
   console.log('(byID) trakt(show): '+JSON.stringify(obj)+'\n\n');
},{apikey:"APIKEY"})
