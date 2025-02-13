let aymene = {
    p1 : "aymene chikour ",
    p2 : 22 ,

    m1 : function(x,y){
        return console.log(`hey ${x} you are ${y} years old`);
    }

}

console.log(aymene.m1("ahmed",22));
console.log(aymene.p1);
console.log(aymene.p2);

let a = {
    p : 23,
    l : "L3",
    q : "fuckin usthb",
    m2: function(){
        return `i am ${this.l} student in ${this.q} `
    }

}
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