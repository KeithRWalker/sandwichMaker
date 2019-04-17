import importBread from '../ingredients/bread.js';
import importCheese from '../ingredients/cheese.js';
import importCondiment from '../ingredients/condiment.js';
import importMeat from '../ingredients/meat.js';
import importVeggie from '../ingredients/veggie.js';
import util from './util.js';

const getBread     = importBread.getBread();
const getCheese    = importCheese.getCheese();
const getCondiment = importCondiment.getCondiment();
const getMeat      = importMeat.getMeat();
const getVeggie    = importVeggie.getVeggie();

let addedBread     = 1;
let addedCheese    = 1;
let addedCondiment = 1;
let addedMeat      = 1;
let addedVeggie   = 1;

let nameArray = [];
let priceArray = [];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const addEvents = () => {
    const addIngBtn = document.getElementsByClassName('ingBtn');
    for(let i = 0; i<addIngBtn.length; i++){
        addIngBtn[i].addEventListener('click', addIngredients);
    };
};

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
            e.target.innerHTML=`added ${addedBread}`;
            addedBread++;
        }
    };

    for(let i in getCheese){
        if(i===ing){
            sandwichString += `<li>${i}: ${getCheese[i]}$</li>`;
            sandwichPrice += getCheese[i];
            nameArray.push(sandwichString);
            priceArray.push(sandwichPrice);
            e.target.innerHTML=`added ${addedCheese}`;
            addedCheese++;
        }
    };

    for(let i in getCondiment){
        if(i===ing){
            sandwichString += `<li>${i}: ${getCondiment[i]}$</li>`;
            sandwichPrice += getCondiment[i];
            nameArray.push(sandwichString);
            priceArray.push(sandwichPrice);
            e.target.innerHTML=`added ${addedCondiment}`;
            addedCondiment++;
        }
    };

    for(let i in getMeat){
        if(i===ing){
            sandwichString += `<li>${i}: ${getMeat[i]}$</li>`;
            sandwichPrice += getMeat[i];
            nameArray.push(sandwichString);
            priceArray.push(sandwichPrice);
            e.target.innerHTML=`added ${addedMeat}`;
            addedMeat++;
        }
    };

    for(let i in getVeggie){
        if(i===ing){
            sandwichString += `<li>${i}: ${getVeggie[i]}$</li>`;
            sandwichPrice += getVeggie[i];
            nameArray.push(sandwichString);
            priceArray.push(sandwichPrice);
            e.target.innerHTML=`added ${addedVeggie}`;
            addedVeggie++;
        }
    };
    let stringToPrint = ''
    let priceToPrint = priceArray.reduce(reducer);
    stringToPrint += `<h6>Ingredients: ${nameArray.join(' ')} <br> TOTAL PRICE = ${priceToPrint}$</h6>`;
    util.printToDom('sandwichCon', stringToPrint);
};

export default { addEvents }