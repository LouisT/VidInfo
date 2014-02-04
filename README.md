MetaInfo (v0.2.14)
======

This project was renamed from "[VidInfo](https://github.com/LouisT/VidInfo "Title")".

Install: npm install [metainfo](https://npmjs.org/package/metainfo "Title")

This project is [Unlicensed](http://unlicense.org/ "Title").
In other words, I don't care what you do with it.
However, if you make something interesting, I would like to check it out.

[![Build Status](https://travis-ci.org/LouisT/MetaInfo.png?branch=master)](https://travis-ci.org/LouisT/MetaInfo)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/LouisT/metainfo/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

Video APIs:
------
   [animoto.com](http://animoto.com/ "Title")
   [anyclip.com (6)](http://anyclip.com/ "Title")
   [archive.org](http://archive.org/ "Title")
   [bambuser.com (1)](http://bambuser.com/api/ "Title")
   [blip.tv](http://blip.tv/ "Title")
   [collegehumor.com](http://collegehumor.com/ "Title")
   [comedycentral.com (6)](http://comedycentral.com/ "Title")
   [coub.com](http://coub.com/ "Title")
   [crackle.com (6)](http://crackle.com/ "Title")
   [dailymotion.com](http://www.dailymotion.com/ "Title")
   [dotsub.com](http://dotsub.com/ "Title")
   [facebook.com (1,3)](http://louist.github.io/MetaInfo/accessToken.html "Title")
   [flickr.com (1)](http://www.flickr.com/services/api/ "Title")
   [funnyordie.com](http://funnyordie.com/ "Title")
   [giantbomb.com (1,2)](http://www.giantbomb.com/api/ "Title")
   [qik.com](http://qik.com/ "Title")
   [hulu.com](http://hulu.com/ "Title")
   [imdb.com (2,3)](http://www.omdbapi.com/ "Title")
   [jest.com](http://jest.com/ "Title")
   [justin.tv (2)](http://www.justin.tv/ "Title")
   [liveleak.com (6)](http://liveleak.com/ "Title")
   [mag.ma (5)](http://mag.ma/ "Title")
   [mefeedia.com (6)](http://mefeedia.com/ "Title")
   [mixbit.com (6)](http://mixbit.com/ "Title")
   [nfb.ca](http://nfb.ca/ "Title")
   [on.aol.com](http://on.aol.com/ "Title")
   [qik.com](http://qik.com/ "Title")
   [revision3.com](http://revision3.com/ "Title")
   [screenr.com](http://screenr.com/ "Title")
   [snotr.com (6)](http://snotr.com/ "Title")
   [socialcam.com (6)](http://socialcam.com/ "Title")
   [ted.com](http://ted.com/ "Title")
   [themoviedb.org (1)](http://www.themoviedb.org/documentation/api "Title")
   [theonion.com (6)](http://theonion.com/ "Title")
   [trailers.apple.com (1)](http://trailers.apple.com/ "Title")
   [trakt.tv (1,2,3)](http://trakt.tv/ "Title")
   [twitch.tv (2)](http://www.twitch.tv/ "Title")
   [ustream.tv (2)](http://www.ustream.tv/ "Title")
   [viddler.com](http://viddler.com/ "Title")
   [videojug.com](http://videojug.com/ "Title")
   [videolog.tv](http://videolog.tv/ "Title")
   [vimeo.com](http://vimeo.com/ "Title")
   [vine.co (6)](http://vine.co/ "Title")
   [vzaar.com](http://vzaar.com/ "Title")
   [webcams.travel (1)](http://www.webcams.travel/developers/ "Title")
   [wistia.com (4)](http://wistia.com/doc/developers "Title")
   [yahoo.com (6)](http://screen.yahoo.com/ "Title")
   [youtube.com](http://www.youtube.com/ "Title")

    1) API key required. See "bambuser" example at the bottom.
    2) This method is BETA.
    3) More information available. See "More Information" below.
    4) Requires basic auth (username:password). See "wista" example at the bottom.
    5) Located in "./apis/obsolete/" due to API changes, removals, or extended down time.
       Just because it's located in obsolete does not mean a replacement hasn't been created.
    6) Requires an embed.ly API key.

Audio APis:
------
   [mixcloud.com](http://mixcloud.com/ "Title")
   [official.fm](http://official.fm/ "Title")
   [soundcloud.com](https://soundcloud.com/ "Title")
   [spotify.com](http://spotify.com/ "Title")

Image APIs:
------
   [23hq.com](http://23hq.com/ "Title")
   [deviantart.com](http://www.deviantart.com/ "Title")

Misc APIs:
------
   [ifixit.com](http://ifixit.com/ "Title")
   [slideshare.net](http://slideshare.net "Title")

[Embed.ly](http://embed.ly/ "Title") API:
------
    WARNING: Do NOT enable embedly (./apis/embedly.js) with any other APIs!
   
    Embedly is a HUGE oEmbed provider and as such supports some of the APIs already in use.
    Because of this there are conflicts. To generate the embedly.js file, see functions below.
    After you run the embedly generator, a new file will be created at: ./apis/embedly.js
    Embedly is too massive to display what websites it supports, so you'll have to read embedly.js yourself
    or check the embed.ly providers list here: http://embed.ly/embed/features/providers

    Services URL: http://api.embed.ly/1/services
    API key required, signup here: https://app.embed.ly/signup/

Experimental APIs: 
------
   [metacafe.com](http://metacafe.com/ "Title")
   [movieclips.com](http://movieclips.com/ "Title")
   [muzu.tv (1)](http://www.muzu.tv/api/ "Title")
   [traileraddict.com](http://www.traileraddict.com/ "Title")
  
    1) API key required. See "bambuser" example at the bottom.

NOTE: These now require xml2json. (https://npmjs.org/package/xml2json)

More Information:
------
    (imdb.com)
        IMDB does not have an API so use of a 3rd party API is required.
        Please see http://www.omdbapi.com/ for more information.
    (facebook.com)
        Facebook requires an access token to be generated. The generator makes an access token
        that lasts for 60 days. You can revisit the generator to find out when your token will expire.
        I will look for a better method later on, but for now this is how it has to be.
        Generator: http://louist.github.io/MetaInfo/accessToken.html
    (trakt.tv)
        This API is massive and can return a lot of information. I need to rewrite parts of MetaInfo to support this.
        For now, extended summary for Movies and TV shows are supported.

TODO:
------
- [ ] Find more API's to use. -- Please suggest some. (This should never be finished!)
- [ ] Create tests. (Started, need to figure out async with assert. "npm test")
- [ ] Improve basic auth and API key support.
- [ ] Make a better facebook access token generator.
      (http://louist.github.io/MetaInfo/accessToken.html)
- [ ] Add support for more API features besides summaries.
      NOTE: I might just make multiple API files because this could be complicated...
            -- I've done this already for places like ustream.tv and and justin.tv -- We'll see what happens!
- [x] Document things better... This README is a mess! (Did I do this?)

Options:
------
    apikey - The API key, when needed.
    basicauth - Your basic auth `username:password`, when needed.
    formatter - The formatter to use on your JSON data. See ./examples/youtubecom.js

    (detectAll options)
    nocheck - Return information on a video more than once if found multiple times. See ./examples/detectAll.js
    keys -  An object with API keys.
    Example: {keys:{bambuser:'EXAMPLE-KEY',themoviedb:'ANOTHER-KEY'},nocheck:true}

Settings:
------
    format - Use the formatter, true or false.
    enabled - Path to enabled API configs. -- Default: ./apis/enabled/
    disabled - Path to disabled API configs. -- Default: ./apis/disabled/
   
Settings usage:
------
    var MetaInfo = require('metainfo')({format:true});

Shortcuts:
------
    23hq.com:                   23hq, 23hqcom
    Archive.org:                arch, archive, archiveorg
    Animoto.com:                ani, animoto, animotocom
    Anyclip.com:                aclip, anyclip, anyclipcom
    Bambuser.com:               bam, bambuser, bambusercom
    Blip.tv:                    blip, bliptv
    Collegehumor.com*:          chumor, college, collegehumor, collegehumorcom
    Comedycentral.com:          comcen, comedycentral, comedycentralcom
    Coub.com:                   coub, coubcom
    Crackle.com:                crackle, cracklecom
    Dailymotion.com:            dmo, dailymo, dailymotion, dailymotioncom
    Deviantart.com:             dart, deviant, deviantart, deviantartcom
    Dotsub.com:                 dotsub, dotsubcom
    Facebook.com:               fbook, fbvideo, facebook, facebookcom
    Flickr.com:                 flickr, flickrcom
    Funnyordie.com:             ford, funnyor, funnyordie, funnyordiecom
    GiantBomb.com:              gbomb, giantbomb, giantbombcom
    Hulu.com:                   hulu, hulucom
    iFixit.com:                 ifixit, ifixitcom
    IMDB.com:                   imdb, imdbcom
    Jest.com:                   jest, jestcom
    Justin.tv (stream):         jtvs, jstream, justintvstream
    Justin.tv (video clip):     jtvc, jclip, justintvclip
    Liveleak.com:               lleak, liveleak, liveleakcom
    Mag.ma:                     mag, magma
    Mefeedia.com:               mefee, mefeedia, mefeediacom
    Metacafe.com*:              meta, mcafe, metacafe, metacafecom
    MixBit.com:                 mix, mixbit, mixbitcom
    Mixcloud.com:               mixc, mixcloud, mixcloudcom
    Movieclips.com*:            mclips, movieclips, movieclipscom
    Muzu.tv*:                   muzu, muzutv
    Nfb.ca:                     nfb, nfbca
    Official.fm:                ofm, official, officialfm
    on.aol.com:                 onaol, onaolcom
    Qik.com:                    qik, qikcom
    Revision3.com:              revis, revision3, revision3com
    Screenr.com:                scrn, screenr, screenercom
    Slideshare.net:             sshare, slideshare, slidesharenet
    Snotr.com:                  snotr, snotrcom
    Socialcam.com:              scam, socialcam, socialcamcom
    Soundcloud.com:             sndcdn, soundcloud, soundcloudcom
    Spotify.com:                spotify, spotifycom
    Ted.com:                    ted, tedcom
    Themoviedb.org:             tdb, tmdb, themoviedborg
    Theonion.com:               onion, theonion, theonioncom
    Traileraddict.com*:         tadd, taddict, traileraddict, traileraddictcom
    Trailers.apple.com:         tapple, trailersapple, trailersapplecom
    Trakt.tv (show/movie):      trakt, trakttv
    Twitch.tv (stream):         ttvs, tstream, twitchtvstream
    Twitch.tv (video clip):     ttvc, tclip, twitchtvclip
    Ustream.tv (stream):        utvs, ustream, ustreamtvstream
    Ustream.tv (video clip):    utvc, uclip, ustreamtvclip
    Viddler.com:                vidd, viddler, viddlercom
    Videojug.com:               vjug, videojug, videojugcom
    Videolog.tv:                vlog, videolog, videologtv
    Vimeo.com:                  vimeo, vimeocom
    Vine.co:                    vine, vineco
    Vzaar.com:                  vzaar, vzaarcom
    Webcams.travel:             wct, webtra, wtravel, webcamstravel
    Wistia.com:                 wistia, wistacom
    Yahoo.com:                  yahoo, yvideo, yahoocom
    YouTube.com:                yt, youtube, youtubecom

    *  See "Experimental APIs" above.

    Examples:
        MetaInfo.youtube('ZRAr354usf8',console.log);
        MetaInfo.yt('ZRAr354usf8',console.log); // YouTube
        MetaInfo.dmo('xycczk',console.log); // Dailymotion

Functions:
------
    MetaInfo.detect(url[,callback[,options]]) - Parse a URL and create an object used for 'byURL'.
         See ./examples/detect.js

    MetaInfo.detectAll(string[,callback[,options]]) - Parse a string and return an object with all the IDs.
         Options: keys - The list of keys for APIs that might need them.
                  nocheck - Return information on a video more than once if found multiple times.
                  Example: {keys:{bambuser:'EXAMPLE-KEY',themoviedb:'ANOTHER-KEY'},nocheck:true}
         See ./examples/detectAll.js

    MetaInfo.byID(id,api,callback[,options]) - Connects to the (should be) correct API for video information.
         See ./examples/byid.js - Changed from "byid" for standardization.

    MetaInfo.byURL(url,callback[,options]) - Connects to the (should be) correct API for video information.
         See ./examples/byurl.js - Changed from "byurl" for standardization.

    MetaInfo.<apiname>(id,callback[,options]) -- Shortcut for 'byID'.
         See ./examples/byapi.js
 
    MetaInfo.getAPILocation(apiname) - Get the location of an API config file. The "apiname" is the full name, such as "youtubecom."
         Returns: {is:<true/false>,path:<location>,file:<filename>} -- "is" is in enabled (true) or disabled (false) folder.

    MetaInfo.enable(apiname[,nomove]) - Enable an API. The "apiname" is the full name, such as "youtubecom."
         NOTE: Moves <apiname> from ./apis/disabled/ to ./apis/enabled/ unless "nomove" is true.

    MetaInfo.disable(apiname[,nomove]) - Disable an API. The "apiname" is the full name, such as "youtubecom."
         NOTE: Moves <apiname> from ./apis/enabled/ to ./apis/disabled/ unless "nomove" is true.   

    MetaInfo.genEmbedly([callback[,services url]]) - Generate/update the embedly.js config from the services url.
          Services url: http://api.embed.ly/1/services
          Callback arguments: {message:<string>,location:<string>,success:<boolean>}

Example Usage - Look in "examples" folder for more examples.
-------
```javascript
var MetaInfo = require('MetaInfo')({format:true});

// YouTube -- Only return the title and published date, using 'formatter'.
MetaInfo.byURL('http://www.youtube.com/watch?v=ZRAr354usf8',console.log,{formatter: function (data,cb) {
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
MetaInfo.byID('ZRAr354usf8','youtube',console.log,{formatter: function (data,cb) {
       var ret = {};
       if ('$t' in data.entry.title) {
          ret.title = data.entry.title.$t;
          if ('$t' in data.entry.published) {
             ret.published = new Date(Date.parse(data.entry.published.$t));
          }
       };
       cb(ret);
}});
   
// 'byID' shortcut.
MetaInfo.vimeo('61969130',console.log);
MetaInfo.youtube('ZRAr354usf8',console.log);
MetaInfo.yt('ZRAr354usf8',console.log); // YouTube
MetaInfo.trakt(["show","under-the-dome"],console.log); // Trakt.tv

// Bambuser (API Key required)
MetaInfo.byURL('http://bambuser.com/v/3453034',function (obj) {
       console.log(obj);
},{apikey:'APIKEY'});

// Wista (Basic auth required)
MetaInfo.byURL('http://ltdev.wistia.com/medias/piywx9v8rr',function (obj,e) {
   if (!e) {
      console.log('(byapi) wista: '+JSON.stringify(obj)+'\n\n');
    } else {
      console.log('(byapi - ERROR) wista: '+JSON.stringify({error:true,message:obj})+'\n\n');
   }
},{basicauth:'USERNAME:PASSWORD'});

// Facebook (requires access token - http://louist.github.io/MetaInfo/accessToken.html)
MetaInfo.byURL('https://www.facebook.com/photo.php?v=10101580633888836&set=vb.225034700870481&type=3&theater',function (obj) {
   console.log(JSON.stringify(obj)+'\n\n');
},{apikey:'ACCESS TOKEN'});

// Trakt "byID", must pass an array. ["{:method}","{:id}"] -- Method is show or movie.
// See http://trakt.tv/api-docs/ for more information.
MetaInfo.byID(["movie","after-earth-2013"],"trakt",function (obj) {
   console.log(JSON.stringify(obj)+'\n\n');
},{apikey:"APIKEY"})
MetaInfo.byID(["show","under-the-dome"],"trakt",function (obj) { 
   console.log(JSON.stringify(obj)+'\n\n');
},{apikey:"APIKEY"})

// 'detect' example. -- Prints video ID and API link in an object.
console.log(MetaInfo.detect('http://www.youtube.com/watch?v=ZRAr354usf8'));

// 'detectAll' example. Prints an object with multiple 'detect' objects.
console.log(MetaInfo.detectAll('http://www.youtube.com/watch?v=ZRAr354usf8 http://bambuser.com/v/3453034 http://ltdev.wistia.com/medias/piywx9v8rr http://flic.kr/p/e9964e'));
```
