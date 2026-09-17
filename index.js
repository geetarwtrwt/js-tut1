// console.log("geeta");
// let name="geeta";
// let numType=Number(name);
// console.log(typeof numType);
// console.log(numType);

// let val1="";
// let boolVal=Boolean(val1);
// console.log(boolVal); 
// console.log(typeof boolVal); 

let str=new String('geeta');
console.log(typeof str)

// console.log(str.charAt(4))

// console.log(str.concat(" rawat"))

// console.log(str.includes("ga"))

// console.log(str.indexOf("g"))

// console.log(str.length);

// console.log(str.match("ta"))

// console.log(str.replace("geeta","rawat"));

// console.log(str.replaceAll("e","4"));

// console.log(str.slice(2,4));

// console.log(str.concat(" rawat").split(" "));

// console.log(str.startsWith("G"));

// console.log(str.substr(3,5));

// console.log(str.substring(2,5));

let name="geeta";
// console.log(name.charAt(4))

// console.log(name.includes("g"))

// console.log(name.concat(" rawat"));

// console.log(name.indexOf("e"))

// console.log(name.length)

// console.log(name.match("gee"))

// console.log(name.replace("e","i"))
// console.log(name.replaceAll("e","i"));

// console.log(name.slice(2,4));

// console.log(name.split(""))

// console.log(name.startsWith("g"))

// console.log(name.substr(2,4));

// console.log(name.substring(1,3));

// console.log(name.toLowerCase());

// console.log(name.toUpperCase());

// console.log(name.trim());

// let num=1000000;
// console.log(num.toLocaleString("en-IN"));

// console.log(-10);
// console.log(Math.abs(-10));


let min=10;
let max=20;

// console.log(Math.round(Math.random()*(max-min))+min);

// let date=new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());


let date=new Date();
// console.log(Math.floor(Date.now()/1000))

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getTime());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());


let arr=[1,2,3,4,5];
// console.log(arr);
// let spliceArr=arr.splice(0,2,"geeta","rawat");
// console.log(spliceArr); 
// console.log(arr); 


let arr2=["geeta","Rawat"];
// let newArr=[...arr,...arr2];
// console.log(newArr);

let arr3=[1,2,[3,4,[5,6,7]]]
// console.log(arr3.flat(3));


let arr4=Array.isArray("geeta")
// console.log(arr4);

let arr5=Array.of("geeta","rawat")
// console.log(arr5);


let str2="geeta"
let arr6=Array.from(str2);
// console.log(arr6);
// console.log(str2);


let str1=2500;
// console.log(typeof toString(str1));


let str3=false;
// console.log(typeof String(str3));

let str4=undefined;
// console.log(typeof String(str4));

let str5=[10,20,30];
// console.log(typeof String(str5));


let value = String(50 + 50);
// console.log(value);
// console.log(typeof value);

let strobj=new String("JavaScript");
// console.log(strobj);

let strobj2 = new String("Hello");
let strobj3 = "Hello";
// console.log(strobj2===strobj3);


let strobj4="geeta";
// console.log(strobj4.charAt(0));


let strobj5=new String("frontend");
// console.log(typeof toString(strobj5));

let char1="JavaScript";
// console.log(char1.charAt(3));


let char2="geeta";

for(let i=0;i<=char2.length;i++){
    // console.log(char2.charAt(char2[i]));    
}

let char3 = "Hello";
// console.log(str.charAt(10));


let arrpush1=["apple","banana"];
// arrpush1.push("mango")
// arrpush1.push("orange","grapes")
// console.log(arrpush1);

let arrpush2=[10,20,30];
// arrpush2.push(40)
// console.log(arrpush2);


let arrpush3=["geeta","aman","priya"];
// arrpush3.push("rahul")
// console.log(arrpush3);

let arrpop1=["apple","banana","mango"];
// let arrpop2=arrpop1.pop()
// console.log(arrpop1);
// console.log(arrpop2);


let arrpop3=[10,20,30,40,50];
// arrpop3.pop(2);
// console.log(arrpop3);


let arrpop4 = ["A", "B", "C"];
// let result = arrpop4.pop();

// console.log(result);
// console.log(arrpop4);

let arrshift=["apple","banana","mango"];
// let newarrshift=arrshift.shift()
// console.log(arrshift);
// console.log(newarrshift);


let arrshift2=[10,20,30,40];
// arrshift2.shift(2)
// console.log(arrshift2);

let arrshift3=["a","b","c"];
// let newarrshift3=arrshift3.shift();
// console.log(newarrshift3);
// console.log(arrshift3);


let arrunshift1=["banana","mango"];
// arrunshift1.unshift("apple");
// console.log(arrunshift1);


let arrunshift2=["c","d"];
// arrunshift2.unshift("a","b");
// console.log(arrunshift2);

