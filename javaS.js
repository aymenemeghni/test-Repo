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

window.localStorage.setItem("color", "black");
// c.style.backgroundColor = window.localStorage.getItem("color");
// c.onclick = function(){
//  c.style.backgroundColor = window.localStorage.getItem("color");
// };

let nameP = ["aymene", "mohamed", "meghni"];
let [xy, yy, z] = nameP;
console.log(xy);
console.log(yy);
console.log(z);
console.log(nameP);

[xy, z] = [z, xy];

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let firstO = myFriends[0];
let secondO = myFriends[1];
let thirdO = myFriends[2];
console.log(firstO);
console.log(secondO);
console.log(thirdO);

let { title, age, available, skills } = firstO;

console.log(
  `${title}*** ${age}*** ${available}*** ${skills[0]}*** ${skills[1]}`
);

console.log("****************************************************************");

let { title: tit1, age: age1, available: ava1, skills: skills1 } = secondO;

console.log(`${tit1}*** ${age1}*** ${ava1}*** ${skills1[0]}*** ${skills1[1]}`);

console.log("****************************************************************");

let { title: tit2, age: age2, available: ava2, skills: skills2 } = thirdO;

console.log(`${tit2}*** ${age2}*** ${ava2}*** ${skills2[0]}*** ${skills2[1]}`);

let mapuser = new Map();
mapuser.set("aymene", function () {
  console.log("aymeneeee");
});
console.log(mapuser.get("aymene"));
console.log(mapuser.has("x"));
console.log(mapuser.has("aymene"));
console.log(mapuser);

console.log(..."aymene");
console.log([..."aymene"]);

let arraynum = [1, 2, 3, 4];
let arraynumm = [5, 6, 7, 8];
let concatinatearray = [...arraynum, ...arraynumm];
console.log(concatinatearray);
let copy1 = arraynum;
let copy2 = [...arraynum];
console.log(copy1);
console.log(copy2);

// *****regular exp********

let testname = "Aymene meghni love real madrid";
let regexp = /Aymen/g;
let resulttest = testname.match(regexp);
console.log(resulttest);

// verification email
let emails = "meghnimohamedaymene@gmail.com  @gmail.com  aa@gmail.com";
let expregforemail = /\w+@gmail.com/g;
let emailvalid = emails.match(expregforemail);
console.log(emailvalid);

//chalenge el zeroooo
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re = /((http:\/\/)?|(https:\/\/)?)?(w{3})?(\.)*\w+\.org.*/gi;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));

class userPlat {
  constructor(username, userage, useremail) {
    this.username = username;
    this.userage = userage;
    this.useremail = useremail;
  }
}

let user1 = new userPlat("aymene","20YO","meghnimohamedaymene@gmail.com");

console.log(user1);

console.log(user1 instanceof userPlat);