#!/usr/bin/node
const fs = require('fs');

function pad(n) {
    return (n < 10 ? '0' : '') + n
}

const time     = new Date();
const hour     = pad(time.getHours());
const minute   = pad(time.getMinutes());

const jsonfile = `times/${hour}_${minute}.json`;
const quotes   = JSON.parse(fs.readFileSync(__dirname + "/" + jsonfile, 'utf8'));

const count = quotes.length;
const q     = quotes[Math.floor(Math.random() * count)];

const ansi_reset  = "\x1b[0m";
const ansi_bright = "\x1b[1m";
const ansi_dim    = "\x1b[2m";

console.log(ansi_dim          + 
            q.quote_first     + 
            ansi_reset        + 
            q.quote_time_case + 
            ansi_dim          +
            q.quote_last      +
            ansi_reset);
            
console.log(`${ansi_dim} ~ \n${q.title} ~ ${q.author}${ansi_reset}`);
