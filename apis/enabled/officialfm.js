/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo

 For more information on oEmbed visit http://oembed.com/
*/
module.exports = {
       url: "http://www.official.fm/{:id}/oembed.json",
       regex: /(?:https?:\/\/)(?:.*\.)?official\.fm\/((?:playlist|track)s.[^\?]+)/i,
       shortcuts: ['ofm','official'],
};
