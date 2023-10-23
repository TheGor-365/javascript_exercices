const isHappyTicket = (num) => {
  let nums = num.split('');
  nums = nums.map((element)=> parseInt(element));

  const numsHalf  = Math.ceil(nums.length / 2);

  const elementsSum = (numbers) => {
    let sum = 0;

    for (const number of numbers) {
      sum += number;
    }
    return sum;
  };

  const startNums = nums.splice(0, numsHalf);
  let start = elementsSum(startNums);

  const endNums   = nums.splice(-numsHalf);
  let end = elementsSum(endNums);

  return start === end
};



console.log(isHappyTicket('385916')); // true
console.log(isHappyTicket('231002')); // false
console.log(isHappyTicket('1222'));   // false
console.log(isHappyTicket('054702')); // true
console.log(isHappyTicket('00'));     // true
