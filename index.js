let nos = null;
console.log(nos);


//1~10 亂數
// for (let i = 0; i < 10; i++) {
//     let r = Math.floor(Math.random() * 50) + 1;
//     console.log(r);
// }


/// 日期
const dateE1 = document.querySelector(".Date");
dateE1.innerText = Date();

///按鈕( 取得亂數+排序)
function getLasu(su) {
    let numbers = [];
    for (let y = 0; y < su; y++) {
        let number = [];
        while (true) {
            let r = getRandomInt(1, 49);
            if (!number.includes(r)) {
                number.push(r);
            }
            if (number.length == 6) {
                break;
            }
        }
        //排序
        number.sort(compare);

        numbers.push(number);
        //document.write(`<h3>第${(y + 1)}組號碼為: ${number.join(" ")}</h3><hr>`);
    }
    return numbers
}


function getLottroy() {
    const lottroyE1 = document.querySelector("#lottroy");
    let su = prompt("幾組?");
    numbers = getLasu(su);
    lottroyE1.innerText = "";
    for (let i = 0; i < numbers.length; i++) {
        rows = numbers[i].join(",");
        lottroyE1.innerHTML += `<h3>第${(i + 1)}組號碼為: ${rows}</h3><hr>`;
        //document.write(`<h3>第${(i + 1)}組號碼為: ${rows}</h3><hr>`);
    }

}


// for (let i = 0; i < 6; i++) {
//     let r = getRandomInt(1, 49);
//     // document.write("第" + (i + 1) + "個號碼為:" + r + "<br>");
//     document.write(`第${(i + 1)}個號碼為: ${r}<br>`);
//     numbers.push(r);
// }

// while (true) {
//     let r = getRandomInt(1, 49);
//     console.log(r);
//     if (r == 49) {
//         break;
//     }
// }

//object
let user = {
    name: "JJJ",
    height: 175.6,
    weight: 95.8
}

console.log(user, typeof (user));
console.log(user.name, user["name"]);

document.write(`${user.name}的bmi:${getBmi(user.height, user.weight)}`);

const h1 = document.querySelector("h1");
console.log(h1);
h1.innerHTML = "<u>BigLOto</u>";
h1.style.color = "red";

// 函式
function getRandomInt(start, end) {
    let x = Math.floor(Math.random() * end) + start;
    return x
}


function compare(a, b) {
    return a - b;
}

function getBmi(height, weight) {
    let bmi = (weight / (height / 100) ** 2).toFixed(2);
    if (isNaN(bmi)) {
        return "數值錯誤!";
    }
    return bmi
}

// 陣列(串列)

