#!/usr/bin/env node

import runEngine from '../src/index.js'
import { description, generateRound } from '../src/game/progression.js'

runEngine(description, generateRound)
