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