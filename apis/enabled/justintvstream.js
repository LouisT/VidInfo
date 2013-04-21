/*
 VidInfo - v0.2.1 - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/VidInfo
*/
module.exports = {
       url: 'http://api.justin.tv/api/stream/list.json?channel={:id}',
       regex: /(?:https?:\/\/)?(?:.*\.)?justin.tv\/(.[^\/#]+)/i,
       shortcuts: ['jtvs','jstream'],
};