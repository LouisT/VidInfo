/*
 This is a random lib I've been working on.
 Not worth releasing on it's own, but I use
 it for random projects. Slightly ugly, but
 it'll be improved over time obviously.
*/
(function(){
   http_get = function (url, options, cb) {
            if (http_get._conf['useIPv6']) {
               if (!options) {
                  options = {};
               };
               if (options['useIPv6'] !== false) {
                  options['useIPv6'] = options['useIPv6']||true;
               }
            };
            if (options && !options['useIPv6']) {
               var popts = http_get.parseReq(url, options, cb);
               http_get.doRequest(popts.opts,popts.http, popts.cb);
             } else {
               http_get.v6(url,options,cb);
            }
   };
   http_get.v6 = function (url, options, cb) {
            var popts = http_get.parseReq(url,options,cb);
            if ('host' in popts.opts) {
               require('dns').lookup(popts.opts.host,6,function (err, addr, family) {
                      if (!err) {
                         popts.opts.headers.Host = popts.opts.hostname;
                         popts.opts.hostname = addr;
                      }
                      http_get.doRequest(popts.opts, popts.http, popts.cb);
               });
             } else {
               cb('invalid host',1,null);
            }
   };
   http_get.parseReq = function (url, options, cb) {
            var opts = {}, p, http;
            if (!cb) {
               cb = options;
               options = {};
            }
            if (typeof(url) === 'string') {
               opts = require('url').parse(url);
             } else {
               opts = url;
               url = opts.herf;
            }
            for (var i in options) {
                if (options.hasOwnProperty(i)) {
                   opts[i] = options[i];
                }
            }
            opts.headers = opts.headers||{};
            if ((http = get_proto(opts)) === null) {
               cb('unsupported protocol',1,null);
               return;
            }
            if (opts.username && opts.password) {
               opts.auth = opts.username+":"+opts.password;
            }
            if ('type' in opts) {
               opts.type = String(opts.type).toLowerCase();
               if (['head','headers'].indexOf(opts.type) > -1) {
                  opts.method = 'HEAD';
               }
             } else {
               opts.type = 'default';
            }
            if (!opts.method) {
               opts.method = (opts.postData?"POST":"GET");
            }
            if (opts.method == 'POST' || opts.method == 'PUT') {
               if (opts.postData && typeof opts.postData == 'object') {
                  opts.postData = http_get.querystring(opts.postData);
               }
               opts.headers["Content-type"] = "application/x-www-form-urlencoded";
               opts.headers["Content-length"] = opts.postData.length;
            }
            if (!('compress' in opts) || opts.compress) {
               opts.headers['accept-encoding'] = "gzip,deflate";
            };
            function get_proto(opts) {
                     if (!('protocol' in opts)) {
                        return null;
                     }
                     var s = opts.protocol.slice(0,-1).toLowerCase();
                     switch (s) {
                            case 'http':
                            case 'https':
                                 return require(s);
                            default:
                                 return null;
                     }
            }
            return {url:url,opts:opts,http:http,cb:cb};
   };
   http_get.doRequest = function (opts, method, cb) {
            var req = method.request(opts, function(res) {
                function onData (chunk) {
                         http_get.clearTimeout(req);
                         this.buffer += chunk;
                         if (opts.type == "title") {
                            scanTitle(this,res,req);
                         };
                         if (!/(gzip|deflate)/i.test(res.headers['content-encoding'])) {
                            if (('maxSize' in opts) && this.buffer.length >= opts.maxSize) {
                               req.abort();
                            };
                         };
                };
                function onEnd () {
                         if (opts.type && opts.type !== 'default') {
                            var parsed = returnType(opts.type, this.buffer, res);
                            return cb((parsed?parsed:"No content for requested type."), !parsed, res);
                         };
                         cb(this.buffer,null,res);
                };
                try {
                   switch (res.headers['content-encoding']) {
                          case 'gzip': case 'deflate':
                               var unzip = require('zlib').createUnzip();
                               res.pipe(unzip);
                               break;
                          default:
                               var unzip = res;
                   };
                   unzip.buffer = '';
                   unzip.on('data',onData).on('end',onEnd).on('error',function(e){cb(e.message,1,res);});
                } catch (e) { cb(e.message,1,res); };
            }).on('error', function(e) {
               http_get.clearTimeout(this);
               if (!this.haderr) {
                  cb(e.message,1,null);
               }
               this.haderr = true;
            });
            if (opts.timeout) {
               req.timeout = setTimeout(function(){
                    req.abort();
                    req.emit('error',{message:'request reached timeout'});
               },(!isNaN(opts.timeout)?opts.timeout:30000));
            }
            if (opts.postData) {
               req.write(opts.postData);
            }
            function scanTitle (that,res,req) {
                     var body = that.buffer.replace(/(\r\n|\n|\r)/gm,"");
                     if (/<title>(.*?)<\/title>/i.test(body)) {
                        res.title = http_get.trim(body.replace(/.*<title>(.*?)<\/title>.*/i,"$1"));
                        req.abort();
                     }
            };
            function returnType (type, body, res) {
                     if (type == "auto") {
                        switch (res.headers['content-type'].match(/[^;]+\/[^;]+/)[0]) {
                               case 'text/json':
                               case 'application/json':
                                    type = 'json';
                                    break;
                               case 'text/xml':
                               case 'application/xml':
                               case 'application/xhtml+xml':
                                    type = 'xml';
                                    break;
                               case 'text/csv':
                                    type = 'csv';
                                    break;
                               default:
                                    return body;
                        };
                     }
                     switch (type) {
                            case 'title':
                                 return res.title||null;
                            case 'head':
                            case 'headers':
                                 return res.headers||{};
                            case 'ini':
                                 try {
                                    return http_get.ini2obj(body);
                                  } catch (e) {
                                    return false;
                                 }
                            case 'csv':
                                 try {
                                    return http_get.csv2obj(body);
                                  } catch (e) {
                                    return false;
                                 }
                            case 'json':
                                 try {
                                    return JSON.parse(body);
                                  } catch (e) {
                                    return false;
                                 }
                            case 'xml':
                                 try {
                                    var parser = require('xml2json');
                                    return parser.toJson(body,{object:true});
                                  } catch (e) {
                                    return false;
                                 }
                            default:
                                 return body;
                     }
            }
            req.end();
   };
   http_get.csv2obj = function (input,jsonify) {
            var data = String(input).split(/\r?\n/),
                obj = {records:[]},
                pattern = /(?:^|,)("(?:[^"]+)*"|[^,]*)/g;
            obj.ids = data.shift().split(pattern).map(function(id){
                return id.toLowerCase().replace(/[\"']/g,'');
            }).filter(function(id){
                return id;
            });
            data.forEach(function (line) {
                var split = line.split(pattern),
                    count = split.length,
                    rec = {};
                split = split.filter(function(res){ return res; });
                for (var x = 0; x < count; x++) {
                    if (split[x] && obj.ids[x]) {
                       rec[obj.ids[x]] = split[x].replace(/[\"']/g,'');
                    };
                };
                if ((!!Object.keys(rec).length)) {
                   obj.records.push(rec);
                };
            });
            return (jsonify?JSON.stringify(obj):obj);
   };
   http_get.ini2obj = function (input,jsonify) {
            var obj = {comments:[],_undefined:{}},
                cursec = false,
                param, section, comment;
            input.split(/\r?\n|\r/).forEach(function(line) {
                  if ((param = line.match(/^\s*([\w\.\-\_]+)\s*=\s*(.*?)\s*$/))) {
                     if (cursec) {
                        obj[cursec][param[1]] = param[2];
                      } else {
                        obj['_undefined'][param[1]] = param[2];
                     }
                  } else if ((section = line.match(/^\s*\[\s*([^\]]*)\s*\]\s*$/))) {
                     obj[section[1]] = {comments:[]}, cursec = section[1];
                  } else if ((comment = line.match(/^\s*;(.+)$/))) {
                     comment = http_get.trim(comment[1]);
                     if (cursec) {
                        obj[cursec]['comments'].push(comment);
                      } else {
                        obj['comments'].push(comment);
                     }
                  }
            });
            return (jsonify?JSON.stringify(obj):obj);
   };
   http_get.clearTimeout = function (obj) {
            if (obj.timeout) {
               clearTimeout(obj.timeout);
            };
   };
   http_get.querystring = function(opts) {
            return require('querystring').stringify(opts);
   };
   http_get.applyQuerystring = function(url, opts) {
            var qs = require("querystring"),
                ourl = require('url'),
                uo = ourl.parse(url),
                us = qs.parse(uo.query||{});
            for (var i in opts) {
                if (opts.hasOwnProperty(i)) {
                   us[i] = opts[i];
                }
            }
            uo.query = qs.stringify(us);
            uo.search = "?"+uo.query
            return ourl.format(uo);
   };
   http_get.trim = function (str) {
            return str.replace(/^\s+|\s+$/g,'').replace(/ +/g,' ');
   };
   http_get.configure = function (conf) {
            http_get._conf = conf||{};
   };
   http_get._conf = {};
   module.exports = http_get;
}).call(this);
