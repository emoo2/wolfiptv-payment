// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__rep",
                "once_per_event": true,
                "vtp_containerId": ["macro", 1],
                "tag_id": 1
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [[["if", 0], ["add", 0]]]
        },
        "runtime": []

    };

    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var h, aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ba = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , ca;
    if ("function" == typeof Object.setPrototypeOf)
        ca = Object.setPrototypeOf;
    else {
        var da;
        a: {
            var ea = {
                a: !0
            }
              , fa = {};
            try {
                fa.__proto__ = ea;
                da = fa.a;
                break a
            } catch (a) {}
            da = !1
        }
        ca = da ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ha = ca
      , ja = function(a, b) {
        a.prototype = ba(b.prototype);
        a.prototype.constructor = a;
        if (ha)
            ha(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Vj = b.prototype
    }
      , ka = this || self
      , la = function(a) {
        return a
    };
    var ma = function() {}
      , na = function(a) {
        return "function" === typeof a
    }
      , k = function(a) {
        return "string" === typeof a
    }
      , oa = function(a) {
        return "number" === typeof a && !isNaN(a)
    }
      , qa = Array.isArray
      , sa = function(a, b) {
        if (a && qa(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
      , ua = function(a, b) {
        if (!oa(a) || !oa(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
      , wa = function(a, b) {
        for (var c = new va, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
      , xa = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
      , ya = function(a) {
        return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    }
      , za = function(a) {
        return Math.round(Number(a)) || 0
    }
      , Aa = function(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }
      , Ba = function(a) {
        var b = [];
        if (qa(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
      , Ca = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
      , Da = function() {
        return new Date(Date.now())
    }
      , Ea = function() {
        return Da().getTime()
    }
      , va = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    va.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    va.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    var Ga = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
      , Ha = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
      , Ia = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , Ja = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b))
                return !0;
        return !1
    }
      , Ka = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
      , La = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
      , Ma = /^\w{1,9}$/
      , Na = function(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        xa(a, function(d, e) {
            Ma.test(d) && e && c.push(d)
        });
        return c.join(b)
    };
    var Oa, Pa = function() {
        if (void 0 === Oa) {
            var a = null
              , b = ka.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: la,
                        createScript: la,
                        createScriptURL: la
                    })
                } catch (c) {
                    ka.console && ka.console.error(c.message)
                }
                Oa = a
            } else
                Oa = a
        }
        return Oa
    };
    var Ra = function(a, b) {
        this.m = b === Qa ? a : ""
    };
    Ra.prototype.toString = function() {
        return this.m + ""
    }
    ;
    var Qa = {};
    var Sa = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Ta() {
        var a = ka.navigator;
        if (a) {
            var b = a.userAgent;
            if (b)
                return b
        }
        return ""
    }
    function Ua(a) {
        return -1 != Ta().indexOf(a)
    }
    ;var Va = {}
      , Wa = function(a, b, c) {
        this.m = c === Va ? a : ""
    };
    Wa.prototype.toString = function() {
        return this.m.toString()
    }
    ;
    var Xa = function(a) {
        return a instanceof Wa && a.constructor === Wa ? a.m : "type_error:SafeHtml"
    }
      , Ya = function(a) {
        var b = Pa()
          , c = b ? b.createHTML(a) : a;
        return new Wa(c,null,Va)
    };
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    function Za(a) {
        if ("script" === a.tagName.toLowerCase())
            throw Error("Use setTextContent with a SafeScript.");
        if ("style" === a.tagName.toLowerCase())
            throw Error("Use setTextContent with a SafeStyleSheet.");
    }
    ;var A = window
      , G = document
      , $a = navigator
      , ab = G.currentScript && G.currentScript.src
      , bb = function(a, b) {
        var c = A[a];
        A[a] = void 0 === c ? b : c;
        return A[a]
    }
      , cb = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , db = {
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    }
      , eb = {
        onload: 1,
        src: 1,
        width: 1,
        height: 1,
        style: 1
    };
    function fb(a, b, c) {
        b && xa(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var gb = function(a, b, c, d) {
        var e = G.createElement("script");
        fb(e, d, db);
        e.type = "text/javascript";
        e.async = !0;
        var f, g = Pa(), l = g ? g.createScriptURL(a) : a;
        f = new Ra(l,Qa);
        e.src = f instanceof Ra && f.constructor === Ra ? f.m : "type_error:TrustedResourceUrl";
        var m, n, p, q = null == (p = (n = (e.ownerDocument && e.ownerDocument.defaultView || window).document).querySelector) ? void 0 : p.call(n, "script[nonce]");
        (m = q ? q.nonce || q.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", m);
        cb(e, b);
        c && (e.onerror = c);
        var r = G.getElementsByTagName("script")[0] || G.body || G.head;
        r.parentNode.insertBefore(e, r);
        return e
    }
      , ib = function() {
        if (ab) {
            var a = ab.toLowerCase();
            if (0 === a.indexOf("https://"))
                return 2;
            if (0 === a.indexOf("http://"))
                return 3
        }
        return 1
    }
      , jb = function(a, b, c, d, e) {
        var f = e
          , g = !1;
        f || (f = G.createElement("iframe"),
        g = !0);
        fb(f, c, eb);
        d && xa(d, function(m, n) {
            f.dataset[m] = n
        });
        f.height = "0";
        f.width = "0";
        f.style.display = "none";
        f.style.visibility = "hidden";
        if (g) {
            var l = G.body && G.body.lastChild || G.body || G.head;
            l.parentNode.insertBefore(f, l)
        }
        cb(f, b);
        void 0 !== a && (f.src = a);
        return f
    }
      , kb = function(a, b, c) {
        var d = new Image(1,1);
        d.onload = function() {
            d.onload = null;
            b && b()
        }
        ;
        d.onerror = function() {
            d.onerror = null;
            c && c()
        }
        ;
        d.src = a;
        return d
    }
      , lb = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , mb = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , H = function(a) {
        A.setTimeout(a, 0)
    }
      , nb = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , ob = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , pb = function(a) {
        var b = G.createElement("div")
          , c = b
          , d = Ya("A<div>" + a + "</div>");
        void 0 !== c.tagName && Za(c);
        c.innerHTML = Xa(d);
        b = b.lastChild;
        for (var e = []; b.firstChild; )
            e.push(b.removeChild(b.firstChild));
        return e
    }
      , qb = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , rb = function(a) {
        var b;
        try {
            b = $a.sendBeacon && $a.sendBeacon(a)
        } catch (c) {}
        b || kb(a)
    }
      , sb = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    }
      , tb = function(a) {
        var b = G.featurePolicy;
        return b && na(b.allowsFeature) ? b.allowsFeature(a) : !1
    };
    /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var ub = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , vb = function(a) {
        if (null == a)
            return String(a);
        var b = ub.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , wb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , xb = function(a) {
        if (!a || "object" != vb(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !wb(a, "constructor") && !wb(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return void 0 === b || wb(a, b)
    }
      , J = function(a, b) {
        var c = b || ("array" == vb(a) ? [] : {}), d;
        for (d in a)
            if (wb(a, d)) {
                var e = a[d];
                "array" == vb(e) ? ("array" != vb(c[d]) && (c[d] = []),
                c[d] = J(e, c[d])) : xb(e) ? (xb(c[d]) || (c[d] = {}),
                c[d] = J(e, c[d])) : c[d] = e
            }
        return c
    };
    var yb = function(a) {
        if (void 0 === a || qa(a) || xb(a))
            return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0
        }
        return !1
    };
    var zb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            ih: a("consent"),
            jh: a("consent_always_fire"),
            nf: a("convert_case_to"),
            pf: a("convert_false_to"),
            qf: a("convert_null_to"),
            rf: a("convert_true_to"),
            sf: a("convert_undefined_to"),
            Fj: a("debug_mode_metadata"),
            sb: a("function"),
            Sh: a("instance_name"),
            Wh: a("live_only"),
            Xh: a("malware_disabled"),
            Yh: a("metadata"),
            ci: a("original_activity_id"),
            Kj: a("original_vendor_template_id"),
            Jj: a("once_on_load"),
            bi: a("once_per_event"),
            Uf: a("once_per_load"),
            Mj: a("priority_override"),
            Nj: a("respected_consent_types"),
            Yf: a("setup_tags"),
            Zf: a("tag_id"),
            $f: a("teardown_tags")
        }
    }();
    var Vb;
    var Wb = [], Xb = [], Yb = [], Zb = [], ac = [], bc = {}, cc, dc, ec, fc = function(a, b) {
        var c = a["function"]
          , d = b && b.event;
        if (!c)
            throw Error("Error: No function name given for function call.");
        var e = bc[c], f = {}, g;
        for (g in a)
            if (a.hasOwnProperty(g))
                if (0 === g.indexOf("vtp_"))
                    e && d && d.og && d.og(a[g]),
                    f[void 0 !== e ? g : g.substr(4)] = a[g];
                else if (g === zb.jh.toString() && a[g]) {}
        e && d && d.ng && (f.vtp_gtmCachedValues = d.ng);
        return void 0 !== e ? e(f) : Vb(c, f, b)
    }, hc = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = gc(a[e], b, c));
        return d
    }, gc = function(a, b, c) {
        if (qa(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(gc(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var g = Wb[f];
                if (!g || b.Te(g))
                    return;
                c[f] = !0;
                try {
                    var l = hc(g, b, c);
                    l.vtp_gtmEventId = b.id;
                    d = fc(l, {
                        event: b,
                        index: f,
                        type: 2
                    });
                    ec && (d = ec.ri(d, l))
                } catch (x) {
                    b.Hg && b.Hg(x, Number(f)),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var m = 1; m < a.length; m += 2)
                    d[gc(a[m], b, c)] = gc(a[m + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var n = !1, p = 1; p < a.length; p++) {
                    var q = gc(a[p], b, c);
                    dc && (n = n || q === dc.od);
                    d.push(q)
                }
                return dc && n ? dc.xi(d) : d.join("");
            case "escape":
                d = gc(a[1], b, c);
                if (dc && qa(a[1]) && "macro" === a[1][0] && dc.Si(a))
                    return dc.fj(d);
                d = String(d);
                for (var r = 2; r < a.length; r++)
                    Ab[a[r]] && (d = Ab[a[r]](d));
                return d;
            case "tag":
                var u = a[1];
                if (!Zb[u])
                    throw Error("Unable to resolve tag reference " + u + ".");
                return d = {
                    vg: a[2],
                    index: u
                };
            case "zb":
                var t = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                t["function"] = a[1];
                var v = ic(t, b, c)
                  , y = !!a[4];
                return y || 2 !== v ? y !== (1 === v) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, ic = function(a, b, c) {
        try {
            return cc(hc(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var lc = function(a) {
        function b(r) {
            for (var u = 0; u < r.length; u++)
                d[r[u]] = !0
        }
        for (var c = [], d = [], e = jc(a), f = 0; f < Xb.length; f++) {
            var g = Xb[f]
              , l = kc(g, e);
            if (l) {
                for (var m = g.add || [], n = 0; n < m.length; n++)
                    c[m[n]] = !0;
                b(g.block || [])
            } else
                null === l && b(g.block || []);
        }
        for (var p = [], q = 0; q < Zb.length; q++)
            c[q] && !d[q] && (p[q] = !0);
        return p
    }
      , kc = function(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e)
                return !1;
            if (2 === e)
                return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var l = b(f[g]);
            if (2 === l)
                return null;
            if (1 === l)
                return !1
        }
        return !0
    }
      , jc = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = ic(Yb[c], a));
            return b[c]
        }
    };
    var mc = {
        ri: function(a, b) {
            b[zb.nf] && "string" === typeof a && (a = 1 == b[zb.nf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(zb.qf) && null === a && (a = b[zb.qf]);
            b.hasOwnProperty(zb.sf) && void 0 === a && (a = b[zb.sf]);
            b.hasOwnProperty(zb.rf) && !0 === a && (a = b[zb.rf]);
            b.hasOwnProperty(zb.pf) && !1 === a && (a = b[zb.pf]);
            return a
        }
    };

    var O = {
        rb: "_ee",
        Ec: "_syn_or_mod",
        Oj: "_uei",
        Bc: "_eu",
        Lj: "_pci",
        Kb: "event_callback",
        dd: "event_timeout",
        Aa: "gtag.config",
        Ia: "gtag.get",
        ma: "purchase",
        Hb: "refund",
        lb: "begin_checkout",
        Eb: "add_to_cart",
        Fb: "remove_from_cart",
        sh: "view_cart",
        uf: "add_to_wishlist",
        na: "view_item",
        Gb: "view_promotion",
        Vd: "select_promotion",
        Ud: "select_item",
        nb: "view_item_list",
        tf: "add_payment_info",
        rh: "add_shipping_info",
        Ra: "value_key",
        ab: "value_callback",
        W: "allow_ad_personalization_signals",
        xc: "restricted_data_processing",
        cc: "allow_google_signals",
        ra: "cookie_expires",
        Jb: "cookie_update",
        yc: "session_duration",
        hd: "session_engaged_time",
        bd: "engagement_time_msec",
        Ea: "user_properties",
        va: "transport_url",
        aa: "ads_data_redaction",
        wa: "user_data",
        qc: "first_party_collection",
        D: "ad_storage",
        M: "analytics_storage",
        kf: "region",
        lf: "wait_for_update",
        qa: "conversion_linker",
        Ja: "conversion_cookie_prefix",
        fa: "value",
        ca: "currency",
        Pf: "trip_type",
        X: "items",
        Gf: "passengers",
        Yd: "allow_custom_scripts",
        qb: "session_id",
        Lf: "quantity",
        fb: "transaction_id",
        eb: "language",
        ad: "country",
        $c: "allow_enhanced_conversions",
        ce: "aw_merchant_id",
        ae: "aw_feed_country",
        be: "aw_feed_language",
        $d: "discount",
        T: "developer_id",
        Df: "global_developer_id_string",
        Af: "event_developer_id_string",
        jd: "delivery_postal_code",
        je: "estimated_delivery_date",
        he: "shipping",
        oe: "new_customer",
        de: "customer_lifetime_value",
        ie: "enhanced_conversions",
        bc: "page_view",
        ja: "linker",
        N: "domains",
        Mb: "decorate_forms",
        zf: "enhanced_conversions_automatic_settings",
        zh: "auto_detection_enabled",
        Bf: "ga_temp_client_id",
        Wd: "user_engagement",
        mh: "app_remove",
        nh: "app_store_refund",
        oh: "app_store_subscription_cancel",
        ph: "app_store_subscription_convert",
        qh: "app_store_subscription_renew",
        th: "first_open",
        uh: "first_visit",
        vh: "in_app_purchase",
        wh: "session_start",
        xh: "allow_display_features",
        Qa: "campaign",
        fc: "campaign_content",
        hc: "campaign_id",
        ic: "campaign_medium",
        jc: "campaign_name",
        kc: "campaign_source",
        mc: "campaign_term",
        Ba: "client_id",
        ia: "cookie_domain",
        Ib: "cookie_name",
        Za: "cookie_path",
        Ka: "cookie_flags",
        nc: "custom_map",
        me: "groups",
        Ff: "non_interaction",
        Sa: "page_location",
        pe: "page_path",
        La: "page_referrer",
        wc: "page_title",
        sa: "send_page_view",
        Nb: "send_to",
        zc: "session_engaged",
        oc: "euid_logged_in_state",
        Ac: "session_number",
        Ph: "tracking_id",
        hb: "url_passthrough",
        Lb: "accept_incoming",
        vc: "url_position",
        Jf: "phone_conversion_number",
        Hf: "phone_conversion_callback",
        If: "phone_conversion_css_class",
        Kf: "phone_conversion_options",
        Kh: "phone_conversion_ids",
        Jh: "phone_conversion_country_code",
        ob: "aw_remarketing",
        Zd: "aw_remarketing_only",
        Xd: "gclid",
        yh: "auid",
        Eh: "affiliation",
        yf: "tax",
        fe: "list_name",
        xf: "checkout_step",
        wf: "checkout_option",
        Fh: "coupon",
        Gh: "promotions",
        Da: "user_id",
        Nh: "retoken",
        Ca: "cookie_prefix",
        vf: "disable_merchant_reported_purchases",
        Dh: "dc_natural_search",
        Ch: "dc_custom_params",
        Ef: "method",
        Oh: "search_term",
        Bh: "content_type",
        Ih: "optimize_id",
        Hh: "experiments",
        cb: "google_signals"
    };
    O.fd = "google_tld";
    O.ld = "update";
    O.ke = "firebase_id";
    O.sc = "ga_restrict_domain";
    O.cd = "event_settings";
    O.ee = "dynamic_event_settings";
    O.Ob = "user_data_settings";
    O.Nf = "screen_name";
    O.se = "screen_resolution";
    O.pb = "_x_19";
    O.$a = "enhanced_client_id";
    O.ed = "_x_20";
    O.ne = "internal_traffic_results";
    O.kd = "traffic_type";
    O.gd = "referral_exclusion_definition";
    O.uc = "ignore_referrer";
    O.Ah = "content_group";
    O.oa = "allow_interest_groups";
    var Lc = {};
    O.Sf = Object.freeze((Lc[O.tf] = 1,
    Lc[O.rh] = 1,
    Lc[O.Eb] = 1,
    Lc[O.Fb] = 1,
    Lc[O.sh] = 1,
    Lc[O.lb] = 1,
    Lc[O.Ud] = 1,
    Lc[O.nb] = 1,
    Lc[O.Vd] = 1,
    Lc[O.Gb] = 1,
    Lc[O.ma] = 1,
    Lc[O.Hb] = 1,
    Lc[O.na] = 1,
    Lc[O.uf] = 1,
    Lc));
    O.ue = Object.freeze([O.W, O.cc, O.Jb]);
    O.$h = Object.freeze([].concat(O.ue));
    O.ve = Object.freeze([O.ra, O.dd, O.yc, O.hd, O.bd]);
    O.ai = Object.freeze([].concat(O.ve));
    var Mc = {};
    O.Sd = (Mc[O.D] = "1",
    Mc[O.M] = "2",
    Mc);
    var Qc = {
        wi: "EG",
        nj: "EG-IS"
    };
    var Rc = {}
      , Sc = function(a, b) {
        Rc[a] = Rc[a] || [];
        Rc[a][b] = !0
    }
      , Tc = function(a) {
        for (var b = [], c = Rc[a] || [], d = 0; d < c.length; d++)
            c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (var e = 0; e < b.length; e++)
            b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("")
    }
      , Uc = function() {
        for (var a = [], b = Rc.GA4_EVENT || [], c = 0; c < b.length; c++)
            b[c] && a.push(c);
        return 0 < a.length ? a : void 0
    };
    var Q = function(a) {
        Sc("GTM", a)
    };
    var Vc = new function(a, b) {
        this.m = a;
        this.defaultValue = void 0 === b ? !1 : b
    }
    (1933);
    var Xc = function() {
        var a = Wc
          , b = "Re";
        if (a.Re && a.hasOwnProperty(b))
            return a.Re;
        var c = new a;
        a.Re = c;
        a.hasOwnProperty(b);
        return c
    };
    var Wc = function() {
        var a = {};
        this.m = function() {
            var b = Vc.m
              , c = Vc.defaultValue;
            return null != a[b] ? a[b] : c
        }
        ;
        this.o = function() {
            a[Vc.m] = !0
        }
    };
    var Yc = [];
    function Zc() {
        var a = bb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: $c,
            update: ad,
            addListener: bd,
            notifyListeners: cd,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }
    function $c(a, b, c, d, e, f) {
        var g = Zc();
        !g.usedDefault && g.usedUpdate && (g.wasSetLate = !0);
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var l = g.entries
              , m = l[a] || {}
              , n = m.region
              , p = c && k(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update)
                  , r = {
                    region: p,
                    initial: "granted" === b,
                    update: m.update,
                    quiet: q
                };
                if ("" !== d || !1 !== m.initial)
                    l[a] = r;
                q && A.setTimeout(function() {
                    l[a] === r && r.quiet && (r.quiet = !1,
                    dd(a),
                    cd(),
                    Sc("TAGGING", 2))
                }, f)
            }
        }
    }
    function ad(a, b) {
        var c = Zc();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = ed(a)
              , e = c.entries
              , f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = ed(a);
            f.quiet ? (f.quiet = !1,
            dd(a)) : g !== d && dd(a)
        }
    }
    function bd(a, b) {
        Yc.push({
            Je: a,
            Fi: b
        })
    }
    function dd(a) {
        for (var b = 0; b < Yc.length; ++b) {
            var c = Yc[b];
            qa(c.Je) && -1 !== c.Je.indexOf(a) && (c.Mg = !0)
        }
    }
    function cd(a, b) {
        for (var c = 0; c < Yc.length; ++c) {
            var d = Yc[c];
            if (d.Mg) {
                d.Mg = !1;
                try {
                    d.Fi({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }
    var ed = function(a) {
        var b = Zc();
        b.accessedAny = !0;
        var c = b.entries[a] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
      , fd = function(a) {
        var b = Zc();
        b.accessedDefault = !0;
        return (b.entries[a] || {}).initial
    }
      , gd = function(a) {
        var b = Zc();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }
      , hd = function() {
        if (!Xc().m())
            return !1;
        var a = Zc();
        a.accessedAny = !0;
        return a.active
    }
      , id = function() {
        var a = Zc();
        a.accessedDefault = !0;
        return a.usedDefault
    }
      , jd = function(a, b) {
        Zc().addListener(a, b)
    }
      , kd = function(a, b) {
        Zc().notifyListeners(a, b)
    }
      , ld = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!gd(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            jd(b, function(e) {
                d || c() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
      , md = function(a, b) {
        function c() {
            for (var f = [], g = 0; g < d.length; g++) {
                var l = d[g];
                !1 === ed(l) || e[l] || (f.push(l),
                e[l] = !0)
            }
            return f
        }
        var d = k(b) ? [b] : b
          , e = {};
        c().length !== d.length && jd(d, function(f) {
            var g = c();
            0 < g.length && (f.Je = g,
            a(f))
        })
    };
    function nd() {}
    function qd() {}
    ;function rd(a) {
        for (var b = [], c = 0; c < sd.length; c++) {
            var d = a(sd[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var sd = [O.D, O.M]
      , td = function(a) {
        var b = a[O.kf];
        b && Q(40);
        var c = a[O.lf];
        c && Q(41);
        for (var d = qa(b) ? b : [b], e = {
            $b: 0
        }; e.$b < d.length; e = {
            $b: e.$b
        },
        ++e.$b)
            xa(a, function(f) {
                return function(g, l) {
                    if (g !== O.kf && g !== O.lf) {
                        var m = d[f.$b]
                          , n = Qc.wi
                          , p = Qc.nj;
                        Zc().set(g, l, m, n, p, c)
                    }
                }
            }(e))
    }
      , ud = 0
      , vd = function(a, b, c) {
        xa(a, function(f, g) {
            Zc().update(f, g)
        });
        kd(b, c && c.priorityId);
        var d = Ea()
          , e = d - ud;
        ud && 0 <= e && 1E3 > e && Q(66);
        ud = d
    }
      , wd = function(a) {
        var b = ed(a);
        return void 0 != b ? b : !0
    }
      , xd = function() {
        return "G1" + rd(ed)
    }
      , yd = function(a, b) {
        md(a, b)
    }
      , zd = function(a, b) {
        ld(a, b)
    };
    var Bd = function(a) {
        return Ad ? G.querySelectorAll(a) : null
    }
      , Cd = function(a, b) {
        if (!Ad)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!G.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }
      , Dd = !1;
    if (G.querySelectorAll)
        try {
            var Ed = G.querySelectorAll(":root");
            Ed && 1 == Ed.length && Ed[0] == G.documentElement && (Dd = !0)
        } catch (a) {}
    var Ad = Dd;
    var S = {}
      , U = A.google_tag_manager = A.google_tag_manager || {}
      , Yd = Math.random();
    S.H = "UA-136424656-3";
    S.Yc = "";
    S.ud = "3e0";
    S.V = "dataLayer";
    S.lh = "ChEI8OflkQYQjOakxqnxn7HDARInAKN//AJreoR6Wj63MBw/daA0msXvgwysglCT4ZjSYt3adsh4KX6zGgJf5A\x3d\x3d";
    var Zd = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, $d = {
        __paused: !0,
        __tg: !0
    }, ae;
    for (ae in Zd)
        Zd.hasOwnProperty(ae) && ($d[ae] = !0);
    S.Zc = "www.googletagmanager.com";
    var be, ce = S.Zc + "/gtm.js";
    ce = S.Zc + "/gtag/js";
    be = ce;
    var de = Aa("")
      , ee = null
      , fe = null
      , ge = "https://www.googletagmanager.com/a?id=" + S.H + "&cv=1"
      , he = {}
      , le = {}
      , me = function() {
        var a = U.sequence || 1;
        U.sequence = a + 1;
        return a
    };
    S.kh = "";
    var ne = "";
    S.Dc = ne;
    var oe = new va
      , pe = {}
      , qe = {}
      , te = {
        name: S.V,
        set: function(a, b) {
            J(La(a, b), pe);
            re()
        },
        get: function(a) {
            return se(a, 2)
        },
        reset: function() {
            oe = new va;
            pe = {};
            re()
        }
    }
      , se = function(a, b) {
        return 2 != b ? oe.get(a) : ue(a)
    }
      , ue = function(a) {
        var b, c = a.split(".");
        b = b || [];
        for (var d = pe, e = 0; e < c.length; e++) {
            if (null === d)
                return !1;
            if (void 0 === d)
                break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d))
                return
        }
        return d
    }
      , ve = function(a, b) {
        qe.hasOwnProperty(a) || (oe.set(a, b),
        J(La(a, b), pe),
        re())
    }
      , re = function(a) {
        xa(qe, function(b, c) {
            oe.set(b, c);
            J(La(b, void 0), pe);
            J(La(b, c), pe);
            a && delete qe[b]
        })
    }
      , we = function(a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? ue(a) : oe.get(a);
        "array" === vb(d) || "object" === vb(d) ? c = J(d) : c = d;
        return c
    };
    var xe, ye = !1, ze = function(a) {
        if (!ye) {
            ye = !0;
            xe = xe || {}
        }
        return xe[a]
    };
    var Ae = function(a) {
        if (G.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !A.getComputedStyle)
            return !0;
        var c = A.getComputedStyle(a, null);
        if ("hidden" === c.visibility)
            return !0;
        for (var d = a, e = c; d; ) {
            if ("none" === e.display)
                return !0;
            var f = e.opacity
              , g = e.filter;
            if (g) {
                var l = g.indexOf("opacity(");
                0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)),
                "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f)
                return !0;
            (d = d.parentElement) && (e = A.getComputedStyle(d, null))
        }
        return !1
    };
    var Je = /:[0-9]+$/
      , Ke = function(a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                var g = f.slice(1).join("=");
                return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
            }
        }
    }
      , Ne = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = Le(a.protocol) || Le(A.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : A.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || A.location.hostname).replace(Je, "").toLowerCase());
        return Me(a, b, c, d, e)
    }
      , Me = function(a, b, c, d, e) {
        var f, g = Le(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = Oe(a);
            break;
        case "protocol":
            f = g;
            break;
        case "host":
            f = a.hostname.replace(Je, "").toLowerCase();
            if (c) {
                var l = /^www\d*\./.exec(f);
                l && l[0] && (f = f.substr(l[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || Sc("TAGGING", 1);
            f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var m = f.split("/");
            0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
            f = m.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = Ke(f, e, void 0));
            break;
        case "extension":
            var n = a.pathname.split(".");
            f = 1 < n.length ? n[n.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , Le = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , Oe = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , Pe = function(a) {
        var b = G.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || Sc("TAGGING", 1),
        c = "/" + c);
        var d = b.hostname.replace(Je, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }
      , Qe = function(a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }
        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return void 0 !== p
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
          , e = Pe(a)
          , f = a.split(/[?#]/)[0]
          , g = e.search
          , l = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === l[0] && (l = l.substring(1));
        g = c(g);
        l = c(l);
        "" !== g && (g = "?" + g);
        "" !== l && (l = "#" + l);
        var m = "" + f + g + l;
        "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
        return m
    };
    var Re = {};
    var hf = {}
      , jf = function(a, b) {
        if (A._gtmexpgrp && A._gtmexpgrp.hasOwnProperty(a))
            return A._gtmexpgrp[a];
        void 0 === hf[a] && (hf[a] = Math.floor(Math.random() * b));
        return hf[a]
    };
    var kf = function(a) {
        var b = 1, c, d, e;
        if (a)
            for (b = 0,
            d = a.length - 1; 0 <= d; d--)
                e = a.charCodeAt(d),
                b = (b << 6 & 268435455) + e + (e << 14),
                c = b & 266338304,
                b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var lf = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("=")
              , l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var mf = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }
      , nf = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    function of(a) {
        return "null" !== a.origin
    }
    ;var rf = function(a, b, c, d) {
        return pf(d) ? lf(a, String(b || qf()), c) : []
    }
      , uf = function(a, b, c, d, e) {
        if (pf(e)) {
            var f = sf(a, d, e);
            if (1 === f.length)
                return f[0].id;
            if (0 !== f.length) {
                f = tf(f, function(g) {
                    return g.Bd
                }, b);
                if (1 === f.length)
                    return f[0].id;
                f = tf(f, function(g) {
                    return g.Mc
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };
    function vf(a, b, c, d) {
        var e = qf()
          , f = window;
        of(f) && (f.document.cookie = a);
        var g = qf();
        return e != g || void 0 != c && 0 <= rf(b, g, !1, d).indexOf(c)
    }
    var zf = function(a, b, c) {
        function d(u, t, v) {
            if (null == v)
                return delete g[t],
                u;
            g[t] = v;
            return u + "; " + t + "=" + v
        }
        function e(u, t) {
            if (null == t)
                return delete g[t],
                u;
            g[t] = !0;
            return u + "; " + t
        }
        if (!pf(c.Ua))
            return 2;
        var f;
        void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = wf(b),
        f = a + "=" + b);
        var g = {};
        f = d(f, "path", c.path);
        var l;
        c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
        f = d(f, "expires", l);
        f = d(f, "max-age", c.Rj);
        f = d(f, "samesite", c.Tj);
        c.Uj && (f = e(f, "secure"));
        var m = c.domain;
        if (m && "auto" === m.toLowerCase()) {
            for (var n = xf(), p = 0; p < n.length; ++p) {
                var q = "none" !== n[p] ? n[p] : void 0
                  , r = d(f, "domain", q);
                r = e(r, c.flags);
                if (!yf(q, c.path) && vf(r, a, b, c.Ua))
                    return 0
            }
            return 1
        }
        m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
        f = e(f, c.flags);
        return yf(m, c.path) ? 1 : vf(f, a, b, c.Ua) ? 0 : 1
    }
      , Af = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return zf(a, b, c)
    };
    function tf(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g]
              , m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l],
            f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }
    function sf(a, b, c) {
        for (var d = [], e = rf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split(".")
              , l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = g.shift();
                m && (m = m.split("-"),
                d.push({
                    id: g.join("."),
                    Bd: 1 * m[0] || 1,
                    Mc: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var wf = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
      , Bf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , Cf = /(^|\.)doubleclick\.net$/i
      , yf = function(a, b) {
        return Cf.test(window.document.location.hostname) || "/" === b && Bf.test(a)
    }
      , qf = function() {
        return of(window) ? window.document.cookie : ""
    }
      , xf = function() {
        var a = []
          , b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        Cf.test(e) || Bf.test(e) || a.push("none");
        return a
    }
      , pf = function(a) {
        if (!Xc().m() || !a || !hd())
            return !0;
        if (!gd(a))
            return !1;
        var b = ed(a);
        return null == b ? !0 : !!b
    };
    var Df = function(a) {
        var b = Math.round(2147483647 * Math.random());
        return a ? String(b ^ kf(a) & 2147483647) : String(b)
    }
      , Ef = function(a) {
        return [Df(a), Math.round(Ea() / 1E3)].join(".")
    }
      , Hf = function(a, b, c, d, e) {
        var f = Ff(b);
        return uf(a, f, Gf(c), d, e)
    }
      , If = function(a, b, c, d) {
        var e = "" + Ff(c)
          , f = Gf(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }
      , Ff = function(a) {
        if (!a)
            return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }
      , Gf = function(a) {
        if (!a || "/" === a)
            return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    function Jf(a, b, c) {
        var d, e = Number(null != a.yb ? a.yb : void 0);
        0 !== e && (d = new Date((b || Ea()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    }
    ;var Kf = ["1"]
      , Lf = {}
      , Mf = {}
      , Qf = function(a, b) {
        b = void 0 === b ? !0 : b;
        var c = Nf(a.prefix);
        if (!Lf[c] && !Of(c, a.path, a.domain) && b) {
            var d = Nf(a.prefix)
              , e = Ef();
            if (0 === Pf(d, e, a)) {
                var f = bb("google_tag_data", {});
                f._gcl_au ? Sc("GTM", 57) : f._gcl_au = e
            }
            Of(c, a.path, a.domain)
        }
    };
    function Pf(a, b, c, d) {
        var e = If(b, "1", c.domain, c.path)
          , f = Jf(c, d);
        f.Ua = "ad_storage";
        return Af(a, e, f)
    }
    function Of(a, b, c) {
        var d = Hf(a, b, c, Kf, "ad_storage");
        if (!d)
            return !1;
        var e = d.split(".");
        5 === e.length ? (Lf[a] = e.slice(0, 2).join("."),
        Mf[a] = {
            id: e.slice(2, 4).join("."),
            Fg: Number(e[4]) || 0
        }) : 3 === e.length ? Mf[a] = {
            id: e.slice(0, 2).join("."),
            Fg: Number(e[2]) || 0
        } : Lf[a] = d;
        return !0
    }
    function Nf(a) {
        return (a || "_gcl") + "_au"
    }
    ;var Rf = function(a) {
        for (var b = [], c = G.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                ff: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, l) {
            return l.timestamp - g.timestamp
        });
        return b
    };
    function Sf(a, b) {
        var c = Rf(a)
          , d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].ff] || (d[c[e].ff] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    xa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].ff].push(g)
            }
        }
        return d
    }
    ;function Tf() {
        for (var a = Uf, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function Vf() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Uf, dg;
    function eg(a) {
        function b(m) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , p = dg[n];
                if (null != p)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Uf = Uf || Vf();
        dg = dg || Tf();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , g = b(64)
              , l = b(64);
            if (64 === l && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
            64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
        }
    }
    ;var fg;
    var jg = function() {
        var a = gg
          , b = hg
          , c = ig()
          , d = function(g) {
            a(g.target || g.srcElement || {})
        }
          , e = function(g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            lb(G, "mousedown", d);
            lb(G, "keyup", d);
            lb(G, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this)
            }
            ;
            c.init = !0
        }
    }
      , kg = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        ig().decorators.push(f)
    }
      , lg = function(a, b, c) {
        for (var d = ig().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f], l;
            if (l = !c || g.forms)
                a: {
                    var m = g.domains
                      , n = a
                      , p = !!g.sameHost;
                    if (m && (p || n !== G.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q]instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                                l = !0;
                                break a
                            }
                    l = !1
                }
            if (l) {
                var r = g.placement;
                void 0 == r && (r = g.fragment ? 2 : 1);
                r === b && Ia(e, g.callback())
            }
        }
        return e
    };
    function ig() {
        var a = bb("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    }
    ;var mg = /(.*?)\*(.*?)\*(.*)/
      , ng = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , og = /^(?:www\.|m\.|amp\.)+/
      , pg = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function qg(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var sg = function(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b, f = e.push, g, l = String(d);
                    Uf = Uf || Vf();
                    dg = dg || Tf();
                    for (var m = [], n = 0; n < l.length; n += 3) {
                        var p = n + 1 < l.length
                          , q = n + 2 < l.length
                          , r = l.charCodeAt(n)
                          , u = p ? l.charCodeAt(n + 1) : 0
                          , t = q ? l.charCodeAt(n + 2) : 0
                          , v = r >> 2
                          , y = (r & 3) << 4 | u >> 4
                          , x = (u & 15) << 2 | t >> 6
                          , w = t & 63;
                        q || (w = 64,
                        p || (x = 64));
                        m.push(Uf[v], Uf[y], Uf[x], Uf[w])
                    }
                    g = m.join("");
                    f.call(e, g)
                }
            }
        var B = b.join("*");
        return ["1", rg(B), B].join("*")
    };
    function rg(a, b) {
        var c = [A.navigator.userAgent, (new Date).getTimezoneOffset(), $a.userLanguage || $a.language, Math.floor(Ea() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = fg)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, l = 0; 8 > l; l++)
                    g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        fg = d;
        for (var m = 4294967295, n = 0; n < c.length; n++)
            m = m >>> 8 ^ fg[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }
    function tg() {
        return function(a) {
            var b = Pe(A.location.href)
              , c = b.search.replace("?", "")
              , d = Ke(c, "_gl", !0) || "";
            a.query = ug(d) || {};
            var e = Ne(b, "fragment").match(qg("_gl"));
            a.fragment = ug(e && e[3] || "") || {}
        }
    }
    function vg(a, b) {
        var c = qg(a).exec(b)
          , d = b;
        if (c) {
            var e = c[2]
              , f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var wg = function(a, b) {
        b || (b = "_gl");
        var c = pg.exec(a);
        if (!c)
            return "";
        var d = c[1]
          , e = vg(b, (c[2] || "").slice(1))
          , f = vg(b, (c[3] || "").slice(1));
        e.length && (e = "?" + e);
        f.length && (f = "#" + f);
        return "" + d + e + f
    }
      , xg = function(a) {
        var b = tg()
          , c = ig();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (Ia(d, e.query),
        a && Ia(d, e.fragment));
        return d
    }
      , ug = function(a) {
        try {
            var b = yg(a, 3);
            if (void 0 !== b) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e]
                      , g = eg(d[e + 1]);
                    c[f] = g
                }
                Sc("TAGGING", 6);
                return c
            }
        } catch (l) {
            Sc("TAGGING", 8)
        }
    };
    function yg(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = mg.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var l = g[3], m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === rg(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m)
                    return l;
                Sc("TAGGING", 7)
            }
        }
    }
    function zg(a, b, c, d) {
        function e(p) {
            p = vg(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = pg.exec(c);
        if (!f)
            return "";
        var g = f[1]
          , l = f[2] || ""
          , m = f[3] || ""
          , n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + g + l + m
    }
    function Ag(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase()
          , d = lg(b, 1, c)
          , e = lg(b, 2, c)
          , f = lg(b, 3, c);
        if (Ja(d)) {
            var g = sg(d);
            c ? Bg("_gl", g, a) : Cg("_gl", g, a, !1)
        }
        if (!c && Ja(e)) {
            var l = sg(e);
            Cg("_gl", l, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m))
                a: {
                    var n = m
                      , p = f[m]
                      , q = a;
                    if (q.tagName) {
                        if ("a" === q.tagName.toLowerCase()) {
                            Cg(n, p, q, void 0);
                            break a
                        }
                        if ("form" === q.tagName.toLowerCase()) {
                            Bg(n, p, q);
                            break a
                        }
                    }
                    "string" == typeof q && zg(n, p, q, void 0)
                }
    }
    function Cg(a, b, c, d) {
        if (c.href) {
            var e = zg(a, b, c.href, void 0 === d ? !1 : d);
            Sa.test(e) && (c.href = e)
        }
    }
    function Bg(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = G.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = zg(a, b, c.action);
                Sa.test(n) && (c.action = n)
            }
        }
    }
    function gg(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Ag(e, e.hostname)
            }
        } catch (g) {}
    }
    function hg(a) {
        try {
            if (a.action) {
                var b = Ne(Pe(a.action), "host");
                Ag(a, b)
            }
        } catch (c) {}
    }
    var Dg = function(a, b, c, d) {
        jg();
        kg(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }
      , Eg = function(a, b) {
        jg();
        kg(a, [Me(A.location, "host", !0)], b, !0, !0)
    }
      , Fg = function() {
        var a = G.location.hostname
          , b = ng.exec(G.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var l = a.replace(og, ""), m = e.replace(og, ""), n;
        if (!(n = l === m)) {
            var p = "." + m;
            n = l.substring(l.length - p.length, l.length) === p
        }
        return n
    }
      , Gg = function(a, b) {
        return !1 === a ? !1 : a || b || Fg()
    };
    var Hg = {};
    var Ig = /^\w+$/
      , Jg = /^[\w-]+$/
      , Kg = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha",
        gp: "_gp",
        gb: "_gb"
    }
      , Lg = function() {
        if (!Xc().m() || !hd())
            return !0;
        var a = ed("ad_storage");
        return null == a ? !0 : !!a
    }
      , Mg = function(a, b) {
        gd("ad_storage") ? Lg() ? a() : md(a, "ad_storage") : b ? Sc("TAGGING", 3) : ld(function() {
            Mg(a, !0)
        }, ["ad_storage"])
    }
      , Og = function(a) {
        return Ng(a).map(function(b) {
            return b.xa
        })
    }
      , Ng = function(a) {
        var b = [];
        if (!of(A) || !G.cookie)
            return b;
        var c = rf(a, G.cookie, void 0, "ad_storage");
        if (!c || 0 == c.length)
            return b;
        for (var d = {}, e = 0; e < c.length; d = {
            Vc: d.Vc
        },
        e++) {
            var f = Pg(c[e]);
            if (null != f) {
                var g = f
                  , l = g.version;
                d.Vc = g.xa;
                var m = g.timestamp
                  , n = g.labels
                  , p = sa(b, function(q) {
                    return function(r) {
                        return r.xa === q.Vc
                    }
                }(d));
                p ? (p.timestamp = Math.max(p.timestamp, m),
                p.labels = Qg(p.labels, n || [])) : b.push({
                    version: l,
                    xa: d.Vc,
                    timestamp: m,
                    labels: n
                })
            }
        }
        b.sort(function(q, r) {
            return r.timestamp - q.timestamp
        });
        return Rg(b)
    };
    function Qg(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            c[a[e]] = !0,
            d.push(a[e]);
        for (var f = 0; f < b.length; f++)
            c[b[f]] || d.push(b[f]);
        return d
    }
    function Sg(a) {
        return a && "string" == typeof a && a.match(Ig) ? a : "_gcl"
    }
    var Ug = function() {
        var a = Pe(A.location.href)
          , b = Ne(a, "query", !1, void 0, "gclid")
          , c = Ne(a, "query", !1, void 0, "gclsrc")
          , d = Ne(a, "query", !1, void 0, "wbraid")
          , e = Ne(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || Ke(f, "gclid", void 0);
            c = c || Ke(f, "gclsrc", void 0);
            d = d || Ke(f, "wbraid", void 0)
        }
        return Tg(b, c, e, d)
    }
      , Tg = function(a, b, c, d) {
        var e = {}
          , f = function(g, l) {
            e[l] || (e[l] = []);
            e[l].push(g)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && Jg.test(d) && (e.gbraid = d,
        f(d, "gb"));
        if (void 0 !== a && a.match(Jg))
            switch (b) {
            case void 0:
                f(a, "aw");
                break;
            case "aw.ds":
                f(a, "aw");
                f(a, "dc");
                break;
            case "ds":
                f(a, "dc");
                break;
            case "3p.ds":
                f(a, "dc");
                break;
            case "gf":
                f(a, "gf");
                break;
            case "ha":
                f(a, "ha")
            }
        c && f(c, "dc");
        return e
    }
      , Wg = function(a) {
        var b = Ug();
        Mg(function() {
            Vg(b, !1, a)
        })
    };
    function Vg(a, b, c, d, e) {
        function f(y, x) {
            var w = Xg(y, g);
            w && (Af(w, x, l),
            m = !0)
        }
        c = c || {};
        e = e || [];
        var g = Sg(c.prefix);
        d = d || Ea();
        var l = Jf(c, d, !0);
        l.Ua = "ad_storage";
        var m = !1
          , n = Math.round(d / 1E3)
          , p = function(y) {
            var x = ["GCL", n, y];
            0 < e.length && x.push(e.join("."));
            return x.join(".")
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == Hg.enable_gbraid_cookie_write ? 0 : Hg.enable_gbraid_cookie_write) && !m && a.gb) {
            var q = a.gb[0]
              , r = Xg("gb", g)
              , u = !1;
            if (!b)
                for (var t = Ng(r), v = 0; v < t.length; v++)
                    t[v].xa === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var Zg = function(a, b) {
        var c = xg(!0);
        Mg(function() {
            for (var d = Sg(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== Kg[f]) {
                    var g = Xg(f, d)
                      , l = c[g];
                    if (l) {
                        var m = Math.min(Yg(l), Ea()), n;
                        b: {
                            var p = m;
                            if (of(A))
                                for (var q = rf(g, G.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                    if (Yg(q[r]) > p) {
                                        n = !0;
                                        break b
                                    }
                            n = !1
                        }
                        if (!n) {
                            var u = Jf(b, m, !0);
                            u.Ua = "ad_storage";
                            Af(g, l, u)
                        }
                    }
                }
            }
            Vg(Tg(c.gclid, c.gclsrc), !1, b)
        })
    }
      , Xg = function(a, b) {
        var c = Kg[a];
        if (void 0 !== c)
            return b + c
    }
      , Yg = function(a) {
        return 0 !== $g(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    };
    function Pg(a) {
        var b = $g(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            xa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }
    function $g(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Jg.test(a[2]) ? [] : a
    }
    var ah = function(a, b, c, d, e) {
        if (qa(b) && of(A)) {
            var f = Sg(e)
              , g = function() {
                for (var l = {}, m = 0; m < a.length; ++m) {
                    var n = Xg(a[m], f);
                    if (n) {
                        var p = rf(n, G.cookie, void 0, "ad_storage");
                        p.length && (l[n] = p.sort()[p.length - 1])
                    }
                }
                return l
            };
            Mg(function() {
                Dg(g, b, c, d)
            })
        }
    }
      , Rg = function(a) {
        return a.filter(function(b) {
            return Jg.test(b.xa)
        })
    }
      , bh = function(a, b) {
        if (of(A)) {
            for (var c = Sg(b.prefix), d = {}, e = 0; e < a.length; e++)
                Kg[a[e]] && (d[a[e]] = Kg[a[e]]);
            Mg(function() {
                xa(d, function(f, g) {
                    var l = rf(c + g, G.cookie, void 0, "ad_storage");
                    l.sort(function(u, t) {
                        return Yg(t) - Yg(u)
                    });
                    if (l.length) {
                        var m = l[0], n = Yg(m), p = 0 !== $g(m.split(".")).length ? m.split(".").slice(3) : [], q = {}, r;
                        r = 0 !== $g(m.split(".")).length ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        Vg(q, !0, b, n, p)
                    }
                })
            })
        }
    };
    function ch(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var dh = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (hd()) {
            var c = Ug();
            if (ch(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Eg(function() {
                    return d
                }, 3);
                Eg(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    };
    function eh(a, b) {
        var c = Sg(b)
          , d = Xg(a, c);
        if (!d)
            return 0;
        for (var e = Ng(d), f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f
    }
    function fh(a) {
        var b = 0, c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    ;var zh = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , Ah = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , Bh = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , Ch = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Dh = function() {
        var a = !1;
        a = !0;
        return a
    }
      , Fh = function(a) {
        var b = se("gtm.allowlist") || se("gtm.whitelist");
        b && Q(9);
        Dh() && (b = "google gtagfl lcl zone oid op".split(" "));
        var c = b && Ka(Ba(b), Ah)
          , d = se("gtm.blocklist") || se("gtm.blacklist");
        d || (d = se("tagTypeBlacklist")) && Q(3);
        d ? Q(8) : d = [];
        Eh() && (d = Ba(d),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Ba(d).indexOf("google") && Q(2);
        var e = d && Ka(Ba(d), Bh)
          , f = {};
        return function(g) {
            var l = g && g[zb.sb];
            if (!l || "string" != typeof l)
                return !0;
            l = l.replace(/^_*/, "");
            if (void 0 !== f[l])
                return f[l];
            var m = le[l] || []
              , n = a(l, m);
            if (b) {
                var p;
                if (p = n)
                    a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        Q(11);
                                        p = !1;
                                        break a
                                    }
                                }
                            else {
                                p = !1;
                                break a
                            }
                        p = !0
                    }
                n = p
            }
            var r = !1;
            if (d) {
                var u = 0 <= e.indexOf(l);
                if (u)
                    r = u;
                else {
                    var t = wa(e, m || []);
                    t && Q(10);
                    r = t
                }
            }
            var v = !n || r;
            v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = wa(e, Ch));
            return f[l] = v
        }
    }
      , Eh = function() {
        return zh.test(A.location && A.location.hostname)
    };
    var Gh = !1
      , Hh = 0
      , Ih = [];
    function Jh(a) {
        if (!Gh) {
            var b = G.createEventObject
              , c = "complete" == G.readyState
              , d = "interactive" == G.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Gh = !0;
                for (var e = 0; e < Ih.length; e++)
                    H(Ih[e])
            }
            Ih.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    H(arguments[f]);
                return 0
            }
        }
    }
    function Kh() {
        if (!Gh && 140 > Hh) {
            Hh++;
            try {
                G.documentElement.doScroll("left"),
                Jh()
            } catch (a) {
                A.setTimeout(Kh, 50)
            }
        }
    }
    var Lh = function(a) {
        Gh ? a() : Ih.push(a)
    };
    var Nh = function(a, b) {
        this.m = !1;
        this.C = [];
        this.J = {
            tags: []
        };
        this.U = !1;
        this.o = this.s = 0;
        Mh(this, a, b)
    }
      , Oh = function(a, b, c, d) {
        if ($d.hasOwnProperty(b) || "__zone" === b)
            return -1;
        var e = {};
        xb(d) && (e = J(d, e));
        e.id = c;
        e.status = "timeout";
        return a.J.tags.push(e) - 1
    }
      , Ph = function(a, b, c, d) {
        var e = a.J.tags[b];
        e && (e.status = c,
        e.executionTime = d)
    }
      , Qh = function(a) {
        if (!a.m) {
            for (var b = a.C, c = 0; c < b.length; c++)
                b[c]();
            a.m = !0;
            a.C.length = 0
        }
    }
      , Mh = function(a, b, c) {
        void 0 !== b && Rh(a, b);
        c && A.setTimeout(function() {
            return Qh(a)
        }, Number(c))
    }
      , Rh = function(a, b) {
        var c = Ha(function() {
            return H(function() {
                b(S.H, a.J)
            })
        });
        a.m ? c() : a.C.push(c)
    }
      , Sh = function(a) {
        a.s++;
        return Ha(function() {
            a.o++;
            a.U && a.o >= a.s && Qh(a)
        })
    };
    var Th = function() {
        function a(d) {
            return !oa(d) || 0 > d ? 0 : d
        }
        if (!U._li && A.performance && A.performance.timing) {
            var b = A.performance.timing.navigationStart
              , c = oa(te.get("gtm.start")) ? te.get("gtm.start") : 0;
            U._li = {
                cst: a(c - b),
                cbt: a(fe - b)
            }
        }
    }
      , Uh = function(a) {
        A.performance && A.performance.mark(S.H + "_" + a + "_start")
    }
      , Vh = function(a) {
        if (A.performance) {
            var b = S.H + "_" + a + "_start"
              , c = S.H + "_" + a + "_duration";
            A.performance.measure(c, b);
            var d = A.performance.getEntriesByName(c)[0];
            A.performance.clearMarks(b);
            A.performance.clearMeasures(c);
            var e = U._p || {};
            void 0 === e[a] && (e[a] = d.duration,
            U._p = e);
            return d.duration
        }
    }
      , Wh = function() {
        if (A.performance && A.performance.now) {
            var a = U._p || {};
            a.PAGEVIEW = A.performance.now();
            U._p = a
        }
    };
    var Xh = {}
      , Yh = function() {
        return A.GoogleAnalyticsObject && A[A.GoogleAnalyticsObject]
    }
      , Zh = !1;
    var $h = function(a) {
        A.GoogleAnalyticsObject || (A.GoogleAnalyticsObject = a || "ga");
        var b = A.GoogleAnalyticsObject;
        if (A[b])
            A.hasOwnProperty(b) || Q(12);
        else {
            var c = function() {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(Da());
            A[b] = c
        }
        Th();
        return A[b]
    }
      , ai = function(a) {
        if (hd()) {
            var b = Yh();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0)
        }
    };
    function bi() {
        return A.GoogleAnalyticsObject || "ga"
    }
    var ci = function(a) {}
      , di = function(a, b) {
        return function() {
            var c = Yh()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload")
                      , l = f.get("hitCallback")
                      , m = 0 > g.indexOf("&tid=" + b);
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload", g, !0),
                    f.set("hitCallback", l, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    var ki = function(a) {}, oi = function(a) {}, pi = function() {
        return "&tc=" + Zb.filter(function(a) {
            return a
        }).length
    }, si = function() {
        2022 <= qi().length && ri()
    }, ti = function(a) {
        return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
    }, vi = function() {
        ui || (ui = A.setTimeout(ri, 500))
    }, ri = function() {
        ui && (A.clearTimeout(ui),
        ui = void 0);
        if (void 0 !== wi && (!xi[wi] || yi || zi))
            if (Ai[wi] || Bi.Ti() || 0 >= Ci--)
                Q(1),
                Ai[wi] = !0;
            else {
                Bi.oj();
                var a = qi(!0);
                kb(a);
                xi[wi] = !0;
                Ei = Di = Gi = Hi = Ii = zi = yi = "";
                Fi = []
            }
    }, qi = function(a) {
        var b = wi;
        if (void 0 === b)
            return "";
        var c = Tc("GTM")
          , d = Tc("TAGGING");
        return [Ji, xi[b] ? "" : "&es=1", Ki[b], ki(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", pi(), yi, zi, Ii, Hi, oi(a), Gi, Di, Ei ? "&dl=" + encodeURIComponent(Ei) : "", 0 < Fi.length ? "&tdp=" + Fi.join(".") : "", "&z=0"].join("")
    }, Mi = function() {
        Ji = Li()
    }, Li = function() {
        return [ge, "&v=3&t=t", "&pid=" + ua(), "&rv=" + S.ud].join("")
    }, ni = ["L", "S", "Y"], ji = ["S", "E"], Ni = {
        sampleRate: "0.005000",
        eh: "",
        dh: Number("5")
    }, Oi = 0 <= G.location.search.indexOf("?gtm_latency=") || 0 <= G.location.search.indexOf("&gtm_latency="), Pi;
    if (!(Pi = Oi)) {
        var Qi = Math.random()
          , Ri = Ni.sampleRate;
        Pi = Qi < Ri
    }
    var Si = Pi
      , Ti = {
        label: S.H + " Container",
        children: [{
            label: "Initialization",
            children: []
        }]
    }
      , Ji = Li()
      , xi = {}
      , yi = ""
      , zi = ""
      , Gi = ""
      , Hi = ""
      , Di = ""
      , Fi = []
      , Ei = ""
      , mi = {}
      , li = !1
      , ii = {}
      , Ui = {}
      , Ii = ""
      , wi = void 0
      , Ki = {}
      , Ai = {}
      , ui = void 0
      , Vi = 5;
    0 < Ni.dh && (Vi = Ni.dh);
    var Bi = function(a, b) {
        for (var c = 0, d = [], e = 0; e < a; ++e)
            d.push(0);
        return {
            Ti: function() {
                return c < a ? !1 : Ea() - d[c % a] < b
            },
            oj: function() {
                var f = c++ % a;
                d[f] = Ea()
            }
        }
    }(Vi, 1E3)
      , Ci = 1E3
      , Xi = function(a, b) {
        if (Si && !Ai[a] && wi !== a) {
            ri();
            wi = a;
            Gi = yi = "";
            Ki[a] = "&e=" + ti(b) + "&eid=" + a;
            vi();
        }
    }
      , nj = function(a, b, c, d) {
        if (Si && b) {
            var e, f = String(b[zb.sb] || "").replace(/_/g, "");
            0 === f.indexOf("cvt") && (f = "cvt");
            e = f;
            var g = c + e;
            if (!Ai[a]) {
                a !== wi && (ri(),
                wi = a);
                yi = yi ? yi + "." + g : "&tr=" + g;
                var l = b["function"];
                if (!l)
                    throw Error("Error: No function name given for function call.");
                var m = (bc[l] ? "1" : "2") + e;
                Gi = Gi ? Gi + "." + m : "&ti=" + m;
                vi();
                si()
            }
        }
    };
    var uj = function(a, b, c) {
        if (Si && !Ai[a]) {
            a !== wi && (ri(),
            wi = a);
            var d = c + b;
            zi = zi ? zi + "." + d : "&epr=" + d;
            vi();
            si()
        }
    }
      , vj = function(a, b, c) {};
    function wj(a, b, c, d) {
        var e = Zb[a]
          , f = xj(a, b, c, d);
        if (!f)
            return null;
        var g = gc(e[zb.Yf], c, []);
        if (g && g.length) {
            var l = g[0];
            f = wj(l.index, {
                onSuccess: f,
                onFailure: 1 === l.vg ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function xj(a, b, c, d) {
        function e() {
            if (f[zb.Xh])
                l();
            else {
                var y = hc(f, c, []);
                var x = y[zb.ih];
                if (null != x)
                    for (var w = 0; w < x.length; w++)
                        if (!wd(x[w])) {
                            l();
                            return
                        }
                var B = Oh(c.Sb, String(f[zb.sb]), Number(f[zb.Zf]), y[zb.Yh])
                  , z = !1;
                y.vtp_gtmOnSuccess = function() {
                    if (!z) {
                        z = !0;
                        var E = Ea() - D;
                        nj(c.id, Zb[a], "5", E);
                        Ph(c.Sb, B, "success", E);
                        g()
                    }
                }
                ;
                y.vtp_gtmOnFailure = function() {
                    if (!z) {
                        z = !0;
                        var E = Ea() - D;
                        nj(c.id, Zb[a], "6", E);
                        Ph(c.Sb, B, "failure", E);
                        l()
                    }
                }
                ;
                y.vtp_gtmTagId = f.tag_id;
                y.vtp_gtmEventId = c.id;
                nj(c.id, f, "1");
                var C = function() {
                    var E = Ea() - D;
                    nj(c.id, f, "7", E);
                    Ph(c.Sb, B, "exception", E);
                    z || (z = !0,
                    l())
                };
                var D = Ea();
                try {
                    fc(y, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (E) {
                    C(E)
                }
            }
        }
        var f = Zb[a]
          , g = b.onSuccess
          , l = b.onFailure
          , m = b.terminate;
        if (c.Te(f))
            return null;
        var n = gc(f[zb.$f], c, []);
        if (n && n.length) {
            var p = n[0]
              , q = wj(p.index, {
                onSuccess: g,
                onFailure: l,
                terminate: m
            }, c, d);
            if (!q)
                return null;
            g = q;
            l = 2 === p.vg ? m : q
        }
        if (f[zb.Uf] || f[zb.bi]) {
            var r = f[zb.Uf] ? ac : c.zj
              , u = g
              , t = l;
            if (!r[a]) {
                e = Ha(e);
                var v = yj(a, r, e);
                g = v.onSuccess;
                l = v.onFailure
            }
            return function() {
                r[a](u, t)
            }
        }
        return e
    }
    function yj(a, b, c) {
        var d = []
          , e = [];
        b[a] = zj(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Aj;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            onFailure: function() {
                b[a] = Bj;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function zj(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function Aj(a) {
        a()
    }
    function Bj(a, b) {
        b()
    }
    ;function Cj(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Pe("" + c + b).href
        }
    }
    function Dj(a, b) {
        return Ej() ? Cj(a, b) : void 0
    }
    function Ej() {
        var a = !1;
        return a
    }
    function Fj() {
        return !!S.Dc && "SGTM_TOKEN" !== S.Dc.replaceAll("@@", "")
    }
    ;var Gj = function() {
        var a = !1;
        return a
    };
    var Ij = function(a, b, c, d) {
        return (2 === Hj() || d || "http:" != A.location.protocol ? a : b) + c
    }
      , Hj = function() {
        var a = ib(), b;
        if (1 === a)
            a: {
                var c = be;
                c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = G.getElementsByTagName("script"), l = 0; l < g.length && 100 > l; l++) {
                    var m = g[l].src;
                    if (m) {
                        m = m.toLowerCase();
                        if (0 === m.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === m.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
        else
            b = a;
        return b
    };
    var Jj = !1;
    var Lj = {
        initialized: 11,
        complete: 12,
        interactive: 13
    }
      , Mj = {}
      , Nj = Object.freeze((Mj[O.rb] = !0,
    Mj[O.Ec] = !0,
    Mj))
      , Oj = {}
      , Pj = Object.freeze((Oj[O.sa] = !0,
    Oj))
      , Qj = {}
      , Rj = 0 <= G.location.search.indexOf("?gtm_diagnostics=") || 0 <= G.location.search.indexOf("&gtm_diagnostics=")
      , Tj = function(a, b, c) {}
      , Uj = function(a) {};
    function Vj(a, b) {
        var c = {}, d;
        for (d in b)
            b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a)
            a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }
    function Sj(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b)
            return [];
        var e = function(q, r) {
            var u = r[q];
            return void 0 === u ? Pj[q] : u
        }, f;
        for (f in Vj(a, b))
            if (!Nj[f]) {
                var g = (d ? d + "." : "") + f
                  , l = e(f, a)
                  , m = e(f, b)
                  , n = "object" === vb(l) || "array" === vb(l)
                  , p = "object" === vb(m) || "array" === vb(m);
                if (n && p)
                    Sj(l, m, c, g);
                else if (n || p || l !== m)
                    c[g] = !0
            }
        return Object.keys(c)
    }
    var Wj = function() {
        this.eventModel = {};
        this.targetConfig = {};
        this.containerConfig = {};
        this.globalConfig = {};
        this.dataLayerConfig = {};
        this.remoteConfig = {};
        this.onSuccess = function() {}
        ;
        this.onFailure = function() {}
        ;
        this.setContainerTypeLoaded = function() {}
        ;
        this.getContainerTypeLoaded = function() {}
        ;
        this.eventId = void 0;
        this.isGtmEvent = !1
    }
      , Xj = function(a) {
        var b = new Wj;
        b.eventModel = a;
        return b
    }
      , Yj = function(a, b) {
        a.targetConfig = b;
        return a
    }
      , Zj = function(a, b) {
        a.containerConfig = b;
        return a
    }
      , ak = function(a, b) {
        a.globalConfig = b;
        return a
    }
      , bk = function(a, b) {
        a.dataLayerConfig = b;
        return a
    }
      , ck = function(a, b) {
        a.remoteConfig = b;
        return a
    }
      , dk = function(a, b) {
        a.onSuccess = b;
        return a
    }
      , ek = function(a, b) {
        a.setContainerTypeLoaded = b;
        return a
    }
      , fk = function(a, b) {
        a.getContainerTypeLoaded = b;
        return a
    }
      , gk = function(a, b) {
        a.onFailure = b;
        return a
    };
    h = Wj.prototype;
    h.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a])
            return this.eventModel[a];
        if (void 0 !== this.targetConfig[a])
            return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a])
            return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a])
            return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a])
            return this.remoteConfig[a]
    }
    ;
    h.getTopLevelKeys = function() {
        function a(e) {
            for (var f = Object.keys(e), g = 0; g < f.length; ++g)
                b[f[g]] = 1
        }
        var b = {};
        a(this.eventModel);
        a(this.targetConfig);
        a(this.containerConfig);
        a(this.globalConfig);
        return Object.keys(b)
    }
    ;
    h.getMergedValues = function(a, b) {
        function c(l) {
            xb(l) && xa(l, function(m, n) {
                e = !0;
                d[m] = n
            })
        }
        var d = {}
          , e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]),
        c(this.globalConfig[a]),
        c(this.containerConfig[a]),
        c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        return e ? d : void 0
    }
    ;
    h.getKeysFromFirstOfAnyScope = function(a) {
        var b = {}
          , c = !1
          , d = function(g) {
            for (var l = 0; l < a.length; l++)
                void 0 !== g[a[l]] && (b[a[l]] = g[a[l]],
                c = !0);
            return c
        };
        if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig))
            return b;
        d(this.globalConfig);
        if (c)
            return b;
        d(this.remoteConfig);
        return b
    }
    ;
    h.getEventModelKeys = function() {
        var a = [], b;
        for (b in this.eventModel)
            b !== O.rb && this.eventModel.hasOwnProperty(b) && void 0 !== this.eventModel[b] && a.push(b);
        return a
    }
    ;
    var hk = function(a, b, c) {
        return !1
    };
    function ik() {
        U.dedupe_gclid || (U.dedupe_gclid = "" + Ef());
        return U.dedupe_gclid
    }
    ;var jk;
    if (3 === S.ud.length)
        jk = "g";
    else {
        var kk = "G";
        kk = "g";
        jk = kk
    }
    var lk = {
        "": "n",
        UA: "u",
        AW: "a",
        DC: "d",
        G: "e",
        GF: "f",
        HA: "h",
        GTM: jk,
        OPT: "o"
    }
      , mk = function(a) {
        var b = S.H.split("-"), c = b[0].toUpperCase(), d = lk[c] || "i", e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
        if (3 === S.ud.length) {
            var g = "w";
            g = Gj() ? "s" : "o";
            f = "2" + g
        } else
            f = "";
        return f + d + S.ud + e
    };
    function nk(a, b) {
        if ("" === a)
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;var ok = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };
    function pk() {
        return Ua("iPhone") && !Ua("iPod") && !Ua("iPad")
    }
    ;Ua("Opera");
    Ua("Trident") || Ua("MSIE");
    Ua("Edge");
    !Ua("Gecko") || -1 != Ta().toLowerCase().indexOf("webkit") && !Ua("Edge") || Ua("Trident") || Ua("MSIE") || Ua("Edge");
    -1 != Ta().toLowerCase().indexOf("webkit") && !Ua("Edge") && Ua("Mobile");
    Ua("Macintosh");
    Ua("Windows");
    Ua("Linux") || Ua("CrOS");
    var qk = ka.navigator || null;
    qk && (qk.appVersion || "").indexOf("X11");
    Ua("Android");
    pk();
    Ua("iPad");
    Ua("iPod");
    pk() || Ua("iPad") || Ua("iPod");
    Ta().toLowerCase().indexOf("kaios");
    var rk = function(a) {
        if (!a || !G.head)
            return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        G.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    };
    var sk = function() {};
    var tk = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , uk = function(a, b) {
        this.o = a;
        this.m = null;
        this.C = {};
        this.U = 0;
        this.J = void 0 === b ? 500 : b;
        this.s = null
    };
    ja(uk, sk);
    uk.prototype.addEventListener = function(a) {
        var b = {}
          , c = nf(function() {
            return a(b)
        })
          , d = 0;
        -1 !== this.J && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.J));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f,
            b.internalErrorState = tk(b),
            g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
            g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable",
            b.internalErrorState = 3);
            a(b)
        };
        try {
            vk(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable",
            b.internalErrorState = 3,
            d && (clearTimeout(d),
            d = 0),
            c()
        }
    }
    ;
    uk.prototype.removeEventListener = function(a) {
        a && a.listenerId && vk(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var xk = function(a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (0 === g)
            return !1;
        var l = c;
        2 === c ? (l = 0,
        2 === g && (l = 1)) : 3 === c && (l = 1,
        1 === g && (l = 0));
        var m;
        if (0 === l)
            if (a.purpose && a.vendor) {
                var n = wk(a.vendor.consents, void 0 === d ? "755" : d);
                m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && wk(a.purpose.consents, b)
            } else
                m = !0;
        else
            m = 1 === l ? a.purpose && a.vendor ? wk(a.purpose.legitimateInterests, b) && wk(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return m
    }
      , wk = function(a, b) {
        return !(!a || !a[b])
    }
      , vk = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.o.__tcfapi) {
            var e = a.o.__tcfapi;
            e(b, 2, c, d)
        } else if (yk(a)) {
            zk(a);
            var f = ++a.U;
            a.C[f] = c;
            if (a.m) {
                var g = {};
                a.m.postMessage((g.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                g), "*")
            }
        } else
            c({}, !1)
    }
      , yk = function(a) {
        if (a.m)
            return a.m;
        var b;
        a: {
            for (var c = a.o, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (l) {
                    e = !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (l) {}
                    f = null
                }
                if (!(c = f))
                    break
            }
            b = null
        }
        a.m = b;
        return a.m
    }
      , zk = function(a) {
        a.s || (a.s = function(b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        ok(a.o, a.s))
    };
    var Ak = !0;
    Ak = !1;
    var Bk = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    }
      , Ck = nk("", 550)
      , Dk = nk("", 500);
    function Ek() {
        var a = U.tcf || {};
        return U.tcf = a
    }
    var Jk = function() {
        var a = Ek()
          , b = new uk(A,Ak ? 3E3 : -1);
        if (!0 === A.gtag_enable_tcf_support && !a.active && ("function" === typeof A.__tcfapi || "function" === typeof b.o.__tcfapi || null != yk(b))) {
            a.active = !0;
            a.Oc = {};
            Fk();
            var c = null;
            Ak ? c = A.setTimeout(function() {
                Gk(a);
                Hk(a);
                c = null
            }, Dk) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c),
                    c = null);
                    if (0 !== d.internalErrorState)
                        Gk(a),
                        Hk(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies)
                            e = Ik(),
                            b.removeEventListener(d);
                        else if ("tcloaded" === d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {}, g;
                            for (g in Bk)
                                if (Bk.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var l = d
                                          , m = !0;
                                        m = void 0 === m ? !1 : m;
                                        var n;
                                        var p = l;
                                        !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = tk(p)),
                                        n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1);
                                        f["1"] = n ? !1 === l.gdprApplies || "tcunavailable" === l.tcString || void 0 === l.gdprApplies && !m || "string" !== typeof l.tcString || !l.tcString.length ? !0 : xk(l, "1", 0) : !1
                                    } else
                                        f[g] = xk(d, g, Bk[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty",
                        a.Oc = e,
                        Hk(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c),
                c = null),
                Gk(a),
                Hk(a)
            }
        }
    };
    function Gk(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Ak && (a.Oc = Ik())
    }
    function Fk() {
        var a = {}
          , b = (a.ad_storage = "denied",
        a.wait_for_update = Ck,
        a);
        td(b)
    }
    function Ik() {
        var a = {}, b;
        for (b in Bk)
            Bk.hasOwnProperty(b) && (a[b] = !0);
        return a
    }
    function Hk(a) {
        var b = {}
          , c = (b.ad_storage = a.Oc["1"] ? "granted" : "denied",
        b);
        vd(c, 0, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Kk()
        })
    }
    var Kk = function() {
        var a = Ek();
        return a.active ? a.tcString || "" : ""
    }
      , Lk = function() {
        var a = Ek();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }
      , Mk = function(a) {
        if (!Bk.hasOwnProperty(String(a)))
            return !0;
        var b = Ek();
        return b.active && b.Oc ? !!b.Oc[String(a)] : !0
    };
    var Tk = !1;
    var Uk = function() {
        this.m = {}
    }
      , Vk = function(a, b, c) {
        null != c && (a.m[b] = c)
    }
      , Wk = function(a) {
        return Object.keys(a.m).map(function(b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b])
        }).join("&")
    }
      , Yk = function(a, b, c, d, e) {};
    var $k = /[A-Z]+/
      , al = /\s/
      , bl = function(a) {
        if (k(a)) {
            a = Ca(a);
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if ($k.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                        if (!d[e] || al.test(d[e]) && ("AW" !== c || 1 !== e))
                            return;
                    return {
                        id: a,
                        prefix: c,
                        containerId: c + "-" + d[0],
                        K: d
                    }
                }
            }
        }
    }
      , dl = function(a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = bl(a[c]);
            d && (b[d.id] = d)
        }
        cl(b);
        var e = [];
        xa(b, function(f, g) {
            e.push(g)
        });
        return e
    };
    function cl(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.K[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;var fl = function(a, b, c) {
        if (A[a.functionName])
            return b.Ye && H(b.Ye),
            A[a.functionName];
        var d = el();
        A[a.functionName] = d;
        if (a.xd)
            for (var e = 0; e < a.xd.length; e++)
                A[a.xd[e]] = A[a.xd[e]] || el();
        a.Id && void 0 === A[a.Id] && (A[a.Id] = c);
        gb(Ij("https://", "http://", a.ef), b.Ye, b.bj);
        return d
    }
      , el = function() {
        var a = function() {
            a.q = a.q || [];
            a.q.push(arguments)
        };
        return a
    }
      , gl = {
        functionName: "_googWcmImpl",
        Id: "_googWcmAk",
        ef: "www.gstatic.com/wcm/loader.js"
    }
      , hl = {
        functionName: "_gaPhoneImpl",
        Id: "ga_wpid",
        ef: "www.gstatic.com/gaphone/loader.js"
    }
      , il = {
        hh: "",
        di: "5"
    }
      , jl = {
        functionName: "_googCallTrackingImpl",
        xd: [hl.functionName, gl.functionName],
        ef: "www.gstatic.com/call-tracking/call-tracking_" + (il.hh || il.di) + ".js"
    }
      , kl = {}
      , ll = function(a, b, c, d) {
        Q(22);
        if (c) {
            d = d || {};
            var e = fl(gl, d, a)
              , f = {
                ak: a,
                cl: b
            };
            void 0 === d.Ta && (f.autoreplace = c);
            e(2, d.Ta, f, c, 0, Da(), d.options)
        }
    }
      , ml = function(a, b, c, d) {
        Q(21);
        if (b && c) {
            d = d || {};
            for (var e = {
                countryNameCode: c,
                destinationNumber: b,
                retrievalTime: Da()
            }, f = 0; f < a.length; f++) {
                var g = a[f];
                kl[g.id] || (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length ? (e.adData = {
                    ak: g.K[0],
                    cl: g.K[1]
                },
                kl[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                    gaWpid: g.containerId
                },
                kl[g.id] = !0))
            }
            (e.gaData || e.adData) && fl(jl, d)(d.Ta, e, d.options)
        }
    }
      , nl = function() {
        var a = !1;
        return a
    }
      , ol = function(a, b) {
        if (a)
            if (Gj()) {} else {
                if (k(a)) {
                    var c = bl(a);
                    if (!c)
                        return;
                    a = c
                }
                var d = void 0
                  , e = !1
                  , f = b.getWithConfig(O.Kh);
                if (f && qa(f)) {
                    d = [];
                    for (var g = 0; g < f.length; g++) {
                        var l = bl(f[g]);
                        l && (d.push(l),
                        (a.id === l.id || a.id === a.containerId && a.containerId === l.containerId) && (e = !0))
                    }
                }
                if (!d || e) {
                    var m = b.getWithConfig(O.Jf), n;
                    if (m) {
                        qa(m) ? n = m : n = [m];
                        var p = b.getWithConfig(O.Hf)
                          , q = b.getWithConfig(O.If)
                          , r = b.getWithConfig(O.Kf)
                          , u = b.getWithConfig(O.Jh)
                          , t = p || q
                          , v = 1;
                        "UA" !== a.prefix || d || (v = 5);
                        for (var y = 0; y < n.length; y++)
                            if (y < v)
                                if (d)
                                    ml(d, n[y], u, {
                                        Ta: t,
                                        options: r
                                    });
                                else if ("AW" === a.prefix && a.K[1])
                                    nl() ? ml([a], n[y], u || "US", {
                                        Ta: t,
                                        options: r
                                    }) : ll(a.K[0], a.K[1], n[y], {
                                        Ta: t,
                                        options: r
                                    });
                                else if ("UA" === a.prefix)
                                    if (nl())
                                        ml([a], n[y], u || "US", {
                                            Ta: t
                                        });
                                    else {
                                        var x = a.containerId
                                          , w = n[y]
                                          , B = {
                                            Ta: t
                                        };
                                        Q(23);
                                        if (w) {
                                            B = B || {};
                                            var z = fl(hl, B, x)
                                              , C = {};
                                            void 0 !== B.Ta ? C.receiver = B.Ta : C.replace = w;
                                            C.ga_wpid = x;
                                            C.destination = w;
                                            z(2, Da(), C)
                                        }
                                    }
                    }
                }
            }
    };
    var wl = !1;
    function xl() {
        if (na($a.joinAdInterestGroup))
            return !0;
        wl || (rk(''),
        wl = !0);
        return na($a.joinAdInterestGroup)
    }
    function yl(a, b) {
        var c = void 0;
        try {
            c = G.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ea() - d) {
                Sc("TAGGING", 9);
                return
            }
        } else
            try {
                if (50 <= G.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    Sc("TAGGING", 10);
                    return
                }
            } catch (e) {}
        jb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ea()
        }, c)
    }
    ;var hm = function(a, b, c) {
        this.s = a;
        this.eventName = b;
        this.m = c;
        this.o = {};
        this.metadata = {};
        this.J = !1
    }
      , im = function(a, b, c) {
        var d = a.m.getWithConfig(b);
        void 0 !== d ? a.o[b] = d : void 0 !== c && (a.o[b] = c)
    }
      , jm = function(a, b, c) {
        var d = ze(a.s);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };
    function km(a) {
        return {
            getDestinationId: function() {
                return a.s
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void (a.eventName = b)
            },
            getHitData: function(b) {
                return a.o[b]
            },
            setHitData: function(b, c) {
                return void (a.o[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.o[b] && (a.o[b] = c)
            },
            copyToHitData: function(b, c) {
                im(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void (a.metadata[b] = c)
            },
            abort: function() {
                return void (a.J = !0)
            },
            getProcessedEvent: function() {
                return a
            }
        }
    }
    ;var Im = function() {
        var a = !0;
        Mk(7) && Mk(9) && Mk(10) || (a = !1);
        return a
    }
      , Jm = function() {
        var a = !0;
        Mk(3) && Mk(4) || (a = !1);
        return a
    };
    var Nm = function(a, b) {
        var c = b.getWithConfig(O.Ra)
          , d = b.getWithConfig(O.ab)
          , e = b.getWithConfig(c);
        if (void 0 === e) {
            var f = void 0;
            Km.hasOwnProperty(c) ? f = Km[c] : Lm.hasOwnProperty(c) && (f = Lm[c]);
            1 === f && (f = Mm(c));
            k(f) ? Yh()(function() {
                var g = Yh().getByName(a).get(f);
                d(g)
            }) : d(void 0)
        } else
            d(e);
    }
      , Om = function(a, b) {
        var c = a[O.vc]
          , d = b + "."
          , e = a[O.N] || ""
          , f = void 0 === c ? !!a.use_anchor : "fragment" === c
          , g = !!a[O.Mb];
        e = String(e).replace(/\s+/g, "").split(",");
        var l = Yh();
        l(d + "require", "linker");
        l(d + "linker:autoLink", e, f, g)
    }
      , Sm = function(a, b, c) {
        if (hd() && (!c.isGtmEvent || !Pm[a])) {
            var d = !wd(O.M)
              , e = function(f) {
                var g, l, m = Yh(), n = Qm(b, "", c), p, q = n.createOnlyFields._useUp;
                if (c.isGtmEvent || Rm(b, n.createOnlyFields)) {
                    c.isGtmEvent && (g = "gtm" + me(),
                    l = n.createOnlyFields,
                    n.gtmTrackerName && (l.name = g));
                    m(function() {
                        var u = m.getByName(b);
                        u && (p = u.get("clientId"));
                        c.isGtmEvent || m.remove(b)
                    });
                    m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
                    d && wd(O.M) && (d = !1,
                    m(function() {
                        var u = Yh().getByName(c.isGtmEvent ? g : b);
                        !u || u.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1",
                        n.fieldsToSet["&gcut"] = O.Sd[f]) : (n.fieldsToSend["&gcu"] = "1",
                        n.fieldsToSend["&gcut"] = O.Sd[f]),
                        u.set(n.fieldsToSet),
                        c.isGtmEvent ? u.send("pageview") : u.send("pageview", n.fieldsToSend))
                    }));
                    c.isGtmEvent && m(function() {
                        m.remove(g)
                    })
                }
            };
            yd(function() {
                return e(O.M)
            }, O.M);
            yd(function() {
                return e(O.D)
            }, O.D);
            c.isGtmEvent && (Pm[a] = !0)
        }
    }
      , Tm = function(a, b) {
        Fj() && b && (a[O.pb] = b)
    }
      , bn = function(a, b, c) {
        function d() {
            var I = c.getWithConfig(O.nc);
            l(function() {
                if (!c.isGtmEvent && xb(I)) {
                    var M = t.fieldsToSend, N = m().getByName(n), L;
                    for (L in I)
                        if (I.hasOwnProperty(L) && /^(dimension|metric)\d+$/.test(L) && void 0 != I[L]) {
                            var K = N.get(Mm(I[L]));
                            Um(M, L, K)
                        }
                }
            })
        }
        function e() {
            if (t.displayfeatures) {
                var I = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                p("require", "displayfeatures", void 0, {
                    cookieName: I
                })
            }
        }
        var f = a
          , g = "https://www.google-analytics.com/analytics.js"
          , l = c.isGtmEvent ? $h(c.getWithConfig("gaFunctionName")) : $h();
        if (na(l)) {
            var m = Yh, n;
            c.isGtmEvent ? n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
            var p = function(I) {
                var M = [].slice.call(arguments, 0);
                M[0] = n ? n + "." + M[0] : "" + M[0];
                l.apply(window, M)
            }
              , q = function(I) {
                var M = function(R, ia) {
                    for (var ra = 0; ia && ra < ia.length; ra++)
                        p(R, ia[ra])
                }
                  , N = c.isGtmEvent
                  , L = N ? Vm(t) : Wm(b, c);
                if (L) {
                    var K = {};
                    Tm(K, I);
                    p("require", "ec", "ec.js", K);
                    N && L.Ke && p("set", "&cu", L.Ke);
                    var W = L.action;
                    if (N || "impressions" === W)
                        if (M("ec:addImpression", L.Eg),
                        !N)
                            return;
                    if ("promo_click" === W || "promo_view" === W || N && L.Nc) {
                        var T = L.Nc;
                        M("ec:addPromo", T);
                        if (T && 0 < T.length && "promo_click" === W) {
                            N ? p("ec:setAction", W, L.ib) : p("ec:setAction", W);
                            return
                        }
                        if (!N)
                            return
                    }
                    "promo_view" !== W && "impressions" !== W && (M("ec:addProduct", L.zb),
                    p("ec:setAction", W, L.ib))
                }
            }
              , r = function(I) {
                if (I) {
                    var M = {};
                    if (xb(I))
                        for (var N in Xm)
                            Xm.hasOwnProperty(N) && Ym(Xm[N], N, I[N], M);
                    Tm(M, x);
                    p("require", "linkid", M)
                }
            }
              , u = function() {
                if (Gj()) {} else {
                    var I = c.getWithConfig(O.Ih);
                    I && (p("require", I, {
                        dataLayer: S.V
                    }),
                    p("require", "render"))
                }
            }
              , t = Qm(n, b, c)
              , v = function(I, M, N) {
                N && (M = "" + M);
                t.fieldsToSend[I] = M
            };
            !c.isGtmEvent && Rm(n, t.createOnlyFields) && (l(function() {
                m() && m().remove(n)
            }),
            Zm[n] = !1);
            l("create", f, t.createOnlyFields);
            if (t.createOnlyFields[O.pb] && !c.isGtmEvent) {
                var y = Dj(t.createOnlyFields[O.pb], "/analytics.js");
                y && (g = y)
            }
            var x = c.isGtmEvent ? t.fieldsToSet[O.pb] : t.createOnlyFields[O.pb];
            if (x) {
                var w = c.isGtmEvent ? t.fieldsToSet[O.ed] : t.createOnlyFields[O.ed];
                w && !Zm[n] && (Zm[n] = !0,
                l(di(n, w)))
            }
            c.isGtmEvent ? t.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(),
            r(t.linkAttribution));
            var B = t[O.ja];
            B && B[O.N] && Om(B, n);
            p("set", t.fieldsToSet);
            if (c.isGtmEvent) {
                if (t.enableLinkId) {
                    var z = {};
                    Tm(z, x);
                    p("require", "linkid", "linkid.js", z)
                }
                hd() && Sm(f, n, c)
            }
            if (b === O.bc)
                if (c.isGtmEvent) {
                    e();
                    if (t.remarketingLists) {
                        var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                        p("require", "adfeatures", {
                            cookieName: C
                        })
                    }
                    q(x);
                    p("send", "pageview");
                    t.createOnlyFields._useUp && ai(n + ".")
                } else
                    u(),
                    p("send", "pageview", t.fieldsToSend);
            else
                b === O.Aa ? (u(),
                ol(f, c),
                c.getWithConfig(O.hb) && (dh(["aw", "dc"]),
                ai(n + ".")),
                0 != t.sendPageView && p("send", "pageview", t.fieldsToSend),
                Sm(f, n, c),
                !c.isGtmEvent && 0 < c.getEventModelKeys().length && (Q(68),
                1 < U.configCount && Q(69))) : b === O.Ia ? Nm(n, c) : "screen_view" === b ? p("send", "screenview", t.fieldsToSend) : "timing_complete" === b ? (t.fieldsToSend.hitType = "timing",
                v("timingCategory", t.eventCategory, !0),
                c.isGtmEvent ? v("timingVar", t.timingVar, !0) : v("timingVar", t.name, !0),
                v("timingValue", za(t.value)),
                void 0 !== t.eventLabel && v("timingLabel", t.eventLabel, !0),
                p("send", t.fieldsToSend)) : "exception" === b ? p("send", "exception", t.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (t.fieldsToSend.hitType = "social",
                v("socialNetwork", t.socialNetwork, !0),
                v("socialAction", t.socialAction, !0),
                v("socialTarget", t.socialTarget, !0)) : ((c.isGtmEvent || $m[b]) && q(x),
                c.isGtmEvent && e(),
                t.fieldsToSend.hitType = "event",
                v("eventCategory", t.eventCategory, !0),
                v("eventAction", t.eventAction || b, !0),
                void 0 !== t.eventLabel && v("eventLabel", t.eventLabel, !0),
                void 0 !== t.value && v("eventValue", za(t.value))),
                p("send", t.fieldsToSend));
            var D = !1;
            var E = an;
            D && (E = c.getContainerTypeLoaded("UA"));
            if (!E && !c.isGtmEvent) {
                an = !0;
                D && c.setContainerTypeLoaded("UA", !0);
                Th();
                var F = function() {
                    D && c.setContainerTypeLoaded("UA", !1);
                    c.onFailure()
                }
                  , P = function() {
                    m().loaded || F()
                };
                Gj() ? H(P) : gb(g, P, F)
            }
        } else
            H(c.onFailure)
    }
      , cn = function(a, b, c, d) {
        zd(function() {
            bn(a, b, d)
        }, [O.M, O.D])
    }
      , en = function(a, b) {
        function c(f) {
            function g(p, q) {
                for (var r = 0; r < q.length; r++) {
                    var u = q[r];
                    if (f[u]) {
                        m[p] = f[u];
                        break
                    }
                }
            }
            function l() {
                if (f.category)
                    m.category = f.category;
                else {
                    for (var p = "", q = 0; q < dn.length; q++)
                        void 0 !== f[dn[q]] && (p && (p += "/"),
                        p += f[dn[q]]);
                    p && (m.category = p)
                }
            }
            var m = J(f)
              , n = !1;
            if (n || b)
                g("id", ["id", "item_id", "promotion_id"]),
                g("name", ["name", "item_name", "promotion_name"]),
                g("brand", ["brand", "item_brand"]),
                g("variant", ["variant", "item_variant"]),
                g("list", ["list_name", "item_list_name"]),
                g("position", ["list_position", "creative_slot", "index"]),
                l();
            g("listPosition", ["list_position"]);
            g("creative", ["creative_name"]);
            g("list", ["list_name"]);
            g("position", ["list_position", "creative_slot"]);
            return m
        }
        b = void 0 === b ? !1 : b;
        for (var d = [], e = 0; a && e < a.length; e++)
            a[e] && xb(a[e]) && d.push(c(a[e]));
        return d.length ? d : void 0
    }
      , fn = function(a) {
        return wd(a)
    }
      , gn = !1;
    var an, Zm = {}, Pm = {}, hn = {}, Km = Object.freeze((hn.client_storage = "storage",
    hn.sample_rate = 1,
    hn.site_speed_sample_rate = 1,
    hn.store_gac = 1,
    hn.use_amp_client_id = 1,
    hn[O.Ba] = 1,
    hn[O.qa] = "storeGac",
    hn[O.ia] = 1,
    hn[O.ra] = 1,
    hn[O.Ka] = 1,
    hn[O.Ib] = 1,
    hn[O.Za] = 1,
    hn[O.Jb] = 1,
    hn)), jn = {}, kn = Object.freeze((jn._cs = 1,
    jn._useUp = 1,
    jn.allowAnchor = 1,
    jn.allowLinker = 1,
    jn.alwaysSendReferrer = 1,
    jn.clientId = 1,
    jn.cookieDomain = 1,
    jn.cookieExpires = 1,
    jn.cookieFlags = 1,
    jn.cookieName = 1,
    jn.cookiePath = 1,
    jn.cookieUpdate = 1,
    jn.legacyCookieDomain = 1,
    jn.legacyHistoryImport = 1,
    jn.name = 1,
    jn.sampleRate = 1,
    jn.siteSpeedSampleRate = 1,
    jn.storage = 1,
    jn.storeGac = 1,
    jn.useAmpClientId = 1,
    jn._cd2l = 1,
    jn)), ln = Object.freeze({
        anonymize_ip: 1
    }), mn = {}, Lm = Object.freeze((mn.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword"
    },
    mn.app_id = 1,
    mn.app_installer_id = 1,
    mn.app_name = 1,
    mn.app_version = 1,
    mn.description = "exDescription",
    mn.fatal = "exFatal",
    mn.language = 1,
    mn.page_hostname = "hostname",
    mn.transport_type = "transport",
    mn[O.ca] = "currencyCode",
    mn[O.Ff] = 1,
    mn[O.Sa] = "location",
    mn[O.pe] = "page",
    mn[O.La] = "referrer",
    mn[O.wc] = "title",
    mn[O.Nf] = 1,
    mn[O.Da] = 1,
    mn)), nn = {}, on = Object.freeze((nn.content_id = 1,
    nn.event_action = 1,
    nn.event_category = 1,
    nn.event_label = 1,
    nn.link_attribution = 1,
    nn.name = 1,
    nn[O.ja] = 1,
    nn[O.Ef] = 1,
    nn[O.sa] = 1,
    nn[O.fa] = 1,
    nn)), pn = Object.freeze({
        displayfeatures: 1,
        enableLinkId: 1,
        enableRecaptcha: 1,
        eventAction: 1,
        eventCategory: 1,
        eventLabel: 1,
        gaFunctionName: 1,
        gtmEcommerceData: 1,
        gtmTrackerName: 1,
        linker: 1,
        remarketingLists: 1,
        socialAction: 1,
        socialNetwork: 1,
        socialTarget: 1,
        timingVar: 1,
        value: 1
    }), dn = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]), qn = {}, Xm = Object.freeze((qn.levels = 1,
    qn[O.ra] = "duration",
    qn[O.Ib] = 1,
    qn)), rn = {}, sn = Object.freeze((rn.anonymize_ip = 1,
    rn.fatal = 1,
    rn.send_page_view = 1,
    rn.store_gac = 1,
    rn.use_amp_client_id = 1,
    rn[O.qa] = 1,
    rn[O.Ff] = 1,
    rn)), Ym = function(a, b, c, d) {
        if (void 0 !== c)
            if (sn[b] && (c = Aa(c)),
            "anonymize_ip" !== b || c || (c = void 0),
            1 === a)
                d[Mm(b)] = c;
            else if (k(a))
                d[a] = c;
            else
                for (var e in a)
                    a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
    }, Mm = function(a) {
        return a && k(a) ? a.replace(/(_[a-z])/g, function(b) {
            return b[1].toUpperCase()
        }) : a
    }, tn = {}, $m = Object.freeze((tn.checkout_progress = 1,
    tn.select_content = 1,
    tn.set_checkout_option = 1,
    tn[O.Eb] = 1,
    tn[O.Fb] = 1,
    tn[O.lb] = 1,
    tn[O.nb] = 1,
    tn[O.Gb] = 1,
    tn[O.ma] = 1,
    tn[O.Hb] = 1,
    tn[O.na] = 1,
    tn)), un = {}, vn = Object.freeze((un.checkout_progress = 1,
    un.set_checkout_option = 1,
    un[O.tf] = 1,
    un[O.Eb] = 1,
    un[O.Fb] = 1,
    un[O.lb] = 1,
    un[O.ma] = 1,
    un[O.Hb] = 1,
    un[O.uf] = 1,
    un)), wn = {}, xn = Object.freeze((wn.generate_lead = 1,
    wn.login = 1,
    wn.search = 1,
    wn.select_content = 1,
    wn.share = 1,
    wn.sign_up = 1,
    wn.view_search_results = 1,
    wn[O.nb] = 1,
    wn[O.Gb] = 1,
    wn[O.na] = 1,
    wn)), yn = function(a) {
        var b = "general";
        vn[a] ? b = "ecommerce" : xn[a] ? b = "engagement" : "exception" === a && (b = "error");
        return b
    }, zn = {}, An = Object.freeze((zn.view_search_results = 1,
    zn[O.nb] = 1,
    zn[O.Gb] = 1,
    zn[O.na] = 1,
    zn)), Um = function(a, b, c) {
        a.hasOwnProperty(b) || (a[b] = c)
    }, Bn = function(a) {
        if (qa(a)) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                if (void 0 != d) {
                    var e = d.id
                      , f = d.variant;
                    void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                }
            }
            return 0 < b.length ? b.join("!") : void 0
        }
    }, Qm = function(a, b, c) {
        var d = function(P) {
            return c.getWithConfig(P)
        }
          , e = {}
          , f = {}
          , g = {}
          , l = {}
          , m = Bn(d(O.Hh));
        !c.isGtmEvent && m && Um(f, "exp", m);
        g["&gtm"] = mk(!0);
        hd() && (l._cs = fn);
        var n = d(O.nc);
        if (!c.isGtmEvent && xb(n))
            for (var p in n)
                if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                    var q = d(String(n[p]));
                    void 0 !== q && Um(f, p, q)
                }
        for (var r = c.getTopLevelKeys(), u = 0; u < r.length; ++u) {
            var t = r[u];
            if (c.isGtmEvent) {
                var v = d(t);
                pn.hasOwnProperty(t) ? e[t] = v : kn.hasOwnProperty(t) ? l[t] = v : g[t] = v
            } else {
                var y = void 0;
                y = t !== O.T ? d(t) : c.getMergedValues(t);
                if (on.hasOwnProperty(t))
                    Ym(on[t], t, y, e);
                else if (ln.hasOwnProperty(t))
                    Ym(ln[t], t, y, g);
                else if (Lm.hasOwnProperty(t))
                    Ym(Lm[t], t, y, f);
                else if (Km.hasOwnProperty(t))
                    Ym(Km[t], t, y, l);
                else if (/^(dimension|metric|content_group)\d+$/.test(t))
                    Ym(1, t, y, f);
                else if (t === O.T) {
                    if (!gn) {
                        var x = Na(y);
                        x && (f["&did"] = x)
                    }
                    var w = void 0
                      , B = void 0;
                    b === O.Aa ? w = Na(c.getMergedValues(t), ".") : (w = Na(c.getMergedValues(t, 1), "."),
                    B = Na(c.getMergedValues(t, 2), "."));
                    w && (f["&gdid"] = w);
                    B && (f["&edid"] = B)
                } else
                    t === O.Ca && 0 > r.indexOf(O.Ib) && (l.cookieName = y + "_ga")
            }
        }
        !1 !== d(O.xh) && !1 !== d(O.cc) && Im() || (g.allowAdFeatures = !1);
        !1 !== d(O.W) && Jm() || (g.allowAdPersonalizationSignals = !1);
        !c.isGtmEvent && d(O.hb) && (l._useUp = !0);
        if (c.isGtmEvent) {
            l.name = l.name || e.gtmTrackerName;
            var z = g.hitCallback;
            g.hitCallback = function() {
                na(z) && z();
                c.onSuccess()
            }
        } else {
            Um(l, "cookieDomain", "auto");
            Um(g, "forceSSL", !0);
            Um(e, "eventCategory", yn(b));
            An[b] && Um(f, "nonInteraction", !0);
            "login" === b || "sign_up" === b || "share" === b ? Um(e, "eventLabel", d(O.Ef)) : "search" === b || "view_search_results" === b ? Um(e, "eventLabel", d(O.Oh)) : "select_content" === b && Um(e, "eventLabel", d(O.Bh));
            var C = e[O.ja] || {}
              , D = C[O.Lb];
            D || 0 != D && C[O.N] ? l.allowLinker = !0 : !1 === D && Um(l, "useAmpClientId", !1);
            f.hitCallback = c.onSuccess;
            l.name = a
        }
        hd() && (g["&gcs"] = xd(),
        wd(O.M) || (l.storage = "none"),
        wd(O.D) || (g.allowAdFeatures = !1,
        l.storeGac = !1));
        var E = d(O.va) || d(O.pb)
          , F = d(O.ed);
        E && (c.isGtmEvent || (l[O.pb] = E),
        l._cd2l = !0);
        F && !c.isGtmEvent && (l[O.ed] = F);
        e.fieldsToSend = f;
        e.fieldsToSet = g;
        e.createOnlyFields = l;
        return e
    }, Vm = function(a) {
        var b = a.gtmEcommerceData;
        if (!b)
            return null;
        var c = {};
        b.currencyCode && (c.Ke = b.currencyCode);
        if (b.impressions) {
            c.action = "impressions";
            var d = b.impressions;
            c.Eg = "impressions" === b.translateIfKeyEquals ? en(d, !0) : d
        }
        if (b.promoView) {
            c.action = "promo_view";
            var e = b.promoView.promotions;
            c.Nc = "promoView" === b.translateIfKeyEquals ? en(e, !0) : e
        }
        if (b.promoClick) {
            c.action = "promo_click";
            var f = b.promoClick.promotions;
            c.Nc = "promoClick" === b.translateIfKeyEquals ? en(f, !0) : f;
            c.ib = b.promoClick.actionField;
            return c
        }
        for (var g in b)
            if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                c.action = g;
                var l = b[g].products;
                c.zb = "products" === b.translateIfKeyEquals ? en(l, !0) : l;
                c.ib = b[g].actionField;
                break
            }
        return Object.keys(c).length ? c : null
    }, Wm = function(a, b) {
        function c(u) {
            return {
                id: d(O.fb),
                affiliation: d(O.Eh),
                revenue: d(O.fa),
                tax: d(O.yf),
                shipping: d(O.he),
                coupon: d(O.Fh),
                list: d(O.fe) || u
            }
        }
        for (var d = function(u) {
            return b.getWithConfig(u)
        }, e = d(O.X), f, g = 0; e && g < e.length && !(f = e[g][O.fe]); g++)
            ;
        var l = d(O.nc);
        if (xb(l))
            for (var m = 0; e && m < e.length; ++m) {
                var n = e[m], p;
                for (p in l)
                    l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && Um(n, p, n[l[p]])
            }
        var q = null
          , r = d(O.Gh);
        a === O.ma || a === O.Hb ? q = {
            action: a,
            ib: c(),
            zb: en(e)
        } : a === O.Eb ? q = {
            action: "add",
            zb: en(e)
        } : a === O.Fb ? q = {
            action: "remove",
            zb: en(e)
        } : a === O.na ? q = {
            action: "detail",
            ib: c(f),
            zb: en(e)
        } : a === O.nb ? q = {
            action: "impressions",
            Eg: en(e)
        } : "view_promotion" === a ? q = {
            action: "promo_view",
            Nc: en(r)
        } : "select_content" === a && r && 0 < r.length ? q = {
            action: "promo_click",
            Nc: en(r)
        } : "select_content" === a ? q = {
            action: "click",
            ib: {
                list: d(O.fe) || f
            },
            zb: en(e)
        } : a === O.lb || "checkout_progress" === a ? q = {
            action: "checkout",
            zb: en(e),
            ib: {
                step: a === O.lb ? 1 : d(O.xf),
                option: d(O.wf)
            }
        } : "set_checkout_option" === a && (q = {
            action: "checkout_option",
            ib: {
                step: d(O.xf),
                option: d(O.wf)
            }
        });
        q && (q.Ke = d(O.ca));
        return q
    }, Cn = {}, Rm = function(a, b) {
        var c = Cn[a];
        Cn[a] = J(b);
        if (!c)
            return !1;
        for (var d in b)
            if (b.hasOwnProperty(d) && b[d] !== c[d])
                return !0;
        for (var e in c)
            if (c.hasOwnProperty(e) && c[e] !== b[e])
                return !0;
        return !1
    };
    function Dn() {
        return U.gcq = U.gcq || new En
    }
    var Fn = function(a, b, c) {
        Dn().register(a, b, c)
    }
      , Gn = function(a, b, c, d) {
        Dn().push("event", [b, a], c, d)
    }
      , Hn = function(a, b) {
        Dn().push("config", [a], b)
    }
      , In = function(a, b, c, d) {
        Dn().push("get", [a, b], c, d)
    }
      , Jn = {}
      , Kn = function() {
        this.status = 1;
        this.containerConfig = {};
        this.targetConfig = {};
        this.remoteConfig = {};
        this.o = {};
        this.s = null;
        this.claimed = this.m = !1
    }
      , Ln = function(a, b, c, d, e) {
        this.type = a;
        this.s = b;
        this.O = c || "";
        this.m = d;
        this.o = e
    }
      , En = function() {
        this.o = {};
        this.s = {};
        this.m = [];
        this.C = {
            AW: !1,
            UA: !1
        }
    }
      , Mn = function(a, b) {
        var c = bl(b);
        return a.o[c.containerId] = a.o[c.containerId] || new Kn
    }
      , Nn = function(a, b, c) {
        if (b) {
            var d = bl(b);
            if (d && 1 === Mn(a, b).status) {
                Mn(a, b).status = 2;
                var e = {};
                Si && (e.timeoutId = A.setTimeout(function() {
                    Q(38);
                    vi()
                }, 3E3));
                a.push("require", [e], d.containerId);
                Jn[d.containerId] = Ea();
                if (Gj()) {} else if (Jj)
                    Kj(d.containerId, c, !0);
                else {
                    var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + S.V + "&cx=c";
                    Fj() && (g += "&sign=" + S.Dc);
                    var l = ("http:" != A.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g)
                      , m = Dj(c, g) || l;
                    gb(m)
                }
            }
        }
    }
      , On = function(a, b, c, d) {
        if (d.O) {
            var e = Mn(a, d.O)
              , f = e.s;
            if (f) {
                var g = J(c)
                  , l = J(e.targetConfig[d.O])
                  , m = J(e.containerConfig)
                  , n = J(e.remoteConfig)
                  , p = J(a.s)
                  , q = {};
                var r = se("gtm.uniqueEventId")
                  , u = bl(d.O).prefix
                  , t = Ha(function() {
                    var y = g[O.Kb];
                    y && H(y)
                })
                  , v = fk(ek(gk(dk(bk(ak(ck(Zj(Yj(Xj(g), l), m), n), p), q), function() {
                    uj(r, u, "2");
                    t()
                }), function() {
                    uj(r, u, "3");
                    t()
                }), function(y, x) {
                    a.C[y] = x
                }), function(y) {
                    return a.C[y]
                });
                try {
                    uj(r, u, "1"),
                    Tj(d.type, d.O, v),
                    "config" === d.type && Uj(d.O);
                    f(d.O, b, d.s, v)
                } catch (y) {
                    uj(r, u, "4");
                }
            }
        }
    };
    h = En.prototype;
    h.register = function(a, b, c) {
        var d = Mn(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (J(d.remoteConfig, c),
            d.remoteConfig = c);
            var e = bl(a)
              , f = Jn[e.containerId];
            if (void 0 !== f) {
                var g = U[e.containerId].bootstrap
                  , l = e.prefix.toUpperCase();
                U[e.containerId]._spx && (l = l.toLowerCase());
                var m = se("gtm.uniqueEventId")
                  , n = l
                  , p = Ea() - g;
                if (Si && !Ai[m]) {
                    m !== wi && (ri(),
                    wi = m);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Hi = Hi ? Hi + "," + q : "&cl=" + q
                }
                delete Jn[e.containerId]
            }
            this.flush()
        }
    }
    ;
    h.notifyContainerLoaded = function(a, b) {
        var c = this
          , d = function(f) {
            if (bl(f)) {
                var g = Mn(c, f);
                g.status = 3;
                g.claimed = !0
            }
        };
        d(a);
        for (var e = 0; e < b.length; e++)
            d(b[e]);
        this.flush()
    }
    ;
    h.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!bl(c))
                return;
            Nn(this, c, b[0][O.va] || this.s[O.va]);
            Mn(this, c).m && (d = !1)
        }
        this.m.push(new Ln(a,Math.floor(Ea() / 1E3),c,b,d));
        d || this.flush()
    }
    ;
    h.insert = function(a, b, c) {
        var d = Math.floor(Ea() / 1E3);
        0 < this.m.length ? this.m.splice(1, 0, new Ln(a,d,c,b,!1)) : this.m.push(new Ln(a,d,c,b,!1))
    }
    ;
    h.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length; ) {
            var f = this.m[0];
            if (f.o)
                !f.O || Mn(this, f.O).m ? (f.o = !1,
                this.m.push(f)) : c.push(f),
                this.m.shift();
            else {
                var g = void 0;
                switch (f.type) {
                case "require":
                    g = Mn(this, f.O);
                    if (3 !== g.status && !a) {
                        this.m.push.apply(this.m, c);
                        return
                    }
                    Si && A.clearTimeout(f.m[0].timeoutId);
                    break;
                case "set":
                    xa(f.m[0], function(r, u) {
                        J(La(r, u), b.s)
                    });
                    break;
                case "config":
                    g = Mn(this, f.O);
                    if (g.claimed)
                        break;
                    e.Pa = {};
                    xa(f.m[0], function(r) {
                        return function(u, t) {
                            J(La(u, t), r.Pa)
                        }
                    }(e));
                    var l = !!e.Pa[O.ld];
                    delete e.Pa[O.ld];
                    var m = bl(f.O)
                      , n = m.containerId === m.id;
                    l || (n ? g.containerConfig = {} : g.targetConfig[f.O] = {});
                    g.m && l || On(this, O.Aa, e.Pa, f);
                    g.m = !0;
                    delete e.Pa[O.rb];
                    n ? J(e.Pa, g.containerConfig) : (J(e.Pa, g.targetConfig[f.O]),
                    Q(70));
                    d = !0;
                    break;
                case "event":
                    if (g = Mn(this, f.O),
                    g.claimed)
                        break;
                    e.Uc = {};
                    xa(f.m[0], function(r) {
                        return function(u, t) {
                            J(La(u, t), r.Uc)
                        }
                    }(e));
                    On(this, f.m[1], e.Uc, f);
                    break;
                case "get":
                    if (g = Mn(this, f.O),
                    g.claimed)
                        break;
                    var p = {}
                      , q = (p[O.Ra] = f.m[0],
                    p[O.ab] = f.m[1],
                    p);
                    On(this, O.Ia, q, f)
                }
                this.m.shift();
                Pn(this, f)
            }
            e = {
                Pa: e.Pa,
                Uc: e.Uc
            }
        }
        this.m.push.apply(this.m, c);
        d && this.flush()
    }
    ;
    var Pn = function(a, b) {
        if ("require" !== b.type)
            if (b.O)
                for (var c = a.getCommandListeners(b.O)[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], l = 0; l < g.length; l++)
                                g[l]()
                    }
    };
    En.prototype.getRemoteConfig = function(a) {
        return Mn(this, a).remoteConfig
    }
    ;
    En.prototype.getCommandListeners = function(a) {
        return Mn(this, a).o
    }
    ;
    var Qn = !1;
    var Rn = !1;
    var Sn = function(a, b) {
        U.addDestinationToContainer ? U.addDestinationToContainer(a, b) : (U.pendingDestinationIds = U.pendingDestinationIds || [],
        U.pendingDestinationIds.push([a, b]))
    };
    var Tn = {}
      , Un = {}
      , Vn = function(a) {
        U.addTargetToGroup ? U.addTargetToGroup(a) : (U.pendingDefaultTargets = U.pendingDefaultTargets || [],
        U.pendingDefaultTargets.push(a))
    }
      , Wn = function(a, b) {
        var c = Un[b] || [];
        c.push(a);
        Un[b] = c
    }
      , Yn = function() {
        U.addTargetToGroup = function(e) {
            Xn(e, "default")
        }
        ;
        U.addDestinationToContainer = function(e, f) {
            Wn(e, f)
        }
        ;
        var a = U.pendingDefaultTargets;
        delete U.pendingDefaultTargets;
        if (Array.isArray(a))
            for (var b = 0; b < a.length; ++b)
                Xn(a[b], "default");
        var c = U.pendingDestinationIds;
        delete U.pendingDestinationIds;
        if (Array.isArray(c))
            for (var d = 0; d < c.length; ++d)
                Wn(c[d][0], c[d][1])
    }
      , Xn = function(a, b) {
        b = b.toString().split(",");
        for (var c = 0; c < b.length; c++) {
            var d = Tn[b[c]] || [];
            Tn[b[c]] = d;
            0 > d.indexOf(a) && d.push(a)
        }
    }
      , Zn = function(a) {
        xa(Tn, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var jo = function(a) {
        var b = U.zones;
        return b ? b.getIsAllowedFn(S.H, a) : function() {
            return !0
        }
    }
      , ko = function(a) {
        var b = U.zones;
        return b ? b.isActive(S.H, a) : !0
    };
    var no = function(a, b) {
        for (var c = [], d = 0; d < Zb.length; d++)
            if (a[d]) {
                var e = Zb[d];
                var f = Sh(b.Sb);
                try {
                    var g = wj(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var l = c
                          , m = l.push
                          , n = d
                          , p = e["function"];
                        if (!p)
                            throw "Error: No function name given for function call.";
                        var q = bc[p];
                        m.call(l, {
                            Wg: n,
                            Ng: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else
                        lo(d, b),
                        f()
                } catch (t) {
                    f()
                }
            }
        var r = b.Sb;
        r.U = !0;
        r.o >= r.s && Qh(r);
        c.sort(mo);
        for (var u = 0; u < c.length; u++)
            c[u].execute();
        return 0 < c.length
    };
    function mo(a, b) {
        var c, d = b.Ng, e = a.Ng;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var g = a.Wg
              , l = b.Wg;
            f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
    }
    function lo(a, b) {
        if (!Si)
            return;
        var c = function(d) {
            var e = b.Te(Zb[d]) ? "3" : "4"
              , f = gc(Zb[d][zb.Yf], b, []);
            f && f.length && c(f[0].index);
            nj(b.id, Zb[d], e);
            var g = gc(Zb[d][zb.$f], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var oo = !1;
    var to = function(a) {
        var b = Ea()
          , c = a["gtm.uniqueEventId"]
          , d = a.event;
        if ("gtm.js" === d) {
            if (oo)
                return !1;
            oo = !0;
        }
        var g, l = !1;
        if (ko(c))
            g = jo(c);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
                return !1;
            l = !0;
            g = jo(Number.MAX_SAFE_INTEGER)
        }
        Xi(c, d);
        var m = a.eventCallback
          , n = a.eventTimeout
          , p = m;
        var q = {
            id: c,
            name: d,
            Te: Fh(g),
            zj: [],
            Hg: function() {
                Q(6)
            },
            ng: po(),
            og: qo(c),
            Sb: new Nh(p,n)
        }
          , r = lc(q);
        l && (r = ro(r));
        var u = no(r, q);
        "gtm.js" !== d && "gtm.sync" !== d || ci(S.H);
        return so(r, u)
    };
    function qo(a) {
        return function(b) {
            Si && (yb(b) || vj(a, "input", b))
        }
    }
    function po() {
        var a = {};
        a.event = we("event", 1);
        a.ecommerce = we("ecommerce", 1);
        a.gtm = we("gtm");
        a.eventModel = we("eventModel");
        return a
    }
    function ro(a) {
        for (var b = [], c = 0; c < a.length; c++)
            a[c] && (Zd[String(Zb[c][zb.sb])] && (b[c] = !0),
            void 0 !== Zb[c][zb.ci] && (b[c] = !0));
        return b
    }
    function so(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Zb[c] && !$d[String(Zb[c][zb.sb])])
                return !0;
        return !1
    }
    var uo = "HA GF G UA AW DC".split(" ")
      , vo = !1
      , wo = !1
      , xo = 0;
    function yo(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: me()
        });
        return a["gtm.uniqueEventId"]
    }
    function zo() {
        vo || U.gtagRegistered || (vo = U.gtagRegistered = !0,
        Yn());
        return vo
    }
    var Ao = {
        config: function(a) {
            yo(a);
            if (2 > a.length || !k(a[1]))
                return;
            var b = {};
            if (2 < a.length) {
                if (void 0 != a[2] && !xb(a[2]) || 3 < a.length)
                    return;
                b = a[2]
            }
            var c = bl(a[1]);
            if (!c)
                return;
            var d = zo();
            Zn(c.id);
            Xn(c.id, b[O.me] || "default");
            delete b[O.me];
            wo || Q(43);
            if (d && -1 !== uo.indexOf(c.prefix)) {
                "G" === c.prefix && (b[O.rb] = !0);
                delete b[O.Kb];
                c.id === c.containerId && (U.configCount = ++xo);
                Hn(b, c.id);
                return
            }
            ve("gtag.targets." + c.id, void 0);
            ve("gtag.targets." + c.id, J(b));
        },
        consent: function(a, b) {
            if (3 === a.length) {
                Q(39);
                var c = me()
                  , d = a[1];
                "default" === d ? td(a[2]) : "update" === d && vd(a[2], c, b)
            }
        },
        event: function(a) {
            var b = a[1];
            if (!(2 > a.length) && k(b)) {
                var c;
                if (2 < a.length) {
                    if (!xb(a[2]) && void 0 != a[2] || 3 < a.length)
                        return;
                    c = a[2]
                }
                var d = c
                  , e = {}
                  , f = (e.event = b,
                e);
                d && (f.eventModel = J(d),
                d[O.Kb] && (f.eventCallback = d[O.Kb]),
                d[O.dd] && (f.eventTimeout = d[O.dd]));
                var g = yo(a);
                f["gtm.uniqueEventId"] = g;
                if ("optimize.callback" === b)
                    return f.eventModel = f.eventModel || {},
                    f;
                var l;
                var m = c && c[O.Nb];
                void 0 === m && (m = se(O.Nb, 2),
                void 0 === m && (m = "default"));
                if (k(m) || qa(m)) {
                    for (var n = m.toString().replace(/\s+/g, "").split(","), p = [], q = 0; q < n.length; q++)
                        if (0 <= n[q].indexOf("-"))
                            Qn && Rn ? -1 < (Un[S.H] || []).indexOf(n[q]) && p.push(n[q]) : p.push(n[q]);
                        else {
                            var r = Tn[n[q]] || [];
                            if (Qn)
                                if (Rn) {
                                    if (-1 < r.indexOf(S.H)) {
                                        var u = Un[S.H];
                                        u && u.length && (p = p.concat(u))
                                    }
                                } else
                                    for (var t = 0; t < r.length; t++) {
                                        var v = Un[r[t]];
                                        v && v.length && (p = p.concat(v))
                                    }
                            else
                                r && r.length && (p = p.concat(r))
                        }
                    l = dl(p)
                } else
                    l = void 0;
                var y = l;
                if (!y)
                    return;
                for (var x = zo(), w = [], B = 0; x && B < y.length; B++) {
                    var z = y[B];
                    if (-1 !== uo.indexOf(z.prefix)) {
                        var C = J(c);
                        "G" === z.prefix && (C[O.rb] = !0);
                        delete C[O.Kb];
                        Gn(b, C, z.id)
                    }
                    w.push(z.id)
                }
                f.eventModel = f.eventModel || {};
                0 < y.length ? f.eventModel[O.Nb] = w.join() : delete f.eventModel[O.Nb];
                wo || Q(43);
                return f
            }
        },
        get: function(a) {
            Q(53);
            if (4 !== a.length || !k(a[1]) || !k(a[2]) || !na(a[3]))
                return;
            var b = bl(a[1])
              , c = String(a[2])
              , d = a[3];
            if (!b)
                return;
            wo || Q(43);
            if (!zo() || -1 === uo.indexOf(b.prefix))
                return;
            me();
            var e = {};
            nd(J((e[O.Ra] = c,
            e[O.ab] = d,
            e)));
            In(c, function(f) {
                H(function() {
                    return d(f)
                })
            }, b.id);
        },
        js: function(a) {
            if (2 == a.length && a[1].getTime) {
                wo = !0;
                zo();
                var b = {};
                return b.event = "gtm.js",
                b["gtm.start"] = a[1].getTime(),
                b["gtm.uniqueEventId"] = yo(a),
                b
            }
        },
        policy: function() {},
        set: function(a) {
            var b;
            2 == a.length && xb(a[1]) ? b = J(a[1]) : 3 == a.length && k(a[1]) && (b = {},
            xb(a[2]) || qa(a[2]) ? b[a[1]] = J(a[2]) : b[a[1]] = a[2]);
            if (b) {
                if (me(),
                J(b),
                zo()) {
                    var c = J(b);
                    Dn().push("set", [c])
                }
                b._clear = !0;
                return b
            }
        }
    }
      , To = {
        policy: !0
    };
    var Vo = function(a) {
        if (Uo(a))
            return a;
        this.m = a
    };
    Vo.prototype.getUntrustedMessageValue = function() {
        return this.m
    }
    ;
    var Uo = function(a) {
        return !a || "object" !== vb(a) || xb(a) ? !1 : "getUntrustedMessageValue"in a
    };
    Vo.prototype.getUntrustedMessageValue = Vo.prototype.getUntrustedMessageValue;
    var ap = function(a) {
        var b = A[S.V].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b)
                if (b.hasOwnProperty(d) && !0 === b[d]) {
                    c = !1;
                    break
                }
            c && (b.end(),
            b.end = null)
        }
    }
      , bp = function(a) {
        var b = A[S.V]
          , c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var cp = !1
      , dp = [];
    function ep() {
        if (!cp) {
            cp = !0;
            for (var a = 0; a < dp.length; a++)
                H(dp[a])
        }
    }
    var fp = function(a) {
        cp ? H(a) : dp.push(a)
    };
    var vp = 0
      , wp = {}
      , xp = []
      , yp = []
      , zp = !1
      , Ap = !1
      , Bp = function(a) {
        return A[S.V].push(a)
    }
      , Cp = function(a, b) {
        var c = U[S.V]
          , d = c ? c.subscribers : 1
          , e = 0
          , f = !1
          , g = void 0;
        b && (g = A.setTimeout(function() {
            f || (f = !0,
            a());
            g = void 0
        }, b));
        return function() {
            ++e === d && (g && (A.clearTimeout(g),
            g = void 0),
            f || (a(),
            f = !0))
        }
    };
    function Dp(a) {
        var b = a._clear;
        xa(a, function(d, e) {
            "_clear" !== d && (b && ve(d, void 0),
            ve(d, e))
        });
        ee || (ee = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        c || (c = me(),
        a["gtm.uniqueEventId"] = c,
        ve("gtm.uniqueEventId", c));
        return to(a)
    }
    function Ep(a) {
        if (null == a || "object" !== typeof a)
            return !1;
        if (a.event)
            return !0;
        if (ya(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b)
                return !0
        }
        return !1
    }
    function Fp() {
        for (var a = !1; !Ap && (0 < xp.length || 0 < yp.length); ) {
            if (!zp && Ep(xp[0])) {
                var b = {}
                  , c = (b.event = "gtm.init_consent",
                b)
                  , d = {}
                  , e = (d.event = "gtm.init",
                d)
                  , f = xp[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2,
                e["gtm.uniqueEventId"] = f - 1);
                xp.unshift(c, e);
                zp = !0
            }
            Ap = !0;
            delete pe.eventModel;
            re();
            var g = null
              , l = void 0;
            null == g && (g = xp.shift());
            if (null != g) {
                var n = Uo(g);
                if (n) {
                    var p = g;
                    g = Uo(p) ? p.getUntrustedMessageValue() : void 0;
                    for (var q = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], r = 0; r < q.length; r++) {
                        var u = q[r]
                          , t = se(u, 1);
                        if (qa(t) || xb(t))
                            t = J(t);
                        qe[u] = t
                    }
                }
                try {
                    if (na(g))
                        try {
                            g.call(te)
                        } catch (F) {}
                    else if (qa(g)) {
                        var v = g;
                        if (k(v[0])) {
                            var y = v[0].split(".")
                              , x = y.pop()
                              , w = v.slice(1)
                              , B = se(y.join("."), 2);
                            if (null != B)
                                try {
                                    B[x].apply(B, w)
                                } catch (F) {}
                        }
                    } else {
                        if (ya(g)) {
                            a: {
                                var z = g
                                  , C = l;
                                if (z.length && k(z[0])) {
                                    var D = Ao[z[0]];
                                    if (D && (!n || !To[z[0]])) {
                                        g = D(z, C);
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            if (!g) {
                                Ap = !1;
                                continue
                            }
                        }
                        a = Dp(g) || a;
                    }
                } finally {
                    n && re(!0)
                }
            }
            Ap = !1
        }
        return !a
    }
    function Hp() {
        var b = Fp();
        try {
            ap(S.H)
        } catch (c) {}
        return b
    }
    var Jp = function() {
        var a = bb(S.V, [])
          , b = bb("google_tag_manager", {});
        b = b[S.V] = b[S.V] || {};
        Lh(function() {
            if (!b.gtmDom) {
                b.gtmDom = !0;
                var e = {};
                a.push((e.event = "gtm.dom",
                e))
            }
        });
        fp(function() {
            if (!b.gtmLoad) {
                b.gtmLoad = !0;
                var e = {};
                a.push((e.event = "gtm.load",
                e))
            }
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var e;
            if (0 < U.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f = 0; f < arguments.length; f++)
                    e[f] = new Vo(arguments[f])
            } else
                e = [].slice.call(arguments, 0);
            xp.push.apply(xp, e);
            var g = c.apply(a, e);
            if (300 < this.length)
                for (Q(4); 300 < this.length; )
                    this.shift();
            var l = "boolean" !== typeof g || g;
            return Fp() && l
        }
        ;
        var d = a.slice(0);
        xp.push.apply(xp, d);
        if (Ip()) {
            H(Hp)
        }
    }
      , Ip = function() {
        var a = !0;
        return a
    };
    function Kp(a) {
        if (null == a || 0 === a.length)
            return !1;
        var b = Number(a)
          , c = Ea();
        return b < c + 3E5 && b > c - 9E5
    }
    ;var Lp = {
        Lg: "UA-136424656-3"
    };
    var Mp = {};
    Mp.od = new String("undefined");
    var mq = A.clearTimeout
      , nq = A.setTimeout
      , V = function(a, b, c, d) {
        if (Gj()) {
            b && H(b)
        } else
            return gb(a, b, c, d)
    }
      , oq = function() {
        return new Date
    }
      , pq = function() {
        return A.location.href
    }
      , qq = function(a) {
        return Ne(Pe(a), "fragment")
    }
      , rq = function(a) {
        return Oe(Pe(a))
    }
      , sq = function(a, b) {
        return se(a, b || 2)
    }
      , tq = function(a, b, c) {
        var d;
        b ? (a.eventCallback = b,
        c && (a.eventTimeout = c),
        d = Bp(a)) : d = Bp(a);
        return d
    }
      , uq = function(a, b) {
        A[a] = b
    }
      , X = function(a, b, c) {
        b && (void 0 === A[a] || c && !A[a]) && (A[a] = b);
        return A[a]
    }
      , vq = function(a, b, c) {
        return rf(a, b, void 0 === c ? !0 : !!c)
    }
      , wq = function(a, b, c) {
        return 0 === Af(a, b, c)
    }
      , xq = function(a, b) {
        if (Gj()) {
            b && H(b)
        } else
            jb(a, b)
    }
      , yq = function(a) {
        return !!Tp(a, "init", !1)
    }
      , zq = function(a) {
        Rp(a, "init", !0)
    }
      , Aq = function(a, b, c) {
        Si && (yb(a) || vj(c, b, a))
    };

    var Yq = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
    function Zq(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var $q = new va;
    function ar(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d
              , f = $q.get(e);
            f || (f = new RegExp(b,d),
            $q.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }
    function br(a, b) {
        function c(g) {
            var l = Pe(g)
              , m = Ne(l, "protocol")
              , n = Ne(l, "host", !0)
              , p = Ne(l, "port")
              , q = Ne(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p)
                m = "web",
                p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function cr(a) {
        return dr(a) ? 1 : 0
    }
    function dr(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = J(a, {});
                J({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (cr(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return 0 <= String(b).indexOf(String(c));
        case "_css":
            var f;
            a: {
                if (b)
                    try {
                        for (var g = 0; g < Yq.length; g++) {
                            var l = Yq[g];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (m) {}
                f = !1
            }
            return f;
        case "_ew":
            return Zq(b, c);
        case "_eq":
            return String(b) === String(c);
        case "_ge":
            return Number(b) >= Number(c);
        case "_gt":
            return Number(b) > Number(c);
        case "_lc":
            return 0 <= String(b).split(",").indexOf(String(c));
        case "_le":
            return Number(b) <= Number(c);
        case "_lt":
            return Number(b) < Number(c);
        case "_re":
            return ar(b, c, a.ignore_case);
        case "_sw":
            return 0 === String(b).indexOf(String(c));
        case "_um":
            return br(b, c)
        }
        return !1
    }
    ;Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var ir = encodeURI
      , Y = encodeURIComponent
      , jr = kb;
    var kr = function(a, b) {
        if (!a)
            return !1;
        var c = Ne(Pe(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--,
                e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    };
    var lr = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    function Is() {
        return A.gaGlobal = A.gaGlobal || {}
    }
    var Js = function() {
        var a = Is();
        a.hid = a.hid || ua();
        return a.hid
    }
      , Ks = function(a, b) {
        var c = Is();
        if (void 0 == c.vid || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var pt = function() {
        if (na(A.__uspapi)) {
            var a = "";
            try {
                A.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Ut = window
      , Vt = document
      , Wt = function(a) {
        var b = Ut._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === Ut["ga-disable-" + a])
            return !0;
        try {
            var c = Ut.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (f) {}
        for (var d = lf("AMP_TOKEN", String(Vt.cookie), !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e])
                return !0;
        return Vt.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    var Xt = {};
    function gu(a) {
        delete a.eventModel[O.rb];
        nu(a.eventModel)
    }
    var nu = function(a) {
        xa(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[O.Ea] || {};
        xa(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Fu = function(a, b, c) {
        Gn(b, c, a)
    }
      , Gu = function(a, b, c) {
        Gn(b, c, a, !0)
    }
      , Iu = function(a, b) {};
    function Hu(a, b) {}
    var Z = {
        g: {}
    };

    Z.g.e = ["google"],
    function() {
        (function(a) {
            Z.__e = a;
            Z.__e.h = "e";
            Z.__e.isVendorTemplate = !0;
            Z.__e.priorityOverride = 0
        }
        )(function(a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();

    Z.g.v = ["google"],
    function() {
        (function(a) {
            Z.__v = a;
            Z.__v.h = "v";
            Z.__v.isVendorTemplate = !0;
            Z.__v.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = sq(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1)
              , d = void 0 !== c ? c : a.vtp_defaultValue;
            Aq(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();
    Z.g.rep = ["google"],
    function() {
        var a = !1;
        (function(b) {
            Z.__rep = b;
            Z.__rep.h = "rep";
            Z.__rep.isVendorTemplate = !0;
            Z.__rep.priorityOverride = 0
        }
        )(function(b) {
            var c = bl(b.vtp_containerId), d;
            switch (c.prefix) {
            case "AW":
                d = Ul;
                break;
            case "DC":
                d = gm;
                break;
            case "GF":
                d = zm;
                break;
            case "HA":
                d = Em;
                break;
            case "UA":
                d = cn;
                break;
            default:
                H(b.vtp_gtmOnFailure);
                return
            }
            H(b.vtp_gtmOnSuccess);
            if (a) {
                var e = c.containerId
                  , f = Un[e] || [];
                Dn().notifyContainerLoaded(e, f)
            }
            Fn(b.vtp_containerId, d, b.vtp_remoteConfig || {})
        });
    }();

    Z.g.cid = ["google"],
    function() {
        (function(a) {
            Z.__cid = a;
            Z.__cid.h = "cid";
            Z.__cid.isVendorTemplate = !0;
            Z.__cid.priorityOverride = 0
        }
        )(function() {
            return S.H
        })
    }();

    Z.g.get = ["google"],
    function() {
        (function(a) {
            Z.__get = a;
            Z.__get.h = "get";
            Z.__get.isVendorTemplate = !0;
            Z.__get.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_settings;
            (a.vtp_deferrable ? Gu : Fu)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
            a.vtp_gtmOnSuccess()
        })
    }();

    var Ju = {};
    Ju.dataLayer = te;
    Ju.callback = function(a) {
        he.hasOwnProperty(a) && na(he[a]) && he[a]();
        delete he[a]
    }
    ;
    Ju.bootstrap = 0;
    Ju._spx = !1;
    (function(a) {
        if (!A["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (G.referrer) {
                var c = Pe(G.referrer);
                b = "cct.google" === Me(c, "host")
            }
            if (!b) {
                var d = rf("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (A["__TAGGY_INSTALLED"] = !0,
            gb("https://cct.google/taggy/agent.js"))
        }
        var f = function(q) {
            var r = "GTM"
              , u = "GTM";
            r = "OGT",
            u = "GTAG";
            var t = A["google.tagmanager.debugui2.queue"];
            t || (t = [],
            A["google.tagmanager.debugui2.queue"] = t,
            gb("https://" + S.Zc + "/debug/bootstrap?id=" + S.H + "&src=" + u + "&cond=" + q + "&gtm=" + mk()));
            var v = {
                messageType: "CONTAINER_STARTING",
                data: {
                    scriptSource: ab,
                    containerProduct: r,
                    debug: !1,
                    id: S.H
                }
            };
            v.data.resume = function() {
                a()
            }
            ;
            S.kh && (v.data.initialPublish = !0);
            t.push(v)
        }
          , g = void 0
          , l = Ne(A.location, "query", !1, void 0, "gtm_debug");
        Kp(l) && (g = 2);
        if (!g && G.referrer) {
            var m = Pe(G.referrer);
            "tagassistant.google.com" === Me(m, "host") && (g = 3)
        }
        if (!g) {
            var n = rf("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = G.documentElement.getAttribute("data-tag-assistant-present");
            Kp(p) && (g = 5)
        }
        g && ab ? f(g) : a()
    }
    )(function() {
        var a = !1;
        a && Uh("INIT");
        Xc().o();
        Jk();
        Hg.enable_gbraid_cookie_write = !0;
        var b = !!U[S.H];
        if (b) {
            var c = U.zones;
            c && c.unregisterChild(S.H);
        } else {
            for (var g = data.resource || {}, l = g.macros || [], m = 0; m < l.length; m++)
                Wb.push(l[m]);
            for (var n = g.tags || [], p = 0; p < n.length; p++)
                Zb.push(n[p]);
            for (var q = g.predicates || [], r = 0; r < q.length; r++)
                Yb.push(q[r]);
            for (var u = g.rules || [], t = 0; t < u.length; t++) {
                for (var v = u[t], y = {}, x = 0; x < v.length; x++)
                    y[v[x][0]] = Array.prototype.slice.call(v[x], 1);
                Xb.push(y)
            }
            bc = Z;
            cc = cr;
            U[S.H] = Ju;
            Ia(le, Z.g);
            ec = mc;
            Jp();
            Gh = !1;
            Hh = 0;
            if ("interactive" == G.readyState && !G.createEventObject || "complete" == G.readyState)
                Jh();
            else {
                lb(G, "DOMContentLoaded", Jh);
                lb(G, "readystatechange", Jh);
                if (G.createEventObject && G.documentElement.doScroll) {
                    var w = !0;
                    try {
                        w = !A.frameElement
                    } catch (E) {}
                    w && Kh()
                }
                lb(A, "load", Jh)
            }
            cp = !1;
            "complete" === G.readyState ? ep() : lb(A, "load", ep);
            Si && A.setInterval(Mi, 864E5);
            fe = Ea();
            Ju.bootstrap = fe;
            if (a) {
                var D = Vh("INIT");
            }
        }
    });

}
)()
