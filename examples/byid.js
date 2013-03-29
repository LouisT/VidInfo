/*
 vidinfo/examples/byid.js - v0.1.6

 This file is part of the 'VidInfo' project.
 https://github.com/LouisT/VidInfo
*/
var vidinfo = require('../')();
vidinfo.byid('xycczk','dailymotion',function (obj) {
   console.log('(byurl) dailymotion: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.byid('61969130','vimeo',function (obj) {
   console.log('(byurl) vimeo: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.byid('QK8mJJJvaes','youtube',function (obj) {
   console.log('(byurl) youtube: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.byid('517675925','onaol',function (obj) {
   console.log('(byurl) onaol: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.byid('3453034','bambuser',function (obj) {
   console.log('(byurl) bambuser: '+JSON.stringify(obj)+'\n\n');
},{apikey:'APIKEY'});
