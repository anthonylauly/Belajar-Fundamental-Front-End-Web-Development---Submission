class DataSource {
    constructor(){
        const base = "https://cabangku.azurewebsites.net/api/shop/";
    }

    static listAllShops() {
        return fetch("https://cabangku.azurewebsites.net/api/shop/")
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson) {
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject("Result is not found");
            }
        })
    };
}

export default DataSource;