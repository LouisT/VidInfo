/*
 VidInfo - v0.1.6 - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/VidInfo
*/
(function(){
   var http_get = require('./libs/http_get.js');

   VidInfo = function (settings) {
          if (!(this instanceof VidInfo)) {
             return new VidInfo(settings);
          };

          // Look at the README for available settings.
          this.settings = settings||{format:true};

          // User-Agent sent on API requests.
          this.userAgent = 'Mozilla/5.0+(compatible; VidInfo/0.1.6; https://github.com/LouisT/VidInfo)';

          // Import supported APIs
          this.apis = require('./apis');

          // Add 'byid' shortcuts. See ./examples/byapi.js
          for (var api in this.apis) {
              var shortcuts = [api];
              if (('shortcuts' in this.apis[api])) {
                 shortcuts = shortcuts.concat(this.apis[api].shortcuts||[]);
              };
              for (var num in shortcuts) {
                  this[shortcuts[num]] = function (api,id,cb,opts) {
                       this.byid(id,api,cb,opts);
                  }.bind(this,api);
               };
           };
   };

   // Pull information from the url.
   VidInfo.prototype.byurl = function (url,cb,opts) {
           if (!cb) {
              return false; // Needs a callback!
           };
           if (!opts) {
              opts = {};
           };
           if (!('error' in (apidat = this.detect(url,null,opts)))) {
              this.doRequest(apidat['url'],apidat,cb,opts);
            } else {
              cb(apidat,true);
           };
   };

   // Get information for an ID for the specified API.
   VidInfo.prototype.byid  = function (id,api,cb,opts) {
           if (!cb) {
              return false; // Needs a callback!
           };
           var opts = opts||{};
           if ((api in this.apis)) {
              var apidat = this.apis[api],
                  fields = ((apidat['fields']||[]).join((apidat['fieldsJoiner']||','))),
                  foropts = {id:id,fields:fields};
              if (('apikey' in opts || 'needkey' in apidat)) {
                 if (!('apikey' in opts)) {
                    return cb({error:true,message:'API key is required!'},true);
                  } else {
                    foropts['apikey'] = opts['apikey'];
                 };
              };
              this.doRequest(this.formatter(apidat["url"],foropts),apidat,cb,opts);
            } else {
              cb({error:true,message:'No such API!'},true);
           };
   };

   // Detect what API to use by video url.
   VidInfo.prototype.detect = function (url,cb,opts) {
           var  opts = opts||{};
           apiloop:
           for (var api in this.apis) {
               var apidat = this.apis[api],
                   fields = ((apidat['fields']||[]).join((apidat['fieldsJoiner']||',')));
               if (!(apidat['regex'] instanceof Array)) {
                  apidat['regex'] = [apidat['regex']];
               };
               for (var num in apidat['regex']) {
                   var regex = apidat['regex'][num];
                   if ((matches = regex.exec(url)) !== null) {
                      var foropts = {id:matches[1],fields:fields};
                      if (('apikey' in opts || 'needkey' in apidat)) {
                         if (!('apikey' in opts)) {
                            apidat = {error:true,message:'API key is required!'};
                            break apiloop;
                          } else {
                            foropts['apikey'] = opts['apikey'];
                         };
                      };
                      apidat['url'] = this.formatter(apidat["url"],foropts);
                      apidat['api'] = api;
                      apidat['id']  = matches[1];
                      break apiloop;
                   };
               };
           };
           // Return an error if not successful.
           if (!('id' in apidat) && !('error' in apidat)) {
              apidat = {error:true,message:'Could not detect API for supplied URL.'};
           };
           if (!cb) {
              return apidat;
            } else {
              cb(apidat,(('error' in apidat)?true:false)); 
           }
   };

   // Make http requests! -- Moved from 'byurl' and 'byid'
   VidInfo.prototype.doRequest = function (url,apidat,cb,opts) {
           // Default to JSON for requests.
           var getopts = {type:'json',headers:{'User-Agent':this.userAgent}};

           // Support for JSON, CVS and INI. Maybe XML at some point.
           if (apidat['type']) {
              getopts['type'] = apidat['type'];
           };
   
           // Run the request.
           http_get(url,getopts,function(apidat,cb,formatter,b,e) {
                if (!e && (formatter||apidat['formatter']) && this.settings['format']) {
                   (formatter||apidat['formatter'])(b,cb); // Clean up returned data. (./apis.js)
                 } else {
                   cb(b,e);
                };
           }.bind(this,apidat,cb,(opts['formatter']||(apidat['formatter']||false))));
   };

   // Format strings, used with URLs in ./apis.js
   VidInfo.prototype.formatter = function (str,opts) {
           return str.replace(/{(\\?:)([^}]+)}/g,function(m,o,k) {
                  return (Object.prototype.toString.call((v=(this[k]?this[k]:m))).match(/^\[object (.*)\]$/)[1]=="Function"?v(k,m,this):v);
           }.bind(opts));
   };
   module.exports = VidInfo;
}).call(this);
