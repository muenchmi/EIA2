namespace BLUMEN {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 600;
        canvas.height = 400;
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.fillStyle = "#8ad0ea";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        //hintergrund Berg
        crc2.beginPath();
        crc2.moveTo(0, 150);
        crc2.lineTo(50, 125);
        crc2.lineTo(100, 175);
        crc2.lineTo(200, 50);
        crc2.lineTo(350, 175);
        crc2.lineTo(400, 125);
        crc2.lineTo(450, 175);
        crc2.lineTo(575, 125);
        crc2.lineTo(600, 150);
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
        crc2.lineTo(325, 120);
        crc2.lineTo(400, 200);
        crc2.lineTo(475, 175);
        crc2.lineTo(500, 150);
        crc2.lineTo(550, 125);
        crc2.lineTo(600, 200);
        crc2.lineTo(600, 300);
        crc2.lineTo(0, 300);
        crc2.closePath();
        crc2.fillStyle = "#a9bc9c";
        crc2.fill();

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

}