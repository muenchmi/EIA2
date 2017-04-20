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
        crc2.fillStyle = "#8ad0ea";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //        let myFlow = crc2.createLinearGradient(0, 0, 0, 200);
        //        myFlow.addColorStop(0, "#8ad0ea");
        //        myFlow.addColorStop(1, "white");
        //        crc2.fillStyle = myFlow;
        //        crc2.fillRect(20, 20, 150, 100);
        //hintergrund Berg
        crc2.beginPath();
        crc2.moveTo(0, 125);
        crc2.lineTo(25, 110);
        crc2.lineTo(75, 150);
        crc2.lineTo(150, 100);
        crc2.lineTo(225, 175);
        crc2.lineTo(300, 100);
        crc2.lineTo(350, 150);
        crc2.lineTo(400, 125);
        crc2.lineTo(450, 150);
        crc2.lineTo(475, 150);
        crc2.lineTo(550, 75);
        crc2.lineTo(600, 100);
        crc2.lineTo(600, 300);
        crc2.lineTo(0, 300);
        crc2.closePath();
        crc2.fillStyle = "#394233";
        crc2.fill();
        //vorderer Berg
        crc2.beginPath();
        crc2.moveTo(0, 175);
        crc2.lineTo(25, 150);
        crc2.lineTo(75, 200);
        crc2.lineTo(125, 125);
        crc2.lineTo(175, 175);
        crc2.lineTo(250, 100);
        crc2.lineTo(300, 175);
        crc2.lineTo(350, 120);
        crc2.lineTo(400, 175);
        crc2.lineTo(475, 75);
        crc2.lineTo(550, 150);
        crc2.lineTo(600, 100);
        crc2.lineTo(600, 300);
        crc2.lineTo(0, 300);
        crc2.closePath();
        crc2.fillStyle = "#a9bc9c";
        crc2.fill();
        //hinten Wiese
        crc2.beginPath();
        crc2.moveTo(0, 250);
        crc2.quadraticCurveTo(200, 225, 600, 300);
        crc2.lineTo(600, 400);
        crc2.lineTo(0, 400);
        crc2.closePath();
        crc2.fillStyle = "#1f471e";
        crc2.fill();
        //vorne Wiese
        crc2.beginPath();
        crc2.moveTo(0, 325);
        crc2.quadraticCurveTo(350, 225, 600, 225);
        crc2.lineTo(600, 400);
        crc2.lineTo(0, 400);
        crc2.closePath();
        crc2.fillStyle = "#34ba43";
        crc2.fill();
        //Sonne
        crc2.beginPath();
        crc2.arc(75, 50, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#f9cb11";
        crc2.fill();
    }
})(BLUMEN || (BLUMEN = {}));
//# sourceMappingURL=Aufgabe4.js.map