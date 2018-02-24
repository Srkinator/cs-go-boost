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
    if (selectedTier.value === "Level 1") {
        totalPrice(0, null)
    }
    if (selectedTier.value === "Level 2") {
        totalPrice(15, null)
    }
    if (selectedTier.value === "Level 3") {
        totalPrice(35, null)
    }
    if (selectedTier.value === "Level 4") {
        totalPrice(60, null)
    }
    if (selectedTier.value === "Level 5") {
        totalPrice(90, null)
    }
    if (selectedTier.value === "Level 6") {
        totalPrice(130, null)
    }
    if (selectedTier.value === "Level 7") {
        totalPrice(180, null)
    }

    if (selectedTier.value === "Level 8") {
        totalPrice(245, null)
    }
    if (selectedTier.value === "Level 9") {
        totalPrice(325, null)
    }
    if (selectedTier.value === "Level 10") {
        totalPrice(425, null)
    }

})
desiredTier.addEventListener('click', () => {
    if (desiredTier.value === "Level 1") {
        totalPrice(null, 0)
    }
    if (desiredTier.value === "Level 2") {
        totalPrice(null, 15)
    }
    if (desiredTier.value === "Level 3") {
        totalPrice(null, 35)
    }
    if (desiredTier.value === "Level 4") {
        totalPrice(null, 60)
    }
    if (desiredTier.value === "Level 5") {
        totalPrice(null, 90)
    }
    if (desiredTier.value === "Level 6") {
        totalPrice(null, 130)
    }
    if (desiredTier.value === "Level 7") {
        totalPrice(null, 180)
    }

    if (desiredTier.value === "Level 8") {
        totalPrice(null, 245)
    }
    if (desiredTier.value === "Level 9") {
        totalPrice(null, 325)
    }
    if (desiredTier.value === "Level 10") {
        totalPrice(null, 425)
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
    hasClass = e.target.getAttribute('class');
    if(selectedType.innerHTML === 'FACEIT LEVEL BOOSTING'){
        selectedType.setAttribute('class', 'col-sm-6 selected-boost-type color faceit-level-selector');
        document.querySelector('.faceit-elo-selector').setAttribute('class', 'col-sm-6 selected-boost-type faceit-level-selector');
        document.querySelector('.faceit-elo-boosting').setAttribute('class','hidden faceit-elo-boosting')
        document.querySelector('.faceit-level-boosting').setAttribute('class','faceit-level-boosting')
    }
    if(selectedType.innerHTML === 'FACEIT ELO BOOSTING'){
        selectedType.setAttribute('class', 'col-sm-6 selected-boost-type color faceit-elo-selector');
        document.querySelector('.faceit-level-selector').setAttribute('class', 'col-sm-6 selected-boost-type faceit-level-selector');
        document.querySelector('.faceit-elo-boosting').setAttribute('class','faceit-elo-boosting')
        document.querySelector('.faceit-level-boosting').setAttribute('class','hidden faceit-level-boosting')
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


let counter1 = false;
resultPrice =(e, type) => {
    let elo = parseFloat(currentElo.value);
    let wins = parseFloat(numberOfWins.value)*25;
    let finalElo = wins + elo;
    if(type===false){
        counter1 = false;
    }
    if(type===true){
        counter1=true;
    }
    console.log(type);
    if(elo && wins && finalElo<=2500){
        eloResult.innerHTML = `Elo result : ${finalElo}`;
    }
    
    if(finalElo<=2500 && elo>=800 && elo<=2600 &&numberOfWins.value >0){
        let price = 0;
        for(let i = elo; i<finalElo; i+=25){

            if(i>=800 && i<950){
                price += 3.3;
            }
            if(i>=950 &&i<1100 ){
                price += 4.16;
            }
            if(i>=1100 && i<1250 ){
                price += 5;
            }
            if(i>=1250 && i<1400 ){
                price += 6.6;
            }
            if(i>=1400 && i<1550 ){
                price += 8.3;
            }
            if(i>=1550 && i<1700 ){
                price += 10.8;
            }
            if(i>=1700 && i<1850 ){
                price += 13.3;
            }
            if(i>=1850 && i<2000 ){
                price += 16.6;
            }
            if(i>=2000 && i<2100 ){
                price += 20;
            }
            if(i>=2100 && i<2200 ){
                price += 25;
            }
            if(i>=2200 && i<2300 ){
                price += 30;
            }
            if(i>=2300 && i<2400 ){
                price += 37.5;
            }
            if(i>=2400 && i<2500 ){
                price += 50;
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
    console.log("radi")
    let soloDuo;
        if(document.querySelector('#solo-boost-per-win').checked === true){
            soloDuo = "Solo Boost";
        } else if(document.querySelector('#duo-boost-per-win').checked === true) {
            soloDuo = "Duo Boost";
        } else {
            soloDuo = "Solo Boost";
        }
    
    document.querySelector('#order-current-level').value = `Current Level : ${currentElo.value}`;
    document.querySelector('#order-desired-level').value = `Number of Wins : ${numberOfWins.value}, ELO RESULT : ${eloResult.innerHTML}`;
    document.querySelector('#order-solo-or-duo').value = `Boost Type : ${soloDuo}`;
    document.querySelector('#order-price').value = `Price : ${eloPrice.textContent}`;
} 

document.querySelector('#order-boost-button').addEventListener('click', confirmOrder);
document.querySelector('#order-boost-button-per-win').addEventListener('click', confirmOrderElo);