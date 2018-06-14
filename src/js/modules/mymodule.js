function insideFunction() {
    console.log("I'm here");
    return "some string";
}



export function runFunction() {
    return insideFunction();
}