let arrunshift3=["aman","priya"];
// arrunshift3.unshift("geeta");
// console.log(arrunshift3);


let arrincludes=["apple","banana","mango"];
// console.log(arrincludes.includes("mango"));


let arrincludes2=[10,20,30,40];
// console.log(arrincludes.includes(50));


let arrincludes3=["html","css","javascript","php"];
// console.log(arrincludes3.includes("javascript"));


let arrincludes4=["apple","banana"];
// console.log(arrincludes4.includes("Apple"));


let arrindex=["apple","banana","mango"];
// console.log(arrindex.indexOf("mango"));


let arrindex2=[10,20,30,40];
// console.log(arrindex2.indexOf(30));


let arrindex3=["html","css","javascript","php"];
// console.log(arrindex3.indexOf("css"));


let arrindex4=["apple","banana","mango"];
// console.log(arrindex4.indexOf("orange"));


let arrjoin1=["i","love","javascript"];
// console.log(arrjoin1.join(" "));

let arrjoin2=["html","css","javascript","php"];
// console.log(arrjoin2.join("-"));


let arrjoin3=["i","am","learning","javascript"];
// console.log(arrjoin3.join(" "));


let arrjoin4=["a","b","c"];
// console.log(arrjoin4.join("-"));


let arrslice=["apple","banana","mango","orange"];
// console.log(arrslice.slice(1,3));


let arrslice2=[10,20,30,40,50];
// console.log(arrslice2.slice(0,3));
// console.log(arrslice2.slice(-2));


let arrslice3=[10,20,30,40];
// let newarrslice3=arrslice3.slice(1,3);
// console.log(newarrslice3);
// console.log(arrslice3);


let arrsplice1=["apple","banana","mango"];
// console.log(arrsplice1.splice(1,1));

let arrsplice2=[10,20,30,40,50];
// console.log(arrsplice2.splice(1,2));


let arrsplice3=["apple","banana","mango"];
// arrsplice3.splice(1,1,"orange")
// console.log(arrsplice3);


let arrsplice4=["html","css"];
// arrsplice4.splice(1,0,"javascript")
// console.log(arrsplice4);

let arrspread=[10,20,30];
// let newarrspread=[...arrspread];
// console.log(newarrspread);


let arrspread2=[1,2,3];
let arrspread3=[4,5,6];
// let arrspread4=[...arrspread2,...arrspread3]
// console.log(arrspread4);



let arrspread5=[1,2,3];
// let arrspread6=[0,...arrspread5,4]
// console.log(arrspread6);


let html=["html"];
let css=["css"];
let php=["php"];
let arrspread7=[...html,...css,...php];
// console.log(arrspread7);


let arrflat=[1,2,[3,4],5];
// console.log(arrflat.flat(2));

let arrflat2=[1,[2,3],[4,5]];
// console.log(arrflat2.flat(2));

let arrflat3=[1,[2,[3,4]]];
// console.log(arrflat3.flat(2));

let arrflat4=[1,[2,[3,[4,5]]]]
// console.log(arrflat4.flat(3));

let isarr=[10,20,30];
// console.log(Array.isArray(isarr));


let isarr2="hello"
// console.log(Array.isArray(isarr2));

let isarr3=[1,2,3];
let isarr4={name:"geeta"};
// console.log(Array.isArray(isarr3));
// console.log(Array.isArray(isarr4));


// console.log(Array.isArray([]));
// console.log(Array.isArray("hello"));
// console.log(Array.isArray(100));



let arrof=Array.of(10,20,30);
// console.log(arrof);

let arrof2=Array.of("html","css","js");
// console.log(arrof2);


// console.log(Array.of(5));

// console.log(Array(5));
// console.log(Array.of(5));


let arrfrom="geeta";
// console.log(Array.from(arrfrom));

let arrfrom2="php";
// console.log(Array.from(arrfrom2));

let arrfrom3=new Set([10,20,30]);
// console.log( Array.from( arrfrom3));

for(let i=1;i<=5;i++){
    // console.log(Array.from(i));    
}



let obj={
    name:"geeta",
    "full name":"geeta rawat",
    email:"rwtgeet@gmail.com",
    age:27,
    add:{
        "h no":"railway colony",
        city:"delhi"
    }
};

// console.log(obj.email);
// console.log(obj["full name"]);

// Object.freeze(obj)
// obj.email="rwtgeet6@gmail.com";
// console.log(obj.email);
// console.log(obj?.add["h no"]);


let obj2={
    name:"deepu",
    age:25
}

// console.log(obj2);

let newObj=Object.assign({},obj,obj2);
// console.log(newObj);


let objKey=Object.keys(obj.add)
// console.log(objKey);

let objValue=Object.values(obj)
// console.log(objValue);


let objEnt=Object.entries(obj)
// console.log(objEnt);



