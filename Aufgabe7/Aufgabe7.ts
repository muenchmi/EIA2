namespace BLUMEN {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    let n: number = 10;
    interface Bee {
        x: number;
        y: number;
        color: string;
    }
    let bees: Bee[] = [];

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
        //        let myFlow = crc2.createLinearGradient(0, 0, 0, 200);
        //        myFlow.addColorStop(0, "#8ad0ea");
        //        myFlow.addColorStop(1, "white");
        //        crc2.fillStyle = myFlow;
        //  c2.fillRect(20, 20, 150, 100);

        //Wolke3
        crc2.beginPath();
        crc2.arc(445, 75, 10, 0, 2 * Math.PI);
        crc2.arc(450, 83, 10, 0, 2 * Math.PI);
        crc2.arc(450, 68, 10, 0, 2 * Math.PI);
        crc2.arc(455, 75, 10, 0, 2 * Math.PI);
        crc2.arc(460, 83, 10, 0, 2 * Math.PI);
        crc2.arc(460, 68, 10, 0, 2 * Math.PI);
        crc2.arc(465, 75, 10, 0, 2 * Math.PI);
        crc2.arc(463, 75, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();

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

        //See
        crc2.beginPath();
        crc2.moveTo(0, 305);
        crc2.quadraticCurveTo(125, 200, 600, 350);
        crc2.lineTo(600, 400);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.fillStyle = "#3d7dff";
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

        //Wolke
        crc2.beginPath();
        crc2.arc(250, 50, 10, 0, 2 * Math.PI);
        crc2.arc(255, 57, 10, 0, 2 * Math.PI);
        crc2.arc(255, 43, 10, 0, 2 * Math.PI);
        crc2.arc(260, 50, 10, 0, 2 * Math.PI);
        crc2.arc(265, 57, 10, 0, 2 * Math.PI);
        crc2.arc(265, 43, 10, 0, 2 * Math.PI);
        crc2.arc(270, 50, 10, 0, 2 * Math.PI);
        crc2.arc(267, 50, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();


        //Wolke2
        crc2.beginPath();
        crc2.arc(40, 60, 10, 0, 2 * Math.PI);
        crc2.arc(45, 67, 10, 0, 2 * Math.PI);
        crc2.arc(45, 53, 10, 0, 2 * Math.PI);
        crc2.arc(50, 60, 10, 0, 2 * Math.PI);
        crc2.arc(55, 67, 10, 0, 2 * Math.PI);
        crc2.arc(55, 53, 10, 0, 2 * Math.PI);
        crc2.arc(60, 60, 10, 0, 2 * Math.PI);
        crc2.arc(57, 60, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();

        //Bienenstock
        crc2.beginPath();
        crc2.arc(480, 290, 10, 0, 2 * Math.PI);
        crc2.arc(480, 275, 10, 0, 2 * Math.PI);
        crc2.arc(480, 260, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#e5c300";
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(520, 290, 10, 0, 2 * Math.PI);
        crc2.arc(520, 275, 10, 0, 2 * Math.PI);
        crc2.arc(520, 260, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#e5c300";
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillRect(480, 300, 40, -50);
        crc2.fillStyle = "#e5c300";
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(500, 260, 25, 0, 2 * Math.PI);
        crc2.arc(500, 260, 25, 0, 2 * Math.PI);
        crc2.arc(500, 260, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#e5c300";
        crc2.closePath();
        crc2.fill();

        //EingangBienenstock
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(495, 272, 10, 10);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(500, 272, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.closePath();
        crc2.fill();


        //Blume
        function drawBlume(x: number, y: number): void {
            //Stiel
            crc2.beginPath();
            crc2.fillStyle = "#26a001";
            crc2.fillRect(x, y - 40, 3, 35);
            crc2.closePath();
            crc2.fill();

            //Kopf
            crc2.beginPath();
            crc2.arc(x + 6, y - 40, 6, 0, 2 * Math.PI);
            crc2.arc(x + 5, y - 45, 6, 0, 2 * Math.PI);
            crc2.arc(x - 4, y - 35, 6, 0, 2 * Math.PI);
            crc2.arc(x + 4, y - 35, 6, 0, 2 * Math.PI);
            crc2.arc(x - 6, y - 40, 6, 0, 2 * Math.PI);
            crc2.arc(x, y - 48, 6, 0, 2 * Math.PI);
            crc2.arc(x - 4, y - 35, 6, 0, 2 * Math.PI);
            crc2.arc(x + 4, y - 35, 6, 0, 2 * Math.PI);
            crc2.arc(x - 5, y - 45, 6, 0, 2 * Math.PI);
            crc2.arc(x + 5, y - 45, 6, 0, 2 * Math.PI);
            crc2.arc(x + 2, y - 40, 6, 0, 2 * Math.PI);
            crc2.arc(x - 4, y - 40, 6, 0, 2 * Math.PI);
            crc2.arc(x - 6, y - 40, 6, 0, 2 * Math.PI);
            crc2.arc(x + 6, y - 40, 6, 0, 2 * Math.PI);
            crc2.arc(x, y - 48, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
        }
        //Blume2
        function drawBlume2(x: number, y: number): void {
            //Stiel
            crc2.beginPath();
            crc2.fillStyle = "#26a000";
            crc2.fillRect(x, y - 30, 3, 40);
            crc2.closePath();
            crc2.fill();

            //Kopf
            crc2.beginPath();
            crc2.arc(x + 5, y - 33, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "#ea8e04";
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x + 5, y - 25, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "#ea8e04";
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x + 1, y - 38, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "#ea8e04";
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x - 5, y - 33, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "#ea8e04";
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x - 5, y - 25, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "#ea8e04";
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x + 1, y - 30, 4, 0, 2 * Math.PI);
            crc2.fillStyle = "#1e1911";
            crc2.closePath();
            crc2.fill();
        }

        //Blumenwiese random
        for (var i: number = 0; i < 22; i++) {
            let randomBlumenWiese: number = Math.floor((Math.random() * 2) + 0);
            let x: number = Math.floor((Math.random() * (600 - 200)) + 200);
            let y: number = Math.floor((Math.random() * (400 - 350)) + 350);

            switch (randomBlumenWiese) {
                case 0:
                    drawBlume(x, y);
                    break;
                case 1:
                    drawBlume2(x, y);
                    break;
            }
        }
        //Bildspeichern
        imgData = crc2.getImageData(0, 0, 600, 400);

        //Bienenstartpunkt
        for (let i: number = 0; i < n; i++) {
              let b: Bee = { x: 0, y: 0, color: " " };
            b.x = 500;
            b.y = 275;
        }
         //ICH BIN EINE BIENE
        //K�rper
        function drawBiene(_b: Bee): void {
            crc2.beginPath();
            crc2.arc(_b.x, _b.y, 2.25, 0 * Math.PI, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(_b.x + 1, _b.y, 2.25, 0 * Math.PI, 2 * Math.PI);
            crc2.fillStyle = "#e5c300";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(_b.x + 3, _b.y, 2.25, 0 * Math.PI, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(_b.x + 3, _b.y);
            crc2.lineTo(_b.x + 7, _b.y + 1);
            crc2.lineTo(_b.x + 3, _b.y);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.stroke();
}

        window.setTimeout(animation, 2);
        canvas.addEventListener("click", drawnewBiene);

        function drawnewBiene(): void {
            bees.push({ x: 500, y: 275, color: "black" });

        }

        function animation(): void {
            //Bild einsetzen anstelle x=0 y=0
            crc2.putImageData(imgData, 0, 0);

            for (let i: number = 0; i < bees.length; i++) {
                let b: Bee = bees[i];
                b.x += Math.random() * 1.5 - 1; //ver�nderung der Flugbahn
                b.y += Math.random() * 2 - 0.99;

                if (b.x >= 600)
                    b.x = 0;
                if (b.x < 0)
                    b.x = 600;
                if (b.y > 400)
                    b.y = 0;
                if (b.y <= 0)
                    b.y = 400;

                drawBiene(b);
            }
            window.setTimeout(animation, 20); //L�nge
        }
  
        
    }

}
