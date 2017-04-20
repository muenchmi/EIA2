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
    }

}