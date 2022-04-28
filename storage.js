class Storage {

    add(name, value) {
        localStorage.setItem(name, value);  
    }    

    remove(name) {
        localStorage.removeItem(name);
    }

    get(name) {
        return localStorage.getItem(name);
    }

}
