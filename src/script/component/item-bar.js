import "./shop-item";

class ItemBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    set shop(shop) {
        this._shop = shop;
        this.render();
    }

    get shop() {
        return this._shop;
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    box-sizing: border-box;
                    padding: 0;
                    margin: 0;
                    float: right;
                    display: flex;
                    flex-direction: column;
                    padding-left: 0;
                }
            </style>
        `;       

        this.shop.forEach(shop => {
            const shopItemElement = document.createElement("shop-item");
            shopItemElement.shop = shop;
            this.shadowDOM.appendChild(shopItemElement);
        });
        
    }
}

customElements.define("item-bar", ItemBar);