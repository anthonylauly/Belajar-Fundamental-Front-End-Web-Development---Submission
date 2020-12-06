class DataSource {
    constructor(){
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
    }

    static retreiveMyShops(username, password){
        const user_pass = btoa(`${username}:${password}`);
        return fetch("https://cabangku.azurewebsites.net/api/shop/myshop_list/", {
            headers: {
                "Authorization": `Basic ${user_pass}`,
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
        const user_pass = btoa(`${username}:${password}`);
        return fetch("https://cabangku.azurewebsites.net/api/shop/", {
            headers: {
                "Authorization": `Basic ${user_pass}`,
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