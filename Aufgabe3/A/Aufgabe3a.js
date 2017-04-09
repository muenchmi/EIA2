document.addEventListener("DOMContentLoaded", function () {
    let rice = 1;
    let zeile = 0;
    let n = 64;
    for (let i = 0; i < n; i++) {
        let element = document.createElement("div");
        element.textContent = rice.toString();
        //Umbruch
        if (i % 8 == 0) {
            zeile = zeile + 1;
        }
        //Schwarzweiß
        if (zeile % 2 == 0) {
            if (i % 2 != 0) {
                element.className = "board white";
            }
            else {
                element.className = "board black";
            }
        }
        else {
            if (i % 2 != 0) {
                element.className = "board black";
            }
            else {
                element.className = "board white";
            }
        }
        rice = rice * 2;
        document.body.appendChild(element);
    }
    var erstereihe = document.getElementsByTagName("div");
    //einfärben
    for (var i = 0; i < 9; i++) {
        erstereihe[i].addEventListener("click", function () {
            this.classList.toggle("grün");
            summeK();
        });
    }
    var gDivs = document.getElementsByClassName("grün");
    var x = 0;
    var pfeil = document.getElementById("pfeil");
    function summeK() {
        if (gDivs.length == 0) {
            pfeil.style.display = "none";
        }
        else {
            pfeil.style.display = "inline block";
        }
        for (var i = 0; i < gDivs.length; i++) {
            x += Number(gDivs[i].textContent);
            var hexa = x.toString(16); //berechnet die hexadezimalzahl aus der summe der reisk�rner der angeklickten divs
            var dezi = x.toString(); //berechnet die dezimalzahl aus der summe der reisk�rner der angeklickten divs
            pfeil.textContent = "Summe vom Reis:" + "\r\n" /* absatz */ + "Dezimal: " + dezi + "\r\n" + "Hexadezimal: " + hexa; //schreibt in das tooltip.div die ben�tigten zahlen
        }
    }
    document.addEventListener("mousemove", function (Event) {
        document.getElementById("pfeil").style.left = (Event.clientX + 10) + "px";
        document.getElementById("pfeil").style.top = (Event.clientY + 10) + "px";
    });
});
//# sourceMappingURL=Aufgabe3a.js.map