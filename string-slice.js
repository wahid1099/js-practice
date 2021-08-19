const anthem= 'Amar Sonar Bangla Ami Tomai Valobashi';
const words=anthem.split(' ');
const withoutA = anthem.split('a');

console.log(words);
console.log(withoutA);

//slice the
const smallSlice = anthem.slice(5,13);
console.log(smallSlice);

//substr
const anotherpart=anthem.substr(11,8);
console.log(anotherpart);
//substring
const anotherpartofsubstring=anthem.substring(11,15);
console.log(anotherpartofsubstring);
//concat string
const firt='amader';
const second='city';
// const fullString=firt+second;
const fullString=firt.concat(second).concat('abc').concat('hi');
console.log(fullString);

const words2 = ['alim', 'badhon', 'cameron', 'david'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
// const allJoined = words2.join(', ');
const allJoined = words2.join('WWW');
console.log(allJoined);
