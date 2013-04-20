/*
 VidInfo - v0.2.0 - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/VidInfo

 This uses YQL for XML to JSON. This could/should change later. (http://developer.yahoo.com/yql/console/)
 This is experimental! - See README.md
*/
module.exports = {
       url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'"+
            "http%3A%2F%2Fwww.collegehumor.com%2Fmoogaloop%2Fvideo%2F{:id}'&format=json",
       regex: /(?:https?:\/\/)?(?:.*\.)?collegehumor\.com\/video\/(\d+)/i,
       shortcuts: ['chumor','college','collegehumor'],
       formatter: function (data, error, cb) {
            if (!('results' in data['query'])) {
               cb({error:true,message:'No results.'},true);
             } else {
               var res = data['query']['results']['videoplayer'];
               // Remove useless data that has nothing to do with the video.
               delete res['tracking_pixel']; delete res['stats_pixel'];
               cb(res,error);
            };
       },
};
