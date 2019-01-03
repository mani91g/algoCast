// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     const charMapA = buildCharMap(stringA);
//     const charMapB = buildCharMap(stringB);

//     if(Object.keys(charMapA).length === Object.keys(charMapB).length){
//         for(let char of charMapA){
//             if(charMapA[char] !== charMapB[char])  
//                 return false;
//         }
//         return true;
//     }        
//     else
//         return false;
// }

// function buildCharMap(word){
//     const charMap = [];

//     for(let char of word)
//     {
//         charMap[char] = charMap[char] + 1 || 1
//     }

//     return charMap;
// }

module.exports = anagrams;

function anagrams(stringA, stringB) {
    return processString(stringA) === processString(stringB)
}

function processString(word){
    return word
    .replace(/[^\w]/g,"")
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}
