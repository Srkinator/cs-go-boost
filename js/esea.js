let selectedTier = document.getElementById("selected-tier");
let desiredTier = document.getElementById("desired-tier");
let finalPrice = document.getElementById("final-price");
let duoBoost = document.getElementById("duo-boost");
let soloBoost = document.getElementById("solo-boost");
let currentElo = document.querySelector('#current-elo');
let numberOfWins = document.querySelector('#number-of-wins');
let eloResult = document.querySelector('#elo-result');
let eloPrice = document.querySelector('#final-elo-price');


selectedTier.addEventListener('click', (price1) => {
    if (selectedTier.value === "D-") {
        totalPrice(0, null)
    }
    if (selectedTier.value === "D") {
        totalPrice(15, null)
    }
    if (selectedTier.value === "D+") {
        totalPrice(32, null)
    }
    if (selectedTier.value === "C-") {
        totalPrice(52, null)
    }
    if (selectedTier.value === "C") {
        totalPrice(75, null)
    }
    if (selectedTier.value === "C+") {
        totalPrice(101, null)
    }
    if (selectedTier.value === "B-") {
        totalPrice(131, null)
    }
    if (selectedTier.value === "B") {
        totalPrice(166, null)
    }
    if (selectedTier.value === "B+") {
        totalPrice(206, null)
    }

    if (selectedTier.value === "A-") {
        totalPrice(256, null)
    }
    if (selectedTier.value === "A") {
        totalPrice(321, null)
    }
    if (selectedTier.value === "A+") {
        totalPrice(406, null)
    }

})
desiredTier.addEventListener('click', () => {
    if (desiredTier.value === "D-") {
        totalPrice(null, 0)
    }
    if (desiredTier.value === "D") {
        totalPrice(null, 15)
    }
    if (desiredTier.value === "D+") {
        totalPrice(null, 32)
    }
    if (desiredTier.value === "C-") {
        totalPrice(null, 52)
    }
    if (desiredTier.value === "C") {
        totalPrice(null, 75)
    }
    if (desiredTier.value === "C+") {
        totalPrice(null, 101)
    }
    if (desiredTier.value === "B-") {
        totalPrice(null, 131)
    }
    if (desiredTier.value === "B") {
        totalPrice(null, 166)
    }
    if (desiredTier.value === "B+") {
        totalPrice(null, 206)
    }

    if (desiredTier.value === "A-") {
        totalPrice(null, 265)
    }
    if (desiredTier.value === "A") {
        totalPrice(null, 321)
    }
    if (desiredTier.value === "A+") {
        totalPrice(null, 406)
    }

})

let a = 0;
let b = 0;
let c = 0;
let radio = false;
let counter = 0;

duoBoost.addEventListener('click', () => {
    if (finalPrice.textContent.length == 3) {
        if (radio === false) {
            counter = Number(finalPrice.textContent.slice(0, 2));
            finalPrice.textContent = `${Number(finalPrice.textContent.slice(0, 2)) * 1.5} €`;
            radio = true;
        }
    }
    if (finalPrice.textContent.length == 4) {
        if (radio === false) {
            counter = Number(finalPrice.textContent.slice(0, 3));
            finalPrice.textContent = `${Number(finalPrice.textContent.slice(0, 3)) * 1.5} €`;
            radio = true;
        }
    }
    if (finalPrice.textContent.length == 5) {
        if (radio === false) {
            counter = Number(finalPrice.textContent.slice(0, 4));
            finalPrice.textContent = `${Number(finalPrice.textContent.slice(0, 4)) * 1.5} €`;
            radio = true;
        }
    }
})
soloBoost.addEventListener('click', () => {
    if (radio === true) {
        finalPrice.textContent = `${counter} €`
        radio = false;
        totalPrice(a, b)
    }
})
totalPrice = (price1, price2) => {

    if (price1 == null) {
        b = price2
    }

    if (price2 == null) {
        a = price1;
    }

    if (b > a) {
        finalPrice.textContent = `${b - a} €`;
    }

    if (a > b) {
        finalPrice.textContent = "0 €";
    }
    if (duoBoost.checked === true) {
        if (a > b) {
            finalPrice.textContent = "0 €";
        }
        else {
            c = (b - a) * 1.5;
            finalPrice.textContent = `${c} €`;
            counter = c;
        }
    }
    if (soloBoost.checked === true) {
        if (a > b) {
            finalPrice.textContent = "0 €";
        }
        else {
            c = (b - a);
            finalPrice.textContent = `${c} €`;
            counter = c;
        }
    }
}

