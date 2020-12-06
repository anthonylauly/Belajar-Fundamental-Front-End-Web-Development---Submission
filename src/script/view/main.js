import "../component/item-bar";
import "../component/filter-box";
import DataSource from "../data/data-source";

const main = () => {
    let locations = [];
    let industries = [];
    const itemBarElement = document.querySelector("item-bar");
    const filterBox = document.querySelector('filter-box');

    const surabaya_check = filterBox.shadowDOM.querySelector('.surabaya');
    surabaya_check.addEventListener('change', function(){
        if (this.checked) {
            locations.push('Surabaya'.toLowerCase());  
        }
        else {
            let idx = -1
            idx = locations.findIndex(loc => {
                return loc.toLowerCase() == 'Surabaya'.toLowerCase();
            })
            if (idx != -1){
                locations.splice(idx,1);
            }
        }
        DataSource.listAllShops()
        .then(renderResult)
        .catch(fallbackResult)
    });

    const lampung_check = filterBox.shadowDOM.querySelector('.lampung');
    lampung_check.addEventListener('change', function(){
        if (this.checked) {
            locations.push('Lampung'.toLowerCase()); 
        }
        else {
            let idx = -1
            idx = locations.findIndex(loc => {
                return loc.toLowerCase() == 'Lampung'.toLowerCase();
            })
            if (idx != -1){
                locations.splice(idx,1);
            }
        }
        DataSource.listAllShops()
        .then(renderResult)
        .catch(fallbackResult)
    });

    const jakarta_check = filterBox.shadowDOM.querySelector('.jakarta');
    jakarta_check.addEventListener('change', function(){
        if (this.checked) {
            locations.push('Jakarta'.toLowerCase());  
        }
        else {
            let idx = -1
            idx = locations.findIndex(loc => {
                return loc.toLowerCase() == 'Jakarta'.toLowerCase();
            })
            if (idx != -1){
                locations.splice(idx,1);
            }
        }
        DataSource.listAllShops()
        .then(renderResult)
        .catch(fallbackResult)
    });

    const bandung_check = filterBox.shadowDOM.querySelector('.bandung');
    bandung_check.addEventListener('change', function(){
        if (this.checked) {
            locations.push('Bandung'.toLowerCase());  
        }
        else {
            let idx = -1
            idx = locations.findIndex(loc => {
                return loc.toLowerCase() == 'Bandung'.toLowerCase();
            })
            if (idx != -1){
                locations.splice(idx,1);
            }
        }
        DataSource.listAllShops()
        .then(renderResult)
        .catch(fallbackResult)
    });

    const palembang_check = filterBox.shadowDOM.querySelector('.palembang');
    palembang_check.addEventListener('change', function(){
        if (this.checked) {
            locations.push('Palembang'.toLowerCase());  
        }
        else {
            let idx = -1
            idx = locations.findIndex(loc => {
                return loc.toLowerCase() == 'Palembang'.toLowerCase();
            })
            if (idx != -1){
                locations.splice(idx,1);
            }
        }
        DataSource.listAllShops()
        .then(renderResult)
        .catch(fallbackResult)
    });

    const computer_check = filterBox.shadowDOM.querySelector('.computer');
    computer_check.addEventListener('change', function(){
        if (this.checked) {
            industries.push('Computer');  
        }
        else {
            let idx = -1
            idx = industries.findIndex(ind => {
                return ind.toLowerCase() == 'Computer'.toLowerCase();
            })
            if (idx != -1){
                industries.splice(idx,1);
            }
        }
        DataSource.listAllShops()
        .then(renderResult)
        .catch(fallbackResult)
    });

    const manufacturing_check = filterBox.shadowDOM.querySelector('.manufacturing');
    manufacturing_check.addEventListener('change', function(){
        if (this.checked) {
            industries.push('Manufacturing'); 
        }
        else {
            let idx = -1
            idx = industries.findIndex(ind => {
                return ind.toLowerCase() == 'Manufacturing'.toLowerCase();
            })
            if (idx != -1){
                industries.splice(idx,1);
            }
        }
        DataSource.listAllShops()
        .then(renderResult)
        .catch(fallbackResult)
    });

    const food_check = filterBox.shadowDOM.querySelector('.food');
    food_check.addEventListener('change', function(){
        if (this.checked) {
            industries.push('Food'); 
        }
        else {
            let idx = -1
            idx = industries.findIndex(ind => {
                return ind.toLowerCase() == 'Food'.toLowerCase();
            })
            if (idx != -1){
                industries.splice(idx,1);
            }
        }
        DataSource.listAllShops()
        .then(renderResult)
        .catch(fallbackResult)
    });

    const hospitality_check = filterBox.shadowDOM.querySelector('.hospitality');
    hospitality_check.addEventListener('change', function(){
        if (this.checked) {
            industries.push('Hospitality');  
        }
        else {
            let idx = -1
            idx = industries.findIndex(ind => {
                return ind.toLowerCase() == 'Hospitality'.toLowerCase();
            })
            if (idx != -1){
                industries.splice(idx,1);
            }
        }
        DataSource.listAllShops()
        .then(renderResult)
        .catch(fallbackResult)
    });
    
    const renderResult = JSONresults => {
        itemBarElement.locations = locations;
        itemBarElement.industries = industries;
        itemBarElement.shop = JSONresults;
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
        myshopElement.addEventListener('click', () => {
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
        .catch( () => {
            alert("Sign In Unsuccessful");
        })
    });

    const logo = document.getElementById('logo');
    logo.addEventListener('click', () => {
        DataSource.listAllShops()
        .then(renderResult)
        .catch(fallbackResult)
    })

    const product = document.getElementById('product');
    product.addEventListener('click', () => {
        DataSource.listAllShops()
        .then(renderResult)
        .catch(fallbackResult)
    })
}

export default main;