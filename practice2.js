let str1 = "JavaScript";
// console.log(str1.length)

let str2 = "hello world";
// console.log(str2.toUpperCase());

let str3 = "JAVASCRIPT";
// console.log(str3.toLowerCase());

let str4 = "Frontend";
// console.log(str4.charAt(3));

let str5 = "I am learning javascript";
// console.log(str5.includes("javascript"));

let str6 = "    Hello World    ";
// console.log(str6.trim());


let str7 = "I love Java";
// console.log(str7.replace("Java","JavaScript"));


let str8 = "javascript";
let num = 0;
let newStr8 = str8.split("")

for (i = 0; i < newStr8.length; i++) {
    if (newStr8[i] === "a") {
        num++
        // console.log(newStr8[i]);
    }
}
// console.log(num);

let str9 = "JavaScript Developer";
// console.log(str9.slice(0,10));

let str10 = "Frontend Developer";
// console.log(str10.startsWith("Frontend"));

let str11 = "profile.jpg";
// console.log(str11.endsWith(".jpg"));


let str12 = "hello"
let newStr12 = str12.split("");

let latestNewstr12 = ""
for (i = newStr12.length; i >= 0; i--) {
    // console.log(newStr12[i]);
    latestNewstr12 += newStr12[i];
}
// console.log(latestNewstr12);


let str13 = "javascript";
let firstStr13 = str13.slice(0, 1).toUpperCase();
let restStr13 = str13.slice(1)
let latestStr13 = firstStr13 + restStr13
// console.log(latestStr13);

let str14 = "Java Script Developer";
let newStr14 = str14.split(" ").join("")
// console.log(newStr14);

let str15 = "madam";
let newStr15 = "";

for (let i = str15.length; i >= 0; i--) {
    newStr15 += str15[i];
}
// console.log(newStr15);    

let str16 = "HTML CSS JavaScript Bootstrap";
// console.log(str16.split(" "));


let str17 = "javascript programming";
let newstr17 = str17.split("");
let countR = 0;
// console.log(newstr17);

for (let i = 0; i < newstr17.length - 1; i++) {
    if (newstr17[i] === "r") {
        countR += i;
    }
}
// console.log(countR);


let str18="javascript";
// console.log(str18.replaceAll("a",""));

let str19="I am learning JavaScript";
let newstr19=str19.split(" ").length;
// console.log(newstr19);

let str20="JavaScript";
// console.log(str20[0]);
// console.log(str20[9]);

let str21="hello world javascript";


