!function() {
    var e = function() {
        var e, t, n, a = {
            rootMargin: "200px 0px",
            threshold: .01
        }, i = [];
        d();
        var r = document.querySelector("body");
        function d() {
            e = [].slice.call(document.querySelectorAll("img.jetpack-lazy-image:not(.jetpack-lazy-image--handled)")),
            n && n.disconnect(),
            "IntersectionObserver"in window ? (n = new IntersectionObserver(l,a),
            e.forEach((function(e) {
                e.getAttribute("data-lazy-loaded") || n.observe(e)
            }
            )),
            window.addEventListener("beforeprint", c),
            window.matchMedia && window.matchMedia("print").addListener((function(e) {
                e.matches && c()
            }
            ))) : o()
        }
        function o() {
            for (n && n.disconnect(); e.length > 0; )
                s(e[0])
        }
        function l(t) {
            for (var a = 0; a < t.length; a++) {
                var i = t[a];
                i.intersectionRatio > 0 && (n.unobserve(i.target),
                s(i.target))
            }
            0 === e.length && n.disconnect()
        }
        function c() {
            if (!t && (e.length > 0 || i.length > 0)) {
                (t = document.createElement("div")).id = "loadingWarning",
                t.style.fontWeight = "bold",
                t.innerText = jetpackLazyImagesL10n.loading_warning;
                var n = document.createElement("style");
                n.innerHTML = "#loadingWarning { display: none; }\n@media print {\n#loadingWarning { display: block; }\nbody > #loadingWarning ~ * { display: none !important; }\n}",
                t.appendChild(n),
                r.insertBefore(t, r.firstChild)
            }
            e.length > 0 && o(),
            t && alert(jetpackLazyImagesL10n.loading_warning)
        }
        function s(t) {
            var n;
            if (t instanceof HTMLImageElement) {
                var a = t.getAttribute("data-lazy-srcset")
                  , r = t.getAttribute("data-lazy-sizes");
                t.removeAttribute("data-lazy-srcset"),
                t.removeAttribute("data-lazy-sizes"),
                t.removeAttribute("data-lazy-src"),
                t.classList.add("jetpack-lazy-image--handled"),
                t.setAttribute("data-lazy-loaded", 1),
                r && t.setAttribute("sizes", r),
                a ? t.setAttribute("srcset", a) : t.removeAttribute("srcset"),
                t.setAttribute("loading", "eager"),
                i.push(t);
                var d = e.indexOf(t);
                d >= 0 && e.splice(d, 1),
                t.complete ? g.call(t, null) : (t.addEventListener("load", g, {
                    once: !0
                }),
                t.addEventListener("error", g, {
                    once: !0
                }));
                try {
                    n = new Event("jetpack-lazy-loaded-image",{
                        bubbles: !0,
                        cancelable: !0
                    })
                } catch (e) {
                    (n = document.createEvent("Event")).initEvent("jetpack-lazy-loaded-image", !0, !0)
                }
                t.dispatchEvent(n)
            }
        }
        function g() {
            var n = i.indexOf(this);
            n >= 0 && i.splice(n, 1),
            t && 0 === e.length && 0 === i.length && (t.parentNode.removeChild(t),
            t = null)
        }
        r && (r.addEventListener("is.post-load", d),
        r.addEventListener("jetpack-lazy-images-load", d))
    };
    "interactive" === document.readyState || "complete" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
}();
