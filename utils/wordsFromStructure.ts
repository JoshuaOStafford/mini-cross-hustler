

function wordsFromTheStructure(structure: string) {
    let words = <string[]>[];
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
                words.push(num + 'd');
            }
            if (firstAcross(structure, char)) {
                if (potentialDup) { // was a duplicate
                    numberOfDupes++;
                }
                words.push(num + 'a');
            }
        }
    }
    return words;
};

function firstDown(structure: string, char: string) {
    if (char <= 'e'){ // on first row
        return true;
    } else if (char <= 'y') { // on second row
        const aboveLetter = String.fromCharCode(char.charCodeAt(0) - 5);
        return structure.includes(aboveLetter); // if above letter was in structure, it was null
    } 
}

function firstAcross(structure: string, char: string) {
    const column = (char.charCodeAt(0) - 96) % 5;
    for (let i = 1; i < column; i++) {
        const currentLetter = String.fromCharCode(char.charCodeAt(0) + i - column);
        if (!structure.includes(currentLetter)) {
            return false;
        }
    }
    return true;
}

module.exports = wordsFromTheStructure;
