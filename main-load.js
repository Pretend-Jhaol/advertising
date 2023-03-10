function addFloatAdv(both, position, href, imageSrc) {
    const div = document.createElement("div");
    div.className = both + "-" + position + "-advertising advertising";
    const closeAdv = document.createElement("div");
    const htmlSpanElement = document.createElement("span");
    htmlSpanElement.innerHTML = "关闭"
    closeAdv.appendChild(htmlSpanElement)
    const rect = document.createElement("span")
    rect.className = "right-title-btn"
    closeAdv.appendChild(rect)
    closeAdv.className = "close-adv"
    closeAdv.addEventListener('click', function () {
        div.style.display = 'none'
        window.open(href)
    })
    const a = document.createElement("a");
    a.className = "advertising-a"
    a.href = href
    a.target = "_blank"
    const image = document.createElement("img")
    image.alt = "广告"
    image.src = imageSrc
    a.appendChild(image)
    div.appendChild(closeAdv)
    div.appendChild(a)
    document.body.appendChild(div)
}

function addTopOrBottomAdv(position, href, imageSrc) {
    const div = document.createElement("div");
    div.className = position + "-advertising advertising";
    const a = document.createElement("a");
    a.className = "advertising-a"
    a.href = href
    a.target = "_blank"
    const image = document.createElement("img")
    image.alt = "广告"
    image.src = imageSrc
    a.appendChild(image)
    div.appendChild(a)
    document.body.appendChild(div)
}

function addDelayMask(href, delayTime) {
    const div = document.createElement("div");
    div.className = "mask";
    div.addEventListener('click', function () {
        div.style.display = 'none'
        window.open(href)
    })
    setTimeout(function () {
        document.body.appendChild(div)
    }, delayTime)
}

function loadStyle() {
    const new_element = document.createElement('link');
    new_element.setAttribute('rel', 'stylesheet');
    new_element.setAttribute("type", "text/css");
    // new_element.setAttribute('href', 'main-load.css');
    new_element.setAttribute('href', 'https://cdn.jsdelivr.net/gh/Pretend-Jhaol/advertising@latest/main-load.css');
    document.head.appendChild(new_element);
}

