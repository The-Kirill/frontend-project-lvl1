#!/usr/bin/env node

import { rule, getCorrectAnswerAndQuestion } from '../src/games/prime-game.js';
import startGame from '../src/index.js';

startGame(rule, getCorrectAnswerAndQuestion);
