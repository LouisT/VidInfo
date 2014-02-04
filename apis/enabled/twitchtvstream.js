/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo
*/
module.exports = {
       url: 'https://api.twitch.tv/kraken/channels/{:id}',
       regex: /(?:https?:\/\/)?(?:.*\.)?twitch\.tv\/(.[^\/#]+)/i,
       shortcuts: ['ttvs','tstream'],
};
