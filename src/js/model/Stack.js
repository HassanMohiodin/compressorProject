export default class Stack {
    constructor() {
        this.list = [];
    }

    push (obj) {
        this.list.push(obj);
    }

    pop () {
        return this.list.pop();
    }

    isEmpty () { return this.list.length < 1;}
}