#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import { rule, getCorrectAnswerAndQuestion } from '../src/games/progression-game';
import startGame from '../src/index.js';

startGame(rule, getCorrectAnswerAndQuestion);
