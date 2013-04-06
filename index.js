/*
 VidInfo - v0.1.9 - Louis T. <LouisT@ltdev.im>
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
          this.userAgent = 'Mozilla/5.0+(compatible; VidInfo/0.1.9; https://github.com/LouisT/VidInfo)';

          // Import supported APIs. -- Change this to prevent a massive API (./apis.js) file?
          // Might put each API in it's own file. (./apis/enabled/youtube.js, ./apis/disabled/vimeo.js)
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
           var apidat,
               opts = opts||{};
           if (!cb) {
              return false; // Needs a callback!
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
           var opts = opts||{},
               api = this.byShortcut(api);
           if ((api in this.apis)) {
              var apidat = this.copyObj(this.apis[api]),
                  fields = ((apidat['fields']||[]).join((apidat['fieldsJoiner']||','))),
                  foropts = {id:id,fields:fields};
              if (('apikey' in opts || 'needkey' in apidat)) {
                 if (!('apikey' in opts)) {
                    return cb({error:true,message:'API key is required!'},true);
                  } else {
                    foropts['apikey'] = opts['apikey'];
                 };
              };
              if (('basicauth' in opts || 'basicauth' in apidat)) {
                 if (!('basicauth' in opts)) {
                    return cb({error:true,message:'Basic auth `username:password` is required!'},true);
                  } else {
                    foropts['basicauth'] = opts['basicauth'];
                 };
              };
              this.doRequest(this.stringFormat(apidat["url"],foropts),apidat,cb,opts);
            } else {
              cb({error:true,message:'No such API!'},true);
           };
   };

   // Detect what API to use by video url.
   VidInfo.prototype.detect = function (url,cb,opts) {
           var opts = opts||{},
               matches;
           apiloop:
           for (var api in this.apis) {
               var apidat = this.copyObj(this.apis[api]),
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
                            apidat['error'] = true;
                            apidat['message'] = 'API key is required!';
                          } else {
                            foropts['apikey'] = opts['apikey'];
                         };
                      };
                      if (('basicauth' in opts || 'basicauth' in apidat)) {
                         if (!('basicauth' in opts)) {
                            apidat['error'] = true;
                            apidat['message'] = 'Basic auth `username:password` is required!';
                          } else {
                            foropts['basicauth'] = opts['basicauth'];
                         };
                      };
                      apidat['url'] = this.stringFormat(apidat["url"],foropts);
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

   // Get ALL IDs within a string. Not currently used for anything. -- Improve this! 
   VidInfo.prototype.detectAll = function (str,cb,opts) {
           var str = str.replace(/^\s+|\s+$/g,'').replace(/ +/g,' ').split(' '),
               strlen = str.length,
               ret = {},
               opts = opts||{},
               matches;

           // Attempt to get the key by API shortcut.
           if (('keys' in opts)) {
              for (var apin in opts['keys']) {
                  opts['keys'][this.byShortcut(apin)] = opts['keys'][apin];
              };
           };

           // Scan the split string for URLs.
           for (var i = 0; i < strlen; i++) {
               for (var api in this.apis) {
                   var apidat = this.copyObj(this.apis[api]),
                       fields = ((apidat['fields']||[]).join((apidat['fieldsJoiner']||',')));
                   if (!(apidat['regex'] instanceof Array)) {
                      apidat['regex'] = [apidat['regex']];
                   };
                   for (var num in apidat['regex']) {
                       var regex = apidat['regex'][num];
                       if ((matches = regex.exec(str[i])) !== null) {
                          if (!(api in ret)) {
                             ret[api] = [];
                          };
                          var foropts = {id:matches[1],fields:fields};
                          if ((('keys' in opts && api in opts['keys']) || 'needkey' in apidat)) {
                             if (!('keys' in opts) || !opts['keys'][api]) {
                                apidat['error'] = true;
                                apidat['message'] = 'API key is required!';
                              } else {
                                foropts['apikey'] = opts['keys'][api];
                             };
                          };
                          if ((('auths' in opts && api in opts['auths']) || 'basicauth' in apidat)) {
                             if (!('auths' in opts) || !opts['auths'][api]) {
                                apidat['error'] = true;
                                apidat['message'] = 'Basic auth `username:password` is required!';
                              } else {
                                foropts['basicauth'] = opts['auths'][api];
                             };
                          };
                          apidat['url'] = this.stringFormat(apidat["url"],foropts);
                          apidat['api'] = api;
                          apidat['id']  = matches[1];
                          ret[api].push(apidat);
                       };
                   };
               };
           };
           if (!cb) {
              return ret;
            } else {
              cb(ret,false); 
           }
   };

   // Make http requests! -- Moved from 'byurl' and 'byid'
   VidInfo.prototype.doRequest = function (url,apidat,cb,opts) {
           // Default to JSON for requests. Custom user agent, accept everything!
           var getopts = {type:'json',headers:{'User-Agent':this.userAgent,'Accept':'*/*'}};

           // Support for JSON, CVS and INI. Maybe XML at some point.
           if (apidat['type']) {
              getopts['type'] = apidat['type'];
           };
   
           // Run the request.
           var formatter = (opts['formatter']||(apidat['formatter']||false)),
               parent = this;
           http_get(url,getopts,function(content,error) {
                (formatter&&parent.settings['format']?formatter:cb)(content,error,cb);
           });
   };

   // Do not overwrite an existing object, just copy it! - For for "this.apis" overwrite.
   VidInfo.prototype.copyObj = function (obj) {
           var newObj = ((obj.constructor===Array)?[]:{});
           for (var key in obj) {
               if ((this.getType(obj[key]).match(/(object|array)/i))) {
                  newObj[key] = this.copyObj(obj[key]);
                } else {
                  if (obj.hasOwnProperty(key)) {
                     newObj[key] = obj[key];
                  };
               }
           };
           return newObj;
   };

   // Try and detect the API by shortcut.
   VidInfo.prototype.byShortcut  = function (api) {
           if (!(api in this.apis)) {
              for (var apin in this.apis) {
                  if ('shortcuts' in this.apis[apin] && this.apis[apin].shortcuts.indexOf(api) > -1) {
                     api = apin;
                  };
              };
           };
           return api;
   };

   // Format strings, used with URLs in ./apis.js
   VidInfo.prototype.stringFormat = function (str,opts) {
           var parent = this;
           return str.replace(/{(\\?:)([^}]+)}/g,function(m,o,k) {
                  return (parent.getType((v=(opts[k]?opts[k]:m)))=="Function"?v(k,m,opts):v);
           });
   };

   // Get the type of an object.
   VidInfo.prototype.getType = function (obj) {
           return Object.prototype.toString.call(obj).match(/^\[object (.*)\]$/)[1];
   };

   module.exports = VidInfo;
}).call(this);
