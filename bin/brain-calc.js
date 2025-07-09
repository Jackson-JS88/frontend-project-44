#!/usr/bin/env node

import runEngine from '../src/index.js';
import { description, generateRound } from '../src/game/calc.js';

runEngine(description, generateRound);
