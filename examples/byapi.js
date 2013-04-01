/*
 vidinfo/examples/byapi.js - v0.1.7

 This file is part of the 'VidInfo' project.
 https://github.com/LouisT/VidInfo
*/
var vidinfo = require('../')();
vidinfo.dailymotion('xycczk',function (obj) {
   console.log('(byapi) dailymotion: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.vimeo('61969130',function (obj) {
   console.log('(byapi) vimeo: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.yt('QK8mJJJvaes',function (obj) {
   console.log('(byapi) youtube: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.onaol('517675925',function (obj) {
   console.log('(byapi) onaol: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.bambuser('3453034',function (obj) {
   console.log('(byapi) bambuser: '+JSON.stringify(obj)+'\n\n');
},{apikey:'APIKEY'});
