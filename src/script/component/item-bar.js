import "./shop-item";

class ItemBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render_init();
    }

    set shop(shop) {
        this._shop = shop;
    }

    get shop() {
        return this._shop;
    }
    
    locationFilter(val){
        if (val){
            this.renderLocationFilter();
        }
        else {
            this.render();
        }
    }

    set locations(val){
        this._locations = val;
    }

    get locations(){
        return this._locations
    }

    render_init(){
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    box-sizing: border-box;
                    padding: 5px;
                    margin: 10px;
                    max-width: 900px;
                    display: flex;
                    flex-direction: column;
                    border-radius: 10px;
                    border: 1px solid #f1f6f9;
                    background-color: #ebebeb;
                    overflow: auto;
                }
                .flex-row{
                    display: flex;
                    flex-direction: row;
                    padding: 5px;
                }
                shop-item{
                    margin: 10px;
                }
            </style>
        `; 
    }

    render(){  
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    box-sizing: border-box;
                    padding: 5px;
                    margin: 10px;
                    max-width: 900px;
                    display: flex;
                    flex-direction: column;
                    border-radius: 10px;
                    border: 1px solid #f1f6f9;
                    background-color: #ebebeb;
                    overflow: auto;
                }
                .flex-row{
                    display: flex;
                    flex-direction: row;
                    padding: 5px;
                }
                shop-item{
                    margin: 10px;
                }
            </style>
        `;    

        let i = 0;
        this.shop.forEach(shop => {
            if (i%4 == 0){
                this.shadowDOM.innerHTML += `
                    <div class='flex-row'></div>
                `;
            }
            let j = Math.floor(i/4);
            const shopItemElement = document.createElement("shop-item");
            shopItemElement.shop = shop;
            this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
            i+=1;
        });        
    }

    renderLocationFilter(){   
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    box-sizing: border-box;
                    padding: 5px;
                    margin: 10px;
                    max-width: 900px;
                    display: flex;
                    flex-direction: column;
                    border-radius: 10px;
                    border: 1px solid #f1f6f9;
                    background-color: #ebebeb;
                    overflow: auto;
                }
                .flex-row{
                    display: flex;
                    flex-direction: row;
                    padding: 5px;
                }
                shop-item{
                    margin: 10px;
                }
            </style>
        `; 
   
        let i = 0;
        this.shop.forEach(shop => {
            if (this.locations.find(loc => {
                return loc == shop.headquarter;})){
                if (i%4 == 0){
                    this.shadowDOM.innerHTML += `
                        <div class='flex-row'></div>
                    `;
                }
                let j = Math.floor(i/4);
                const shopItemElement = document.createElement("shop-item");
                shopItemElement.shop = shop;
                this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                i+=1; 
            }
        });        
    }
}

customElements.define("item-bar", ItemBar);