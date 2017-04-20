var BLUMEN;
(function (BLUMEN) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 600;
        canvas.height = 400;
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //        crc2.fillStyle = "#8ad0ea";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Wiese
        crc2.beginPath();
        crc2.moveTo(0, 250);
        crc2.lineTo(600, 250);
        crc2.lineTo(600, 400);
        crc2.lineTo(0, 400);
        crc2.closePath();
        crc2.fillStyle = "#34ba43";
        crc2.fill();
    }
})(BLUMEN || (BLUMEN = {}));
//# sourceMappingURL=Aufgabe4.js.map