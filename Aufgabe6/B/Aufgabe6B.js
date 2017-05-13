var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Daten anlegen mit 'n' abfragen mit 'a' oder Programm beenden mit 's' (n,a oder s eingeben)");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe von Matrikelnummer, Name, Vorname, Alter, Geschlecht (1 f�r weiblich oder 0 f�r m�nnlich) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikelnum = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikelnum));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let dataArr = _input.split(",");
        let s = {
            matrikelnum: parseInt(dataArr[0]),
            name: dataArr[1],
            vorname: dataArr[2],
            alter: parseInt(dataArr[3]),
            sex: parseInt(dataArr[4]) == 1,
            kommi: dataArr[5]
        };
        students.push(s);
        let gender;
        if (parseInt(dataArr[4]) == 1) {
            gender = "weiblich";
        }
        else {
            gender = "m�nnlich";
        }
        //Ausgabe
        return "Noch nicht vorhanden";
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikelnum == matrikelnum) {
                let gender = students[i].sex ? "weiblich" : "m�nnlich";
                return "Noch nicht vorhanden";
            }
            else {
                return "Diese Matrikelnummer gibt es nicht";
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=Aufgabe6B.js.map