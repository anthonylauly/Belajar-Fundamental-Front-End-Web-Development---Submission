class location_filters {
    constructor(){
        this._location = [];
    }

    get location(){
        return this._location;
    }

    set location(val){
        this._location.push(val);
    }
}

export default location_filters;