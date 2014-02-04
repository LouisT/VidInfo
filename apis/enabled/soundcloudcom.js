/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 Contributed by Joshua Bauer <josh@tapiture.com>
 https://github.com/LouisT/MetaInfo

 For more information on oEmbed visit http://oembed.com/
*/
module.exports = {
       url: 'http://soundcloud.com/oembed?iframe=true&format=json&url=https://soundcloud.com/{:id}',
       regex: /(?:https?:\/\/)(?:.*\.)?soundcloud\.com\/(.[^\?\s]+)/i,
       shortcuts: ['sndcdn','soundcloud'], 
};
