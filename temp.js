let hig = prompt("請輸入身高:")
let we = prompt("請輸入體重:")
let bmi = we / (hig / 100) ** 2

let res = "<ul>";
res += "<li>身高: " + hig + "</li>";
res += "<li>tacyu: " + we + "</li>";
res += "<li>bmi: " + bmi.toFixed(2) + "</li>";
res += "</ul>";
document.write(res)

let di = "<h1>";
di += "快健身!<br>" + "<b>健身，英文稱為workout，健身這兩個字拆開來的意思就是健康身體</b>";
di += "</h1>";
document.write(di)

// let te = prompt("請輸入身高:");
// let we = prompt("請輸入體重:");
// let bmi = we / (te / 100) ** 2;
// let res = "<ul>";
// res += "<li>身高:" + te + "</li>";
// res += "<li>體重:" + we + "</li>";
// res += "<li>bmi:" + bmi.toFixed(2) + "</li>";
// let show = "bmi為" + bmi;

// console.log(show);
// res += "</ul>";
// document.write(res);



// let email = "john@gmail.com";
// for (let i = 0; i < email.length; i++) {
//     console.log(i, email[i]);
// }

// let x = 10;
// console.log(x++);
// //console.log(String(10) === "10");

// let ch = 60;
// let en = 60;
// let math = 70;
// if ((ch >= 60 || en >= 60) && ma >= 60) {
//     console.log("pass!");
// } else {
//     console.log("fail@@");
// }