const m = 12;
const n = 11;

const ackermann = (m, n) => {
   if (m === 0) {
      return n+1
   }
   if (n === 0) {
      return ackermann((m - 1), 1);
   }
   if (m !== 0 && n !== 0) {
      return ackermann((m-1), ackermann(m, (n-1)))
   }
}


console.log(ackermann(m, n));