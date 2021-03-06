/*
 vidinfo/examples/byid.js

 This file is part of the 'VidInfo' project.
 https://github.com/LouisT/VidInfo
*/
var vidinfo = require('../')();
vidinfo.byID('xycczk','dailymotion',function (obj) {
   console.log('(byID) dailymotion: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.byID('61969130','vimeo',function (obj) {
   console.log('(byID) vimeo: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.byID('QK8mJJJvaes','youtube',function (obj) {
   console.log('(byID) youtube: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.byID('517675925','onaol',function (obj) {
   console.log('(byID) onaol: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.byID('3453034','bambuser',function (obj) {
   console.log('(byID) bambuser: '+JSON.stringify(obj)+'\n\n');
},{apikey:'APIKEY'});
vidinfo.byID(["movie","after-earth-2013"],"trakt",function (obj) {
   console.log('(byID) trakt(movie): '+JSON.stringify(obj)+'\n\n');
},{apikey:"APIKEY"})
vidinfo.byID(["show","under-the-dome"],"trakt",function (obj) {
   console.log('(byID) trakt(show): '+JSON.stringify(obj)+'\n\n');
},{apikey:"APIKEY"})

