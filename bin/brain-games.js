#!/usr/bin/env node
/* eslint-disable no-console */

import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May I have your name? ')
console.log(`Hello, ${userName}!`)

process.exit(0)
