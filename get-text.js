#!/usr/bin/node
var fs = require('fs');

function pad(n) {
    return (n < 10 ? '0' : '') + n
}

let time     = new Date();
let jsonfile = `times/${pad(time.getHours())}_${pad(time.getMinutes())}.json`;
let quotes   = JSON.parse(fs.readFileSync(__dirname + "/" + jsonfile, 'utf8'));

let count = quotes.length;
let q     = quotes[Math.floor(Math.random() * count)];

let ansi_reset  = "\x1b[0m";
let ansi_bright = "\x1b[1m";
let ansi_dim    = "\x1b[2m";

console.log(ansi_dim          + 
            q.quote_first     + 
            ansi_reset        + 
            q.quote_time_case + 
            ansi_dim          +
            q.quote_last      +
            ansi_reset);
            
console.log(`${ansi_dim} ~ \n${q.title} ~ ${q.author}${ansi_reset}`);
