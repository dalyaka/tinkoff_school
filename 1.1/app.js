var firstWord = prompt('Enter first word', '');
var secondWord = prompt('Enter second word', '');

function sortWord(word) {
  return word.toLowerCase().split('').sort().join('');
}

const areWordsAnagrams = sortWord(firstWord) === sortWord(secondWord);

alert(areWordsAnagrams ? 'They are anagrams' : 'Soryan');
