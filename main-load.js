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
    new_element.setAttribute('href', 'https://cdn.jsdelivr.net/gh/Pretend-Jhaol/advertising@release/main-load.css');
    document.head.appendChild(new_element);
}
//
loadStyle()
// addDelayMask("www.baidu.com", 5000)
// addFloatAdv("right", "bottom", "https://g32554517s.zicp.fun/adv/jump?id=", 'https://fakeimg.pl/220x300/F44336/FFF/?font=noto&text=顶部广告')
// addFloatAdv("left", "bottom", "https://g32554517s.zicp.fun/adv/jump?id=", 'https://fakeimg.pl/220x300/F44336/FFF/?font=noto&text=顶部广告')
// addFloatAdv("right", "top", "https://g32554517s.zicp.fun/adv/jump?id=", 'https://fakeimg.pl/220x300/F44336/FFF/?font=noto&text=顶部广告')
// addFloatAdv("left", "top", "https://g32554517s.zicp.fun/adv/jump?id=", 'https://fakeimg.pl/220x300/F44336/FFF/?font=noto&text=顶部广告')
// addTopOrBottomAdv("top", "https://g32554517s.zicp.fun/adv/jump?id=", "https://fakeimg.pl/1920x50/F44336/FFF/?font=noto&text=顶部广告")
// addTopOrBottomAdv("bottom", "https://g32554517s.zicp.fun/adv/jump?id=", "https://fakeimg.pl/1920x50/F44336/FFF/?font=noto&text=顶部广告")
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

