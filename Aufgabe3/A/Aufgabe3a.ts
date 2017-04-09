document.addEventListener("DOMContentLoaded", function(): void {
    let rice: number = 1;
    let zeile: number = 0;
    let n: number = 64;
    for (let i: number = 0; i < n; i++) {
        let element: HTMLElement = document.createElement("div");
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
        var obereDivReihe = document.getElementsByTagName("div");
    
    // Gibt den Feldern in der ersten Reihe bei einem Klick die Klasse "farbe", wodurch sie rot werden
    for (var i = 0; i < 9; i++) {
        obereDivReihe[i].addEventListener("click", function () {
            this.classList.toggle("farbe"); //f�rbt genau dieses angeklickte div durch die cssKlasse farbe ein
            summeK(); // hier wird der funktion summeK bei aktivierung gesagt welches div angeklickt worden ist
        });
    }
    var roteDivs = document.getElementsByClassName("farbe");
    var summe = 0; // wird die summe aller angeklickten divs nachher ergeben 
    var toolTip = document.getElementById("tooltip"); // div im html mit id wo die summe der angeklickten divs nacher angezeigt wird
    function summeK() {
        if (roteDivs.length == 0) {
            toolTip.style.display = "none"; //dann ist auch das tooltip.div nicht da 
        }
        else {
            toolTip.style.display = "inline-block"; //wenn nicht 0 divs angeklickt sind, dann wird das tooltip.div angezeigt
        }
        for (var i = 0; i < roteDivs.length; i++) {
            summe += Number(roteDivs[i].textContent); //der nummerninhat der angeklickten divs summiert sich
            var hexa = summe.toString(16); //berechnet die hexadezimalzahl aus der summe der reisk�rner der angeklickten divs
            var dezi = summe.toString(); //berechnet die dezimalzahl aus der summe der reisk�rner der angeklickten divs
            toolTip.textContent = "Summe vom Reis:" + "\r\n" /* absatz */ + "Dezimal: " + dezi + "\r\n" + "Hexadezimal: " + hexa; //schreibt in das tooltip.div die ben�tigten zahlen
        }
    }
    document.addEventListener("mousemove", function (Event) {
        document.getElementById("tooltip").style.left = (Event.clientX + 10) + "px";
        document.getElementById("tooltip").style.top = (Event.clientY + 10) + "px";
    });
    
});