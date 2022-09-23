// console.log("mo")
// let myName = "mohamed fathi";
// console.log(typeof(`Welcome ${ myName }`));
// console.log({ name: "mohamed", age: "20" })

// let a = "mohamed"
// let b = "fathi"
// let c = "web"
// let d = "develober"

// console.log(`${a} ${b}
// ${c} ${d}`)


// let myFrind = ["ahmed", "yassen", "mohamed"]
// let clint = "mohamed"

// if (clint === "ahmed") {
//     console.log(`hello ${myFrind[0]}`);
// } else if (clint === "yassen") {
//     console.log(`hello ${myFrind[1]}`);
// } else if (clint === "mohamed") {
//     console.log(`Hello ${myFrind[2]}`);
// } else {
//     console.log("Name is not her");

// };

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
// let carName = ["Nissan", "BMW", "Mercedes", "Rang Rover", "Toyota", "Kia", "Hundai"]

// let models = ["Sedan", "Cross over"]

// let color = ["Black", "Red", "White", "Gray"]

// for (let i = 0; i < carName.length; i++) {
//     console.log("_".repeat(15))
//     console.log(`. ${carName[i]}`)
// //     console.log("_".repeat(15))
// //     console.log("models: ")
// //     for (let m = 0; m < models.length; m++) {
// //         console.log(`- ${models[m]}`)
// //     }
// //     console.log("colors: ")
// //     for (let c = 0; c < color.length; c++) {
// //         console.log(`- ${color[c]}`)
// //     }
// // }

// let result = 0;

// // function sayHello(...numbers) {
// //     for (let i = 0; i < numbers.length; i++) {
// //         result += numbers[i];
// //     }
// //     return result;
// // }

// // console.log(sayHello(10, 10, 10));

// // function hello(Fname, Lname) {
// //     let message = `Hello`;

// //     function conc() {
// //         message = `${message} ${Fname} ${Lname}`
// //     }
// //     conc();
// //     return message;
// // }

// // console.log(hello("Mohamed", "Fathi"));


// // let mapping = "elZERo";
// // let nums = [1, -10, -20, 15, 100, -30];



// // let ma = mapping.split("").map(function(ele) {
// //     return ele === ele.toLocaleLowerCase() ? ele.toUpperCase() : ele.toLocaleUpperCase()
// // }).join("");

// // console.log(ma);

// // let nu = nums.map(function(elem) {
// //     return -elem;
// // })

// // console.log(nu);

// // let to = carName.filter(function(ele) {
// //     return ele.startsWith("T")
// // });

// // console.log(to)

// let baGss = document.getElementById("bag");
// let baDs = document.getElementById("bags");
// let home = document.getElementById("home");
// let homeb = document.getElementById("homeb");
// let coll = document.getElementById("collection");
// let collb = document.getElementById("collb");
// let collII = document.getElementById("coll-2");
// let market = document.getElementById("market");
// let marketb = document.getElementById("marketb");
// let con = document.getElementById("contact");
// let conb = document.getElementById("conb");


// baGss.onclick = function() {
//     home.classList.add("bags")
//     coll.classList.add("bags")
//     collII.classList.add("bags")
//     market.classList.add("bags")
//     con.classList.add("bags")
//     baDs.classList.remove("bags");
//     baDs.classList.add("active");
// };

// homeb.onclick = function() {
//     home.classList.remove("bags")
//     coll.classList.remove("bags")
//     collII.classList.remove("bags")
//     market.classList.remove("bags")
//     con.classList.remove("bags")
// };

// collb.onclick = function() {
//     baDs.classList.add("bags");
//     coll.classList.remove("bags")
//     collII.classList.remove("bags")
//     market.classList.add("bags")
//     home.classList.add("bags")
//     con.classList.add("bags")
// };

// marketb.onclick = function() {
//     window.open("#market", "_self", "")
//         // location.href = "#market"
//         //     // market.classList.remove("bags")
//     baDs.classList.add("bags");
//     coll.classList.remove("bags")
//     collII.classList.remove("bags")
//     home.classList.add("bags")
//     con.classList.add("bags")
//     coll.classList.add("bags")
//     collII.classList.add("bags")
// };

// conb.onclick = function() {
//     home.classList.remove("bags")
//     coll.classList.remove("bags")
//     collII.classList.remove("bags")
//     market.classList.remove("bags")
//     con.classList.remove("bags")
// };

// let wellCom = document.querySelector(".wellcom");
// let logo = document.querySelector(".logo");

// logo.onclick = function() {
//     wellCom.innerHTML = "hey,welcome to VAR store";
// };



// for (let i = 0; i <= 2; i++) {
//     let myDiv = document.createElement("div");
//     let myHeading = document.createElement("h1");
//     let myP = document.createElement("p");
//     let headingText = document.createTextNode("Product Name");
//     let pText = document.createTextNode("Title of product");
//     myDiv.className = "product";
//     myHeading.appendChild(headingText);
//     myP.appendChild(pText);
//     myDiv.appendChild(myHeading);
//     myDiv.appendChild(myP);
//     document.body.appendChild(myDiv);
// }

// console.log(myElement);

// let username = document.querySelector("[name='Username']").cloneNode(true);
// let userage = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function(event) {
//     let userV = false;
//     let ageV = false;

//     if (username.Value !== "" || username.Value.length <= 10) {
//         userV = true;
//     };

//     if (userage !== "") {
//         ageV = true;
//     };

//     if (userV === false || ageV === false) {
//         event.preventDefault();
//     };

// }

// username.style.cssText = "background-color: black; color: red";

// let myP2 = document.createElement("p").cloneNode(true);
// let text = document.createTextNode("10");
// let Glin = document.querySelector("#googleL");

// Glin.style.cssText = "display: none; text-decoration: none; font-size: 50px; margin-left:300px; margin-bottom:50px";

// myP2.appendChild(text);

// myP2.style.cssText = "margin-left: 300px; font-size: 50px; margin-bottom: 50px";


// document.body.appendChild(myP2);


// myP2.onclick = function() {
//     let newName = myP2.cloneNode(true);
//     newName.className = "cloned";
//     document.body.appendChild(newName);
// }

// document.addEventListener("click", function(e) {
//     if (e.target.className === "cloned") {
//         console.log("i'm cloned");
//     }
// })

// function counter() {
//     myP2.innerHTML -= 1;
//     if (myP2.innerHTML === "0") {
//         clearInterval(cont)
//         myP2.style.cssText = "display: none";
//         Glin.style.cssText = "display: block; text-decoration: none; font-size: 50px; margin-left:300px; margin-bottom:50px";
//     };
// };

// let cont = setInterval(counter, 1000);
let btnU = document.querySelector(".btnUp");

window.localStorage.setItem("color", "#333");

// window.scroll = function() {
//     if (window.scrollY >= 100) {
//         btn.style.display = "block"
//     } else(
//         btn.style.display = "none"
//     )
// };

// btn.onclick = function() {
//     window.scrollY = ({
//         top: 0,
//         behavior: "smooth",
//     })
// };

// btnU.onclick = function() {
//     document.body.style.backgroundColor = window.localStorage.getItem(`color`);
// }

let lis = document.querySelectorAll("ul li");

// lis.forEach((li) => {
//     li.addEventListener("click", (e) => {
//         console
//     })
// })