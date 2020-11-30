class ShopItem extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set shop(shop){
        this._shop = shop;
        this.render();
    }

    get shop() {
        return this._shop;
    }

    render(){
        this.innerHTML = `
            <style>
                * {
                    box-sizing: border-box;
                    padding: 0;
                    margin: 0;
                }
            </style>
        `;
        
        this.innerHTML += `
            <img src="${this.shop.logo}" alt="${this.shop.name}">
            <div float='right'>
                <h3>${this.shop.name}</h3>
                <h4>Locations : ${this.shop.headquarter}</h4>
            </div>
        `;
    }
}

customElements.define("shop-item", ShopItem);