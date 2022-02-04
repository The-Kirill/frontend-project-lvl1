#!/usr/bin/env node
import { rule, getCorrectAnswerAndQuestion } from '../src/games/progression-game.js';
import startGame from '../src/index.js';

startGame(rule, getCorrectAnswerAndQuestion);
