// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return  str.split('').reduce((a,b) => b+a, '' )
}

module.exports = reverse;

// function reverse(str) {
//     return str.split('').reverse().join('');
// }


// function reverse(str) {
//     var strResult = "";

//     for( i= 0; i < str.length; i++)
//     {
//         strResult =  strResult + str[str.length - 1 - i]
//     }

//     return strResult;
// }

// function reverse(str) {
//     var strResult = "";

//     for( let c of str)
//     {
//         strResult =  c + strResult
//     }

//     return strResult;
// }