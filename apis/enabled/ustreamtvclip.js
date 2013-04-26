/*
 VidInfo - v0.2.2 - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/VidInfo
*/
module.exports = {
       url: 'http://api.ustream.tv/json/video/{:id}/getInfo',
       regex: /(?:https?:\/\/)?(?:.*\.)?ustream.tv\/recorded\/(\d+)/i,
       shortcuts: ['utvc','uclip'],
};
