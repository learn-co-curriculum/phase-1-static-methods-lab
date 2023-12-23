class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(str) {
    const words = str.split(' ');
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });

    return titleizedWords.join(' ');
  }
}
console.log(Formatter.capitalize('hello')); // Output: "Hello"
console.log(Formatter.sanitize("h3ll0-w0rld!")); // Output: "h3ll0-w0rld"
console.log(Formatter.titleize("the quick brown fox jumps over the lazy dog")); // Output: "The Quick Brown Fox Jumps over the Lazy Dog"
