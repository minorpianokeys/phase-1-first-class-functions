function receivesAFunction(cb) {
    return cb();
}

receivesAFunction(function () {return `Hello!`})


function returnsANamedFunction() {
    return function sayHello() {
        console.log('Hello!');
    }
}


function returnsAnAnonymousFunction() {
    return function() {
        console.log('Hello!')
    }
}



