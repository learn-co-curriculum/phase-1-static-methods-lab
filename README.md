# Static Methods Lab

## Learning Goals

- Write JavaScript `static` methods

## Introduction

In this lab, we are going to practice writing `static` methods. In JavaScript,
_static methods_ aren't called on on instances of a class, but are called
directly on a class itself.

### Declaring a Static Method

To declare a `static` method, we write the word `static` inside the class
declaration directly before a method's name:

```js
class StaticMethod {
  static methodName() {
    console.log('My method is static!');
  }
}
```

Because `static` methods are called directly on the classes themselves, `static`
methods have no access to data stored in specific objects.

### Calling a `Static` Method

As the `static` method is operating on the class, you call the `static` method
directly on the class.

```js
ClassName.methodName();
// Calls the method explicitly on the class name itself and returns the `static` value
```

For `static` methods, `this` references the class. This means that you can call
a `static` method from within another `static` method of the same class using
`this`.

## Instructions

You are going to write three `static` methods in the `Formatter` class. Write
your code in the `index.js` file. Let the tests guide you through the process.

1. Write a method `static capitalize` that takes in a string and capitalizes the
   first letter.
2. Write a method `static sanitize` that takes in a string and removes all
   non-alphanumeric characters except for dashes, single quotes and spaces.
3. Write a method `static titleize` that takes in a string and capitalizes all
   words in a sentence except the, a, an, but, of, and, for, at, by, and from;
   and always capitalizes the first word.

## Conclusion

`Static` methods are useful ways to create utility methods for your data. If you
have operation that you need do perform on a batch of data (say, capitalize all
of the headlines on your website, as above), `static` methods are your go-to
tool. Since they are called on the class but don't have access to individual
objects, they are somewhat limited in their scope, but can be very powerful in
the correct application.

## Resources

- [Static Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Static_methods)
