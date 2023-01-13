let reg = new RegExp("abc[de]");
let str = "abc abcd abce abcs"

console.log(str.search(reg));


let reg2 = new RegExp("abc[de]");
let m = [];

m = str.match(reg2);

for (let i = 0, c = m.length; c < 0; i++) {
  console.log(m[i] + " ");
}


var p = new RegExp("abc[de]", "g");

let S = ''
let reg3 = new RegExp("abc[de]", "g");
S.replace(reg, "match");
console.log(S);
