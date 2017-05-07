namespace StudiVZ {
    interface StudentData {
        matrikelnum: number;
        name: string;
        vorname: string;
        alter: number;
        sex: boolean;
        kommi: string;
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Daten anlegen mit 'n' abfragen mit 'a' oder Programm beenden mit 's' (n,a oder s eingeben)");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe von Matrikelnummer, Name, Vorname, Alter, Geschlecht (1 für weiblich oder 0 für männlich) und Kommentar");
                alert(saveData(input)); 
                break;
            case "a":
            case "A":
                var matrikelnum: number = parseInt(prompt("Eingabe Matrikelnummer")); 
                alert(queryData(matrikelnum));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let dataArr: string[] = _input.split(","); 
        let s: StudentData = {                      
            matrikelnum: parseInt(dataArr[0]),         
            name: dataArr[1],
            vorname: dataArr[2],
            alter: parseInt(dataArr[3]),
            sex: parseInt(dataArr[4]) == 1,
            kommi: dataArr[5]
        };

        students.push(s);  

        let gender: string;
        if (parseInt(dataArr[4]) == 1) {  
            gender = "weiblich";
        }
        else {                      
            gender = "männlich";
        }

        //Ausgabe
        return "Noch nicht vorhanden";
    }

    function queryData(_matrikel: number): string {

        for (let i: number = 0; i < students.length; i++) {  

            if (students[i].matrikelnum == matrikelnum) {         
                let gender: string = students[i].sex ? "weiblich" : "männlich"; 
                return "Noch nicht vorhanden";
            }

            else {               
                return "Diese Matrikelnummer gibt es nicht";
            }
        }
    }
}