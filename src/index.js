const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let temp = '';
    let str = '';
    let arr = [];
    let a = '';

    for (let i = 0; i < expr.length; i++) { // Separating an input string into separate characters
      if (i > 0 && i % 10 === 0) {
        arr.push(temp);
        temp = '';
      };
        temp += expr[i];
      
      if (i === expr.length - 1) {
        arr.push(temp);
        temp = '';
      }
    }

    for (let j = 0; j < arr.length; j++) {
      a = arr[j];
      for (let i = 0; i < 10; i += 2) { // Decode
        if (a[i] === '1' && a[i + 1] === '0') { // If a couple of symbols is '10'
          temp += '.';
        } else if (a[i] === '1' && a[i + 1] === '1') { // If a couple of symbols is '11'
          temp += '-';
        } else if (a[i] === '*' && a[i + 1] === '*') { // If a couple of symbols is '**'
          temp += '**';
        }
      };
      if (temp === '**********') {
        str += ' ';
        temp = '';
      } else {
        str += MORSE_TABLE[temp];
        temp = '';
      };    
    };
    return str;
}

module.exports = {
    decode
}