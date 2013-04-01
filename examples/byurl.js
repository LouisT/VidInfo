/*
 vidinfo/examples/byurl.js - v0.1.7

 This file is part of the 'VidInfo' project.
 https://github.com/LouisT/VidInfo
*/
var vidinfo = require('../')();
vidinfo.byurl('http://www.dailymotion.com/embed/video/xycczk_top-10-supergroups_music#.UU35k1GNNAs',function (obj) {
   console.log('(byurl) dailymotion: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.byurl('http://vimeo.com/61969130',function (obj) {
   console.log('(byurl) vimeo: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.byurl('http://www.youtube.com/watch?v=QK8mJJJvaes',function (obj) {
   console.log('(byurl) youtube: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.byurl('http://on.aol.com/video/study--comet-caused-mass-extinction-517720327?icid=OnHomepageC1_Img#_videoid=517675925',function (obj) {
   console.log('(byurl) onaol: '+JSON.stringify(obj)+'\n\n');
});
vidinfo.byurl('http://bambuser.com/v/3453034',function (obj) {
   console.log('(byurl) bambuser: '+JSON.stringify(obj)+'\n\n');
},{apikey:'APIKEY'});
