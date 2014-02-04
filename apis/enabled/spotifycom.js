/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo

 For more information on oEmbed visit http://oembed.com/
*/
module.exports = {
       url: function (opts) {
            var split = opts.id.split("/"),
                res = split.join(":");
            switch (split[0].toLowerCase()) {
                   case "album":
                        res += "&extras=track";
                        break;
                   case "artist":
                        res += "&extras=album";
                        break;
            };
            return "http://ws.spotify.com/lookup/1/.json?uri=spotify:"+res;
       },
       regex: /(?:https?:\/\/)(?:.*\.)?spotify\.com\/(.[^\?\s]+)/i,
       shortcuts: 'spotify',
};
