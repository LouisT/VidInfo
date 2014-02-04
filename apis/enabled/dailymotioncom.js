/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo
*/
module.exports = {
       url: 'https://api.dailymotion.com/video/{:id}?fields={:fields}',
       regex: /(?:https?:\/\/)?(?:.*\.)?dailymotion\.com(?:.+)?video\/([a-z0-9]+)/i,
       fields: ['id','title','owner','owner.screenname','duration','description','embed_url','end_time','allow_embed','aspect_ratio','available_formats',
                'channel','comments_total','country','created_time','explicit','geoblocking','language','mediablocking','modified_time',
                'onair','private','published','rating','ratings_total','start_time','status','tags','views_total','url','type'],
       fieldsJoiner: ',',
       shortcuts: ['dmo','dailymo','dailymotion'],
};
