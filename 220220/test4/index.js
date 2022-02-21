let a = require('./a.js')
import { func as bFunc } from './b.js';
import { func as cFunc } from './c.js';

a.func();
bFunc();
cFunc();