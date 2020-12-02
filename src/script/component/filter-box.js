class FilterBox extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
        this.location = [];
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
                    <input type="checkbox" class='surabaya' value='Surabaya'> Surabaya <br>
                    <input type="checkbox" class='lampung' value='Lampung'> Lampung <br>
                    <input type="checkbox"> Jakarta <br>
                    <input type="checkbox"> Bandung <br>
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
        location_array = this.location;
        const surabaya = this.shadowDOM.querySelector('.surabaya');
        surabaya.addEventListener('change', function(){
            if (this.checked) {
                location_array.push('Surabaya');              
            } 
        });

        const lampung = this.shadowDOM.querySelector('.lampung');
        lampung.addEventListener('change', function(){
            if (this.checked) {
                location_array.push('Lampung');
              } 
        });
        console.log(location_array);
        this.location = location_array;
    }


    attributeChangedCallback(name, oldval, newval){
        console.log('attributes changed');
    }

    static get observedAttributes(){
        return ['surabaya_check']
    }
}

customElements.define("filter-box", FilterBox);