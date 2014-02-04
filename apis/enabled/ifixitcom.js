/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo

 For more information on oEmbed visit http://oembed.com/
*/
module.exports = {
       url: 'http://www.ifixit.com/Embed?url={:id}&format=json',
       regex: /(?:https?:\/\/)(?:.*\.)?ifixit\.com\/(?:guide|teardown)\/(?:.[^\?]+)/i,
       fullurl: true,
       shortcuts: 'ifixit',
};
