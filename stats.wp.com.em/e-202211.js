window.wpcom = window.wpcom || {};
window._stq = window._stq || [];
function st_go(a) {
    window._stq.push(['view', a]);
}
;function linktracker_init(b, p) {
    window._stq.push(['clickTrackerInit', b, p]);
}
;window.wpcom.stats = (function() {
    var _clickTracker = (function() {
        var _blog, _post;
        var _addEvent = function(el, t, cb) {
            if ('function' === typeof el.addEventListener) {
                el.addEventListener(t, cb);
            } else if ('object' === typeof el.attachEvent) {
                el.attachEvent('on' + t, cb);
            }
        };
        var _getClickTarget = function(e) {
            if ('object' === typeof e && e.target) {
                return e.target;
            } else {
                return window.event.srcElement;
            }
        };
        var _clickTrack = function(e) {
            var d = 0;
            if ('object' === typeof InstallTrigger)
                d = 100;
            if (7 === _getIEVer())
                d = 100;
            _processLink(_getClickTarget(e), d);
        };
        var _contextTrack = function(e) {
            _processLink(_getClickTarget(e), 0);
        };
        var _isSameHost = function(a) {
            var l = document.location;
            if (l.host === a.host)
                return true;
            if ('' === a.host)
                return true;
            if (l.protocol === a.protocol && l.host === a.hostname) {
                if ('http:' === l.protocol && l.host + ':80' === a.host)
                    return true;
                if ('https:' === l.protocol && l.host + ':443' === a.host)
                    return true;
            }
            ;return false;
        };
        var _processLink = function(a, d) {
            try {
                if ('object' !== typeof a)
                    return;
                while ('A' !== a.nodeName) {
                    if ('undefined' === typeof a.nodeName)
                        return;
                    if ('object' !== typeof a.parentNode)
                        return;
                    a = a.parentNode;
                }
                ;if (_isSameHost(a))
                    return;
                if ('javascript:' === a.protocol)
                    return;
                window._stq.push(['click', {
                    s: '2',
                    u: a.href,
                    r: ('undefined' !== typeof a.rel) ? a.rel : '0',
                    b: ('undefined' !== typeof _blog) ? _blog : '0',
                    p: ('undefined' !== typeof _post) ? _post : '0'
                }]);
                if (d) {
                    var now = new Date();
                    var end = now.getTime() + d;
                    while (true) {
                        now = new Date();
                        if (now.getTime() > end) {
                            break
                        }
                    }
                }
            } catch (e) {}
        };
        var API = {
            init: function(b, p) {
                _blog = b;
                _post = p;
                if (document.body) {
                    _addEvent(document.body, 'click', _clickTrack);
                    _addEvent(document.body, 'contextmenu', _contextTrack);
                } else if (document) {
                    _addEvent(document, 'click', _clickTrack);
                    _addEvent(document, 'contextmenu', _contextTrack);
                }
            }
        };
        return API;
    }
    )();
    var _getIEVer = function() {
        var v = 0;
        if ('object' === typeof navigator && navigator.appName == 'Microsoft Internet Explorer') {
            var m = navigator.userAgent.match(/MSIE ([0-9]{1,})[\.0-9]{0,}/);
            if (null !== m) {
                v = parseInt(m[1]);
            }
        }
        ;return v;
    };
    var _serialize = function(o) {
        var p, q = [];
        for (p in o) {
            if (o.hasOwnProperty(p)) {
                q.push(encodeURIComponent(p) + '=' + encodeURIComponent(o[p]));
            }
        }
        ;return q.join('&');
    };
    var _loadGif = function(t, q, id) {
        var i = new Image();
        i.src = document.location.protocol + '//pixel.wp.com/' + t + '?' + q + '&rand=' + Math.random();
        i.alt = "";
        i.width = '6';
        i.height = '5';
        if ('string' === typeof id && document.body) {
            i.id = id;
            document.body.appendChild(i);
        }
    };
    var _computePerformance = function(o) {
        var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (conn) {
            if (conn.effectiveType) {
                o.conn_type = conn.effectiveType;
            }
            if (conn.rtt) {
                o.conn_rtt = conn.rtt;
            }
            if (conn.downlink) {
                o.conn_downlink = conn.downlink;
            }
        }
        if (window.performance) {
            var performance = window.performance;
            if (window.PerformanceNavigationTiming) {
                var navigationTiming = performance.getEntriesByType('navigation')[0];
                if (navigationTiming.nextHopProtocol) {
                    o.protocol = navigationTiming.nextHopProtocol;
                }
            }
            if (performance.timing && performance.navigation && (performance.navigation.type === 0 || performance.navigation.type === 1)) {
                var t = performance.timing;
                o.dns_latency = Math.round(t.domainLookupEnd - t.domainLookupStart);
                o.conn_latency = Math.round(t.connectEnd - t.connectStart);
                o.resp_latency = Math.round(t.responseStart - t.requestStart);
                o.resp_duration = Math.round(t.responseEnd - t.responseStart);
                o.dom_interact = Math.round(t.domInteractive - t.navigationStart);
                o.dom_load = Math.round(t.domContentLoadedEventStart - t.navigationStart);
                if (t.loadEventStart > 0) {
                    o.page_load = Math.round(t.loadEventStart - t.navigationStart);
                }
            }
            var resources = performance.getEntriesByType('resource');
            if (resources.length > 0) {
                var cssFiles = 0
                  , jsFiles = 0
                  , imgFiles = 0
                  , fontFiles = 0
                  , otherFiles = 0
                  , cssDuration = 0
                  , jsDuration = 0
                  , imgDuration = 0
                  , fontDuration = 0
                  , otherDuration = 0
                  , http1Files = 0
                  , http2Files = 0
                  , sslFiles = 0
                  , originFiles = 0
                  , externalFiles = 0;
                for (var i = 0; i < resources.length; i++) {
                    var resource = resources[i];
                    if (resource.nextHopProtocol) {
                        if (resource.nextHopProtocol.startsWith('http/1')) {
                            http1Files += 1;
                        } else if ('h2' === resource.nextHopProtocol) {
                            http2Files += 1;
                        }
                        if (resource.name.startsWith('https')) {
                            sslFiles += 1;
                        }
                    } else {
                        http1Files += 1;
                        if (resource.name.startsWith('https')) {
                            sslFiles += 1;
                        }
                    }
                    if (resource.name.indexOf(location.hostname) >= 0) {
                        originFiles += 1;
                    } else {
                        externalFiles += 1;
                    }
                    var extension;
                    if (resource.name.indexOf('fonts.googleapis.com/css') >= 0) {
                        extension = 'css';
                    } else {
                        extension = resource.name.split(/\#|\?/)[0].split('.').pop();
                    }
                    if (extension) {
                        extension = extension.toLowerCase();
                        if ('js' === extension) {
                            jsDuration += resource.duration;
                            jsFiles += 1;
                        } else if ('css' === extension) {
                            cssDuration += resource.duration;
                            cssFiles += 1;
                        } else if ('gif' === extension || 'jpg' === extension || 'jpeg' === extension || 'png' === extension) {
                            imgDuration += resource.duration;
                            imgFiles += 1;
                        } else if ('woff' === extension || 'woff2' === extension || 'ttf' === extension || 'otf' === extension) {
                            fontDuration += resource.duration;
                            fontFiles += 1;
                        } else {
                            otherDuration += resource.duration;
                            otherFiles += 1;
                        }
                    } else {
                        otherDuration += resource.duration;
                        otherFiles += 1;
                    }
                }
                o.files_origin = originFiles;
                o.files_ext = externalFiles;
                o.files_ssl = sslFiles;
                o.files_http1 = http1Files;
                o.files_http2 = http2Files;
                o.files_js = jsFiles;
                o.files_css = cssFiles;
                o.files_img = imgFiles;
                o.files_font = fontFiles;
                o.files_other = otherFiles;
                o.duration_js = Math.round(jsDuration);
                o.duration_css = Math.round(cssDuration);
                o.duration_img = Math.round(imgDuration);
                o.duration_font = Math.round(fontDuration);
                o.duration_other = Math.round(otherDuration);
            }
            var paintEntries = performance.getEntriesByType('paint');
            if (paintEntries === undefined) {
                return;
            }
            for (var i = 0; i < paintEntries.length; i++) {
                var performanceEntry = paintEntries[i];
                if ('first-paint' === performanceEntry.name) {
                    o.first_paint = Math.round(performanceEntry.startTime);
                } else if ('first-contentful-paint' === performanceEntry.name) {
                    o.first_cf_paint = Math.round(performanceEntry.startTime);
                }
            }
        }
    };
    var STQ = function(q) {
        this.a = 1;
        if (q && q.length) {
            for (var i = 0; i < q.length; i++) {
                this.push(q[i]);
            }
        }
    };
    STQ.prototype.push = function(args) {
        if (args) {
            if ("object" === typeof args && args.length) {
                var cmd = args.splice(0, 1);
                if (API[cmd])
                    API[cmd].apply(null, args);
            } else if ("function" === typeof args) {
                args();
            }
        }
    }
    ;
    var initQueue = function() {
        if (!window._stq.a) {
            window._stq = new STQ(window._stq);
        }
    };
    var newAnonId = function() {
        var randomBytesLength = 18
          , randomBytes = [];
        if (window.crypto && window.crypto.getRandomValues) {
            randomBytes = new Uint8Array(randomBytesLength);
            window.crypto.getRandomValues(randomBytes);
        } else {
            for (var i = 0; i < randomBytesLength; ++i) {
                randomBytes[i] = Math.floor(Math.random() * 256);
            }
        }
        return btoa(String.fromCharCode.apply(String, randomBytes));
    };
    var _initTracks = function(o) {
        o._ui = newAnonId();
        o._ut = 'anon';
        o._en = 'jetpack_pageview_timing';
        var date = new Date();
        o._ts = date.getTime();
        o._tz = date.getTimezoneOffset() / 60;
        var nav = window.navigator;
        var screen = window.screen;
        o._lg = nav.language;
        o._pf = nav.platform;
        o._ht = screen.height;
        o._wd = screen.width;
        var sx = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
        var sy = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        o._sx = (sx !== undefined) ? sx : 0;
        o._sy = (sy !== undefined) ? sy : 0;
        if (document.location !== undefined) {
            o._dl = document.location.toString();
        }
        if (document.referrer !== undefined) {
            o._dr = document.referrer;
        }
    };
    var API = {
        view: function(o) {
            o.host = document.location.host;
            o.ref = document.referrer;
            o.fcp = getFirstContentfulPaint();
            _loadGif('g.gif', _serialize(o), 'wpstats');
            if (window.performance && Math.random() < 0.005) {
                window.addEventListener('load', function(event) {
                    window.setTimeout(API.samplePerformance.bind(this, o.blog, o.post, o.j.split(':').reverse()[0]), 100);
                });
            }
        },
        click: function(o) {
            _loadGif('c.gif', _serialize(o), false);
        },
        clickTrackerInit: function(b, p) {
            _clickTracker.init(b, p);
        },
        samplePerformance: function(blogId, postId, jetpackVersion) {
            if (!window.performance) {
                return;
            }
            var o = {
                blog: blogId,
                post: postId,
                blog_id: blogId,
                jetpack_version: jetpackVersion
            };
            _initTracks(o);
            _computePerformance(o);
            _loadGif('t.gif', _serialize(o));
        }
    };
    var isDocumentHidden = function() {
        return typeof document.hidden !== "undefined" && document.hidden;
    };
    var onDocumentVisibilityChange = function() {
        if (!document.hidden) {
            document.removeEventListener('visibilitychange', onDocumentVisibilityChange);
            initQueue();
        }
    };
    var initQueueAfterDocumentIsVisible = function() {
        document.addEventListener('visibilitychange', onDocumentVisibilityChange);
    };
    function getFirstContentfulPaint() {
        if (window.performance) {
            var paints = window.performance.getEntriesByType('paint');
            for (var i = 0; i < paints.length; i++) {
                if (paints[i]['name'] === 'first-contentful-paint') {
                    return Math.round(paints[i]['startTime']);
                }
            }
        }
        return 0;
    }
    if (6 === _getIEVer() && 'complete' !== document.readyState && 'object' === typeof document.attachEvent) {
        document.attachEvent('onreadystatechange', function(e) {
            if ('complete' === document.readyState)
                window.setTimeout(initQueue, 250);
        });
    } else {
        if (isDocumentHidden()) {
            initQueueAfterDocumentIsVisible();
        } else {
            initQueue();
        }
    }
    ;return API;
}
)();
