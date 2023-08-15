class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9\s'-]/g, '');
  }

  static titleize(str) {
    const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');

    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !smallWords.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });

    return titleizedWords.join(' ');
  }
}

// Testing the methods
console.log(Formatter.capitalize('hello')); // Output: "Hello"
console.log(Formatter.sanitize("hello$#123")); // Output: "hello123"
console.log(Formatter.titleize("the quick brown fox")); // Output: "The Quick Brown Fox"
