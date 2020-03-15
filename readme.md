# Bootstrap/JQuery Portfolio

A simple Project which uses bootstrap, JQuery and XMLHttpRequest

It's main feature is that it can represent dynamically every image stored in the img/portfolio and img/team directories. If any image is added in these folders it will be represented automatically in the dom with it's name.

## Installation

You have to install the dependencies first. Run:

```bash
npm install
```

## Build

To build the project run:

```bash
npm run build
```

To build and watch for changes run:

```bash
npm run build-watch
```

## Technologies used

Bootstrap 4\
XMLHttpRequest\
JQuery Dom manipulation\
jQuery AJAX\
JavaScript Promises\
Sass\
JS Map Objects\
PulltoRefreshJS

## fetchFiles(dir, fileType)

This function uses XMLHttpRequest objects to fetch all the files of the specific given fileType which are stored in the relative dir path

It returns a promise which can be resolved to an array of objects.

Each object has 2 properties. The name of the file and the its url.

In this example it is used to fetch asynchronously all the images in the directories img/portfolio and img/team

## License

[MIT](https://choosealicense.com/licenses/mit/)
