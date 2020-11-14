
/* add code here  */
/* Coded by Anish Panchadara */
document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);

function theDomHasLoaded(e) {
  document.querySelectorAll('.hilightable').forEach(item => {
    item.addEventListener('focus', event => {
        if (item.classList.contains("error")) {
            item.classList.remove("error");
        }
        item.classList.toggle("highlight");
    });
    item.addEventListener('blur', event => {
      item.classList.toggle("highlight");
    });
  });
}
