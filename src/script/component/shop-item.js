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
                .flip-box {
                background-color: transparent;
                width: 200px;
                height: 130px;
                border: 1px solid #f1f1f1;
                perspective: 1000px; /* Remove this if you don't want the 3D effect */
                }

                /* This container is needed to position the front and back side */
                .flip-box-inner {
                position: relative;
                width: 100%;
                height: 100%;
                text-align: center;
                transition: transform 0.8s;
                transform-style: preserve-3d;
                }

                /* Do an horizontal flip when you move the mouse over the flip box container */
                .flip-box:hover .flip-box-inner {
                transform: rotateY(180deg);
                }

                /* Position the front and back side */
                .flip-box-front, .flip-box-back {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden; /* Safari */
                backface-visibility: hidden;
                }

                /* Style the front side (fallback if image is missing) */
                .flip-box-front {
                background-color: #bbb;
                color: black;
                }

                /* Style the back side */
                .flip-box-back {
                background-color: #65645F;
                color: white;
                transform: rotateY(180deg);
                }
            </style>
        `;
    }

    render(){
        this.innerHTML += `
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                    <img src="${this.shop.logo}" alt="${this.shop.name}">
                    </div>
                    <div class="flip-box-back">
                    <h3>${this.shop.industry} Industry</h3>
                    <h3>Since ${this.shop.business_start}</h3>
                    <h3>${this.shop.units} units</h3>
                    </div>
                </div>
            </div>
            <div float='right'>
                <h2>${this.shop.name}</h2>
                <h3>${this.shop.headquarter}</h3>
            </div>
        `;
    }
}

customElements.define("shop-item", ShopItem);