let word1;
let word2;
let word3;

let ifOK

do {
    ifOK = confirm("Tell me three most important words 💚");
} while (ifOK === false)

if (ifOK === true) {
    word1 = prompt("Type 1st word");
    word2 = prompt("Type 2nd word");
    word3 = prompt("Type 3rd word");
}

// word1

while (word1 === null || !word1 || !isNaN(word1)) {
    console.log("error")
    break;
}

let format1 = prompt(`Choose:
1. uppercase
2. lowercase
3. capitalize`)

if (format1 === "uppercase") {
    word1 = word1.toUpperCase()
} else if (format1 === "lowercase") {
    word1 = word1.toLowerCase()
} else if (format1 === "capitalize") {
    word1 = word1[0].toUpperCase() + word1.slice(1).toLowerCase();
}

// word2

while (word2 === null || !word2 || !isNaN(word2)) {
    console.log("error")
    break;
}

let format2 = prompt(`Choose:
1. uppercase
2. lowercase
3. capitalize`)

if (format2 === "uppercase") {
    word2 = word2.toUpperCase()
} else if (format2 === "lowercase") {
    word2 = word2.toLowerCase()
} else if (format2 === "capitalize") {
    word2 = word2[0].toUpperCase() + word2.slice(1).toLowerCase();
}

// word1

while (word3 === null || !word3 || !isNaN(word3)) {
    console.log("error")
    break;
}

let format3 = prompt(`Choose:
1. uppercase
2. lowercase
3. capitalize`)

if (format3 === "uppercase") {
    word3 = word3.toUpperCase()
} else if (format3 === "lowercase") {
    word3 = word3.toLowerCase()
} else if (format3 === "capitalize") {
    word3 = word3[0].toUpperCase() + word3.slice(1).toLowerCase();
}

console.log(`${word1} ${word2} ${word3}!`)