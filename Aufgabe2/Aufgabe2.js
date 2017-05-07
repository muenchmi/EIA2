document.addEventListener("DOMContentLoaded", function () {
    var rice = 1;
    var zeile = 0;
    var n = 64;
    for (var i = 0; i < n; i++) {
        var element = document.createElement("div");
        element.textContent = rice.toString();
        //Umbruch
        if (i % 8 == 0) {
            zeile = zeile + 1;
        }
        //Schwarzwei�
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
});
//# sourceMappingURL=Aufgabe2.js.map