import "../component/item-bar";
import "../component/filter-box";
import DataSource from "../data/data-source";

const main = () => {
    const itemBarElement = document.querySelector("item-bar");

    const renderResult = JSONresults => {
        console.log('Fetching success');
        itemBarElement.shop = JSONresults;
    }

    const fallbackResult = message => {
        itemBarElement.innerHTML += `<h3>${message}</h3>`;
    }
    
    DataSource.listAllShops()
        .then(renderResult)
        .catch(fallbackResult)

}

export default main