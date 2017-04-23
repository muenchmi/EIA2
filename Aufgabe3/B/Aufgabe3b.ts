//<!-- 
//Aufgabe: Aufgabe 3b
//Name: Michelle Münch
//Matrikel:  254180 
//Datum: 09.04.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert
//hatte hilfe von Janett Stüwe.
//-->
    let deck: HTMLElement;
    let cards: string[];
    let hkarten: NodeListOf<HTMLDivElement>;
    let ablage: HTMLDivElement;
    document.addEventListener("DOMContentLoaded", function(): void {
        deck = document.getElementById("deck");
        deck.addEventListener("click", addhkarten);
        let cards: string[] = ["Herz As",
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
        hkarten = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("hkarten");
        for (let x: number = 0; x < hkarten.length; x++) {
            hkarten[x].addEventListener("click", addablage);
        }
        ablage = <HTMLDivElement>document.getElementById("ablage");

    });

    function addhkarten(): void {

        let randomCard: string = cards.splice(Math.round(Math.random() * (cards.length - 1)), 1)[0];
        let freeHand: HTMLDivElement = findEmpty();
        if (freeHand != null) {
            freeHand.innerText = randomCard;
        }

        if (cards.length === 0) {
            deck.style.display = "none";
        }
    }
    function findEmpty(): HTMLDivElement {

        for (let i: number = 0; i < hkarten.length; i++) {
            if (hkarten[i].textContent === "") { //wenn Inhalt drin ist 
                return hkarten[i];
            }
        }

        return null;
    }

    function addablage(_event: Event): void {
        let element: HTMLDivElement = <HTMLDivElement>_event.target;
        ablage.textContent = element.textContent;
        element.textContent = "";

    }







