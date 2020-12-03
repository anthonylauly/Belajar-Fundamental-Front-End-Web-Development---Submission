import "../data/data-source"
import location_filters from "../data/local-data"

var locations = new location_filters();

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
            <style>
                :host{
                    margin: 10px;
                    border-radius: 10px;
                    border: 1px solid #f1f3f9;
                    box-shadow: 1px 1px 1px 1px #ebebeb;
                    border: 1px solid #f1f6f9;                    width: 200px;
                }
                .filter-title{
                    background-color: #ebebeb;
                    padding-left: 10px;
                    padding-top: 10px;
                    text-decoration: solid;
                }
                .filter-lokasi{
                    padding-left: 10px;
                    border: 1px solid #f1f6f9;
                }
                .filter-industri{
                    padding-left: 10px;
                    padding-bottom: 10px;
                    padding-right: 10px;
                    border: 1px solid #f1f6f9
                }
                h2{
                    margin: 0 0 0 0;
                }
            </style>

            <div class='filter-title'>
                <h2>Filter</h2>
            </div>
            <div class='filter-category'>
                <div class='filter-lokasi'>
                    <h4>Lokasi</h4>
                    <p></p><input type="checkbox" class='surabaya' value='Surabaya'> Surabaya <br>
                    <input type="checkbox" class='lampung' value='Lampung'> Lampung <br>
                    <input type="checkbox" class='jakarta' value='Jakarta'> Jakarta <br>
                    <input type="checkbox" class='bandung' value='Bandung'> Bandung <br>
                    <input type="checkbox" class='palembang' value='Palembang'> Palembang <br>
                    
                    <a href="#">Lihat Selengkapnya</a> <br><br>
                </div>
                <div class='filter-industri'>
                    <h4>Industri</h4>
                    <input type="checkbox"> Agriculture <br>
                    <input type="checkbox"> Food & Beverages <br>
                    <input type="checkbox"> Hotel,Tourism, & Catering <br>
                    <input type="checkbox"> Textile, Clothing, & Footwear <br>
                    <a href="#">Lihat Selengkapnya</a>
                </div>
            </div>
        `;
    }
}

customElements.define("filter-box", FilterBox);