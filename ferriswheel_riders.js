// initalize the count as 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


//listen for clicks on the increment button
function increment() {
    count += 1
    countEl.textContent = count
    
}


//create a function save() which logs out the count when its called
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}



//set counter back to 0 after clicking save

