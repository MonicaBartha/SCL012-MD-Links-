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

// lee los links
const readLinks = (file) => {
  let links = markdownLinkExtractor(fs.readFileSync(file).toString());
   links.forEach(function (link) {
      console.log(link);
    });
}
readLinks(file)
module.exports = readLinks;

// valida los links 
const linksFilter = (links) => {
	let validateLink = [];
	links.map((element) => {
		var prefix = element.href.substring(0, 4);
		if (prefix == 'http') {
			validateLink.push(element);
		}
	})
	return validateLink;
};


function linkStatus(links) {
	links.map((element) => {
		fetch(element.href)
			.then(response => {
				if (response.status == 200) {
					console.log(chalk.green('[✔]'), chalk.cyan(element.href), chalk.bgGreen(` ${response.status} ${response.statusText} `), chalk.yellow(element.text));
				} else {
					console.log(chalk.red('[X]'), chalk.cyan(element.href), chalk.bgRed(` ${response.status} ${response.statusText} `), chalk.white(element.text));
				}
			}).catch((error) => console.log(chalk.gray('[-]'), chalk.cyan(element.href), chalk.bgRed(` ${error.type} ${error.code} `), chalk.white(element.text)));
	})
}
