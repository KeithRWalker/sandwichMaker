const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const objLoop = (obj) => {
    let objString = '';
    for(let i in obj){
        objString += `<li class="ingLi">`
        objString += `${i}: ${obj[i]}$`
        objString += `<button class="ingBtn btn-danger" id="${i}">Add To Sandwich</button>`
        objString += `</li>`;
        objString += `<br>`
    };
    return objString;
}


export default { printToDom, objLoop };