displaySelectedBoost=(e)=>{
    selectedType =e.target;
    if(selectedType.innerHTML === 'ESEA RANK BOOSTING'){
        selectedType.setAttribute('class', 'col-sm-6 selected-boost-type color faceit-level-selector');
        document.querySelector('.faceit-elo-selector').setAttribute('class', 'col-sm-6 selected-boost-type faceit-level-selector');
        document.querySelector('.faceit-elo-boosting').setAttribute('class','hidden faceit-elo-boosting')
        document.querySelector('.faceit-level-boosting').setAttribute('class','faceit-level-boosting')
        eseaRANK = true;
    }
    if(selectedType.innerHTML === 'ESEA WIN BOOSTING'){
        selectedType.setAttribute('class', 'col-sm-6 selected-boost-type color faceit-elo-selector');
        document.querySelector('.faceit-level-selector').setAttribute('class', 'col-sm-6 selected-boost-type faceit-level-selector');
        document.querySelector('.faceit-elo-boosting').setAttribute('class','faceit-elo-boosting')
        document.querySelector('.faceit-level-boosting').setAttribute('class','hidden faceit-level-boosting')
        eseaRANK = false;
    }
}

eloHandler =(e) =>{
    if(e.target.value === "solo"){
        this.resultPrice(null, false)
    }
    if(e.target.value === "duo"){
        this.resultPrice(null,true)
    }
}

let eseaRANK = true;
let counter1 = false;
resultPrice =(e, type) => {
    let elo = currentElo.value;
    let wins = parseFloat(numberOfWins.value);
    if(type===false){
        counter1 = false;
    }
    if(type===true){
        counter1=true;
    }
    
    if(!regex.test(wins)){
        if(numberOfWins.value ===""){
            null
        } else {
        alert("Number of wins must be between 1 and 4!");
        }
    }
    if(wins>0 &&wins<=4){
        let price = 0;
        for(let i =0; i<wins; i++){

            if(elo==="D-"){
                price += 4;
            }
            if(elo==="D"){
                price += 4.5;
            }
            if(elo==="D+"){
                price += 5;
            }
            if(elo==="C-" ){
                price += 5.75;
            }
            if(elo==="C" ){
                price += 6.5;
            }
            if(elo==="C+" ){
                price += 7.5;
            }
            if(elo==="B-"){
                price += 8.75;
            }
            if(elo==="B"){
                price += 10;
            }
            if(elo==="B+" ){
                price += 12.5;
            }
            if(elo==="A-" ){
                price += 15;
            }
            if(elo==="A" ){
                price += 18;
            }
            if(elo==="A+" ){
                price += 23;
            }
        }
        if(counter1 === false){
        eloPrice.innerHTML = `Total Price : ${price.toFixed(1).toString()}`;
        }
        if(counter1 ===true){
            eloPrice.innerHTML = `Total Price : ${(price*1.5).toFixed(1).toString()}`;
        }
        
    }
}

currentElo.addEventListener('keyup', resultPrice);
currentElo.addEventListener('change', resultPrice);
numberOfWins.addEventListener('keyup',  resultPrice);
numberOfWins.addEventListener('change',  resultPrice);
document.querySelectorAll('.selected-boost-type')[0].addEventListener('click', displaySelectedBoost)
document.querySelectorAll('.selected-boost-type')[1].addEventListener('click', displaySelectedBoost)
document.querySelectorAll('input[name="inlineRadioOptionsElo"]')[0].addEventListener('click', eloHandler)
document.querySelectorAll('input[name="inlineRadioOptionsElo"]')[1].addEventListener('click', eloHandler)

var regex = new RegExp('^[1-4]$');


confirmOrder = () =>{
    let soloDuo;
    if(eseaRANK===true){
        if(soloBoost.checked === true){
            soloDuo = "Solo Boost";
        } else if(duoBoost.checked === true) {
            soloDuo = "Duo Boost";
        } else {
            soloDuo = "Solo Boost";
        }
    
    document.querySelector('#order-current-level').value = `Current Level : ${selectedTier.value}`;
    document.querySelector('#order-desired-level').value = `Desired Level : ${desiredTier.value}`;
    document.querySelector('#order-solo-or-duo').value = `Boost Type : ${soloDuo}`;
    document.querySelector('#order-price').value = `Price : ${finalPrice.textContent}`;
    }
} 

confirmOrderElo = () =>{
    let soloDuo;
        if(document.querySelector('#solo-boost-per-win').checked === true){
            soloDuo = "Solo Boost";
        } else if(document.querySelector('#duo-boost-per-win').checked === true) {
            soloDuo = "Duo Boost";
        } else {
            soloDuo = "Solo Boost";
        }
    
    document.querySelector('#order-current-level').value = `Current Level : ${currentElo.value}`;
    document.querySelector('#order-desired-level').value = `Number of Wins : ${numberOfWins.value}`;
    document.querySelector('#order-solo-or-duo').value = `Boost Type : ${soloDuo}`;
    document.querySelector('#order-price').value = `Price : ${eloPrice.textContent}`;
} 

document.querySelector('#order-boost-button').addEventListener('click', confirmOrder);
document.querySelector('#order-boost-button-per-win').addEventListener('click', confirmOrderElo);
