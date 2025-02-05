# BookBinder

A web tool and JS module for creating bookmarklets from Javascript source.

# How to Use

## As command line program

`node bind.js < source.js > bookmarklet.js`

Where `source.js` is Javascript source, and `bookmarklet.js` is a bookmarklet one-liner.

## As a node module

Place the following snippit in your client code:

```js
import { bind } from "./bind.js";
const result = bind(jsSourceAsString);
console.log(result); // bookmarklet one-liner
```

## As a web app

Visit the web app [here](https://strawstack.github.io/BookBinder/)