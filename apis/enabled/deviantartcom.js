/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo

 For more information on oEmbed visit http://oembed.com/
*/
module.exports = {
       url: 'http://backend.deviantart.com/oembed?url={:id}',
       regex: /(?:https?:\/\/)(?:.*\.)?(fav\.me|sta\.sh|deviantart\.com)\/(?:.[^\?]+)/i,
       fullurl: true,
       shortcuts: ['dart','deviant','deviantart'],
};
