const date = new Date();



console.log('const date = new Date();\n')

console.log('date.toString()');
console.log(date.toString());

console.log('date.valueOf()');
console.log(date.valueOf());

console.log('date.getDate()');
console.log(date.getDate());

console.log('date.getDay()');
console.log(date.getDay());

console.log('date.getMonth()');
console.log(date.getMonth());

console.log('date.getFullYear()');
console.log(date.getFullYear());

console.log('date.getHours()');
console.log(date.getHours());

console.log('date.getMinutes()');
console.log(date.getMinutes());

console.log('date.getMilliseconds()');
console.log(date.getMilliseconds());

console.log('date.valueOf().toString() + date.getMilliseconds().toString()');
console.log(date.valueOf().toString() + date.getMilliseconds().toString());

console.log('date.getTime()');
console.log(date.getTime());

console.log('date.getTime().toMinutes()');
console.log(toMinutes(date.getTime()));
