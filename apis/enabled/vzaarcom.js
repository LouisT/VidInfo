/*
 VidInfo - v0.2.1 - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/VidInfo

 Paid video distribution service.
*/
module.exports = {
       url: 'http://vzaar.com/api/videos/{:id}.json',
       regex: /(?:https?:\/\/)?(?:.*\.)?vzaar.(?:com\/videos|me)?\/(\d+)/i,
       shortcuts: 'vzaar',
};
