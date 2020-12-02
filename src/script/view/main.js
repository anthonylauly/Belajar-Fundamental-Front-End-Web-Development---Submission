import "../component/item-bar";
import "../component/filter-box";
import DataSource from "../data/data-source";

const main = () => {
    const itemBarElement = document.querySelector("item-bar");
    const filterBox = document.querySelector('filter-box');
    const surabaya_check = filterBox.shadowDOM.querySelector('.surabaya');
    let locations = [];

    surabaya_check.addEventListener('change', function(){
        if (this.checked) {
            locations.push('Jakarta');  
            DataSource.listAllShops()
            .then(renderResultLocationFilter)
            .catch(fallbackResult)
        }
        else {
            let idx = -1
            idx = locations.findIndex(loc => {
                return loc == 'Jakarta';
            })
            if (locations.length == 0 && idx == -1){
                DataSource.listAllShops()
                .then(renderResult)
                .catch(fallbackResult)
            }
            else if (locations.length == 1 && idx != -1){
                locations = [];

                DataSource.listAllShops()
                .then(renderResult)
                .catch(fallbackResult)
            }
            else if(locations.length > 1 && idx == -1){
                locations.splice(idx,1);

                DataSource.listAllShops()
                .then(renderResultLocationFilter)
                .catch(fallbackResult)
            }
            else if(locations.length > 1 && idx != -1){
                DataSource.listAllShops()
                .then(renderResultLocationFilter)
                .catch(fallbackResult)
            }
        } 
    });

    const renderResult = JSONresults => {
        itemBarElement.shop = JSONresults;
        itemBarElement.locationFilter(false);
    }

    const renderResultLocationFilter = JSONresults => {
        itemBarElement.shop = JSONresults;
        itemBarElement.locations = locations;
        itemBarElement.locationFilter(true);
    }

    const fallbackResult = message => {
        itemBarElement.innerHTML += `<h3>${message}</h3>`;
    }
    DataSource.listAllShops()
    .then(renderResult)
    .catch(fallbackResult)
}

export default main