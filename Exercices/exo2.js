function isAnagramme(a, b) { // SI a = beau et b = aube
    const aArray = a.split(''); // [b, e, a, u ]
    const sorted = aArray.sort(); // [a, b, e, u]
    const strA = sorted.join(''); // abeu
    const strB = b.split('').sort().join(''); // abeu
    const result = strA === strB;
    return result;

    // return str1 === strB;
}

console.log( isAnagramme('beau', 'aube') );
console.log( isAnagramme('pirate', 'patrie') );
console.log( isAnagramme('pirate', 'toto') );