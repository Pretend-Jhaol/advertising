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
    };

    var params = {};
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
    //navigator对象数据
    if (navigator) {
        params.lang = navigator.language || '';
    }
    //解析_maq配置
    if (_maq) {
        for (var i in _maq) {
            switch (_maq[i][0]) {
                case '_setAccount':
                    params.account = _maq[i][1];
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
    addDelayMask("https://www.baidu.com", 5000)
    addFloatAdv("right", "bottom", "https://g32554517s.zicp.fun/adv/jump?id=", 'https://fakeimg.pl/220x300/F44336/FFF/?font=noto&text=顶部广告')
    addFloatAdv("left", "bottom", "https://g32554517s.zicp.fun/adv/jump?id=", 'https://fakeimg.pl/220x300/F44336/FFF/?font=noto&text=顶部广告')
    addFloatAdv("right", "top", "https://g32554517s.zicp.fun/adv/jump?id=", 'https://fakeimg.pl/220x300/F44336/FFF/?font=noto&text=顶部广告')
    addFloatAdv("left", "top", "https://g32554517s.zicp.fun/adv/jump?id=", 'https://fakeimg.pl/220x300/F44336/FFF/?font=noto&text=顶部广告')
    addTopOrBottomAdv("top", "https://g32554517s.zicp.fun/adv/jump?id=", "https://fakeimg.pl/1920x50/F44336/FFF/?font=noto&text=顶部广告")
    addTopOrBottomAdv("bottom", "https://g32554517s.zicp.fun/adv/jump?id=", "https://fakeimg.pl/1920x50/F44336/FFF/?font=noto&text=顶部广告")
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://g32554517s.zicp.fun/site/config?host=www.zzhifu.com', true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var json = JSON.parse(httpRequest.responseText);//获取到json字符串，还需解析
            console.log(json)
            addFloatAdv("right", "bottom", "https://g32554517s.zicp.fun/adv/jump?id=" + json.bottomAdvId, json.bottomImage)
            addFloatAdv("left", "bottom", "https://g32554517s.zicp.fun/adv/jump?id=" + json.bottomAdvId, json.bottomImage)
            addFloatAdv("right", "top", "https://g32554517s.zicp.fun/adv/jump?id=" + json.topAdvId, json.topImage)
            addFloatAdv("left", "top", "https://g32554517s.zicp.fun/adv/jump?id=" + json.topAdvId, json.topImage)
            addTopOrBottomAdv("top", "https://g32554517s.zicp.fun/adv/jump?id=" + json.topAdvId, "https://fakeimg.pl/1920x50/F44336/FFF/?font=noto&text=顶部广告")
            addTopOrBottomAdv("bottom", "https://g32554517s.zicp.fun/adv/jump?id=" + json.topAdvId, "https://fakeimg.pl/1920x50/F44336/FFF/?font=noto&text=顶部广告")
        }
    };
})();

//

