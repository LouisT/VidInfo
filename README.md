VidInfo (v0.2.0)
======

Install: npm install vidinfo

This project is [Unlicensed](http://unlicense.org/ "Title").
In other words, I don't care what you do with it.
However, if you make something interesting, I would like to check it out.

Current APIs supported:
------
   Supported Formats: JSON, CSV, INI -- XML via [YQL](http://developer.yahoo.com/yql/console/ "Title").

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
   [imdb.com (2,3)](http://imdb.com/ "Title")
   [themoviedb.org (1)](http://www.themoviedb.org/documentation/api "Title")
   [vzaar.com](http://vzaar.com/ "Title")
   [wistia.com (4)](http://wistia.com/doc/developers "Title")
   [flickr.com (1)](http://www.flickr.com/services/api/ "Title")
   [facebook.com (1,3)](http://louist.github.io/VidInfo/accessToken.html "Title")
   [blip.tv](http://blip.tv/ "Title")

    1) API key required. See "bambuser" example at the bottom.
    2) This method is BETA.
    3) More information available. See "More Information" below.
    4) Requires basic auth (username:password). See "wista" example at the bottom.

Experimental APIs: 
------
   [livevideo.com (1)](http://www.livevideo.com/api/ "Title")
   [muzu.tv (1)](http://www.muzu.tv/api/ "Title")
   [traileraddict.com](http://www.traileraddict.com/ "Title")
   [metacafe.com](http://metacafe.com/ "Title")
   [collegehumor.com](http://metacafe.com/ "Title")
  
    1) API key required. See "bambuser" example at the bottom.

NOTE: These use [YQL](http://developer.yahoo.com/yql/console/ "Title") to convert XML to JSON.

More Information:
------
    (imdb.com)
        IMDB uses a 3rd party API. (http://imdbapi.org/)

    (facebook.com)
        Facebook requires an access token to be generated. The generator makes an access token
        that lasts for 60 days. You can revisit the generator to find out when your token will expire.
        I will look for a better method later on, but for now this is how it has to be.
        Generator: http://louist.github.io/VidInfo/accessToken.html

TODO:
------
    1) Find more API's to use. -- Please suggest some.
    2) Create tests.
    3) Improve basic auth and API key support.
    4) Clean up code and find a use for "detectAll".
    5) Make a better facebook access token generator.
       (http://louist.github.io/VidInfo/accessToken.html)

    *) Support events? I'm not sure about this yet.
    **) Support XML API's maybe? -- I dislike XML.

Options:
------
    apikey - The API key, when needed.
    basicauth - Your basic auth `username:password`, when needed.
    formatter - The formatter to use on your JSON data. See ./examples/apis.js

Settings:
------
    format - Use the formatter, true or false.
    enabled - Path to enabled API configs. -- Default: ./apis/enabled/
    disabled - Path to disabled API configs. -- Default: ./apis/disabled/
   
Settings usage:
------
    var VidInfo = require('vidinfo')({format:true});

Shortcuts:
------
    YouTube.com:                yt, youtube, youtubecom
    Justin.tv (stream):         jtvs, jstream, justintvstream
    Justin.tv (video clip):     jtvc, jclip, justintvclip
    Bambuser.com:               bam, bambuser, bambusercom
    Dailymotion.com:            dmo, dailymo, dailymotion, dailymotioncom
    Vimeo.com:                  vimeo, vimeocom
    Twitch.tv (stream):         ttvs, tstream, twitchtvstream
    Twitch.tv (video clip):     ttvc, tclip, twitchtvclip
    Ustream.tv (stream):        utvs, ustream, ustreamtvstream
    Ustream.tv (video clip):    utvc, uclip, ustreamtvclip
    on.aol.com:                 onaol, onaolcom
    GiantBomb.com:              gbomb, giantbomb, giantbombcom
    Videolog.tv:                vlog, videolog, videologtv
    Mag.ma:                     mag, magma
    Livevideo.com*:             lvid, lvideo, livevideo, livevideocom
    Muzu.tv*:                   muzu, muzutv
    Traileraddict.com*:         tadd, taddict, traileraddict, traileraddictcom
    Webcams.travel:             wct, webtra, wtravel, webcamstravel
    Archive.org:                arch, archive, archiveorg
    IMDB.com:                   imdb, imdbapiorg
    Themoviedb.org:             tdb, tmdb, themoviedborg
    Vzaar.com:                  vzaar, vzaarcom
    Wistia.com:                 wistia, wistacom
    Flickr.com:                 flickr, flickrcom
    Facebook.com:               fbook, fbvideo, facebook, facebookcom
    Metacafe.com:               meta, mcafe, metacafe, metacafecom     
    Blip.tv:                    blip, bliptv
    Collegehumor.com:           chumor, college, collegehumor, collegehumorcom

    *  See "Experimental APIs" above.

    Examples:
        VidInfo.youtube('ZRAr354usf8',console.log);
        VidInfo.yt('ZRAr354usf8',console.log); // YouTube
        VidInfo.dmo('xycczk',console.log); // Dailymotion

Functions:
------
    VidInfo.detect(url[,callback[,options]]) - Parse a URL and create an object used for 'byurl'.
         See ./examples/detect.js

    VidInfo.detectAll(string[,callback[,options]]) - Parse a string and return an object with all the IDs.
         Options: keys - The list of keys for APIs that might need them.
                  Example: {keys:{bambuser:'EXAMPLE-KEY',themoviedb:'ANOTHER-KEY'}}
         See ./examples/detectAll.js

    VidInfo.byid(id,api,callback[,options]) - Connects to the (should be) correct API for video information.
         See ./examples/byid.js

    VidInfo.byurl(url,callback[,options]) - Connects to the (should be) correct API for video information.
         See ./examples/byurl.js

    VidInfo.<apiname>(id,callback[,options]) -- Shortcut for 'byid'.
         See ./examples/byapi.js
 
    VidInfo.getAPILocation(apiname) - Get the location of an API config file. The "apiname" is the full name, such as "youtubecom."
 
    VidInfo.enable(apiname) - Enable an API. The "apiname" is the full name, such as "youtubecom."

    VidInfo.disable(apiname) - Disable an API. The "apiname" is the full name, such as "youtubecom."

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

// Wista (Basic auth required)
VidInfo.byurl('http://ltdev.wistia.com/medias/piywx9v8rr',function (obj,e) {
   if (!e) {
      console.log('(byapi) wista: '+JSON.stringify(obj)+'\n\n');
    } else {
      console.log('(byapi - ERROR) wista: '+JSON.stringify({error:true,message:obj})+'\n\n');
   }
},{basicauth:'USERNAME:PASSWORD'});

// Facebook (requires access token - http://louist.github.io/VidInfo/accessToken.html)
vidinfo.byurl('https://www.facebook.com/photo.php?v=10101580633888836&set=vb.225034700870481&type=3&theater',function (obj) {
   console.log(JSON.stringify(obj)+'\n\n');
},{apikey:'ACCESS TOKEN'});

// 'detect' example. -- Prints video ID and API link in an object.
console.log(VidInfo.detect('http://www.youtube.com/watch?v=ZRAr354usf8'));

// 'detectAll' example. Prints an object with multiple 'detect' objects.
console.log(VidInfo.detectAll('http://www.youtube.com/watch?v=ZRAr354usf8 http://bambuser.com/v/3453034 http://ltdev.wistia.com/medias/piywx9v8rr http://flic.kr/p/e9964e'));
```
