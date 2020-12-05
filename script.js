// console.log("Calculator started");

// var input_a = document.getElementById("number_a");
// var input_b = document.getElementById("number_b");
// var result = document.getElementById("result");

// function sum() {
//     var a = parseInt(input_a.value);
//     var b = parseInt(input_b.value);

//     if (a > 100 || b > 100) {
//         alert("Number A or Number B is above 100");
//         input_a.style.color = "red";
//         input_b.style.color = "red";
//     } else {
//         var sum = a + b;
//         // console.log(sum);

//         var eur = convert_to_eur(sum);
//         result.innerHTML = sum + " (Eur: " + eur + ")";
//         input_a.style.background = "green";
//         input_b.style.background = "green";
//     }
// }

// /* naujo mygtuko kuris isvalo reiksmes funkcijos sukurimas*/
// function empty() {
//     result.innerHTML = "X";
//     input_a.value = 0;
//     input_b.value = 0;
// }

// function convert_to_eur(amount) {
//     var result = amount / 3.4528;
//     result = Math.round(result);

//     if (amount < 100) {
//         //is euru atimame 1 vienteta
//         result--;
//     }

//     return result;
// }

// --------------------

// class Calculator {
//     static init = () => {
//         this.display = document.querySelector(".display");
//         this.display.focus();
//         Calculator.captureClicks();
//         Calculator.captureEnter();
//     };

//     static captureEnter = () => {
//         document.addEventListener("keyup", (e) => {
//             if (e.key === "Enter") {
//                 this.calculate();
//             }
//         });
//     };

//     static captureClicks = () => {
//         document.addEventListener("click", (e) => {
//             const el = e.target;

//             if (el.classList.contains("btn_num")) Calculator.addToDisplay(el);
//             if (el.classList.contains("btn_clear")) Calculator.clear();
//             if (el.classList.contains("btn_del")) Calculator.delete();
//             if (el.classList.contains("btn_calculate")) Calculator.calculate();
//         });
//     };

//     static addToDisplay = (el) => {
//         this.display.value += el.innerText;
//         this.display.focus();
//     };

//     static clear = () => {
//         this.display.value = "";
//         this.display.focus();
//     };

//     static delete = () => {
//         this.display.value = this.display.value.slice(0, -1);
//         this.display.focus();
//     };

//     static calculate = () => {
//         try {
//             let expression = this.display.value;

//             console.log(expression.search(/[a-z]/i));
//             if (expression.search(/[a-z]/i) !== -1) {
//                 this.display.value = "ERR";
//                 return;
//             }

//             const result = eval(expression);

//             if (result === NaN) {
//                 this.display.value = "ERR";
//                 return;
//             }

//             this.display.value = result;
//             this.display.focus();
//         } catch (error) {
//             this.display.value = "ERR";
//             return;
//         }
//     };
// }

// Calculator.init();
