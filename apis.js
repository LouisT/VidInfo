/*
 vidinfo/apis.js - v0.1.6

 This file is part of the 'VidInfo' project.
 https://github.com/LouisT/VidInfo
*/
module.exports = {
       bambuser: {
          url: 'http://api.bambuser.com/broadcast/{:id}.json?api_key={:apikey}',
          regex: /(?:https?:\/\/)?bambuser.com\/v\/(\d+)/i,
          needkey: true,
          shortcuts: ['bam','bambuser'],
       },
       onaol: {
          url: 'http://api.5min.com/video/{:id}/info.json',
          regex: /(?:https?:\/\/)?on.aol.com\/video\/(?:.+)-(\d+)/i,
       },
       dailymotion: {
          url: 'https://api.dailymotion.com/video/{:id}?fields={:fields}',
          regex: /(?:https?:\/\/)?(?:.*\.)?dailymotion.com(?:.+)?video\/([a-z0-9]+)/i,
          fields: ['id','title','owner','owner.screenname','duration','description','embed_url','end_time','allow_embed','aspect_ratio','available_formats',
                   'channel','comments_total','country','created_time','explicit','geoblocking','language','mediablocking','modified_time',
                   'onair','private','published','rating','ratings_total','start_time','status','tags','views_total','url','type'],
          fieldsJoiner: ',',
          shortcuts: ['dmo','dailymo'],
       },
       youtube: {
          url: 'http://gdata.youtube.com/feeds/api/videos/{:id}?v=2&alt=json',
          regex: /(?:https?:\/\/)?(?:.*\.)?youtu(?:\.be\/|be\.com\/(?:watch\?.*?v=)?)([^\?#&\s\[\]\(\)]+)/i,
          shortcuts: 'yt',
       },
       vimeo: {
          url: 'http://vimeo.com/api/v2/video/{:id}.json',
          regex: /(?:https?:\/\/)?(?:.*\.)?vimeo\.com\/(?:.*#|.*\/videos\/)?(\d+)/i,
       },
       justintvstream: {
          url: 'http://api.justin.tv/api/stream/list.json?channel={:id}',
          regex: /(?:https?:\/\/)?(?:.*\.)?justin.tv\/(.[^\/#]+)/i,
          shortcuts: ['jtvs','jstream'],
       },
       justintvclip: {
          url: 'http://api.justin.tv/api/clip/show/{:id}.json',
          regex: /(?:https?:\/\/)?(?:.*\.)?justin.tv\/(?:.+)\/b\/(\d+)/i,
          shortcuts: ['jtvc','jclip'],
       },
       twitchtvstream: {
          url: 'https://api.twitch.tv/kraken/channels/{:id}',
          regex: /(?:https?:\/\/)?(?:.*\.)?twitch.tv\/(.[^\/#]+)/i,
          shortcuts: ['ttvs','tstream'],
       },
       twitchtvclip: {
          url: 'https://api.twitch.tv/kraken/videos/c{:id}',
          regex: /(?:https?:\/\/)?(?:.*\.)?twitch.tv\/(?:.+)\/c\/(\d+)/i,
          shortcuts: ['ttvc','tclip'],
       },
       ustreamtvstream: {
          url: 'http://api.ustream.tv/json/channel/{:id}/getInfo',
          regex: /(?:https?:\/\/)?(?:.*\.)?ustream.tv\/channel\/(.[^\/]+)/i,
          shortcuts: ['utvs','ustream'],
       },
       ustreamtvclip: {
          url: 'http://api.ustream.tv/json/video/{:id}/getInfo',
          regex: /(?:https?:\/\/)?(?:.*\.)?ustream.tv\/recorded\/(\d+)/i,
          shortcuts: ['utvc','uclip'],
       },
       giantbomb: {
          url: 'http://www.giantbomb.com/api/video/2300-{:id}/?api_key={:apikey}&format=json',
          regex: /(?:https?:\/\/)?(?:.*\.)?giantbomb.com\/videos\/(?:.+)\/2300-(\d+)/i,
          needkey: true,
          shortcuts: 'gbomb',
       },
       videolog: {
          url: 'http://api.videolog.tv/video/{:id}.json',
          regex: /(?:http:\/\/)?(?:.*\.)?videolog.tv\/video.php\?id=(\d+)/i,
          shortcuts: 'vlog',
       },
       magma: {
          url: 'http://mag.ma/info.json?id={:id}',
          regex: /(?:http:\/\/)?(?:.*\.)?mag.ma\/(?:.+)\/(\d+)/i,
          shortcuts: 'mag',
       },
       webcamstravel: {
          url: 'http://api.webcams.travel/rest?method=wct.webcams.get_details&devid={:apikey}&webcamid={:id}&format=json',
          regex: /(?:http:\/\/)?(?:.*\.)?webcams.travel\/webcam\/(\d+)/i,
          needkey: true,
          shortcuts: ['wct','webtra','wtravel'],
       },
       archiveorg: {
          url: 'http://archive.org/details/{:id}?output=json',
          regex: /(?:http:\/\/)?(?:.*\.)?archive.org\/details\/(.[^\/#\?&]+)/i,
          shortcuts: ['arch','archive'],
       },

       // These use YQL for XML to JSON. This could/should change later. (http://developer.yahoo.com/yql/console/)
       // These are experimental! - See README.md
       livevideo: {
          url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Fwww.livevideo.com"+
               "%2Fapi%2FGetVideoDetails.ashx%3FvideoId%3D{:id}%26developerId%3D{:apikey}'&format=json",
          regex: /(?:http:\/\/)?(?:.*\.)?livevideo.com\/video(?:\/.+)?\/([A-Z0-9]+)/, // Improve this!
          needkey: true,
          shortcuts: ['lvid','lvideo'],
          formatter: function (data, cb) {
               if (!('results' in data['query'])) {
                  cb({error:true,message:'No results.'},true);
                } else {
                  cb(data['query']['results']);
               };
          },
       },
       muzutv: {
          url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Fwww.muzu.tv"+
               "%2Fapi%2Fvideo%2Fdetails%2F{:id}%3Fmuzuid%3D{:apikey}%26format%3Dxml'&format=json",
          regex: /(?:https:\/\/)?(?:.*\.)?muzu.tv\/(?:.+)\/(\d+)/i,
          needkey: true,
          shortcuts: 'muzu',
          formatter: function (data, cb) {
               if (!('results' in data['query'])) {
                  cb({error:true,message:'No results.'},true);
                } else {
                  cb(data['query']['results']);
               };
          },
       },
       traileraddict: {
          url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Fsimpleapi"+
               ".traileraddict.com%2Ftrailer%2F{:id}'&format=json",
          regex: /(?:https:\/\/)?(?:.*\.)?traileraddict.com\/trailer\/(.+[^\/])/i,
          shortcuts: ['tadd','taddict'],
          formatter: function (data, cb) {
               if (!('results' in data['query'])) {
                  cb({error:true,message:'No results.'},true);
                } else {
                  cb(data['query']['results']);
               };
          },
       },
};
