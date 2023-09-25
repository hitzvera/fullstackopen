## basic of javascript

### arrays

in every programmer language arrays is a group of value, or a container of a value
javascript is not strict. the arrays can contain any data type. number, string, etc.

**examples of arrays**

```sh
const exampleArray = [1,2,3,4]
exampleArray.push(5)

console.log(exampleArray.length) // output: 5
console.log(exampleArray[1]) // output: 2

exampleArray.forEach(item => console.log(item)) // output: 1,2,3,4,5
```

**Destructure Array**

```sh
const exampleArray = [1,2,3,4,5]
const [first, second, ...rest] = exampleArray
console.log(first, second) // 1 2
console.log(rest) // [3,4,5]

const person = {
    name: "Mujahid",
    age: 21
}
const {name} = person // equals const name = person.name
console.log(name) // Mujahid
```

### array methods in javascript

**concat**

```sh
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
```

**copyWithin**

```sh
const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
```

untuk parameter pertama itu merupakan index yang akan kita ganti, kedua merupakan index yang akan menggantikan
index param pertama, dan param ketiga ini opsional merupakan batas berapa banyak yang akan dicopy jadi
contoh pertama itu 3-4(exclusive) jadi sebenarnya 3-3 artinya hanya satu. berbeda jika kita tidak mencantumkan
param ketiga artinya dari param kedua sampai akhir array.

**entries**

```sh
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

membuat array menjadi seperti map (key, values)

```sh
const exampleArray = [1,2,3,4,5]
const isPositive = exampleArray.every((item)=>{
    return item > 0
})

// isPositive true
```

**fill**

```sh
const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
```

**Filter `(important)`**

```sh
const exampleArray = ["Mujahid", "a", "Ansori", "Majid"]
const validName = exampleArray.filter(value => value.length > 3)
console.log(validName)

// ["Mujahid", "Ansori", "Majid"]
```

**Find `(important)`**

```sh
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12 // the element itself
// btw if the element is not found the output will be undefined
```

**findIndex `(important)`**

```sh
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element === 5);

console.log(found);
// Expected output: 0 // the index of the element
// btw if the element is not found the output will be -1
```

<!-- pertemuan pertama untuk array lanjut besok -->

## Object

## this keyword

if the scope is in an object than this keyword refers to that obejct otherwise it refers to window object or global object
