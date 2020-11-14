/* add code here */
/*Coded by Sriharsha Ramayanam */
document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);

function theDomHasLoaded(e) {
    let selectedImg;
    let div = document.getElementById("thumbnails");
    let fea = document.getElementById("featured");
    let nodes = fea.children;
    let bigImg = nodes[0];
    let bigCap = nodes[1];
    div.onclick = function(event) {
        let img = event.target.closest('img');

        if (!img) return;

        if (!div.contains(img)) return;

        bigImg.src = img.src.replace("small","medium");
        bigImg.title = img.title;
        bigCap.innerHTML = img.title;
       
    }
    fea.addEventListener('mouseover', event => {
        bigCap.style.opacity = 0.8;
        bigCap.style.transition = "all 1s";
    });
    fea.addEventListener('mouseout', event => {
        bigCap.style.opacity = 0;
    });
    
}