const wrap = (line, maxLength) => {
  if (line.length < maxLength) return line;
  if (line === '') return line;
  const words = line.split(' ');
  // return words.join('\n');
  let result = '';
  let lineLength = 0;

  for (let i = 0; i < words.length; i++) {
    const currentWordLength = words[i].length;
    if (currentWordLength + lineLength < maxLength) {
      result += words[i] + ' ';
      lineLength += words[i].length + 1;
    } else {
      result += '\n' + words[i] + ' ';
      lineLength = words[i].length + 1;
    }
  }
  return result;
};

module.exports = wrap;

//string.prototype.indexOf or String.prototype.lastIndexOf

//'here is our test string' 5

//here \n  is
