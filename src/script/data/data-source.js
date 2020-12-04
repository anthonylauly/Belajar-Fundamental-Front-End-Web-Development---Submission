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

    static retreiveMyShops(username, password){
        return fetch("https://cabangku.azurewebsites.net/api/shop/", {
            headers: {
                "Authorization": "Basic "  + base64.encode(username + ":" + password),
            }
        })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            console.log(responseJson);
            if(responseJson) {
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject("Result is not found");
            }
        })
    }
}

export default DataSource;