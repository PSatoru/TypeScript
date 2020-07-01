// リストA-3
// let lang = 'JavaScript';
// let msg1 = `Hello! This is ${lang}!`;
// lang = 'TypeScript';
// let msg2 = `Hello! This is ${lang}!`;
// let msg:string = `「${msg1}」<br>「${msg2}」`
// リストA-4
// function calc(n: number, f: Function) {
//     return f(n);
// }
// let msg = calc(123, n=>n*n);
// リストA-5
// let ob = {
//     name: 'Taro',
//     mail: 'taro@yamada',
//     age: 34,
//     toString: function(){
//         return this.name + ',' + this.mail + ',' + this.age;
//     }
// }
// リストA-6
// let ob = new Object();
// ob.name = 'Taro';
// ob.mail = 'taro@yamada';
// ob.age = 35;
// ob.toString = function(){
//     return this.name + ',' + this.mail + ',' + this.age;
// }
// リストA-7
// function Person(nm, ml, ag){
//     this.name = nm;
//     this.mail = ml;
//     this.age = ag;
//     this.toString = function() {
//         return this.name + ',' + this.mail + ',' + this.age;
//             }
// }
// リストA-8
// class Parson {
//     name:string;
//     mail:string;
//     age:number;
//     constructor(nm, ml, ag){
//         this.name = nm;
//         this.mail = ml;
//         this.age = ag;
//     }
//     toString(){
//         return this.name + ',' + this.mail + ',' + this.age;
//     }
// }
// リストA-9
// class Person {
//     name:string;
//     mail:string;
//     private _age:number;
//     get age() {
//         return this._age;
//     }
//     set age(n:number){
//         this._age = n < 0 ? 0 : n;
//     }
//     constructor(nm, ml, ag){
//         this.name = nm;
//         this.mail = ml;
//         this.age = ag;
//     }
//     toString() {
//         return this.name + ',' + this.mail + ',' + this.age;
//     }
// }
// var ob = new Person('Taro','taro@yamada',-9);
//  リストA-10
// class Person {
//     name:string;
//     mail:string;
//     private _age:number;
//     get age() {
//         return this._age;
//     }
//     set age(n:number){
//         this._age = n < 0 ? 0 : n;
//     }
//     constructor(nm, ml, ag){
//         this.name = nm;
//         this.mail = ml;
//         this.age = ag;
//     }
//     toString() {
//         return this.name + ',' + this.mail + ',' + this.age;
//     }
// }
// class Teen extends Person {
//     private __age:number;
//     school:string;
//     constructor(nm, ml, ag, sc) {
//         super(nm, ml, ag);
//         this.school = sc;
//     }
//     get age() {
//         return this.__age;
//     }
//     set age(n:number) {
//         this.__age = n < 0 ? 0 : n >= 20 ? 19 : n;
//     }
//     toString(){
//         return this.name + ',' + this.mail + ','
//              + this.age + ' (' + this.school + ')';
//     }
// }
// リストA-11
// interface Printable {
//     print():string;
// }
// class Person implements Printable {
//     name:string;
//     mail:string;
//     private _age:number;
//     get age() {
//         return this._age;
//     }
//     set age(n:number){
//         this._age = n < 0 ? 0 : n;
//     }
//     constructor(nm, ml, ag){
//         this.name = nm;
//         this.mail = ml;
//         this.age = ag;
//     }
//     print():string {
//         return this.name + ',' + this.mail + ',' + this.age;
//     }
// }
// リストA-13
import { Person } from './mylib.js';
let taro = new Person('Taro', 'taro@yamada', 35);
let hanako = new Person('Hanako', 'hanako@flower', 17);
function load() {
    let msg = `<ul>
    <li>${taro.print()}</li>
    <li>${hanako.print()}</li>
    </ul>`;
    document.querySelector('#msg').innerHTML = msg;
}
load();
// function load(){
//     document.querySelector('#msg').innerHTML = ob.toString();
// };
// let taro = new Person('Taro','taro@yamada',35);
// let hanako = new Teen('Hanako','hanako@flower',17,'Tokyo High-school');
