console.log("I am test.js");

import * as plainjs from './modules/plainjs.js';


var someVal = plainjs.globalFunc("two");
console.log("last thing: " + someVal);

