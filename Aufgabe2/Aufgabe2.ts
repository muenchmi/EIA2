document.addEventListener("DOMContentLoaded", function(): void {
    let rice: number = 1;
    let zeile: number = 0;

    for (let i: number = 0; i < 64; i++) {
        let element: HTMLElement = document.createElement("div");
        element.textContent = rice.toString();

        //Schwarzweiß
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
        rice = rice * 2;
        document.body.appendChild(element);
    }
});
