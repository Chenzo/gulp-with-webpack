console.log("I am modules/plain.js");


function globalFunc(aString) {
    console.log("globalFunc called");

    return "A strng from globalFunc: " + aString;
}


var thing=globalFunc("one");
console.log(thing);


export {globalFunc};