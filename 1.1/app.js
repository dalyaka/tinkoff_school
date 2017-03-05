var firstWord = prompt('Enter first word', '');
var secondWord = prompt('Enter second word', '');

function sortWord(word) {
  if (word) {
    return word.toLowerCase().split('').sort().join('');
  }
  return '';
}

var areWordsAnagrams = sortWord(firstWord) === sortWord(secondWord);

alert(areWordsAnagrams ? 'They are anagrams' : 'Soryan');
