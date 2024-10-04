import {  Word } from "./AddPuzzle"

type WordInfoProps = {
    words: Word[],
    setWords: (words: Word[]) => void;
    currentWord: number,
    setCurrentWord: (index: number) => void;
}

const WordInfoInserter = ({words, setWords, currentWord, setCurrentWord}: WordInfoProps) => {

    const handleKnown = (known: "yes" | "with_letters" | "no" | "unknown") => {
        const newWords = [...words];
        newWords[currentWord].known = known;
        setWords(newWords);
        if(currentWord < words.length - 1) {
            setCurrentWord(currentWord + 1);
        }
    };
    
    return (
        <div className="flex flex-wrap gap-2">
            {words.map((word, index) => {
                let color = currentWord === index ? 'bg-green-300' : 'bg-gray-300';
                if (word.known !== 'unknown') {
                    color = 'bg-green-500';
                }
                return (
                    <button key={word.name} className={color + ' px-4 py-2 rounded-md hover:bg-green-300'} onClick={() => setCurrentWord(index)}>
                        {word.name}
                    </button>
                )
            })}
            <button className={`${words[currentWord]?.known === 'yes' ? 'bg-green-500' : 'bg-gray-300'} px-4 py-2 rounded-md hover:bg-green-300`} onClick={() => handleKnown('yes')}>Knew Immediately</button>
            <button className={`${words[currentWord]?.known === 'with_letters' ? 'bg-yellow-500' : 'bg-gray-300'} px-4 py-2 rounded-md hover:bg-yellow-300`} onClick={() => handleKnown('with_letters')}>Knew with Letters</button>
            <button className={`${words[currentWord]?.known === 'no' ? 'bg-red-500' : 'bg-gray-300'} px-4 py-2 rounded-md hover:bg-red-300`} onClick={() => handleKnown('no')}>Never Knew</button>
            
        </div>
    );
}

export default WordInfoInserter;