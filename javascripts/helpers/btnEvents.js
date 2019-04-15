import importBread from '../ingredients/bread.js';
import importCheese from '../ingredients/cheese.js';
import importCondiment from '../ingredients/condiment.js';
import importMeat from '../ingredients/meat.js';
import importVeggie from '../ingredients/veggie.js';
import util from './util.js';

const getBread = importBread.getBread();
const getCheese = importCheese.getCheese();
const getCondiment = importCondiment.getCondiment();
const getMeat = importMeat.getMeat();
const getVeggie = importVeggie.getVeggie();

let nameArray = [];
let priceArray = [];

const reducer = (accumulator, currentValue) => accumulator + currentValue;


const addEvents = () => {
    const addIngBtn = document.getElementsByClassName('ingBtn');
    for(let i = 0; i<addIngBtn.length; i++){
        addIngBtn[i].addEventListener('click', addIngredients);
    }
}

const addIngredients = (e) => {
    e.preventDefault();
    const ing = e.target.id;
    let sandwichString = '';
    let sandwichPrice = 0;
    for(let i in getBread){
        if(i===ing){
            sandwichString += `<li>${i}:${getBread[i]}$</li>`;
            sandwichPrice += getBread[i];
            nameArray.push(sandwichString);
            priceArray.push(sandwichPrice);
        }
    };

    for(let i in getCheese){
        if(i===ing){
            sandwichString += `<li>${i}: ${getCheese[i]}$</li>`;
            sandwichPrice += getCheese[i];
            nameArray.push(sandwichString);
            priceArray.push(sandwichPrice);
        }
    };

    for(let i in getCondiment){
        if(i===ing){
            sandwichString += `<li>${i}: ${getCondiment[i]}$</li>`;
            sandwichPrice += getCondiment[i];
            nameArray.push(sandwichString);
            priceArray.push(sandwichPrice);
        }
    };

    for(let i in getMeat){
        if(i===ing){
            sandwichString += `<li>${i}: ${getMeat[i]}$</li>`;
            sandwichPrice += getMeat[i];
            nameArray.push(sandwichString);
            priceArray.push(sandwichPrice);
        }
    };

    for(let i in getVeggie){
        if(i===ing){
            sandwichString += `<li>${i}: ${getVeggie[i]}$</li>`;
            sandwichPrice += getVeggie[i];
            nameArray.push(sandwichString);
            priceArray.push(sandwichPrice);
        }
    };

    let stringToPrint = ''
    let priceToPrint = priceArray.reduce(reducer);
    stringToPrint += `<div>Ingredients: ${nameArray.join(' ')} <br> TOTAL PRICE = ${priceToPrint}$</div>`;
    util.printToDom('sandwichCon', stringToPrint);
}

export default { addEvents }

// makeSandwichBtn.addEventListener('click', makeSandwich);
// const makeSandwichBtn = document.getElementById('makeSandwich');
// const makeSandwich = () => {
//     let stringToPrint = ''
//     let priceToPrint = priceArray.reduce(reducer);
//     stringToPrint += `<div>Ingredients: ${nameArray} <br><br> TOTAL PRICE = ${priceToPrint}</div>`;
//     util.printToDom('sandwichCon', stringToPrint);
// }