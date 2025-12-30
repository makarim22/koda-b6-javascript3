// javascript built-in method
// method yang berasal dari Array

// 1) push
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.push(11);
console.log(array);

// 2) pop
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayClean = array2.pop();
console.log(arrayClean);
console.log(array2);

// 3) shift
// menghapus elemen pertama dari suatu array dan menyimpannya dalam suatu variabel
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstElement = array3.shift();
console.log(firstElement);
console.log(array3);

// 4) unshift
// kebalikan dari shift, menambahkan elemen baru di awal array
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array4.unshift(0);
console.log(array4);

// 5) map
// mengebalikan result array yang telah melewati sebuah fungsi yang ditambahkan pada map 
const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayNew = array5.map((x) => x * x);
console.log(arrayNew);

// 6) reduce
const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initialValue = 0;
const sumWithInitial = array6.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);


// 7) reverse
// membalik urutan array
const nilai = [70, 80, 90]
const nilaiReversed = nilai.reverse()
console.log(nilaiReversed)
console.log("nilai" , nilai)

// 8) toReversed()
// serupa dengan reverse, tetapi tidak mengubah array asal 
const nilai2 = [70, 80, 90]
const nilaiReversed2 = nilai2.toReversed()
console.log(nilaiReversed2)
console.log("nilai 2" , nilai2)

// 9) toString()
/*
toString() digunakan untuk mengubah array menjadi string
*/
const nilai3 = [70, 80, 90]
const nilaiString = nilai3.toString()
console.log("nilai string", nilaiString)
console.log(typeof(nilaiString[0]))
console.log(nilaiString[5])

// 10) with
// mengubah array given index menjadi given index value yang baru
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]

// 11) find
// cari elemen pertama yang cocok
const arr10 = [1, 2, 3, 4, 5];
x = arr10.find(x => x > 2); 
console.log(x)

// 12) findIndex
// cari index elemen pertama yang cocok
const arr11 = [1, 2, 3, 4, 5];
x = arr11.findIndex(x => x > 2); 
console.log(x)

// 13) includes
// cek apakah array memiliki elemen tertentu, mengembalikan nilai boolean
const arr12 = [1, 2, 3, 4, 5];
x = arr12.includes(6); 
console.log(x)

// 14) split
// memecah string menjadi array
const arr13 = "1,2,3,4,5";
x = arr13.split(","); 
console.log(x)

// 15) join
// menggabungkan array menjadi string
console.log(["a","b"].join("-")); 

// 16) toUppercase()
// mengubah string menjadi huruf besar
console.log("hello".toUpperCase());

// 17) toLowerCase()
// mengubah string menjadi huruf kecil
console.log("HELLO".toLowerCase());

// object method

// 18) keys
// mengambil keys dari sebua object
console.log(Object.keys({a:1, b:2})); 

// 19) values
// mengambil values dari sebuah object
console.log(Object.values({a:1, b:2}));

// 20) entries
// mengambil key dan values dari sebuah object
console.log(Object.entries({a:1, b:2}));

/// 5 built-in function

// 1) Math.random
// mengembalikan bilangan random
console.log(Math.random());

// 2) Math.round
// mengembalikan bilangan bulat terdekat
console.log(Math.round(1.5));

// 3) Math.floor
// mengembalikan bilangan bulat terkecil
console.log(Math.floor(1.5));

// 4) Math.ceil
// mengembalikan bilangan bulat terbesar
console.log(Math.ceil(1.5));

// 5) Math.abs
// mengembalikan nilai absolut
console.log(Math.abs(-5));
