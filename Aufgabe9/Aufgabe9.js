var Aufgabe9Eis;
(function (Aufgabe9Eis) {
    window.addEventListener("load", init);
    let darreichungsform = ["Waffel", "Becher"];
    let eissorten = ["Schokolade", "Straciatella", "Vanille", "Erdbeere", "Melone", "Mango", "Himbeere", "Himbeerjoguht", "Joghurt", "Kokusnuss", "Haselnuss", "Zitrone"];
    let toppings = ["Sahne", "Schokostreusel", "Bunte Streusel", "Schokoso�e", "Vanilleso�e", "Erdbeerso�e"];
    let eissortenInput = [];
    let toppingsInput = [];
    let darreichungsformInput = [];
    //HTMLElemente        
    let Eissorten;
    let Toppings;
    let Darreichungsform;
    let Bestellung;
    let Button;
    function init() {
        Eissorten = document.getElementById("Eissorten");
        Toppings = document.getElementById("Toppings");
        Darreichungsform = document.getElementById("Behaelter");
        Bestellung = document.getElementById("Bestellung");
        Button = document.getElementById("Button");
        createInputs();
        Eissorten.addEventListener("change", change);
        Toppings.addEventListener("change", change);
        Darreichungsform.addEventListener("change", change);
        Button.addEventListener("click", DatenPruefen);
    }
    function createInputs() {
        for (let i = 0; i < eissorten.length; i++) {
            createCounter(eissorten[i]);
        }
        for (let i = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
        for (let i = 0; i < darreichungsform.length; i++) {
            createRadio(darreichungsform[i]);
        }
    }
    function createCounter(_eis) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        label.innerText = _eis;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "0";
        Eissorten.appendChild(label);
        eissortenInput.push(input);
    }
    function createCheckbox(_topping) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        label.innerText = _topping;
        label.appendChild(input);
        input.type = "checkbox";
        Toppings.appendChild(label);
        toppingsInput.push(input);
    }
    function createRadio(_behaelter) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        label.innerText = _behaelter;
        label.appendChild(input);
        input.type = "radio";
        input.required = true;
        Darreichungsform.appendChild(label);
        darreichungsformInput.push(input);
    }
    function showBestellung(_summe) {
        document.getElementById("Eissorten").innerText = "";
        document.getElementById("Extra").innerText = "";
        document.getElementById("Darreichungsform").innerText = "";
        for (let i = 0; i < toppingsInput.length; i++) {
            if (toppingsInput[i].checked) {
                document.getElementById("Extra").innerText += toppings[i] + " 0.50 Euro" + "\n";
            }
        }
        for (let i = 0; i < eissortenInput.length; i++) {
            if (parseInt(eissortenInput[i].value) > 0) {
                document.getElementById("Eissorten").innerText += eissorten[i] + " " + ": " + (parseInt(eissortenInput[i].value) * 1) + "\n";
            }
        }
        for (let i = 0; i < darreichungsformInput.length; i++) {
            if (darreichungsformInput[i].checked) {
                document.getElementById("Darreichungsform").innerText += darreichungsform[i] + "\n";
            }
        }
        document.getElementById("Summe").innerText = _summe.toString() + " Euro";
    }
    function DatenPruefen() {
        let name = document.getElementById("Name");
        let vorname = document.getElementById("Vorname");
        let mail = document.getElementById("E-Mail");
        let strasse = document.getElementById("Stra�e");
        let hausnummer = document.getElementById("Hausnummer");
        let postleitzahl = document.getElementById("Postleitzahl");
        let ort = document.getElementById("Ort");
        let telefonnummer = document.getElementById("Telefonnummer");
        if (postleitzahl.value.length != 5) {
            alert("�berpr�fen Sie ihre Postleitzahl");
        }
        if (hausnummer.value.length > 4) {
            alert("�berpr�fen Sie ihre Hausnummer.");
        }
        else {
            alert("Vielen Dank f�r ihre Bestellung!");
        }
    }
    function change() {
        let summe = 0;
        for (let i = 0; i < eissortenInput.length; i++) {
            summe += parseInt(eissortenInput[i].value);
        }
        for (let i = 0; i < toppingsInput.length; i++) {
            if (toppingsInput[i].checked)
                summe += 0.5;
        }
        showBestellung(summe);
    }
})(Aufgabe9Eis || (Aufgabe9Eis = {}));
//# sourceMappingURL=Aufgabe9.js.map