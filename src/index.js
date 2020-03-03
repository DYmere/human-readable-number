let list = {
0: 'zero',
1:'one',
2:'two',
3:'three',
4:'four',
5:'five',
6:'six',
7:'seven',
8:'eight',
9:'nine',
10:'ten',
11:'eleven',
12:'twelve',
13:'thirteen',
14:'fourteen',
15:'fifteen',
16:'sixteen',
17:'seventeen',
18:'eighteen',
19:'nineteen',
20:'twenty',
30:'thirty',
40:'forty',
50:'fifty',
60:'sixty',
70:'seventy',
80:'eighty',
90:'ninety'
}

module.exports = function toReadable (number) {
  
  function partOne(number) { return list[Math.trunc(number/100)] + ' hundred '; }
  
  function partTwo(number) {
    if (number == 0) return list[number];

    let value = Math.trunc(number - Math.trunc(number/100)*100);

    if (value == 0) return '';
    else if (value >= 0 && (value <=20 || value % 10 == 0)) {
      return list[value];
    }
    else {
      return list[Math.trunc(value/10)*10] + ' ' + list[value%10];
    }
  }
  

  var len = String(number).length;

  switch(len) {
    case 1:
    case 2:
      return partTwo(number);
      break;
    case 3:
      let result = (partOne(number) + partTwo(number)).trim();
      return result;
      break;
  } 
}
