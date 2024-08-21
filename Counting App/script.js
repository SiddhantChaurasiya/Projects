let constValue = document.querySelector('#counter');

const increment = () => {
    // get the value from UI
    let value = parseInt(constValue.innerText);
    // update the value
    value = value + 1;
    // set the value into UI 
    constValue.innerText = value;
}

const decrement = () => {
    // get the value from UI
    let value = parseInt(constValue.innerText);
    // update the value
    value = value - 1;
    // set the value into UI 
    constValue.innerText = value;
}