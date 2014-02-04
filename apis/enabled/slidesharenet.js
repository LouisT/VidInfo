/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo

 For more information on oEmbed visit http://oembed.com/
*/
module.exports = {
       url: 'http://www.slideshare.net/api/oembed/2?url={:id}&format=json',
       regex: /(?:https?:\/\/)(?:.*\.)?slideshare\.net\/(?:.[^\/]+)\/(?:.[^\?]+)/i,
       fullurl: true,
       shortcuts: ['sshare','slideshare'],
};
