//<!-- 
//Aufgabe: Aufgabe 3b
//Name: Michelle M�nch
//Matrikel:  254180 
//Datum: 09.04.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert
//hatte hilfe von Janett St�we.
//-->
var deck;
var cards;
var hkarten;
var ablage;
document.addEventListener("DOMContentLoaded", function () {
    deck = document.getElementById("deck");
    deck.addEventListener("click", addhkarten);
    var cards = ["Herz As",
        "Herz K�nig",
        "Herz Dame",
        "Herz Bube",
        "Herz 10",
        "Herz 9",
        "Herz 8",
        "Herz 7",
        "Karo As",
        "Karo K�nig",
        "Karo Dame",
        "Karo Bube",
        "Karo 10",
        "Karo 9",
        "Karo 8",
        "Karo 7",
        "Pik As",
        "Pik K�nig",
        "Pik Dame",
        "Pik Bube",
        "Pik 10",
        "Pik 9",
        "Pik 8",
        "Pik 7",
        "Kreuz As",
        "Kreuz K�nig",
        "Kreuz Bube",
        "Kreuz Dame",
        "Kreuz 10",
        "Kreuz 9",
        "Kreuz 8",
        "Kreuz 7"
    ];
    hkarten = document.getElementsByClassName("hkarten");
    for (var x = 0; x < hkarten.length; x++) {
        hkarten[x].addEventListener("click", addablage);
    }
    ablage = document.getElementById("ablage");
});
function addhkarten() {
    var randomCard = cards.splice(Math.round(Math.random() * (cards.length - 1)), 1)[0]; //auf eine Karte zugreifen diese nehmen und genau diese aus dem Stapel/ Array l�schen
    var freeHand = findEmpty();
    if (freeHand != null) {
        freeHand.innerText = randomCard;
    }
    if (cards.length === 0) {
        deck.style.display = "none";
    }
}
function findEmpty() {
    for (var i = 0; i < hkarten.length; i++) {
        if (hkarten[i].textContent === "") {
            return hkarten[i];
        }
    }
    return null;
}
function addablage(_event) {
    var element = _event.target;
    ablage.textContent = element.textContent;
    element.textContent = "";
}
//# sourceMappingURL=Aufgabe3b.js.map