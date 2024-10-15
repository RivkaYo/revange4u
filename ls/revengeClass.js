globalId = 1;

//create new revenge
class revenge {
    constructor(name, details) {
        this.name = name;
        this.details = details;
        this.isComplete = false;
        this.id = globalId++;
    };
}