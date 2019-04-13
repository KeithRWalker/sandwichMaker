const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

// const objLoop = (obj) => {
//     let prop='';
//     let val='';
//     let result='';
//     for(let i in obj){
//         val = obj[i];
//         prop = i;
//         result += `<p>${prop}: ${val}</p>`;
//     };
//     return result;
// };


export default { printToDom };