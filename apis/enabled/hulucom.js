/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo

 For more information on oEmbed visit http://oembed.com/
*/
module.exports = {
       url: 'http://www.hulu.com/api/oembed.json?url={:id}',
       regex: /(?:https?:\/\/)?(?:.*\.)?hulu\.com\/watch\/(?:.[^\?]+)/i,
       fullurl: true,
       shortcuts: 'hulu',
};
