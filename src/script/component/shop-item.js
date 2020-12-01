class ShopItem extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set shop(shop){
        this._shop = shop;
        this.render_init();
    }

    get shop() {
        return this._shop;
    }

    render_init(){
        this.innerHTML = `
            <style>
                img{
                    width: 200px;
                    float: left;
                }
                h3{
                    margin-top: 1px;
                    padding-top: 1px;
                }
                h2{
                    margin-bottom: 1px;
                    padding-bottom: 1px;
                }
            </style>
        `;
    }

    render(){
        this.innerHTML += `
            <img src="${this.shop.logo}" alt="${this.shop.name}">
            <div float='right'>
                <h2>${this.shop.name}</h2>
                <h3>${this.shop.headquarter}</h3>
            </div>
        `;
    }
}

customElements.define("shop-item", ShopItem);