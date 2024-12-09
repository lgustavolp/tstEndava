export function countVowels(fullName) {
    const vowels = "aeiou";
    const lowerCaseName = fullName.toLowerCase();
    let totalVowels = 0;
    const vowelFrequency = {};

    for (let char of lowerCaseName) {
        if (vowels.includes(char)) {
            totalVowels++;
            vowelFrequency[char] = (vowelFrequency[char] || 0) + 1;
        }
    }

    const repeatedVowels = Object.values(vowelFrequency).filter(count => count > 1).length;

    return {
        totalVowels,
        repeatedVowels
    };
}