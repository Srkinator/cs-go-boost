let selectedTier = document.getElementById("selected-tier");
let desiredTier = document.getElementById("desired-tier");
let finalPrice = document.getElementById("final-price");
let duoBoost = document.getElementById("duo-boost");
let soloBoost = document.getElementById("solo-boost");



selectedTier.addEventListener('click', (price1) => {
    if (selectedTier.value === "Silver I") {
        totalPrice(0, null)
    }
    if (selectedTier.value === "Silver II") {
        totalPrice(5, null)
    }
    if (selectedTier.value === "Silver III") {
        totalPrice(10, null)
    }
    if (selectedTier.value === "Silver IV") {
        totalPrice(15, null)
    }
    if (selectedTier.value === "Silver Elite") {
        totalPrice(20, null)
    }
    if (selectedTier.value === "Silver Elite Master") {
        totalPrice(25, null)
    }
    if (selectedTier.value === "Gold Nova I") {
        totalPrice(31, null)
    }
    if (selectedTier.value === "Gold Nova II") {
        totalPrice(37, null)
    }
    if (selectedTier.value === "Gold Nova III") {
        totalPrice(43, null)
    }

    if (selectedTier.value === "Gold Nova Master") {
        totalPrice(49, null)
    }
    if (selectedTier.value === "Master Guardian I") {
        totalPrice(58, null)
    }
    if (selectedTier.value === "Master Guardian II") {
        totalPrice(68, null)
    }
    if (selectedTier.value === "Master Guardian Elite") {
        totalPrice(79, null)
    }
    if (selectedTier.value === "Distinguished Master Guardian") {
        totalPrice(91, null)
    }
    if (selectedTier.value === "Legendary Eagle") {
        totalPrice(106, null)
    }
    if (selectedTier.value === "Legendary Eagle Master") {
        totalPrice(126, null)
    }
    if (selectedTier.value === "Supreme Master First Class") {
        totalPrice(156, null)
    }
    if (selectedTier.value === "Global Elite") {
        totalPrice(206, null)
    }

})
desiredTier.addEventListener('click', () => {
    if (desiredTier.value === "Silver I") {
        totalPrice(null, 0)
    }
    if (desiredTier.value === "Silver II") {
        totalPrice(null, 5)
    }
    if (desiredTier.value === "Silver III") {
        totalPrice(null, 10)
    }
    if (desiredTier.value === "Silver IV") {
        totalPrice(null, 15)
    }
    if (desiredTier.value === "Silver Elite") {
        totalPrice(null, 20)
    }
    if (desiredTier.value === "Silver Elite Master") {
        totalPrice(null, 25)
    }
    if (desiredTier.value === "Gold Nova I") {
        totalPrice(null, 31)
    }
    if (desiredTier.value === "Gold Nova II") {
        totalPrice(null, 37)
    }
    if (desiredTier.value === "Gold Nova III") {
        totalPrice(null, 43)
    }

    if (desiredTier.value === "Gold Nova Master") {
        totalPrice(null, 49)
    }
    if (desiredTier.value === "Master Guardian I") {
        totalPrice(null, 58)
    }
    if (desiredTier.value === "Master Guardian II") {
        totalPrice(null, 68)
    }
    if (desiredTier.value === "Master Guardian Elite") {
        totalPrice(null, 79)
    }
    if (desiredTier.value === "Distinguished Master Guardian") {
        totalPrice(null, 91)
    }
    if (desiredTier.value === "Legendary Eagle") {
        totalPrice(null, 106)
    }
    if (desiredTier.value === "Legendary Eagle Master") {
        totalPrice(null, 126)
    }
    if (desiredTier.value === "Supreme Master First Class") {
        totalPrice(null, 156)
    }
    if (desiredTier.value === "Global Elite") {
        totalPrice(null, 206)
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

    if (a >= b) {
        finalPrice.textContent = "0 €";
    }
    if (duoBoost.checked === true) {
        if (a >= b) {
            finalPrice.textContent = "0 €";
        }
        else {
            c = (b - a) * 1.5;
            finalPrice.textContent = `${c} €`;
            counter = c;
        }
    }
    if (soloBoost.checked === true) {
        if (a >= b) {
            finalPrice.textContent = "0 €";
        }
        else {
            c = (b - a);
            finalPrice.textContent = `${c} €`;
            counter = c;
        }
    }
}

confirmOrder = () =>{
    let soloDuo;
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

document.querySelector('#order-boost-button').addEventListener('click', confirmOrder);