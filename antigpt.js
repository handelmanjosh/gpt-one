
const fs = require("fs");

const unicode = {
  // Uppercase letters
  'A': ['А', 'Α'], // Cyrillic 'A', Greek Alpha
  'B': ['В', 'Β'], // Cyrillic 'Ve', Greek Beta
  'C': ['С', 'Ϲ'], // Cyrillic 'Es', Greek Lunate Sigma
  'D': [], // Cyrillic 'De', Greek Delta
  'E': ['Е', 'Ε'], // Cyrillic 'E', Greek Epsilon
  'F': [], // Greek Digamma, Coptic Sima
  'G': [], // Cyrillic 'Ghe', Coptic Gamma
  'H': ['Η', 'Н'], // Greek Eta, Cyrillic 'En'
  'I': ['І', 'Ι'], // Cyrillic 'I', Greek Iota
  'J': ['Ј'], // Cyrillic 'Je', Coptic Ro
  'K': ['Κ', 'К'], // Greek Kappa, Cyrillic 'Ka'
  'L': ['Լ'], // Cyrillic 'El', Coptic Laula
  'M': ['Μ', 'М'], // Greek Mu, Cyrillic 'Em'
  'N': ['Ν'], // Greek Nu, Cyrillic 'En'
  'O': ['О', 'Ο'], // Cyrillic 'O', Greek Omicron
  'P': ['Ρ', 'Р'], // Greek Rho, Cyrillic 'Er'
  'Q': [], // No similar character
  'R': [], // Cherokee letter R, Coptic Ro
  'S': ['Ѕ'], // Cyrillic 'Dze', Coptic Sima
  'T': ['Τ', 'Т'], // Greek Tau, Cyrillic 'Te'
  'U': [], // Armenian 'U', Coptic Ua
  'V': [], // Cyrillic 'Izhitsa', Coptic Vida
  'W': [], // Cyrillic 'Komi Dje', Coptic 
  'X': ['Χ', 'Х'], // Greek Chi, Cyrillic 'Ha'
  'Y': ['Υ', 'Ү'], // Greek Upsilon, Cyrillic 'Ue'
  'Z': ['Ζ'], // Greek Zeta, Cyrillic 'Ze'

  // Lowercase letters
  'a': ['а'], // Cyrillic 'a', Greek alpha
  'b': [], // Cyrillic 've', Greek beta
  'c': ['с', 'ϲ'], // Cyrillic 'es', Greek lunate sigma
  'd': [], // Cyrillic 'de', Greek delta
  'e': ['е'], // Cyrillic 'e', Greek epsilon
  'f': [], // Phonetic symbol, Latin small letter f with hook
  'g': ['ɡ'], // Latin small letter script g, Phonetic symbol
  'h': ['һ'], // Cyrillic 'shha', Greek eta
  'i': ['і'], // Cyrillic 'i', Greek iota
  'j': ['ј', 'ϳ'], // Cyrillic 'je', Greek yot
  'k': [], // Greek kappa, Cyrillic 'ka'
  'l': [], // Cyrillic 'palochka', Greek lambda
  'm': [], // Cyrillic 'em', Greek mu
  'n': [], // Cyrillic 'pe', Greek nu
  'o': ['ο', 'о'], // Greek omicron, Cyrillic 'o'
  'p': ['р'], // Greek rho, Cyrillic 'er'
  'q': [], // No similar character
  'r': [], // Cyrillic 'ghe', Coptic ro
  's': ['ѕ'], // Cyrillic 'dze', Coptic sima
}
const whitespaces = [
    '\u0020', // Space
    '\u00A0', // No-break space
    '\u1680', // Ogham space mark
    '\u2000', // En quad
    '\u2001', // Em quad
    '\u2002', // En space
    '\u2003', // Em space
    '\u2004', // Three-per-em space
    '\u2005', // Four-per-em space
    '\u2006', // Six-per-em space
    '\u2007', // Figure space
    '\u2008', // Punctuation space
    '\u2009', // Thin space
    '\u200A', // Hair space
    '\u202F', // Narrow no-break space
    '\u205F', // Medium mathematical space
]
function main() {
        const input = fs.readFileSync("input.txt", 'utf8');
        let result = "";
        for (let i = 0; i < input.length; i++) {
            switch(input[i]) {
                case " ":
                    result += whitespaces[1];
                    break;
                default:
                    const options = unicode[input[i]];
                    if (options && options.length > 0) {
                        result += options[Math.floor(Math.random() * options.length)];
                    } else {
                        result += input[i];
                    }
                    break;
            }
        }
        fs.writeFileSync(`output.txt`, result);
}

main();
