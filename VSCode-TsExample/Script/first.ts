function sayHello(person : string)
{
    return "hello," + person;
}

let user = "MartySa";

console.log(sayHello(user));

let bDone : boolean = false;                        // bool值
let createNewBool : Boolean = new Boolean(false);   // bool对象
let a : number = 1;
let b : number = 0x88;
let c : number = 0b1000;
let d : number = 0o10;
let f : number = NaN;
let g : number = Infinity;

let Name : string = "MartySa";
let Age : number = 18;
let totalStr : string = `Hello, My name is ${Name}. I'll be ${Age - 1} years old. `;    // 格式化字符串 ` 与 $

function alertName() : void 
{
    alert('My Name is MartySa.');
}

let unusable : void = undefined;
let u : undefined;
// let u1 : number = u;
// let strNumber : string = "Seven";
// strNumber = 0x01

let anyThing : any = "Hello";
console.log(anyThing.Name);
console.log(anyThing.Name.firstName);

let something : any;        // 该版本和书上有差异，如果不显示调用 any 后面的setName会报错
something = "Seven";
something = 7;
something = "9";
something.setName("MartySa");

let unionVal : string | number;
unionVal = "Seven";
unionVal = 7;
//unionVal = false;
function GetLenth(something : string | number) : string
{
    return something.toString();
}

// 接口 警报
interface Alarm
{
    fuc() : void
}

// 接口 灯光
interface Light
{
    lightON() : void;
    lightOff() : void;
}

// 接口 灯光警报，继承接口Alarm
interface LightableAlarm extends Alarm
{

    lightOn() : void;
    lightOff() : void;
}

// 类 门
class Door
{
    ShowName() : void
    {
        
    } 
}

// 多重继承
class SecurityDoor extends Door implements Alarm
{
    fuc() : void
    {

    }
}

let door : SecurityDoor = new SecurityDoor; // 不确定是否这样初始化
door.fuc();

// 汽车，实现接口 Alarm和Light
class Car implements Alarm, Light
{
    lightON() : void
    {

    }  
    
    lightOff() : void 
    {

    }

    fuc() : void
    {

    }
}

class Car2 implements LightableAlarm
{
    fuc() : void
    {

    }

    lightOff() : void 
    {

    }

    lightOn() : void 
    {
    }

    sc() : any
    {
        
    }
}

