/*
 VidInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/VidInfo

 For more information on oEmbed visit http://oembed.com/
*/
module.exports = {
       url: 'http://api.embed.ly/1/oembed?&key={:apikey}&url={:id}',
       regex: /(?:https?:\/\/)?(?:.*\.)?snotr\.com\/video\/(?:.[^\?]+)/i,
       fullurl: true,
       needkey: true,
       shortcuts: ['snotr'],
};
