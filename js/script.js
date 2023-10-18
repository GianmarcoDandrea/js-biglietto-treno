// RACCOLTA DATI
const userKm = parseFloat(prompt("Inserisci i km da percorrere"));
const userAge = parseFloat(prompt("Inserisci la tua età"));
console.log(userKm, userAge)


// LOGICA
const elderAge = 65;
const elderDiscount = (60 / 100);
const minorAge = 18;
const minorDiscount = (80 / 100);
const normalPrice = userKm * 0.21;
let totalPrice = "";

if (userAge > elderAge) {
    totalPrice = elderDiscount * normalPrice;
} else if (userAge < minorAge) {
    totalPrice = minorDiscount * normalPrice;
} else {
    totalPrice = normalPrice;
}
console.log(totalPrice);

const message = totalPrice.toFixed(2);

console.log(message);

document.getElementById("price").innerHTML = message + "€";


