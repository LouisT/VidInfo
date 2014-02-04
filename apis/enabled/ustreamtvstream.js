/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo
*/
module.exports = {
       url: 'http://api.ustream.tv/json/channel/{:id}/getInfo',
       regex: /(?:https?:\/\/)?(?:.*\.)?ustream\.tv\/channel\/(.[^\/]+)/i,
       shortcuts: ['utvs','ustream'],
};
