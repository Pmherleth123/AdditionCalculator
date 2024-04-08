let numbersToAdd = []
// let sum = 0
let mySum = 0


console.log(numbersToAdd)

function addToArray(i){
    //add i to the array numberss to add
    console.log("currenlty sum is: " + mySum)
    numbersToAdd.push(i);
    
}

function sum()   {
    for(let i = 0; i < numbersToAdd.length; ++i ) {
        let value = numbersToAdd[i]
        mySum = mySum + value
    }

    console.log("currenlty sum is: " + mySum)
    
}

function displayData() {
    sum()
    const display = document.getElementById("textBox");
    display.textContent = `${mySum}`
    if (display.textContent !== ""){
        numbersToAdd = []
        mySum = 0
    }
}

function buttons() {
    for(let i = 0; i < 10; ++i) {
        const newButton = document.createElement('button');
        newButton.textContent = i;
        newButton.addEventListener("click", addToArray.bind(null, i))
        document.body.appendChild(newButton);
    }
    const newButton = document.createElement('button');
    newButton.textContent = "="
    document.body.appendChild(newButton);
    newButton.addEventListener("click", displayData);
}

function runProgram(){
    buttons()

}

document.addEventListener('DOMContentLoaded', runProgram)
