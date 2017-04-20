var BLUMEN;
(function (BLUMEN) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 400;
        canvas.height = 300;
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.fillStyle = "#8ad0ea";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
})(BLUMEN || (BLUMEN = {}));
//# sourceMappingURL=Aufgabe4.js.map