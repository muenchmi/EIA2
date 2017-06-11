namespace Aufgabe9Eis {
    window.addEventListener("load", init);

    let darreichungsform: string[] = ["Waffel", "Becher"];
    let eissorten: string[] = ["Schokolade", "Straciatella", "Vanille", "Erdbeere", "Melone", "Mango", "Himbeere", "Himbeerjoguht", "Joghurt", "Kokusnuss", "Haselnuss", "Zitrone"];
    let toppings: string[] = ["Sahne", "Schokostreusel", "Bunte Streusel", "Schokosoße", "Vanillesoße", "Erdbeersoße"];
    let eissortenInput: HTMLInputElement[] = [];
    let toppingsInput: HTMLInputElement[] = [];
    let darreichungsformInput: HTMLInputElement[] = [];
    //HTMLElemente        
    let Eissorten: HTMLElement;
    let Toppings: HTMLElement;
    let Darreichungsform: HTMLElement;
    let Bestellung: HTMLElement;
    let Button: HTMLElement;

    function init(): void {

        Eissorten = document.getElementById("Eissorten");
        Toppings = document.getElementById("Toppings");
        Darreichungsform = document.getElementById("Behaelter");
        Bestellung = document.getElementById("Bestellung");
        Button = document.getElementById("Button");

        createInputs();

        Eissorten.addEventListener("change", change);
        Toppings.addEventListener("change", change);
        Darreichungsform.addEventListener("change", change);
        Button.addEventListener("click", Daten);
    }

    function createInputs(): void {

        for (let i: number = 0; i < eissorten.length; i++) {
            createCounter(eissorten[i]);
        }
        for (let i: number = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
        for (let i: number = 0; i < darreichungsform.length; i++) {
            createRadio(darreichungsform[i]);
        }
    }

    function createCounter(_eissorten: string): void {

        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");


        label.innerText = _eissorten;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "0";


        Eissorten.appendChild(label);
        eissortenInput.push(input);
    }

    function createCheckbox(_toppings: string): void {

        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");


        label.innerText = _toppings;
        label.appendChild(input);
        input.type = "checkbox";


        Toppings.appendChild(label);
        toppingsInput.push(input);
    }

    function createRadio(_darreichungsform: string): void {

        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");


        label.innerText = _darreichungsform;
        label.appendChild(input);
        input.type = "radio";
        input.required = true;


        Darreichungsform.appendChild(label);
        darreichungsformInput.push(input);
    }

    function showBestellung(_summe: number): void {

        document.getElementById("Eissorten").innerText = "";
        document.getElementById("Extra").innerText = "";
        document.getElementById("Darreichungsform").innerText = "";

        for (let i: number = 0; i < toppingsInput.length; i++) {
            if (toppingsInput[i].checked) {
                document.getElementById("Extra").innerText += toppings[i] + " 0.50 Euro" + "\n";
            }
        }
        for (let i: number = 0; i < eissortenInput.length; i++) {
            if (parseInt(eissortenInput[i].value) > 0) {
                document.getElementById("Eissorten").innerText += eissorten[i] + " " + ": " + (parseInt(eissortenInput[i].value) * 1) + "\n";
            }
        }
        for (let i: number = 0; i < darreichungsformInput.length; i++) {
            if (darreichungsformInput[i].checked) {
                document.getElementById("Darreichungsform").innerText += darreichungsform[i] + "\n";
            }
        }

        document.getElementById("Summe").innerText = _summe.toString() + " Euro";
    }



    function Daten(): void {

        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("Name");
        let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("Vorname");
        let mail: HTMLInputElement = <HTMLInputElement>document.getElementById("E-Mail");
        let strasse: HTMLInputElement = <HTMLInputElement>document.getElementById("Straße");
        let hausnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("Hausnummer");
        let postleitzahl: HTMLInputElement = <HTMLInputElement>document.getElementById("Postleitzahl");
        let ort: HTMLInputElement = <HTMLInputElement>document.getElementById("Ort");
        let telefonnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("Telefonnummer");

        if (postleitzahl.value.length != 5) {
            alert("Überprüfen Sie ihre Postleitzahl");
        }

        if (hausnummer.value.length > 4) {
            alert("Überprüfen Sie ihre Hausnummer.");
        }

        else {
            alert("Vielen Dank für ihre Bestellung!");
        }

    }

    function change(): void {
        let summe: number = 0;
        for (let i: number = 0; i < eissortenInput.length; i++) {
            summe += parseInt(eissortenInput[i].value);
        }
        for (let i: number = 0; i < toppingsInput.length; i++) {
            if (toppingsInput[i].checked)
                summe += 0.5;
        }


        showBestellung(summe);

    }
}




