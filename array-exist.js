function megaFriend(freinds){
    if(Array.isArray(freinds)==false){
        return 'Please provide an array';
    }
    let mega= friends[0];
    for (const friend of friends) {
        if(friend.length==mega.length){
            mega=friend;
        }
    }
    return mega;
}

const friends = ['kutub','fox', 'Lion', 'Shamol', 'Sabbir'];
const myBigBuddy = megaFriend(friends);
console.log(myBigBuddy);

if (friends.indexOf('fox') != -1)  {
    console.log('fox exist');
    // output.push(product);
}


if(friends.indexOf('fox') != -1){
    console.log('fox exist');

}else {
    console.log('fox not exist');
}
// includes
if (friends.includes('Lion')) {
    console.log('Lion exits using includes');
}

// concat
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);
