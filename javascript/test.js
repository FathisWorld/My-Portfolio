let portfolio = document.querySelector(".portfolio");
let header = document.querySelector("#top");
let secOne = document.querySelector(".sec-1");
let secTwo = document.querySelector("#about");
let secThree = document.querySelector(".sec-3");
let secfour = document.querySelector(".sec-4");
let contact = document.querySelector(".contact");
let services = document.querySelector(".services");
let footer = document.querySelector(".footer");
let wav = document.querySelector(".wav");
let toP = document.querySelector(".up");
let progres = document.querySelectorAll(".progres span");
let img = document.querySelector(".whatsimg");
let designe = document.querySelector(".designe");
let web = document.querySelector(".web");
let inf = document.querySelector(".label");
let soc = document.querySelector(".social");
let porCon = document.querySelector(".portfolio-content");
let info = document.querySelector(".info");
let card = document.querySelector(".portfolio .container .portfolio-content .card");
let welcom = document.querySelector(".welcome")
let welP = document.querySelectorAll(".welP")
let secOneCon = document.querySelector(".container");
let lang = document.querySelector(".services-content")

window.onscroll = function() {
    if (window.scrollY >= secTwo.offsetTop - 400) {
        img.style.cssText = "transform: translate(0);"
        toP.style.cssText = "display: flex;"
    };
    if (window.scrollY >= secfour.offsetTop - 200) {
        progres.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    };
    if (window.scrollY >= secThree.offsetTop - 200) {
        progres.forEach((span) => {
            designe.style.cssText = "transform: translate(0);"
            web.style.cssText = "transform: translate(0);"
        })
    };
    if (window.scrollY >= contact.offsetTop - 300) {
        inf.style.cssText = "transform: translate(0,0);"
        soc.style.cssText = "transform: translate(0,0);"
    };
    if (window.scrollY >= portfolio.offsetTop - 200) {
        porCon.style.cssText = "filter: blur(0px);"
    };
    if (window.scrollY >= contact.offsetTop - 300) {
        footer.style.cssText = "transform: translate(0);"
    };
    if (window.scrollY >= portfolio.offsetTop - 200) {
        porCon.style.cssText = "transform: translate(0,0);"
    };
    if (window.scrollY >= secTwo.offsetTop - 400) {
        info.style.cssText = "transform: translate(0,0);"
    };
    if (window.scrollY >= services.offsetTop - 200) {
        lang.style.cssText = "transform: translate(0,0);"
    };
};

setInterval(sayWelcom, 2000);

function sayWelcom() {
    welcom.style.cssText = "width: 0px; height: 0px; transition: 1s;"
    welP.forEach((e) => {
        e.style.cssText = "display: none;"
    })
}