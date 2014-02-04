/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo

 For more information on oEmbed visit http://oembed.com/
*/
module.exports = {
       url: "http://www.23hq.com/23/oembed?url={:id}&format=json",
       regex: /(?:https?:\/\/)(?:.*\.)?23hq\.com\/(.[^\/]+)\/photo\/(.[^\?]+)/i,
       fullurl: true,
       shortcuts: '23hq',
};
