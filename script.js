let dv = document.getElementById("dv");
let btn = document.getElementById("btn");
let howToBtn = document.getElementById("howToBtn");

function convert() {
    let domDescompuesto = [];
    let dominioBruto = document.getElementById("dominio").value;
    let dominio = dominioBruto.toUpperCase();
    for (caracter of dominio) {
        let equi
        switch (caracter) {
            case "A":
                domDescompuesto.push(1);
                domDescompuesto.push(4);
                break;
            case "B":
                domDescompuesto.push(0);
                domDescompuesto.push(1);
                break;
            case "C":
                domDescompuesto.push(0);
                domDescompuesto.push(0);
                break;
            case "D":
                domDescompuesto.push(1);
                domDescompuesto.push(6);
                break;
            case "E":
                domDescompuesto.push(0);
                domDescompuesto.push(5);
                break;
            case "F":
                domDescompuesto.push(2);
                domDescompuesto.push(0);
                break;
            case "G":
                domDescompuesto.push(1);
                domDescompuesto.push(9);
                break;
            case "H":
                domDescompuesto.push(0);
                domDescompuesto.push(9);
                break;
            case "I":
                domDescompuesto.push(2);
                domDescompuesto.push(4);
                break;
            case "J":
                domDescompuesto.push(0);
                domDescompuesto.push(7);
                break;
            case "K":
                domDescompuesto.push(2);
                domDescompuesto.push(1);
                break;
            case "L":
                domDescompuesto.push(0);
                domDescompuesto.push(8);
                break;
            case "M":
                domDescompuesto.push(0);
                domDescompuesto.push(4);
                break;
            case "N":
                domDescompuesto.push(1);
                domDescompuesto.push(3);
                break;
            case "O":
                domDescompuesto.push(2);
                domDescompuesto.push(5);
                break;
            case "P":
                domDescompuesto.push(2);
                domDescompuesto.push(2);
                break;
            case "Q":
                domDescompuesto.push(1);
                domDescompuesto.push(8);
                break;
            case "R":
                domDescompuesto.push(1);
                domDescompuesto.push(0);
                break;
            case "S":
                domDescompuesto.push(0);
                domDescompuesto.push(2);
                break;
            case "T":
                domDescompuesto.push(0);
                domDescompuesto.push(6);
                break;
            case "U":
                domDescompuesto.push(1);
                domDescompuesto.push(2);
                break;
            case "V":
                domDescompuesto.push(2);
                domDescompuesto.push(3);
                break;
            case "W":
                domDescompuesto.push(1);
                domDescompuesto.push(1);
                break;
            case "X":
                domDescompuesto.push(0);
                domDescompuesto.push(3);
                break;
            case "Y":
                domDescompuesto.push(1);
                domDescompuesto.push(5);
                break;
            case "Z":
                domDescompuesto.push(1);
                domDescompuesto.push(7);
                break;
            default:
                domDescompuesto.push(caracter)
                break
        }
    }
    let array1 = [];
    let array2 = [];
    let suma1 = 0;
    let suma2 = 0;
    let largo = domDescompuesto.length;

    for (i = largo; i >= 0; i--) {
        i--;
        array1.push(domDescompuesto[i]);
    }

    for (i = largo - 1; i > 0; i--) {
        i--;
        array2.push(domDescompuesto[i]);
    }


    array1.forEach(nroString => {
        let nro;
        nro = parseInt(nroString)
        suma1 += nro
    });

    array2.forEach(nroString => {
        let nro;
        nro = parseInt(nroString)
        suma2 += nro
    })


    while (suma1 >= 10) {
        suma1 = (suma1 - 10) + 1
    }
    while (suma2 >= 10) {
        suma2 = (suma2 - 10) + 1
    }


    if (isNaN(suma1) || isNaN(suma2)) {
        dv.classList.remove("ok");
        dv.classList.add("error");
        dv.innerHTML = "Ingrese un dominio válido"

    } else {
        dv.classList.remove("error");
        dv.classList.add("ok")
        dv.innerHTML = `${dominio} es ${suma1}${suma2}`

        }

    domDescompuesto = [];
    array1 = [];
    array2 = [];
}

btn.addEventListener("click",(e)=>{
    convert();
    e.preventDefault();
});

howToBtn.addEventListener("click",(e)=>{
    document.querySelector(".cuerpomain").classList.toggle("hide");
    document.querySelector(".howTo").classList.toggle("hide");
e.preventDefault();

})