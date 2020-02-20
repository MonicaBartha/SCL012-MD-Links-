// "use strict";

const fs = require('fs');
const pathNode = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const chalk = require('chalk'); // libreria para colores
const marked = require('marked'); 
const fetch = require('node-fetch');
let file = process.argv[2];
file = pathNode.resolve(file);

/* ----- lee archivo md ----- */
const readMdFile = (path) => {
  return new Promise ((resolve, reject) => {
    if(pathNode.extname(path)!=('.md')) {
      reject("No valid path")  
  } else {
      fs.readFile(path,'utf-8', (err, data) => {
      if(err) {
          reject(err);
      } else {
        resolve(data);
      }
    })
   }
 })           
} 
readMdFile(file)
.then((data) => {
  let newMarked = new marked.Renderer();
  let linksArray = [];
  newMarked.link = function (href, title, text){
    linksArray.push({
      href: href,
      text: text,
      file:file
    });
  };
 marked(data, { newMarked: newMarked });
 let reslinksFilter = linksFilter(linksArray);
 linkStatus(reslinksFilter);
})
.catch(err => console.log(err))
exports.readMdFile = readMdFile

