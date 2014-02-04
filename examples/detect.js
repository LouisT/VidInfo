/*
 metainfo/examples/detect.js

 This file is part of the 'MetaInfo' project.
 https://github.com/LouisT/MetaInfo
*/
var MetaInfo = require('../')();
MetaInfo.detect('http://www.dailymotion.com/embed/video/xycczk_top-10-supergroups_music#.UU35k1GNNAs',function (obj) {
   console.log('(detect) dailymotion: '+JSON.stringify(obj)+'\n\n');
});
MetaInfo.detect('http://vimeo.com/61969130',function (obj) {
   console.log('(detect) vimeo: '+JSON.stringify(obj)+'\n\n');
});
MetaInfo.detect('http://www.youtube.com/watch?v=QK8mJJJvaes',function (obj) {
   console.log('(detect) youtube: '+JSON.stringify(obj)+'\n\n');
});
MetaInfo.detect('http://on.aol.com/video/study--comet-caused-mass-extinction-517720327?icid=OnHomepageC1_Img#_videoid=517675925',function (obj) {
   console.log('(detect) onaol: '+JSON.stringify(obj)+'\n\n');
});
MetaInfo.detect('http://bambuser.com/v/3453034',function (obj) {
   console.log('(detect) bambuser: '+JSON.stringify(obj)+'\n\n');
},{apikey:'APIKEY'});
MetaInfo.detect('http://bambuser.com/v/3453034',function (obj) {
   console.log('(detect/nokey) bambuser: '+JSON.stringify(obj)+'\n\n');
});
MetaInfo.detect('http://trakt.tv/movie/after-earth-2013',function (obj) {
   console.log('(detect) trakt: '+JSON.stringify(obj)+'\n\n');
},{apikey:'APIKEY'});
MetaInfo.detect('http://trakt.tv/show/under-the-dome',function (obj) {
   console.log('(detect/nokey) trakt: '+JSON.stringify(obj)+'\n\n');
});


// console.log(MetaInfo.detect('http://www.youtube.com/watch?v=QK8mJJJvaes'));
