let letterSearch = ["хлеб", "мед", "банан", "яблоко", "Азиза", "цветок", "машина"];

let wordsWithN = [];
let wordsWithoutN = [];

for (let word of letterSearch) {
    if (word.toLowerCase().includes("н")) {
        wordsWithN.push(word);
    } else {
        wordsWithoutN.push(word);
    }
}

console.log("Слова с 'н':", wordsWithN);
console.log("Слова без 'н':", wordsWithoutN);
