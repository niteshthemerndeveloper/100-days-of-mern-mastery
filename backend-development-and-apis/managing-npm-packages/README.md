# 1. Managing NPM Packages

- What is NPM?
  **NPM** is a command line tool to `install`, `create`, and `share` packages of _JavaScript_ code written for Nodejs.

- How to install and use open source packages available on NPM?

- How to work with the `package.json` file?

- How to manage your installed dependencies?

The `package.json` file is the center of any Node.js project or npm package.

It is similar to how the `<head>` section of an HTML document describes the content of a webpage.

> There's only a single `JSON` object where information is stored in `key-value` pairs.

**Required Fields in `package.json`**

1. Name: what this project can be called?
2. Version: what is the current version of the project?

> Pro Tip: The value of `author` key specifies who created the project.

_An object is recommended for bigger projects, but if you are building it alone then a simple string that has your name is enough._

> "author": "nitesh sharma"

```diff npm
+ "author": "nitesh sharma"
- 'author': 'nitesh sharma'
```

> Make sure you use `"double quotes"` and not single quotes in JSON files.

> Best,

> Nitesh
