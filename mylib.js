export class Person {
    constructor(nm, ml, ag) {
        this.name = nm;
        this.mail = ml;
        this.age = ag;
    }
    get age() {
        return this._age;
    }
    set age(n) {
        this._age = n < 0 ? 0 : n;
    }
    print() {
        return this.name + ',' + this.mail + ',' + this.age;
    }
}
