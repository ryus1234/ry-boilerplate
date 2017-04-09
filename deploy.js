#!/usr/bin/env node
/**
 * deploy.js
 */

const cpx = require('cpx')
const path = require('path')

const jsFiles = ['main.js']
const deployPath = path.resolve(__dirname, 'deploy')

cpx.copy('public/css/main.css', `${deployPath}/css`, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Done Deploy Stylesheets.')
  }
})

jsFiles.map( (file) => {
  cpx.copy(`public/js/${file}`, `${deployPath}/js`, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`Done Deploy ${file}.`)
    }
  })
})

cpx.copy('public/img/**/*.{png,jpg}', `${deployPath}/img`, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Done Deploy All Images.')
  }
})
