/*
 VidInfo - v0.2.2 - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/VidInfo
*/
module.exports = {
       url: 'https://api.twitch.tv/kraken/channels/{:id}',
       regex: /(?:https?:\/\/)?(?:.*\.)?twitch.tv\/(.[^\/#]+)/i,
       shortcuts: ['ttvs','tstream'],
};
