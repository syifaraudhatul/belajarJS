// console.log ("hello world") 
// alert("Sureveiss") notifikasi
// prompt("Pinjam Seratus") input

// var Promnet = "Coding is Easy"
// console.log (Promnet)
// var Promnet = "Coding is Easy"
// console.log (Promnet)

// let Promnet = "Coding is Easy"
// console.log (Promnet)
// Promnet = "Coding not Easy"
// console.log (Promnet)

// const Promnet = "Coding is Easy"
// console.log (Promnet)
// Promnet = "Coding is Easy"
// console.log (Promnet)

// let totalPoin = prompt ("Masukkan Poin anda")
//     if(totalPoin>100){
//         document.write("<h1>congratulation</h1>");
//     } else{
//         document.write("<h1>Nice Try</h1>");
//     }

// Minta pengguna memasukkan nilai x dan y
// let x = parseInt(prompt("Masukkan nilai x:"));
// let y = parseInt(prompt("Masukkan nilai y:"));

// // Evaluasi pernyataan
// let a = x < 10 && y > 1;
// let b = x < 10 && y < 1;
// let c = x === 5 || y === 5;
// let d = x === 6 || y === 5;
// let e = !(x === y);

// // Tampilkan hasil evaluasi
// if (a) {
//   alert("a: true");
// } else {
//   alert("a: false");
// }

// if (b) {
//   alert("b: true");
// } else {
//   alert("b: false");
// }

// if (c) {
//   alert("c: true");
// } else {
//   alert("c: false");
// }

// if (d) {
//   alert("d: true");
// } else {
//   alert("d: false");
// }

// if (e) {
//   alert("e: true");
// } else {
//   alert("e: false");
// }

// // const x = Number(prompt("Masukkan nilai x:"));
// // const y = Number(prompt("Masukkan nilai y:"));

// // if (x < 10 && y > 1) {
// //     console.log("(x < 10 && y > 1) = true");
// // } else {
// //     console.log("(x < 10 && y > 1) = false");
// // }

// // if (x < 10 && y < 1) {
// //     console.log("(x < 10 && y < 1) = true");
// // } else {
// //     console.log("(x < 10 && y < 1) = false");
// // }

// // if (x == 5 || y == 5) {
// //     console.log("(x == 5 || y == 5) = true");
// // } else {
// //     console.log("(x == 5 || y == 5) = false");
// // }

// // if (x == 6 || y == 5) {
// //     console.log("(x == 6 || y == 5) = true");
// // } else {
// //     console.log("(x == 6 || y == 5) = false");
// // }

// // if (!(x == y)) {
// //     console.log("!(x == y) = true");
// // } else {
// //     console.log("!(x == y) = false");
// // }
// const x = Number(prompt("Masukkan nilai x:"));
// const y = Number(prompt("Masukkan nilai y:"));

// if (x < 10 && y > 1) {
//     document.write("<h1>(x < 10 && y > 1) = true</h1>");
// } else {
//     document.write("<h1>(x < 10 && y > 1) = false</h1>");
// }

// if (x < 10 && y < 1) {
//     document.write("<h1>(x < 10 && y < 1) = true</h1>");
// } else {
//     document.write("<h1>(x < 10 && y < 1) = false</h1>");
// }

// if (x == 5 || y == 5) {
//     document.write("<h1>(x == 5 || y == 5) = true</h1>");
// } else {
//     document.write("<h1>(x == 5 || y == 5) = false</h1>");
// }

// if (x == 6 || y == 5) {
//     document.write("<h1>(x == 6 || y == 5) = true</h1>");
// } else {
//     document.write("<h1>(x == 6 || y == 5) = false</h1>");
// }

// if (!(x == y)) {
//     document.write("<h1>!(x == y) = true</h1>");
// } else {
//     document.write("<h1>!(x == y) = false</h1>");
// }

// let x = 6;
// let y = 3;

// console.log(x<10 && y>1)
// console.log(x<10 && y < 1)
// console.log(x==5||y==5)
// console.log(x==6||y==5)
// console.log(!(x==y))

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
//     // p.innerText = isi
// })

const inputBox = document.getElementById("inbox-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Masukan list dahulu");
    } else {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        li.appendChild(checkbox);
        let taskText = document.createTextNode(inputBox.value);
        li.appendChild(taskText);
        
        let removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.className = "remove-button";
        removeButton.style.marginLeft = "10px"
        li.appendChild(removeButton);
        listContainer.appendChild(li);
        
        inputBox.value = "";
        li.style.listStyleType = "none";
        
        removeButton.addEventListener("click", function () {
            li.remove();
        });
    }
}

listContainer.addEventListener("change", function (e) {
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        if (e.target.checked) {
            e.target.parentElement.style.textDecoration = "line-through";
        } else {
            e.target.parentElement.style.textDecoration = "none";
        }
    }
}); 