// Process.argv is a property in node.js and it returns an array. The first two items of the array are the paths of node and the file that I am working on. The rest elements are arguments that I can pass from the command-line


// example from the terminal =>  node proccessargv.js Hello world


const whatIGetFromProcess = process.argv.slice(2);

console.log(whatIGetFromProcess);

console.log(whatIGetFromProcess.join(""));
