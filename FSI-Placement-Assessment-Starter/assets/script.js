// HINT: You can delete this console.log after you no longer need it! DONE
console.log('JavaScript code has loaded!')

// First, tell us your name DONE
let yourName = "Jacob Garcia" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type DONE
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let Quantity1 = 1
let Quantity2 = 1
let Quantity3 = 1
let overallTotal = gb + cc + sugar

function updateQuantity1(gb) {
    let gbTotal = document.querySelector("qty-gb");
    gb.textContent = displayQuantity1;
    overallTotal.textContent = `Total: $(overallTotal)`;
}

function updateQuantity2(cc) {
    let ccTotal = document.querySelector("qty-cc");
    cc.textContent = displayQuantity2;
    overallTotal.textContent = `Total: $(overallTotal)`;
}

function updateQuantity3(sugar) {
    let sugarTotal = document.querySelector("qty-sugar");
    sugar.textContent = displayQuantity3;
    overallTotal.textContent = `Total: $(overallTotal)`;
}

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// selecting the element with an id of add-gb DONE
const gbPlusBtn = document.querySelector("#add-gb")
const gbMinusBtn = document.querySelector("#minus-gb")
const ccPlusBtn = document.querySelector("#add-cc")
const ccMinusBtn = document.querySelector("#minus-cc")
const sugarPlusBtn = document.querySelector("#add-sugar")
const sugarMinusBtn = document.querySelector("#minus-sugar")


// Code to update name display DONE
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function (e) {
    gb++;
    overallTotal++;
    updateQuantity1(`Quantitygb: ${gb}`);
});

gbMinusBtn.addEventListener("click", function (e) {
    if (gb > 0) {
        gb--;
        overallTotal--;
    updateQuantity1(`Quantitygb: ${gb}`);
    }
});

ccPlusBtn.addEventListener("click", function (e) {
    cc++;
    overallTotal++;
    updateQuantity2(`Quantitycc: ${cc}`);
});

ccMinusBtn.addEventListener("click", function (e) {
    if (cc > 0) {
        cc--;
        overallTotal--;
    updateQuantity2(`Quantitycc: ${cc}`);
    }
});

sugarPlusBtn.addEventListener("click", function (e) {
    sugar++;
    overallTotal++;
    updateQuantity3(`Quantitysugar: ${sugar}`);
});

sugarMinusBtn.addEventListener("click", function (e) {
    if (sugar > 0) {
        sugar--;
        overallTotal--;
    updateQuantity3(`Quantitysugar: ${sugar}`);
    }
});

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
