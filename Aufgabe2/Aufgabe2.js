document.addEventListener("DOMContentLoaded", function () {
    let rice = 1;
    let zeile = 0;
    for (let i = 0; i < 64; i++) {
        let element = document.createElement("div");
        element.textContent = rice.toString();
        //Schwarzwei�
        if (zeile % 2 == 0) {
            if (i % 2 != 0) {
                element.className = "board white";
            }
            else {
                element.className = "board black";
            }
        }
        //Umbruch
        if (i % 8 == 0) {
            zeile = zeile + 1;
        }
        rice *= 2;
        document.body.appendChild(element);
    }
});
//# sourceMappingURL=Aufgabe2.js.map