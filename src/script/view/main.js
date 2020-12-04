import "../component/item-bar";
import "../component/filter-box";
import DataSource from "../data/data-source";

const main = () => {
    let locations = [];
    const itemBarElement = document.querySelector("item-bar");
    const filterBox = document.querySelector('filter-box');

    const surabaya_check = filterBox.shadowDOM.querySelector('.surabaya');
    surabaya_check.addEventListener('change', function(){
        if (this.checked) {
            locations.push('Surabaya');  
            DataSource.listAllShops()
            .then(renderResultLocationFilter)
            .catch(fallbackResult)
        }
        else {
            let idx = -1
            idx = locations.findIndex(loc => {
                return loc == 'Surabaya';
            })
            if (locations.length == 0 && idx == -1){
                DataSource.listAllShops()
                .then(renderResult)
                .catch(fallbackResult)
            }
            else if (locations.length == 1 && idx != -1){
                locations = [];
                console.log(locations);
                DataSource.listAllShops()
                .then(renderResult)
                .catch(fallbackResult)
            }
            else if(locations.length > 1 && idx == -1){
                DataSource.listAllShops()
                .then(renderResultLocationFilter)
                .catch(fallbackResult)
            }
            else if(locations.length > 1 && idx != -1){
                locations.splice(idx,1);

                DataSource.listAllShops()
                .then(renderResultLocationFilter)
                .catch(fallbackResult)
            }
        } 
    });

    const lampung_check = filterBox.shadowDOM.querySelector('.lampung');
    lampung_check.addEventListener('change', function(){
        if (this.checked) {
            locations.push('Lampung');  
            DataSource.listAllShops()
            .then(renderResultLocationFilter)
            .catch(fallbackResult)
        }
        else {
            let idx = -1
            idx = locations.findIndex(loc => {
                return loc == 'Lampung';
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
                DataSource.listAllShops()
                .then(renderResultLocationFilter)
                .catch(fallbackResult)
            }
            else if(locations.length > 1 && idx != -1){
                locations.splice(idx,1);
                DataSource.listAllShops()
                .then(renderResultLocationFilter)
                .catch(fallbackResult)
            }
        }
    });

    const jakarta_check = filterBox.shadowDOM.querySelector('.jakarta');
    jakarta_check.addEventListener('change', function(){
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
                DataSource.listAllShops()
                .then(renderResultLocationFilter)
                .catch(fallbackResult)
            }
            else if(locations.length > 1 && idx != -1){
                locations.splice(idx,1);
                DataSource.listAllShops()
                .then(renderResultLocationFilter)
                .catch(fallbackResult)
            }
        }
    });

    const bandung_check = filterBox.shadowDOM.querySelector('.bandung');
    bandung_check.addEventListener('change', function(){
        if (this.checked) {
            locations.push('Bandung');  
            DataSource.listAllShops()
            .then(renderResultLocationFilter)
            .catch(fallbackResult)
        }
        else {
            let idx = -1
            idx = locations.findIndex(loc => {
                return loc == 'Bandung';
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
                DataSource.listAllShops()
                .then(renderResultLocationFilter)
                .catch(fallbackResult)
            }
            else if(locations.length > 1 && idx != -1){
                locations.splice(idx,1);
                DataSource.listAllShops()
                .then(renderResultLocationFilter)
                .catch(fallbackResult)
            }
        }
    });

    const palembang_check = filterBox.shadowDOM.querySelector('.palembang');
    palembang_check.addEventListener('change', function(){
        if (this.checked) {
            locations.push('Palembang');  
            DataSource.listAllShops()
            .then(renderResultLocationFilter)
            .catch(fallbackResult)
        }
        else {
            let idx = -1
            idx = locations.findIndex(loc => {
                return loc == 'Palembang';
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
                DataSource.listAllShops()
                .then(renderResultLocationFilter)
                .catch(fallbackResult)
            }
            else if(locations.length > 1 && idx != -1){
                locations.splice(idx,1);
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

    const signInSuccessful = () => {
        const main_navbar = document.getElementById('main-navbar');
        main_navbar.innerHTML += `
            <li class="nav-item">
                <a class="nav-link" href="#" id="myshop">My Shop</a>
            </li>
        `;

        const myshopElement = document.getElementById('myshop');
        myshopElement.addEventListener('click', function myShopList(){
            const email = document.getElementById('email');
            const password = document.getElementById('password');
    
            DataSource.retreiveMyShops(email.value, password.value)
            .then(renderResult)
            .catch(fallbackResult)
        });
    }

    DataSource.listAllShops()
    .then(renderResult)
    .catch(fallbackResult)

    const password = document.getElementById('password');
    password.addEventListener('change', function(){
        const email = document.getElementById('email');
        const email_value = email.value;
        const password_value = this.value;

        DataSource.signIn(email_value, password_value)
        .then(signInSuccessful)
        .catch(function(){
            alert("Sign In Unsuccessful");

        })
    });
}

export default main;