#!/usr/bin/env node

const ejs = require('ejs'),
  fs = require('fs-extra'),
  chokidar = require('chokidar')

const DEBUG = !(process.env.NODE_ENV === 'production')

const targetHTML = [
  'index.html',
  'top.html',
]

const compileHTML = () => {
  targetHTML.map((html) => {
    ejs.renderFile(__dirname + `/src/${ html }`, {}, (err, res) => {
      if (err) { 
        console.log(err) 
      }

      fs.outputFile(__dirname + `/public/${ html }`, res, (err) => {
        if (err) { 
          console.log(err) 
          return false 
        }
        console.log(`Compiled: ${ html }`)
      })
    })
  })
}

if (DEBUG) {
  chokidar.watch(__dirname + '/src/**/*.{html, ejs}', {}).on('all', (event, path) => {
    if (event === 'change') { compileHTML() }
    console.log(event, path)
  })
  compileHTML()
} else {
  compileHTML()
}