/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo

 Paid video distribution service.
*/
module.exports = {
       url: 'http://vzaar.com/api/videos/{:id}.json',
       regex: /(?:https?:\/\/)?(?:.*\.)?vzaar\.(?:com\/videos|me)?\/(\d+)/i,
       shortcuts: 'vzaar',
};
