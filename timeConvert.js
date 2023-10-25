const timeConvert = (num) => {
  let number        = num;
  let hours         = (number / 60);
  let returnHours   = Math.floor(hours);
  let minutes       = (hours - returnHours) * 60;
  let returnMinutes = Math.round(minutes);

  return `${number} minutes = ${returnHours} hour(s) ${returnMinutes} minute(s)`;
}


console.log(timeConvert(200));
console.log(timeConvert(457));