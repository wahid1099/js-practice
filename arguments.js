function addNumbers(num1,num2){
    let result=0;
    ///argumetns are just like array but we cannot do push or pop with it because its not a real array we use arguments when we need to use the all input which user has given us 
    // console.log(arguments);
    for(const num of arguments){
        result=result + num;
    }
    return result;
}
const sum = addNumbers(23, 13, 50, 100, 45, 76, 198, 901);
console.log(sum);

function getFullName(firstName,lastName){
    let fullName ='';
    for(const part of arguments) {
        fullName = fullName + part+' ';
    }
    return fullName;

}

const name = getFullName('Omuk', 'Songket', 'bin', 'Hanif', 'Songket', 'bin', 'Tomuk', 'Songket', 'bin', 'Kumuk', 'Songket');
console.log(name);
