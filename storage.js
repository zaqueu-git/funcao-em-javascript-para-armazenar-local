class Storage {

    add(name, value) {
        localStorage.setItem(name, value);  
    }    

    remove(name) {
        localStorage.removeItem(name);
    }

    get(name) {
        let local = localStorage.getItem(name);

        if (local) {
            return local;
        }

        return "";
    }

}