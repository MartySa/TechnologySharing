"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sayHello(person) {
    return "hello," + person;
}
var user = "MartySa";
console.log(sayHello(user));
var bDone = false; // bool值
var createNewBool = new Boolean(false); // bool对象
var a = 1;
var b = 0x88;
var c = 8;
var d = 8;
var f = NaN;
var g = Infinity;
var Name = "MartySa";
var Age = 18;
var totalStr = "Hello, My name is " + Name + ". I'll be " + (Age - 1) + " years old. "; // 格式化字符串 ` 与 $
function alertName() {
    alert('My Name is MartySa.');
}
var unusable = undefined;
var u;
// let u1 : number = u;
// let strNumber : string = "Seven";
// strNumber = 0x01
var anyThing = "Hello";
console.log(anyThing.Name);
console.log(anyThing.Name.firstName);
var something; // 该版本和书上有差异，如果不显示调用 any 后面的setName会报错
something = "Seven";
something = 7;
something = "9";
something.setName("MartySa");
var unionVal;
unionVal = "Seven";
unionVal = 7;
//unionVal = false;
function GetLenth(something) {
    return something.toString();
}
// 类 门
var Door = /** @class */ (function () {
    function Door() {
    }
    Door.prototype.ShowName = function () {
    };
    return Door;
}());
// 多重继承
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.fuc = function () {
    };
    return SecurityDoor;
}(Door));
var door = new SecurityDoor; // 不确定是否这样初始化
door.fuc();
// 汽车，实现接口 Alarm和Light
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.lightON = function () {
    };
    Car.prototype.lightOff = function () {
    };
    Car.prototype.fuc = function () {
    };
    return Car;
}());
var Car2 = /** @class */ (function () {
    function Car2() {
    }
    Car2.prototype.fuc = function () {
    };
    Car2.prototype.lightOff = function () {
    };
    Car2.prototype.lightOn = function () {
    };
    Car2.prototype.sc = function () {
    };
    return Car2;
}());
