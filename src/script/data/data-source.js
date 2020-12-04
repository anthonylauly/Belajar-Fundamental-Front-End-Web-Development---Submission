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
        return fetch("https://cabangku.azurewebsites.net/api/shop/myshop_list/", {
            headers: {
                "Authorization": "Basic "  + btoa(username + ":" + password),
            }
        })
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
    }
    static signIn(username, password){
        return fetch("https://cabangku.azurewebsites.net/api/shop/", {
            headers: {
                "Authorization": "Basic "  + btoa(username + ":" + password),
            }
        })
        .then(response => {
            if(response.status == 200){
                return Promise.resolve();
            }
            if(response.status != 200){
                return Promise.reject();
            }
        })
    }
}

export default DataSource;