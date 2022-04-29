#!/usr/bin/env node
import { rule, getCalculate } from '../src/games/calc-game.js';
import startGame from '../src/index.js';

startGame(rule, getCalculate);
