/*
 This is an example of using a function to generate the URL.

 This file is part of the 'MetaInfo' project.
 https://github.com/LouisT/MetaInfo
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
       regex: /(?:https?:\/\/)(?:.*\.)?spotify\.com\/(.[^\?]+)/i,
       shortcuts: 'spotify',
};
