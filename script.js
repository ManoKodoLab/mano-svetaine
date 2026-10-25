 function atimti() {
            if (paspaudimai > 0) {
                paspaudimai = paspaudimai - 2;
            }

            document.getElementById("skaicius").textContent = paspaudimai;

            if (paspaudimai >= 20) {
                document.getElementById("skaicius").style.color = "red";
            } else {
                document.getElementById("skaicius").style.color = "green";
            }
        }
        function nunulinti() {
            paspaudimai = 0;
            document.getElementById("skaicius").textContent = paspaudimai;
            document.getElementById("skaicius").style.color = "black";
        }
        let paspaudimai = 0;
        
        function skaiciuoti() {
            paspaudimai = paspaudimai + 2;
            document.getElementById("skaicius").textContent = paspaudimai;

            if (paspaudimai >= 20) {
                document.getElementById("skaicius").style.color = "red";
            } else {
                document.getElementById("skaicius").style.color = "green";
            }
        }
        function keistiSpalva() {
            const spalvos = [
                "red",
                "yellow",
                "lightgreen",
                "lightblue",
                "pink"
            ];

            const skaicius = Math.floor(
                Math.random() * spalvos.length
            );

            document.body.style.backgroundColor = spalvos[skaicius];
        }
        function pakeistiTeksta() {
            document.getElementById("antraste").innerText = "Aš jau moku JavaScript!";
        }
       function pasisveikinti() {
        let vardas = document.getElementById("vardas").value.trim();
        let zinute = document.getElementById("zinute");

        if (vardas === "") {
            zinute.textContent = "Pirmiausiai įvesk vardą!";
            zinute.style.color = "red";
        } else {
            zinute.textContent = "Labas, " + vardas + "! Smagu tave matyti!";
            zinute.style.color = "green";
        }
       }