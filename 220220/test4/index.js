let a = require('./a');
import { func as bFunc } from './b.js';
import { func as cFunc } from './c.js';

a.func();
bFunc();
cFunc();