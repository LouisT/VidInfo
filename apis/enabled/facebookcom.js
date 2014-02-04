/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo

 A work in progress. Requires a facebook app to generate an access token.
 URL: http://louist.github.io/MetaInfo/accessToken.html
*/
module.exports = {
       url: 'https://graph.facebook.com/{:id}?access_token={:apikey}',
       regex: /(?:https?:\/\/)?(?:.*\.)?facebook\.com\/(?:video\/video|photo)\.php\?(?:.*?)v=(\d+)(?:.*)/i,
       apikey: true,
       shortcuts: ['fbook','fbvideo','facebook'],
       formatter: function (data, error, cb) {
            if ('error' in data) {
               data.MetaInfo = {message:'Please check your access token. See README.md for more information.'};
               cb(data,true);
             } else {
               cb(data,error);
            };
       },
};
