const arr = [1, 3, 5, 7, 8, 9, 6, 2, 4];

const arr2 = ["a", "b", "d", "c", "z", "f", "h", "g", "i"];


function sort(array) {
    let sorted = [];
    
    for (let i = 0; i < array.length; i++) {
        sorted[i] = array[i];
    }

    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - 1 - i; j++) {
            if (sorted[j] > sorted[j + 1]) {
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }
    
    return sorted;
}
console.log("hello");
console.log(sort(arr));
console.log(arr.sort());
console.log(sort(arr2));