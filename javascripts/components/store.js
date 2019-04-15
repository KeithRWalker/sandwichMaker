import importUtil from '../helpers/util.js';
import importBread from '../helpers/bread.js';
import importCheese from '../helpers/cheese.js';
import importCondiment from '../helpers/condiment.js';
import importMeat from '../helpers/meat.js';
import importVeggie from '../helpers/veggie.js';

const makeIngList = () => {
    const getBread = importBread.getBread();
    const getCheese = importCheese.getCheese();
    const getCondiment = importCondiment.getCondiment();
    const getMeat = importMeat.getMeat();
    const getVeggie = importVeggie.getVeggie();

    const printBread = importUtil.objLoop(getBread)
    const printCheese = importUtil.objLoop(getCheese)
    const printCondiment = importUtil.objLoop(getCondiment)
    const printMeat = importUtil.objLoop(getMeat)
    const printVeggie = importUtil.objLoop(getVeggie)
    let ingString = `<div class="ingCard card"><ul class="breadList ings" id="breadList">${printBread}</ul></div>`;
        ingString += `<div class="ingCard card"><ul class="meatList ings" id="meatList">${printMeat}</ul></div>`
        ingString += `<div class="ingCard card"><ul class="cheeseList ings" id="cheeseList">${printCheese}</ul></div>`
        ingString += `<div class="ingCard card"><ul class="veggieList ings" id="veggieList">${printVeggie}</ul></div>`
        ingString += `<div class="ingCard card"><ul class="condimentList ings" id="condimentList">${printCondiment}</ul></div>`
    importUtil.printToDom('ingListCon', ingString);
};

// const objLoop = (obj) => {
//     let prop='';
//     let val='';
//     for(let i in obj){
//         val += obj[i];
//         prop += obj;
//     }   
//     console.log(`${prop}: ${val}`);
// };

const hi = () => {
    console.log('hi');
};

export default { makeIngList };