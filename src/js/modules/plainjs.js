console.log("some js.. should be updating");


function globalFunc() {
    console.log("can I be called?");

    return 1234;
}


var thing=globalFunc();
console.log(thing);


export {globalFunc};