(function () {
    var h, k, j, l, p, r, q, n, m, o,
        f = {};

    function init() {
        f ? l = f : l = {};
        h = document;
        k = h.location;
        j = h.body;
        m = navigator;
        p = m.platform;
        q = getCookieSetDomain();
    }

    function getCookieSetDomain() {
        var a =
                window.location.host,
            c = {
                "com.cn": 1,
                "net.cn": 1,
                "gov,cn": 1,
                "com.hk": 1
            },
            b = a.split(".");
        2 < b.length && (a = (c[b.slice(-2).join(".")] ? b.slice(-3) : b.slice(-2)).join("."));
        return a
    }

    var b = {
            detect: function () {
                var ret = {
                    browser: this.search(this.data.bs),
                    version: this.search(navigator.userAgent),
                    os: this.search(this.data.os)
                };
                if (ret.os == 'Linux') {
                    var distros = ['CentOS', 'Debian', 'Fedora', 'Gentoo', 'Mandriva', 'Mageia', 'Red Hat', 'Slackware', 'SUSE', 'Turbolinux', 'Ubuntu'];
                    for (var i = 0; i < distros.length; i++) {
                        if (navigator.userAgent.toLowerCase().match(distros[i].toLowerCase())) {
                            ret.distro = distros[i];
                            break;
                        }
                    }
                }
                return ret;
            },
            getPvi: function () {
                try {
                    g.init()
                    return navigator.cookieEnabled ? g.setCookie("pgv_pvi", !0) : "NoCookie";
                } catch (a) {
                    return "NoCookie";
                }
            },
            search: function (data) {
                if (typeof data === "object") {
                    for (var i = 0; i < data.length; i++) {
                        var dataString = data[i].string,
                            dataProp = data[i].prop;
                        this.version_string = data[i].versionSearch || data[i].identity;
                        if (dataString) {
                            if (-1 != dataString.indexOf(data[i].subString)) {
                                return data[i].identity;
                            }
                        } else if (dataProp) {
                            return data[i].identity;
                        }
                    }
                } else {
                    var index = data.indexOf(this.version_string);
                    if (index == -1) return;
                    return parseFloat(data.substr(index + this.version_string.length + 1));
                }
            },
            data: {
                bs: [
                    {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
                    {string: navigator.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb"},
                    {string: navigator.vendor, subString: "Apple", identity: "Safari", versionSearch: "Version"},
                    {prop: window.opera, identity: "Opera", versionSearch: "Version"},
                    {string: navigator.vendor, subString: "iCab", identity: "iCab"},
                    {string: navigator.vendor, subString: "KDE", identity: "Konqueror"},
                    {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
                    {string: navigator.vendor, subString: "Camino", identity: "Camino"},
                    {string: navigator.userAgent, subString: "Netscape", identity: "Netscape"},
                    {string: navigator.userAgent, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE"},
                    {string: navigator.userAgent, subString: "Gecko", identity: "Mozilla", versionSearch: "rv"},
                    {string: navigator.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla"}
                ],
                os: [
                    {string: navigator.platform, subString: "Win", identity: "Windows"},
                    {string: navigator.platform, subString: "Mac", identity: "Mac"},
                    {string: navigator.userAgent, subString: "iPhone", identity: "iPhone/iPod"},
                    {string: navigator.userAgent, subString: "iPad", identity: "iPad"},
                    {string: navigator.userAgent, subString: "Android", identity: "Android"},
                    {string: navigator.platform, subString: "Linux", identity: "Linux"}
                ]
            }
        },
        g = {
            sck: [],
            sco: {},
            init: function () {
                var a = this.get("pgv_info=", !0);
                if ("-" != a) {
                    for (var a = a.split("&"), c = 0; c < a.length; c++) {
                        var b = a[c].split("=");
                        this.set(b[0], unescape(b[1]))
                    }
                }
            },
            get: function (a, c) {
                var b = c ? h.cookie : this.get("pgv_info=", !0),
                    d = "-",
                    e;
                e = b.indexOf(a);
                if (-1 < e) {
                    e += a.length;
                    d = b.indexOf(";", e);
                    -1 == d && (d = b.length);
                    if (!c) {
                        var f = b.indexOf("&", e);
                        -1 < f && (d = Math.min(d, f))
                    }
                    d = unescape(b.substring(e, d))
                }
                return d
            },
            set: function (a, c) {
                this.sco[a] = c;
                for (var b = !1, d = this.sck.length, e = 0; e < d; e++)
                    if (a == this.sck[e]) {
                        b = !0;
                        break
                    }
                b || this.sck.push(a)
            },
            setCookie: function (a, c) {
                var b = g.get(a + "=", c);
                if ("-" == b) {
                    c ? b = "" : b = "s";
                    var d = (new Date).getUTCMilliseconds(),
                        b = b + Math.round(2147483647 * Math.abs(Math.random() + 1)) * (d + 1) % 1E10
                }
                var expires = new Date();
                expires.setTime(expires.getTime() + 10 * 24 * 60 * 60 * 1000);
                c ? this.saveCookie(a + "=" + b, "expires=" + expires.toString() + ";") : this.set(a, b);
                return b
            },
            saveCookie: function (a, c) {
                document.cookie = a + ";" + c
            }
        }
    init()
    var
        params = {};
    //Document对象数据
    if (document) {
        params.domain = document.domain || '';
        params.url = document.URL || '';
        params.title = document.title || '';
        params.referrer = document.referrer || '';
    }
    //Window对象数据
    if (window && window.screen) {
        params.sh = window.screen.height || 0;
        params.sw = window.screen.width || 0;
        params.cd = window.screen.colorDepth || 0;
    }

    const a = b.detect();

    params.os = a.os
    params.br = a.browser + "/" + a.version;
    params.account = b.getPvi()
    //navigator对象数据
    if (navigator) {
        params.lang = navigator.language || '';
    }
    //解析_maq配置
    if (_maq) {
        for (var i in _maq) {
            switch (_maq[i][0]) {
                case '_setAccount':
                    params.cid = _maq[i][1];
                    break;
                default:
                    break;
            }
        }
    }
    //拼接参数串
    var args = '';
    for (var i in params) {
        if (args != '') {
            args += '&';
        }
        args += i + '=' + encodeURIComponent(params[i]);
    }

    //通过Image对象请求后端脚本
    var img = new Image(1, 1);
    img.src = 'https://analysis.zhantaotie.com/1.gif?' + args;
})();

(function () {
    loadStyle()
    // var httpRequest = new XMLHttpRequest();
    // httpRequest.open('GET', 'https://g32554517s.zicp.fun/site/config?host=www.zzhifu.com', true);
    // httpRequest.send();
    // httpRequest.onreadystatechange = function () {
    //     if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    //         var json = JSON.parse(httpRequest.responseText);//获取到json字符串，还需解析
    //         console.log(json)
    //         addFloatAdv("right", "bottom", "https://g32554517s.zicp.fun/adv/jump?id=" + json.bottomAdvId, json.bottomImage)
    //         addFloatAdv("left", "bottom", "https://g32554517s.zicp.fun/adv/jump?id=" + json.bottomAdvId, json.bottomImage)
    //         addFloatAdv("right", "top", "https://g32554517s.zicp.fun/adv/jump?id=" + json.topAdvId, json.topImage)
    //         addFloatAdv("left", "top", "https://g32554517s.zicp.fun/adv/jump?id=" + json.topAdvId, json.topImage)
    //         addTopOrBottomAdv("top", "https://g32554517s.zicp.fun/adv/jump?id=" + json.topAdvId, "https://fakeimg.pl/1920x50/F44336/FFF/?font=noto&text=顶部广告")
    //         addTopOrBottomAdv("bottom", "https://g32554517s.zicp.fun/adv/jump?id=" + json.topAdvId, "https://fakeimg.pl/1920x50/F44336/FFF/?font=noto&text=顶部广告")
    //     }
    // };
})();

//

