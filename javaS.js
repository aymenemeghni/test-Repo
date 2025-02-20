let aymene = {
  p1: "aymene chikour ",
  p2: 22,

  m1: function (x, y) {
    return console.log(`hey ${x} you are ${y} years old`);
  },
};

console.log(aymene.m1("ahmed", 22));
console.log(aymene.p1);
console.log(aymene.p2);

// DOM

let a = {
  p: 23,
  l: "L3",
  q: "fuckin usthb",
  m2: function () {
    return `i am ${this.l} student in ${this.q} `;
  },
};

console.log(a.m2());
let ele = document.getElementById("phone");
console.log(ele);

let ele1 = document.getElementsByTagName("div");
console.log(ele1);
console.log(ele1[1]);
console.log(ele1[2]);
console.log(ele1[3]);
console.log(ele1[4]);
let y = 4;
let x = document.getElementsByTagName("label")[0];
console.log(x);
console.log(x.getAttribute("for"));
console.log(x.getAttribute("for"));
console.log(x.hasAttribute("id"));
console.log(x.hasAttribute("for"));
console.log(x.hasAttributes());

let r = document.createElement("div");
console.log(r);
let s = document.createAttribute("src");
r.setAttributeNode(s);
console.log(s);
console.log(r);
r.setAttribute("src", "aaaaaaaaaaa");
console.log(r);

let q = document.createElement("div");
let t = document.createTextNode("real madrid is  the best club in the world");
console.log(t);
q.appendChild(t);
console.log(q);
let b = document.createComment("this is my first experience in JS ");
console.log(b);
let c = document.getElementsByTagName("button")[0];
console.log(c);
c.onclick = function () {
  console.log("js test");
};
document.oncontextmenu = function () {
  console.log("menue");
};
console.log("*********************************");

document.onmouseenter = function () {
  console.log("entre");
};
document.onmouseleave = function () {
  console.log("leave");
};

let v = document.getElementsByTagName("div")[0];
console.log(v);
console.log(v.classList);
console.log(v.classList.length);
console.log(v.classList.contains("aymene"));
console.log(v.classList.item("0"));
v.classList.add("class1", "class2");
console.log(v);
v.classList.toggle("class3");
console.log(v);

console.log("*************************");
let h = document.getElementsByTagName("h2")[0];
console.log(h);
console.log(h.nextSibling);
console.log(h.nextElementSibling);
console.log(h.previousSibling);
console.log(h.previousElementSibling);

let hh = h.cloneNode(true);
console.log(hh);

// BOM
// window.alert("hola");
// let confirmlet = window.confirm("are you sure ? ");
// console.log(confirmlet);
// let promp = prompt("give me your name", "mohamed");
// console.log(promp);

let set = setTimeout(
  function (a) {
    console.log(`hello ${a}`);
  },
  4000,
  "aymen meghni"
);
c.onclick = function () {
  clearTimeout(set);
};

console.log(location.href);
console.log(location.host);
console.log(location.hostname);
console.log(location.protocol);
console.log(location.hash);
// location.assign("google.com");
// location.replace("google.com");
console.log(history);
console.log(history.length);
// history.back();
// history.forward();
// history.go(0);
console.log(history);
console.log(history);
let ide = document.getElementsByTagName("div")[3];
console.log(ide);
c.onclick = function () {
  console.log(ide);
  if (ide === +213) {
    console.log("algeria");
  } else {
    console.log("other country");
  }
};
console.log("***************************************************************");
console.log("***************************************************************");
console.log("***************************************************************");
console.log("***************************************************************");
console.log("***************************************************************");
console.log("aymene");
console.log("***************************************************************");
console.log("***************************************************************");
console.log("***************************************************************");
c.onclick = function () {
  // window.print();
  window.scrollTo(400, 400);
};
window.scrollTo(400, 400);
window.scrollTo({
  left: 2000,
  top: 1000,
  behavior: "smooth",
});



window.localStorage.setItem("color","black");
// c.style.backgroundColor = window.localStorage.getItem("color");
// c.onclick = function(){
//  c.style.backgroundColor = window.localStorage.getItem("color");
// };


let nameP = ["aymene","mohamed", "meghni"];
let [xy , yy , z] = nameP;
console.log(xy);
console.log(yy);
console.log(z);
console.log(nameP);