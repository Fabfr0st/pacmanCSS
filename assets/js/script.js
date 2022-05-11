const area = document.querySelector("#area");
const pacman = document.querySelector("#pacman");
const taillePacman = pacman.clientWidth;
const hauteurLim = area.clientHeight - taillePacman;
const largeurLim = area.clientWidth - taillePacman;
let posLeft, posTop;

//console.dir(pacman);
/* clientLeft: 0
clientTop: 0 */
/* offsetLeft: 0
offsetTop: 0 */
pacman.style.top = taillePacman + "px";
pacman.style.left = taillePacman + "px";
console.log("hauteur "+ hauteurLim);
console.log("largeur "+ largeurLim);
// console.dir(area);
document.body.addEventListener("keyup", function (event) {
    //detecter quelle touche a ete utilisee
    /*     console.log(typeof(event));
        console.dir(event); */
    posLeft = pacman.offsetLeft;
    posTop = pacman.offsetTop;
    switch (event.key) {
        case "z":
            if (posTop > 0) {
                posTop -= taillePacman;
                pacman.style.top = posTop + "px";
            };
            break;
        case "q":
            if (posLeft > 0) {
                posLeft -= taillePacman;
                pacman.style.left = posLeft + "px";
            };
            break;
        case "s":
            if (posTop < hauteurLim) {
                posTop += taillePacman;
                pacman.style.top = posTop + "px";
            };
            break;
        case "d":
            if (posLeft < largeurLim) {
                posLeft += taillePacman;
                pacman.style.left = posLeft + "px";
            };
            break;
        default:
            break;
    }
});