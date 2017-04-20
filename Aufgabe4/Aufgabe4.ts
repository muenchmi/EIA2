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
        
         //Berg
        crc2.beginPath();
        crc2.moveTo(0, 50);
        crc2.lineTo(50, 25);
        crc2.lineTo(100, 75);
        crc2.lineTo(200, 0);
        crc2.lineTo(350, 75);
        crc2.lineTo(400, 25);
        crc2.lineTo(450, 75);
        crc2.lineTo(575, 25);
        crc2.lineTo(600, 50);
        crc2.lineTo(600, 200);
        crc2.lineTo(0, 200);
        crc2.closePath();
        crc2.fillStyle = "#394233";
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