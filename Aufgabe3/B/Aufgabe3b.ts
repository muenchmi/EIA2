//<!-- 
//Aufgabe: Aufgabe 3b
//Name: Michelle Münch
//Matrikel:  254180 
//Datum: 09.04.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
//-->
document.addEventListener("DOMContentLoaded", function(): void{
let karten: string[] = ["Herz As",
"Herz König",
"Herz Dame",
"Herz Bube",
"Herz 10",
"Herz 9",
"Herz 8",
"Herz 7",
"Karo As",
"Karo König",
"Karo Dame",
"Karo Bube",
"Karo 10",
"Karo 9",
"Karo 8",
"Karo 7",
"Pik As",
"Pik König",
"Pik Dame",
"Pik Bube",
"Pik 10",
"Pik 9",
"Pik 8",
"Pik 7",
"Kreuz As",
"Kreuz König",
"Kreuz Bube",
"Kreuz Dame",
"Kreuz 10",
"Kreuz 9",
"Kreuz 8",
"Kreuz 7"
];
 // Karten Text
    div.innerText = karten[n];   
 //Karten vom Stapel in die Hand 
    function nimmeinekarte(): void {
        let div: HTMLDivElement = document.createElement("div");
    document.getElementsByClassName("hkarten").appendChild(div);
        //zufälligeKarte
    let n: number = Math.round(Math.random()* karten.length);
    }
    
 //(max. 5)
    let hand: HTMLElement= document.getElementsByClassName("hand");
    hand.addEventListener("click", function(): void {
        //max 5
        let kartenaufderhand: number = document.getElementsByClassName("hkarten");
        if (kartenaufderhand < 5) {
            nimmeinekarte();}
 //Karten weglegen
     div.addEventListener("click", function(): void {
         let kartenweg: string [] = [];
         let kartenwert: string = div.innerText;
         let kartenhaufen: number = kartenweg.push(kartenwert);
         
         document.getElementByClassName("weg").innerText= kartenwert;
         
 //Divlöschen
         div.parentNode.removeChild(div);
     });
          
         
       }); 
            
   
    
    
    
   