console.log('Negate All Elements');

function negElements() {
    let array = [10, 18, -1, -2, 1, 3];
    let negatedArray = array.map(value => -value);
    return negatedArray;
}
console.log(negElements());