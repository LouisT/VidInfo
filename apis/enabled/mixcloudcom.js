/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo

 For more information on oEmbed visit http://oembed.com/
*/
module.exports = {
       url: 'http://www.mixcloud.com/oembed/?url={:id}&format=json',
       regex: /(?:https?:\/\/)(?:.*\.)?mixcloud\.com\/(?:.[^\/\s]+)\/(?:.[^\?]+)/i,
       fullurl: true,
       shortcuts: ['mixc','mixcloud'],
};
