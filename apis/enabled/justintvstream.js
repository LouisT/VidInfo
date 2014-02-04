/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo
*/
module.exports = {
       url: 'http://api.justin.tv/api/stream/list.json?channel={:id}',
       regex: /(?:https?:\/\/)?(?:.*\.)?justin\.tv\/(.[^\/#]+)/i,
       shortcuts: ['jtvs','jstream'],
};
