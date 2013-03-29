VidInfo (v0.1.6)
======

Install: npm install vidinfo

This project is [Unlicensed](http://unlicense.org/ "Title").
In other words, I don't care what you do with it.
However, if you make something interesting, I would like to check it out.

Current APIs supported:
------
   Supported Formats: JSON, CSV, INI -- Only JSON is used at the moment.

   [dailymotion.com](http://www.dailymotion.com/ "Title")
   [bambuser.com (1)](http://bambuser.com/api/ "Title")
   [on.aol.com](http://on.aol.com/ "Title")
   [vimeo.com](http://vimeo.com/ "Title")
   [youtube.com](http://www.youtube.com/ "Title")
   [justin.tv (2)](http://www.justin.tv/ "Title")
   [twitch.tv (2)](http://www.twitch.tv/ "Title") 
   [ustream.tv (2)](http://www.ustream.tv/ "Title")
   [giantbomb.com (1,2)](http://www.giantbomb.com/api/ "Title")
   [videolog.tv](http://videolog.tv/ "Title")
   [mag.ma](http://mag.ma/ "Title")
   [webcams.travel (1)](http://www.webcams.travel/developers/ "Title")
   [archive.org](http://archive.org/ "Title")

    1) API key required. See "bambuser" example at the bottom.
    2) This method is BETA.

Experimental APIs: 
------
   [livevideo.com (1,2)](http://www.livevideo.com/api/ "Title")
   [muzu.tv (1,2)](http://www.muzu.tv/api/ "Title")
   [traileraddict.com (2)](http://www.traileraddict.com/ "Title")
  
    1) API key required. See "bambuser" example at the bottom
    2) This method is BETA.

NOTE: These use [YQL](http://developer.yahoo.com/yql/console/ "Title") to convert XML to JSON.

TODO:
------
    1) Find more API's to use. -- Please suggest some.
    2) Create tests.
    3) Better README.md!
    4) Basic auth support.

    *) Support events? I'm not sure about this yet.
    **) Support XML API's maybe? -- I dislike XML.

Options:
------
    apikey - The API key, when needed.
    formatter - The formatter to use on your JSON data. See ./examples/apis.js

Settings:
------
    format - Use the formatter, true or false.
   
Settings usage:
------
    var VidInfo = require('vidinfo')({format:true});

Shortcuts:
------
    YouTube.com:                yt, youtube
    Justin.tv (stream):         jtvs, jstream, justintvstream
    Justin.tv (video clip):     jtvc, jclip, justintvclip
    Bambuser.com:               bam, bambuser
    Dailymotion.com:            dmo, dailymo, dailymotion
    Vimeo.com:                  vimeo   
    Twitch.tv (stream):         ttvs, tstream, twitchtvstream
    Twitch.tv (video clip):     ttvc, tclip, twitchtvclip
    Ustream.tv (stream):        utvs, ustream, ustreamtvstream
    Ustream.tv (video clip):    utvc, uclip, ustreamtvclip
    on.aol.com:                 onaol 
    GiantBomb.com:              gbomb, giantbomb
    Videolog.tv:                vlog, videolog
    Mag.ma:                     mag, magma
    Livevideo.com*:             lvid, lvideo, livevideo
    Muzu.tv*:                   muzu, muzutv
    Traileraddict.com:          tadd, taddict, traileraddict
    Webcams.travel:             wct, webtra, wtravel, webcamstravel
    Archive.org                 arch, archive, archiveorg

    * See "Experimental APIs" above.

    Examples:
        VidInfo.youtube('ZRAr354usf8',console.log);
        VidInfo.yt('ZRAr354usf8',console.log); // YouTube
        VidInfo.dmo('xycczk',console.log); // Dailymotion

Functions:
------
    VidInfo.detect(url,[callback[,options]]) - Parse a URL and create an object used for 'byurl'.
         See ./examples/detect.js

    VidInfo.byid(id,api,callback[,options]) - Connects to the (should be) correct API for video information.
         See ./examples/byid.js

    VidInfo.byurl(url,callback[,options]) - Connects to the (should be) correct API for video information.
         See ./examples/byurl.js

    VidInfo.<apiname>(id,callback[,options]) -- Shortcut for 'byid'.
         See ./examples/byapi.js

Example Usage - Look in "examples" folder for more examples.
-------
```javascript
var VidInfo = require('vidinfo')({format:true});

// YouTube -- Only return the title and published date, using 'formatter'.
VidInfo.byurl('http://www.youtube.com/watch?v=ZRAr354usf8',console.log,{formatter: function (data,cb) {
       var ret = {};
       if ('$t' in data.entry.title) {
          ret.title = data.entry.title.$t;
          if ('$t' in data.entry.published) {
             ret.published = new Date(Date.parse(data.entry.published.$t));
          }
       };
       cb(ret);
}});
  
// YouTube by video ID.
VidInfo.byid('ZRAr354usf8','youtube',console.log,{formatter: function (data,cb) {
       var ret = {};
       if ('$t' in data.entry.title) {
          ret.title = data.entry.title.$t;
          if ('$t' in data.entry.published) {
             ret.published = new Date(Date.parse(data.entry.published.$t));
          }
       };
       cb(ret);
}});
   
// 'byid' shortcut.
VidInfo.vimeo('61969130',console.log);
VidInfo.youtube('ZRAr354usf8',console.log);
VidInfo.yt('ZRAr354usf8',console.log); // YouTube

// Bambuser (API Key required)
VidInfo.byurl('http://bambuser.com/v/3453034',function (obj) {
       console.log(obj);
},{apikey:'APIKEY'});

// 'detect' example. -- Prints video ID and API link in an object.
console.log(VidInfo.detect('http://www.youtube.com/watch?v=ZRAr354usf8'));
```
