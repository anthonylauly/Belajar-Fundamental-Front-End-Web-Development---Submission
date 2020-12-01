class FilterBox extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render_init();
    }

    render_init(){
        this.shadowDOM.innerHTML=`
        <div class='filter-title'>
            Filter <br><br>
        </div>
        <div class='filter-category'>
            <div class='filter-lokasi'>
                Lokasi <br>
                <input type="checkbox" value="Surabaya">Surabaya<br>
                <input type="checkbox" value="Lampung">Lampung<br>
                <input type="checkbox" value="Jakarta">Jakarta <br>
                <input type="checkbox" value="Bandung">Bandung <br>
                <a href="#">Lihat Selengkapnya</a>
            </div>
            <div class='filter-harga'>
                Harga <br>
                <input type="text"> <br>
                <input type="text"> <br>
            </div>
            <div class='filter-industri'>
                Industri <br>
                <input type="checkbox"> Agriculture <br>
                <input type="checkbox"> Food & Beverages <br>
                <input type="checkbox"> Hotel,Tourism, & Catering <br>
                <input type="checkbox"> Textile, Clothing, & Footwear <br>
                <a href="#">Lihat Selengkapnya</a>
            </div>
        </div>
        `;

        console.log(this.shadowDOM.querySelectorAll('input'));
    }
}

customElements.define("filter-box", FilterBox);