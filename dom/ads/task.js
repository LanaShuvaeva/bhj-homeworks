const ads = document.getElementsByClassName("rotator__case");
let intervalSet;
let activeAd = ads[0];

function rotatorFunc() {
    for (let i = 0; i < ads.length; i++) {
        if (ads[i].classList.contains("rotator__case_active")) {
            ads[i].classList.remove("rotator__case_active");
            ads[i+1] ? activeAd = ads[i+1] : activeAd = ads[0];
            activeAd.classList.add("rotator__case_active");
            activeAd.style.color = activeAd.getAttribute("data-color");
            intervalSet = ads[i].getAttribute("data-speed");
            return intervalSet;
        }
    }
}

intervalSet = rotatorFunc();
setInterval(rotatorFunc, intervalSet);

