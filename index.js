const ruutu = document.querySelectorAll('.ruutu');
const pisteet1Span = document.querySelector('.pisteet1');
const pisteet2Span = document.querySelector('.pisteet2');
const ressutBtn = document.querySelector('.ressu');

const Voittomahdollisuudet = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6],
]

let pelaaja1 = [];
let pelaaja2 = [];

let pisteet = {
    pelaaja1: 0,
    pelaaja2: 0,
}

let flag = true;

for (let i = 0; i < ruutu.length; i++) {
    ruutu[i].addEventListener('click', () => {
        if (flag === true) {
            if (ruutu[i].innerHTML === "")
                LisaaruudutPelaajalle1(i);
        } else {
            if (ruutu[i].innerHTML === "")
                LisaaruudutPelaajalle2(i);
        }
        Tarkistavoittaja();
    })
}

function LisaaruudutPelaajalle1(i) {
    ruutu[i].innerHTML = "X";
    pelaaja1.push(i);
    flag = false;
}
function LisaaruudutPelaajalle2(i) {
    ruutu[i].innerHTML = "O";
    pelaaja2.push(i);
    flag = true;
}

function Tarkistavoittaja() {
    Voittomahdollisuudet.find((item) => {
        if (item.filter((i) => pelaaja1.includes(i)).length === 3) {
            alert("Pelaaja 1 voitti pelin");
            pisteet.pelaaja1++;
            naytaPisteet();
            siivoaAlue();
            return item;
        } else if (item.filter((i) => pelaaja2.includes(i)).length === 3) {
            alert("Pelaaja 2 voitti pelin");
            pisteet.pelaaja2++;
            naytaPisteet();
            siivoaAlue();
        }
        return
    })
}

function naytaPisteet() {
    pisteet1Span.innerHTML = "Pelaaja 1: " + pisteet.pelaaja1;
    pisteet2Span.innerHTML = "Pelaaja 2: " + pisteet.pelaaja2;
}
naytaPisteet()

function siivoaAlue() {
    for (let i = 0; i < ruutu.length; i++) {
        ruutu[i].innerHTML = "";
    }
    pelaaja1 = [];
    pelaaja2 = [];
    flag = true;
}

ressutBtn.addEventListener('click', () => {
    siivoaAlue();
})