class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9 '-]/g, "");
  }

  static titleize(str) {
    const exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    const words = str.split(" ");
    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });
    return titleizedWords.join(" ");
  }
}

// Testing the static methods
console.log(Formatter.capitalize("hello")); // 'Hello'
console.log(Formatter.sanitize("Hello, I'm a string!")); // "Hello I'm a string"
console.log(Formatter.titleize("the quick brown fox jumps over the lazy dog")); // 'The Quick Brown Fox Jumps over the Lazy Dog'
