#!/usr/bin/env node

import runEngine from '../src/index.js';
import { description, generateRound } from '../src/game/even.js';

runEngine(description, generateRound);