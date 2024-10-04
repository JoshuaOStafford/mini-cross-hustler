type Word = {
    name: string;
    length: number;
    characters: string;
    known: "yes" | "with_clue" | "no" | "unknown";
}

export default function wordsFromTheStructure(structure: string) {
    let words = <Word[]>[];
    let potentialDup = false;
    let numberOfDupes = 0;
    for (let index = 1; index <= 25 && words.length < 10; index++) {
        // get char from index a = 1, y = 25
        const char = String.fromCharCode(96 + index);
        if (!structure.includes(char)) {
            potentialDup = false; // ensure potentialDup is reset
            // num must be calculated prior to pushes so same index is used if both down and across are found
            const num = words.length + 1 - numberOfDupes; 
            if (firstDown(structure, char)) {
                potentialDup = true;
                const name = num + 'd';
                words.push(createWordDown(name, char, structure));
            }
            if (firstAcross(structure, char)) {
                if (potentialDup) { // was a duplicate
                    numberOfDupes++;
                }
                const name = num + 'a';
                words.push(createWordAcross(name, char, structure));
            }
        }
    }
    let orderedWords = reorder(words);
    return orderedWords;
};

function reorder(words: Word[]) {
    let orderedWords = <Word[]>[];
    for (let i = 0; i < words.length; i++) {
        if (words[i].name.includes('a')) {
            orderedWords.push(words[i]);
        }
    }
    for (let i = 0; i < words.length; i++) {
        if (words[i].name.includes('d')) {
            orderedWords.push(words[i]);
        }
    }
    return orderedWords;
}

function firstDown(structure: string, char: string) {
    if (char <= 'e'){ // on first row
        return true;
    } else if (char <= 'y') { // on second row
        const aboveLetter = String.fromCharCode(char.charCodeAt(0) - 5);
        return structure.includes(aboveLetter); // if above letter was in structure, it was null
    } 
}

function firstAcross(structure: string, char: string) {
    let column = (char.charCodeAt(0) - 96) % 5;
    if (column === 0) { 
        column = 5;
    }
    for (let i = 1; i < column; i++) {
        const currentLetter = String.fromCharCode(char.charCodeAt(0) + i - column);
        if (!structure.includes(currentLetter)) {
            return false;
        }
    }
    return true;
}

function createWordDown(name: string, char: string, structure: string): Word  {
    let i = char.charCodeAt(0) - 96;
    let letters = 0;
    let characters = '';
    while (i <= 5*5){
        const currentLetter = String.fromCharCode(i+96);
        if (!structure.includes(currentLetter)) {
            letters++;
            characters += currentLetter;
        }
        i += 5;
    }
    return {name, length: letters, characters, known: "unknown"};
}

function createWordAcross(name: string, char: string, structure: string): Word {
    let i = char.charCodeAt(0) - 96;
    let row = i % 5;
    if (row === 0) { 
        row = 5;
    }
    let letters = 0;
    let characters = '';
    while (row <= 5){
        const currentLetter = String.fromCharCode(i+96);
        if (!structure.includes(currentLetter)) {
            letters++;
            characters += currentLetter;
        }
        i++;
        row++;
    }
    return {name, length: letters, characters, known: "unknown"};
}

