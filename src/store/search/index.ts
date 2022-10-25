import {makeAutoObservable} from "mobx";

class Search {
    value = '';

    constructor() {
        makeAutoObservable(this)
    }

    changeValue (value:string) {
        this.value = value
    }
}

export default new Search();
