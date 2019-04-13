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
    let ingString = ``;
    let prop='';
    let val='';
    

    for(let i in getBread){
        ingString += `<li>${i}: ${getBread[i]}$</li>`;
    };
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